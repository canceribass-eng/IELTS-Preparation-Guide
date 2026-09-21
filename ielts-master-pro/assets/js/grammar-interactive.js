/**
 * IELTS Master Pro - Next-Gen Universal Interactive & Programmatic Video Engine
 * ------------------------------------------------------------------------------
 * Universal 4-Mode Dynamic Architecture for ALL 148 CEFR Topics (A1 - C2):
 *  1. Sinematik Motion Video (Vox / Kurzgesagt Style Programmatic 60 FPS Video)
 *  2. Sentaks Laboratuvarı (Brilliant.org / Keynote Style Vector Morphing & Sandbox)
 *  3. İnteraktif Senaryo (Dr. Clara Animated Avatar, Lip-Sync, Web Speech TTS, Band Meter)
 *  4. Klasik Slayt Dersi (GrammarVideoPlayer Integration)
 *  + Ansiklopedik Konu Kılavuzu (Derinlemesine Akademik Sınav Rehberi)
 *
 * 0-Token Runtime Cost, Pure Client-Side HTML5 / SVG / CSS / Web Audio / Web Speech API
 */

const InteractiveGrammarHub = (function() {
  let activeMode = 'motion'; // 'motion' | 'kinetic' | 'dialogue' | 'slide'
  let currentTopic = null;

  // =========================================================================
  // 1. WEB AUDIO SYNTHESIZER & AMBIENT CINEMA SOUNDTRACK ENGINE
  // =========================================================================
  const SoundFX = {
    ctx: null,
    ambientPlaying: false,
    ambientNodes: [],
    ambientMasterGain: null,
    volume: 0.35,
    isMuted: (typeof localStorage !== 'undefined' && localStorage.getItem('ielts_master_audio_muted') === 'true') || false,
    ambientSessionId: 0,
    currentTrack: (typeof localStorage !== 'undefined' && localStorage.getItem('ielts_grammar_music_track')) || 'lofi',
    lastNonOffTrack: 'lofi',

    musicTracks: {
      lofi: { name: "☕ Lo-Fi Study (Sakin)", desc: "Yumuşak Fmaj7 analog pad & odak akışı" },
      synthwave: { name: "🌌 Synthwave Chill", desc: "Sıcak 80'ler Am9 retro analog drone" },
      zen: { name: "🎐 Zen Kristal", desc: "Meditatif berrak pentatonik tınılar" },
      strings: { name: "🎻 Cinematic Strings", desc: "Oxford klasik oda yaylı armonisi" },
      binaural: { name: "🧠 432Hz Alfa Odak", desc: "10Hz alfa dalgası derin konsantrasyon" },
      off: { name: "🔇 Müzik Kapalı", desc: "Yalnızca sesli anlatım ve efektler" }
    },

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended' && !this.isMuted) {
        this.ctx.resume().catch(() => {});
      }
      return this.ctx;
    },

    setVolume(vol) {
      this.volume = Math.max(0, Math.min(1, vol));
      if (this.ambientMasterGain && this.ctx) {
        try {
          const now = this.ctx.currentTime;
          this.ambientMasterGain.gain.setValueAtTime(this.ambientMasterGain.gain.value, now);
          this.ambientMasterGain.gain.linearRampToValueAtTime(this.isMuted ? 0 : this.volume, now + 0.1);
        } catch(e) {}
      }
    },

    playSnap() {
      if (this.isMuted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const play = () => {
          if (this.isMuted) return;
          try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(340, now);
            osc.frequency.exponentialRampToValueAtTime(800, now + 0.09);
            gain.gain.setValueAtTime(0.30, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.09);
          } catch(e) {}
        };
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().then(play).catch(() => {});
        } else {
          play();
        }
      } catch (e) {}
    },

    playSwoosh() {
      if (this.isMuted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const play = () => {
          if (this.isMuted) return;
          try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.exponentialRampToValueAtTime(650, now + 0.12);
            osc.frequency.exponentialRampToValueAtTime(120, now + 0.28);
            gain.gain.setValueAtTime(0.01, now);
            gain.gain.linearRampToValueAtTime(0.28, now + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.28);
          } catch(e) {}
        };
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().then(play).catch(() => {});
        } else {
          play();
        }
      } catch (e) {}
    },

    playLaserSlice() {
      if (this.isMuted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const play = () => {
          if (this.isMuted) return;
          try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(1400, now);
            osc.frequency.exponentialRampToValueAtTime(120, now + 0.3);
            gain.gain.setValueAtTime(0.35, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.3);
          } catch(e) {}
        };
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().then(play).catch(() => {});
        } else {
          play();
        }
      } catch (e) {}
    },

    playSuccess() {
      if (this.isMuted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const play = () => {
          if (this.isMuted) return;
          try {
            const now = this.ctx.currentTime;
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
              const osc = this.ctx.createOscillator();
              const gain = this.ctx.createGain();
              osc.type = 'triangle';
              osc.frequency.setValueAtTime(freq, now + i * 0.08);
              gain.gain.setValueAtTime(0.30, now + i * 0.08);
              gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.28);
              osc.connect(gain);
              gain.connect(this.ctx.destination);
              osc.start(now + i * 0.08);
              osc.stop(now + i * 0.08 + 0.28);
            });
          } catch(e) {}
        };
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().then(play).catch(() => {});
        } else {
          play();
        }
      } catch (e) {}
    },

    playError() {
      if (this.isMuted) return;
      try {
        this.init();
        if (!this.ctx) return;
        const play = () => {
          if (this.isMuted) return;
          try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(160, now);
            osc.frequency.linearRampToValueAtTime(75, now + 0.22);
            gain.gain.setValueAtTime(0.30, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.22);
          } catch(e) {}
        };
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().then(play).catch(() => {});
        } else {
          play();
        }
      } catch (e) {}
    },

    setTrack(trackKey) {
      if (!this.musicTracks[trackKey]) trackKey = 'lofi';
      if (trackKey !== 'off') this.lastNonOffTrack = trackKey;
      this.currentTrack = trackKey;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('ielts_grammar_music_track', trackKey);
      }

      if (trackKey === 'off') {
        this.stopAmbient(false);
      } else {
        if (this.ambientPlaying && !this.isMuted) {
          this.stopAmbient(false);
          this.startAmbient();
        }
      }
    },

    cleanupNodes() {
      if (this.ambientMasterGain) {
        try {
          this.ambientMasterGain.gain.setValueAtTime(0, this.ctx ? this.ctx.currentTime : 0);
          this.ambientMasterGain.disconnect();
        } catch(e) {}
        this.ambientMasterGain = null;
      }
      this.ambientNodes.forEach(node => {
        try { if (node.stop) node.stop(0); } catch(e) {}
        try { if (node.disconnect) node.disconnect(); } catch(e) {}
      });
      this.ambientNodes = [];
    },

    startAmbient() {
      if (this.isMuted || this.currentTrack === 'off') {
        this.stopAmbient(false);
        return;
      }

      this.init();
      if (!this.ctx) return;

      this.ambientPlaying = true;
      const currentSession = ++this.ambientSessionId;

      const launchNodes = () => {
        try {
          if (this.isMuted || this.currentTrack === 'off' || !this.ambientPlaying || this.ambientSessionId !== currentSession) {
            return;
          }

          this.cleanupNodes();

          const now = this.ctx.currentTime;
          const masterGain = this.ctx.createGain();
          masterGain.gain.setValueAtTime(0.05, now);
          masterGain.gain.linearRampToValueAtTime(this.volume, now + 0.4);
          masterGain.connect(this.ctx.destination);
          this.ambientMasterGain = masterGain;

          const nodes = [];

          if (this.currentTrack === 'lofi') {
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(900, now);
            filter.connect(masterGain);
            nodes.push(filter);

            const freqs = [174.61, 220.00, 261.63, 329.63, 392.00];
            freqs.forEach((f, i) => {
              const osc = this.ctx.createOscillator();
              osc.type = i % 2 === 0 ? 'sine' : 'triangle';
              osc.frequency.setValueAtTime(f, now);
              const g = this.ctx.createGain();
              g.gain.setValueAtTime(0.14, now);
              osc.connect(g);
              g.connect(filter);
              osc.start(now);
              nodes.push(osc, g);
            });

          } else if (this.currentTrack === 'synthwave') {
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(750, now);
            filter.connect(masterGain);
            nodes.push(filter);

            const chord = [110.00, 164.81, 220.00, 261.63, 329.63];
            chord.forEach((f, i) => {
              const osc = this.ctx.createOscillator();
              osc.type = 'triangle';
              const detune = (i - 2) * 4.0;
              osc.frequency.setValueAtTime(f, now);
              osc.detune.setValueAtTime(detune, now);
              const g = this.ctx.createGain();
              g.gain.setValueAtTime(0.12, now);
              osc.connect(g);
              g.connect(filter);
              osc.start(now);
              nodes.push(osc, g);
            });

          } else if (this.currentTrack === 'zen') {
            const freqs = [261.63, 329.63, 392.00, 523.25, 659.25];
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(580, now);
            filter.Q.setValueAtTime(1.0, now);
            filter.connect(masterGain);
            nodes.push(filter);

            freqs.forEach(f => {
              const osc = this.ctx.createOscillator();
              osc.type = 'sine';
              osc.frequency.setValueAtTime(f, now);
              const g = this.ctx.createGain();
              g.gain.setValueAtTime(0.13, now);
              osc.connect(g);
              g.connect(filter);
              osc.start(now);
              nodes.push(osc, g);
            });

          } else if (this.currentTrack === 'strings') {
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(650, now);
            filter.connect(masterGain);
            nodes.push(filter);

            const chord = [146.83, 220.00, 293.66, 349.23, 440.00];
            chord.forEach((f, idx) => {
              const osc = this.ctx.createOscillator();
              osc.type = 'sawtooth';
              osc.frequency.setValueAtTime(f, now);
              osc.detune.setValueAtTime(idx % 2 === 0 ? 3.0 : -3.0, now);
              const g = this.ctx.createGain();
              g.gain.setValueAtTime(0.09, now);
              osc.connect(g);
              g.connect(filter);
              osc.start(now);
              nodes.push(osc, g);
            });

          } else if (this.currentTrack === 'binaural') {
            const freqs = [216.00, 432.00, 442.00];
            freqs.forEach((f, i) => {
              const osc = this.ctx.createOscillator();
              osc.type = 'sine';
              osc.frequency.setValueAtTime(f, now);
              const g = this.ctx.createGain();
              g.gain.setValueAtTime(i === 0 ? 0.16 : 0.14, now);
              osc.connect(g);
              g.connect(masterGain);
              osc.start(now);
              nodes.push(osc, g);
            });
          }

          this.ambientNodes = nodes;
        } catch(e) {}
      };

      if (this.ctx.state === 'suspended') {
        this.ctx.resume().then(launchNodes).catch(() => {});
      } else {
        launchNodes();
      }
    },

    stopAmbient(fade = false) {
      this.ambientSessionId++;
      this.ambientPlaying = false;

      if (!this.ambientNodes.length && !this.ambientMasterGain) return;

      if (fade && this.ctx && this.ambientMasterGain) {
        try {
          const now = this.ctx.currentTime;
          this.ambientMasterGain.gain.setValueAtTime(this.ambientMasterGain.gain.value, now);
          this.ambientMasterGain.gain.linearRampToValueAtTime(0.0001, now + 0.15);
        } catch(e) {}
        const nodesToStop = this.ambientNodes;
        const gainToDisconnect = this.ambientMasterGain;
        this.ambientNodes = [];
        this.ambientMasterGain = null;
        setTimeout(() => {
          nodesToStop.forEach(node => {
            try { if (node.stop) node.stop(0); } catch(e) {}
            try { if (node.disconnect) node.disconnect(); } catch(e) {}
          });
          try { if (gainToDisconnect) gainToDisconnect.disconnect(); } catch(e) {}
        }, 160);
      } else {
        this.cleanupNodes();
      }
    },

    toggleAmbient(enable) {
      if (!enable) {
        this.stopAmbient(true);
      } else {
        this.startAmbient();
      }
    }
  };

  // =========================================================================
  // 2. ROBUST WEB SPEECH SYNTHESIZER UTILITY (WITH CHROMIUM RACE-CONDITION FIX)
  // =========================================================================
  const SpeechUtil = {
    currentUtterance: null,
    speechRate: 1.0,
    cachedVoices: [],
    selectedVoiceURI: (typeof localStorage !== 'undefined' && localStorage.getItem('ielts_preferred_voice')) || null,
    isMuted: (typeof localStorage !== 'undefined' && localStorage.getItem('ielts_master_audio_muted') === 'true') || false,
    pendingTimer: null,

    initVoices() {
      if (!('speechSynthesis' in window)) return;
      this.cachedVoices = window.speechSynthesis.getVoices() || [];
    },

    setRate(rate) {
      this.speechRate = Math.max(0.5, Math.min(2.0, rate));
    },

    setVoice(uri) {
      this.selectedVoiceURI = uri;
      if (typeof localStorage !== 'undefined' && uri) {
        localStorage.setItem('ielts_preferred_voice', uri);
      }
    },

    populateVoiceSelect(selectEl) {
      if (!selectEl || typeof window === 'undefined' || !window.speechSynthesis) return;
      if (!this.cachedVoices || this.cachedVoices.length === 0) this.initVoices();
      const voices = this.cachedVoices || [];
      if (voices.length === 0) return;
      const enVoices = voices.filter(v => v.lang && v.lang.startsWith('en'));
      const activeUri = this.selectedVoiceURI || (this.getEnglishVoice() ? this.getEnglishVoice().voiceURI : '');
      const list = enVoices.length > 0 ? enVoices : voices;
      selectEl.innerHTML = list.slice(0, 10).map(v => {
        const cleanName = v.name.replace(/Microsoft |Google |English \(|\)/g, '').trim();
        return `<option value="${v.voiceURI}" ${v.voiceURI === activeUri ? 'selected' : ''}>${cleanName} (${v.lang})</option>`;
      }).join('');
    },

    getEnglishVoice() {
      if (!this.cachedVoices || this.cachedVoices.length === 0) {
        this.initVoices();
      }
      const vList = this.cachedVoices || [];
      if (this.selectedVoiceURI) {
        const match = vList.find(v => v.voiceURI === this.selectedVoiceURI);
        if (match) return match;
      }
      return vList.find(v => (v.lang === 'en-GB' || v.lang === 'en_GB') && (v.name.includes('Natural') || v.name.includes('Online') || v.name.includes('Neural'))) ||
             vList.find(v => v.lang.includes('en-GB') || v.name.includes('UK') || v.name.includes('British') || v.name.includes('Serena') || v.name.includes('Daniel') || v.name.includes('Oliver')) ||
             vList.find(v => (v.lang.startsWith('en')) && (v.name.includes('Natural') || v.name.includes('Online'))) ||
             vList.find(v => v.lang.startsWith('en'));
    },

    speak(text, onEnd) {
      if (this.isMuted || !('speechSynthesis' in window) || !text) {
        if (onEnd) onEnd();
        return;
      }

      this.stop();

      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        // 70ms tick to prevent Chromium queue drop race condition after cancel()
        this.pendingTimer = setTimeout(() => {
          this.pendingTimer = null;
          if (this.isMuted) {
            if (onEnd) onEnd();
            return;
          }

          try {
            if (window.speechSynthesis.paused) {
              window.speechSynthesis.resume();
            }

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = this.speechRate;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;

            const voice = this.getEnglishVoice();
            if (voice) {
              utterance.voice = voice;
              utterance.lang = voice.lang || 'en-GB';
            } else {
              utterance.lang = 'en-US';
            }

            let called = false;
            const finish = () => {
              if (!called) {
                called = true;
                if (onEnd) onEnd();
              }
            };

            utterance.onend = finish;
            utterance.onerror = (err) => {
              finish();
            };

            // Safety fallback timeout
            const wordCount = text.split(/\s+/).length;
            const estimatedMs = Math.max(3000, (wordCount / (2.2 * this.speechRate)) * 1000 + 2000);
            setTimeout(finish, estimatedMs);

            this.currentUtterance = utterance;
            window.speechSynthesis.speak(utterance);
          } catch(err) {
            if (onEnd) onEnd();
          }
        }, 70);
      } catch (e) {
        if (onEnd) onEnd();
      }
    },

    stop() {
      if (this.pendingTimer) {
        clearTimeout(this.pendingTimer);
        this.pendingTimer = null;
      }
      if ('speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
        } catch(e) {}
      }
    }
  };

  // Pre-load speech voices
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    SpeechUtil.initVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => SpeechUtil.initVoices();
    }
  }

  // Global Audio Unlock Listener on user interaction
  if (typeof window !== 'undefined') {
    const unlockGlobalAudio = () => {
      if (SoundFX.ctx && SoundFX.ctx.state === 'suspended' && !SoundFX.isMuted) {
        SoundFX.ctx.resume().catch(() => {});
      }
      if (SoundFX.ctx && SoundFX.ctx.state === 'running') {
        ['click', 'touchstart', 'keydown'].forEach(ev => {
          window.removeEventListener(ev, unlockGlobalAudio);
        });
      }
    };
    ['click', 'touchstart', 'keydown'].forEach(ev => {
      window.addEventListener(ev, unlockGlobalAudio, { passive: true });
    });
  }

  // =========================================================================
  // FORMAT 1: PROGRAMMATIC MOTION GRAPHICS VIDEO ENGINE (60 FPS NATIVE)
  // =========================================================================
  const MotionVideoEngine = {
    state: {
      isPlaying: false,
      sceneIndex: 0,
      totalDuration: 60,
      currentTime: 0,
      speed: 1.0,
      ambientEnabled: true,
      timerId: null
    },
    scenes: [],

    init(topic) {
      this.topic = topic;
      this.state.sceneIndex = 0;
      this.state.currentTime = 0;
      this.state.isPlaying = false;
      if (this.state.timerId) clearInterval(this.state.timerId);

      this.scenes = this.buildScenesForTopic(topic);
      this.state.totalDuration = this.scenes.reduce((sum, s) => sum + s.duration, 0);

      this.renderFrame();
      // Autoplay disabled: Lesson stays in paused state until user explicitly clicks Play
    },

    buildScenesForTopic(topic) {
      if (!topic) return [];

      // If it's our showcase topic "Subject / Object Pronouns", use 6 handcrafted chapters
      if (topic.id === 'a1-subject-object-pronouns') {
        return this.bespokePronounScenes();
      }

      // Universal dynamic scene builder for ANY of the 148 topics across A1-C2
      const title = topic.title || 'Grammar Masterclass';
      const titleTr = topic.titleTr || '';
      const level = topic.level || 'B1';
      const formula = topic.formula || 'Core Structure + Application';
      const explanation = topic.explanation || topic.summary || 'A vital grammatical structure for academic IELTS communication.';
      const rules = Array.isArray(topic.rules) && topic.rules.length > 0 ? topic.rules : ['Apply correct word order in complex sentences.', 'Maintain subject-verb and tense consistency.'];
      const examples = Array.isArray(topic.examples) && topic.examples.length > 0 ? topic.examples : [{ en: 'Academic writers carefully structure their sentences.', tr: 'Akademik yazarlar cümlelerini dikkatle yapılandırır.' }];
      const ex1 = examples[0];
      const ex2 = examples[1] || ex1;
      const mistake = topic.commonMistake || topic.commonMistakes || 'Be careful with tense consistency and irregular forms.';
      const ieltsApp = topic.ieltsApplication || 'Accurate command of this topic enhances your Grammatical Range and Coherence score to Band 7+.';

      const rawCategory = topic.category || 'CEFR IELTS Müfredatı';
      const cleanCategory = rawCategory.replace(new RegExp('^' + level + '\\s*[-–—:]\\s*', 'i'), '').trim() || 'CEFR IELTS Müfredatı';

      return [
        {
          id: 1,
          title: "1. Bölüm: Dilbilimsel Temel & IELTS Önemi",
          duration: 11,
          voiceText: `Welcome to this masterclass on ${title}. In IELTS, accurate usage of this concept is vital. ${explanation}`,
          subEn: `Mastering ${title} is crucial for Band 7+ Grammatical Range.`,
          subTr: `${title} (${titleTr}) yapısını doğru kullanmak IELTS sınavında Band 7+ almanın temel şartıdır.`,
          ambientGlow: "rgba(245, 158, 11, 0.18)",
          renderVisual() {
            return `
              <div class="relative w-full h-full flex flex-col items-center justify-center p-5 text-center space-y-4">
                <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono">
                  <span>🎯 ${level} · ${cleanCategory}</span>
                </div>
                <div class="space-y-1">
                  <h2 class="text-xl sm:text-2xl font-black text-white tracking-tight">${title}</h2>
                  <div class="text-sm text-neutral-400 font-sans">${titleTr}</div>
                </div>
                <div class="p-4 rounded-xl bg-black/70 border border-white/10 max-w-xl text-left space-y-2">
                  <span class="text-[10px] font-mono uppercase text-amber-400 font-bold block">🎯 Sınav Değeri & Neden Önemli?</span>
                  <p class="text-xs text-neutral-300 leading-relaxed font-sans">${ieltsApp}</p>
                </div>
              </div>
            `;
          }
        },
        {
          id: 2,
          title: "2. Bölüm: Formül & Sentaktik Mimari",
          duration: 12,
          voiceText: `Now let's examine the structural formula: ${formula.replace(/[+/*]/g, ' ')}. Notice the exact sequence of components.`,
          subEn: `Formula Blueprint: ${formula}`,
          subTr: `Yapı Formülü: ${formula}`,
          ambientGlow: "rgba(56, 189, 248, 0.18)",
          renderVisual() {
            return `
              <div class="relative w-full h-full flex flex-col items-center justify-center p-5 text-center space-y-5">
                <div class="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                  ⚡ Sentaktik Mimari & Temel Formül
                </div>
                <div class="p-5 rounded-2xl bg-black/85 border-2 border-sky-400/50 shadow-[0_0_30px_rgba(56,189,248,0.25)] max-w-xl w-full">
                  <span class="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-2">[ Master Blueprint ]</span>
                  <div class="text-base sm:text-lg font-mono font-extrabold text-white leading-relaxed">
                    ${formula}
                  </div>
                </div>
                <div class="text-xs text-neutral-300 font-sans max-w-md leading-relaxed">
                  ${explanation.slice(0, 160)}...
                </div>
              </div>
            `;
          }
        },
        {
          id: 3,
          title: "3. Bölüm: Temel Prensipler & Kurallar",
          duration: 12,
          voiceText: `Pay close attention to these vital rules: ${rules.slice(0, 2).join('. ')}`,
          subEn: `Core principles for accurate syntactic execution.`,
          subTr: `Kusursuz cümle inşası için temel dilbilgisi ilkeleri.`,
          ambientGlow: "rgba(168, 85, 247, 0.18)",
          renderVisual() {
            return `
              <div class="relative w-full h-full flex flex-col items-center justify-center p-5 text-center space-y-4">
                <div class="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">
                  📚 Temel Prensipler & Alt Kurallar
                </div>
                <div class="space-y-2.5 max-w-xl w-full text-left font-mono text-xs">
                  ${rules.slice(0, 3).map((r, i) => `
                    <div class="p-3 rounded-xl bg-black/70 border border-purple-500/30 flex items-start space-x-2.5">
                      <span class="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-[10px] font-bold shrink-0">${i+1}</span>
                      <span class="text-neutral-200 font-sans leading-relaxed text-xs">${r}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }
        },
        {
          id: 4,
          title: "4. Bölüm: Sınav Tuzağı & Lazerle Hata Parçalama",
          duration: 12,
          voiceText: `Examiners frequently penalize this common mistake: ${mistake.slice(0, 100)}`,
          subEn: `Common Examination Trap: Avoid this typical grammatical slip.`,
          subTr: `Sık Yapılan Sınav Hatası ve Tuzaktan Kaçınma Rehberi.`,
          ambientGlow: "rgba(244, 63, 94, 0.22)",
          renderVisual() {
            return `
              <div class="relative w-full h-full flex flex-col items-center justify-center p-5 text-center space-y-4">
                <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[11px] font-mono">
                  <span>🚨 En Sık Yapılan Sınav Hatası (The Trap)</span>
                </div>
                <div class="p-5 rounded-2xl bg-black/85 border border-rose-500/40 relative overflow-hidden shadow-2xl max-w-xl w-full space-y-2.5">
                  <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-500 to-transparent shadow-[0_0_15px_#f43f5e] animate-pulse"></div>
                  <span class="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block">⚠️ Adayların Düştüğü Hata</span>
                  <p class="text-xs sm:text-sm font-mono text-neutral-200 leading-relaxed">${mistake}</p>
                </div>
                <div class="text-[11px] text-emerald-300 font-mono bg-emerald-500/10 px-3.5 py-1.5 rounded-lg border border-emerald-500/20">
                  ✔️ Band 7+ Kuralı: Doğru formu otomatik refleks haline getirin.
                </div>
              </div>
            `;
          }
        },
        {
          id: 5,
          title: "5. Bölüm: IELTS Band 7-9 Master Uygulama & Örnekler",
          duration: 13,
          voiceText: `Now observe this structure in authentic academic context: ${ex1.en}`,
          subEn: `"${ex1.en}"`,
          subTr: `"${ex1.tr}"`,
          ambientGlow: "rgba(16, 185, 129, 0.2)",
          renderVisual() {
            return `
              <div class="relative w-full h-full flex flex-col items-center justify-center p-5 text-center space-y-4">
                <div class="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xl shadow-lg">
                  🏆
                </div>
                <div class="space-y-1">
                  <h3 class="text-base sm:text-lg font-bold text-white tracking-tight">Akademik Örnek & Band 8.0 Standart</h3>
                  <p class="text-xs text-neutral-400 font-mono">Doğal Akıcılık ve Yüksek Doğruluk</p>
                </div>
                <div class="p-4 rounded-xl bg-black/70 border border-emerald-500/30 max-w-lg w-full text-left space-y-2">
                  <div class="text-xs sm:text-sm font-mono text-emerald-300 font-bold">"${ex1.en}"</div>
                  <div class="text-xs text-neutral-400 font-sans border-t border-white/5 pt-1.5">${ex1.tr}</div>
                </div>
                <div class="flex items-center space-x-3 pt-1">
                  <button onclick="InteractiveGrammarHub.motion.replayVideo()" class="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs transition-all flex items-center space-x-1.5">
                    <span>↺</span><span>Baştan İzle</span>
                  </button>
                  <button onclick="InteractiveGrammarHub.setMode('kinetic')" class="px-4 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold font-mono text-xs transition-all shadow-lg flex items-center space-x-1.5">
                    <span>⚡</span><span>Sentaks Lab Testine Geç</span>
                  </button>
                </div>
              </div>
            `;
          }
        }
      ];
    },

    bespokePronounScenes() {
      return [
        {
          id: 1,
          title: "1. Bölüm: Dilbilimsel Temel & İsim Tekrarının IELTS Maliyeti",
          duration: 11,
          voiceText: "In English, pronouns replace nouns to prevent repetitive and childish phrasing. In IELTS Writing Task 2 and Speaking, repeating names continuously will trap your score at Band 5.5 in Coherence and Cohesion.",
          subEn: "Pronouns replace nouns. Repetitive phrasing caps your IELTS score at Band 5.5.",
          subTr: "Zamirler isimlerin yerine geçer. Sürekli isim tekrarı IELTS puanınızı Band 5.5'e kilitler.",
          ambientGlow: "rgba(245, 158, 11, 0.18)",
          renderVisual() {
            return `
              <div class="relative w-full h-full flex flex-col items-center justify-center p-5 text-center space-y-5">
                <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono animate-bounce">
                  <span>⚠️ IELTS Coherence & Cohesion: İsim Tekrarı Cezası</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl text-left">
                  <div class="p-3.5 rounded-xl bg-black/70 border border-rose-500/30 space-y-1.5">
                    <span class="text-[10px] font-mono text-rose-400 font-bold uppercase">❌ Band 5.0 (Monoton Tekrar)</span>
                    <p class="text-xs text-neutral-300 font-mono leading-relaxed">
                      "Sarah called <span class="text-rose-400 font-bold underline">the examiner</span>, because <span class="text-rose-400 font-bold underline">the examiner</span> needed Sarah's file."
                    </p>
                    <span class="text-[9px] text-neutral-500 block">Aynı isim iki defa tekrarlandı; akıcılık kısıtlandı.</span>
                  </div>
                  <div class="p-3.5 rounded-xl bg-black/70 border border-emerald-500/40 space-y-1.5 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    <span class="text-[10px] font-mono text-emerald-400 font-bold uppercase">✨ Band 7.5+ (Kusursuz Referencing)</span>
                    <p class="text-xs text-white font-mono leading-relaxed">
                      "Sarah called the examiner, because <span class="px-2 py-0.5 rounded bg-sky-500 text-black font-extrabold">HE</span> needed <span class="px-2 py-0.5 rounded bg-emerald-500 text-black font-extrabold">HER</span> file."
                    </p>
                    <span class="text-[9px] text-emerald-300 block">Doğru zamirler cümleye profesyonel akış kazandırdı.</span>
                  </div>
                </div>
              </div>
            `;
          }
        },
        {
          id: 2,
          title: "2. Bölüm: Özne Zamirleri (Subject Pronouns) & Konum",
          duration: 12,
          voiceText: "Subject pronouns always perform the action and must be placed before the main verb. The seven subject pronouns are: I, you, he, she, it, we, and they.",
          subEn: "Subject pronouns (I, you, he, she, it, we, they) do the action BEFORE the verb.",
          subTr: "Özne zamirleri (I, you, he, she, it, we, they) eylemi yapar ve fiilden ÖNCE gelir.",
          ambientGlow: "rgba(56, 189, 248, 0.18)",
          renderVisual() {
            return `
              <div class="relative w-full h-full flex flex-col items-center justify-center p-5 text-center space-y-5">
                <div class="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">🔵 7 Temel Özne Zamiri (Subject Pronouns)</div>
                <div class="flex flex-wrap items-center justify-center gap-2 max-w-lg">
                  ${['I (Ben)', 'You (Sen/Siz)', 'He (O-Erkek)', 'She (O-Kadın)', 'It (O-Cansız)', 'We (Biz)', 'They (Onlar)'].map(p => `
                    <span class="px-3 py-1.5 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-200 font-mono font-bold text-xs">${p}</span>
                  `).join('')}
                </div>
                <div class="p-3.5 rounded-xl bg-black/70 border border-sky-500/30 max-w-md w-full flex items-center justify-around font-mono text-xs">
                  <div class="text-center"><span class="text-sky-400 font-bold block">[ ÖZNE ]</span><span class="text-white font-extrabold text-sm">THEY</span></div>
                  <span class="text-neutral-500 font-bold text-base">+</span>
                  <div class="text-center"><span class="text-purple-400 font-bold block">[ FİİL ]</span><span class="text-white font-mono">analyzed</span></div>
                  <span class="text-neutral-500 font-bold text-base">+</span>
                  <div class="text-center"><span class="text-emerald-400 font-bold block">[ NESNE ]</span><span class="text-white font-mono">the data</span></div>
                </div>
              </div>
            `;
          }
        },
        {
          id: 3,
          title: "3. Bölüm: Nesne Zamirleri: Doğrudan & Dolaylı Nesne",
          duration: 12,
          voiceText: "Object pronouns receive the action and must be placed after the verb. They are: me, you, him, her, it, us, and them.",
          subEn: "Object pronouns (me, you, him, her, it, us, them) receive the action AFTER the verb.",
          subTr: "Nesne zamirleri eylemden etkilenir ve fiilden SONRA gelir.",
          ambientGlow: "rgba(52, 211, 153, 0.18)",
          renderVisual() {
            return `
              <div class="relative w-full h-full flex flex-col items-center justify-center p-5 text-center space-y-5">
                <div class="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">🟢 7 Temel Nesne Zamiri (Object Pronouns)</div>
                <div class="flex flex-wrap items-center justify-center gap-2 max-w-lg">
                  ${['me (Beni/Bana)', 'you (Seni/Sana)', 'him (Onu/Ona)', 'her (Onu/Ona)', 'it (Onu/Ona)', 'us (Bizi/Bize)', 'them (Onları/Onlara)'].map(p => `
                    <span class="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 font-mono font-bold text-xs">${p}</span>
                  `).join('')}
                </div>
                <div class="p-3.5 rounded-xl bg-black/70 border border-emerald-500/30 max-w-lg w-full text-left space-y-1.5 font-mono text-xs">
                  <span class="text-[10px] text-amber-300 font-bold uppercase">🎯 Çift Nesneli Fiiller (give, send, hand):</span>
                  <div class="text-white text-xs">1. "The examiner handed <span class="text-emerald-400 font-bold underline">us</span> the paper."</div>
                  <div class="text-white text-xs">2. "The examiner handed the paper to <span class="text-emerald-400 font-bold underline">us</span>."</div>
                </div>
              </div>
            `;
          }
        },
        {
          id: 4,
          title: "4. Bölüm: Birleşik Özne Tuzağı & Parmak Testi (The Drop Test)",
          duration: 13,
          voiceText: "Here is a trap that confuses even advanced candidates: Should you say 'John and I' or 'John and me'? Use the Drop Test! Temporarily remove 'John and'. You say 'I went', so 'John and I went' is correct.",
          subEn: "The Drop Test: Remove the other person to instantly find the correct pronoun.",
          subTr: "Parmak Testi: Diğer kişiyi parmağınızla kapatın; kalan zamir doğru cevabı anında verir!",
          ambientGlow: "rgba(168, 85, 247, 0.18)",
          renderVisual() {
            return `
              <div class="relative w-full h-full flex flex-col items-center justify-center p-5 text-center space-y-5">
                <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-mono">
                  <span>🪄 Sihirli Yöntem: "The Drop Test" (Parmakla Kapatma Tekniği)</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl text-left font-mono text-xs">
                  <div class="p-4 rounded-xl bg-black/70 border border-purple-500/30 space-y-2">
                    <div class="text-[10px] text-purple-300 font-bold uppercase">Durum 1: Cümle Başında (Özne)</div>
                    <div class="text-white font-bold">"Ali and <span class="text-amber-400">[ I / me ]</span> passed the test."</div>
                    <div class="p-2 rounded bg-white/5 text-[11px] text-neutral-300 space-y-1">
                      <div>👉 'Ali and' kısmını sil:</div>
                      <div class="text-rose-400 font-bold">❌ "Me passed the test" (Hata!)</div>
                      <div class="text-emerald-400 font-bold">✔️ "I passed the test" (Doğru!)</div>
                    </div>
                    <div class="text-[11px] text-emerald-300 font-bold">Sonuç: "Ali and I passed..." ✔️</div>
                  </div>
                  <div class="p-4 rounded-xl bg-black/70 border border-purple-500/30 space-y-2">
                    <div class="text-[10px] text-purple-300 font-bold uppercase">Durum 2: Fiilden Sonra (Nesne)</div>
                    <div class="text-white font-bold">"The tutor invited Ali and <span class="text-amber-400">[ I / me ]</span>."</div>
                    <div class="p-2 rounded bg-white/5 text-[11px] text-neutral-300 space-y-1">
                      <div>👉 'Ali and' kısmını sil:</div>
                      <div class="text-rose-400 font-bold">❌ "invited I" (Hata!)</div>
                      <div class="text-emerald-400 font-bold">✔️ "invited me" (Doğru!)</div>
                    </div>
                    <div class="text-[11px] text-emerald-300 font-bold">Sonuç: "...invited Ali and me" ✔️</div>
                  </div>
                </div>
              </div>
            `;
          }
        },
        {
          id: 5,
          title: "5. Bölüm: Edat (Preposition) Kuralı & Karşılaştırmalar",
          duration: 12,
          voiceText: "Prepositions like between, with, for, and to strictly take object pronouns. Never say 'between you and I'; the correct form is 'between you and me'.",
          subEn: "Prepositions demand object pronouns: 'between you and ME'. Comparisons prefer 'than I did'.",
          subTr: "Edatlardan sonra daima nesne zamiri gelir: 'between you and ME'. Akademikte 'than I did' tercih edilir.",
          ambientGlow: "rgba(244, 63, 94, 0.22)",
          renderVisual() {
            return `
              <div class="relative w-full h-full flex flex-col items-center justify-center p-5 text-center space-y-5">
                <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[11px] font-mono">
                  <span>🚨 Edat (Preposition) ve Karşılaştırma Tuzakları</span>
                </div>
                <div class="p-4 rounded-xl bg-black/80 border border-rose-500/40 max-w-lg w-full space-y-2">
                  <div class="text-sm font-mono text-neutral-400">"Just between you and <span class="line-through text-rose-500 font-extrabold px-1">I</span>... ❌"</div>
                  <div class="flex items-center justify-center space-x-2">
                    <span class="text-xs text-neutral-400 font-mono">Doğrusu:</span>
                    <span class="px-3 py-1 rounded-lg bg-emerald-500 text-black font-extrabold font-mono text-xs">"Between you and ME" ✔️</span>
                  </div>
                </div>
                <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 max-w-lg w-full text-left font-mono text-xs space-y-1">
                  <span class="text-amber-400 text-[10px] font-bold uppercase block">IELTS Academic Writing Taktik:</span>
                  <div class="text-neutral-300">Günlük Konuşma: "He speaks faster than <span class="text-white font-bold">me</span>."</div>
                  <div class="text-emerald-300 font-semibold">IELTS Band 8+: "He speaks faster than <span class="text-emerald-400 font-bold">I do</span>."</div>
                </div>
              </div>
            `;
          }
        },
        {
          id: 6,
          title: "6. Bölüm: Band 8+ Master Referencing & Belirsizlik (Ambiguity)",
          duration: 12,
          voiceText: "To achieve Band 8+, you must eliminate Pronoun Ambiguity. If you write 'Sarah met Mary and she looked tired', the examiner cannot tell who looked tired! Always ensure your pronouns have an unambiguous reference.",
          subEn: "Avoid Pronoun Ambiguity. Ensure every pronoun points to a crystal-clear noun.",
          subTr: "Zamir Belirsizliğinden (Ambiguity) kaçının. Her zamirin net bir sahibini gösterdiğinden emin olun.",
          ambientGlow: "rgba(16, 185, 129, 0.2)",
          renderVisual() {
            return `
              <div class="relative w-full h-full flex flex-col items-center justify-center p-5 text-center space-y-5">
                <div class="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xl shadow-lg">🎓</div>
                <div class="space-y-1">
                  <h3 class="text-base sm:text-lg font-bold text-white tracking-tight">IELTS Band 8.5 Altın Kuralı: "No Ambiguity"</h3>
                  <p class="text-xs text-neutral-400 font-mono">Referans Açıklığı ve Hatasız Zamir Kullanımı</p>
                </div>
                <div class="p-4 rounded-xl bg-black/70 border border-amber-500/30 max-w-lg w-full text-left font-mono text-xs space-y-2">
                  <div>
                    <span class="text-rose-400 font-bold">⚠️ Belirsiz (Band 6.0):</span>
                    <div class="text-neutral-300 italic">"The supervisor told the student that <span class="underline text-amber-300">he</span> was mistaken."</div>
                  </div>
                  <div class="border-t border-white/5 pt-2">
                    <span class="text-emerald-400 font-bold">✔️ Kristal Netlik (Band 8.0):</span>
                    <div class="text-white">"The supervisor informed the student of <span class="text-emerald-400 font-bold">the latter's</span> error."</div>
                  </div>
                </div>
              </div>
            `;
          }
        }
      ];
    },

    renderFrame() {
      const container = document.getElementById('interactive-stage-container');
      if (!container || !this.scenes || this.scenes.length === 0) return;

      const scene = this.scenes[this.state.sceneIndex] || this.scenes[0];

      container.innerHTML = `
        <div class="space-y-3">
          <!-- Compact Speech & Title Bar (Harmonized with Classic Slide) -->
          <div class="px-3 py-1.5 sm:py-2 bg-black/70 rounded-t-xl border border-white/15 flex items-center justify-between text-xs font-mono">
            <div class="flex items-center space-x-2 min-w-0">
              <span class="w-2 h-2 rounded-full ${this.state.isPlaying ? 'bg-rose-500 animate-pulse' : 'bg-neutral-500'}" id="video-live-dot"></span>
              <span class="font-bold uppercase tracking-wider text-white truncate text-[10px] sm:text-[11px]">🎬 Sinematik Motion</span>
              <span class="text-neutral-500 hidden sm:inline">·</span>
              <span class="text-neutral-400 hidden sm:inline truncate text-[10px]" id="video-scene-title-top">${scene.title}</span>
            </div>

            <!-- Compact Speech / Narration Widget -->
            <div class="flex items-center space-x-1 sm:space-x-1.5 text-[10px] font-mono flex-shrink-0">
              <div class="flex items-center space-x-1 bg-white/5 border border-white/15 rounded-md px-1.5 py-0.5">
                <span class="text-neutral-400 text-[9px]">🎙️</span>
                <select id="motion-voice-select" onchange="InteractiveGrammarHub.motion.setVoice(this.value)" class="bg-transparent text-neutral-200 text-[10px] font-mono focus:outline-none max-w-[95px] sm:max-w-[125px] truncate cursor-pointer" title="Anlatıcı Sesini Değiştir">
                  <option value="">Ses Yükleniyor...</option>
                </select>
              </div>

              <!-- Speed Pills (Compact) -->
              <div class="inline-flex items-center space-x-0.5 bg-white/5 border border-white/15 rounded-md p-0.5">
                <button onclick="InteractiveGrammarHub.motion.setSpeechSpeed(0.8)" id="m-speed-08" class="motion-speed-btn px-1.5 py-0.5 rounded text-[9px] transition-colors ${this.state.speed === 0.8 ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}">0.8x</button>
                <button onclick="InteractiveGrammarHub.motion.setSpeechSpeed(1.0)" id="m-speed-10" class="motion-speed-btn px-1.5 py-0.5 rounded text-[9px] transition-colors ${this.state.speed === 1.0 ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}">1.0x</button>
                <button onclick="InteractiveGrammarHub.motion.setSpeechSpeed(1.2)" id="m-speed-12" class="motion-speed-btn px-1.5 py-0.5 rounded text-[9px] transition-colors ${this.state.speed === 1.2 ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}">1.2x</button>
              </div>

              <!-- Replay Narration button -->
              <button onclick="InteractiveGrammarHub.motion.speakCurrentScene()" class="px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/15 border border-white/15 text-neutral-300 hover:text-white text-[9px] flex items-center space-x-1" title="Bölüm Anlatımını Dinle">
                <span>🗣️</span>
                <span class="hidden md:inline">Dinle</span>
              </button>

              <!-- Mute Audio Button -->
              <button onclick="InteractiveGrammarHub.motion.toggleMute()" id="motion-mute-btn" class="p-1 rounded hover:bg-white/10 text-neutral-300 text-xs" title="Sesi Aç / Kapat">
                ${SoundFX.isMuted ? '🔇' : '🔊'}
              </button>
            </div>
          </div>

          <div class="relative w-full rounded-2xl bg-black border border-white/15 overflow-hidden shadow-2xl min-h-[360px] sm:min-h-[420px] flex flex-col justify-between" id="cinema-screen">
            <div class="absolute inset-0 pointer-events-none transition-all duration-1000" id="cinema-glow" style="background: radial-gradient(circle at 50% 50%, ${scene.ambientGlow}, transparent 70%);"></div>

            <!-- Start Video Overlay (Visible when paused before user clicks play) -->
            ${!this.state.isPlaying && this.state.currentTime === 0 ? `
              <div id="video-start-overlay" class="absolute inset-0 z-30 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4 cursor-pointer transition-all hover:bg-black/80" onclick="InteractiveGrammarHub.motion.play()">
                <div class="relative group">
                  <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-emerald-400 p-1 shadow-[0_0_40px_rgba(245,158,11,0.4)] transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    <div class="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center pl-1 text-amber-400 group-hover:text-emerald-400 transition-colors">
                      <svg class="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div class="absolute -inset-2 rounded-full border-2 border-amber-400/40 animate-ping pointer-events-none opacity-40"></div>
                </div>

                <div class="space-y-1.5 max-w-lg">
                  <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">
                    ${currentTopic ? currentTopic.title : 'Gramer Dersi'}
                  </h3>
                  ${(currentTopic && currentTopic.titleTr) ? `
                    <p class="text-xs sm:text-sm text-neutral-400 font-sans">
                      ${currentTopic.titleTr}
                    </p>
                  ` : ''}
                </div>
              </div>
            ` : ''}

            <div id="camera-viewport" class="relative z-10 flex-1 flex items-center justify-center p-4 transition-all duration-500 ease-out cursor-pointer" onclick="InteractiveGrammarHub.motion.togglePlay()" title="Oynat / Duraklat">
              ${scene.renderVisual()}
            </div>

            <!-- Compact Subtitle Strip -->
            <div class="relative z-20 px-3.5 py-1.5 sm:py-2 bg-black/85 backdrop-blur-md border-t border-white/10 text-center space-y-0.5">
              <div class="text-[11px] sm:text-xs font-semibold text-amber-300 tracking-wide font-sans line-clamp-1" id="video-sub-tr">
                ${scene.subTr}
              </div>
              <div class="text-[10px] sm:text-[11px] text-neutral-300 font-mono italic line-clamp-1" id="video-sub-en">
                "${scene.subEn}"
              </div>
            </div>

            <div class="relative z-20 w-full bg-white/10 h-1.5 cursor-pointer" onclick="InteractiveGrammarHub.motion.seekByClick(event, this)">
              <div id="video-progress-fill" class="bg-gradient-to-r from-amber-400 to-emerald-400 h-full transition-all duration-200" style="width: 0%;"></div>
            </div>

            <div class="relative z-20 p-2.5 sm:p-3 bg-black/90 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono">
              <div class="flex items-center space-x-2.5">
                <button onclick="InteractiveGrammarHub.motion.togglePlay()" class="px-3 py-1 rounded-full bg-white text-black font-bold text-xs hover:opacity-90 transition-all flex items-center space-x-1 shadow">
                  <span id="video-play-btn-text">${this.state.isPlaying ? '⏸ Duraklat' : '▶ Oynat'}</span>
                </button>
                <button onclick="InteractiveGrammarHub.motion.prevScene()" class="p-1 rounded hover:bg-white/10 text-neutral-300" title="Önceki Bölüm">⏮</button>
                <button onclick="InteractiveGrammarHub.motion.nextScene()" class="p-1 rounded hover:bg-white/10 text-neutral-300" title="Sonraki Bölüm">⏭</button>
                <span class="text-neutral-400 text-[10px] sm:text-[11px]" id="video-time-display">
                  ${this.formatTime(this.state.currentTime)} / ${this.formatTime(this.state.totalDuration)}
                </span>
              </div>

              <div class="flex items-center space-x-1 overflow-x-auto" id="video-chapter-pills">
                ${this.scenes.map((s, idx) => `
                  <button onclick="InteractiveGrammarHub.motion.jumpToScene(${idx})" class="chapter-pill-btn px-2 py-0.5 rounded text-[10px] font-mono transition-all ${this.state.sceneIndex === idx ? 'bg-amber-400 text-black font-bold shadow' : 'bg-white/5 text-neutral-400 hover:text-white'}">
                    ${idx + 1}. Bölüm
                  </button>
                `).join('')}
              </div>

              <div class="flex items-center space-x-1.5 text-[10px]">
                <button onclick="InteractiveGrammarHub.motion.cycleSpeed()" class="px-1.5 py-0.5 rounded border border-white/20 text-neutral-300 hover:text-white text-[10px]" id="video-speed-btn">
                  ${this.state.speed}x
                </button>

                <select id="video-music-select" onchange="InteractiveGrammarHub.motion.changeMusicTrack(this.value)" class="bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/20 rounded px-1.5 py-0.5 text-[10px] font-mono focus:outline-none cursor-pointer tracking-tight" title="Fon Müziği">
                  <option value="lofi" class="bg-neutral-950 text-white" ${SoundFX.currentTrack === 'lofi' ? 'selected' : ''}>🎵 Lo-Fi</option>
                  <option value="synthwave" class="bg-neutral-950 text-white" ${SoundFX.currentTrack === 'synthwave' ? 'selected' : ''}>🎵 Synth</option>
                  <option value="zen" class="bg-neutral-950 text-white" ${SoundFX.currentTrack === 'zen' ? 'selected' : ''}>🎵 Zen</option>
                  <option value="strings" class="bg-neutral-950 text-white" ${SoundFX.currentTrack === 'strings' ? 'selected' : ''}>🎵 Strings</option>
                  <option value="binaural" class="bg-neutral-950 text-white" ${SoundFX.currentTrack === 'binaural' ? 'selected' : ''}>🎵 432Hz</option>
                  <option value="off" class="bg-neutral-950 text-neutral-400" ${SoundFX.currentTrack === 'off' ? 'selected' : ''}>🔇 Kapalı</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      `;
      setTimeout(() => this.populateVoiceDropdown(), 20);
    },

    updateSceneVisual() {
      const scene = this.scenes[this.state.sceneIndex];
      if (!scene) return;

      const viewport = document.getElementById('camera-viewport');
      if (viewport) viewport.innerHTML = scene.renderVisual();

      const glow = document.getElementById('cinema-glow');
      if (glow) glow.style.background = `radial-gradient(circle at 50% 50%, ${scene.ambientGlow}, transparent 70%)`;

      const subTr = document.getElementById('video-sub-tr');
      if (subTr) subTr.innerText = scene.subTr;

      const subEn = document.getElementById('video-sub-en');
      if (subEn) subEn.innerText = `"${scene.subEn}"`;

      const titleTop = document.getElementById('video-scene-title-top');
      if (titleTop) titleTop.innerText = scene.title;

      // Update chapter pill buttons
      const pills = document.querySelectorAll('.chapter-pill-btn');
      pills.forEach((p, idx) => {
        p.className = `chapter-pill-btn px-2 py-0.5 rounded text-[10px] font-mono transition-all ${this.state.sceneIndex === idx ? 'bg-amber-400 text-black font-bold shadow' : 'bg-white/5 text-neutral-400 hover:text-white'}`;
      });
    },

    updateTimeline() {
      const progressEl = document.getElementById('video-progress-fill');
      if (progressEl) {
        const percent = Math.min(100, (this.state.currentTime / this.state.totalDuration) * 100);
        progressEl.style.width = `${percent}%`;
      }
      const timeDisplay = document.getElementById('video-time-display');
      if (timeDisplay) {
        timeDisplay.innerText = `${this.formatTime(this.state.currentTime)} / ${this.formatTime(this.state.totalDuration)}`;
      }
      const playBtnText = document.getElementById('video-play-btn-text');
      if (playBtnText) {
        playBtnText.innerText = this.state.isPlaying ? '⏸ Duraklat' : '▶ Oynat';
      }
      const liveDot = document.getElementById('video-live-dot');
      if (liveDot) {
        liveDot.className = `w-2.5 h-2.5 rounded-full ${this.state.isPlaying ? 'bg-rose-500 animate-pulse' : 'bg-neutral-500'}`;
      }
    },

    formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    },

    togglePlay() {
      if (this.state.isPlaying) this.pause();
      else this.play();
    },

    play() {
      this.state.isPlaying = true;
      SoundFX.init();

      // Remove hero start overlay if visible
      const startOverlay = document.getElementById('video-start-overlay');
      if (startOverlay) {
        startOverlay.remove();
      }

      if (!SoundFX.isMuted && this.state.ambientEnabled && SoundFX.currentTrack !== 'off') {
        SoundFX.startAmbient();
      }
      this.updateTimeline();

      const scene = this.scenes[this.state.sceneIndex];
      if (scene && !SoundFX.isMuted) {
        SpeechUtil.speak(scene.voiceText);
      }

      if (this.state.timerId) clearInterval(this.state.timerId);
      this.state.timerId = setInterval(() => {
        if (!this.state.isPlaying) return;

        this.state.currentTime += 0.25 * this.state.speed;

        // Auto transition check based on cumulative duration
        const targetSceneIdx = this.getSceneIndexForTime(this.state.currentTime);
        if (targetSceneIdx !== this.state.sceneIndex) {
          this.state.sceneIndex = targetSceneIdx;
          SoundFX.playSwoosh();
          if (targetSceneIdx === 3) SoundFX.playLaserSlice();
          this.updateSceneVisual();
          const nextScene = this.scenes[targetSceneIdx];
          if (nextScene && !SoundFX.isMuted) SpeechUtil.speak(nextScene.voiceText);
        }

        if (this.state.currentTime >= this.state.totalDuration) {
          this.state.currentTime = this.state.totalDuration;
          this.pause();
        }
        this.updateTimeline();
      }, 250);
    },

    pause() {
      this.state.isPlaying = false;
      SpeechUtil.stop();
      SoundFX.stopAmbient(false);
      if (this.state.timerId) {
        clearInterval(this.state.timerId);
        this.state.timerId = null;
      }
      this.updateTimeline();
    },

    nextScene() {
      if (this.state.sceneIndex < this.scenes.length - 1) {
        SoundFX.playSwoosh();
        this.jumpToScene(this.state.sceneIndex + 1);
      }
    },

    prevScene() {
      if (this.state.sceneIndex > 0) {
        SoundFX.playSnap();
        this.jumpToScene(this.state.sceneIndex - 1);
      }
    },

    jumpToScene(idx) {
      this.state.sceneIndex = idx;
      this.state.currentTime = this.getSceneStartTime(idx);
      if (idx === 3) SoundFX.playLaserSlice();
      this.updateSceneVisual();
      this.updateTimeline();
      if (this.state.isPlaying && !SoundFX.isMuted) {
        SpeechUtil.speak(this.scenes[idx].voiceText);
      }
    },

    getSceneStartTime(idx) {
      let t = 0;
      for (let i = 0; i < idx; i++) {
        if (this.scenes[i]) t += this.scenes[i].duration;
      }
      return t;
    },

    getSceneIndexForTime(time) {
      let accumulated = 0;
      for (let i = 0; i < this.scenes.length; i++) {
        accumulated += this.scenes[i].duration;
        if (time < accumulated || i === this.scenes.length - 1) {
          return i;
        }
      }
      return 0;
    },

    seekByClick(e, element) {
      const rect = element.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percent = Math.max(0, Math.min(1, clickX / rect.width));
      this.state.currentTime = percent * this.state.totalDuration;
      const targetIdx = this.getSceneIndexForTime(this.state.currentTime);
      this.state.sceneIndex = targetIdx;
      this.updateSceneVisual();
      this.updateTimeline();
      if (this.state.isPlaying && !SoundFX.isMuted) {
        SpeechUtil.speak(this.scenes[targetIdx].voiceText);
      }
    },

    replayVideo() {
      SoundFX.playSnap();
      this.jumpToScene(0);
      this.play();
    },

    cycleSpeed() {
      const speeds = [0.8, 1.0, 1.2];
      const nextIdx = (speeds.indexOf(this.state.speed) + 1) % speeds.length;
      this.setSpeechSpeed(speeds[nextIdx]);
    },

    setSpeechSpeed(spd) {
      SoundFX.playSnap();
      this.state.speed = spd;
      SpeechUtil.setRate(spd);
      [0.8, 1.0, 1.2].forEach(s => {
        const id = `m-speed-${String(s).replace('.', '')}`;
        const btn = document.getElementById(id);
        if (btn) {
          if (s === spd) {
            btn.className = 'motion-speed-btn px-1.5 py-0.5 rounded text-[9px] transition-colors bg-white text-black font-bold';
          } else {
            btn.className = 'motion-speed-btn px-1.5 py-0.5 rounded text-[9px] transition-colors text-neutral-400 hover:text-white';
          }
        }
      });
      const speedBtn = document.getElementById('video-speed-btn');
      if (speedBtn) speedBtn.innerText = `${spd}x`;
    },

    populateVoiceDropdown() {
      const select = document.getElementById('motion-voice-select');
      if (select) {
        SpeechUtil.populateVoiceSelect(select);
      }
    },

    setVoice(voiceUri) {
      SpeechUtil.setVoice(voiceUri);
      const slideSelect = document.getElementById('video-voice-select');
      if (slideSelect) slideSelect.value = voiceUri;
    },

    speakCurrentScene() {
      SoundFX.playSnap();
      const scene = this.scenes[this.state.sceneIndex];
      if (scene) {
        if (SoundFX.isMuted) {
          InteractiveGrammarHub.setMasterMute(false);
        }
        SpeechUtil.speak(scene.voiceText);
      }
    },

    toggleMute() {
      InteractiveGrammarHub.toggleMasterMute();
    },

    changeMusicTrack(trackKey) {
      SoundFX.setTrack(trackKey);
      this.state.ambientEnabled = (trackKey !== 'off');

      const selectMain = document.getElementById('video-music-select');
      if (selectMain) selectMain.value = trackKey;

      const selectOverlay = document.getElementById('video-overlay-music-select');
      if (selectOverlay) selectOverlay.value = trackKey;

      const muteIcon = document.getElementById('video-music-mute-icon');
      if (muteIcon) muteIcon.innerText = (trackKey === 'off' ? '🔈' : '🔊');

      if (!SoundFX.isMuted && this.state.isPlaying && trackKey !== 'off') {
        SoundFX.startAmbient();
      }

      SoundFX.playSnap();
    },

    toggleAmbientSound() {
      if (SoundFX.currentTrack === 'off') {
        this.changeMusicTrack(SoundFX.lastNonOffTrack || 'lofi');
      } else {
        SoundFX.lastNonOffTrack = SoundFX.currentTrack;
        this.changeMusicTrack('off');
      }
    },

    testAudio() {
      if (SoundFX.isMuted) {
        InteractiveGrammarHub.setMasterMute(false);
      }
      SoundFX.init();
      if (SoundFX.ctx && SoundFX.ctx.state === 'suspended') {
        SoundFX.ctx.resume().catch(() => {});
      }
      SoundFX.playSuccess();
      if (SoundFX.currentTrack === 'off') {
        this.changeMusicTrack('lofi');
      } else {
        SoundFX.startAmbient();
      }
      SpeechUtil.speak("Audio engine is online. Voice and ambient music are functioning properly.");
      if (typeof App !== 'undefined' && App.showToast) {
        App.showToast("🔊 Ses Sistemi Aktif! (Web Audio ve Sesli Anlatım Başlatıldı)", "success");
      }
    },

    setMusicVolume(val) {
      const vol = parseFloat(val) / 100;
      SoundFX.setVolume(vol);
    }
  };

  // =========================================================================
  // FORMAT 2: UNIVERSAL KINETIC GRAMMAR CANVAS & SENTAKS LABORATUVARI
const KineticEngine = {
    state: {
      activeTab: 'morph',
      morphStep: 0,
      activeConstituentIdx: 0,
      sandboxScenarioIdx: 0,
      dropTestActive: false,
      xrayActive: false,
      selectedOption: null,
      collisionDetails: null,
      challengeStep: 0,
      challengeScore: 0,
      selectedChallengeOption: null
    },

    init(topic) {
      this.topic = topic;
      this.state.morphStep = 0;
      this.state.activeTab = 'morph';
      this.state.activeConstituentIdx = 0;
      this.state.sandboxScenarioIdx = 0;
      this.state.dropTestActive = false;
      this.state.xrayActive = false;
      this.state.selectedOption = null;
      this.state.collisionDetails = null;
      this.state.challengeStep = 0;
      this.state.challengeScore = 0;
      this.state.selectedChallengeOption = null;
      this.render();
    },

    render() {
      const container = document.getElementById('interactive-stage-container');
      if (!container) return;

      container.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div class="flex items-center space-x-1 sm:space-x-2">
              <button onclick="InteractiveGrammarHub.kinetic.setSubTab('morph')" class="px-3 py-1 rounded-lg text-xs font-mono transition-all ${this.state.activeTab === 'morph' ? 'bg-amber-400 text-black font-bold shadow-md' : 'text-neutral-400 hover:text-white bg-white/5'}">
                ✨ 1. Canlı Dönüşüm & Sentaks Ağacı
              </button>
              <button onclick="InteractiveGrammarHub.kinetic.setSubTab('sandbox')" class="px-3 py-1 rounded-lg text-xs font-mono transition-all ${this.state.activeTab === 'sandbox' ? 'bg-amber-400 text-black font-bold shadow-md' : 'text-neutral-400 hover:text-white bg-white/5'}">
                🧪 2. Sentaks Çarpışma Testi
              </button>
              <button onclick="InteractiveGrammarHub.kinetic.setSubTab('challenge')" class="px-3 py-1 rounded-lg text-xs font-mono transition-all ${this.state.activeTab === 'challenge' ? 'bg-amber-400 text-black font-bold shadow-md' : 'text-neutral-400 hover:text-white bg-white/5'}">
                🎯 3. Hızlı Görevler (Active Recall)
              </button>
            </div>
            <div class="hidden md:flex items-center space-x-2 text-[10px] font-mono text-emerald-400">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span class="font-bold">Sentaks Çözümleme Laboratuvarı</span>
            </div>
          </div>

          <div id="klab-viewport">
            ${this.renderActiveTab()}
          </div>
        </div>
      `;
    },

    setSubTab(tab) {
      SoundFX.playSnap();
      this.state.activeTab = tab;
      this.state.selectedOption = null;
      this.state.collisionDetails = null;
      this.render();
    },

    renderActiveTab() {
      if (this.state.activeTab === 'morph') return this.renderMorphStage();
      if (this.state.activeTab === 'sandbox') return this.renderSandboxStage();
      if (this.state.activeTab === 'challenge') return this.renderChallengeStage();
      return '';
    },

    // -----------------------------------------------------------------------
    // SUBTAB 1: LIVE MORPHING & SYNTACTIC CONSTITUENT TREE
    // -----------------------------------------------------------------------
    parseConstituents(sentence) {
      const clean = sentence.replace(/[.?!,;]+$/, '').trim();
      const words = clean.split(/\s+/);
      
      if (words.length <= 3) {
        return [
          { role: 'Özne (Subject NP)', text: words[0] || 'Subject', type: 'subject', rule: 'Eylemi gerçekleştiren veya durumun merkezindeki dilbilgisel özne.' },
          { role: 'Yüklem (Verb VP)', text: words[1] || 'Verb', type: 'verb', rule: 'Zaman ve kip çekimini taşıyan ana eylem öbeği.' },
          { role: 'Tümleç (Complement)', text: words.slice(2).join(' ') || 'Complement', type: 'object', rule: 'Cümleyi anlamsal olarak tamamlayan doğrudan öğe.' }
        ];
      }

      // 4-Tier syntactic chunking
      const sLen = Math.max(1, Math.floor(words.length * 0.25));
      const vLen = Math.max(1, Math.floor(words.length * 0.25));
      const oLen = Math.max(1, Math.floor(words.length * 0.25));

      const subjectWords = words.slice(0, sLen).join(' ');
      const verbWords = words.slice(sLen, sLen + vLen).join(' ');
      const objectWords = words.slice(sLen + vLen, sLen + vLen + oLen).join(' ');
      const modifierWords = words.slice(sLen + vLen + oLen).join(' ') || '.';

      return [
        {
          role: 'Özne Öbeği (Subject NP)',
          text: subjectWords,
          type: 'subject',
          color: 'sky',
          rule: 'Eylemi yapan birleşik veya yalın isim öbeği. Çekimli fiil ile tekillik/çoğulluk uyuşumu zorunludur.',
          ieltsImpact: 'Akademik dilde özne öbeklerinin nominalize edilmesi (isimleştirilmesi) Band 8.0 için kritik kriterdir.'
        },
        {
          role: 'Yardımcı / Yüklem (Verb / Aux VP)',
          text: verbWords,
          type: 'verb',
          color: 'emerald',
          rule: 'Zaman (Tense), kip (Aspect/Mood) ve etken/edilgen (Voice) bilgisini taşıyan sentaks omurgası.',
          ieltsImpact: 'Karmaşık zaman ve modal kullanımı Grammatical Range & Accuracy puanını doğrudan yükseltir.'
        },
        {
          role: 'Nesne / Tümleç (Object / Complement)',
          text: objectWords,
          type: 'object',
          color: 'amber',
          rule: 'Eylemden doğrudan etkilenen veya özneyi niteleyen tamlayıcı öbek.',
          ieltsImpact: 'Cümlenin anlamsal netliğini (coherence) sağlar ve sınav görevlisinin akışı kavramasını kolaylaştırır.'
        },
        {
          role: 'Zarf / Yan Cümlecik (Adverbial / Clause)',
          text: modifierWords,
          type: 'modifier',
          color: 'purple',
          rule: 'Zaman, mekan, koşul veya sebep-sonuç ilişkisini belirten bağımlı yan cümle veya edat öbeği.',
          ieltsImpact: 'Yan cümlelerin doğru bağlaçlarla bağlanması karmaşık cümle (complex sentences) kriterini karşılar.'
        }
      ];
    },

    renderMorphStage() {
      const topic = this.topic;
      const examples = (topic && Array.isArray(topic.examples) && topic.examples.length > 0)
        ? topic.examples
        : [{ en: 'Academic writers carefully structure their sentences.', tr: 'Akademik yazarlar cümlelerini dikkatle yapılandırır.' }];

      const exIdx = this.state.morphStep % examples.length;
      const ex = examples[exIdx];
      const constituents = this.parseConstituents(ex.en);
      const activeC = constituents[this.state.activeConstituentIdx % constituents.length];

      return `
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <span class="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Canlı Sentaks Dönüşümü & Ağaç Çözümleyici</span>
              <h3 class="text-base sm:text-lg font-bold text-white">${topic.title}: Cümle İçi Sentaks Analizi</h3>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-[11px] font-mono px-3 py-1 rounded-full border bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                Örnek ${exIdx + 1} / ${examples.length}
              </span>
            </div>
          </div>

          <!-- Main Syntax Showcase Box -->
          <div class="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-white/10 shadow-2xl space-y-6">
            <div class="text-center space-y-3">
              <div class="text-[11px] text-neutral-400 font-mono uppercase tracking-wider flex items-center justify-center space-x-2">
                <span>[ Tıklanabilir Sentaks Ağacı Bileşenleri ]</span>
              </div>

              <!-- Interactive Constituent Blocks -->
              <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-3">
                ${constituents.map((c, idx) => {
                  const isSelected = (this.state.activeConstituentIdx % constituents.length) === idx;
                  let colorClass = 'bg-sky-500/10 border-sky-500/30 text-sky-300 hover:bg-sky-500/20';
                  if (c.type === 'verb') colorClass = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20';
                  if (c.type === 'object') colorClass = 'bg-amber-500/10 border-amber-500/30 text-amber-300 hover:bg-amber-500/20';
                  if (c.type === 'modifier') colorClass = 'bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20';
                  
                  const activeGlow = isSelected ? 'ring-2 ring-white scale-105 shadow-lg brightness-125' : 'opacity-80';

                  return `
                    <button onclick="InteractiveGrammarHub.kinetic.selectConstituent(${idx})" class="p-3 sm:p-4 rounded-xl border text-center transition-all ${colorClass} ${activeGlow} font-mono">
                      <span class="block text-[9px] uppercase tracking-wider opacity-75 mb-0.5">${c.role}</span>
                      <strong class="text-xs sm:text-sm text-white">${c.text}</strong>
                    </button>
                  `;
                }).join('')}
              </div>

              <!-- Full Sentence in Quotes -->
              <div class="p-3.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-neutral-300 max-w-xl mx-auto">
                <span class="text-white font-bold">"${ex.en}"</span>
                <div class="text-[11px] text-neutral-400 pt-1 font-sans border-t border-white/5 mt-1.5">${ex.tr}</div>
              </div>
            </div>

            <!-- Active Constituent Inspector Card -->
            <div class="p-5 rounded-xl bg-black/80 border border-white/15 space-y-3 font-mono text-xs">
              <div class="flex items-center justify-between border-b border-white/10 pb-2">
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span class="font-bold text-amber-300 uppercase">${activeC.role}</span>
                </div>
                <span class="text-[10px] text-neutral-400">Bileşen #${(this.state.activeConstituentIdx % constituents.length) + 1}</span>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-sans">
                <div class="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                  <strong class="text-neutral-200 font-mono text-xs block">📌 Gramatik Kural & Görev:</strong>
                  <p class="text-neutral-300 leading-relaxed">${activeC.rule}</p>
                </div>
                <div class="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 space-y-1">
                  <strong class="text-amber-300 font-mono text-xs block">🎯 IELTS Band 7-9 Değerlendirmesi:</strong>
                  <p class="text-neutral-200 leading-relaxed">${activeC.ieltsImpact}</p>
                </div>
              </div>
            </div>

            <!-- Formula & Navigation Controls -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <div class="flex items-center space-x-2 text-[10px] font-mono text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                <span>Formül Uyumu:</span>
                <span class="text-white font-bold">${topic.formula}</span>
              </div>

              <div class="flex items-center space-x-2">
                <button onclick="InteractiveGrammarHub.kinetic.speakCurrentMorphSentence('${ex.en.replace(/'/g, "\\'")}')" class="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all text-xs font-mono flex items-center space-x-1.5">
                  <span>🔊</span><span>Dinle</span>
                </button>
                <button onclick="InteractiveGrammarHub.kinetic.advanceMorph()" class="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs font-mono shadow-md transition-all">
                  <span>Sonraki Örneğe Dönüştür ➔</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    selectConstituent(idx) {
      SoundFX.playSnap();
      this.state.activeConstituentIdx = idx;
      this.render();
    },

    advanceMorph() {
      SoundFX.playSnap();
      this.state.morphStep++;
      this.state.activeConstituentIdx = 0;
      this.render();
    },

    speakCurrentMorphSentence(text) {
      SpeechUtil.speak(text);
    },

    // -----------------------------------------------------------------------
    // SUBTAB 2: UNIVERSAL SYNTAX COLLISION & SLOT LABORATORY
    // -----------------------------------------------------------------------
    getSandboxScenarios(topic) {
      if (!topic) return [];

      // If bespoke pronoun topic, return the enhanced 4 pronoun scenarios
      if (topic.id === 'a1-subject-object-pronouns') {
        return [
          {
            title: "1. Birleşik Özne Sentaksı: 'Ali and [ I / me ]'",
            prefix: "Ali and ",
            maskable: "Ali and",
            slotDefault: "[ Zamir Seçin ]",
            suffix: " passed the examination.",
            correct: "I",
            options: ["I", "me", "myself", "him"],
            dropTestHint: "'Ali and' kısmını maskele: 'Me passed the exam' imkansız bir sentaks hatasıdır, 'I passed' doğrudur!",
            xrayDependency: "Birleşik Özne (Compound Subject) ➔ Yalın durum zamir (Subject Pronoun: 'I') gerektirir.",
            collisionExplanations: {
              "me": "💥 Durum Çarpışması! 'me' bir nesne zamiridir. Özne konumunda kullanılamaz.",
              "myself": "💥 Dönüşlülük Hatası! 'myself' ancak cümlenin öznesi zaten 'I' ise vurgu için gelir.",
              "him": "💥 Cinsiyet/Özne Hatası! 'him' üçüncü tekil nesne zamiridir, özne olarak 'He' gerekir."
            }
          },
          {
            title: "2. Birleşik Nesne Sentaksı: 'invited Ali and [ me / I ]'",
            prefix: "The examiner invited Ali and ",
            maskable: "Ali and",
            slotDefault: "[ Zamir Seçin ]",
            suffix: " to the presentation room.",
            correct: "me",
            options: ["me", "I", "he", "we"],
            dropTestHint: "'Ali and' kısmını maskele: 'The examiner invited I' denmez, 'invited me' denir!",
            xrayDependency: "Geçişli Fiil (Transitive Verb: 'invited') ➔ Nesne durum zamiri (Object Pronoun: 'me') alır.",
            collisionExplanations: {
              "I": "💥 Nesne Konumunda Özne Zamiri! 'invited' eyleminden sonra 'I' gelemez.",
              "he": "💥 Yalın Zamir Hatası! Fiilden sonra nesne zamiri ('him') gelmelidir.",
              "we": "💥 Durum Hatası! 'we' özne zamiridir; nesne hali 'us' olmalıdır."
            }
          },
          {
            title: "3. Edat Tuzağı Sentaksı: 'between you and [ me / I ]'",
            prefix: "Strictly between you and ",
            maskable: "you and",
            slotDefault: "[ Zamir Seçin ]",
            suffix: ", this grammar rule requires absolute precision.",
            correct: "me",
            options: ["me", "I", "he", "they"],
            dropTestHint: "'Between' bir edattır (preposition). Edatlardan sonra DAİMA nesne zamiri (me) gelir!",
            xrayDependency: "Edat Öbeği (Prepositional Phrase) ➔ Nesne Hali (Objective Case).",
            collisionExplanations: {
              "I": "💥 Edat Çarpışması! 'Between you and I' İngilizcede çok yaygın ama sınavda kesinlikle puan kıran bir hatadır.",
              "he": "💥 Edat Hatası! 'between he' değil, 'between him' olmalıdır.",
              "they": "💥 Yalın Zamir Hatası! Edattan sonra 'them' gerekir."
            }
          },
          {
            title: "4. Karşılaştırma Sentaksı: 'faster than [ I did / me ]'",
            prefix: "She analyzed the historical data faster than ",
            maskable: "faster than",
            slotDefault: "[ Zamir Seçin ]",
            suffix: ".",
            correct: "I did",
            options: ["I did", "me", "myself", "mine"],
            dropTestHint: "Akademik İngilizcede 'than I did' formülü tam puan getirir. 'than me' gayri resmidir.",
            xrayDependency: "Karşılaştırma Cümleciği (Comparative Ellipsis) ➔ 'than I analyzed = than I did'.",
            collisionExplanations: {
              "me": "⚠️ Gayri Resmi Sentaks! 'than me' günlük konuşmada kabul edilse de akademik IELTS'te 'than I did' tercih edilir.",
              "myself": "💥 Anlamsız Dönüşlülük! Karşılaştırmada eylemi yapan özneye atıf için 'myself' kullanılamaz.",
              "mine": "💥 İyelik Çarpışması! 'mine' bir mülkiyet zamiridir, burada eylem yapan kişi karşılaştırılıyor."
            }
          }
        ];
      }

      // Universal 3-Scenario Generator for ALL other 147 topics
      const formula = topic.formula || 'Core Structure';
      const mistake = topic.commonMistake || topic.commonMistakes || 'Avoid incorrect tense or agreement in this pattern.';
      const examples = (topic.examples && topic.examples.length > 0) ? topic.examples : [{ en: 'Researchers carefully observe the empirical results.', tr: 'Araştırmacılar ampirik sonuçları dikkatle gözlemler.' }];
      const ex1 = examples[0];
      const ex2 = examples[1] || examples[0];

      return [
        {
          title: "1. Senaryo: Çekirdek Sentaks & Özne-Yüklem Uyumu",
          prefix: "In formal academic writing, candidates ",
          maskable: "in formal academic writing,",
          slotDefault: "[ Sentaks Bileşenini Seçin ]",
          suffix: " to demonstrate syntactic precision.",
          correct: "must accurately apply this rule",
          options: ["must accurately apply this rule", "must applying this rule", "accurately to apply this rule", "applies this rule accurately"],
          dropTestHint: "Cümle başındaki zarf öbeğini maskeleyin: Çekirdek özne 'candidates' (çoğul) ile yardımcı fiil uyuşumu berraklaşır.",
          xrayDependency: `Özne [Çoğul: Candidates] ➔ Modal [must] ➔ Yalın Fiil [apply]. Formül: ${formula}`,
          collisionExplanations: {
            "must applying this rule": "💥 Modal Çarpışması! 'must' modal fiilinden sonra '-ing' gelmez; daima yalın fiil (bare infinitive) gelir.",
            "accurately to apply this rule": "💥 Eksik Yüklem Sentaksı! 'candidates' sonrasında doğrudan mastar fiil ('to apply') gelerek cümle yüklemsiz bırakılamaz.",
            "applies this rule accurately": "💥 Özne-Fiil Uyumsuzluğu! 'candidates' çoğul olduğu için tekil fiil çekimi '-s' alamaz."
          }
        },
        {
          title: "2. Senaryo: Sınav Çeldiricisi & Hata Odası",
          prefix: "Regarding this structure, evidence shows that ",
          maskable: "regarding this structure,",
          slotDefault: "[ Hatasız Yapıyı Seçin ]",
          suffix: " without falling into common traps.",
          correct: ex1.en.replace(/[.?!]+$/, ''),
          options: [
            ex1.en.replace(/[.?!]+$/, ''),
            ex1.en.replace(/\b(is|are|was|were|has|have|do|does)\b/i, 'been').replace(/[.?!]+$/, ''),
            "the rule being neglected frequently",
            "candidates fails to comprehend"
          ].filter((v, i, a) => a.indexOf(v) === i),
          dropTestHint: "Giriş bağlacını kapatıp çekirdek bağımsız cümleyi okuyun: Ana cümlenin tam bir özne ve yükleme sahip olduğunu teyit edin.",
          xrayDependency: `Sınav Tuzağı: "${mistake.slice(0, 80)}..." Bu tuzağı aşmak tam sentaks uyuşumu gerektirir.`,
          collisionExplanations: {
            "the rule being neglected frequently": "💥 Yüklemsiz Cümle (Sentence Fragment)! 'being' yardımcı fiili ana yüklem vazifesi göremez.",
            "candidates fails to comprehend": "💥 Sayı Uyuşmazlığı! Çoğul özne 'candidates' ile tekil fiil 'fails' çarpışır."
          }
        },
        {
          title: "3. Senaryo: İleri Düzey Akademik Cümle Bağlantısı",
          prefix: "Furthermore, the comprehensive study ",
          maskable: "the comprehensive study",
          slotDefault: "[ Akademik Sentaksı Seçin ]",
          suffix: ", which aligns with examiner expectations.",
          correct: ex2.en.replace(/[.?!]+$/, ''),
          options: [
            ex2.en.replace(/[.?!]+$/, ''),
            "having demonstrated weak correlation",
            "not only shows clarity but also precision",
            "was completely unstructured and confused"
          ].filter((v, i, a) => a.indexOf(v) === i),
          dropTestHint: "İlgi cümleciğini (which aligns...) kapatın: Ana cümlenin kendi başına gramatik olarak eksiksiz ayakta durabildiğini görün.",
          xrayDependency: `İlgi Cümleciği Bağlantısı (Relative Clause Binding): Ana cümlenin tamamlayıcısı ', which' ile organik bağlanır.`,
          collisionExplanations: {
            "having demonstrated weak correlation": "💥 Participle Dangling! Yüklem yerine ucu açık ulaç kullanılarak cümle tamamlanmamış kalır.",
            "was completely unstructured and confused": "⚠️ Anlamsal Çelişki! Sınav beklentileriyle örtüşen bir çalışma için olumsuz niteleme akademik bağlama uymaz."
          }
        }
      ];
    },

    renderSandboxStage() {
      const topic = this.topic;
      const scenarios = this.getSandboxScenarios(topic);
      const sIdx = this.state.sandboxScenarioIdx % scenarios.length;
      const current = scenarios[sIdx];

      const isSelected = this.state.selectedOption !== null;
      const isCorrect = isSelected && (this.state.selectedOption.trim().toLowerCase() === current.correct.trim().toLowerCase());

      return `
        <div class="space-y-6">
          <!-- Top Bar: Scenarios & Controls -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <span class="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">Parmakla Kapatma & Çarpışma Testi</span>
              <h3 class="text-base sm:text-lg font-bold text-white">${current.title}</h3>
            </div>
            <div class="flex items-center space-x-1.5 overflow-x-auto">
              ${scenarios.map((sc, idx) => `
                <button onclick="InteractiveGrammarHub.kinetic.selectSandboxScenario(${idx})" class="px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all ${sIdx === idx ? 'bg-amber-400 text-black font-bold shadow-md' : 'bg-white/5 text-neutral-400 hover:text-white'}">
                  ${idx + 1}. Senaryo
                </button>
              `).join('')}
            </div>
          </div>

          <div class="p-6 sm:p-8 rounded-2xl bg-[#0d0d0d] border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
            <!-- Utility Buttons Bar -->
            <div class="flex items-center justify-between text-xs font-mono">
              <span class="text-neutral-400 font-bold">${topic.title}: Canlı Sentaks Yuvası</span>
              <div class="flex items-center space-x-2">
                <button onclick="InteractiveGrammarHub.kinetic.toggleDropTest()" class="px-3 py-1 rounded-full border text-xs font-mono flex items-center space-x-1.5 transition-all ${this.state.dropTestActive ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'bg-white/5 border-white/15 text-neutral-400 hover:text-white'}">
                  <span>🪄</span>
                  <span>${this.state.dropTestActive ? 'Drop Test Aktif (Maskelendi)' : 'Parmakla Kapat (Drop Test)'}</span>
                </button>
                <button onclick="InteractiveGrammarHub.kinetic.toggleXray()" class="px-3 py-1 rounded-full border text-xs font-mono flex items-center space-x-1.5 transition-all ${this.state.xrayActive ? 'bg-sky-500/20 border-sky-400 text-sky-300 shadow-[0_0_15px_rgba(14,165,233,0.3)]' : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'}">
                  <span>🔬</span>
                  <span>Röntgen: ${this.state.xrayActive ? 'Açık' : 'Kapalı'}</span>
                </button>
              </div>
            </div>

            <!-- Target Sentence Bench with Interactive Slot -->
            <div class="p-5 sm:p-7 rounded-2xl bg-black/80 border ${isSelected ? (isCorrect ? 'border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.2)]' : 'border-rose-500/50 shadow-[0_0_25px_rgba(244,63,94,0.2)] animate-pulse') : 'border-white/10'} text-center text-sm sm:text-base font-mono leading-relaxed">
              <span class="${this.state.dropTestActive ? 'opacity-30 line-through text-neutral-500' : 'text-neutral-300'} transition-all">${current.prefix}</span>
              <span class="inline-block px-3.5 py-1.5 my-1 rounded-xl border-2 border-dashed font-bold transition-all ${isSelected ? (isCorrect ? 'bg-emerald-500 text-black border-emerald-400' : 'bg-rose-500 text-white border-rose-400') : 'border-amber-400/60 text-amber-300 bg-amber-500/10'}">
                ${this.state.selectedOption || current.slotDefault}
              </span>
              <span class="text-neutral-300">${current.suffix}</span>
            </div>

            <!-- Drop Test Mask Helper Notice -->
            ${this.state.dropTestActive ? `
              <div class="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs font-mono text-purple-200 flex items-center space-x-2 animate-fade-in">
                <span class="text-base">👆</span>
                <div>
                  <strong>Drop Test Röntgeni:</strong> ${current.dropTestHint}
                </div>
              </div>
            ` : ''}

            <!-- X-Ray Dependency Inspector Notice -->
            ${this.state.xrayActive ? `
              <div class="p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/30 text-xs font-mono text-sky-200 flex items-center space-x-2 animate-fade-in">
                <span class="text-base">🔬</span>
                <div>
                  <strong>Sentaktik Bağımlılık & Hiyerarşi:</strong> ${current.xrayDependency}
                </div>
              </div>
            ` : ''}

            <!-- Choice Tokens -->
            <div class="space-y-2">
              <span class="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Sentaks Yuvası Seçenekleri (Test Etmek İçin Tıkla):</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${current.options.map((opt, idx) => {
                  const isThisSelected = this.state.selectedOption === opt;
                  let btnStyle = 'bg-white/5 border-white/15 text-neutral-200 hover:bg-white/15';
                  if (isThisSelected) {
                    btnStyle = isCorrect ? 'bg-emerald-500 text-black font-bold border-emerald-400 shadow-lg' : 'bg-rose-500 text-white font-bold border-rose-400 shadow-lg';
                  }

                  return `
                    <button onclick="InteractiveGrammarHub.kinetic.testUniversalSlot('${opt.replace(/'/g, "\\'")}')" class="p-3.5 rounded-xl border text-left font-mono text-xs transition-all flex items-start space-x-2 ${btnStyle}">
                      <span class="opacity-60 text-[10px]">[${String.fromCharCode(65 + idx)}]</span>
                      <span class="font-medium">${opt}</span>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Pedagogical Feedback / Collision Analysis -->
            ${isSelected ? `
              <div class="p-4 rounded-xl text-xs font-mono transition-all animate-fade-in ${isCorrect ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300' : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'}">
                ${isCorrect 
                  ? `✔️ <strong>Kusursuz Sentaks!</strong> Bu bileşen cümlenin tüm dilbilgisel ve biçimsel uyuşum kurallarını tam olarak sağlar. ${current.xrayDependency}` 
                  : `💥 <strong>Sentaktik Çarpışma Hatası!</strong> "${this.state.selectedOption}" bu konumda kural ihlali yaratır. 
                     <div class="mt-1.5 pt-1.5 border-t border-rose-500/20 text-[11px] font-sans">
                       ${current.collisionExplanations[this.state.selectedOption] || `Doğru formül <strong>"${current.correct}"</strong> olmalıdır.`}
                     </div>`}
              </div>
            ` : ''}
          </div>
        </div>
      `;
    },

    selectSandboxScenario(idx) {
      SoundFX.playSnap();
      this.state.sandboxScenarioIdx = idx;
      this.state.selectedOption = null;
      this.state.dropTestActive = false;
      this.render();
    },

    toggleDropTest() {
      SoundFX.playSnap();
      this.state.dropTestActive = !this.state.dropTestActive;
      this.render();
    },

    toggleXray() {
      SoundFX.playSnap();
      this.state.xrayActive = !this.state.xrayActive;
      this.render();
    },

    testUniversalSlot(opt) {
      this.state.selectedOption = opt;
      const scenarios = this.getSandboxScenarios(this.topic);
      const s = scenarios[this.state.sandboxScenarioIdx % scenarios.length];

      if (opt.trim().toLowerCase() === s.correct.trim().toLowerCase()) {
        SoundFX.playSuccess();
        SpeechUtil.speak(opt);
      } else {
        SoundFX.playError();
      }
      this.render();
    },

    // Backward compatibility bridges
    selectPronounCase(idx) { this.selectSandboxScenario(idx); },
    testPronounSlot(opt) { this.testUniversalSlot(opt); },

    // -----------------------------------------------------------------------
    // SUBTAB 3: MULTI-TIER ACTIVE RECALL & SYNTAX TRANSFORMATION SPRINT
    // -----------------------------------------------------------------------
    renderChallengeStage() {
      const topic = this.topic;
      const qz = topic.miniQuiz || {
        question: "Select the most accurate academic form to complete the clause.",
        options: ["Adheres to syntactic agreement", "Violates grammatical constraints"],
        answer: "Adheres to syntactic agreement",
        explanation: "Maintains standard subject-verb and aspect harmony."
      };

      const options = Array.isArray(qz.options) ? qz.options : ["Option A", "Option B"];
      const correctVal = qz.answer !== undefined ? qz.answer : options[0];

      return `
        <div class="space-y-4">
          <div class="p-6 sm:p-8 rounded-2xl bg-[#0d0d0d] border border-white/10 space-y-4">
            <div class="flex items-center justify-between text-xs font-mono">
              <div class="flex items-center space-x-2">
                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                <span class="text-amber-400 uppercase font-bold">[ Aktif Pekiştirme · Sentaks Görevi ]</span>
              </div>
              <span class="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                Puan: ${this.state.challengeScore} XP
              </span>
            </div>
            
            <div class="text-sm sm:text-base font-mono text-white leading-relaxed p-4 rounded-xl bg-black/60 border border-white/5">
              "${qz.question}"
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              ${options.map((opt, idx) => `
                <button onclick="InteractiveGrammarHub.kinetic.answerChallenge('${opt.replace(/'/g, "\\'")}', '${String(correctVal).replace(/'/g, "\\'")}', '${(qz.explanation || '').replace(/'/g, "\\'")}')" class="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-left font-mono text-xs text-white transition-all hover:border-amber-400/50">
                  <strong class="text-amber-300 block text-[10px] mb-1">[Seçenek ${String.fromCharCode(65 + idx)}]</strong>
                  ${opt}
                </button>
              `).join('')}
            </div>

            <div id="challenge-feedback" class="hidden p-4 rounded-xl text-xs font-mono"></div>
          </div>
        </div>
      `;
    },

    answerChallenge(selected, correct, fbText) {
      const fb = document.getElementById('challenge-feedback');
      if (!fb) return;
      fb.classList.remove('hidden');
      if (selected.trim().toLowerCase() === correct.trim().toLowerCase()) {
        SoundFX.playSuccess();
        this.state.challengeScore += 100;
        fb.className = 'p-4 rounded-xl text-xs font-mono bg-emerald-500/20 border border-emerald-500/40 text-emerald-300';
        fb.innerHTML = `✓ <strong>Kusursuz Seçim!</strong> (+100 XP) ${fbText}`;
      } else {
        SoundFX.playError();
        fb.className = 'p-4 rounded-xl text-xs font-mono bg-rose-500/20 border border-rose-500/40 text-rose-300';
        fb.innerHTML = `✕ <strong>Hatalı Sentaks.</strong> Doğru Seçenek: <strong>${correct}</strong>. ${fbText}`;
      }
    }
  };

  // =========================================================================
  // FORMAT 3: UNIVERSAL INTERACTIVE SOCRATIC DIALOGUE (DR. CLARA)
  // =========================================================================
  const DialogueEngine = {
    state: {
      sceneIndex: 0,
      avatarEmotion: 'neutral',
      isAudioPlaying: false
    },
    scenes: [],

    init(topic) {
      this.topic = topic;
      this.state.sceneIndex = 0;
      this.state.avatarEmotion = 'neutral';
      this.state.isAudioPlaying = false;
      this.scenes = this.buildDialogueScenesForTopic(topic);
      this.render();
    },

    buildDialogueScenesForTopic(topic) {
      if (!topic) return [];
      const title = topic.title || 'Grammar';
      const level = topic.level || 'B1';
      const ieltsApp = topic.ieltsApplication || 'Using this accurately distinguishes Band 7+ candidates from Band 6.0.';
      const mistake = topic.commonMistake || topic.commonMistakes || 'Avoid confusing singular and plural verb agreements in complex sentences.';
      const examples = Array.isArray(topic.examples) && topic.examples.length > 0 ? topic.examples : [{ en: 'Evidence indicates clear progress.', tr: 'Kanıtlar açık ilerleme gösterir.' }];
      const ex = examples[0];
      const ex2 = examples[1] || examples[0];

      const qz = topic.miniQuiz || {
        question: `Select the accurate component for ${title}:`,
        options: ["Accurate Academic Form", "Incorrect Variation"],
        answer: "Accurate Academic Form",
        explanation: "Adheres to the grammatical rule."
      };

      return [
        {
          roundTitle: "1. Aşama: Teşhis & Akademik Cümle Analizi",
          context: `Akademik Gramer & Sınav Değerlendirmesi · ${level}`,
          teacherSpeaks: `Good morning! Welcome to our masterclass on ${title}. In IELTS, examiners immediately listen for this structure. ${ieltsApp.slice(0, 110)} How would you complete this statement accurately?`,
          teacherTr: `Günaydın! ${title} konusunu inceliyoruz. Sınav görevlileri bu yapıyı dikkatle dinler. Bu cümleyi nasıl doğru tamamlarsınız?`,
          promptEn: qz.question,
          choices: (Array.isArray(qz.options) ? qz.options : ['Option A', 'Option B']).slice(0, 3).map((opt, i) => ({
            text: opt,
            correct: String(opt).trim().toLowerCase() === String(qz.answer).trim().toLowerCase() || i === 0,
            reaction: `Spot on! ${qz.explanation || 'That demonstrates clear command of the structure.'}`
          }))
        },
        {
          roundTitle: "2. Aşama: Sınav Tuzak Odası (The Examiner's Trap)",
          context: `Sınav Tuzağı & Hata Analizi · ${level}`,
          teacherSpeaks: `Now, let us examine a high-frequency trap that penalizes candidates: "${mistake.slice(0, 100)}..." Which of these alternatives correctly resolves this syntactic error?`,
          teacherTr: `Şimdi adayların sıkça puan kaybettiği bir sınav tuzağını inceliyoruz. Hangisi bu sentaks hatasını doğru çözer?`,
          promptEn: `Identify the grammatically accurate alternative that avoids the trap:`,
          choices: [
            {
              text: ex.en,
              correct: true,
              reaction: "Magnificent! You bypassed the exact syntactic trap that penalizes Band 6.0 candidates."
            },
            {
              text: ex.en.replace(/\b(is|are|was|were|has|have)\b/i, 'been'),
              correct: false,
              reaction: "Notice the error! That's exactly where candidates lose Grammatical Range points due to broken agreement."
            }
          ]
        },
        {
          roundTitle: "3. Aşama: Band 8.5+ Akademik Dönüşüm (Paraphrasing)",
          context: `Band 8.5+ İleri Sentaks & Cümle İnşası · ${level}`,
          teacherSpeaks: `Final challenge! An examiner wants to see syntactic variety. How would you express this idea at a Band 8.5 academic level?`,
          teacherTr: `Son aşama! Sınav değerlendiricisi sentaks çeşitliliği görmek ister. Bu fikri Band 8.5 düzeyinde nasıl ifade edersiniz?`,
          promptEn: `Select the Band 8.5+ sophisticated academic structure utilizing ${title}:`,
          choices: [
            {
              text: `"${ex2.en}" (Sophisticated academic register with precise syntactic binding)`,
              correct: true,
              reaction: "Precisely! Natural phrasing, advanced syntax, and zero agreement errors satisfy Band 8.5 descriptors."
            },
            {
              text: `"People say this happens very often and it is simple." (Band 5.5 Basic repetitive phrasing)`,
              correct: false,
              reaction: "Careful! Overly simplistic sentences keep your Grammatical Range capped at Band 5.5 to 6.0."
            }
          ]
        }
      ];
    },

    render() {
      const container = document.getElementById('interactive-stage-container');
      if (!container || !this.scenes || this.scenes.length === 0) return;
      const scene = this.scenes[this.state.sceneIndex] || this.scenes[0];

      container.innerHTML = `
        <div class="space-y-6">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div class="flex items-center space-x-2">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span>
              <span class="text-xs font-mono font-bold text-neutral-200">${scene.roundTitle}</span>
              <span class="text-neutral-500 text-xs hidden sm:inline">·</span>
              <span class="text-neutral-400 text-xs hidden sm:inline font-mono">${scene.context}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                Aşama ${this.state.sceneIndex + 1} / ${this.scenes.length}
              </span>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#111] border border-white/10 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <!-- Animated Dr. Clara Avatar Column -->
            <div class="md:col-span-4 flex flex-col items-center justify-center space-y-3">
              <div class="w-36 h-36 rounded-full bg-gradient-to-tr from-amber-500/20 to-purple-500/20 border-2 border-white/20 p-2 flex items-center justify-center relative shadow-lg">
                ${this.renderAvatarSvg()}
              </div>
              <button onclick="InteractiveGrammarHub.dialogue.speakExaminer()" class="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-neutral-200 flex items-center space-x-1.5 transition-all">
                <span>${this.state.isAudioPlaying ? '🔊 Konuşuyor...' : '🔊 Soruyu Dinle'}</span>
              </button>
            </div>

            <!-- Dialogue Content Column -->
            <div class="md:col-span-8 space-y-4">
              <div class="p-4 rounded-2xl bg-black/70 border border-white/15 text-xs space-y-2">
                <div class="flex items-center justify-between text-[10px] font-mono">
                  <span class="text-amber-400 font-bold uppercase">Dr. Clara · Cambridge Sınav Danışmanı</span>
                  <span class="text-neutral-400">${this.state.sceneIndex + 1} / ${this.scenes.length}</span>
                </div>
                <div class="text-white font-medium leading-relaxed font-sans">"${scene.teacherSpeaks}"</div>
                <div class="text-neutral-400 text-xs pt-1 border-t border-white/5 font-sans">${scene.teacherTr}</div>
              </div>

              <div class="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-200 font-mono text-xs font-semibold">
                ${scene.promptEn}
              </div>

              <div class="grid grid-cols-1 gap-2.5">
                ${scene.choices.map((c, i) => `
                  <button onclick="InteractiveGrammarHub.dialogue.selectChoice(${i})" class="p-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/15 text-left font-mono text-xs text-white transition-all flex items-start space-x-2">
                    <strong class="text-amber-400 text-[11px] shrink-0">[${String.fromCharCode(65 + i)}]</strong>
                    <span class="leading-relaxed">${c.text}</span>
                  </button>
                `).join('')}
              </div>

              <div id="dialogue-feedback" class="hidden p-4 rounded-xl text-xs font-mono"></div>
            </div>
          </div>
        </div>
      `;
    },

    renderAvatarSvg() {
      const isTalking = this.state.isAudioPlaying;
      return `
        <svg viewBox="0 0 100 100" class="w-full h-full drop-shadow-md">
          <circle cx="50" cy="50" r="46" fill="#18181b" stroke="#3f3f46" stroke-width="2"/>
          <!-- Blazer & Shoulders -->
          <path d="M 20 92 C 20 72 32 66 50 66 C 68 66 80 72 80 92 Z" fill="#312e81"/>
          <path d="M 42 66 L 50 82 L 58 66 Z" fill="#ffffff"/>
          <!-- Neck & Face -->
          <circle cx="50" cy="46" r="23" fill="#fde047"/>
          <!-- Glasses -->
          <circle cx="42" cy="45" r="7" fill="none" stroke="#0f172a" stroke-width="2"/>
          <circle cx="58" cy="45" r="7" fill="none" stroke="#0f172a" stroke-width="2"/>
          <line x1="49" y1="45" x2="51" y2="45" stroke="#0f172a" stroke-width="2"/>
          <!-- Eyes -->
          <circle cx="42" cy="45" r="2.2" fill="#1e293b"/>
          <circle cx="58" cy="45" r="2.2" fill="#1e293b"/>
          <!-- Eyebrows -->
          <path d="M 37 36 Q 42 34 47 36" stroke="#451a03" stroke-width="1.8" fill="none"/>
          <path d="M 53 36 Q 58 34 63 36" stroke="#451a03" stroke-width="1.8" fill="none"/>
          <!-- Animated Mouth -->
          <path d="${isTalking ? 'M 43 59 Q 50 71 57 59 Z' : 'M 43 61 Q 50 65 57 61'}" stroke="#991b1b" stroke-width="2" fill="${isTalking ? '#7f1d1d' : 'none'}"/>
        </svg>
      `;
    },

    speakExaminer() {
      const scene = this.scenes[this.state.sceneIndex];
      if (!scene) return;
      this.state.isAudioPlaying = true;
      this.render();
      SpeechUtil.speak(scene.teacherSpeaks, () => {
        this.state.isAudioPlaying = false;
        this.render();
      });
    },

    selectChoice(choiceIdx) {
      const scene = this.scenes[this.state.sceneIndex];
      const choice = scene.choices[choiceIdx];
      const fb = document.getElementById('dialogue-feedback');
      if (!fb) return;
      fb.classList.remove('hidden');

      if (choice.correct) {
        SoundFX.playSuccess();
        fb.className = 'p-4 rounded-xl text-xs font-mono bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 space-y-2 animate-fade-in';
        fb.innerHTML = `
          <div>🎯 <strong>Dr. Clara:</strong> "${choice.reaction}"</div>
          ${this.state.sceneIndex < this.scenes.length - 1 ? `
            <button onclick="InteractiveGrammarHub.dialogue.advanceRound()" class="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-black font-bold text-xs mt-1">
              Sonraki Aşamaya Geç ➔
            </button>
          ` : '<div class="text-amber-300 font-bold pt-1">🎉 Tebrikler! Tüm simülasyonu başarıyla tamamladınız!</div>'}
        `;
        SpeechUtil.speak(choice.reaction);
      } else {
        SoundFX.playError();
        fb.className = 'p-4 rounded-xl text-xs font-mono bg-rose-500/20 border border-rose-500/40 text-rose-300 animate-fade-in';
        fb.innerHTML = `💭 <strong>Dr. Clara:</strong> "${choice.reaction}"`;
        SpeechUtil.speak(choice.reaction);
      }
    },

    advanceRound() {
      if (this.state.sceneIndex < this.scenes.length - 1) {
        SoundFX.playSnap();
        this.state.sceneIndex++;
        this.render();
        setTimeout(() => this.speakExaminer(), 300);
      }
    }
  };

  // =========================================================================
  // UNIVERSAL ENCYCLOPEDIC TOPIC GUIDE GENERATOR (FOR ALL 148 TOPICS)
  // =========================================================================
  function generateUniversalTopicGuide(topic) {
    if (!topic) return null;

    const title = topic.title || 'Grammar Concept';
    const titleTr = topic.titleTr || '';
    const level = topic.level || 'B1';
    const rawCategory = topic.category || 'Temel & İleri Gramer';
    const category = rawCategory.replace(new RegExp('^' + level + '\\s*[-–—:]\\s*', 'i'), '').trim() || 'Temel & İleri Gramer';
    const formula = topic.formula || 'Rule Structure + Context';
    const explanation = topic.explanation || topic.summary || '';
    const rules = Array.isArray(topic.rules) && topic.rules.length > 0 ? topic.rules : ['Standart sözcük dizilimini ve zaman tutarlılığını koruyun.', 'Özne-yüklem uyumuna ve noktalama kurallarına dikkat edin.'];
    const examples = Array.isArray(topic.examples) && topic.examples.length > 0 ? topic.examples : [{ en: 'Academic writers structure sentences with high precision.', tr: 'Akademik yazarlar cümlelerini yüksek bir hassasiyetle yapılandırır.' }];
    const mistake = topic.commonMistake || topic.commonMistakes || 'Düzensiz yapılar ve yanlış yardımcı fiil seçimleri sınavda puan kaybettirir.';
    const ieltsApp = topic.ieltsApplication || 'Bu yapıyı doğru ve yerinde kullanmak Grammatical Range & Accuracy kriterinde Band 7.5+ almanın temel şartıdır.';

    // Split formula into semantic building blocks
    const formulaParts = formula.split(/\s*[\+\/]\s*/).filter(p => p.trim().length > 0);

    return `
      <!-- ================================================================= -->
      <!-- AKADEMİK MASTER KILAVUZ & DERİNLEMESİNE KONU ANLATIMI (7 BÖLÜM)   -->
      <!-- ================================================================= -->
      <div class="space-y-10 pt-4 text-neutral-200">

        <!-- 1. BÖLÜM: SENTAKTİK MİMARİ, FORMÜL VE BİLEŞEN ŞEMASI -->
        <div class="space-y-4">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div class="flex items-center space-x-2">
              <span class="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
              <h3 class="text-base font-bold font-mono text-white tracking-tight">1. Sentaktik Mimari & Formül Çözümlemesi</h3>
            </div>
            <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold">
              ${level} · ${category}
            </span>
          </div>

          <!-- Master Blueprint Card -->
          <div class="p-6 rounded-2xl bg-gradient-to-br from-[#0e1726] to-[#0a0a0a] border border-sky-500/40 space-y-4 shadow-xl relative overflow-hidden">
            <div class="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-sky-500/10 blur-2xl pointer-events-none"></div>

            <div class="space-y-1.5">
              <span class="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold block">[ Master Cümle İnşa Formülü ]</span>
              <div class="text-base sm:text-lg font-mono font-black text-white leading-relaxed tracking-wide bg-black/60 p-4 rounded-xl border border-sky-500/20">
                ${formula}
              </div>
            </div>

            <!-- Formula Breakdown Pills -->
            ${formulaParts.length > 1 ? `
              <div class="space-y-2">
                <span class="text-[10px] font-mono uppercase text-neutral-400 font-semibold block">Sözdizimsel Bileşen Akış Sırası:</span>
                <div class="flex flex-wrap items-center gap-2">
                  ${formulaParts.map((part, idx) => `
                    <div class="flex items-center space-x-1.5">
                      <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-xs font-mono font-bold text-neutral-200">
                        <strong class="text-sky-400">${idx + 1}.</strong> ${part}
                      </span>
                      ${idx < formulaParts.length - 1 ? '<span class="text-neutral-500 font-mono text-xs">➔</span>' : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Deep Conceptual Explanation -->
            <div class="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2 text-xs leading-relaxed font-sans">
              <div class="text-neutral-200 font-medium">
                ${explanation}
              </div>
              <p class="text-neutral-400 text-[11px] pt-1">
                İngilizcede bu yapı yalnızca mekanik bir kural değil, belirli bir düşünceyi, zaman ilişkisini veya retorik vurguyu dinleyiciye en net biçimde aktarma aracıdır. Cümlenin bileşenleri arasındaki sıralama bozulduğunda iletilen anlam bulanıklaşır veya tamamen kaybolur.
              </p>
            </div>

            <!-- Contrast with Turkish Box -->
            <div class="p-4 rounded-xl bg-sky-950/20 border border-sky-500/20 flex flex-col sm:flex-row sm:items-start gap-3 text-xs font-sans">
              <span class="text-xl shrink-0">🌐</span>
              <div class="space-y-1">
                <div class="font-bold text-sky-300 font-mono text-[11px] uppercase">Türkçe ve İngilizce Arasındaki Yapısal Mantık Köprüsü:</div>
                <p class="text-neutral-300 text-[11px] leading-relaxed">
                  Türkçe, eklemeli (agglutinative) ve özne-nesne-yüklem (SOV) yapısına sahip bir dildir; fiil daima sonda yer alır ve ekler tüm zaman/şahıs anlamını taşır. İngilizce ise katı sözdizimi (SVO - Özne-Yüklem-Nesne) kurallarına ve yardımcı fiil (auxiliary) operasyonlarına dayanır. Bu konuyu çalışırken kelime kelime çeviri tuzağına düşmek yerine, yapıyı bir kalıp ve matematiksel denklem olarak benimsemelisiniz.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. BÖLÜM: TEMEL DİLBİLGİSİ İLKELERİ VE FONKSİYONEL ÇÖZÜMLEMELER -->
        <div class="space-y-4">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div class="flex items-center space-x-2">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
              <h3 class="text-base font-bold font-mono text-white tracking-tight">2. Temel Dilbilgisi İlkeleri, Alt Kurallar & Fonksiyonel Çözümlemeler</h3>
            </div>
            <span class="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full">
              ${rules.length} Temel İlke
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${rules.map((r, i) => `
              <div class="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-mono font-extrabold text-[11px]">
                    İlke ${i + 1}
                  </span>
                  <span class="text-[10px] font-mono text-neutral-400">Kritik Kural</span>
                </div>
                <p class="text-xs sm:text-sm font-semibold text-white font-sans leading-relaxed">
                  ${r}
                </p>
                <div class="text-[11px] text-neutral-300 font-sans leading-relaxed border-t border-white/5 pt-2">
                  💡 <strong>Akademik Değerlendirme:</strong> Bu kuralın doğru uygulanması, adayın yalnızca temel gramere değil, cümlenin alt bileşenlerinin birbirini nasıl yönettiğine (syntax government) tam anlamıyla hakim olduğunu gösterir.
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Exception & Special Cases Panel -->
          <div class="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-2 text-xs font-sans">
            <div class="flex items-center space-x-2 text-purple-300 font-bold font-mono text-[11px] uppercase">
              <span>⚠️</span>
              <span>İstisnalar, Özel Durumlar & Noktalama Hassasiyeti</span>
            </div>
            <p class="text-neutral-300 leading-relaxed text-[11px]">
              Bu yapıyı kullanırken noktalama işaretleri (özellikle iki bağımsız cümleyi birbirine bağlarken virgül hatası - comma splice yapmamak) ve özne ile fiil arasındaki tekil/çoğul uyumu (subject-verb agreement) hayati önem taşır. Cümle arasına araya giren sıfat öbekleri veya edat tamlamaları girdiğinde dahi yüklemin asıl özneyle uyumlu kalması zorunludur.
            </p>
          </div>
        </div>

        <!-- 3. BÖLÜM: IELTS SINAV STANDARTI (BAND 6.0 VS BAND 8.5 ANALİZİ) -->
        <div class="space-y-4">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div class="flex items-center space-x-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <h3 class="text-base font-bold font-mono text-white tracking-tight">3. IELTS Sınav Standartı: Band 5.5-6.0 vs Band 8.0-8.5 Kıyaslama Laboratuvarı</h3>
            </div>
            <span class="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full">
              Examiner Rubric
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono text-xs">
            <!-- Band 5.5 - 6.0 Card -->
            <div class="p-5 rounded-2xl bg-black/70 border border-rose-500/40 space-y-3 shadow-lg">
              <div class="flex items-center justify-between text-rose-400 font-bold text-[11px] uppercase tracking-wider">
                <span class="flex items-center space-x-1.5">
                  <span>❌</span>
                  <span>Band 5.5 - 6.0 Yaklaşımı</span>
                </span>
                <span class="text-[10px] bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">Sınırlı & Monoton</span>
              </div>
              <div class="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20 text-neutral-200 text-xs italic font-sans leading-relaxed">
                "Many people have this problem. They do not know how to solve it, so they wait for government help."
              </div>
              <div class="space-y-1.5 text-[11px] font-sans text-neutral-300">
                <span class="text-rose-400 font-bold font-mono block uppercase text-[10px]">Sınav Görevlisi (Examiner) Teşhisi:</span>
                <p class="leading-relaxed">
                  Cümleler çok kısa, basit ve tekrarlayıcı bağlaçlarla ('so', 'and') birbirine eklenmiş. Hedef gramer yapısı kullanılmadığı için aday 'Grammatical Range' kategorisinde Band 6.0 bandında sınırlandırılır. Hata olmasa bile çeşitlilik eksikliği puanı düşürür.
                </p>
              </div>
            </div>

            <!-- Band 8.0 - 8.5 Card -->
            <div class="p-5 rounded-2xl bg-black/70 border border-emerald-500/50 space-y-3 shadow-[0_0_25px_rgba(16,185,129,0.12)]">
              <div class="flex items-center justify-between text-emerald-400 font-bold text-[11px] uppercase tracking-wider">
                <span class="flex items-center space-x-1.5">
                  <span>✨</span>
                  <span>Band 8.0 - 8.5 Hedef Standart</span>
                </span>
                <span class="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">Akademik Ustalık</span>
              </div>
              <div class="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-white text-xs font-sans leading-relaxed font-medium">
                "${examples[0]?.en || 'When confronting such multifaceted challenges, stakeholders must implement structural solutions.'}"
              </div>
              <div class="space-y-1.5 text-[11px] font-sans text-neutral-300">
                <span class="text-emerald-400 font-bold font-mono block uppercase text-[10px]">Examiner Rubric Kriter Uyumu:</span>
                <p class="leading-relaxed">
                  ${ieltsApp} Bu formül; cümlenin mantıksal derinliğini ve akademik ağırlığını anında yükseltir. Band Descriptors belgesindeki "uses a wide range of complex structures with full flexibility" tanımına tam uyum sağlar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. BÖLÜM: EN YAYGIN SINAV TUZAKLARI VE KLİNİK TEŞHİS -->
        <div class="space-y-4">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div class="flex items-center space-x-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <h3 class="text-base font-bold font-mono text-white tracking-tight">4. Sık Yapılan Sınav Hataları, Teşhis Kılavuzu & Klinik Çözüm</h3>
            </div>
            <span class="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">
              Puan Kaybını Önleme
            </span>
          </div>

          <div class="p-6 rounded-2xl bg-gradient-to-br from-[#1c080e] to-[#0a0a0a] border border-rose-500/40 space-y-4 shadow-xl">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 text-rose-400 font-mono font-bold text-xs uppercase">
                <span>🚨 Adayların En Sık Düştüğü Kritik Sınav Tuzağı:</span>
              </div>
              <div class="p-4 rounded-xl bg-black/60 border border-rose-500/30 text-xs sm:text-sm font-mono text-rose-200 leading-relaxed">
                ${mistake}
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span class="text-amber-400 font-mono font-bold text-[10px] uppercase block">🔍 Hatanın Kök Nedeni:</span>
                <p class="text-neutral-300 text-[11px] leading-relaxed">
                  Adaylar sınav heyecanı altında hızlı yazarken, Türkçedeki kurguyu doğrudan İngilizceye aktarmaya kalkışır veya yapının ikinci yarısındaki yardımcı fiil / zaman değişimini unutur.
                </p>
              </div>
              <div class="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                <span class="text-emerald-300 font-mono font-bold text-[10px] uppercase block">💡 3 Saniyelik Hızlı Sınav Kontrolü:</span>
                <p class="text-neutral-200 text-[11px] leading-relaxed">
                  Yazma testinde (Writing) kaleminizi bırakmadan önceki son 2 dakikada bu cümleyi bulun ve formülün her iki parçasının birbiriyle uyumlu olup olmadığını sesli düşünerek teyit edin.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. BÖLÜM: IELTS SINAV BECERİLERİNE ÖZEL UYGULAMA REHBERİ -->
        <div class="space-y-4">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div class="flex items-center space-x-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <h3 class="text-base font-bold font-mono text-white tracking-tight">5. IELTS Sınav Becerilerine Göre Stratejik Uygulama Rehberi</h3>
            </div>
            <span class="text-[10px] font-mono text-neutral-400">Writing & Speaking Entegrasyonu</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <!-- Writing Task 2 Card -->
            <div class="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 flex flex-col justify-between">
              <div class="space-y-1.5">
                <div class="flex items-center space-x-2 text-sky-400 font-mono font-bold text-xs uppercase">
                  <span>✍️</span>
                  <span>Writing Task 2 (Essay)</span>
                </div>
                <p class="text-neutral-300 text-[11px] leading-relaxed">
                  Akademik denemelerinizin gelişme paragraflarında (Body 1 & 2) argümanınızı desteklerken veya tez cümlenizde (thesis) bu yapıyı bir şablon olarak konumlandırın.
                </p>
              </div>
              <div class="p-2.5 rounded-lg bg-black/50 border border-white/10 text-[10px] font-mono text-sky-300">
                Hedef: Grammatical Range Band 7.5+
              </div>
            </div>

            <!-- Writing Task 1 Card -->
            <div class="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 flex flex-col justify-between">
              <div class="space-y-1.5">
                <div class="flex items-center space-x-2 text-emerald-400 font-mono font-bold text-xs uppercase">
                  <span>📊</span>
                  <span>Writing Task 1 (Rapor)</span>
                </div>
                <p class="text-neutral-300 text-[11px] leading-relaxed">
                  Grafik, tablo veya süreç anlatımlarında verilerin zaman içindeki değişimini, oran kıyaslamalarını veya nedensel bağları açıklarken nesnel ve profesyonel bir ton yakalayın.
                </p>
              </div>
              <div class="p-2.5 rounded-lg bg-black/50 border border-white/10 text-[10px] font-mono text-emerald-300">
                Hedef: Coherence & Precision
              </div>
            </div>

            <!-- Speaking Card -->
            <div class="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 flex flex-col justify-between">
              <div class="space-y-1.5">
                <div class="flex items-center space-x-2 text-amber-400 font-mono font-bold text-xs uppercase">
                  <span>🎙️</span>
                  <span>Speaking (Part 2 & 3)</span>
                </div>
                <p class="text-neutral-300 text-[11px] leading-relaxed">
                  Sözlü mülakatta ezberlenmiş izlenimi vermeden, düşüncelerinizi bağlarken bu yapıyı doğal bir akıcılıkla telaffuz edin. Sınav görevlisinin dikkatini anında çekecektir.
                </p>
              </div>
              <div class="p-2.5 rounded-lg bg-black/50 border border-white/10 text-[10px] font-mono text-amber-300">
                Hedef: Natural Fluency & Command
              </div>
            </div>
          </div>
        </div>

        <!-- 6. BÖLÜM: GERÇEK IELTS BAĞLAMINDA DETAYLANDIRILMIŞ ÖRNEK CÜMLELER -->
        ${examples.length > 0 ? `
          <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                <h3 class="text-base font-bold font-mono text-white tracking-tight">6. Gerçek IELTS Sınav Bağlamında Zenginleştirilmiş Örnek Cümleler</h3>
              </div>
              <span class="text-[10px] font-mono text-neutral-400">${examples.length} Doğrulanmış Örnek</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              ${examples.map((ex, idx) => `
                <div class="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] text-sky-400 font-bold uppercase tracking-wider">
                      Akademik Sınav Örneği #${idx + 1}
                    </span>
                    <button onclick="InteractiveGrammarHub.kinetic.speakCurrentMorphSentence('${ex.en.replace(/'/g, "\\'")}')" class="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-200 text-[10px] transition-all flex items-center space-x-1" title="Telaffuzu Dinle">
                      <span>🔊</span><span>Dinle</span>
                    </button>
                  </div>
                  <div class="text-sm font-bold text-white tracking-wide leading-relaxed font-mono">
                    "${ex.en}"
                  </div>
                  <div class="text-xs text-neutral-400 font-sans border-t border-white/5 pt-2 leading-relaxed">
                    ${ex.tr}
                  </div>
                  <div class="text-[10px] font-sans text-sky-300/80 bg-sky-500/10 px-2.5 py-1 rounded-md">
                    📌 <em>Sentaktik Not:</em> Cümledeki yapı taşlarının dizilimi formül kuralını kusursuz biçimde yansıtır.
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 7. BÖLÜM: HIZLI ZİHİN KARTI & SINAV GÜNÜ HATIRLATMASI -->
        <div class="p-6 rounded-2xl bg-gradient-to-r from-amber-950/20 via-black to-purple-950/20 border border-amber-500/30 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold font-mono text-amber-300 uppercase tracking-wider flex items-center space-x-2">
              <span>⚡</span>
              <span>7. Hızlı Zihin Kartı · 3 Altın Kural (Quick Cheat Sheet)</span>
            </span>
            <span class="text-[10px] font-mono text-neutral-400">Sınav Günü Hatırlatması</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans pt-1">
            <div class="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
              <strong class="text-amber-400 font-mono text-[11px] block">1. Formülü Asla Bölme:</strong>
              <span class="text-neutral-300 text-[11px]">Bileşenlerin sırasını Türkçe düşünce kalıplarıyla değiştirmeyin.</span>
            </div>
            <div class="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
              <strong class="text-amber-400 font-mono text-[11px] block">2. Çeşitlilik Yarat:</strong>
              <span class="text-neutral-300 text-[11px]">Aynı basit kalıbı essay boyunca üst üste tekrarlamaktan kaçının.</span>
            </div>
            <div class="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
              <strong class="text-amber-400 font-mono text-[11px] block">3. Son Kontrol Refleksi:</strong>
              <span class="text-neutral-300 text-[11px]">Tekil/çoğul ve yardımcı fiil çekimini testin son dakikasında kontrol edin.</span>
            </div>
          </div>
        </div>

      </div>
    `;
  }

  // =========================================================================
  // FORMAT 4: UNIVERSAL KEYNOTE / OXFORD CLASSIC SLIDE PRESENTATION ENGINE
  // =========================================================================
  const ClassicSlideEngine = {
    state: {
      currentSceneIdx: 0,
      isPlaying: false,
      isMuted: false,
      playbackSpeed: 1.0,
      selectedVoiceUri: null,
      autoPlayTimer: null
    },
    activeVideo: null,

    buildSlidesForTopic(topic) {
      if (!topic) return [];
      const title = topic.title || 'Grammar Topic';
      const level = topic.level || 'B1';
      const formula = topic.formula || 'Grammar Formula';
      const rules = Array.isArray(topic.rules) && topic.rules.length > 0 ? topic.rules : ['Apply standard grammatical structure in formal English.'];
      const examples = Array.isArray(topic.examples) && topic.examples.length > 0 ? topic.examples : [{ en: 'Clear syntactic patterns demonstrate language proficiency.', tr: 'Net sentaks kalıpları dil hakimiyetini gösterir.' }];
      const mistake = topic.commonMistake || topic.commonMistakes || 'Avoid confusing singular and plural verb agreements in complex sentences.';
      const ieltsApp = topic.ieltsApplication || 'Using this accurately distinguishes Band 7+ candidates from Band 6.0 in IELTS Writing and Speaking.';

      return [
        {
          title: `1. Yapısal Formül & Tanım`,
          subtitlesTr: `${title} konusunun temel mimarisi ve formül şeması.`,
          subtitlesEn: `Structural formula and conceptual definition for ${title}.`,
          spokenNarration: `Welcome to the Oxford lecture on ${title}. Level ${level}. The core formula is: ${formula.replace(/[+&]/g, ' plus ')}. Let us examine its conceptual foundation.`,
          visualHtml: `
            <div class="space-y-4 max-w-xl mx-auto text-center animate-fade-in">
              <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs">
                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>CEFR ${level} · Yapısal Çekirdek Formül</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">${title}</h3>
              <div class="p-5 sm:p-6 rounded-2xl bg-black/80 border-2 border-amber-400/40 shadow-xl space-y-2">
                <div class="text-[11px] font-mono uppercase tracking-widest text-neutral-400">[ Çekirdek Sentaks Şablonu ]</div>
                <div class="text-base sm:text-lg font-mono font-black text-amber-300 tracking-wide">${formula}</div>
              </div>
              <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans max-w-lg mx-auto">
                ${topic.explanation || topic.summary || 'Bu dilbilgisi yapısı, akademik ve resmi İngilizcede net, akıcı ve yüksek puan getiren ifadeler oluşturmanızı sağlar.'}
              </p>
            </div>
          `
        },
        {
          title: `2. Temel Kurallar & Çekim İlkeleri`,
          subtitlesTr: `Bu yapıyı kullanırken dikkat edilmesi gereken temel dilbilgisi kuralları.`,
          subtitlesEn: `Essential grammatical rules and structural constraints governing this pattern.`,
          spokenNarration: `Here are the essential rules to remember. First: ${rules[0] || 'Observe correct syntactic agreement.'} Let us review the principles carefully.`,
          visualHtml: `
            <div class="space-y-4 max-w-xl mx-auto animate-fade-in">
              <div class="flex items-center justify-between border-b border-white/10 pb-2">
                <span class="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Temel Kurallar Matrisi</span>
                <span class="text-[10px] font-mono text-neutral-400">${rules.length} Kural</span>
              </div>
              <div class="space-y-2.5">
                ${rules.slice(0, 4).map((r, idx) => `
                  <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start space-x-3 text-xs font-sans">
                    <span class="w-5 h-5 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center font-mono font-bold shrink-0 text-[11px]">${idx + 1}</span>
                    <span class="text-neutral-200 leading-relaxed">${r}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `
        },
        {
          title: `3. Akademik Cümle Örnekleri`,
          subtitlesTr: `Doğru cümle yapıları, Türkçe karşılıkları ve telaffuz analizi.`,
          subtitlesEn: `Authentic academic examples, parallel translations, and audio pronunciation.`,
          spokenNarration: `Listen to this authentic academic example: ${examples[0].en}. Notice how natural and balanced the sentence sounds.`,
          visualHtml: `
            <div class="space-y-4 max-w-xl mx-auto animate-fade-in">
              <div class="flex items-center justify-between border-b border-white/10 pb-2">
                <span class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Doğrulanmış Sınav Örnekleri</span>
                <span class="text-[10px] font-mono text-neutral-400">${examples.length} Örnek</span>
              </div>
              <div class="space-y-3">
                ${examples.slice(0, 2).map((ex, idx) => `
                  <div class="p-4 rounded-xl bg-black/70 border border-emerald-500/30 space-y-2 font-mono text-xs">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] text-emerald-400 font-bold uppercase">Örnek Cümle #${idx + 1}</span>
                      <button onclick="SpeechUtil.speak('${ex.en.replace(/'/g, "\\'")}')" class="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-neutral-200 text-[10px] transition-all flex items-center space-x-1" title="Telaffuzu Dinle">
                        <span>🔊</span><span>Dinle</span>
                      </button>
                    </div>
                    <div class="text-sm font-bold text-white leading-relaxed">"${ex.en}"</div>
                    <div class="text-xs text-neutral-400 font-sans border-t border-white/5 pt-1.5">${ex.tr}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `
        },
        {
          title: `4. Sınav Tuzakları & Hata Analizi`,
          subtitlesTr: `Adayların en sık puan kaybettiği tipik hatalar ve doğru alternatifler.`,
          subtitlesEn: `Frequent candidate pitfalls and examiner trap prevention tactics.`,
          spokenNarration: `Be on alert for the examiner's trap: ${mistake.slice(0, 110)}. Bypassing this mistake preserves your Grammatical Range score.`,
          visualHtml: `
            <div class="space-y-4 max-w-xl mx-auto animate-fade-in">
              <div class="flex items-center justify-between border-b border-white/10 pb-2">
                <span class="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">⚠️ Sınav Tuzağı & Hata Analizi</span>
                <span class="text-[10px] font-mono text-rose-300">Puan Kurtaran Taktik</span>
              </div>
              <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-2 text-xs font-sans">
                <div class="font-bold text-rose-300 flex items-center space-x-1.5 font-mono">
                  <span>❌ Sık Yapılan Hata:</span>
                </div>
                <p class="text-neutral-200 leading-relaxed">${mistake}</p>
              </div>
              <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-sans text-emerald-200 space-y-1">
                <div class="font-bold font-mono text-[11px] text-emerald-400">💡 Altın Tavsiye:</div>
                <p class="text-neutral-300 text-[11px]">Sınavda cümlenizi tamamladıktan sonra 5 saniyenizi bu sentaks noktasını hızlıca doğrulamaya ayırın.</p>
              </div>
            </div>
          `
        },
        {
          title: `5. IELTS Band 7-9 Akademik Strateji`,
          subtitlesTr: `Writing Task 2 ve Speaking mülakatında Band 8+ alma rehberi.`,
          subtitlesEn: `How to deploy this structure to secure Band 7.5 to 9.0 in Writing and Speaking.`,
          spokenNarration: `Finally, how do you deploy this for Band 7 and above? ${ieltsApp.slice(0, 120)}`,
          visualHtml: `
            <div class="space-y-4 max-w-xl mx-auto animate-fade-in">
              <div class="flex items-center justify-between border-b border-white/10 pb-2">
                <span class="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">🎯 IELTS Band 7-9 Akademik Uygulama</span>
                <span class="text-[10px] font-mono text-neutral-400">Examiner Kriteri</span>
              </div>
              <div class="p-5 rounded-2xl bg-black/80 border border-amber-400/30 space-y-3 text-xs font-sans">
                <p class="text-neutral-200 leading-relaxed font-medium">${ieltsApp}</p>
                <div class="grid grid-cols-2 gap-2 text-[10px] font-mono pt-1">
                  <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                    <strong class="text-amber-400 block mb-0.5">✍️ Writing Task 2:</strong>
                    Ana argümanları temellendirirken kullanın.
                  </div>
                  <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                    <strong class="text-amber-400 block mb-0.5">🗣️ Speaking Part 3:</strong>
                    Soyut soruları cevaplarken akıcılık katın.
                  </div>
                </div>
              </div>
            </div>
          `
        }
      ];
    },

    loadVideo(topic) {
      if (!topic) return;
      this.topic = topic;
      this.state.currentSceneIdx = 0;
      this.state.isPlaying = false;
      const scenes = this.buildSlidesForTopic(topic);
      this.activeVideo = {
        title: topic.title,
        scenes: scenes
      };
      this.renderCurrentScene();
      this.populateVoiceDropdown();
    },

    renderCurrentScene() {
      if (!this.activeVideo || !this.activeVideo.scenes || this.activeVideo.scenes.length === 0) return;
      const scene = this.activeVideo.scenes[this.state.currentSceneIdx] || this.activeVideo.scenes[0];
      const screenStage = document.getElementById('video-screen-stage');
      const subtitleTr = document.getElementById('video-subtitle-tr');
      const subtitleEn = document.getElementById('video-subtitle-en');
      const sceneTitle = document.getElementById('video-scene-title');
      const progressBar = document.getElementById('video-progress-fill');
      const stepIndicators = document.getElementById('video-step-pills');

      if (screenStage) screenStage.innerHTML = scene.visualHtml;
      if (subtitleTr) subtitleTr.innerText = scene.subtitlesTr;
      if (subtitleEn) subtitleEn.innerText = scene.subtitlesEn;
      if (sceneTitle) sceneTitle.innerText = `${scene.title} (${this.state.currentSceneIdx + 1}/${this.activeVideo.scenes.length})`;

      const pct = ((this.state.currentSceneIdx + 1) / this.activeVideo.scenes.length) * 100;
      if (progressBar) progressBar.style.width = `${pct}%`;

      if (stepIndicators) {
        stepIndicators.innerHTML = this.activeVideo.scenes.map((s, idx) => `
          <button onclick="GrammarVideoPlayer.jumpToScene(${idx})" class="px-2.5 py-1 rounded text-[10px] font-mono transition-all ${
            idx === this.state.currentSceneIdx 
              ? 'bg-amber-400 text-black font-bold shadow-md' 
              : 'bg-white/10 text-neutral-400 hover:bg-white/20'
          }">
            Slayt ${idx + 1}
          </button>
        `).join('');
      }

      this.updateControlsUI();
    },

    updateControlsUI() {
      const playBtn = document.getElementById('video-play-btn');
      if (playBtn) {
        playBtn.innerHTML = this.state.isPlaying ? '⏸ Duraklat' : '▶ Dersi Başlat';
        playBtn.className = this.state.isPlaying
          ? 'px-4 py-1.5 rounded-full text-xs font-bold font-mono bg-amber-400 text-black shadow transition-all hover:opacity-90'
          : 'px-4 py-1.5 rounded-full text-xs font-bold font-mono bg-white text-black shadow transition-all hover:opacity-90';
      }
    },

    togglePlay() {
      SoundFX.playSnap();
      this.state.isPlaying = !this.state.isPlaying;
      this.updateControlsUI();
      if (this.state.isPlaying) {
        this.speakSceneNarration();
      } else {
        SpeechUtil.stop();
        if (this.state.autoPlayTimer) clearTimeout(this.state.autoPlayTimer);
      }
    },

    prevScene() {
      SoundFX.playSnap();
      if (!this.activeVideo) return;
      SpeechUtil.stop();
      if (this.state.autoPlayTimer) clearTimeout(this.state.autoPlayTimer);
      if (this.state.currentSceneIdx > 0) {
        this.state.currentSceneIdx--;
      } else {
        this.state.currentSceneIdx = this.activeVideo.scenes.length - 1;
      }
      this.renderCurrentScene();
      if (this.state.isPlaying) this.speakSceneNarration();
    },

    nextScene() {
      SoundFX.playSnap();
      if (!this.activeVideo) return;
      SpeechUtil.stop();
      if (this.state.autoPlayTimer) clearTimeout(this.state.autoPlayTimer);
      if (this.state.currentSceneIdx < this.activeVideo.scenes.length - 1) {
        this.state.currentSceneIdx++;
      } else {
        this.state.currentSceneIdx = 0;
        this.state.isPlaying = false;
        this.updateControlsUI();
      }
      this.renderCurrentScene();
      if (this.state.isPlaying) this.speakSceneNarration();
    },

    jumpToScene(idx) {
      SoundFX.playSnap();
      if (!this.activeVideo || idx < 0 || idx >= this.activeVideo.scenes.length) return;
      SpeechUtil.stop();
      if (this.state.autoPlayTimer) clearTimeout(this.state.autoPlayTimer);
      this.state.currentSceneIdx = idx;
      this.renderCurrentScene();
      if (this.state.isPlaying) this.speakSceneNarration();
    },

    setSpeed(spd) {
      SoundFX.playSnap();
      this.state.playbackSpeed = spd;
      SpeechUtil.setRate(spd);
      [0.8, 1.0, 1.2].forEach(s => {
        const id = `v-speed-${String(s).replace('.', '')}`;
        const btn = document.getElementById(id);
        if (btn) {
          if (s === spd) {
            btn.className = 'video-speed-btn px-1.5 py-0.5 rounded text-[9px] transition-colors bg-white text-black font-bold';
          } else {
            btn.className = 'video-speed-btn px-1.5 py-0.5 rounded text-[9px] transition-colors text-neutral-400 hover:text-white';
          }
        }
      });
    },

    toggleMute() {
      InteractiveGrammarHub.toggleMasterMute();
    },

    populateVoiceDropdown() {
      const select = document.getElementById('video-voice-select');
      if (select) {
        SpeechUtil.populateVoiceSelect(select);
      }
    },

    setVoice(voiceUri) {
      this.state.selectedVoiceUri = voiceUri;
      SpeechUtil.setVoice(voiceUri);
      const motionSelect = document.getElementById('motion-voice-select');
      if (motionSelect) motionSelect.value = voiceUri;
    },

    speakCurrentScene() {
      SoundFX.playSnap();
      if (SoundFX.isMuted) {
        InteractiveGrammarHub.setMasterMute(false);
      }
      this.speakSceneNarration();
    },

    speakSceneNarration() {
      if (this.state.isMuted || !this.activeVideo) return;
      const scene = this.activeVideo.scenes[this.state.currentSceneIdx];
      if (!scene || !scene.spokenNarration) return;

      SpeechUtil.stop();
      SpeechUtil.speak(scene.spokenNarration, () => {
        if (this.state.isPlaying) {
          this.state.autoPlayTimer = setTimeout(() => {
            if (this.state.isPlaying) this.nextScene();
          }, 1200);
        }
      });
    }
  };

  // =========================================================================
  // HUB CONTROLLER & ORCHESTRATOR
  // =========================================================================
  return {
    motion: MotionVideoEngine,
    kinetic: KineticEngine,
    dialogue: DialogueEngine,
    slide: ClassicSlideEngine,
    sound: SoundFX,
    testAudioSystem() {
      MotionVideoEngine.testAudio();
      this.syncMuteUI();
    },

    toggleMasterMute() {
      const newMuted = !SoundFX.isMuted;
      this.setMasterMute(newMuted);
      if (typeof App !== 'undefined' && App.showToast) {
        App.showToast(newMuted ? "🔇 Tüm sesler tamamen kapatıldı (Mute)" : "🔊 Sesler açıldı (Unmute)", newMuted ? "warning" : "success");
      }
      return newMuted;
    },

    setMasterMute(muted) {
      SoundFX.isMuted = muted;
      SpeechUtil.isMuted = muted;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('ielts_master_audio_muted', muted ? 'true' : 'false');
      }

      if (muted) {
        SoundFX.stopAmbient(false);
        SpeechUtil.stop();
      } else {
        if (MotionVideoEngine.state.isPlaying) {
          if (SoundFX.currentTrack !== 'off') {
            SoundFX.startAmbient();
          }
          const scene = MotionVideoEngine.scenes[MotionVideoEngine.state.sceneIndex];
          if (scene && scene.voiceText) {
            SpeechUtil.speak(scene.voiceText);
          }
        }
      }

      this.syncMuteUI();
    },

    syncMuteUI() {
      const isMuted = SoundFX.isMuted;

      document.querySelectorAll('.global-master-mute-btn').forEach(btn => {
        if (isMuted) {
          btn.innerHTML = '<span>🔇</span><span>Sesi Aç</span>';
          btn.className = 'global-master-mute-btn px-2.5 py-1 rounded-lg border border-rose-500/40 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-bold transition-all flex items-center space-x-1 shadow cursor-pointer';
          btn.title = 'Ses Kapalı — Açmak için tıklayın';
        } else {
          btn.innerHTML = '<span>🔊</span><span>Sesi Kapat</span>';
          btn.className = 'global-master-mute-btn px-2.5 py-1 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-neutral-300 font-bold transition-all flex items-center space-x-1 shadow cursor-pointer';
          btn.title = 'Ses Açık — Tamamen kapatmak için tıklayın';
        }
      });

      const pMuteIcon = document.getElementById('video-player-mute-icon');
      if (pMuteIcon) pMuteIcon.innerText = isMuted ? '🔇' : '🔊';

      const pMuteText = document.getElementById('video-player-mute-text');
      if (pMuteText) pMuteText.innerText = isMuted ? 'Sesi Aç' : 'Sesi Kapat';

      const pMuteBtn = document.getElementById('video-player-mute-btn');
      if (pMuteBtn) {
        if (isMuted) {
          pMuteBtn.className = 'px-2.5 py-1 rounded-lg border border-rose-500/40 bg-rose-500/20 text-rose-300 text-xs font-mono transition-all flex items-center space-x-1 shadow cursor-pointer';
          pMuteBtn.title = 'Ses Kapalı — Açmak için tıklayın';
        } else {
          pMuteBtn.className = 'px-2.5 py-1 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-mono transition-all flex items-center space-x-1 cursor-pointer';
          pMuteBtn.title = 'Sesi Tamamen Kapat';
        }
      }

      const slideMute = document.getElementById('video-mute-btn');
      if (slideMute) {
        slideMute.innerText = isMuted ? '🔇' : '🔊';
        slideMute.title = isMuted ? 'Sesi Aç' : 'Sesi Kapat';
      }

      const motionMute = document.getElementById('motion-mute-btn');
      if (motionMute) {
        motionMute.innerText = isMuted ? '🔇' : '🔊';
        motionMute.title = isMuted ? 'Sesi Aç' : 'Sesi Kapat';
      }
    },

    init(topic) {
      currentTopic = topic;
      const savedMode = localStorage.getItem('ielts_grammar_mode') || 'motion';
      this.setMode(savedMode, false);
      setTimeout(() => this.syncMuteUI(), 50);
    },

    getDetailedTopicGuide(topic) {
      if (topic && (topic.id === 'a1-subject-object-pronouns' || topic.title?.includes('Pronoun'))) {
        return this.bespokePronounGuide();
      }
      return generateUniversalTopicGuide(topic);
    },

    bespokePronounGuide() {
      return `
        <!-- MASTER ENCYCLOPEDIC GRAMMAR & IELTS GUIDE FOR PRONOUNS (EXPANDED) -->
        <div class="space-y-10 pt-4 text-neutral-200">

          <!-- 1. BÖLÜM: TAM ZAMİR MATRİSİ (5 TEMEL FORM) -->
          <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                <h3 class="text-base font-bold font-mono text-white tracking-tight">1. Tam Zamir Matrisi (Master Comparative Reference Matrix)</h3>
              </div>
              <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold">
                5 Temel Form Karşılaştırması
              </span>
            </div>

            <div class="overflow-x-auto rounded-2xl border border-white/10 bg-black/60 shadow-xl">
              <table class="w-full text-left text-xs font-mono">
                <thead class="bg-black/90 border-b border-white/10 text-neutral-400 text-[10px] uppercase tracking-wider">
                  <tr>
                    <th class="p-3.5">Şahıs / Kişi</th>
                    <th class="p-3.5 text-sky-400 font-bold">Özne Zamiri (Subject)</th>
                    <th class="p-3.5 text-emerald-400 font-bold">Nesne Zamiri (Object)</th>
                    <th class="p-3.5 text-amber-400">İyelik Sıfatı (Poss. Adj)</th>
                    <th class="p-3.5 text-purple-400">İyelik Zamiri (Poss. Pronoun)</th>
                    <th class="p-3.5 text-rose-400">Dönüşlü Zamir (Reflexive)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/5 text-neutral-300">
                  <tr class="hover:bg-white/5 transition-colors"><td class="p-3.5 text-neutral-400 font-sans">1. Tekil (Ben)</td><td class="p-3.5 text-sky-300 font-bold">I</td><td class="p-3.5 text-emerald-300 font-bold">me</td><td class="p-3.5">my [noun]</td><td class="p-3.5">mine</td><td class="p-3.5">myself</td></tr>
                  <tr class="hover:bg-white/5 transition-colors"><td class="p-3.5 text-neutral-400 font-sans">2. Tekil/Çoğul (Sen/Siz)</td><td class="p-3.5 text-sky-300 font-bold">you</td><td class="p-3.5 text-emerald-300 font-bold">you</td><td class="p-3.5">your [noun]</td><td class="p-3.5">yours</td><td class="p-3.5">yourself / -selves</td></tr>
                  <tr class="hover:bg-white/5 transition-colors"><td class="p-3.5 text-neutral-400 font-sans">3. Tekil Erkek (O)</td><td class="p-3.5 text-sky-300 font-bold">he</td><td class="p-3.5 text-emerald-300 font-bold">him</td><td class="p-3.5">his [noun]</td><td class="p-3.5">his</td><td class="p-3.5">himself</td></tr>
                  <tr class="hover:bg-white/5 transition-colors"><td class="p-3.5 text-neutral-400 font-sans">3. Tekil Kadın (O)</td><td class="p-3.5 text-sky-300 font-bold">she</td><td class="p-3.5 text-emerald-300 font-bold">her</td><td class="p-3.5">her [noun]</td><td class="p-3.5">hers</td><td class="p-3.5">herself</td></tr>
                  <tr class="hover:bg-white/5 transition-colors"><td class="p-3.5 text-neutral-400 font-sans">3. Tekil Cansız (O)</td><td class="p-3.5 text-sky-300 font-bold">it</td><td class="p-3.5 text-emerald-300 font-bold">it</td><td class="p-3.5">its [noun]</td><td class="p-3.5 text-neutral-600">—</td><td class="p-3.5">itself</td></tr>
                  <tr class="hover:bg-white/5 transition-colors"><td class="p-3.5 text-neutral-400 font-sans">1. Çoğul (Biz)</td><td class="p-3.5 text-sky-300 font-bold">we</td><td class="p-3.5 text-emerald-300 font-bold">us</td><td class="p-3.5">our [noun]</td><td class="p-3.5">ours</td><td class="p-3.5">ourselves</td></tr>
                  <tr class="hover:bg-white/5 transition-colors"><td class="p-3.5 text-neutral-400 font-sans">3. Çoğul (Onlar)</td><td class="p-3.5 text-sky-300 font-bold">they</td><td class="p-3.5 text-emerald-300 font-bold">them</td><td class="p-3.5">their [noun]</td><td class="p-3.5">theirs</td><td class="p-3.5">themselves</td></tr>
                </tbody>
              </table>
            </div>

            <!-- Detailed Column Rules -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-sans">
              <div class="p-3.5 rounded-xl bg-sky-950/20 border border-sky-500/20 space-y-1">
                <span class="font-bold text-sky-400 font-mono text-[11px] block">🔵 Özne Zamirleri (Subject):</span>
                <p class="text-neutral-300 text-[11px] leading-relaxed">Eylemi yapanı temsil eder ve yüklemden (fiilden) önce yer alır: <em>"They published the paper."</em></p>
              </div>
              <div class="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                <span class="font-bold text-emerald-400 font-mono text-[11px] block">🟢 Nesne Zamirleri (Object):</span>
                <p class="text-neutral-300 text-[11px] leading-relaxed">Eylemden etkilenir ve fiilden veya edatlardan (with, to, between) sonra gelir: <em>"The dean contacted them."</em></p>
              </div>
              <div class="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1">
                <span class="font-bold text-amber-400 font-mono text-[11px] block">🟡 İyelik Sıfatı vs Zamiri:</span>
                <p class="text-neutral-300 text-[11px] leading-relaxed">İyelik sıfatları isimle kullanılır (<em>"our data"</em>), iyelik zamirleri ise ismi yutar ve tek başına kullanılır (<em>"The data is ours"</em>).</p>
              </div>
            </div>
          </div>

          <!-- 2. BÖLÜM: 5 TEMEL DİLBİLGİSİ İLKESİ VE AKADEMİK ÇÖZÜMLEMELER -->
          <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                <h3 class="text-base font-bold font-mono text-white tracking-tight">2. Beş Temel Dilbilgisi İlkesi & Akademik Çözümlemeler</h3>
              </div>
              <span class="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full">
                Sözdizim Yasaları
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span class="text-xs font-bold text-sky-400 font-mono">İlke 1: Sentaktik Konumlandırma & Sahte Özne (Dummy 'It')</span>
                <p class="text-xs text-neutral-300 leading-relaxed font-sans">
                  Özne zamirleri daima yüklemden önce, nesne zamirleri ise yüklemden veya edattan sonra gelir. İngilizcede öznesiz cümle kurulamaz; bu nedenle hava, zaman veya mesafe belirtirken "it" sahte özne olarak devreye girer: <em>"It is imperative to note..."</em>
                </p>
              </div>

              <div class="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span class="text-xs font-bold text-emerald-400 font-mono">İlke 2: Çift Nesneli Fiiller (Ditransitive Structures)</span>
                <p class="text-xs text-neutral-300 leading-relaxed font-sans">
                  'Give', 'send', 'hand', 'offer' gibi fiiller iki nesne alır. İki farklı sözdizimi mümkündür:
                  1) <em>"The university offered <u>us</u> a scholarship."</em> (Kişi önce)
                  2) <em>"The university offered a scholarship <u>to us</u>."</em> (Nesne önce + edat).
                </p>
              </div>

              <div class="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span class="text-xs font-bold text-rose-400 font-mono">İlke 3: Edatların Yönettiği Nesneler (Prepositional Rection)</span>
                <p class="text-xs text-neutral-300 leading-relaxed font-sans">
                  İngilizcede edatlardan sonra (between, with, to, for, without) asla özne zamiri gelmez. Sınavda en çok yapılan hata: <em>"between you and I"</em> ❌ yerine daima <em>"between you and ME"</em> ✔️ kullanılmalıdır.
                </p>
              </div>

              <div class="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span class="text-xs font-bold text-amber-400 font-mono">İlke 4: Akademik Karşılaştırmalarda 'Than' Kuralı</span>
                <p class="text-xs text-neutral-300 leading-relaxed font-sans">
                  Günlük konuşmada <em>"He speaks faster than me"</em> yaygın olsa da, akademik IELTS Writing'de yardımcı fiilli eliptik yapı tam puan getirir: <em>"He speaks faster than <u>I do</u>"</em> veya <em>"She scored higher than <u>I did</u>"</em>.
                </p>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-1.5 text-xs font-sans">
              <span class="text-purple-300 font-bold font-mono text-[11px] uppercase block">İlke 5: Zamir Belirsizliği (Pronoun Ambiguity) & Referencing</span>
              <p class="text-neutral-300 text-[11px] leading-relaxed">
                Bir cümlede aynı cinsiyetten iki isim varsa (örneğin <em>"The manager told the applicant that <u>he</u> was rejected"</em>), 'he' zamirinin kime ait olduğu belirsizleşir. IELTS Coherence & Cohesion kriterinde bu hata Band 6.0 tavanı yaratır. Kristal netlik için <em>"the former / the latter"</em> veya ismi açıkça yazma tercih edilmelidir.
              </p>
            </div>
          </div>

          <!-- 3. BÖLÜM: SİHİRLİ TEKNİK: THE DROP TEST -->
          <div class="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-purple-950/30 via-black to-sky-950/30 border border-purple-500/40 space-y-4 shadow-xl">
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold font-mono text-white flex items-center space-x-2">
                <span>🪄</span>
                <span>3. Sihirli Yöntem: "The Drop Test" (Parmakla Kapatma Tekniği)</span>
              </span>
              <span class="text-[10px] font-mono text-purple-300 bg-purple-500/20 px-2.5 py-0.5 rounded-full">
                2 Saniyede Kesin Doğrulama
              </span>
            </div>
            <p class="text-xs text-neutral-300 leading-relaxed font-sans">
              Adayların en büyük ikilemi: <em>"Ali and I"</em> mı demeliyim, yoksa <em>"Ali and me"</em> mi? Çözüm basittir: Diğer kişiyi (Ali and) parmağınızla kapatın!
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div class="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2">
                <span class="text-sky-400 font-bold text-[11px] block">Durum 1: Cümle Başında (Özne)</span>
                <div>"Ali and <span class="text-amber-400">[ I / me ]</span> passed the test."</div>
                <div class="text-[11px] text-neutral-400 font-sans border-t border-white/5 pt-1.5">
                  👉 "Ali and" kısmını kapatın: <em>"Me passed"</em> ❌ denemez, <em>"I passed"</em> ✔️ denir.<br>
                  <strong class="text-emerald-400">Sonuç: "Ali and I passed the test." ✔️</strong>
                </div>
              </div>
              <div class="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2">
                <span class="text-emerald-400 font-bold text-[11px] block">Durum 2: Fiilden Sonra (Nesne)</span>
                <div>"The tutor invited Ali and <span class="text-amber-400">[ I / me ]</span>."</div>
                <div class="text-[11px] text-neutral-400 font-sans border-t border-white/5 pt-1.5">
                  👉 "Ali and" kısmını kapatın: <em>"invited I"</em> ❌ denemez, <em>"invited me"</em> ✔️ denir.<br>
                  <strong class="text-emerald-400">Sonuç: "The tutor invited Ali and me." ✔️</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- 4. BÖLÜM: IELTS COHERENCE & COHESION BAND KIYASLAMASI -->
          <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <h3 class="text-base font-bold font-mono text-white tracking-tight">4. IELTS Coherence & Cohesion: Band 5.5 vs Band 8.5 Paragraf Analizi</h3>
              </div>
              <span class="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full">
                Writing Task 2 Analizi
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono text-xs">
              <div class="p-5 rounded-2xl bg-black/70 border border-rose-500/40 space-y-3">
                <div class="flex items-center justify-between text-rose-400 font-bold text-[11px] uppercase">
                  <span>❌ Band 5.5 (Aşırı İsim Tekrarı & Monotonluk)</span>
                  <span class="text-[10px] bg-rose-500/10 px-2 py-0.5 rounded">Tekrarlayıcı</span>
                </div>
                <p class="text-neutral-300 text-xs italic font-sans leading-relaxed">
                  "When students enter university, <u>students</u> face many academic challenges. If <u>students</u> do not ask professors for help, professors cannot help <u>students</u> because professors do not know <u>students'</u> difficulties."
                </p>
                <div class="text-[11px] text-neutral-400 font-sans border-t border-white/5 pt-2">
                  <strong>Examiner Raporu:</strong> 'Students' ve 'professors' kelimeleri 5 kez peş peşe tekrar edilmiş. Zamir referansı (referencing) kullanılmadığı için akıcılık sıfırlanmış, puan Band 5.5'e sıkışmıştır.
                </div>
              </div>

              <div class="p-5 rounded-2xl bg-black/70 border border-emerald-500/50 space-y-3 shadow-[0_0_25px_rgba(16,185,129,0.12)]">
                <div class="flex items-center justify-between text-emerald-400 font-bold text-[11px] uppercase">
                  <span>✨ Band 8.5 (Kusursuz Referencing & Akıcılık)</span>
                  <span class="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">Akademik Akış</span>
                </div>
                <p class="text-white text-xs font-sans leading-relaxed">
                  "When students matriculate into university, <span class="text-sky-300 font-bold">they</span> confront substantial academic challenges. Unless <span class="text-sky-300 font-bold">they</span> actively seek guidance from faculty members, the latter cannot adequately support <span class="text-emerald-300 font-bold">them</span>, as <span class="text-purple-300 font-bold">their</span> specific deficiencies remain undetected."
                </p>
                <div class="text-[11px] text-neutral-300 font-sans border-t border-white/5 pt-2">
                  <strong>Examiner Raporu:</strong> 'They', 'the latter', 'them' ve 'their' zamirleri kullanılarak cümleler birbirine kusursuz bir zincirleme referans ile bağlanmıştır. Coherence & Cohesion puanı Band 8.5+ seviyesindedir.
                </div>
              </div>
            </div>
          </div>

          <!-- 5. BÖLÜM: EN YAYGIN 6 TUZAK VE DÜZELTME TABLOSU -->
          <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <h3 class="text-base font-bold font-mono text-white tracking-tight">5. Sık Yapılan 6 Kritik Zamir Tuzağı & Düzeltme Tablosu</h3>
              </div>
              <span class="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">
                Hata Önleme Matrisi
              </span>
            </div>

            <div class="overflow-x-auto rounded-2xl border border-white/10 bg-black/60 shadow-xl">
              <table class="w-full text-left text-xs font-mono">
                <thead class="bg-black/90 border-b border-white/10 text-neutral-400 text-[10px] uppercase">
                  <tr>
                    <th class="p-3">#</th>
                    <th class="p-3 text-rose-400">Yaygın Hata (❌)</th>
                    <th class="p-3 text-emerald-400">Doğru Formül (✔️)</th>
                    <th class="p-3">Dilbilgisi Kuralı & Neden?</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/5 text-neutral-300">
                  <tr class="hover:bg-white/5"><td class="p-3 text-neutral-500">1</td><td class="p-3 text-rose-300">"Between you and I..."</td><td class="p-3 text-emerald-300 font-bold">"Between you and me..."</td><td class="p-3 text-neutral-400 font-sans">Edatlardan sonra daima nesne zamiri gelir.</td></tr>
                  <tr class="hover:bg-white/5"><td class="p-3 text-neutral-500">2</td><td class="p-3 text-rose-300">"Me and my colleague wrote..."</td><td class="p-3 text-emerald-300 font-bold">"My colleague and I wrote..."</td><td class="p-3 text-neutral-400 font-sans">Özne konumunda 'I' kullanılır ve nezaketen diğer kişi başa yazılır.</td></tr>
                  <tr class="hover:bg-white/5"><td class="p-3 text-neutral-500">3</td><td class="p-3 text-rose-300">"The government it should..."</td><td class="p-3 text-emerald-300 font-bold">"The government should..."</td><td class="p-3 text-neutral-400 font-sans">Çift özne tekrarı (Double subject redundancy) gramer hatasıdır.</td></tr>
                  <tr class="hover:bg-white/5"><td class="p-3 text-neutral-500">4</td><td class="p-3 text-rose-300">"He is taller than me." (gayriresmi)</td><td class="p-3 text-emerald-300 font-bold">"He is taller than I am."</td><td class="p-3 text-neutral-400 font-sans">Akademik karşılaştırmada yardımcı fiilli tam form Band 8+ getirir.</td></tr>
                  <tr class="hover:bg-white/5"><td class="p-3 text-neutral-500">5</td><td class="p-3 text-rose-300">"Every student must bring their..."</td><td class="p-3 text-emerald-300 font-bold">"Students must bring their..."</td><td class="p-3 text-neutral-400 font-sans">Every student tekildir; çoğullaştırarak nesne uyumsuzluğunu önleyin.</td></tr>
                  <tr class="hover:bg-white/5"><td class="p-3 text-neutral-500">6</td><td class="p-3 text-rose-300">"The institution changed it's policy."</td><td class="p-3 text-emerald-300 font-bold">"The institution changed its policy."</td><td class="p-3 text-neutral-400 font-sans">İyelik sıfatı kesmesiz 'its' tir; 'it\'s' ise 'it is' kısaltmasıdır.</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 6. BÖLÜM: 3 ALTIN KURAL (ZİHİN KARTI) -->
          <div class="p-6 rounded-2xl bg-gradient-to-r from-amber-950/20 via-black to-purple-950/20 border border-amber-500/30 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold font-mono text-amber-300 uppercase tracking-wider flex items-center space-x-2">
                <span>⚡</span>
                <span>6. Hızlı Zihin Kartı · 3 Altın Zamir Kuralı</span>
              </span>
              <span class="text-[10px] font-mono text-neutral-400">Sınav Günü Hatırlatması</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans pt-1">
              <div class="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <strong class="text-amber-400 font-mono text-[11px] block">1. Parmak Testi:</strong>
                <span class="text-neutral-300 text-[11px]">'X and I' ikileminde diğer kişiyi kapatıp cümlenin kalanını tek başına okuyun.</span>
              </div>
              <div class="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <strong class="text-amber-400 font-mono text-[11px] block">2. Edat = Nesne Zamiri:</strong>
                <span class="text-neutral-300 text-[11px]">With, between, for, to edatlarından sonra ASLA 'I', 'he', 'they' gelmez.</span>
              </div>
              <div class="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <strong class="text-amber-400 font-mono text-[11px] block">3. Sıfır Belirsizlik:</strong>
                <span class="text-neutral-300 text-[11px]">Zamirinizin kime işaret ettiği sınav görevlisi için kristal berraklığında olmalıdır.</span>
              </div>
            </div>
          </div>

        </div>
      `;
    },

    setMode(mode, save = true) {
      SoundFX.playSnap();
      SpeechUtil.stop();
      SoundFX.toggleAmbient(false);
      activeMode = mode;
      if (save) localStorage.setItem('ielts_grammar_mode', mode);

      const tabMotion = document.getElementById('tab-mode-motion');
      const tabKinetic = document.getElementById('tab-mode-kinetic');
      const tabDialogue = document.getElementById('tab-mode-dialogue');
      const tabSlide = document.getElementById('tab-mode-slide');

      const activeClass = 'bg-white text-black font-semibold shadow-md';
      const inactiveClass = 'text-neutral-400 hover:text-white bg-transparent font-semibold';

      if (tabMotion) tabMotion.className = `px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${mode === 'motion' ? activeClass : inactiveClass}`;
      if (tabKinetic) tabKinetic.className = `px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${mode === 'kinetic' ? activeClass : inactiveClass}`;
      if (tabDialogue) tabDialogue.className = `px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${mode === 'dialogue' ? activeClass : inactiveClass}`;
      if (tabSlide) tabSlide.className = `px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${mode === 'slide' ? activeClass : inactiveClass}`;

      const stageContainer = document.getElementById('interactive-stage-container');
      const slidePlayerContainer = document.getElementById('slide-player-container');

      if (mode === 'motion') {
        if (stageContainer) stageContainer.classList.remove('hidden');
        if (slidePlayerContainer) slidePlayerContainer.classList.add('hidden');
        MotionVideoEngine.init(currentTopic);
      } else if (mode === 'kinetic') {
        if (stageContainer) stageContainer.classList.remove('hidden');
        if (slidePlayerContainer) slidePlayerContainer.classList.add('hidden');
        KineticEngine.init(currentTopic);
      } else if (mode === 'dialogue') {
        if (stageContainer) stageContainer.classList.remove('hidden');
        if (slidePlayerContainer) slidePlayerContainer.classList.add('hidden');
        DialogueEngine.init(currentTopic);
      } else if (mode === 'slide') {
        if (stageContainer) stageContainer.classList.add('hidden');
        if (slidePlayerContainer) slidePlayerContainer.classList.remove('hidden');
        if (InteractiveGrammarHub.slide && currentTopic) {
          InteractiveGrammarHub.slide.loadVideo(currentTopic);
          InteractiveGrammarHub.slide.renderCurrentScene();
        }
      }
    }
  };
})();

// Expose GrammarVideoPlayer natively bound to ClassicSlideEngine
if (typeof window !== 'undefined') {
  window.GrammarVideoPlayer = InteractiveGrammarHub.slide;
}

