/**
 * 100-Day Bilateral Exercise Plan Curriculum
 * 100% Bilateral Programming: Workout A ➔ Workout B ➔ Workout C
 * Includes low-res inline thumbnails and direct video demonstration links.
 */

const WORKOUT_TEMPLATES = {
  A: {
    code: "Workout A",
    title: "Achilles Tendon & Ankle Opener",
    description: "Decompresses both ankles (plantarflexion), loads Achilles on flat ground, and opens hips.",
    exercises: [
      {
        name: "World's Greatest Stretch (Warm-up)",
        protocol: "5 reps / side",
        cue: "Step into deep lunge, alternating evenly.",
        thumb: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/shorts/PE-UuERblwA"
      },
      {
        name: "Bilateral Flat-Ground Isometric Heel Holds",
        protocol: "4 sets × 40 sec",
        cue: "Rise onto balls of feet; hold without letting ankles roll outward.",
        thumb: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=isometric+calf+raise+hold+exercise"
      },
      {
        name: "Supported Bilateral Quadruped Shin Opener",
        protocol: "3 sets × 30 sec",
        cue: "Kneel with toes flat behind; gently sit back onto heels to tolerance.",
        thumb: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=quadruped+plantar+shin+stretch"
      },
      {
        name: "Bilateral 90/90 Hip Switches",
        protocol: "8 reps / side",
        cue: "Smoothly rotate knees side-to-side, hinging chest over lead shin.",
        thumb: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=90+90+hip+switches+mobility"
      },
      {
        name: "Bilateral Glute Bridges with Squeeze",
        protocol: "12 reps (2s hold)",
        cue: "Drive through heels evenly to wake up glutes and unload lumbar spine.",
        thumb: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=glute+bridge+form+cues"
      },
      {
        name: "Prone Cobra / Extension Press-up (Cool-down)",
        protocol: "5 deep breaths",
        cue: "Keep hips pressed down to decompress lumbar spine.",
        thumb: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=prone+cobra+exercise"
      }
    ]
  },
  B: {
    code: "Workout B",
    title: "Snowboard Legs & Groin Armor",
    description: "Builds equal lateral strength, adductor flexibility, and quad endurance for slopes.",
    exercises: [
      {
        name: "Deep Squat Pry (Warm-up)",
        protocol: "60 sec total",
        cue: "Hold bottom of bodyweight squat; use elbows to gently push knees out.",
        thumb: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=deep+squat+pry+exercise"
      },
      {
        name: "Alternating Cossack Squats",
        protocol: "8 reps / leg",
        cue: "Shift weight smoothly from left to right lateral lunge, heels grounded.",
        thumb: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=cossack+squats+exercise+form"
      },
      {
        name: "Bilateral Bent-Knee Calf Raises",
        protocol: "15 reps (3s down)",
        cue: "Bend knees 20° on flat ground; raise and lower heels simultaneously.",
        thumb: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=bent+knee+calf+raises+soleus"
      },
      {
        name: "Kettlebell Goblet Squat with Pause",
        protocol: "10 reps (3s pause)",
        cue: "Hold KB at chest; squat symmetrically with equal weight on both feet.",
        thumb: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=kettlebell+goblet+squat+pause"
      },
      {
        name: "Circuit Protocol (Exercises 1–3)",
        protocol: "2–3 rounds (~11 min)",
        cue: "Repeat Cossacks, Bent-Knee Raises, and Goblet Squats with controlled tempo.",
        thumb: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=circuit+training+tempo+control"
      },
      {
        name: "Bilateral Frog Stretch Rock-backs (Cool-down)",
        protocol: "60 sec total",
        cue: "Widen knees, feet turned out; gently rock hips back to stretch groins.",
        thumb: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=frog+stretch+rock+backs"
      }
    ]
  },
  C: {
    code: "Workout C",
    title: "Core Armor & Posterior Chain",
    description: "Strengthens posterior chain and rotational stability without twisting lower back.",
    exercises: [
      {
        name: "Cat-Cow to Alternating Bird-Dog (Warm-up)",
        protocol: "6 reps / side",
        cue: "Reach opposite arm/leg straight out; brace spine for 2 seconds.",
        thumb: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/watch?v=k2azbhhuKuM"
      },
      {
        name: "KB Bilateral Romanian Deadlifts / Swings",
        protocol: "12–15 reps",
        cue: "Hinge at hips with feet shoulder-width; drive through both feet equally.",
        thumb: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/watch?v=ERZzCKpjEDg"
      },
      {
        name: "Copenhagen Plank (Short Lever)",
        protocol: "20–30s / side",
        cue: "Rest top knee on couch or bench; match time equally on both sides.",
        thumb: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/watch?v=5cTh21BfXzI"
      },
      {
        name: "Standing Kettlebell Halos",
        protocol: "6 CW / 6 CCW",
        cue: "Keep hips square and ribs pinned down while circling kettlebell.",
        thumb: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/watch?v=YGZWa5be1hk"
      },
      {
        name: "Circuit Protocol (Exercises 1–3)",
        protocol: "2–3 rounds (~11 min)",
        cue: "Repeat RDLs/Swings, Copenhagen Planks, and Halos.",
        thumb: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=kettlebell+core+circuit"
      },
      {
        name: "Bilateral Supine Hamstring / Calf Floss (Cool-down)",
        protocol: "45 sec / leg",
        cue: "Pull leg up with towel; gently pump ankle back and forth.",
        thumb: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=120&h=120&q=60",
        videoUrl: "https://www.youtube.com/results?search_query=sciatic+nerve+hamstring+floss"
      }
    ]
  }
};

const ROTATION = ["A", "B", "C"];
const TOTAL_DAYS = 100;

function phaseForDay(day) {
  if (day > 70) return "Phase 3: Alpine Endurance";
  if (day > 30) return "Phase 2: Snowboard Specificity";
  return "Phase 1: Mobilize & Reset";
}

window.WORKOUT_STACK = Array.from({ length: TOTAL_DAYS }, (_, i) => {
  const day = i + 1;
  const { code, title, description, exercises } = WORKOUT_TEMPLATES[ROTATION[i % ROTATION.length]];
  return { day, rotationCode: code, phase: phaseForDay(day), title, description, exercises };
});
