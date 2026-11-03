/**
 * Minimal cross-device sync using a private GitHub Gist as a tiny JSON store.
 *
 * - Each device stores a GitHub token (gist scope only) in localStorage.
 * - On first connect we look for an existing gist containing FILE_NAME, or create one.
 * - Conflicts: last write wins, using the state's `updatedAt` timestamp.
 *
 * Not secure by design: the token lives in the browser and a setup link can carry it.
 * Never commit the token to this repo (GitHub would auto-revoke it).
 */
(function () {
  const CFG_KEY = "workout_sync_cfg";
  const FILE_NAME = "workout-progress.json";
  const API = "https://api.github.com";

  let cfg = readCfg();
  let pushTimer = null;
  let listener = () => {};

  function readCfg() {
    try { return JSON.parse(localStorage.getItem(CFG_KEY)) || {}; } catch (e) { return {}; }
  }
  function writeCfg() {
    localStorage.setItem(CFG_KEY, JSON.stringify(cfg));
  }
  function setStatus(text, kind = "") {
    cfg.lastStatus = text;
    listener({ text, kind, connected: !!cfg.token });
  }

  async function gh(path, options = {}) {
    const res = await fetch(API + path, {
      ...options,
      cache: "no-store",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${cfg.token}`,
        ...(options.body ? { "Content-Type": "application/json" } : {})
      }
    });
    if (!res.ok) throw new Error(res.status === 401 ? "Token rejected (401)" : `GitHub error ${res.status}`);
    return res.json();
  }

  async function findOrCreateGist(state) {
    const gists = await gh("/gists?per_page=100");
    const existing = gists.find(g => g.files && g.files[FILE_NAME]);
    if (existing) return existing.id;
    const created = await gh("/gists", {
      method: "POST",
      body: JSON.stringify({
        description: "100-Day Workout Stack progress",
        public: false,
        files: { [FILE_NAME]: { content: JSON.stringify(state, null, 2) } }
      })
    });
    return created.id;
  }

  async function fetchRemote() {
    const gist = await gh(`/gists/${cfg.gistId}`);
    const file = gist.files[FILE_NAME];
    return file ? JSON.parse(file.content) : null;
  }

  async function pushNow(state) {
    await gh(`/gists/${cfg.gistId}`, {
      method: "PATCH",
      body: JSON.stringify({ files: { [FILE_NAME]: { content: JSON.stringify(state, null, 2) } } })
    });
    setStatus(`Synced ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`, "ok");
  }

  const WorkoutSync = {
    isConnected: () => !!cfg.token,
    onStatus(fn) { listener = fn; },

    /** Save a token (from the form or a setup link) and locate/create the gist. */
    async connect(token, getState) {
      cfg = { token: token.trim() };
      writeCfg();
      setStatus("Connecting…");
      try {
        cfg.gistId = await findOrCreateGist(getState());
        writeCfg();
        return true;
      } catch (e) {
        cfg = {};
        writeCfg();
        setStatus(e.message, "error");
        return false;
      }
    },

    disconnect() {
      cfg = {};
      writeCfg();
      setStatus("Not connected");
    },

    /**
     * Compare remote with local. Returns the remote state if it's newer (caller should adopt it);
     * pushes local if local is newer.
     */
    async pull(localState) {
      if (!cfg.token || !cfg.gistId) return null;
      setStatus("Checking…");
      try {
        const remote = await fetchRemote();
        const remoteTime = (remote && remote.updatedAt) || 0;
        const localTime = localState.updatedAt || 0;
        if (remoteTime > localTime) {
          setStatus("Pulled latest progress", "ok");
          return remote;
        }
        if (localTime > remoteTime) await pushNow(localState);
        else setStatus("Up to date", "ok");
      } catch (e) {
        setStatus(e.message, "error");
      }
      return null;
    },

    /** Debounced push after a local change. */
    schedulePush(state) {
      if (!cfg.token || !cfg.gistId) return;
      clearTimeout(pushTimer);
      setStatus("Saving…");
      pushTimer = setTimeout(() => pushNow(state).catch(e => setStatus(e.message, "error")), 800);
    },

    /** A link that sets up sync on another device in one tap. */
    setupLink() {
      return `${location.origin}${location.pathname}#sync=${encodeURIComponent(cfg.token || "")}`;
    },

    /** If the page was opened with #sync=<token>, consume it and strip it from the URL. */
    tokenFromUrl() {
      const m = location.hash.match(/^#sync=(.+)$/);
      if (!m) return null;
      history.replaceState(null, "", location.pathname + location.search);
      return decodeURIComponent(m[1]);
    }
  };

  window.WorkoutSync = WorkoutSync;
})();
