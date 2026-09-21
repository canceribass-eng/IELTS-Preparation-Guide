// Analytics & Student Performance Intelligence Engine
// Computes CEFR Mastery, Competency Radar, and Test Trajectory

const ANALYTICS_ENGINE = {
  // Compute overall competencies (0-100%) for Radar Chart
  getCompetencies: function() {
    // 1. Scan localStorage for test scores
    let tenseScores = [];
    let modalScores = [];
    let condScores = [];
    let inversionScores = [];
    let readingScores = [];
    let totalTestsCompleted = 0;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('test_score_')) {
        totalTestsCompleted++;
        const score = parseInt(localStorage.getItem(key) || '0', 10);
        const pct = (score / 20) * 100;

        if (key.includes('a1-') || key.includes('a2-')) {
          tenseScores.push(pct);
        }
        if (key.includes('b1-') || key.includes('b2-')) {
          condScores.push(pct);
          modalScores.push(pct);
        }
        if (key.includes('c1-') || key.includes('c2-')) {
          inversionScores.push(pct);
        }
      }
    }

    const calcAvg = (arr, fallback) => {
      if (arr.length === 0) return fallback;
      const sum = arr.reduce((a, b) => a + b, 0);
      return Math.round(sum / arr.length);
    };

    // 2. SRS Vocabulary Mastery
    const srsStats = (typeof SRS_ENGINE !== 'undefined') ? SRS_ENGINE.getStats() : { mastered: 0, totalTracked: 0 };
    let vocabPct = 70;
    if (srsStats.totalTracked > 0) {
      vocabPct = Math.min(100, Math.round((srsStats.mastered / Math.max(10, srsStats.totalTracked)) * 100) + 40);
    }

    return {
      tenses: calcAvg(tenseScores, 75),
      conditionals: calcAvg(condScores, 65),
      modals: calcAvg(modalScores, 70),
      inversion: calcAvg(inversionScores, 55),
      vocabulary: vocabPct,
      listening: 80,
      reading: 75,
      totalTestsCompleted
    };
  },

  // Compute CEFR completion percentage (A1..C2)
  getCefrProgress: function() {
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const result = {};

    levels.forEach(lvl => {
      let completedInLevel = 0;
      for (let t = 1; t <= 10; t++) {
        const score = localStorage.getItem(`test_score_${lvl}-t${t}`);
        if (score !== null) completedInLevel++;
      }
      result[lvl] = {
        completedTests: completedInLevel,
        totalTests: 10,
        percentage: Math.round((completedInLevel / 10) * 100)
      };
    });

    return result;
  },

  // Generates SVG Radar Chart (7-Axis Spider Chart)
  renderRadarChartSvg: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const data = this.getCompetencies();
    const axes = [
      { label: "Zamanlar (Tenses)", val: data.tenses },
      { label: "Şart Cümleleri", val: data.conditionals },
      { label: "Kipler (Modals)", val: data.modals },
      { label: "Devrik Yapılar", val: data.inversion },
      { label: "Kelime Dağarcığı", val: data.vocabulary },
      { label: "Listening Becerisi", val: data.listening },
      { label: "Reading Becerisi", val: data.reading }
    ];

    const cx = 150;
    const cy = 150;
    const r = 100;
    const totalAxes = axes.length;

    // Grid circles
    let gridSvg = '';
    [0.25, 0.5, 0.75, 1.0].forEach(factor => {
      let points = [];
      for (let i = 0; i < totalAxes; i++) {
        const angle = (Math.PI * 2 / totalAxes) * i - (Math.PI / 2);
        const x = cx + r * factor * Math.cos(angle);
        const y = cy + r * factor * Math.sin(angle);
        points.push(`${x},${y}`);
      }
      gridSvg += `<polygon points="${points.join(' ')}" fill="none" stroke="currentColor" stroke-opacity="0.12" stroke-width="1"/>`;
    });

    // Axis lines and labels
    let axisSvg = '';
    let dataPoints = [];

    axes.forEach((axis, i) => {
      const angle = (Math.PI * 2 / totalAxes) * i - (Math.PI / 2);
      const xMax = cx + r * Math.cos(angle);
      const yMax = cy + r * Math.sin(angle);

      // Axis ray
      axisSvg += `<line x1="${cx}" y1="${cy}" x2="${xMax}" y2="${yMax}" stroke="currentColor" stroke-opacity="0.15" stroke-width="1"/>`;

      // Label positioning
      const xLabel = cx + (r + 25) * Math.cos(angle);
      const yLabel = cy + (r + 20) * Math.sin(angle);
      const anchor = Math.abs(Math.cos(angle)) < 0.2 ? 'middle' : (Math.cos(angle) > 0 ? 'start' : 'end');
      
      axisSvg += `
        <text x="${xLabel}" y="${yLabel}" font-size="8.5" font-family="monospace" fill="currentColor" opacity="0.8" text-anchor="${anchor}" dominant-baseline="central">
          ${axis.label} (%${axis.val})
        </text>
      `;

      // Data point
      const valFactor = Math.max(0.1, axis.val / 100);
      const xVal = cx + r * valFactor * Math.cos(angle);
      const yVal = cy + r * valFactor * Math.sin(angle);
      dataPoints.push(`${xVal},${yVal}`);
    });

    // Data polygon with glowing emerald styling
    const polygonPoints = dataPoints.join(' ');
    const dataSvg = `
      <polygon points="${polygonPoints}" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="2.5" stroke-linejoin="round"/>
      ${dataPoints.map(pt => {
        const [px, py] = pt.split(',');
        return `<circle cx="${px}" cy="${py}" r="4" fill="#10b981" stroke="#000000" stroke-width="1.5"/>`;
      }).join('')}
    `;

    container.innerHTML = `
      <svg viewBox="0 0 300 300" class="w-full h-auto max-w-[340px] mx-auto overflow-visible text-black dark:text-white">
        ${gridSvg}
        ${axisSvg}
        ${dataSvg}
      </svg>
    `;
  },

  // Get test history
  getTestHistory: function() {
    const list = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('test_score_')) {
        const idPart = key.replace('test_score_', '');
        const score = parseInt(localStorage.getItem(key) || '0', 10);
        list.push({
          testId: idPart,
          score: score,
          total: 20,
          percentage: Math.round((score / 20) * 100)
        });
      }
    }
    return list;
  }
};
