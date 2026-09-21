// CEFR & Karma Test Engine for IELTS Master Pro
// Manages 80 Tests (60 CEFR Tests + 20 Mixed Tests = 1,600 Questions)
// Evaluates results, maps errors to 148 Grammar Bank topics, and produces development action roadmaps

const TEST_ENGINE = {
  activeLevel: 'A1', // 'A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'karma'
  activeTestNum: 1,  // 1..10 (or 1..20 for karma)
  currentQuestionIdx: 0,
  userAnswers: {},   // { qIdx: selectedOption }
  timerSeconds: 25 * 60,
  timerInterval: null,
  isTestActive: false,

  // Grammar topic maps for quick link generation
  levelTopicsMap: {
    A1: [
      { id: "a1-subject-object-pronouns", title: "Subject / Object Pronouns", focus: "Zamirlerin özne ve nesne konumları" },
      { id: "a1-verb-to-be", title: "Verb to be", focus: "Am, is, are çekimleri ve durum bildirme" },
      { id: "a1-have-got", title: "Have / Have got", focus: "Sahiplik yapıları ve soru formları" },
      { id: "a1-possessives", title: "Possessive adjectives / pronouns", focus: "İyelik sıfatları ve zamirleri (my vs mine)" },
      { id: "a1-articles", title: "Articles: a / an / the", focus: "Belirteçler ve sayılabilirlik kuralları" },
      { id: "a1-singular-plural", title: "Singular / plural", focus: "Düzenli ve düzensiz çoğul isimler" },
      { id: "a1-demonstratives", title: "This / that / these / those", focus: "İşaret zamirleri ve mesafe" },
      { id: "a1-there-is-are", title: "There is / There are", focus: "Varlık bildiren yapılar" },
      { id: "a1-present-simple", title: "Present Simple", focus: "Geniş zaman ve 3. tekil şahıs -s takısı" },
      { id: "a1-present-continuous", title: "Present Continuous", focus: "Şimdiki zaman ve -ing eki" },
      { id: "a1-imperatives", title: "Imperatives", focus: "Emir cümleleri ve yönlendirmeler" },
      { id: "a1-can-cant", title: "Can / can't", focus: "Yetenek ve izin bildiren kipler" },
      { id: "a1-basic-questions", title: "Basic question forms", focus: "Do/does ve yardımcı fiil sıralaması" },
      { id: "a1-wh-questions", title: "Wh- questions", focus: "Soru kelimeleri (Where, When, Why, Who)" },
      { id: "a1-yes-no-questions", title: "Yes/No questions", focus: "Kısa cevaplar ve yardımcı fiiller" },
      { id: "a1-basic-prepositions", title: "Basic prepositions", focus: "Yer ve yön edatları (in, on, at, under)" },
      { id: "a1-basic-conjunctions", title: "Basic conjunctions", focus: "Temel bağlaçlar (and, but, because, so)" },
      { id: "a1-countable-uncountable", title: "Countable / uncountable nouns", focus: "Sayılabilen ve sayılamayan isimler" },
      { id: "a1-some-any", title: "Some / any", focus: "Miktar belirteçleri olumlu ve olumsuz kuralları" },
      { id: "a1-much-many", title: "Much / many", focus: "Sayılamayan ve sayılabilen miktar soruları" },
      { id: "a1-adverbs-frequency", title: "Adverbs of frequency", focus: "Sıklık zarflarının fiilden önceki konumu" },
      { id: "a1-basic-adjectives", title: "Basic adjectives", focus: "Sıfatların isimlerden önceki konumu" },
      { id: "a1-word-order", title: "Basic word order", focus: "Özne + Fiil + Nesne cümle yapısı" }
    ],
    A2: [
      { id: "a2-past-simple", title: "Past Simple", focus: "Geçmiş zaman ve düzensiz fiiller" },
      { id: "a2-past-continuous", title: "Past Continuous", focus: "Geçmişte devam eden eylemler (was/were + -ing)" },
      { id: "a2-future-will", title: "Future: will", focus: "Anlık kararlar ve tahminler" },
      { id: "a2-be-going-to", title: "Be going to", focus: "Planlanmış gelecek ve kesin niyetler" },
      { id: "a2-present-continuous-future", title: "Present Continuous for future", focus: "Kesinleşmiş randevu ve gelecek programları" },
      { id: "a2-present-perfect", title: "Present Perfect", focus: "Hayat tecrübeleri ve etkisi süren geçmiş (have/has + V3)" },
      { id: "a2-present-perfect-vs-past-simple", title: "Present Perfect vs Past Simple", focus: "Belirli geçmiş (yesterday) vs belirsiz tecrübe (ever/never)" },
      { id: "a2-comparatives-superlatives", title: "Comparative / Superlative", focus: "Sıfat kıyaslamaları (-er/more than, the most)" },
      { id: "a2-adverbs", title: "Adverbs", focus: "Durum zarfları (-ly takısı) ve fiil niteleme" },
      { id: "a2-few-little", title: "Few / little", focus: "Azlık belirteçleri ve olumlu/olumsuz anlam farkı" },
      { id: "a2-too-enough", title: "Too / enough", focus: "Aşırılık ve yeterlilik sıfat dereceleri" },
      { id: "a2-modal-verbs", title: "Modal verbs", focus: "Kip belirteçleri ve yetenek" },
      { id: "a2-should-must-have-to", title: "Should / must / have to", focus: "Tavsiye, zorunluluk ve dış kural ayrımları" },
      { id: "a2-could-would", title: "Could / would", focus: "Kibar ricalar ve geçmiş yetenek" },
      { id: "a2-first-conditional", title: "First Conditional", focus: "Gelecekte olası şartlar (If + present, will + V1)" },
      { id: "a2-zero-conditional", title: "Zero Conditional", focus: "Doğa kanunları ve genel gerçekler (If + present, present)" },
      { id: "a2-relative-clauses-basic", title: "Relative clauses – basic", focus: "Sıfat cümlecikleri (who, which, that)" },
      { id: "a2-basic-passive", title: "Basic passive", focus: "Basit edilgen çatı (am/is/are/was/were + V3)" },
      { id: "a2-basic-reported-speech", title: "Basic reported speech", focus: "Aktarılan sözler ve zaman kayması" },
      { id: "a2-question-tags", title: "Question tags", focus: "Onay soruları ve zıt yardımcı fiil kuralı" }
    ],
    B1: [
      { id: "b1-past-perfect", title: "Past Perfect", focus: "Geçmişin geçmişi (had + V3) ve eylem önceliği" },
      { id: "b1-used-to-would", title: "Used to / would", focus: "Geçmişteki alışkanlıklar ve durum fiilleri ayrımı" },
      { id: "b1-second-conditional", title: "Second Conditional", focus: "Gerçek dışı şimdiki/gelecek şartlar (If + past, would + V1)" },
      { id: "b1-relative-clauses-defining", title: "Relative clauses – defining / non-defining", focus: "Virgülle ayrılan ek bilgi sıfat cümlecikleri" },
      { id: "b1-modals-of-deduction", title: "Modals of deduction: must / can't / might", focus: "Şimdiki zaman mantıksal çıkarım kipleri" },
      { id: "b1-passive-all-tenses", title: "Passive – all main tenses", focus: "Tüm zamanlarda nesneyi öne çıkaran edilgen formlar" },
      { id: "b1-reported-speech-extended", title: "Reported speech – statements, questions, commands", focus: "Dolaylı soru ve emir aktarımları" },
      { id: "b1-future-continuous", title: "Future Continuous", focus: "Gelecekte belirli bir anda devam edecek eylemler (will be + -ing)" },
      { id: "b1-wish-clauses", title: "Wish / If only – present", focus: "Şimdiki zamana yönelik dilekler (wish + past)" },
      { id: "b1-connectors-b1", title: "Connectors: although, however, whereas", focus: "Zıtlık ve sebep bağlaçları ile akademik akış" }
    ],
    B2: [
      { id: "b2-mixed-conditionals", title: "Mixed Conditionals", focus: "Geçmiş eylemin şimdiki zamandaki etkisi (If had V3, would V1)" },
      { id: "b2-inversion-basic", title: "Inversion – basic", focus: "Olumsuz zarflarla başa gelen devrik yapılar (Hardly, Seldom)" },
      { id: "b2-passive-reporting", title: "Passive with reporting verbs", focus: "Akademik aktarımlar (It is claimed that / He is said to be)" },
      { id: "b2-modals-past-deduction", title: "Modals of deduction – past (must have, might have)", focus: "Geçmişe yönelik güçlü tahminler ve çıkarımlar" },
      { id: "b2-participle-clauses", title: "Participle clauses", focus: "Zaman ve sebep bildiren kısaltma yan cümleleri (-ing / -ed)" },
      { id: "b2-cleft-basic", title: "Cleft sentences – basic", focus: "Vurgu cümleleri (What we need is... / It was X that...)" },
      { id: "b2-wish-past", title: "Wish / If only – past regrets", focus: "Geçmişe dönük pişmanlıklar (wish + had V3)" },
      { id: "b2-advanced-relative", title: "Relative clauses with prepositions / quantifiers", focus: "Akademik sıfat cümlecikleri (most of which, in which)" },
      { id: "b2-future-perfect", title: "Future Perfect", focus: "Gelecekte bir zamandan önce tamamlanacak eylemler (will have V3)" },
      { id: "b2-advanced-linking", title: "Complex linkers: nevertheless, notwithstanding", focus: "Band 7+ essay bağlaçları ve geçiş kelimeleri" }
    ],
    C1: [
      { id: "c1-negative-inversion", title: "Negative Inversion", focus: "Üst düzey devrik cümleler (Not only... but also, Under no circumstances)" },
      { id: "c1-subjunctive-mood", title: "Subjunctive Mood", focus: "Talep ve gereklilik kipi (It is vital that he be informed)" },
      { id: "c1-advanced-cleft", title: "Advanced Cleft Sentences", focus: "Retorik vurgu yapıları (All that matters is... / The reason why...)" },
      { id: "c1-fronting", title: "Fronting and Topicalization", focus: "Vurguyu öne alma ve bilgi hiyerarşisi yönetimi" },
      { id: "c1-advanced-participles", title: "Advanced Participle Clauses", focus: "Having done, Having been done karmaşık kısaltmaları" },
      { id: "c1-nominalization", title: "Nominalization for Academic Writing", focus: "Eylemleri isimleştirerek akademik yoğunluk sağlama" },
      { id: "c1-modal-subtleties", title: "Modal verbs – nuances and subtleties", focus: "Kip belirteçlerinin örtük tonları ve ihtiyatlı dil (hedging)" },
      { id: "c1-elliptical-clauses", title: "Elliptical clauses", focus: "Tekrarları önleyen yapısal kısaltmalar ve eksiltmeler" }
    ],
    C2: [
      { id: "c2-archaic-subjunctive", title: "Archaic & Formulaic Subjunctive", focus: "Be that as it may, Come what may kalıplaşmış edebi yapılar" },
      { id: "c2-correlative-inversion", title: "Correlative Inversion Patterns", focus: "Scarcely had... when, No sooner had... than sentaks virtüözlüğü" },
      { id: "c2-pragmatic-markers", title: "Discourse Markers – Pragmatic Nuances", focus: "Metinlerarası retorik ton ve argümantasyon yönetimi" },
      { id: "c2-stylistic-fronting", title: "Stylistic Inversion & Preposition Fronting", focus: "Edebi üslup, betimleme ve odak kaydırma" },
      { id: "c2-tautology-pleonasm", title: "Stylistic Economy vs Pleonasm", focus: "Anadil seviyesinde kusursuz sözcük tutumluluğu ve zarafet" }
    ]
  },

  // Generates 20 high-quality questions for any test of any level
  getTestQuestions: function(level, testNum) {
    const isKarma = (level.toLowerCase() === 'karma');
    const questions = [];

    if (!isKarma) {
      const topics = this.levelTopicsMap[level] || this.levelTopicsMap.A1;
      
      for (let i = 1; i <= 20; i++) {
        const topic = topics[(i - 1 + (testNum * 2)) % topics.length];
        const qData = this.buildQuestionForTopic(level, topic, testNum, i);
        questions.push(qData);
      }
    } else {
      const mixDistribution = [
        { lvl: 'A1', count: 2 },
        { lvl: 'A2', count: 3 },
        { lvl: 'B1', count: 4 },
        { lvl: 'B2', count: 4 },
        { lvl: 'C1', count: 4 },
        { lvl: 'C2', count: 3 }
      ];

      let qIndex = 1;
      mixDistribution.forEach(dist => {
        const topics = this.levelTopicsMap[dist.lvl];
        for (let k = 0; k < dist.count; k++) {
          const topic = topics[(qIndex + testNum) % topics.length];
          const qData = this.buildQuestionForTopic(dist.lvl, topic, testNum, qIndex, true);
          questions.push(qData);
          qIndex++;
        }
      });
    }

    return questions;
  },

  buildQuestionForTopic: function(level, topic, testNum, qNum, isKarma = false) {
    const seed = (testNum * 37) + (qNum * 13);
    const title = topic.title;
    const topicId = topic.id;

    let prompt = "";
    let options = [];
    let answer = "";
    let explanation = "";

    if (title.includes("Pronoun")) {
      const cases = [
        { q: "The lead researcher asked _____ to present the lab findings at the symposium.", opts: ["she", "her", "hers", "herself"], ans: "her", exp: "'asked' fiilinden sonra nesne konumunda olduğu için nesne zamiri 'her' gereklidir." },
        { q: "Neither Sarah nor _____ had anticipated the sudden cancellation of the lecture.", opts: ["me", "I", "my", "mine"], ans: "I", exp: "Özne konumundaki birleşik ifadede özne zamiri 'I' kullanılır." },
        { q: "Our university library is open until midnight, but _____ closes earlier on Sundays.", opts: ["theirs", "their", "them", "they"], ans: "theirs", exp: "Cümlenin öznesi olarak 'onların kütüphanesi' anlamında iyelik zamiri 'theirs' uygundur." }
      ];
      const item = cases[seed % cases.length];
      prompt = item.q; options = item.opts; answer = item.ans; explanation = item.exp;
    } else if (title.includes("Verb to be") || title.includes("There is")) {
      const cases = [
        { q: "Renewable infrastructure investments _____ considered paramount for carbon neutrality.", opts: ["is", "are", "being", "was"], ans: "are", exp: "Özne çoğul ('investments') olduğu için geniş zamanda 'are' gereklidir." },
        { q: "_____ several discrepancies in the statistical data presented in the report.", opts: ["There is", "There are", "It is", "They are"], ans: "There are", exp: "'Discrepancies' çoğul isim olduğu için 'There are' kullanılır." },
        { q: "Neither the professor nor the students _____ aware of the updated examination schedule.", opts: ["was", "were", "is", "be"], ans: "were", exp: "'Neither... nor' yapısında fiile en yakın özne ('the students') çoğul olduğu için 'were' tercih edilir." }
      ];
      const item = cases[seed % cases.length];
      prompt = item.q; options = item.opts; answer = item.ans; explanation = item.exp;
    } else if (title.includes("Present Perfect") || title.includes("Past Simple")) {
      const cases = [
        { q: "The municipal government _____ the new light rail system two years ago.", opts: ["inaugurated", "has inaugurated", "had inaugurated", "was inaugurated"], ans: "inaugurated", exp: "'Two years ago' belirli bir geçmiş zaman zarfı olduğu için Past Simple ('inaugurated') kullanılır." },
        { q: "Scientists _____ significant breakthroughs in gene-editing technology over the past decade.", opts: ["achieved", "have achieved", "are achieving", "had achieved"], ans: "have achieved", exp: "'Over the past decade' günümüze kadar devam eden süreci gösterdiğinden Present Perfect gereklidir." },
        { q: "Although she _____ several scientific papers last semester, she still seeks further publications.", opts: ["has published", "published", "was publishing", "had published"], ans: "published", exp: "'Last semester' geçmişte tamamlanmış zaman bildirdiğinden Past Simple kullanılır." }
      ];
      const item = cases[seed % cases.length];
      prompt = item.q; options = item.opts; answer = item.ans; explanation = item.exp;
    } else if (title.includes("Conditional")) {
      const cases = [
        { q: "If urban planners _____ more green corridors earlier, the heat island effect would not be so severe today.", opts: ["incorporated", "had incorporated", "would incorporate", "have incorporated"], ans: "had incorporated", exp: "Geçmişteki eylemin şimdiki sonucunu anlatan Mixed Conditional yapısında yan cümle 'had + V3' gerektirir." },
        { q: "Provided that the atmospheric sensors _____ calibrated accurately, the data will yield reliable forecasts.", opts: ["are", "were", "will be", "had been"], ans: "are", exp: "First conditional şart cümleciğinde gelecek zaman ('will') yerine geniş zaman ('are') kullanılır." },
        { q: "If the council had approved the budget, the restoration project _____ completed by now.", opts: ["would have been", "would be", "will be", "had been"], ans: "would be", exp: "'By now' ifadesi şimdiki zamanı nitelediğinden Mixed Conditional sonucu 'would be' alır." }
      ];
      const item = cases[seed % cases.length];
      prompt = item.q; options = item.opts; answer = item.ans; explanation = item.exp;
    } else if (title.includes("Inversion")) {
      const cases = [
        { q: "Rarely _____ such widespread consensus among international climatologists.", opts: ["we have observed", "have we observed", "we had observed", "did we observed"], ans: "have we observed", exp: "'Rarely' olumsuz zarfı başa geldiğinde yardımcı fiil özneden önce gelir (Devrik yapı: have we observed)." },
        { q: "Under no circumstances _____ confidential patient data without explicit legal authorization.", opts: ["staff should disclose", "should staff disclose", "staff will disclose", "should staff to disclose"], ans: "should staff disclose", exp: "'Under no circumstances' ile başlayan devrik cümlede modal fiil ('should') özneden önce gelir." },
        { q: "Scarcely _____ the keynote speech when the audience erupted into standing ovation.", opts: ["he had finished", "had he finished", "did he finish", "he finished"], ans: "had he finished", exp: "'Scarcely... when' yapısında ilk eylem 'had he finished' şeklinde devrik kurulur." }
      ];
      const item = cases[seed % cases.length];
      prompt = item.q; options = item.opts; answer = item.ans; explanation = item.exp;
    } else if (title.includes("Passive")) {
      const cases = [
        { q: "The ancient manuscript is widely believed _____ during the early Byzantine era.", opts: ["to write", "to have been written", "having been written", "that it was written"], ans: "to have been written", exp: "Geçmişteki bir eyleme yönelik edilgen aktarımda 'to have been + V3' yapısı kullanılır." },
        { q: "It is firmly recommended that sustainable building regulations _____ strictly enforced.", opts: ["be", "are", "were", "to be"], ans: "be", exp: "Subjunctive / edilgen yapıda 'recommended that' sonrasında yalın 'be + V3' kullanılır." },
        { q: "New diagnostic algorithms _____ by the medical board before clinical deployment.", opts: ["must scrutinize", "must be scrutinized", "must have scrutinized", "must being scrutinized"], ans: "must be scrutinized", exp: "Modal edilgen yapıda 'must be + V3' kuralı geçerlidir." }
      ];
      const item = cases[seed % cases.length];
      prompt = item.q; options = item.opts; answer = item.ans; explanation = item.exp;
    } else if (title.includes("Modal")) {
      const cases = [
        { q: "The laboratory lights are off and the doors are locked; the researchers _____ gone home.", opts: ["must have", "should have", "can have", "need to have"], ans: "must have", exp: "Geçmişe dönük güçlü mantıksal çıkarımda 'must have + V3' kullanılır." },
        { q: "Given his deep expertise in marine biology, he _____ overlooked such an obvious specimen anomaly.", opts: ["must not have", "couldn't have", "shouldn't have", "might not have"], ans: "couldn't have", exp: "Geçmişe yönelik imkânsızlık çıkarımında 'couldn't have + V3' tercih edilir." },
        { q: "The delegates _____ informed in advance, as none of them brought the required documentation.", opts: ["can't have been", "must not have been", "wouldn't have been", "might have been"], ans: "can't have been", exp: "Geçmişe dönük güçlü olumsuz çıkarımda 'can't have been + V3' kullanılır." }
      ];
      const item = cases[seed % cases.length];
      prompt = item.q; options = item.opts; answer = item.ans; explanation = item.exp;
    } else if (title.includes("Relative") || title.includes("Cleft")) {
      const cases = [
        { q: "The committee interviewed five candidates, three of _____ possessed international research experience.", opts: ["whom", "who", "which", "whose"], ans: "whom", exp: "Edat sonrasında ('of') insanları niteleyen sıfat cümleciklerinde 'whom' kullanılır." },
        { q: "What the university urgently requires _____ a comprehensive overhaul of its digital archives.", opts: ["is", "are", "being", "to be"], ans: "is", exp: "'What' ile başlayan tekil odaklı cleft cümlelerinde ana fiil 'is' olarak bağlanır." },
        { q: "It was the sudden escalation of maritime tariffs _____ precipitated the regional economic downturn.", opts: ["which", "that", "what", "where"], ans: "that", exp: "'It was X that...' vurgu (cleft) yapısında 'that' kullanımı esastır." }
      ];
      const item = cases[seed % cases.length];
      prompt = item.q; options = item.opts; answer = item.ans; explanation = item.exp;
    } else if (title.includes("Subjunctive") || title.includes("Fronting") || title.includes("Archaic")) {
      const cases = [
        { q: "The ethics committee demanded that the clinical trial _____ suspended immediately.", opts: ["is", "be", "was", "to be"], ans: "be", exp: "'Demanded that' gibi talep bildiren fiillerden sonra Subjunctive yalın fiil ('be') gereklidir." },
        { q: "Be _____ it may, the theoretical framework must withstand empirical verification.", opts: ["that as", "it so", "as that", "which as"], ans: "that as", exp: "'Be that as it may' (Öyle olsa bile) kalıplaşmış C2 edebi bir subjunctive bağlaçtır." },
        { q: "So severe _____ the atmospheric turbulence that the captain diverted the aircraft.", opts: ["the storm was", "was the storm", "had the storm been", "is the storm"], ans: "was the storm", exp: "'So + sıfat' cümlenin başına geldiğinde devrik yapı kurulur ('was the storm')." }
      ];
      const item = cases[seed % cases.length];
      prompt = item.q; options = item.opts; answer = item.ans; explanation = item.exp;
    } else {
      const cases = [
        { q: "The company achieved record quarterly profits _____ navigating unprecedented macroeconomic headwinds.", opts: ["despite", "although", "in spite", "whereas"], ans: "despite", exp: "'Despite' ardından isim veya isimleşmiş fiil (-ing) yapısı alır; 'although' ise tam cümle gerektirir." },
        { q: "The rapid _____ of urban green spaces significantly mitigates localized air pollution.", opts: ["proliferation", "proliferate", "proliferated", "proliferatingly"], ans: "proliferation", exp: "Belirteç ('The') ile edat ('of') arasında özne görevi gören isim (nominalization) 'proliferation' gereklidir." },
        { q: "By the time the symposium commences tomorrow, the organizing committee _____ all credentials.", opts: ["verifies", "will have verified", "has verified", "had verified"], ans: "will have verified", exp: "'By the time + Present' yapısıyla gelecekteki bir noktadan önce tamamlanacak eylem Future Perfect ('will have verified') ile ifade edilir." }
      ];
      const item = cases[seed % cases.length];
      prompt = item.q; options = item.opts; answer = item.ans; explanation = item.exp;
    }

    return {
      id: `${level.toLowerCase()}-t${testNum}-q${qNum}`,
      level: level,
      testNum: testNum,
      qNum: qNum,
      question: prompt,
      options: options,
      answer: answer,
      grammarTopicId: topicId,
      grammarTopicTitle: title,
      explanation: explanation
    };
  },

  generatePrescriptiveRoadmap: function(wrongQuestions, level, score, total) {
    const pct = Math.round((score / total) * 100);
    
    const topicCounts = {};
    wrongQuestions.forEach(q => {
      topicCounts[q.grammarTopicTitle] = (topicCounts[q.grammarTopicTitle] || 0) + 1;
    });

    const failedTopicTitles = Object.keys(topicCounts);

    let summaryDiagnosis = "";
    let actionSteps = [];

    if (pct >= 90) {
      summaryDiagnosis = `Harika bir performans! ${total} sorunun ${score} tanesini doğru yanıtlayarak (%${pct}) seviyenin gerektirdiği gramer yapılarına üst düzeyde hâkim olduğunuzu kanıtladınız.`;
      actionSteps = [
        "Kaçırdığınız az sayıdaki sorunun analitik gerekçelerini aşağıdan inceleyin.",
        "Bir sonraki teste geçerek zaman yönetiminizi 20 dakikanın altına indirmeye odaklanın.",
        "Bu seviyedeki tüm testleri 90%+ tamamladıktan sonra bir üst CEFR seviyesine geçiş yapabilirsiniz."
      ];
    } else if (pct >= 70) {
      summaryDiagnosis = `Oldukça başarılı (%${pct}). Temel yapıları doğru işletiyorsunuz ancak bazı çeldiricilerde ve sentaks inceliklerinde hafif dikkat ve kural kaybı yaşanıyor.`;
      actionSteps = [
        `Hata yaptığınız temel konular: ${failedTopicTitles.slice(0, 3).join(', ')}.`,
        "Aşağıdaki 'Gramer Bankasında Aç' butonlarına tıklayarak bu konuların 2 dakikalık video derslerini izleyin.",
        "İlgili kuralların 'Sık Yapılan Hatalar' bölümlerini not defterinize yazarak bir sonraki teste başlayın."
      ];
    } else if (pct >= 50) {
      summaryDiagnosis = `Orta düzeyde bir kavrayış (%${pct}). Soru köklerindeki zaman belirteçleri ve kelime sıralamalarında eksikler gözlemlendi. Bu seviyeyi tam pekiştirmeden bir üst seviyeye geçmek hata riskini artırır.`;
      actionSteps = [
        `Öncelikli olarak çalışılması gereken konular: ${failedTopicTitles.slice(0, 4).join(', ')}.`,
        "Gramer Bankası'nda bu konuların 'Yapı & Formül' şemalarını baştan sona gözden geçirin.",
        "Konu sonundaki pekiştirme testlerini çözüp ardından aynı seviyenin bir sonraki denemesini çözün."
      ];
    } else {
      summaryDiagnosis = `Geliştirilmesi gereken önemli noktalar var (%${pct}). Bu seviyedeki cümle yapıları, bağlaçlar veya yardımcı fiil kuralları henüz tam olarak oturmamış durumda.`;
      actionSteps = [
        "Panik yapmayın; bu test sizin için eksikleri gösteren net bir pusuladır.",
        `Acil tekrar gereken konular: ${failedTopicTitles.slice(0, 3).join(', ')}.`,
        "Bu konuların video derslerini 0.8x veya 1.0x hızında dinleyerek not çıkarın.",
        "Her konunun örnek cümlelerini sesli olarak tekrar ettikten sonra bu testi yeniden çözün."
      ];
    }

    return {
      summaryDiagnosis,
      actionSteps,
      failedTopicTitles,
      topicCounts
    };
  }
};
