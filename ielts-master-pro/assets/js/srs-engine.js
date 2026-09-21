// =======================================================================
// IELTS Master Pro - Next-Gen Spaced Repetition System (SRS Engine)
// SuperMemo SM-2 & Exponential FSRS Hybrid Algorithm
// Includes: Dynamic Ease Factor (EF), Ebbinghaus Retention, Due Queue, Streak
// =======================================================================

const SRS_ENGINE = {
  STORAGE_KEY: 'ielts_pro_srs_data',
  NOTEBOOK_KEY: 'ielts_pro_my_notebook',
  STREAK_KEY: 'ielts_pro_srs_streak',

  // Load SRS cards metadata from localStorage with automatic migration
  getData: function() {
    try {
      const current = localStorage.getItem(this.STORAGE_KEY);
      if (current) {
        return JSON.parse(current) || {};
      }

      // Automatic fallback migration from sibling platform keys
      const fallback = localStorage.getItem('ielts_ultra_srs_data') ||
                       localStorage.getItem('ielts_last_version_srs_data');
      if (fallback) {
        const parsed = JSON.parse(fallback) || {};
        this.saveData(parsed);
        return parsed;
      }
      return {};
    } catch (e) {
      console.warn("SRS_ENGINE: Error loading SRS data", e);
      return {};
    }
  },

  saveData: function(data) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("SRS_ENGINE: Could not save data", e);
    }
  },

  // ---------------------------------------------------------------------
  // CARD METADATA & NORMALIZATION
  // ---------------------------------------------------------------------
  getCard: function(wordText) {
    const data = this.getData();
    let card = data[wordText];
    if (!card) return null;

    // Backward-compatibility normalization
    if (!card.easeFactor) card.easeFactor = 2.5;
    if (typeof card.interval === 'undefined') {
      card.interval = card.box === 3 ? 7 : (card.box === 2 ? 3 : 1);
    }
    if (typeof card.streak === 'undefined') card.streak = card.repetitions || 0;
    if (typeof card.lapses === 'undefined') card.lapses = 0;
    return card;
  },

  // ---------------------------------------------------------------------
  // RATE WORD: SM-2 ALGORITHM & DYNAMIC INTERVAL SCALING
  // quality: 'again' (1), 'hard' (2), 'good' (3), 'easy' (4)
  // ---------------------------------------------------------------------
  rateWord: function(wordText, quality) {
    const data = this.getData();
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    let card = data[wordText] || {
      box: 1,
      repetitions: 0,
      interval: 1,
      easeFactor: 2.5,
      lastReviewed: 0,
      nextReview: 0,
      streak: 0,
      lapses: 0
    };

    // Ensure fallback defaults
    card.easeFactor = card.easeFactor || 2.5;
    card.interval = card.interval || 1;
    card.repetitions = card.repetitions || 0;
    card.streak = card.streak || 0;
    card.lapses = card.lapses || 0;

    let intervalDays = 1;
    let toastMessage = '';

    // Grade 1: AGAIN / UNUTTUM (Lapse)
    if (quality === 'again' || quality === 1) {
      card.box = 1;
      intervalDays = 1;
      card.repetitions = 0;
      card.streak = 0;
      card.lapses += 1;
      card.easeFactor = Math.max(1.3, +(card.easeFactor - 0.2).toFixed(2));
      toastMessage = `"${wordText}" 1 gün sonra tekrar kuyruğuna alındı.`;
    }
    // Grade 2: HARD / ZORLANDIM
    else if (quality === 'hard' || quality === 2) {
      card.repetitions += 1;
      intervalDays = Math.max(2, Math.round(card.interval * 1.2));
      card.easeFactor = Math.max(1.3, +(card.easeFactor - 0.15).toFixed(2));
      card.box = intervalDays >= 7 ? 3 : (intervalDays >= 3 ? 2 : 1);
      toastMessage = `"${wordText}" ${intervalDays} gün sonra tekrar edilecek.`;
    }
    // Grade 3: GOOD / HATIRLADIM (SM-2 Geometric Progression)
    else if (quality === 'good' || quality === 3) {
      const reps = card.repetitions;
      card.repetitions += 1;
      card.streak += 1;

      if (reps === 0) {
        intervalDays = 1;
        card.box = 1;
      } else if (reps === 1) {
        intervalDays = 3;
        card.box = 2;
      } else if (reps === 2) {
        intervalDays = 7;
        card.box = 3;
      } else if (reps === 3) {
        intervalDays = Math.max(14, Math.round(card.interval * card.easeFactor));
        card.box = 4;
      } else {
        intervalDays = Math.min(180, Math.round(card.interval * card.easeFactor));
        card.box = 5;
      }
      toastMessage = card.box >= 4
        ? `"${wordText}" Güçlü Bellek Kutusuna (${intervalDays} Gün) taşındı! 🚀`
        : `"${wordText}" ${intervalDays} gün sonra tekrar edilecek.`;
    }
    // Grade 4: EASY / ÇOK KOLAY (Fast-Tracked Exponential)
    else if (quality === 'easy' || quality === 4) {
      const reps = card.repetitions;
      card.repetitions += 1;
      card.streak += 2;
      card.easeFactor = +(card.easeFactor + 0.15).toFixed(2);

      if (reps === 0) {
        intervalDays = 3;
        card.box = 2;
      } else if (reps === 1) {
        intervalDays = 7;
        card.box = 3;
      } else {
        intervalDays = Math.min(180, Math.round(card.interval * card.easeFactor * 1.35));
        card.box = intervalDays >= 35 ? 5 : 4;
      }
      toastMessage = `"${wordText}" Kalıcı Hafıza Seviyesine (${intervalDays} Gün) eklendi! 🎉`;
    }

    card.interval = intervalDays;
    card.nextReview = now + (intervalDays * oneDay);
    card.lastReviewed = now;
    data[wordText] = card;
    this.saveData(data);

    // Record review in daily streak tracker
    this.recordReviewEvent();

    if (typeof App !== 'undefined' && App.showToast) {
      const toastType = (quality === 'good' || quality === 'easy' || quality === 3 || quality === 4) ? 'success' : 'info';
      App.showToast(toastMessage, toastType);
    }

    return card;
  },

  // ---------------------------------------------------------------------
  // EBBINGHAUS FORGETTING CURVE & MEMORY RETENTION CALCULATION
  // R = e^(-t / (S * 1.6)) * 100
  // ---------------------------------------------------------------------
  getRetention: function(wordText) {
    const card = this.getCard(wordText);
    if (!card || !card.lastReviewed) return 100;

    const now = Date.now();
    const elapsedDays = Math.max(0, (now - card.lastReviewed) / (24 * 60 * 60 * 1000));
    const stability = Math.max(1, (card.interval || 1) * 1.6);
    const retention = Math.round(100 * Math.exp(-elapsedDays / stability));

    return Math.max(15, Math.min(100, retention));
  },

  // Check if a word is due for review today
  isWordDue: function(wordText) {
    const card = this.getCard(wordText);
    if (!card) return false;
    return Date.now() >= card.nextReview;
  },

  // Get word state
  // returns: 'new', 'box1' (1d), 'box2' (3d), 'box3' (7d), 'box4' (16d), 'mastered' (35d+)
  getWordStatus: function(wordText) {
    const card = this.getCard(wordText);
    if (!card) return 'new';
    if (card.box >= 5) return 'mastered';
    if (card.box === 4) return 'consolidating';
    if (card.box === 3) return 'retaining';
    if (card.box === 2) return 'reviewing';
    return 'learning';
  },

  // ---------------------------------------------------------------------
  // DAILY DUE QUEUE & SMART DECK GENERATOR
  // ---------------------------------------------------------------------
  getDueWords: function(pool = [], limit = 20) {
    const dueList = pool.filter(w => this.isWordDue(w.word));
    // Sort by lowest retention first (most critical cards)
    dueList.sort((a, b) => this.getRetention(a.word) - this.getRetention(b.word));

    if (dueList.length >= limit) {
      return dueList.slice(0, limit);
    }

    // Supplement with unstudied/new words if due count is low
    const unstudied = pool.filter(w => !this.getCard(w.word));
    const combined = [...dueList, ...unstudied.slice(0, limit - dueList.length)];
    return combined;
  },

  // ---------------------------------------------------------------------
  // STREAK & HABIT TRACKER
  // ---------------------------------------------------------------------
  getStreak: function() {
    try {
      const data = JSON.parse(localStorage.getItem(this.STREAK_KEY)) || {
        current: 0,
        best: 0,
        lastDate: '',
        todayCount: 0
      };
      return data;
    } catch (e) {
      return { current: 0, best: 0, lastDate: '', todayCount: 0 };
    }
  },

  recordReviewEvent: function() {
    try {
      const streak = this.getStreak();
      const today = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'

      if (streak.lastDate === today) {
        streak.todayCount = (streak.todayCount || 0) + 1;
      } else {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        if (streak.lastDate === yesterday) {
          streak.current = (streak.current || 0) + 1;
        } else {
          streak.current = 1;
        }
        streak.best = Math.max(streak.best || 0, streak.current);
        streak.lastDate = today;
        streak.todayCount = 1;
      }

      localStorage.setItem(this.STREAK_KEY, JSON.stringify(streak));
      return streak;
    } catch (e) {
      return { current: 1, best: 1, lastDate: '', todayCount: 1 };
    }
  },

  // ---------------------------------------------------------------------
  // COMPREHENSIVE STATS FOR DASHBOARDS & ANALYTICS
  // ---------------------------------------------------------------------
  getStats: function() {
    const data = this.getData();
    let box1 = 0; // 1 Gün (Learning)
    let box2 = 0; // 3 Gün (Reviewing)
    let box3 = 0; // 7 Gün (Retaining)
    let box4 = 0; // 16 Gün (Consolidating)
    let box5 = 0; // 35+ Gün (Mastered)
    let dueCount = 0;
    let totalRetention = 0;
    let cardCount = 0;
    const now = Date.now();

    Object.keys(data).forEach(wordText => {
      const card = data[wordText];
      cardCount++;
      const box = card.box || 1;

      if (box >= 5) box5++;
      else if (box === 4) box4++;
      else if (box === 3) box3++;
      else if (box === 2) box2++;
      else box1++;

      if (now >= card.nextReview) dueCount++;
      totalRetention += this.getRetention(wordText);
    });

    const notebook = this.getNotebookWords();
    const streak = this.getStreak();
    const avgRetention = cardCount > 0 ? Math.round(totalRetention / cardCount) : 100;

    return {
      totalTracked: cardCount,
      learning: box1,      // Box 1
      reviewing: box2,     // Box 2
      retaining: box3,     // Box 3
      consolidating: box4, // Box 4
      mastered: box5 + box4 + box3, // Total with high memory
      permanent: box5,     // Box 5
      dueCount,
      notebookCount: notebook.length,
      averageRetention: avgRetention,
      streak: streak.current || 0,
      todayReviews: streak.todayCount || 0
    };
  },

  // =====================================================================
  // PERSONAL NOTEBOOK (KELİME DEFTERİM)
  // =====================================================================
  getNotebookWords: function() {
    try {
      const current = localStorage.getItem(this.NOTEBOOK_KEY);
      if (current) return JSON.parse(current) || [];

      const fallback = localStorage.getItem('ielts_ultra_my_notebook') ||
                       localStorage.getItem('ielts_last_version_my_notebook');
      if (fallback) {
        const parsed = JSON.parse(fallback) || [];
        this.saveNotebookWords(parsed);
        return parsed;
      }

      return [];
    } catch (e) {
      return [];
    }
  },

  saveNotebookWords: function(list) {
    try {
      localStorage.setItem(this.NOTEBOOK_KEY, JSON.stringify(list));
    } catch (e) {}
  },

  addWordToNotebook: function(word, meaning, example, level = 'B2', source = 'Manuel') {
    const list = this.getNotebookWords();
    const existing = list.find(w => w.word.toLowerCase() === word.toLowerCase().trim());
    
    if (existing) {
      if (typeof App !== 'undefined') App.showToast(`"${word}" zaten kelime defterinizde kayıtlı.`, "warning");
      return false;
    }

    const newEntry = {
      id: `nb-${Date.now()}`,
      word: word.trim(),
      meaning: meaning.trim(),
      example: example ? example.trim() : `Example usage of ${word}.`,
      level: level.toUpperCase(),
      source: source,
      addedAt: new Date().toLocaleDateString('tr-TR')
    };

    list.unshift(newEntry);
    this.saveNotebookWords(list);
    
    // Also track in SRS as Box 1
    this.rateWord(word.trim(), 'again');

    if (typeof App !== 'undefined') App.showToast(`"${word}" Kelime Defterinize eklendi! 📝`, "success");
    return true;
  },

  addCustomWord: function(customWord) {
    return this.addWordToNotebook(
      customWord.word,
      customWord.turkish || customWord.meaning,
      customWord.example,
      customWord.level || 'B2',
      'Okuma Çalışması'
    );
  },

  removeWordFromNotebook: function(wordId) {
    let list = this.getNotebookWords();
    list = list.filter(w => w.id !== wordId);
    this.saveNotebookWords(list);
    if (typeof App !== 'undefined') App.showToast("Kelime defterden silindi.", "info");
  }
};

if (typeof window !== 'undefined') {
  window.SRS_ENGINE = SRS_ENGINE;
}
