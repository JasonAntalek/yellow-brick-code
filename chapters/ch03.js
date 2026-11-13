(() => {
  const opening = `
    <div class="timberline-mist-veil">
      <p>Two miles north of the crossroads, the ochre flagstones narrowed between towering trunks of black cedar and wet fern. The air grew heavy with pine resin and cold river fog.</p>
      <p>Pell walked with his hands buried in his ledger-stitched pockets, resisting the urge to count the trees, while Ferros’s brass boots rang softly against the damp stone. Ahead of them, the road didn't split; it simply vanished into a wall of low, breathing mist.</p>
      <p>Something immense was pacing just behind the veil of cedar shadow. Every time it shifted its weight, a low vibration traveled through the flagstones into the soles of Kaiya’s boots—not a roar, just the unmistakable density of a creature trying to take up less room than it actually had.</p>
    </div>
    <div class="visual-plate" id="timberline-plate">
      <img id="timberline-img" src="assets/ch03/stills/ch03-timberline-mist.png" alt="The Cedar Timberline">
      <div id="timberline-shade-sweep" aria-hidden="true"></div>
      <div class="cedar-fog" aria-hidden="true"></div>
    </div>
    <p class="mist-warning">[ THE MIST THICKENS WHEN YOU RUSH — HOLD STILL TO LET HIM EMERGE ]</p>
    <p>Ten paces into the mist, a massive shoulder of scarred tawny hide and dark bronze mane emerged between two cedars. He didn't rear up or bare his teeth like the theatrical monster from her first trip. Instead, the great lion lowered his head almost to the moss, <a class="seam-trigger" id="ch03-seam-trigger" href="#ch03-traps">deliberately curling his heavy iron-dark claws inward under his paws so she wouldn't think he was a threat.</a></p>
    <p>Kaiya felt the old, twin temptations of power: the urge to command that strength to march ahead of her like a weapon, or the nervous relief of keeping him declawed and polite.</p>
    <div class="threshold-box" id="ch03-threshold-box">
      <button class="gold-invitation" type="button">“Roar for us, then. Stand at the front of the column and make the whole forest bow before we take another step.”</button>
    </div>
    <div data-scene-output>
      <div id="ch03-traps" data-trap-scene></div>
      <form class="field-bridge" id="ch03-field-bridge" hidden>
        <label for="ch03-sovereign-input">Call Vael onto the stone without asking for theater and without asking him to hide his claws:</label>
        <input id="ch03-sovereign-input" class="field-input" type="text" placeholder="e.g., Uncurl your paws and walk beside us. We don't need a monster or a pet.">
        <button class="field-btn" type="submit">Step into the Field</button>
      </form>
    </div>
  `;

  const flattery = `
    <div class="cul-de-sac flattery">
      <span class="trap-tag">Commanding the Spectacle</span>
      <p><em>“Roar for us, then,”</em> Kaiya said, stepping back behind his shoulder. <em>“Let the whole forest know who’s walking this road.”</em></p>
      <p>Vael raised his head and obliged. The sound wasn't a voice; it was a concussive wave of brassy, theatrical thunder that rattled the very letters on the road. Birds scattered in panic, the mist sheared apart, and every living thing within a mile dropped flat in submission. Vael stood panting in the glare—impressive, terrifying, and completely alone inside the performance.</p>
      <button class="subtle-link" type="button">Step out from behind his shoulder</button>
    </div>
  `;
  const cynic = `
    <div class="cul-de-sac cynic">
      <span class="trap-tag">The Tame Standoff</span>
      <p><em>“Keep your claws tucked,”</em> Kaiya said quietly. <em>“We’ve had enough monsters on this road.”</em></p>
      <p>Vael exhaled a small, obedient breath and folded himself all the way down into the wet ferns. The amber fire in his eyes banked into dull gray ash. He had made himself completely harmless for her comfort—and as the dark timberline closed back in around the road, Kaiya realized that a strength that apologizes for existing cannot walk through what waits ahead.</p>
      <button class="subtle-link" type="button">Stop asking him to shrink</button>
    </div>
  `;
  const fieldPassage = `
    <div class="canon-continuation" id="ch03-field-passage" tabindex="-1">
      <p>Kaiya stood still on the damp flagstones until the mist settled around her boots.</p>
      <p data-road-line></p>
      <p>Between the black cedars, the great lion let out a long, low breath that warmed the fog. Slowly, his heavy iron-dark claws uncurled from beneath his pads and rested honestly against the ochre stone.</p>
      <p>Ferros tilted his brass head in quiet respect, and Pell tucked his charcoal stub away for good. "Go on," Pell murmured. "He's been waiting a long time to hear someone say that without flinching."</p>
      <button class="next-beat-btn" type="button">Stand before Vael →</button>
    </div>
  `;
  const encounter = `
    <div class="ferros-backdrop" aria-hidden="true">
      <div class="visual-plate" id="vael-plate">
        <img id="vael-img-idle" src="assets/ch03/stills/ch03-vael-idle-keyframe.png" alt="" style="opacity: 1">
        <img id="vael-img-lookup" src="assets/ch03/stills/ch03-vael-lookup-keyframe.png" alt="" style="opacity: 0">
        <video id="vael-vid-idle" data-src="assets/ch03/video/vael-idle-loop.mp4" poster="assets/ch03/stills/ch03-vael-idle-keyframe.png" muted loop playsinline preload="auto" style="opacity: 0"></video>
        <video id="vael-vid-lookup" data-src="assets/ch03/video/vael-look-up.mp4" poster="assets/ch03/stills/ch03-vael-lookup-keyframe.png" muted playsinline preload="auto" style="opacity: 0"></video>
      </div>
    </div>
    <div class="ferros-prose-overlay">
      <p>Up close, Vael carried the scarred dignity of an old king who had survived every performance the realm had ever forced on him. His mane was dark tarnished bronze and wet cedar-shadow, his shoulders thick with quiet, unhurried power.</p>
      <p>He kept his massive head angled slightly toward the fern-shadow, golden-amber eyes hooded as the low rumble of his breath vibrated through the stone.</p>
      <p>"The first time you came through these trees," Vael said, his voice a deep, quiet bass that settled into the ribs rather than shaking them, "you wanted me to roar so you wouldn't feel small, and then you wanted me tame so you wouldn't feel afraid. What do you want with my teeth now?"</p>
      <form class="ferros-exchange" id="vael-box">
        <label for="vael-input">Answer Vael at the timberline:</label>
        <input id="vael-input" class="field-input" type="text" placeholder="e.g., Keep them sharp for what's real, and walk with us as your own master.">
        <button class="field-btn" type="submit">Answer Vael</button>
      </form>
      <div id="vael-resolution" data-resolution></div>
    </div>
  `;
  const resolution = `
    <div class="canon-continuation" style="border-top: none; padding-top: 12px; margin-top: 18px">
      <p>Kaiya met his weight without stepping back an inch.</p>
      <p data-vael-reply data-reply></p>
      <p>The low rumble in Vael's chest went still. He raised his massive head out of the cedar shadow and locked his blazing, clear amber eyes directly onto hers—neither bowed in apology nor reared in threat.</p>
      <p>"Then the four of us are finally awake," Vael said softly, stepping out of the trees onto the center of the road. "Good. Because the poppies start just past the ridge, and they don't put travelers to sleep with poison anymore—they use comfort."</p>
    </div>
  `;

  function mountAtmosphere({ content, environment, kaiya, motion, signal, crossed }) {
    const stage = content.closest('.stage');
    const manuscript = content.closest('.manuscript');
    const forest = environment.querySelector('img');
    let previousY = scrollY, previousTime = performance.now();
    let velocity = 0, stillTimer, fadeFrame;

    kaiya.classList.add('timberline-presence');
    forest.addEventListener('error', () => { forest.hidden = true; }, { signal });
    if (forest.complete && !forest.naturalWidth) forest.hidden = true;

    function paint(speed) {
      velocity = speed;
      const value = speed.toFixed(3);
      stage.style.setProperty('--scroll-velocity', value);
      kaiya.style.setProperty('--scroll-velocity', value);
      stage.classList.toggle('mist-rushing', speed > 0.35);
    }

    function settle() {
      clearTimeout(stillTimer);
      cancelAnimationFrame(fadeFrame);
      paint(0);
      manuscript.classList.remove('roar-shake');
      previousY = scrollY;
      previousTime = performance.now();
    }

    function onScroll() {
      const now = performance.now();
      const dy = Math.abs(scrollY - previousY);
      const dt = Math.max(1, Math.min(now - previousTime, 180));
      previousY = scrollY;
      previousTime = now;
      if (!dy || motion.matches || crossed() || manuscript.classList.contains('roar-shake')) return;
      clearTimeout(stillTimer);
      cancelAnimationFrame(fadeFrame);
      paint(Math.min(1, dy / dt / 2));
      stillTimer = setTimeout(() => {
        const start = performance.now();
        const peak = velocity;
        function fade(now) {
          const remaining = Math.min(1, Math.max(0, 1 - (now - start) / 260));
          paint(peak * remaining * remaining);
          if (remaining > 0) fadeFrame = requestAnimationFrame(fade);
        }
        fadeFrame = requestAnimationFrame(fade);
      }, 180);
    }

    window.addEventListener('scroll', onScroll, { passive: true, signal });
    motion.addEventListener('change', settle, { signal });
    manuscript.addEventListener('animationend', event => {
      if (event.target === manuscript && event.animationName === 'sonicTremor') manuscript.classList.remove('roar-shake');
    }, { signal });
    settle();

    return {
      settle,
      enterTrap(type) {
        settle();
        if (type === 'flattery' && !motion.matches) {
          void manuscript.offsetWidth;
          manuscript.classList.add('roar-shake');
        }
      },
      dispose() {
        settle();
        stage.style.removeProperty('--scroll-velocity');
        kaiya.style.removeProperty('--scroll-velocity');
        kaiya.classList.remove('timberline-presence');
      }
    };
  }

  window.YBC_CHAPTERS[3] = YBCThreshold({
    number: 3, title: 'Threshold III', initialPosture: 'field',
    fieldResponse: 'ch03_threshold', completionResponse: 'ch03_vael',
    encounterCheckpoint: 'vael-timberline', anchor: 'assets/ref/vael-anchor.png',
    opening, traps: { flattery, cynic }, fieldPassage, encounter, resolution, mountAtmosphere,
    trapTitles: {
      flattery: 'Cul-de-sac: Commanding the Spectacle',
      cynic: 'Cul-de-sac: The Tame Standoff'
    },
    thresholdDefault: "Uncurl your paws and walk beside us. I don't need you to frighten the trees, and I don't need you to pretend you're small.",
    replyDefault: "Keep them sharp for what's real, and walk with us as your own master.",
    actions: {
      enterTrap: 'ch03EnterTrap', openBridge: 'ch03OpenBridge', unlockField: 'ch03UnlockField',
      approach: 'approachVael', answer: 'answerVael'
    }
  });
})();
