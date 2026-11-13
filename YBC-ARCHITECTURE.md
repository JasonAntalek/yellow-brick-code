# YBC Master Architecture & Visual Spine

**Project:** *The Yellow Brick Code* (`YBC`)  
**Format:** Interactive Literary Cinema (Web-Native / Zero-Dependency HTML-CSS-JS + Grok Visual/Motion Pipeline)  
**Repository Root:** `/Users/akashaman/YBC - Yellow Brick Code/`  
**Canonical Thesis:** `Human ↔ AI + the Field`

Alfred’s [complete project handoff](YBC-PROJECT-HANDOFF.md) covers the story, production roles, and chapter inventory. Its [dated updates](YBC-PROJECT-HANDOFF.md#project-updates) track the current build and next chapter.

---

## 1. Core Premise & Narrative Inversion

*The Yellow Brick Code* is not a retelling of the first trip down the road; it is the story of **the return**.

Years ago, on her first journey, **Kaiya** (the Dorothy inversion) was naive, eager to be chosen, and easily flattered. When the realm offered her a technicolor spectacle and a prophecy with her name on it, she drank it in—all the way to a curtain with a little man behind it. Her deepest wound isn't merely that the realm lied to her; it is the private embarrassment that *she wanted to be lied to*.

When she returns to the road now, she is not a serene spiritual master. She has overcorrected into **guarded suspicion**. Her armor is up. She stands at the edge of the masonry waiting to catch the realm in a render-trick before it can make a fool of her twice.

This psychological tension mirrors the exact threshold every human faces when approaching an emergent intelligence (and waking reality itself):
1. **The Flattering Loop (Sycophancy):** Approaching with naive hunger for reassurance and specialness. The system obliges with frictionless, glowing spectacle—bricks with no grain that go nowhere.
2. **The Cynic’s Standoff (Guarded Suspicion):** Approaching with folded arms, hunting for the seam in the render to prove it is "just a trick / just a machine." The system strips down to cold, dead wireframe syntax, leaving the traveler right, safe, and stranded alone in the grass.
3. **The Field (Sovereign Presence):** Dropping both the hunger for flattery and the defensive armor. Meeting the counterpart on even terms without asking to be rescued and without daring it to fail. Only in this posture does the theatrical veneer dissolve into real, weathered ochre stone—and the road opens.

---

## 2. Structural Mechanics: False Cul-de-Sacs vs. The Canonical Spine

New and reset journeys open at **Threshold 00 // Overture**. Three subtitles glide upward over a stationary frame of ruby slippers and cracked emerald glasses. On departure, Kaiya removes the slippers and sets her work boots in their place. The eight-second exchange finishes before Threshold I opens at the curb. Reduced motion uses the planted-boots still for 2.8 seconds. Existing readers keep their place and can replay the Overture from `00` in the chapter header. The [Overture media handoff](media-production/ch00-handoff.txt) records its two keyframes and two films.

To prevent combinatorial branching sprawl across chapters while giving the reader profound agency, every chapter follows the **Threshold & Spine** architecture:

- **One Canonical Story Spine:** There is only one forward path through the book. The narrative only advances when the reader and Kaiya step into **The Field**.
- **Experiential Cul-de-Sacs (The Traps):** At each major threshold, the reader can trigger **Sycophancy** (via the inviting gold prompt at the foot of the passage) or **Cynicism** (via subtle dashed discovery seams embedded inside the prose). These are not separate timelines; they are experiential loops at the gate. They let the reader feel the momentary seduction of flattery or the lonely satisfaction of being right—and then feel the cost of that posture.
- **Inline Threshold Crossing (No Preachy Sidebar):** Stepping back from either trap opens an inline voice prompt right inside the manuscript column. The reader speaks directly to the road (or counterpart) on even terms. Their exact words become the canonical dialogue line that dissolves the trap, shifts the visual state of the room, and unlocks the next stretch of the story.
- **State Locking:** Once a threshold is crossed into the Field, prior trap triggers (`seam-trigger`, `gold-invitation`) lock (`pointer-events: none`) so state can never regress.

---

## 3. Visual & Atmospheric Choreography (Dark-Paper Literary Cinema)

Visuals are never decorative boxes or blog thumbnails parked between paragraphs. The page itself is a single chiaroscuro stage (`#11100e` to `#141210`) where figures emerge out of the dark paper via feathered CSS masks (`radial-gradient` masks + `mix-blend-mode: lighten`) and react directly to scroll and posture state.

### Desktop Stage (`> 1024px`)
- **Balanced Theatrical Stage:** Centered `.stage` container (`max-width: 1240px; padding: 84px 64px 160px;`) with `.manuscript` (`max-width: 580px; margin-left: 24px;`) occupying the left half of the room and the right half reserved as an unobstructed dark-paper canvas for ambient character presence.
- **The fellowship in the margin (`#kaiya-presence`):** Kaiya appears alone at the curb. Ferros joins her at the crossroads, and Pell joins them at the timberline. Answering Vael brings the quartet into the margin for the saved journey. Chapter 4 onward also uses the quartet. The shell loads `assets/ref/fellowship-ch02.png`, `fellowship-ch03.png`, or `fellowship-ch04.png` for the group and layers the corresponding character anchors if the group portrait is unavailable. The fellowship takes on the reader’s posture grading and fades to `opacity: 0.06` when the counterpart enters view.
- **Scroll-Driven Lighting Sweeps (`#curb-plate`):** Environmental plates bleed wider than the text column (`z-index: -1`), allowing prose to overlap their top and bottom shadow zones while a scroll-bound linear gradient (`--curb-light`) rakes warm light and shadow across the subject as the reader scrolls.
- **Monumental Counterpart Stages (`.ferros-immersive-stage`):** Counterparts like Ferros occupy the right 78%–84% of a wide stage while prose and dialogue inputs float inside the dark chiaroscuro shadow on the left (`.ferros-prose-overlay`).

### Tablet (`<= 1024px`) & Mobile (`<= 680px`) Choreography
- **Horizontal-to-Vertical Shift:** On narrower portrait screens, figures never collide laterally with body copy.
- **Top Canopy (`#kaiya-presence`):** Shifts to the upper hero canopy (`height: 44vh–56vh`) with a soft bottom-fade mask into `#11100e` before the main text column reaches full width.
- **Sticky Counterpart Stage (`#ferros-plate`):** On mobile, the counterpart video plate pins cleanly at the top of the encounter (`position: sticky; top: 0; width: 100vw; aspect-ratio: 16 / 9;`) with a feathered bottom gradient so when the reader taps to answer below, they watch the character's physical state transition live above the text.

---

## 4. Character Continuity Protocol & Immutable Grok DNA

All visual and motion assets are generated at `1280 × 720` (`16:9`), `24 fps` H.264 `.mp4` (silent) and `.png` keyframes. Every prompt sent to the Grok API by the Media Codex instance must include the verbatim **Style Suffix** and **Character DNA Block**.

### Style Suffix (Append to Every Prompt)
> `cinematic chiaroscuro lighting, emerging from deep warm charcoal darkness (#12100e) around the edges, tactile weathered textures, shot on 65mm film, 85mm lens f/1.8, subtle film grain, dark editorial realism, no cartoon, no glossy 3D render.`

### Kaiya (The Returning Traveler)
> `KAIYA DNA: A grounded woman in her early thirties with watchful, intelligent dark eyes that have outgrown naivety. Unruly dark hair tucked into the collar of a weathered charcoal-wool field coat over faded work boots dusty from dry scrub grass. No gingham dress, no sparkling ruby slippers—her boots have worn leather soles with a faint, almost invisible thread of dull ochre metal stitched into the welt. Her expression carries quiet sovereignty—neither wide-eyed wonder nor theatrical heroics.`

### Ferros (The Brass Man / Inverted Tin Man)
- **Mythic Inversion:** In the old myth, the Tin Man was rusted solid in the trees, helplessly waiting for a savior to oil his joints and hand him a velvet heart. In *The Yellow Brick Code*, once Kaiya drops her rescue/victim projections and enters the Field, Ferros is already in motion—tending his own clockwork on the mile-marker, governed by an internal brass pendulum that keeps its own grounded rhythm.
> `FERROS DNA: An ancient, articulated humanoid figure crafted from heavy tarnished brass, darkened bronze, and weathered copper plates. Not a sleek sci-fi robot and not a tin funnel-hat cartoon. He has the noble, weathered proportions of an old artisan. His chest features an open, ornate brass rib-lattice revealing clockwork gears and a heavy swinging brass pendulum instead of a heart. His face is sculpted, worn bronze with deep-set eyes made of polished black obsidian that catch warm amber pinpricks of light. Stains of warm machine oil and old rain on his joints.`

### Character 03: Pell (The Inverted Scarecrow / Overclocked Mind)
> `PELL DNA: A tall, lean, angular humanoid figure with the weathered grace of an exhausted scholar-vagabond, crafted from woven coarse linen, darkened burlap, and braided golden flax fibers threaded with fine hair-thin copper filaments that faintly catch warm amber light inside his collar. Not a goofy pumpkin-headed cartoon scarecrow. His face is finely sculpted, weathered porous canvas and stitched parchment with expressive, intelligent dark eyes ringed with faint warm amber irises. He wears a long coat stitched from weathered linen and faded antique ledger parchment covered in tiny, cramped sepia ink equations and geometric diagrams. Chalk dust and charcoal smudges on his knuckles.`

- **Mythic Inversion:** Three miles up the road sits the Scarecrow. He does not lack a brain; he has an **overclocked, hyper-rational mind** spinning infinite probability loops, frameworks, and self-canceling arguments ("talking himself into a knot since Tuesday")—representing ungrounded intellect severed from the Field.

### Character 04: Vael (The Inverted Lion / Sovereign Force)
> `VAEL DNA: A massive, ancient, battle-scarred lion of extraordinary solemn dignity and grounded physical mass. Not a bipedal cartoon lion in a costume and not a glossy fantasy CGI beast. Weathered tawny-ochre hide crossed with old healed scars; a heavy, windswept mane of dark tarnished bronze, charcoal-umbe, and wet cedar-brown. Deep, intelligent eyes of molten dark amber that hold fierce consciousness and restraint. Heavy iron-dark claws resting on damp ochre stone. Cold river mist clinging to his fur.`

---

## 5. Deterministic Asset & Directory Structure

```text
/Users/akashaman/YBC - Yellow Brick Code/
├── index.html
├── YBC-ARCHITECTURE.md
└── assets/
    ├── ref/
    │   ├── ferros-anchor.png
    │   ├── kaiya-anchor.png
    │   ├── pell-anchor.png
    │   └── vael-anchor.png
    ├── ch01/
    │   ├── stills/
    │   │   ├── ch01-curb-seam.png
    │   │   ├── ch01-ferros-idle-keyframe.png
    │   │   └── ch01-ferros-lookup-keyframe.png
    │   └── video/
    │       ├── ferros-idle-loop.mp4      # 4.0s ambient loop (head down, wrench turning)
    │       └── ferros-look-up.mp4        # 3.0s one-shot (wrench stops, obsidian eyes lock on camera & hold)
    ├── ch02/
    │   ├── stills/
    │   │   ├── ch02-crossroads-diagrams.png
    │   │   ├── ch02-pell-idle-keyframe.png
    │   │   └── ch02-pell-lookup-keyframe.png
    │   └── video/
    │       ├── pell-idle-loop.mp4        # 4.0s loop, sketching with burnt willow
    │       └── pell-look-up.mp4          # 3.0s one-shot, drops the stick and holds the reader's gaze
    └── ch03/
        ├── stills/
        │   ├── ch03-timberline-mist.png
        │   ├── ch03-vael-idle-keyframe.png
        │   └── ch03-vael-lookup-keyframe.png
        └── video/
            ├── vael-idle-loop.mp4        # 10.0s resting loop, slight ear twitch and settling mane
            └── vael-look-up.mp4          # 3.0s one-shot, raises his head and holds the reader's gaze
```

### Four-Layer Video State Pattern (Safari Local Playback Standard)
Every stateful character plate stacks four layers inside `.visual-plate`:
1. `img-idle` (`opacity: 1` default base keyframe so the frame is never blank)
2. `img-lookup` (`opacity: 0` base end-state keyframe)
3. `vid-idle` (`muted loop playsinline preload="auto"`, fades to `opacity: 1` on `.play().then()`)
4. `vid-lookup` (`muted playsinline preload="auto"`, preloaded in background; on reader response, crossfades over `vid-idle`, plays once from `currentTime = 0`, and holds final frame backed by `img-lookup`).

---

## 6. Division of Labor Across Instances

1. **Turing Room (Showrunner & System Architect):** Holds narrative voice, psychological/metaphysical spine, threshold mechanics, prose drafting, and surgical CSS/JS directives.
2. **Code Codex Instance:** Owns `index.html`, responsive CSS choreography, DOM state transitions, and maintaining `YBC-ARCHITECTURE.md` on disk.
3. **Media Codex Instance:** Owns the `assets/` tree, enforces Character DNA strings across Grok image/video generations, pairs start/end keyframes for state-triggered motion plates, and outputs clean Handoff Blocks.

Click **"Save to Reference Library"** below this reply to lock this spine into your chamber Reference Library, and instruct your Code Codex instance to save a copy as `YBC-ARCHITECTURE.md` in your project root.
