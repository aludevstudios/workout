/**
 * 100-Day Bilateral Exercise Plan Curriculum
 * Includes curated online video and animated demonstration links
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
        media: {
          type: "video",
          url: "https://www.youtube.com/shorts/PE-UuERblwA",
          label: "▶ Video Demo"
        }
      },
      {
        name: "Bilateral Flat-Ground Isometric Heel Holds",
        protocol: "4 sets × 40 sec",
        cue: "Rise onto balls of feet; hold without letting ankles roll outward."
      },
      {
        name: "Supported Bilateral Quadruped Shin Opener",
        protocol: "3 sets × 30 sec",
        cue: "Kneel with toes flat behind; gently sit back onto heels to tolerance."
      },
      {
        name: "Bilateral 90/90 Hip Switches",
        protocol: "8 reps / side",
        cue: "Smoothly rotate knees side-to-side, hinging chest over lead shin."
      },
      {
        name: "Bilateral Glute Bridges with Squeeze",
        protocol: "12 reps (2s hold)",
        cue: "Drive through heels evenly to wake up glutes and unload lumbar spine.",
        media: {
          type: "gif",
          url: "https://tenor.com/view/glute-bridge-exercise-workout-gif-16591507",
          label: "👁 Animated Guide"
        }
      },
      {
        name: "Prone Cobra / Extension Press-up (Cool-down)",
        protocol: "5 deep breaths",
        cue: "Keep hips pressed down to decompress lumbar spine."
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
        cue: "Hold bottom of bodyweight squat; use elbows to gently push knees out."
      },
      {
        name: "Alternating Cossack Squats",
        protocol: "8 reps / leg",
        cue: "Shift weight smoothly from left to right lateral lunge, heels grounded.",
        media: {
          type: "gif",
          url: "https://gymvisual.com/animated-gifs/8130-weighted-cossack-squats-male.html",
          label: "👁 Animated Guide"
        }
      },
      {
        name: "Bilateral Bent-Knee Calf Raises",
        protocol: "15 reps (3s down)",
        cue: "Bend knees 20° on flat ground; raise and lower heels simultaneously."
      },
      {
        name: "Kettlebell Goblet Squat with Pause",
        protocol: "10 reps (3s pause)",
        cue: "Hold KB at chest; squat symmetrically with equal weight on both feet.",
        media: {
          type: "gif",
          url: "https://gymvisual.com/animated-gifs/2032-kettlebell-goblet-squat.html",
          label: "👁 Animated Guide"
        }
      },
      {
        name: "Circuit Protocol",
        protocol: "2–3 rounds (~11 min)",
        cue: "Repeat Cossacks, Bent-Knee Raises, and Goblet Squats."
      },
      {
        name: "Bilateral Frog Stretch Rock-backs (Cool-down)",
        protocol: "60 sec total",
        cue: "Widen knees, feet turned out; gently rock hips back to stretch groins."
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
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=k2azbhhuKuM",
          label: "▶ Video Demo"
        }
      },
      {
        name: "KB Bilateral Romanian Deadlifts / Swings",
        protocol: "12–15 reps",
        cue: "Hinge at hips with feet shoulder-width; drive through both feet equally.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=ERZzCKpjEDg",
          label: "▶ Video Demo"
        }
      },
      {
        name: "Copenhagen Plank (Short Lever)",
        protocol: "20–30s / side",
        cue: "Rest top knee on couch or bench; match time equally on both sides.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=5cTh21BfXzI",
          label: "▶ Video Demo"
        }
      },
      {
        name: "Standing Kettlebell Halos",
        protocol: "6 CW / 6 CCW",
        cue: "Keep hips square and ribs pinned down while circling kettlebell.",
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=YGZWa5be1hk",
          label: "▶ Video Demo"
        }
      },
      {
        name: "Circuit Protocol",
        protocol: "2–3 rounds (~11 min)",
        cue: "Repeat RDLs/Swings, Copenhagen Planks, and Halos."
      },
      {
        name: "Bilateral Supine Hamstring / Calf Floss (Cool-down)",
        protocol: "45 sec / leg",
        cue: "Pull leg up with towel; gently pump ankle back and forth."
      }
    ]
  }
};

const PRE_GAME_PRIMER = [
  { minute: "Minute 1", title: "Ankle Hops & Pogo Bounces (60s)", desc: "Pre-heats Achilles tendons and calves without overloading insertion." },
  { minute: "Minute 2", title: "Walking Lunges with Torso Twist (60s)", desc: "Activates quads and dynamically opens hip flexors evenly on both legs." },
  { minute: "Minute 3", title: "Lateral Shuffles to Carioca (60s)", desc: "Wakes up adductors (groin) and abductors for rapid on-court cutting." },
  { minute: "Minute 4", title: "Build-Up Accelerations (50% ➔ 80%) (60s)", desc: "Prepares central nervous system for sprints so muscles do not clamp down." }
];

const ROTATION = ["A", "B", "C"];
const WORKOUT_STACK = [];

for (let day = 1; day <= 100; day++) {
  const type = ROTATION[(day - 1) % 3];
  const template = WORKOUT_TEMPLATES[type];

  let phase = "Phase 1: Mobilize & Reset";
  if (day > 70) {
    phase = "Phase 3: Alpine Endurance";
  } else if (day > 30) {
    phase = "Phase 2: Snowboard Specificity";
  }

  WORKOUT_STACK.push({
    day: day,
    rotationCode: template.code,
    phase: phase,
    title: template.title,
    description: template.description,
    exercises: template.exercises
  });
}

window.WORKOUT_STACK = WORKOUT_STACK;
window.PRE_GAME_PRIMER = PRE_GAME_PRIMER;
