// Classic script so the chapter sequence also works when the book is opened from disk.
window.YBCThreshold = function (chapter) {
  return {
    title: chapter.title,
    initialPosture: chapter.initialPosture,
    fieldResponse: chapter.fieldResponse,
    completionResponse: chapter.completionResponse,
    mount({ content, scenes, journey, record, signal, resuming }) {
      content.innerHTML = chapter.opening;
      const traps = content.querySelector('[data-trap-scene]');
      const bridge = content.querySelector('.field-bridge');
      const output = content.querySelector('[data-scene-output]');
      const seam = content.querySelector('.seam-trigger');
      const invitation = content.querySelector('.gold-invitation');
      const environment = content.querySelector('.visual-plate');
      const kaiya = document.getElementById('kaiya-presence');
      const readout = document.getElementById('chapter-readout');
      const motion = matchMedia('(prefers-reduced-motion: reduce)');
      const options = { signal };
      const completed = () => journey.completedChapters.includes(chapter.number);
      const crossed = () => completed() || Boolean(journey.responses[chapter.fieldResponse]);
      const atmosphere = chapter.mountAtmosphere?.({ content, environment, kaiya, motion, signal, crossed });
      let plate, scene, form, ending, idle, lookup;
      let scrollFrame, dissolve;

      function setReadout(text) {
        readout.hidden = !chapter.trapTitles;
        readout.textContent = text;
      }

      function updateLight() {
        scrollFrame = 0;
        const rect = environment.getBoundingClientRect();
        const progress = (innerHeight - rect.top) / (innerHeight + rect.height);
        const light = motion.matches ? 0.5 : Math.max(0, Math.min(1, progress));
        const offset = motion.matches ? 0 : Math.min(Math.max(0, scrollY), innerHeight * 1.5);
        environment.style.setProperty('--curb-light', light.toFixed(4));
        kaiya.style.setProperty('--scroll-y', offset + 'px');
        kaiya.classList.toggle('yield-to-ferros', Boolean(plate && plate.getBoundingClientRect().top < innerHeight));
      }

      function scheduleLight() {
        if (!scrollFrame) scrollFrame = requestAnimationFrame(updateLight);
      }

      function reveal(el, block = 'start') {
        el.scrollIntoView({ behavior: motion.matches ? 'instant' : 'smooth', block });
      }

      function showTrap(type) {
        bridge.hidden = true;
        traps.innerHTML = chapter.traps[type];
        setReadout(chapter.trapTitles?.[type] || chapter.title);
        traps.querySelector('button').addEventListener('click', openBridge);
      }

      function enterTrap(type) {
        if (crossed() || !Object.hasOwn(chapter.traps, type)) return;
        record({ postureMode: type });
        showTrap(type);
        atmosphere?.enterTrap(type);
        reveal(traps, 'nearest');
      }

      function showBridge() {
        traps.querySelector('button').hidden = true;
        bridge.hidden = false;
      }

      function openBridge() {
        if (crossed() || !bridge.hidden || !traps.firstElementChild) return;
        record({ checkpoint: 'bridge' });
        showBridge();
        bridge.querySelector('input').focus({ preventScroll: true });
        reveal(bridge, 'nearest');
      }

      function showField() {
        atmosphere?.settle();
        seam.removeAttribute('href');
        seam.classList.add('locked');
        invitation.disabled = true;
        invitation.parentElement.hidden = true;
        output.inert = false;
        output.innerHTML = chapter.fieldPassage;
        const spoken = journey.responses[chapter.fieldResponse] || chapter.thresholdDefault;
        output.querySelector('[data-road-line]').textContent = '“' + spoken + '”';
        output.querySelector('.next-beat-btn').addEventListener('click', approach);
        setReadout(chapter.title);
      }

      async function unlockField() {
        if (crossed() || bridge.hidden) return;
        const spoken = bridge.querySelector('input').value.trim() || chapter.thresholdDefault;
        record({ postureMode: 'field', responses: { [chapter.fieldResponse]: spoken } });
        seam.removeAttribute('href');
        invitation.disabled = true;
        output.inert = true;
        if (!motion.matches) {
          dissolve = output.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 240, easing: 'ease-in' });
          try { await dissolve.finished; }
          catch (error) { if (!signal.aborted) throw error; }
        }
        if (signal.aborted) return;
        showField();
        output.firstElementChild.focus({ preventScroll: true });
        reveal(output);
      }

      function holdGaze() {
        if (signal.aborted) return;
        lookup.style.opacity = '0';
        plate.classList.add('gaze-held');
      }

      function lockGaze() {
        plate.classList.add('gaze-locked');
        const [start, end] = plate.querySelectorAll('img');
        start.style.opacity = '0';
        end.style.opacity = '1';
        idle.style.opacity = '0';
        idle.pause();
      }

      function syncMotion() {
        if (motion.matches) {
          idle.pause();
          lookup.pause();
          idle.style.opacity = '0';
          if (completed()) holdGaze();
        } else if (!completed()) {
          if (!idle.hasAttribute('src')) {
            idle.src = idle.dataset.src;
            lookup.src = lookup.dataset.src;
          }
          idle.play().then(() => {
            if (!signal.aborted && !idle.paused && !completed()) idle.style.opacity = '1';
          }).catch(() => { /* The idle keyframe stays visible. */ });
        }
      }

      function showReply() {
        form.hidden = true;
        ending.innerHTML = chapter.resolution;
        const reply = journey.responses[chapter.completionResponse] || chapter.replyDefault;
        ending.querySelector('[data-reply]').textContent = '“' + reply + '”';
      }

      function answer() {
        if (!form || completed()) return;
        const reply = form.querySelector('input').value.trim() || chapter.replyDefault;
        record({ responses: { [chapter.completionResponse]: reply }, complete: true });
        lockGaze();
        if (motion.matches || lookup.error) {
          holdGaze();
        } else {
          lookup.currentTime = 0;
          lookup.style.opacity = '1';
          lookup.play().catch(holdGaze);
        }
        showReply();
        ending.tabIndex = -1;
        ending.focus({ preventScroll: true });
        ending.scrollIntoView({ behavior: 'instant', block: 'start' });
      }

      function showEncounter() {
        output.querySelector('.next-beat-btn').hidden = true;
        scene = document.createElement('section');
        scene.className = 'ferros-immersive-stage';
        scene.innerHTML = chapter.encounter;
        scenes.append(scene);
        plate = scene.querySelector('.visual-plate');
        idle = plate.querySelector('video[loop]');
        lookup = plate.querySelector('video:not([loop])');
        form = scene.querySelector('.ferros-exchange');
        ending = scene.querySelector('[data-resolution]');
        for (const still of plate.querySelectorAll('img')) {
          still.addEventListener('error', () => { still.src = chapter.anchor; }, { once: true, signal });
        }
        updateLight();
        if (completed()) {
          // A revisit needs only the held keyframe, even if the reader left mid-clip.
          lockGaze();
          holdGaze();
          showReply();
          return;
        }
        idle.addEventListener('error', () => { idle.style.opacity = '0'; }, options);
        lookup.addEventListener('ended', holdGaze, options);
        lookup.addEventListener('error', () => { if (completed()) holdGaze(); }, options);
        motion.addEventListener('change', syncMotion, options);
        form.addEventListener('submit', event => { event.preventDefault(); answer(); }, options);
        syncMotion();
      }

      function approach() {
        if (!crossed() || scene || !output.querySelector('.next-beat-btn')) return;
        record({ checkpoint: chapter.encounterCheckpoint });
        showEncounter();
        scene.tabIndex = -1;
        scene.focus({ preventScroll: true });
        reveal(scene);
      }

      if (chapter.actions) {
        const handlers = { enterTrap, openBridge, unlockField, approach, answer };
        for (const [method, name] of Object.entries(chapter.actions)) window.YBC[name] = handlers[method];
      }
      if (chapter.chalkFallback) {
        const img = environment.querySelector('img');
        const fallback = () => { img.hidden = true; environment.classList.add('chalk-fallback'); };
        img.addEventListener('error', fallback, { once: true, signal });
        if (img.complete && !img.naturalWidth) fallback();
      }
      seam.addEventListener('click', event => { event.preventDefault(); enterTrap('cynic'); }, options);
      invitation.addEventListener('click', () => enterTrap('flattery'), options);
      bridge.addEventListener('submit', event => { event.preventDefault(); unlockField(); }, options);
      window.addEventListener('scroll', scheduleLight, { passive: true, signal });
      window.addEventListener('resize', scheduleLight, options);
      motion.addEventListener('change', scheduleLight, options);

      setReadout(chapter.title);
      let resumeAt;
      if (crossed()) {
        showField();
        resumeAt = output;
        if (completed() || journey.checkpoint === chapter.encounterCheckpoint) {
          showEncounter();
          resumeAt = completed() ? ending : scene;
        }
      } else if (Object.hasOwn(chapter.traps, journey.postureMode)) {
        showTrap(journey.postureMode);
        resumeAt = traps;
        if (journey.checkpoint === 'bridge') {
          showBridge();
          resumeAt = bridge;
        }
      }
      if (resuming && resumeAt) resumeAt.scrollIntoView({ behavior: 'instant', block: 'start' });
      scheduleLight();
      return () => {
        atmosphere?.dispose();
        cancelAnimationFrame(scrollFrame);
        dissolve?.cancel();
        kaiya.classList.remove('yield-to-ferros');
        kaiya.style.removeProperty('--scroll-y');
        readout.hidden = true;
        if (chapter.actions) for (const name of Object.values(chapter.actions)) delete window.YBC[name];
      };
    }
  };
};
