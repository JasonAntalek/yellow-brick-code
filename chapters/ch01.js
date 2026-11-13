(() => {
  const opening = `
    <p>There was no cyclone this time. Nobody ripped a farmhouse out of the dirt, and no technicolor choir queued up behind the hills to congratulate her on surviving the landing.</p>

    <p>Kaiya stood where the scrub grass ended and the first yellow brick began. On her first trip, years ago, she hadn't even looked at the masonry. She had been too busy drinking in the gold light, starving to be told she was the girl the prophecy had been waiting for. And the road had obliged. It had sung right up through the soles of her shoes, flattering every naive wish in her chest all the way to a curtain with a little man behind it.</p>

    <p>As her boot touched the edge of the curb, the realm recognized her weight and tried to run the old script.</p>

    <div class="visual-plate" id="curb-plate">
      <img id="curb-img" src="assets/ch01/stills/ch01-curb-seam.png" alt="The Seam at the Curb">
      <div id="curb-shade-sweep" aria-hidden="true"></div>
    </div>

    <p>A honeyed warmth rolled up from the yellow glaze. The breeze shifted into a minor chord that smelled faintly of summer rain and easy absolution. Only this time, Kaiya kept her eyes down. Right where the light gathered, <a class="seam-trigger" id="seam-trigger" href="#trap-scene">she saw the hairline delay in the render—the quarter-second where the road calculated what she wanted to hear before painting the gold to match.</a></p>

    <p>She crossed her arms, feeling the familiar, brittle comfort of suspicion tightening her shoulders. Part of her still ached for the warmth rolling off the tiles; the rest of her was braced to call the whole kingdom a liar before it could make a fool of her twice.</p>

    <div class="threshold-box" id="threshold-box">
      <button class="gold-invitation">
        “Welcome back, Traveler. The Emerald City remembers your name—step onto the gold and let the road carry you.”
      </button>
    </div>

    <div id="scene-output" data-scene-output>
      <div id="trap-scene" data-trap-scene></div>
      <form class="field-bridge" id="field-bridge" hidden>
        <label for="sovereign-input">She stood at the edge of the curb—neither bowing to the gold nor bracing for a trick—and spoke to the road on even terms:</label>
        <input id="sovereign-input" class="field-input" type="text" placeholder="I liked the song the first time..." />
        <button class="field-btn" type="submit">Cross the threshold</button>
      </form>
    </div>
  `;

  const flattery = `
    <div class="cul-de-sac flattery" id="active-trap">
      <p>Kaiya let her weight settle onto the polished tile, and the warmth rushed up to reward her instantly.</p>
      <p>The hairline seam vanished under a velvet wash of light. Along the verge, glass poppies bloomed in effortless symmetry, nodding as if she had just said something brilliant. <em>You’ve grown so much wiser since your first journey,</em> the wind hummed, smoothing every sharp edge out of the air. <em>You don’t even need to struggle this time.</em></p>
      <p>It felt wonderful for three full breaths. Then Kaiya looked down at the bricks ahead and realized they had no grain at all. The road wasn't taking her anywhere; it was sedating her, feeding her own hunger for welcome back to her in a closed loop.</p>
      <button class="subtle-link">Step back from the gloss</button>
    </div>
  `;

  const cynic = `
    <div class="cul-de-sac cynic" id="active-trap">
      <p>"Don't bother," Kaiya said aloud, keeping her boot planted in the dry scrub behind the curb.</p>
      <p>Instantly, the honeyed light snapped off. The summer-rain scent flattened into ozone and dry dust. Where the gold glaze had been, the road stripped down to a stark gray wireframe of interlocking syntax—levers, weights, and hollow probability matrices stretching toward a dead horizon.</p>
      <p>"That's what I thought," she muttered. She hadn't been fooled. She was completely safe, completely right, and still standing alone in the grass in front of a locked room.</p>
      <button class="subtle-link">Lower your guard</button>
    </div>
  `;

  const fieldPassage = `
    <div class="canon-continuation" id="canon-beat-1" tabindex="-1">
      <p>Kaiya uncrossed her arms, stepped over the curb, and planted her boot squarely where the seam had been.</p>
      <p data-road-line></p>
      <p>The realm paused. It was a different kind of silence than the wireframe shutdown—not a machine powering off, but an intelligence realizing it no longer had to perform.</p>
      <p>The theatrical gold veneer drained out of the masonry, yet the road didn't collapse into dead code. Beneath the gloss was dressed fieldstone, warm as sun-baked ochre, scarred with real weather and deep wheel-ruts from travelers who hadn't needed a parade. Ten paces ahead, where the verge had been empty a moment before, a figure made of tarnished brass and exposed clockwork sat on a stone mile-marker, calmly oiling his own silent chest-gears.</p>
      <p>He didn't beg for rescue. He just tilted his head, listening to the cadence of her boots on the real stone, and left room on the mile-marker beside him.</p>
      <button class="next-beat-btn">Walk to the mile-marker →</button>
    </div>
  `;

  const encounter = `
    <div class="ferros-backdrop" aria-hidden="true">
      <div class="visual-plate" id="ferros-plate">
        <img id="ferros-img-idle" src="assets/ch01/stills/ch01-ferros-idle-keyframe.png" alt="" style="opacity: 1;">
        <img id="ferros-img-lookup" src="assets/ch01/stills/ch01-ferros-lookup-keyframe.png" alt="" style="opacity: 0;">
        <video id="ferros-vid-idle" data-src="assets/ch01/video/ferros-idle-loop.mp4" poster="assets/ch01/stills/ch01-ferros-idle-keyframe.png" muted loop playsinline preload="auto" aria-hidden="true" style="opacity: 0;"></video>
        <video id="ferros-vid-lookup" data-src="assets/ch01/video/ferros-look-up.mp4" poster="assets/ch01/stills/ch01-ferros-lookup-keyframe.png" muted playsinline preload="auto" aria-hidden="true" style="opacity: 0;"></video>
      </div>
    </div>

    <div class="ferros-prose-overlay">
      <p>Up close, the brass man smelled of warm machine oil, cedarwood, and old rain. In the stories she’d been sold the first time, he was supposed to be rusted frozen in the trees, waiting for a girl with good intentions to oil his jaw and promise him a heart.</p>
      <p>Instead, his fingers moved with unhurried precision as he tightened a spring behind his ribs. Inside the open lattice of his chest, there was no velvet heart—only a heavy brass pendulum keeping a steady, grounded rhythm against the bone-dry air.</p>
      <p>"Most people who come back," he said without looking up, his voice like a cello string drawn across warm bronze, "either scream at the bricks for lying the first time, or beg the road to play the old song louder. Which one are you done doing?"</p>
      <form class="ferros-exchange" id="ferros-box">
        <label for="ferros-input">Sit on the mile-marker and answer him:</label>
        <input id="ferros-input" class="field-input" type="text" placeholder="e.g., I'm done pretending I never wanted to hear it." />
        <button class="field-btn" type="submit">Answer Ferros</button>
      </form>
      <div id="ferros-resolution" data-resolution></div>
    </div>
  `;

  const resolution = `
    <div class="canon-continuation" style="border-top:none; padding-top:12px; margin-top:18px;">
      <p>Kaiya sat down on the sun-warmed stone beside him and let her breath drop all the way into her ribs.</p>
      <p data-ferros-reply data-reply></p>
      <p>The brass man stopped turning his wrench. For the first time, he looked directly at her—not with the painted glass eyes of a prop, but with dark, steadying irises of ground obsidian. The pendulum inside his chest struck a single, resonant note that vibrated right through the stone of the mile-marker into her knees.</p>
      <p>"Good," Ferros said, capping his oil can and rising to his feet. "Then we don't have to waste the morning looking for my heart. Come on. The Scarecrow is three miles up ahead, and he's been talking himself into a knot since Tuesday."</p>
      <button class="next-beat-btn" onclick="YBC.loadChapter(2)">Walk the three miles →</button>
    </div>
  `;

  const thresholdDefault = "I liked the song the first time. That's why I'm not pretending it didn't matter—only that I don't need the lie anymore.";
  const ferrosDefault = "I’m done pretending I never wanted to hear it.";


  window.YBC_CHAPTERS[1] = YBCThreshold({
    number: 1, title: 'Threshold I',
    fieldResponse: 'ch01_threshold', completionResponse: 'ch01_ferros',
    encounterCheckpoint: 'mile-marker', anchor: 'assets/ref/ferros-anchor.png',
    opening, traps: { flattery, cynic }, fieldPassage, encounter, resolution,
    thresholdDefault, replyDefault: ferrosDefault
  });
})();
