// Core Platform Application Script for IELTS Master Pro
// PWA Service Worker, Streak Tracker, Neural Voices & Global Utilities

const App = {
  // Theme Management
  initTheme() {
    const savedTheme = localStorage.getItem('ielts_theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.updateThemeIcons();
  },

  toggleTheme() {
    document.documentElement.classList.add('theme-transitioning');
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('ielts_theme', isDark ? 'dark' : 'light');
    this.updateThemeIcons();
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 250);
  },

  updateThemeIcons() {
    const themeBtns = document.querySelectorAll('.theme-toggle-btn');
    const isDark = document.documentElement.classList.contains('dark');
    themeBtns.forEach(btn => {
      btn.innerHTML = isDark 
        ? `<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
        : `<svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    });
  },

  // Daily Streak Counter (Duolingo Style 🔥)
  recordDailyVisit() {
    const today = new Date().toISOString().slice(0, 10);
    const lastDate = localStorage.getItem('study_streak_last_date');
    let streak = parseInt(localStorage.getItem('study_streak_count') || '0', 10);

    if (!lastDate) {
      streak = 1;
      localStorage.setItem('study_streak_count', '1');
      localStorage.setItem('study_streak_last_date', today);
    } else if (lastDate === today) {
      // Already visited today
    } else {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (lastDate === yesterday) {
        streak += 1;
      } else {
        streak = 1; // reset streak if missed a day
      }
      localStorage.setItem('study_streak_count', streak.toString());
      localStorage.setItem('study_streak_last_date', today);
    }

    // Update streak indicators on screen
    document.querySelectorAll('.streak-counter-badge').forEach(badge => {
      badge.innerHTML = `🔥 <strong>${streak}</strong> Günlük Seri`;
    });
  },

  getStreak() {
    return parseInt(localStorage.getItem('study_streak_count') || '1', 10);
  },

  // Web Speech API with Neural Voices
  cachedVoices: [],

  initVoices() {
    if (!('speechSynthesis' in window)) return;
    const loadVoices = () => {
      this.cachedVoices = window.speechSynthesis.getVoices();
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  },

  getNaturalVoices() {
    if (!this.cachedVoices || this.cachedVoices.length === 0) {
      this.cachedVoices = window.speechSynthesis.getVoices();
    }
    const englishVoices = this.cachedVoices.filter(v => v.lang.startsWith('en'));

    return englishVoices.sort((a, b) => {
      const score = (v) => {
        const name = v.name.toLowerCase();
        if (name.includes('natural') || name.includes('online')) return 100;
        if (name.includes('google') && v.lang === 'en-GB') return 90;
        if (name.includes('google')) return 80;
        if (v.lang === 'en-GB') return 70;
        if (name.includes('george') || name.includes('hazel') || name.includes('susan')) return 60;
        return 10;
      };
      return score(b) - score(a);
    });
  },

  getBestVoice() {
    const savedVoiceURI = localStorage.getItem('preferred_tts_voice');
    const voices = this.getNaturalVoices();
    if (savedVoiceURI) {
      const matched = voices.find(v => v.voiceURI === savedVoiceURI || v.name === savedVoiceURI);
      if (matched) return matched;
    }
    return voices[0] || null;
  },

  speakText(text, lang = 'en-GB') {
    if (!('speechSynthesis' in window)) {
      this.showToast("Tarayıcınız ses sentezleme (Web Speech API) özelliğini desteklemiyor.", "error");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.93;
    utterance.pitch = 1.0;

    const voice = this.getBestVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      document.querySelectorAll('.audio-indicator').forEach(el => el.classList.remove('hidden'));
    };
    utterance.onend = () => {
      document.querySelectorAll('.audio-indicator').forEach(el => el.classList.add('hidden'));
    };

    window.speechSynthesis.speak(utterance);
  },

  // Toast Notification System
  showToast(message, type = "info") {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'fixed bottom-5 right-5 z-50 flex items-center space-x-2.5 px-4 py-3 rounded-2xl shadow-2xl transition-all duration-300 transform translate-y-12 opacity-0 pointer-events-none text-xs font-mono border';
      document.body.appendChild(toast);
    }

    const configs = {
      success: 'bg-[#000000] text-emerald-400 border-emerald-500/30',
      error: 'bg-[#000000] text-rose-400 border-rose-500/30',
      warning: 'bg-[#000000] text-amber-400 border-amber-500/30',
      info: 'bg-[#000000] text-neutral-200 border-white/20'
    };

    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠️',
      info: 'ℹ️'
    };

    toast.className = `fixed bottom-5 right-5 z-50 flex items-center space-x-2.5 px-4 py-3 rounded-2xl shadow-2xl transition-all duration-300 transform translate-y-0 opacity-100 text-xs font-mono border ${configs[type] || configs.info}`;
    toast.innerHTML = `<span>${icons[type] || ''}</span><span>${message}</span>`;

    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.className = toast.className.replace('translate-y-0 opacity-100', 'translate-y-12 opacity-0 pointer-events-none');
    }, 3200);
  },

  // PWA Service Worker Registration
  initPWA() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  },

  // ========================================================
  // DATA BACKUP & RESTORE (Export / Import JSON)
  // ========================================================
  exportBackup() {
    try {
      const backupData = {
        app: "IELTS Master Pro",
        version: "2.0",
        exportedAt: new Date().toISOString(),
        data: {}
      };

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (
          key.startsWith('test_') || 
          key.startsWith('study_streak_') || 
          key.startsWith('ielts_') || 
          key.startsWith('preferred_') ||
          key.startsWith('srs_')
        )) {
          backupData.data[key] = localStorage.getItem(key);
        }
      }

      const jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
      const downloadAnchor = document.createElement('a');
      const dateStr = new Date().toISOString().slice(0, 10);
      downloadAnchor.setAttribute("href", jsonString);
      downloadAnchor.setAttribute("download", `ielts_master_pro_yedek_${dateStr}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();

      this.showToast("Tüm çalışma verileriniz JSON yedeği olarak indirildi! 💾", "success");
    } catch (err) {
      this.showToast("Yedekleme sırasında bir hata oluştu.", "error");
    }
  },

  importBackup(fileInput, callback) {
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) return;
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (!parsed.data) {
          throw new Error("Geçersiz yedek formatı");
        }

        let count = 0;
        for (const [key, val] of Object.entries(parsed.data)) {
          localStorage.setItem(key, val);
          count++;
        }

        this.showToast(`${count} veri kaydı başarıyla yüklendi! Sayfa güncelleniyor...`, "success");
        setTimeout(() => {
          if (callback) callback();
          else window.location.reload();
        }, 800);
      } catch (err) {
        this.showToast("Yedek dosyası okunamadı veya bozuk: " + err.message, "error");
      }
    };

    reader.readAsText(file);
  },

  // ========================================================
  // DAILY MISSIONS & GOAL PLANNER
  // ========================================================
  DailyMissions: {
    getGoal() {
      const targetBand = localStorage.getItem('ielts_target_band') || '7.5';
      const examDate = localStorage.getItem('ielts_target_exam_date') || '';
      let daysLeft = null;
      if (examDate) {
        const diffTime = new Date(examDate) - new Date();
        daysLeft = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
      }
      return { targetBand, examDate, daysLeft };
    },

    setGoal(targetBand, examDate) {
      if (targetBand) localStorage.setItem('ielts_target_band', targetBand);
      if (examDate) localStorage.setItem('ielts_target_exam_date', examDate);
      App.showToast("Hedef başarıyla güncellendi! 🎯", "success");
    },

    getMissions() {
      const today = new Date().toISOString().slice(0, 10);
      const savedDate = localStorage.getItem('ielts_missions_date');
      let status = {};

      if (savedDate === today) {
        try {
          status = JSON.parse(localStorage.getItem('ielts_missions_status')) || {};
        } catch(e) { status = {}; }
      } else {
        // New day: reset missions
        localStorage.setItem('ielts_missions_date', today);
        localStorage.setItem('ielts_missions_status', JSON.stringify({}));
      }

      return [
        {
          id: 'grammar_lesson',
          icon: '🎬',
          title: 'Gramer Bankası: 1 Video Dersi İzle',
          desc: 'CEFR müfredatından dilediğiniz bir dersi sesli ve animasyonlu izleyin.',
          link: 'grammar.html',
          completed: !!status['grammar_lesson']
        },
        {
          id: 'vocab_review',
          icon: '🧠',
          title: 'Aralıklı Tekrar: 10 Kelimeyi 3D Flashcard ile Oyla',
          desc: 'Bugün tekrar bekleyen veya yeni CEFR kelimelerini kalıcı hafızaya alın.',
          link: 'vocabulary.html',
          completed: !!status['vocab_review']
        },
        {
          id: 'solve_test',
          icon: '📝',
          title: 'Test Merkezi: 1 Deneme Testi Çöz',
          desc: 'Seviye veya karma testlerden birini çözerek eksik konunuzu tespit edin.',
          link: 'tests.html',
          completed: !!status['solve_test']
        }
      ];
    },

    toggleMission(missionId) {
      const today = new Date().toISOString().slice(0, 10);
      let status = {};
      try {
        status = JSON.parse(localStorage.getItem('ielts_missions_status')) || {};
      } catch(e) {}

      status[missionId] = !status[missionId];
      localStorage.setItem('ielts_missions_date', today);
      localStorage.setItem('ielts_missions_status', JSON.stringify(status));

      if (status[missionId]) {
        App.showToast("Görev tamamlandı! Tebrikler 🎉", "success");
      }
      return status[missionId];
    }
  },

  // ========================================================
  // ACADEMIC WRITING VOCABULARY & PARAPHRASE LINTER
  // ========================================================
  AcademicLinter: {
    THESAURUS: {
      "good": ["advantageous", "beneficial", "favorable", "salutary"],
      "bad": ["detrimental", "adverse", "deleterious", "pernicious"],
      "big": ["substantial", "considerable", "monumental", "significant"],
      "small": ["negligible", "marginal", "minute", "fractional"],
      "important": ["pivotal", "imperative", "crucial", "paramount"],
      "hard": ["arduous", "demanding", "formidable", "intricate"],
      "easy": ["straightforward", "effortless", "facile", "elementary"],
      "many": ["copious", "numerous", "multitudinous", "profuse"],
      "a lot of": ["a multitude of", "an abundance of", "a substantial quantity of"],
      "show": ["delineate", "illustrate", "exemplify", "demonstrate"],
      "say": ["assert", "maintain", "postulate", "contend"],
      "think": ["opine", "presume", "surmise", "conceive"],
      "problem": ["quandary", "dilemma", "impediment", "obstacle"],
      "help": ["facilitate", "assist", "ameliorate", "foster"],
      "make": ["generate", "construct", "fabricate", "yield"],
      "change": ["transform", "modify", "metamorphose", "fluctuate"]
    },

    analyzeText(text) {
      if (!text || text.trim().length === 0) {
        return { detected: [], wordCount: 0, academicScore: 0 };
      }

      const lower = text.toLowerCase();
      const detected = [];

      for (const [basicWord, alternatives] of Object.entries(this.THESAURUS)) {
        const regex = new RegExp(`\\b${basicWord}\\b`, 'gi');
        const matches = lower.match(regex);
        if (matches && matches.length > 0) {
          detected.push({
            word: basicWord,
            count: matches.length,
            alternatives: alternatives
          });
        }
      }

      const words = text.trim().split(/\s+/).length;
      const penalty = Math.min(30, detected.length * 6);
      const academicScore = Math.max(50, Math.min(95, Math.round(75 + (words / 15) - penalty)));

      return {
        detected,
        wordCount: words,
        academicScore
      };
    }
  },

  // Instant Page Prefetcher (Eliminates page-switch latency & stutter)
  initInstantNavigation() {
    const preloaded = new Set();
    const prefetch = (url) => {
      if (!url || preloaded.has(url) || url.startsWith('http') || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('javascript:')) return;
      preloaded.add(url);
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    };

    // Prefetch all nav items when idle
    const prefetchNav = () => {
      document.querySelectorAll('header.apple-glass nav a[href]').forEach(a => {
        prefetch(a.getAttribute('href'));
      });
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(prefetchNav, { timeout: 1500 });
    } else {
      setTimeout(prefetchNav, 300);
    }

    // Prefetch immediately on hover or touchstart
    document.addEventListener('mouseover', (e) => {
      const a = e.target.closest('a');
      if (a && a.getAttribute('href')) prefetch(a.getAttribute('href'));
    }, { passive: true });

    document.addEventListener('touchstart', (e) => {
      const a = e.target.closest('a');
      if (a && a.getAttribute('href')) prefetch(a.getAttribute('href'));
    }, { passive: true });
  }
};

// Global auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  App.initTheme();
  App.initInstantNavigation();
  App.recordDailyVisit();
  App.initVoices();
  App.initPWA();
});

