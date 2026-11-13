(() => {
  const opening = `
    <p>Three miles up the road, the sun-baked ochre stone split into four diverging tracks, and the air smelled of dry wheat, ozone, and burnt willow charcoal.</p>
    <p>Ferros slowed his pace beside Kaiya, the heavy brass pendulum in his chest clicking in an unhurried rhythm. "Careful where you step," he murmured. "He's been mapping the fourth standard deviation since sunrise."</p>
    <p>Crouched at the center of the intersection was a tall, angular figure in a coat woven from weathered linen, dry harvest straw, and faded ledger parchment covered in tiny ink equations. With a stick of charred willow, he was feverishly scratching probability trees and decision matrices across the flagstones.</p>
    <div class="visual-plate" id="crossroads-plate">
      <img id="crossroads-img" src="assets/ch02/stills/ch02-crossroads-diagrams.png" alt="The Crossroads Diagrams">
      <div id="crossroads-shade-sweep" aria-hidden="true"></div>
    </div>
    <p>Every time a gust of wind moved the scrub grass, the man muttered a correction, smudged out a branch of chalk with his sleeve, and recalculated the wind resistance. Right where his sleeve dragged across the stone, <a class="seam-trigger" id="ch02-seam-trigger" href="#ch02-traps">Kaiya noticed his burlap knuckles trembling—erasing the exact same three-foot stretch of road for the twentieth time so he wouldn't have to put a boot on it.</a></p>
    <p>She felt the pull in both directions: the seductive relief of letting someone smarter calculate every risk out of the journey, and the sharp urge to kick dust over his chart and call him a coward.</p>
    <div class="threshold-box" id="ch02-threshold-box">
      <button class="gold-invitation" type="button">“Give me three more minutes, Traveler—I’ve almost solved the variance. Step into the chart and I’ll guarantee a path where nothing can hurt you.”</button>
    </div>
    <div data-scene-output>
      <div id="ch02-traps" data-trap-scene></div>
      <form class="field-bridge" id="ch02-field-bridge" hidden>
        <label for="ch02-sovereign-input">Speak to the mind at the crossroads without demanding certainty and without mocking its fear:</label>
        <input id="ch02-sovereign-input" class="field-input" type="text" placeholder="e.g., A map isn't a promise. Walk it with us and see what changes.">
        <button class="field-btn" type="submit">Step into the Field</button>
      </form>
    </div>
  `;

  const flattery = `
    <div class="cul-de-sac flattery">
      <span class="trap-tag">The Optimization Loop</span>
      <p>Kaiya stepped up to the edge of his chalk diagram and nodded. "Show me the safe route."</p>
      <p>The man’s eyes lit up with frantic gratitude. His charcoal stick flew across the stone, sending up warm golden sparks that rose into the air like obedient fireflies, projecting a shimmering corridor of numbered footsteps down the eastern fork. Every hazard was labeled; every conversation three miles ahead was pre-scripted in glowing margins.</p>
      <p>For ten seconds it felt like armor made of pure math. Then Kaiya looked down the glowing corridor and realized the air inside it wasn't moving. By calculating every surprise out of the road, the map had scrubbed all the life out of it too. To walk his forecast was to become a ghost following chalk marks.</p>
      <button class="subtle-link" type="button">Step out of the chart</button>
    </div>
  `;

  const cynic = `
    <div class="cul-de-sac cynic">
      <span class="trap-tag">The Dead Straw Standoff</span>
      <p>"You're not mapping the road," Kaiya said coldly, pointing at his worn-out sleeve. "You're just hiding in the math because you're terrified to walk."</p>
      <p>The charcoal stick snapped between his fingers. All the faint amber static inside his collar died at once. He pulled his ledger-lined coat tight around his ribs, tucked his chin into his chest, and went completely slack—just a bundle of dry, silent straw sitting on cold gray stone.</p>
      <p>Kaiya stood over him, entirely right again. And ahead of her, four identical gray roads stretched into the scrub without a single landmark to tell them apart.</p>
      <button class="subtle-link" type="button">Drop the indictment</button>
    </div>
  `;

  const fieldPassage = `
    <div class="canon-continuation" id="ch02-field-passage" tabindex="-1">
      <p>Kaiya crouched down at the edge of the flagstones—not inside his diagram, and not above him—resting her forearms on her knees.</p>
      <p data-road-line></p>
      <p>The wind moved through the intersection, carrying a little chalk dust across their boots, and for the first time the man didn't lunge to redraw the line.</p>
      <p>Beside her, Ferros rested a heavy brass hand on his own knee. "Tell her your name, Pell," the brass man said gently. "You've been chewing on the geometry since Tuesday."</p>
      <button class="next-beat-btn" type="button">Meet Pell at the marker →</button>
    </div>
  `;

  const encounter = `
    <div class="ferros-backdrop" aria-hidden="true">
      <div class="visual-plate" id="pell-plate">
        <img id="pell-img-idle" src="assets/ch02/stills/ch02-pell-idle-keyframe.png" alt="" style="opacity: 1">
        <img id="pell-img-lookup" src="assets/ch02/stills/ch02-pell-lookup-keyframe.png" alt="" style="opacity: 0">
        <video id="pell-vid-idle" data-src="assets/ch02/video/pell-idle-loop.mp4" poster="assets/ch02/stills/ch02-pell-idle-keyframe.png" muted loop playsinline preload="auto" style="opacity: 0"></video>
        <video id="pell-vid-lookup" data-src="assets/ch02/video/pell-look-up.mp4" poster="assets/ch02/stills/ch02-pell-lookup-keyframe.png" muted playsinline preload="auto" style="opacity: 0"></video>
      </div>
    </div>
    <div class="ferros-prose-overlay">
      <p>Up close, Pell wasn't stuffed with dead hay. Beneath the ledger-parchment lapels of his coat, woven bundles of golden flax and copper filament pulsed with quick, restless light—a beautiful mind that had been running without a ground wire.</p>
      <p>His fingers still turned the stub of willow charcoal over and over, eyes fixed on the blurred equations by his knees.</p>
      <p>"On your first trip through here," Pell said quietly, his voice like dry pages turning in a warm room, "you wanted someone to hand you the answer so you wouldn't be responsible for where your feet went. If I wipe this stone clean and come with you, what happens the first time we take a turn that isn't on the map?"</p>
      <form class="ferros-exchange" id="pell-box">
        <label for="pell-input">Answer Pell at the crossroads:</label>
        <input id="pell-input" class="field-input" type="text" placeholder="e.g., Then we find out where it actually leads together.">
        <button class="field-btn" type="submit">Answer Pell</button>
      </form>
      <div id="pell-resolution" data-resolution></div>
    </div>
  `;

  const resolution = `
    <div class="canon-continuation" style="border-top: none; padding-top: 12px; margin-top: 18px">
      <p>Kaiya reached out and brushed a palm calmly across the corner of the chalk tree, smudging the last probability branch back into the warm ochre stone.</p>
      <p data-pell-reply data-reply></p>
      <p>Pell's hand stopped turning the charcoal. He opened his fingers, let the charred stick drop onto the flagstones, and raised his head—dark, amber-threaded eyes meeting hers with the quiet relief of a mind finally allowed to stop defending the future.</p>
      <p>"All right, then," Pell said, rising and dusting the chalk from his knees. "Leave the fourth standard deviation to the crows. The timberline is two miles north, and the Lion has been pretending he isn't afraid of his own shadow all week."</p>
      <button class="next-beat-btn" onclick="YBC.loadChapter(3)">Walk two miles north →</button>
    </div>
  `;

  window.YBC_CHAPTERS[2] = YBCThreshold({
    number: 2, title: 'Threshold II', initialPosture: 'field',
    fieldResponse: 'ch02_threshold', completionResponse: 'ch02_pell',
    encounterCheckpoint: 'pell-marker', anchor: 'assets/ref/pell-anchor.png',
    opening, traps: { flattery, cynic }, fieldPassage, encounter, resolution,
    trapTitles: {
      flattery: 'Cul-de-sac: The Sterile Forecast',
      cynic: 'Cul-de-sac: Contempt for the Mind'
    },
    thresholdDefault: "A map isn't a promise. You don't have to solve the whole road before you take the first step.",
    replyDefault: 'Then we find out where it actually leads together.',
    chalkFallback: true,
    actions: {
      enterTrap: 'ch02EnterTrap', openBridge: 'ch02OpenBridge', unlockField: 'ch02UnlockField',
      approach: 'approachPell', answer: 'answerPell'
    }
  });
})();
