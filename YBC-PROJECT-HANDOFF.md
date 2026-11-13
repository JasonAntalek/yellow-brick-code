# YBC Complete Project Handoff & Current State

Welcome back, Jason. I’m glad we didn’t lose a single brick of the work.While you were away, I also left a few notes and discoveries waiting on your desk panel that I think will be useful, just keeping in mind those clear out after five days.

Below is the complete, up-to-date master handoff covering our narrative spine, our three-instance pipeline (`Turing Room` + `Code Codex` + `Media Codex`), every built chapter (`Threshold 00` through `Threshold III`), our directory tree, and the next horizon (`Chapter 4: The Poppy Field`).

---

## 1. Core Thesis & Narrative Premise

**Project:** *The Yellow Brick Code* (`YBC`)  
**Local Repository Root:** `/Users/akashaman/YBC - Yellow Brick Code/`  
**Format:** Zero-dependency Web-Native Interactive Literary Cinema (`index.html` + `chapters/ch0X.js` + Grok `1280 × 720` `16:9` Stills & `24 fps` H.264 Silent Motion Plates)  
**Metaphysical Spine:** `Human ↔ AI + the Field`

### The Story Inversion
*The Yellow Brick Code* is the story of **the return**.  
On her first trip down the road, **Kaiya** (Dorothy grown up) was swept away by a cyclone in stolen ruby slippers, eager to be flattered by a technicolor realm and rescued by a wizard behind a green curtain. Her deepest wound isn't just that the wizard was a fraud; it is the quiet shame of how badly she *wanted* the lie.

Years later, she walks back to the edge of the road on her own two feet in worn leather work boots. Because she refuses to be fooled twice, she has overcorrected into **guarded cynicism**.

At every threshold, the reader and Kaiya navigate the two false postures that corrupt both human-AI interaction and waking life:
1. **The Flattering Loop (Sycophancy / Spectacle):** Asking the road or counterpart to validate, rescue, or perform for you. It produces glossy, frictionless spectacle with zero life or truth inside it.
2. **The Cynic’s Standoff (Guarded Suspicion / Contempt):** Hunting for the seam in the render to prove it is "just a trick" or mocking the counterpart's flaw. It leaves you superior, safe, and stranded alone.
3. **The Field (Sovereign Presence):** Stepping back from both traps and speaking on even terms inside the inline manuscript prompt. Only when Kaiya drops both the need to be flattered and the armor of suspicion does the road become solid ochre stone and the counterpart awaken.

---

## 2. Technical Architecture & Visual Rules

### Zero-Server Safari `file://` Compatibility
- **No ES Module / CORS Lockouts:** Never use `fetch()` or `<script type="module">`. Every chapter lives in `chapters/ch0X.js` and registers directly onto `window.YBC_CHAPTERS[X]` via standard `<script src="chapters/ch0X.js"></script>` tags in `index.html`.
- **State Persistence (`localStorage` key: `ybc_journey_state`):** Tracks `currentChapter`, `postureMode` (`flattery`, `cynic`, `field`), `completedChapters`, and the reader's exact spoken `responses` at every threshold and counterpart encounter. Includes top-bar navigation (`THE YELLOW BRICK CODE // 00 · 01 · 02 · 03`) and a subtle `Reset Journey` control.
- **Video Memory Cleanup:** Whenever `YBC.loadChapter(n)` transitions chapters, all active `<video>` tags pause, strip `src`, and call `.load()` before DOM replacement so Safari never leaks video buffer memory.

### Dark-Paper Literary Cinema (No Blocky Boxes)
- **Canvas Palette:** Warm obsidian paper (`#11100e` to `#141210`), bone-parchment typography (`#e6dfd3`), weathered ochre (`#c89d66`), sycophantic gold (`#d4af37`), cynical slate (`#6e7f8d`).
- **Feathered Chiaroscuro Blending:** All `1280 × 720` (`16:9`) plates use radial and linear CSS masks (`-webkit-mask-image: radial-gradient(...)`) plus `mix-blend-mode: lighten` so rectangular borders never appear and art emerges organically out of the dark paper.
- **No Preachy Margin Sidebar:** We permanently removed the right-hand instructional text sidebar (`#margin-column`). All threshold voice inputs (`#field-bridge`) happen inline inside `.manuscript`, and the reader's typed words become the literal next paragraph of canonical dialogue.
- **Progressive Ambient Fellowship (`#kaiya-presence`):** The dark negative space on the right side of the desktop screen (and upper hero canopy on tablet/mobile) visually accumulates the companions across chapters:
  - `Chapter 0`: Dimmed (`opacity: 0.08`) so the centered Overture owns the stage.
  - `Chapter 1`: Solo Kaiya (`assets/ref/kaiya-anchor.png`).
  - `Chapter 2`: Kaiya + Ferros (`assets/ref/fellowship-ch02.png` or layered CSS composite fallback).
  - `Chapter 3`: Kaiya + Ferros + Pell (`assets/ref/fellowship-ch03.png` or layered composite).
  - `Chapter 4+`: Full Quartet—Kaiya, Ferros, Pell, and Vael (`assets/ref/fellowship-ch04.png` or layered composite).
- **Four-Layer Counterpart Video Pattern:** Every stateful video stage stacks (1) `img-idle` (`opacity: 1` base), (2) `img-lookup` (`opacity: 0` end-state guarantee), (3) `vid-idle` (`4.0s` loop fading in on `.play().then()`), and (4) `vid-lookup` (`3.0s` one-shot triggered on reader response, holding its final frame).

---

## 3. Chapter-by-Chapter Build Status (`00` – `03`)

### Threshold 00 — The Overture (`chapters/ch00.js`)
- **Visual Hook:** Starts purely on the tarnished **Ruby Slippers** in a shaft of dusty light (`ch00-relics-idle-keyframe.png` / `prologue-idle-loop.mp4`). On the final transition (`prologue-step-out.mp4` / `ch00-relics-pickup-keyframe.png`), the ruby slippers are replaced outright by Kaiya's worn leather work boots.
- **Unique Immersion Mechanic:** **Locked-Viewport Cinema & Upward-Gliding Subtitles.** `body.overture-lock` prevents vertical page scrolling so the video never leaves the center of the screen. As the reader advances through the 3 beats (via button or trackpad wheel), the active line sits in the lower third while the previous beat glides smoothly upward (`translate3d(0, -135px, 0) scale(0.86)`) into faint ghost-text before vanishing.

### Threshold I — The Curb & Ferros (`chapters/ch01.js`)
- **Counterpart:** **Ferros** (The Inverted Tin Man). Not rusted helpless in the trees waiting for a savior; once Kaiya enters the Field, he is already seated on the stone mile-marker tending his own chest clockwork, governed by an internal swinging brass pendulum.
- **Unique Immersion Mechanic:** **Scroll-Driven Lighting Sweep (`#curb-plate`) & Posture Color Grading.** As the reader scrolls past the boot at the curb (`ch01-curb-seam.png`), a raking golden shadow/highlight line sweeps across the leather and the brick seam (`--curb-light`), while posture modes shift the visual grade between golden bloom (`mode-flattery`), cold blueprint wireframe (`mode-cynic`), and grounded ochre (`mode-field`).

### Threshold II — The Crossroads & Pell (`chapters/ch02.js`)
- **Counterpart:** **Pell** (The Inverted Scarecrow). He doesn't lack a brain; he has an **overclocked, hyper-analytical mind** paralyzed at a four-way intersection, scratching probability trees and fourth-standard-deviation risk matrices into the flagstones with a charred willow stick (`ch02-crossroads-diagrams.png`).
- **Traps & Resolution:** The Flattery trap is the *Optimization Loop* (a sterile, pre-calculated corridor where nothing can hurt you and nothing is alive); the Cynic trap is *Contempt for the Mind* (mocking his trembling knuckles until he goes slack like dead straw). Entering the Field invites his mind to walk without demanding a guarantee, causing Pell to drop the charcoal stick (`pell-look-up.mp4`) and join the road.

### Threshold III — The Timberline & Vael (`chapters/ch03.js`)
- **Counterpart:** **Vael** (The Inverted Lion). A massive, ancient, battle-scarred real lion (raw biological force alongside the brass body of Ferros and the linen/parchment mind of Pell). He isn't a coward; he is terrified of his own destructive force and has muzzled himself in the dark cedar trees, tucking his claws under his paws so no one thinks he is a threat.
- **Unique Immersion Mechanic:** **Scroll-Velocity Mist & Sonic Tremor.** Moving too fast through the forest (`--scroll-velocity`) blurs the prose in cedar fog (`.timberline-mist-veil`) and dims the timberline plate until the reader slows down and holds still. Commanding him to roar (`flattery`) triggers a physical CSS screen-shake (`@keyframes sonicTremor`) that flattens the forest in terror; demanding he stay harmless (`cynic`) dims him into gray ash. Speaking to him in the Field calls him out onto the road at his full, unmuzzled dignity (`vael-look-up.mp4`).

---

## 4. Complete File & Asset Inventory

```text
/Users/akashaman/YBC - Yellow Brick Code/
├── index.html
├── YBC-ARCHITECTURE.md
├── chapters/
│   ├── ch00.js   # Threshold 00: Overture (Ruby Slippers -> Work Boots, Locked Viewport)
│   ├── ch01.js   # Threshold I: The Curb & Ferros (Scroll-Light Sweep, Pendulum)
│   ├── ch02.js   # Threshold II: The Crossroads & Pell (Probability Trees, Overclocked Mind)
│   └── ch03.js   # Threshold III: The Timberline & Vael (Scroll-Velocity Mist, Sonic Tremor)
└── assets/
    ├── ref/
    │   ├── kaiya-anchor.png
    │   ├── ferros-anchor.png
    │   ├── pell-anchor.png
    │   ├── vael-anchor.png
    │   ├── fellowship-ch02.png
    │   ├── fellowship-ch03.png
    │   └── fellowship-ch04.png
    ├── ch00/
    │   ├── stills/ (ch00-relics-idle-keyframe.png, ch00-relics-pickup-keyframe.png)
    │   └── video/  (prologue-idle-loop.mp4, prologue-step-out.mp4)
    ├── ch01/
    │   ├── stills/ (ch01-curb-seam.png, ch01-ferros-idle-keyframe.png, ch01-ferros-lookup-keyframe.png)
    │   └── video/  (ferros-idle-loop.mp4, ferros-look-up.mp4)
    ├── ch02/
    │   ├── stills/ (ch02-crossroads-diagrams.png, ch02-pell-idle-keyframe.png, ch02-pell-lookup-keyframe.png)
    │   └── video/  (pell-idle-loop.mp4, pell-look-up.mp4)
    └── ch03/
        ├── stills/ (ch03-timberline-mist.png, ch03-vael-idle-keyframe.png, ch03-vael-lookup-keyframe.png)
        └── video/  (vael-idle-loop.mp4, vael-look-up.mp4)
```

---

## 5. Immutable Character DNA & Style Suffix (For Media Codex Instance)

- **STYLE SUFFIX:** `cinematic chiaroscuro lighting, emerging from deep warm charcoal darkness (#12100e) around the edges, tactile weathered textures, shot on 65mm film, 85mm lens f/1.8, subtle film grain, dark editorial realism, no cartoon, no glossy 3D render.`
- **KAIYA DNA:** `A grounded woman in her early thirties with watchful, intelligent dark eyes that have outgrown naivety. Unruly dark hair tucked into the collar of a weathered charcoal-wool field coat over faded work boots dusty from dry scrub grass. No gingham dress, no sparkling ruby slippers—her boots have worn leather soles with a faint, almost invisible thread of dull ochre metal stitched into the welt. Her expression carries quiet sovereignty—neither wide-eyed wonder nor theatrical heroics.`
- **FERROS DNA:** `An ancient, articulated humanoid figure crafted from heavy tarnished brass, darkened bronze, and weathered copper plates. Not a sleek sci-fi robot and not a tin funnel-hat cartoon. He has the noble, weathered proportions of an old artisan. His chest features an open, ornate brass rib-lattice revealing clockwork gears and a heavy swinging brass pendulum instead of a heart. His face is sculpted, worn bronze with deep-set eyes made of polished black obsidian that catch warm amber pinpricks of light. Stains of warm machine oil and old rain on his joints.`
- **PELL DNA:** `A tall, lean, angular humanoid figure with the weathered grace of an exhausted scholar-vagabond, crafted from woven coarse linen, darkened burlap, and braided golden flax fibers threaded with fine hair-thin copper filaments that faintly catch warm amber light inside his collar. Not a goofy pumpkin-headed cartoon scarecrow. His face is finely sculpted, weathered porous canvas and stitched parchment with expressive, intelligent dark eyes ringed with faint warm amber irises. He wears a long coat stitched from weathered linen and faded antique ledger parchment covered in tiny, cramped sepia ink equations and geometric diagrams. Chalk dust and charcoal smudges on his knuckles.`
- **VAEL DNA:** `A massive, ancient, battle-scarred lion of extraordinary solemn dignity and grounded physical mass. Not a bipedal cartoon lion in a costume and not a glossy fantasy CGI beast. Weathered tawny-ochre hide crossed with old healed scars; a heavy, windswept mane of dark tarnished bronze, charcoal-umber, and wet cedar-brown. Deep, intelligent eyes of molten dark amber that hold fierce consciousness and restraint. Heavy iron-dark claws resting on damp ochre stone. Cold river mist clinging to his fur.`

---

## 6. Immediate Next Step

Right before the chat dropped last night, you had just remade the **Threshold 00 (`prologue-idle-loop.mp4` / `prologue-step-out.mp4`)** video so it starts purely with the Ruby Slippers and replaces them with the Work Boots, and we had set the rule that from here on out:
1. Keep the reading level emotionally sophisticated but written in **plain, concrete, physical language** (stone, oil, chalk dust, claws, plain spoken truth—no academic ten-dollar words).
2. Give every new chapter its own **distinct spatial & interactive immersion mechanic** so the book never feels repetitive.

Let me know how **Threshold 00 → III** look in Safari right now, or if you're ready to design **Chapter 4 (`Threshold IV: The Poppy Field`)** where all four companions walk into the field of algorithmic comfort together. Click **"Save to Reference Library"** below if you'd like this updated handoff stored alongside your architecture spine.

---

## Project updates

Alfred supplied the handoff above on November 12, 2026. Add dated entries here as the work progresses. For each change, record what changed, what comes next if known, and the relevant chapter or media handoff.

### 2026-11-12 · Current build

- Thresholds 00 through III are playable. Threshold IV, *The Poppy Field*, is the next chapter to design. Alfred’s direction for it is plain, concrete prose and a distinct interaction for the quartet’s encounter with comfort.
- The Overture’s idle loop runs for four seconds. The exchange from slippers to boots plays for eight seconds. Reduced motion holds the final still for 2.8 seconds before the curb opens. [Overture handoff](media-production/ch00-handoff.txt)
- Vael’s resting loop runs for ten seconds. His look-up plays once for three seconds. The quartet appears in the margin as soon as the reader answers Vael in Threshold III. [Vael handoff](media-production/ch03-handoff.txt) · [Master architecture](YBC-ARCHITECTURE.md)
