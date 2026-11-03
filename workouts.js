/**
 * 100-Day Bilateral Exercise Plan Curriculum
 * 100% Bilateral Programming: Workout A ➔ Workout B ➔ Workout C
 *
 * Exercise fields:
 *   name      – display name
 *   protocol  – sets / reps / time
 *   cue       – the one thing to remember (shown on the card)
 *   focus     – what it targets / why it's in the plan
 *   steps     – how to do it, shown under "How to"
 *   image     – base name of a two-frame photo pair in /img (<image>-0.jpg, <image>-1.jpg),
 *               animated like a GIF. Photos: free-exercise-db (public domain).
 *   videoUrl  – demo link. A real YouTube watch/shorts link also supplies a thumbnail
 *               automatically when there's no `image`.
 *   circuit   – true for "repeat the block" rows (shows a circuit icon instead of a photo)
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
        focus: "Hip flexors, groin, hamstrings and upper-back rotation in one flowing move.",
        steps: [
          "Step one foot forward into a long lunge; back knee hovers just off the floor.",
          "Place the same-side hand inside the front foot and sink the elbow toward the instep.",
          "Rotate that arm up toward the ceiling, following it with your eyes.",
          "Hands back down, straighten the front leg to feel the hamstring, then switch sides."
        ],
        image: "Worlds_Greatest_Stretch",
        videoUrl: "https://www.youtube.com/shorts/PE-UuERblwA"
      },
      {
        name: "Bilateral Flat-Ground Isometric Heel Holds",
        protocol: "4 sets × 40 sec",
        cue: "Rise onto balls of feet; hold without letting ankles roll outward.",
        focus: "Achilles tendon and calf loading without bouncing — builds tendon tolerance.",
        steps: [
          "Stand tall, feet hip-width, lightly touching a wall or counter for balance.",
          "Rise onto the balls of both feet until the heels are a few inches up.",
          "Keep weight over the big toe and second toe — don't let ankles roll out.",
          "Hold steady for the full time, then lower slowly over 2–3 seconds."
        ],
        image: "Calf_Raises_-_With_Bands",
        videoUrl: "https://www.youtube.com/results?search_query=isometric+calf+raise+hold+exercise"
      },
      {
        name: "Supported Bilateral Quadruped Shin Opener",
        protocol: "3 sets × 30 sec",
        cue: "Kneel with toes flat behind; gently sit back onto heels to tolerance.",
        focus: "Front of the ankle and shin (plantarflexion range) with hands taking some load.",
        steps: [
          "Start on hands and knees, tops of the feet flat on the floor (toes pointed back).",
          "Keep hands planted and slowly shift your hips back toward your heels.",
          "Stop where you feel a stretch across the front of the ankles — no sharp pain.",
          "Breathe and hold; shift weight forward into the hands to ease off."
        ],
        image: "All_Fours_Quad_Stretch",
        videoUrl: "https://www.youtube.com/results?search_query=quadruped+plantar+shin+stretch"
      },
      {
        name: "Bilateral 90/90 Hip Switches",
        protocol: "8 reps / side",
        cue: "Smoothly rotate knees side-to-side, hinging chest over lead shin.",
        focus: "Internal and external hip rotation on both sides.",
        steps: [
          "Sit with both knees bent ~90°: one leg in front of you, one out to the side.",
          "Sit tall with hands behind you for support if needed.",
          "Lift both knees and rotate them to the other side, landing in the mirror position.",
          "Pause, lean the chest slightly over the front shin, then switch back."
        ],
        videoUrl: "https://www.youtube.com/results?search_query=90+90+hip+switches+mobility"
      },
      {
        name: "Bilateral Glute Bridges with Squeeze",
        protocol: "12 reps (2s hold)",
        cue: "Drive through heels evenly to wake up glutes and unload lumbar spine.",
        focus: "Glutes and hamstrings, while teaching the lower back to stay neutral.",
        steps: [
          "Lie on your back, knees bent, feet flat and hip-width apart, arms by your sides.",
          "Brace your stomach and press evenly through both heels.",
          "Lift hips until knees, hips and shoulders form a straight line.",
          "Squeeze glutes hard for 2 seconds at the top, then lower with control."
        ],
        image: "Butt_Lift_Bridge",
        videoUrl: "https://www.youtube.com/results?search_query=glute+bridge+form+cues"
      },
      {
        name: "Prone Cobra / Extension Press-up (Cool-down)",
        protocol: "5 deep breaths",
        cue: "Keep hips pressed down to decompress lumbar spine.",
        focus: "Gentle lower-back extension to reset the spine after hip work.",
        steps: [
          "Lie face down, hands under the shoulders, legs relaxed.",
          "Press through the hands to lift the chest; hips stay on the floor.",
          "Let the lower back sag and relax — arms do the work, not the back muscles.",
          "Take slow breaths at the top, then lower down."
        ],
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
        focus: "Opens hips, groin and ankles in the bottom squat position.",
        steps: [
          "Feet a bit wider than shoulders, toes turned slightly out.",
          "Sit all the way down into a squat, heels flat, chest up.",
          "Bring palms together and press elbows against the inside of the knees.",
          "Gently pry the knees out and shift side to side; breathe and relax into it."
        ],
        image: "Bodyweight_Squat",
        videoUrl: "https://www.youtube.com/results?search_query=deep+squat+pry+exercise"
      },
      {
        name: "Alternating Cossack Squats",
        protocol: "8 reps / leg",
        cue: "Shift weight smoothly from left to right lateral lunge, heels grounded.",
        focus: "Lateral leg strength and inner-thigh (adductor) flexibility — great for edging.",
        steps: [
          "Take a very wide stance, toes slightly out.",
          "Shift onto one leg and sit down into it; the other leg stays straight, toes up.",
          "Keep the working heel flat and chest tall; reach hands forward for balance.",
          "Push back through the middle and shift to the other side."
        ],
        image: "Barbell_Side_Split_Squat",
        videoUrl: "https://www.youtube.com/results?search_query=cossack+squats+exercise+form"
      },
      {
        name: "Bilateral Bent-Knee Calf Raises",
        protocol: "15 reps (3s down)",
        cue: "Bend knees 20° on flat ground; raise and lower heels simultaneously.",
        focus: "Soleus (deep calf) — the muscle that holds your stance on a board.",
        steps: [
          "Stand with feet hip-width and knees softly bent about 20°.",
          "Keeping that knee bend, rise onto the balls of both feet.",
          "Pause briefly at the top.",
          "Lower over a slow 3-count; don't let the knees straighten."
        ],
        image: "Calf_Raises_-_With_Bands",
        videoUrl: "https://www.youtube.com/results?search_query=bent+knee+calf+raises+soleus"
      },
      {
        name: "Kettlebell Goblet Squat with Pause",
        protocol: "10 reps (3s pause)",
        cue: "Hold KB at chest; squat symmetrically with equal weight on both feet.",
        focus: "Quads and glutes with an upright torso; the pause builds control at depth.",
        steps: [
          "Hold the kettlebell by the horns at chest height, elbows pointing down.",
          "Feet shoulder-width; sit down between your heels, knees tracking over toes.",
          "Pause 3 seconds at the bottom — stay tight, don't relax into the floor.",
          "Drive up evenly through both feet."
        ],
        image: "Goblet_Squat",
        videoUrl: "https://www.youtube.com/results?search_query=kettlebell+goblet+squat+pause"
      },
      {
        name: "Circuit Protocol (Exercises 2–4)",
        protocol: "2–3 rounds (~11 min)",
        cue: "Repeat Cossacks, Bent-Knee Raises, and Goblet Squats with controlled tempo.",
        focus: "Builds leg endurance for long runs.",
        steps: [
          "Go back through Cossack Squats → Bent-Knee Calf Raises → Goblet Squats.",
          "Rest about 60 seconds between rounds.",
          "Stop a round early if form breaks down — quality over volume."
        ],
        circuit: true,
        videoUrl: "https://www.youtube.com/results?search_query=circuit+training+tempo+control"
      },
      {
        name: "Bilateral Frog Stretch Rock-backs (Cool-down)",
        protocol: "60 sec total",
        cue: "Widen knees, feet turned out; gently rock hips back to stretch groins.",
        focus: "Inner thigh and groin stretch on both sides at once.",
        steps: [
          "Start on hands (or forearms) and knees; slide the knees wide apart.",
          "Turn feet out so the inner edges touch the floor, ankles in line with knees.",
          "Slowly rock the hips back toward the heels until you feel the groin stretch.",
          "Rock forward and back gently; don't force range."
        ],
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
        focus: "Spine mobility, then anti-rotation core control.",
        steps: [
          "On hands and knees, round the back up (cat), then let it sag and look up (cow) — 3–4 times.",
          "Return to a flat back and brace the stomach.",
          "Reach one arm forward and the opposite leg back until both are straight.",
          "Hold 2 seconds without the hips tipping, return, and switch sides."
        ],
        image: "Cat_Stretch",
        videoUrl: "https://www.youtube.com/watch?v=k2azbhhuKuM"
      },
      {
        name: "KB Bilateral Romanian Deadlifts / Swings",
        protocol: "12–15 reps",
        cue: "Hinge at hips with feet shoulder-width; drive through both feet equally.",
        focus: "Hamstrings and glutes — the hip hinge that protects your back.",
        steps: [
          "Hold the kettlebell with both hands, feet shoulder-width, knees soft.",
          "Push the hips back and slide the bell down your thighs, back flat.",
          "Stop when you feel a strong hamstring stretch (usually just below the knee).",
          "Drive hips forward to stand tall. For swings, snap the hips to float the bell to chest height."
        ],
        image: "Romanian_Deadlift",
        videoUrl: "https://www.youtube.com/watch?v=ERZzCKpjEDg"
      },
      {
        name: "Copenhagen Plank (Short Lever)",
        protocol: "20–30s / side",
        cue: "Rest top knee on couch or bench; match time equally on both sides.",
        focus: "Adductors (inner thigh) and side core — top groin-injury prevention exercise.",
        steps: [
          "Lie on your side next to a bench or couch, propped on your forearm.",
          "Place the inside of your top knee on the bench; bottom leg hangs below.",
          "Lift the hips so your body forms a straight line, squeezing the top knee down.",
          "Hold, then repeat on the other side for the same time."
        ],
        image: "Side_Bridge",
        videoUrl: "https://www.youtube.com/watch?v=5cTh21BfXzI"
      },
      {
        name: "Standing Kettlebell Halos",
        protocol: "6 CW / 6 CCW",
        cue: "Keep hips square and ribs pinned down while circling kettlebell.",
        focus: "Shoulder mobility and core stability while the weight moves around you.",
        steps: [
          "Stand tall holding the kettlebell upside down by the horns at chest height.",
          "Brace your stomach and squeeze the glutes so the hips stay still.",
          "Circle the bell around your head, passing close behind the neck.",
          "Complete all reps one direction, then reverse."
        ],
        videoUrl: "https://www.youtube.com/watch?v=YGZWa5be1hk"
      },
      {
        name: "Circuit Protocol (Exercises 2–4)",
        protocol: "2–3 rounds (~11 min)",
        cue: "Repeat RDLs/Swings, Copenhagen Planks, and Halos.",
        focus: "Builds strength-endurance for the posterior chain and core.",
        steps: [
          "Go back through RDLs/Swings → Copenhagen Planks → Halos.",
          "Rest about 60 seconds between rounds.",
          "Stop a round early if form breaks down — quality over volume."
        ],
        circuit: true,
        videoUrl: "https://www.youtube.com/results?search_query=kettlebell+core+circuit"
      },
      {
        name: "Bilateral Supine Hamstring / Calf Floss (Cool-down)",
        protocol: "45 sec / leg",
        cue: "Pull leg up with towel; gently pump ankle back and forth.",
        focus: "Hamstring, calf and sciatic-nerve mobility to finish.",
        steps: [
          "Lie on your back and loop a towel or strap around the ball of one foot.",
          "Raise that leg toward the ceiling, knee as straight as is comfortable.",
          "Gently point and flex the ankle in a slow rhythm.",
          "Keep the other leg relaxed on the floor; switch legs after the time."
        ],
        image: "Hamstring_Stretch",
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
