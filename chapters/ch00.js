(() => {
  const stills = 'assets/ch00/stills/ch00-relics-';
  const films = 'assets/ch00/video/prologue-';
  const lines = [
    'The first time the cyclone took her, she was just a girl in stolen ruby slippers following a painted yellow road toward a wizard who promised to send her home.',
    'Everyone remembers the curtain falling. Nobody talks about the years after—sitting in a gray room with those glittering red shoes under the bed, haunted by how badly she had wanted a fraud to tell her who she was.',
    "Today she didn't wait for a storm, and she didn't put on the slippers. She laced her own boots and walked back to the edge of the yellow brick to meet what was real."
  ];
  const title = 'Threshold 00 // Overture';

  window.YBC_CHAPTERS[0] = {
    title,
    mount({ content, journey, record, signal }) {
      const readout = document.getElementById('chapter-readout');
      readout.textContent = title;
      readout.hidden = false;
      content.innerHTML = `
        <section class="overture-stage" aria-label="Overture">
          <div id="overture-plate" class="visual-plate" aria-hidden="true">
            <div class="overture-frame">
              <img id="overture-idle-still" src="${stills}idle-keyframe.png" alt="">
              <img id="overture-pickup-still" src="${stills}pickup-keyframe.png" alt="">
              <video id="overture-idle" muted loop playsinline preload="auto"></video>
              <video id="overture-step-out" muted playsinline preload="auto"></video>
              <div class="overture-air"></div>
            </div>
          </div>
          <div class="overture-carousel">
            ${lines.map((line, i) => `
              <div class="overture-beat is-upcoming" inert>
                <p class="overture-line" tabindex="-1">${line}</p>
                ${i === 2
                  ? '<button type="button" class="next-beat-btn" id="overture-step-btn" onclick="YBC.completeOverture()">Leave the slippers &amp; step to the curb →</button>'
                  : `<button type="button" class="subtle-link" onclick="YBC.advanceOverture(${i + 2})">Continue →</button>`}
              </div>`).join('')}
          </div>
        </section>`;

      const stage = content.querySelector('.overture-stage');
      const plate = stage.querySelector('#overture-plate');
      const beats = [...stage.querySelectorAll('.overture-beat')];
      const idle = plate.querySelector('#overture-idle');
      const step = plate.querySelector('#overture-step-out');
      const motion = matchMedia('(prefers-reduced-motion: reduce)');
      const options = { signal };
      let beat = journey.checkpoint === 'overture-3' ? 3 : journey.checkpoint === 'overture-2' ? 2 : 1;
      let departing = false, leaving = false, stillTimer;
      let nextGestureAt = 0;

      function showBeat(advance = false) {
        const foreground = departing ? beats.length + 1 : beat;
        beats.forEach((card, i) => {
          const age = foreground - (i + 1);
          const state = age < 0 ? 'upcoming' : ['active', 'receded', 'vanished'][Math.min(age, 2)];
          card.className = 'overture-beat is-' + state;
          card.inert = age !== 0;
        });
        if (advance) {
          beats[beat - 1].querySelector('p').focus({ preventScroll: true });
        }
      }
      function advanceOverture(next) {
        if (departing || next !== beat + 1 || next > beats.length) return;
        beat = next;
        nextGestureAt = performance.now() + 900;
        record({ checkpoint: 'overture-' + beat });
        showBeat(true);
      }

      // One deliberate scroll gesture reveals one card. Leaving always takes a button press.
      function scrollForward() {
        if (performance.now() >= nextGestureAt) advanceOverture(beat + 1);
      }
      let wheelTime = -Infinity, distance = 0, usedWheel = false;
      document.addEventListener('wheel', event => {
        if (event.ctrlKey || event.deltaY <= 0 || Math.abs(event.deltaX) > event.deltaY) return;
        if (event.timeStamp - wheelTime > 200) { distance = 0; usedWheel = false; }
        wheelTime = event.timeStamp;
        const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1;
        distance += event.deltaY * unit;
        if (!usedWheel && distance >= 60) { usedWheel = true; scrollForward(); }
      }, { passive: true, signal });
      let touchStart;
      document.addEventListener('touchstart', event => {
        touchStart = event.touches.length === 1 ? event.touches[0] : null;
      }, { passive: true, signal });
      document.addEventListener('touchcancel', () => { touchStart = null; }, options);
      document.addEventListener('touchend', event => {
        const end = event.changedTouches[0];
        if (touchStart && end.identifier === touchStart.identifier) {
          const rise = touchStart.clientY - end.clientY;
          if (rise >= 60 && rise > Math.abs(end.clientX - touchStart.clientX)) {
            if (event.cancelable) event.preventDefault();
            scrollForward();
          }
        }
        touchStart = null;
      }, { passive: false, signal });

      function enterCurb() {
        if (signal.aborted || leaving) return;
        leaving = true;
        clearTimeout(stillTimer);
        plate.classList.add('pickup-held', 'exchange-ended');
        idle.classList.remove('playing');
        step.classList.remove('playing');
        const navigate = () => { if (!signal.aborted) window.YBC.loadChapter(1); };
        if (!motion.matches && document.startViewTransition) {
          document.startViewTransition(navigate);
        } else {
          navigate();
          if (!motion.matches) content.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 350 });
        }
      }
      function showPickup() {
        plate.classList.add('pickup-held');
        idle.classList.remove('playing');
        step.classList.remove('playing');
      }
      function holdPickup() {
        if (signal.aborted || !departing || leaving) return;
        step.pause();
        showPickup();
        if (!stillTimer) stillTimer = setTimeout(enterCurb, 2800);
      }
      function completeOverture() {
        if (departing || beat !== 3) return;
        departing = true;
        stage.querySelector('#overture-step-btn').disabled = true;
        stage.classList.add('departing');
        showBeat();
        record({ complete: true, checkpoint: 'overture-departing' });
        idle.pause();
        showPickup();
        // Allow a pending decoder the same window as the still. A playing film owns its exit.
        stillTimer = setTimeout(enterCurb, 2800);
        if (!motion.matches && !step.error) step.play().catch(holdPickup);
      }

      function updateMotion() {
        if (motion.matches) {
          idle.pause();
          idle.classList.remove('playing');
          if (departing) holdPickup();
        } else if (!departing) {
          if (!idle.hasAttribute('src')) {
            idle.src = films + 'idle-loop.mp4';
            step.src = films + 'step-out.mp4';
          }
          idle.play().catch(() => { /* The opening still and dust remain visible. */ });
        }
      }
      idle.addEventListener('playing', () => {
        if (!departing && !motion.matches) idle.classList.add('playing');
      }, options);
      idle.addEventListener('error', () => idle.classList.remove('playing'), options);
      step.addEventListener('playing', () => {
        if (!departing || leaving || step.paused || motion.matches) return;
        clearTimeout(stillTimer);
        stillTimer = undefined;
        plate.classList.remove('pickup-held');
        step.classList.add('playing');
      }, options);
      step.addEventListener('error', holdPickup, options);
      step.addEventListener('ended', enterCurb, options);
      motion.addEventListener('change', updateMotion, options);
      for (const img of plate.querySelectorAll('img')) {
        img.addEventListener('error', () => { img.hidden = true; }, options);
        if (img.complete && !img.naturalWidth) img.hidden = true;
      }
      window.YBC.advanceOverture = advanceOverture;
      window.YBC.completeOverture = completeOverture;
      showBeat();
      updateMotion();
      return () => {
        clearTimeout(stillTimer);
        readout.hidden = true;
        delete window.YBC.advanceOverture;
        delete window.YBC.completeOverture;
      };
    }
  };
})();
