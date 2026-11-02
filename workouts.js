/**
 * 100-Day Bilateral Workout Plan & Periodization Data
 * 
 * To modify exercises, rep schemes, or cues, simply edit the templates below.
 */

const WORKOUT_TEMPLATES = {
  A: {
    code: "Workout A",
    title: "Achilles Tendon & Ankle Opener",
    description: "Decompresses both ankles (plantarflexion), loads Achilles on flat ground, and opens hips.",
    exercises: [
      { name: "World's Greatest Stretch (Warm-up)", protocol: "5 reps / side", cue: "Step into deep lunge, alternating evenly." },
      { name: "Bilateral Flat-Ground Isometric Heel Holds", protocol: "4 sets × 40 sec", cue: "Rise onto balls of feet; hold without letting ankles roll outward." },
      { name: "Supported Bilateral Quadruped Shin Opener", protocol: "3 sets × 30 sec", cue: "Kneel with toes flat behind; sit back onto heels to tolerance." },
      { name: "Bilateral 90/90 Hip Switches", protocol: "8 reps / side", cue: "Smoothly rotate knees side-to-side, hinging chest over lead shin." },
      { name: "Bilateral Glute Bridges with Squeeze", protocol: "12 reps (2s hold)", cue: "Drive through heels evenly to wake up glutes and unload lumbar spine." },
      { name: "Prone Cobra / Extension Press-up (Cool-down)", protocol: "5 deep breaths", cue: "Keep hips pressed down to decompress lumbar spine." }
    ]
  },
  B: {
    code: "Workout B",
    title: "Snowboard Legs & Groin Armor",
    description: "Builds equal lateral strength, adductor flexibility, and quad endurance for slopes.",
    exercises: [
      { name: "Deep Squat Pry (Warm-up)", protocol: "60 sec total", cue: "Hold bottom of bodyweight squat; use elbows to gently push knees out." },
      { name: "Alternating Cossack Squats", protocol: "8 reps / leg", cue: "Shift weight smoothly from left to right lateral lunge, heels grounded." },
      { name: "Bilateral Bent-Knee Calf Raises", protocol: "15 reps (3s down)", cue: "Bend knees 20° on flat ground; raise and lower heels simultaneously." },
      { name: "Kettlebell Goblet Squat with Pause", protocol: "10 reps (3s pause)", cue: "Hold KB at chest; squat symmetrically with equal weight on both feet." },
      { name: "Circuit Note", protocol: "2–3 rounds (~11 min)", cue: "Repeat Cossacks, Bent-Knee Raises, and Goblet Squats." },
      { name: "Bilateral Frog Stretch Rock-backs (Cool-down)", protocol: "60 sec total", cue: "Widen knees, feet turned out; gently rock hips back to stretch groins." }
    ]
  },
  C: {
    code: "Workout C",
    title: "Core Armor & Posterior Chain",
    description: "Strengthens posterior chain and rotational stability without twisting lower back.",
    exercises: [
      { name: "Cat-Cow to Alternating Bird-Dog (Warm-up)", protocol: "6 reps / side", cue: "Reach opposite arm/leg straight out; brace spine for 2 seconds." },
      { name: "KB Bilateral Romanian Deadlifts / Swings", protocol: "12–15 reps", cue: "Hinge at hips with feet shoulder-width; drive through both feet equally." },
      { name: "Copenhagen Plank (Short Lever)", protocol: "20–30s / side", cue: "Rest top knee on couch or bench; match time equally on both sides." },
      { name: "Standing Kettlebell Halos", protocol: "6 CW / 6 CCW", cue: "Keep hips square and ribs pinned down while circling kettlebell." },
      { name: "Circuit Note", protocol: "2–3 rounds (~11 min)", cue: "Repeat RDLs/Swings, Copenhagen Planks, and Halos." },
      { name: "Bilateral Supine Hamstring / Calf Floss (Cool-down)", protocol: "45 sec / leg", cue: "Pull leg up with towel; gently pump ankle back and forth." }
    ]
  }
};

/**
 * Builds the full 100-session sequential stack rotating A -> B -> C
 */
const ROTATION = ["A", "B", "C"];
const WORKOUT_STACK = [];

for (let day = 1; day <= 100; day++) {
  const type = ROTATION[(day - 1) % 3];
  const template = WORKOUT_TEMPLATES[type];

  let phaseName = "";
  if (day <= 30) {
    phaseName = "Phase 1: Mobilize & Reset";
  } else if (day <= 70) {
    phaseName = "Phase 2: Snowboard Specificity";
  } else {
    phaseName = "Phase 3: Alpine Endurance";
  }

  WORKOUT_STACK.push({
    day: day,
    rotationCode: template.code,
    phase: phaseName,
    title: template.title,
    description: template.description,
    exercises: template.exercises
  });
}
