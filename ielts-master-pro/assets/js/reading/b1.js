// =============================================================================
// CEFR B1 READING PRACTICE PASSAGES (25 Texts: B1-01 to B1-25)
// =============================================================================

const READING_B1 = [
  {
    id: "read_b1_01",
    level: "B1",
    category: "Çevre & Teknoloji",
    title: "The Growth of Solar Rooftops",
    titleTr: "Çatı Güneş Panellerinin Yükselişi",
    grammarRef: {
      id: "b1-present-perfect-for-since",
      name: "Present Perfect with For & Since (Süreç Bildirme)",
      targetFocus: "Geçmişte başlayıp günümüze kadar devam eden süreçlerde 'for (süre boyunca)' ve 'since (başlangıç noktasından beri)'."
    },
    wordCount: 160,
    readTime: "2 dk",
    text: "Decentralized photovoltaic energy has gained unprecedented momentum across Western Europe. In Germany and Denmark, municipal homeowners <mark class='vocab-hl' data-word='have installed' data-pos='v. phrase' data-phonetic='/hæv ɪnˈstɔːld/' data-tr='kurdular' data-def='Present perfect showing ongoing effect.' data-ex='Families have installed rooftop panels.'>have installed</mark> rooftop silicon panels <mark class='vocab-hl' data-word='since 2015' data-pos='prep. phrase' data-phonetic='/sɪns ˈtwen.ti ˈfɪf.tiːn/' data-tr='2015 yılından beri' data-def='Starting point in time.' data-ex='Generating electricity since 2015.'>since 2015</mark> with subsidized government loans. Clean-tech cooperatives have flourished <mark class='vocab-hl' data-word='for nearly a decade' data-pos='prep. phrase' data-phonetic='/fɔːr ˈnɪə.li ə ˈdek.eɪd/' data-tr='neredeyse on yıldır' data-def='Duration of time period.' data-ex='Co-ops have operated for a decade.'>for nearly a decade</mark>, enabling residential communities to sell surplus electrical wattage back to the central national grid. Environmental economists point out that carbon footprints have diminished significantly in regions where domestic micro-generation is widespread.",
    vocabularies: [
      { word: "unprecedented", pos: "adj.", phonetic: "/ʌnˈpres.ɪ.den.tɪd/", tr: "eşi görülmemiş, benzeri olmayan", def: "Never done or known before.", example: "Solar energy has gained unprecedented momentum." },
      { word: "subsidized", pos: "adj.", phonetic: "/ˈsʌb.sɪ.daɪzd/", tr: "devlet destekli, sübvansiyonlu", def: "Supported financially by public funds.", example: "Supported by subsidized government loans." },
      { word: "wattage", pos: "noun", phonetic: "/ˈwɒt.ɪdʒ/", tr: "vat gücü, elektrik enerjisi", def: "An amount of electrical power expressed in watts.", example: "Selling surplus electrical wattage." }
    ],
    questions: [
      { q: "Since when have homeowners in Germany and Denmark installed solar panels?", options: ["A) Since 2000", "B) Since 2015", "C) Since last month"], answer: "B", exp: "Metinde 'have installed rooftop silicon panels since 2015' denir." },
      { q: "What does 'for nearly a decade' describe?", options: ["A) A specific calendar date", "B) The duration of time the cooperatives have flourished", "C) A future deadline"], answer: "B", exp: "'For' edatı geçen zaman diliminin süresini (duration) belirtir." }
    ]
  },
  {
    id: "read_b1_02",
    level: "B1",
    category: "Bilim & Tarih",
    title: "The Discovery of Penicillin",
    titleTr: "Penisilinin Keşfi",
    grammarRef: {
      id: "b1-present-perfect-vs-past-simple",
      name: "Present Perfect vs Past Simple Contrast (Zaman Karşılaştırması)",
      targetFocus: "Kesin tarihler için Past Simple (in 1928 Fleming discovered); günümüze etkisi için Present Perfect (has saved millions)."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "Medical science changed forever during the twentieth century. In 1928, Scottish bacteriologist Alexander Fleming <mark class='vocab-hl' data-word='discovered' data-pos='v. (past)' data-phonetic='/dɪˈskʌv.əd/' data-tr='keşfetti' data-def='Past Simple for definite historical date.' data-ex='Fleming discovered penicillin in 1928.'>discovered</mark> the antibacterial properties of Penicillium notatum after returning from a summer holiday. When he examined his laboratory culture plates, he observed that green mold was actively destroying surrounding colonies of staphylococcus bacteria. Since that breakthrough, antibiotic therapeutics <mark class='vocab-hl' data-word='have saved' data-pos='v. phrase' data-phonetic='/hæv seɪvd/' data-tr='kurtardı (günümüze dek)' data-def='Present perfect for ongoing historical impact.' data-ex='Antibiotics have saved millions of lives.'>have saved</mark> hundreds of millions of patients from fatal bacterial infections.",
    vocabularies: [
      { word: "therapeutics", pos: "noun", phonetic: "/ˌθer.əˈpjuː.tɪks/", tr: "tedavi yöntemleri, terapötikler", def: "The branch of medicine concerned with the treatment of disease.", example: "Antibiotic therapeutics transformed healthcare." },
      { word: "fatal", pos: "adj.", phonetic: "/ˈfeɪ.təl/", tr: "ölümcül, hayati tehlike arz eden", def: "Causing death.", example: "Saved patients from fatal bacterial infections." }
    ],
    questions: [
      { q: "Which tense is used for Fleming's discovery in 1928?", options: ["A) Present Perfect", "B) Past Simple (discovered)", "C) Future Continuous"], answer: "B", exp: "Geçmişteki belirli bir tarih (in 1928) için Past Simple kullanılır." },
      { q: "What did Fleming observe on the culture plates?", options: ["A) Red dye", "B) Green mold destroying bacteria colonies", "C) Golden crystals"], answer: "B", exp: "Metinde 'green mold was actively destroying surrounding colonies' denir." }
    ]
  },
  {
    id: "read_b1_03",
    level: "B1",
    category: "Kariyer & Çalışma",
    title: "The Rise of Remote Software Engineering",
    titleTr: "Uzaktan Yazılım Mühendisliğinin Yükselişi",
    grammarRef: {
      id: "b1-present-perfect-continuous",
      name: "Present Perfect Continuous (Geçmişten Bugüne Kesintisiz Süreç)",
      targetFocus: "Süren ve etkileri gözlenen eylemlerde 'have/has been + verb-ing'."
    },
    wordCount: 160,
    readTime: "2 dk",
    text: "For the past three years, software architect Nathan <mark class='vocab-hl' data-word='has been developing' data-pos='v. phrase' data-phonetic='/hæz biːn dɪˈvel.ə.pɪŋ/' data-tr='geliştirmekte' data-def='Action continuing uninterruptedly up to now.' data-ex='He has been developing cloud apps.'>has been developing</mark> cloud-native applications from his coastal studio in Lisbon. He <mark class='vocab-hl' data-word='has been collaborating' data-pos='v. phrase' data-phonetic='/hæz biːn kəˈlæb.ə.reɪ.tɪŋ/' data-tr='iş birliği yapmakta' data-def='Ongoing professional activity.' data-ex='He has been collaborating with engineers.'>has been collaborating</mark> with an international team of UX designers spread across four time zones. 'I have been working remotely since early 2021, and my productivity has expanded remarkably,' Nathan reflects. Modern project tracking software and asynchronous communication channels enable global engineering departments to deliver updates without physical office attendance.",
    vocabularies: [
      { word: "asynchronous", pos: "adj.", phonetic: "/eɪˈsɪŋ.krə.nəs/", tr: "eş zamanlı olmayan, asenkron", def: "Not existing or occurring at the same time.", example: "Asynchronous communication channels." },
      { word: "productivity", pos: "noun", phonetic: "/ˌprɒd.ʌkˈtɪv.ə.ti/", tr: "verimlilik, üretkenlik", def: "The effectiveness of productive effort.", example: "My productivity has expanded remarkably." }
    ],
    questions: [
      { q: "How long has Nathan been developing cloud applications from Lisbon?", options: ["A) For three months", "B) For the past three years", "C) Since yesterday"], answer: "B", exp: "Metinde 'For the past three years, software architect Nathan has been developing' denir." },
      { q: "What does 'has been collaborating' emphasize?", options: ["A) An action that finished years ago", "B) An ongoing process that continues in the present", "C) A future wish"], answer: "B", exp: "Present Perfect Continuous eylemin geçmişten beri aralıksız sürdüğünü vurgular." }
    ]
  },
  {
    id: "read_b1_04",
    level: "B1",
    category: "Havacılık & Tarih",
    title: "The Mystery of Flight 19",
    titleTr: "19 Numaralı Uçuşun Gizemi",
    grammarRef: {
      id: "b1-past-perfect-simple",
      name: "Past Perfect Simple: Had + V3 (Önceki Geçmiş Zaman)",
      targetFocus: "Geçmişteki iki olaydan daha önce gerçekleşeni bildiren 'had + past participle'."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "In December 1945, five military training bombers departed from Florida on a routine navigation drill over the Atlantic. Before the aircraft vanished into the infamous Bermuda Triangle, flight instructors <mark class='vocab-hl' data-word='had warned' data-pos='v. phrase' data-phonetic='/hæd wɔːnd/' data-tr='uyarmıştı (daha önce)' data-def='Action earlier than past vanishing.' data-ex='Instructors had warned the crews.'>had warned</mark> the squadron about deteriorating squalls. The flight leader reported via radio that compass navigation systems <mark class='vocab-hl' data-word='had malfunctioned' data-pos='v. phrase' data-phonetic='/hæd ˌmælˈfʌŋk.ʃənd/' data-tr='bozulmuştu (daha önce)' data-def='Earlier mechanical failure.' data-ex='The compass had malfunctioned.'>had malfunctioned</mark> completely. By the time emergency rescue flying boats took off to locate survivors, the five bombers had run out of fuel and fallen into tempestuous waters.",
    vocabularies: [
      { word: "squadron", pos: "noun", phonetic: "/ˈskwɒd.rən/", tr: "filo, uçak birliği", def: "An operational unit in an air force consisting of two or more flights of aircraft.", example: "Had warned the bomber squadron." },
      { word: "tempestuous", pos: "adj.", phonetic: "/temˈpes.tʃu.əs/", tr: "fırtınalı, azgın", def: "Characterized by strong and turbulent or conflicting emotion or weather.", example: "Fallen into tempestuous waters." }
    ],
    questions: [
      { q: "What had happened before the rescue boats took off?", options: ["A) The sun had risen", "B) The bombers had run out of fuel", "C) The war had ended"], answer: "B", exp: "Metinde 'the five bombers had run out of fuel' denir." },
      { q: "Why is 'had malfunctioned' used?", options: ["A) To show compass failure happened before radio contact", "B) To indicate future repair", "C) To describe present condition"], answer: "A", exp: "Past Perfect, geçmişteki başka bir olaydan daha önce olan eylemi gösterir." }
    ]
  },
  {
    id: "read_b1_05",
    level: "B1",
    category: "Varsayımlar & Hayaller",
    title: "If I Governed the Metropolis",
    titleTr: "Metropolü Ben Yönetseydim",
    grammarRef: {
      id: "b1-second-conditional",
      name: "Second Conditional: Type 2 (Gerçek Dışı Şimdiki Zaman)",
      targetFocus: "Şu an için hayali/varsayımsal durumlarda 'If + Past Simple, would + Verb'."
    },
    wordCount: 160,
    readTime: "2 dk",
    text: "Urbanization generates intense pollution and social alienation. 'If I <mark class='vocab-hl' data-word='were' data-pos='v. (subj.)' data-phonetic='/wɜːr/' data-tr='olsaydım' data-def='Hypothetical condition with to be.' data-ex='If I were mayor of this city...'>were</mark> the municipal mayor of this metropolis,' architect Julian mused, 'I <mark class='vocab-hl' data-word='would pedestrianize' data-pos='v. phrase' data-phonetic='/wʊd pəˈdes.tri.ə.naɪz/' data-tr='yayalaştırırdım' data-def='Hypothetical result.' data-ex='I would pedestrianize commercial squares.'>would pedestrianize</mark> every historic avenue within the central commercial quadrant. I <mark class='vocab-hl' data-word='would subsidize' data-pos='v. phrase' data-phonetic='/wʊd ˈsʌb.sɪ.daɪz/' data-tr='desteklerdim' data-def='Imaginary policy outcome.' data-ex='I would subsidize public bicycles.'>would subsidize</mark> electric light rail transit so that citizens could travel cost-free. If towns planted vertical gardens on concrete skyscrapers, city temperatures would drop noticeably during summer heatwaves.' Such hypothetical policies inspire real progressive civic leaders today.",
    vocabularies: [
      { word: "alienation", pos: "noun", phonetic: "/ˌeɪ.li.əˈneɪ.ʃən/", tr: "yabancılaşma, soyutlanma", def: "The state of being isolated from a group or an activity.", example: "Urbanization generates social alienation." },
      { word: "pedestrianize", pos: "verb", phonetic: "/pəˈdes.tri.ə.naɪz/", tr: "yayalaştırmak, araç trafiğine kapatmak", def: "Convert a street or area for pedestrian use only.", example: "I would pedestrianize the central squares." }
    ],
    questions: [
      { q: "What would Julian do if he were mayor?", options: ["A) Build highway overpasses", "B) Pedestrianize central avenues and subsidize light rail", "C) Ban all bicycles"], answer: "B", exp: "Metinde 'pedestrianize every historic avenue' ve 'subsidize electric light rail' geçer." },
      { q: "Why does the sentence use 'If I were' instead of 'If I was'?", options: ["A) It is informal slang", "B) Formal conditional subjunctive for unreal hypotheticals", "C) Typographical error"], answer: "B", exp: "Second Conditional yapısında hayali durumlar için 'were' kullanımı standarttır." }
    ]
  },
  {
    id: "read_b1_06",
    level: "B1",
    category: "Sanat & Müzecilik",
    title: "How Masterpieces Are Preserved",
    titleTr: "Şaheserler Nasıl Korunur",
    grammarRef: {
      id: "b1-passive-voice-present-past",
      name: "Passive Voice: Present & Past Simple (Edilgen Çatı)",
      targetFocus: "Eylemi yapanın değil eylemin ön planda olduğu 'is/are/was/were + V3' yapıları."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "Historical oil canvases require extraordinary technical stewardship. Ancient masterworks <mark class='vocab-hl' data-word='are exhibited' data-pos='v. phrase' data-phonetic='/ɑːr ɪɡˈzɪb.ɪ.tɪd/' data-tr='sergilenir (edilgen)' data-def='Present passive voice.' data-ex='Paintings are exhibited in galleries.'>are exhibited</mark> under carefully regulated atmospheric humidity and temperature levels. In 1911, the iconic Mona Lisa <mark class='vocab-hl' data-word='was stolen' data-pos='v. phrase' data-phonetic='/wɒz ˈstəʊ.lən/' data-tr='çalındı (geçmiş edilgen)' data-def='Past passive voice.' data-ex='The canvas was stolen from the Louvre.'>was stolen</mark> from the Louvre museum by an Italian glazier, but it <mark class='vocab-hl' data-word='was recovered' data-pos='v. phrase' data-phonetic='/wɒz rɪˈkʌv.əd/' data-tr='kurtarıldı / geri bulundu' data-def='Past passive.' data-ex='It was recovered two years later.'>was recovered</mark> two years later in Florence. Today, rare cultural treasures <mark class='vocab-hl' data-word='are shielded' data-pos='v. phrase' data-phonetic='/ɑːr ˈʃiːl.dɪd/' data-tr='korunur, zırhla korunmaktadır' data-def='Present passive.' data-ex='Masterpieces are shielded by bulletproof glass.'>are shielded</mark> by multi-layered bulletproof glass to thwart vandalism and atmospheric decay.",
    vocabularies: [
      { word: "stewardship", pos: "noun", phonetic: "/ˈstjuː.əd.ʃɪp/", tr: "koruma ve idare sorumluluğu", def: "The job of supervising or taking care of something.", example: "Canvases require extraordinary stewardship." },
      { word: "vandalism", pos: "noun", phonetic: "/ˈvæn.dəl.ɪ.zəm/", tr: "kamu malına kasten zarar verme", def: "Action involving deliberate destruction of or damage to property.", example: "Glass shields the painting from vandalism." }
    ],
    questions: [
      { q: "When was the Mona Lisa stolen?", options: ["A) In 1850", "B) In 1911", "C) In 1999"], answer: "B", exp: "Metinde 'In 1911, the iconic Mona Lisa was stolen' denir." },
      { q: "Why is passive voice preferred in this text?", options: ["A) To hide the identity of curators", "B) Because the preservation actions and the artworks are the primary focus", "C) To make sentences longer"], answer: "B", exp: "Edilgen çatı, eylemin kendisini ve etkilenen nesneyi vurgulamak için kullanılır." }
    ]
  },
  {
    id: "read_b1_07",
    level: "B1",
    category: "Arkeoloji & Gizem",
    title: "The Desert Geoglyphs of Nazca",
    titleTr: "Nazca Çölünün Jeoglifleri",
    grammarRef: {
      id: "b1-modals-deduction-present",
      name: "Modals of Deduction: Must, Might, Can't (Çıkarım Modalleri)",
      targetFocus: "Mevcut kanıtlara dayalı kesinlik (must be), olasılık (might be) ve imkansızlık (can't be)."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "Etched into the arid desert plateaus of southern Peru, the enigmatic Nazca lines depict colossal hummingbirds, spiders, and geometric spirals. Archaeologists argue that creating such colossal proportional sketches <mark class='vocab-hl' data-word='must be' data-pos='v. phrase' data-phonetic='/mʌst biː/' data-tr='olmalı (yüksek kesinlik)' data-def='Strong deduction based on evidence.' data-ex='It must be an astronomical calendar.'>must be</mark> the achievement of a highly organized pre-Incan society. The intricate diagrams <mark class='vocab-hl' data-word='cannot be' data-pos='v. phrase' data-phonetic='/ˈkæn.ɒt biː/' data-tr='olamaz (imkansızlık)' data-def='Negative logical impossibility.' data-ex='They cannot be random scratches.'>cannot be</mark> accidental natural erosion marks. Some scholars suggest that the lines <mark class='vocab-hl' data-word='might represent' data-pos='v. phrase' data-phonetic='/maɪt ˌrep.rɪˈzent/' data-tr='temsil ediyor olabilir' data-def='Possibility deduction.' data-ex='They might represent sacred paths.'>might represent</mark> subterranean water sources or an astronomical agricultural calendar mapped against sacred constellations.",
    vocabularies: [
      { word: "enigmatic", pos: "adj.", phonetic: "/ˌen.ɪɡˈmæt.ɪk/", tr: "gizemli, esrarengiz", def: "Difficult to interpret or understand; mysterious.", example: "The enigmatic Nazca lines in Peru." },
      { word: "colossal", pos: "adj.", phonetic: "/kəˈlɒs.əl/", tr: "devasa, muazzam büyüklükte", def: "Extremely large.", example: "Colossal proportional sketches." }
    ],
    questions: [
      { q: "What modal expresses impossibility in the text?", options: ["A) Must be", "B) Might represent", "C) Cannot be"], answer: "C", exp: "'Cannot be' mantıksal olarak imkansızlığı ifade eder." },
      { q: "What might the lines represent according to scholars?", options: ["A) Military runways", "B) Subterranean water sources or astronomical calendars", "C) Trade tariffs"], answer: "B", exp: "Metinde 'might represent subterranean water sources or an astronomical calendar' denir." }
    ]
  },
  {
    id: "read_b1_08",
    level: "B1",
    category: "Haberleşme & Gazetecilik",
    title: "The Press Conference",
    titleTr: "Basın Toplantısı",
    grammarRef: {
      id: "b1-reported-speech",
      name: "Reported Speech: Statements & Questions (Dolaylı Anlatım)",
      targetFocus: "Başkalarının ifadelerini aktarırken zaman gerilemesi (said that... had achieved)."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "Following the historic climate summit in Geneva, the chief environmental delegate held a press briefing. She <mark class='vocab-hl' data-word='stated that' data-pos='v. phrase' data-phonetic='/ˈsteɪ.tɪd ðæt/' data-tr='belirtti ki' data-def='Reporting verb introducing indirect speech.' data-ex='She stated that delegates agreed.'>stated that</mark> international ministers <mark class='vocab-hl' data-word='had committed' data-pos='v. phrase' data-phonetic='/hæd kəˈmɪt.ɪd/' data-tr='taahhüt etmişti' data-def='Backshifted tense in reported clause.' data-ex='Nations had committed to net zero.'>had committed</mark> thirty billion euros toward renewable transition funds. A journalist asked whether the agreement was legally binding for sovereign member states. The delegate replied that strict industrial emission benchmarks <mark class='vocab-hl' data-word='would take effect' data-pos='v. phrase' data-phonetic='/wʊd teɪk ɪˈfekt/' data-tr='yürürlüğe girecekti' data-def='Backshift of will to would.' data-ex='Rules would take effect by 2030.'>would take effect</mark> before 2030. Transparency, she emphasized, was the cornerstone of global ecological survival.",
    vocabularies: [
      { word: "cornerstone", pos: "noun", phonetic: "/ˈkɔː.nə.stəʊn/", tr: "temel taşı, dayanak", def: "An important quality or feature on which a particular thing is founded.", example: "Transparency was the cornerstone of survival." },
      { word: "benchmarks", pos: "noun", phonetic: "/ˈbentʃ.mɑːks/", tr: "kriterler, referans noktaları", def: "Standards or points of reference against which things may be compared.", example: "Strict industrial emission benchmarks." }
    ],
    questions: [
      { q: "How much money had ministers committed according to the delegate?", options: ["A) 100 million", "B) Thirty billion euros", "C) Ten trillion"], answer: "B", exp: "Metinde 'had committed thirty billion euros' denir." },
      { q: "In reported speech, what does 'will take effect' become?", options: ["A) Would take effect", "B) Had take effect", "C) Did take effect"], answer: "A", exp: "Dolaylı anlatımda (Reported Speech) 'will' geçmiş biçimi olan 'would'a dönüşür." }
    ]
  },
  {
    id: "read_b1_09",
    level: "B1",
    category: "Psikoloji & Alışkanlıklar",
    title: "Breaking the Procrastination Habit",
    titleTr: "Erteleme Alışkanlığını Kırmak",
    grammarRef: {
      id: "b1-gerunds-vs-infinitives",
      name: "Gerunds vs Infinitives (İsim-Fiil ve Mastar Ayrımı)",
      targetFocus: "Fiilden sonra gelen '-ing' (enjoy reading) ve 'to + verb' (decide to work) ayrımları."
    },
    wordCount: 160,
    readTime: "2 dk",
    text: "Procrastination is often misunderstood as simple laziness. Cognitive psychologists demonstrate that people avoid <mark class='vocab-hl' data-word='starting' data-pos='gerund' data-phonetic='/ˈstɑː.tɪŋ/' data-tr='başlamaktan' data-def='Gerund following verb avoid.' data-ex='They avoid starting hard tasks.'>starting</mark> challenging tasks because they fear making mistakes. To overcome psychological inertia, experts recommend <mark class='vocab-hl' data-word='breaking' data-pos='gerund' data-phonetic='/ˈbreɪ.kɪŋ/' data-tr='bölmeyi' data-def='Gerund after recommend.' data-ex='Recommend breaking work into pieces.'>breaking</mark> intimidating goals into tiny ten-minute intervals. When you decide <mark class='vocab-hl' data-word='to work' data-pos='infinitive' data-phonetic='/tuː wɜːk/' data-tr='çalışmaya' data-def='Infinitive after decide.' data-ex='Decide to work for ten minutes.'>to work</mark> on a thesis paper for just fifteen minutes without interruptions, brain dopamine pathways activate and motivation follows naturally.",
    vocabularies: [
      { word: "inertia", pos: "noun", phonetic: "/ɪˈnɜː.ʃə/", tr: "atalet, hareketsizlik", def: "A tendency to do nothing or to remain unchanged.", example: "To overcome psychological inertia." },
      { word: "intimidating", pos: "adj.", phonetic: "/ɪnˈtɪm.ɪ.deɪ.tɪŋ/", tr: "göz korkutucu", def: "Frightening or overawing, making one timid.", example: "Breaking intimidating goals." }
    ],
    questions: [
      { q: "Which verb pattern follows 'avoid'?", options: ["A) Avoid + to do", "B) Avoid + doing (-ing gerund)", "C) Avoid + bare infinitive"], answer: "B", exp: "'Avoid' fiilinden sonra gerund (-ing) kullanılır (avoid starting)." },
      { q: "Why do people procrastinate according to psychologists?", options: ["A) Because they lack clocks", "B) Because they fear making mistakes", "C) Because they are bored"], answer: "B", exp: "Metinde 'because they fear making mistakes' denmektedir." }
    ]
  },
  {
    id: "read_b1_10",
    level: "B1",
    category: "Coğrafya & Seyahat",
    title: "The Majestic Isle of Skye",
    titleTr: "Görkemli Skye Adası",
    grammarRef: {
      id: "b1-non-defining-relative-clauses",
      name: "Non-defining Relative Clauses (Ekstra Bilgi Veren İlgi Cümleleri)",
      targetFocus: "Virgüller arasında fazladan bilgi katan ve 'that' almayan 'who, which, where' yapıları."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "The Isle of Skye, <mark class='vocab-hl' data-word='which lies off Scotland\'s northwest coast' data-pos='rel. clause' data-phonetic='/wɪtʃ laɪz ɒf.../' data-tr='İskoçya\'nın kuzeybatı kıyısında uzanan' data-def='Non-defining clause giving extra detail.' data-ex='Skye, which lies in Scotland, is scenic.'>which lies off Scotland's northwest coast</mark>, is renowned for its rugged volcanic landscapes and dramatic sea cliffs. Portree, <mark class='vocab-hl' data-word='where colourful fishing cottages line the harbour' data-pos='rel. clause' data-phonetic='/weər ˈkʌl.ə.fəl ˈfɪʃ.ɪŋ.../' data-tr='renkli balıkçı kulübelerinin limanı çevrelediği' data-def='Relative clause modifying place.' data-ex='Portree, where cottages line the bay.'>where colourful fishing cottages line the harbour</mark>, serves as the cultural and commercial capital of the island. Geological travellers frequently hike up to the Old Man of Storr, <mark class='vocab-hl' data-word='which was formed by ancient landslides' data-pos='rel. clause' data-phonetic='/wɪtʃ wɒz fɔːmd baɪ.../' data-tr='antik toprak kaymalarıyla oluşan' data-def='Extra descriptive detail.' data-ex='The ridge, which was formed by slides.'>which was formed by ancient landslides</mark> millions of years ago. The island enchants writers and photographers seeking authentic Celtic wilderness.",
    vocabularies: [
      { word: "rugged", pos: "adj.", phonetic: "/ˈrʌɡ.ɪd/", tr: "engebeli, sarp", def: "Having a broken, rocky, and uneven surface.", example: "Rugged volcanic landscapes of Skye." },
      { word: "enchants", pos: "verb", phonetic: "/ɪnˈtʃɑːnts/", tr: "büyüler, hayran bırakır", def: "Fills someone with great delight; charms.", example: "The island enchants photographers." }
    ],
    questions: [
      { q: "Can 'that' be used in non-defining relative clauses with commas?", options: ["A) Yes, always", "B) No, 'that' cannot be used after commas", "C) Only in informal text"], answer: "B", exp: "Virgülle ayrılan Non-defining Relative Clause yapılarında 'that' kullanılamaz." },
      { q: "What was the Old Man of Storr formed by?", options: ["A) Meteor impacts", "B) Ancient landslides millions of years ago", "C) Mining explosions"], answer: "B", exp: "Metinde 'formed by ancient landslides millions of years ago' denmektedir." }
    ]
  },
  {
    id: "read_b1_11",
    level: "B1",
    category: "Gelecek & Planlama",
    title: "Tomorrow at This Time",
    titleTr: "Yarın Bu Saatlerde",
    grammarRef: {
      id: "b1-future-continuous",
      name: "Future Continuous Tense (Gelecekte Devam Edecek Eylemler)",
      targetFocus: "Gelecekte belirli bir anda sürüyor olacak 'will be + verb-ing' eylemleri."
    },
    wordCount: 160,
    readTime: "2 dk",
    text: "By this time tomorrow afternoon, the geological research team <mark class='vocab-hl' data-word='will be flying' data-pos='v. phrase' data-phonetic='/wɪl biː ˈflaɪ.ɪŋ/' data-tr='uçuyor olacak' data-def='Future continuous action in progress.' data-ex='They will be flying over the Arctic.'>will be flying</mark> over the glacial valleys of southern Greenland. Dr. Sanders and her geophysical assistants <mark class='vocab-hl' data-word='will be testing' data-pos='v. phrase' data-phonetic='/wɪl biː ˈtest.ɪŋ/' data-tr='test ediyor olacaklar' data-def='Ongoing activity at specific future time.' data-ex='Will be testing radar sensors.'>will be testing</mark> satellite ice-penetrating radar equipment from their transport plane. While laboratory analysts back in London are categorizing satellite imagery, researchers in the Arctic <mark class='vocab-hl' data-word='will be measuring' data-pos='v. phrase' data-phonetic='/wɪl biː ˈmeʒ.ər.ɪŋ/' data-tr='ölçüyor olacaklar' data-def='Continuous future measurement.' data-ex='Will be measuring permafrost depth.'>will be measuring</mark> permafrost depth directly. This continuous telemetry will monitor accelerating seasonal ice melt.",
    vocabularies: [
      { word: "glacial", pos: "adj.", phonetic: "/ˈɡleɪ.si.əl/", tr: "buzul, buzullara ait", def: "Relating to or resulting from the action of ice.", example: "Glacial valleys of southern Greenland." },
      { word: "telemetry", pos: "noun", phonetic: "/təˈlem.ə.tri/", tr: "uzaktan ölçüm, telemetri", def: "The process of recording and transmitting the readings of an instrument.", example: "Continuous telemetry will monitor melting." }
    ],
    questions: [
      { q: "What will the team be doing tomorrow afternoon?", options: ["A) Resting in a hotel", "B) Flying over Greenland and testing radar sensors", "C) Swimming in the sea"], answer: "B", exp: "Metinde 'will be flying over the glacial valleys' ve 'testing radar equipment' denir." },
      { q: "What does the Future Continuous tense express?", options: ["A) An action that already finished", "B) An action that will be in progress at a specific future moment", "C) A permanent state"], answer: "B", exp: "Future Continuous, gelecekte belirli bir anda devam ediyor olacak eylemleri anlatır." }
    ]
  },
  {
    id: "read_b1_12",
    level: "B1",
    category: "Teknoloji & Gelecek",
    title: "Milestones in Space Exploration",
    titleTr: "Uzay Keşfinde Kilometre Taşları",
    grammarRef: {
      id: "b1-future-perfect",
      name: "Future Perfect Simple (Gelecekte Tamamlanmış Olacak Eylemler)",
      targetFocus: "Gelecekteki belirli bir tarihten önce bitmiş olacak 'will have + V3' eylemleri."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "International space consortiums have charted ambitious schedules for lunar colonisation. By 2035, aerospace engineers <mark class='vocab-hl' data-word='will have established' data-pos='v. phrase' data-phonetic='/wɪl hæv ɪˈstæb.lɪʃt/' data-tr='kurmuş olacaklar' data-def='Future perfect completed milestone.' data-ex='Will have established a permanent base.'>will have established</mark> a permanent pressurized habitat near the lunar south pole. Before private commercial crews land on Mars, robotic rovers <mark class='vocab-hl' data-word='will have collected' data-pos='v. phrase' data-phonetic='/wɪl hæv kəˈlek.tɪd/' data-tr='toplamış olacaklar' data-def='Completed action before future date.' data-ex='Rovers will have collected core samples.'>will have collected</mark> thousands of geological core samples. By the end of this century, humanity <mark class='vocab-hl' data-word='will have unlocked' data-pos='v. phrase' data-phonetic='/wɪl hæv ʌnˈlɒkt/' data-tr='kilidini açmış olacak' data-def='Completed realization in future.' data-ex='Will have unlocked deep space travel.'>will have unlocked</mark> advanced nuclear propulsion engines, making inter-planetary transit routine.",
    vocabularies: [
      { word: "propulsion", pos: "noun", phonetic: "/prəˈpʌl.ʃən/", tr: "itme kuvveti, sevketme", def: "The action of driving or pushing forwards.", example: "Advanced nuclear propulsion engines." },
      { word: "consortiums", pos: "noun", phonetic: "/kənˈsɔː.ti.əmz/", tr: "konsorsiyumlar, şirket birlikleri", def: "Associations, typically of several companies or states.", example: "International space consortiums." }
    ],
    questions: [
      { q: "What will engineers have established by 2035?", options: ["A) A lunar golf course", "B) A permanent pressurized habitat near lunar south pole", "C) An orbital shopping mall"], answer: "B", exp: "Metinde 'will have established a permanent pressurized habitat' denir." },
      { q: "What time marker is characteristically used with Future Perfect?", options: ["A) Yesterday", "B) By + future time (By 2035)", "C) Ago"], answer: "B", exp: "Future Perfect genellikle 'by 2035, by tomorrow' gibi zaman ifadeleriyle kurulur." }
    ]
  },
  {
    id: "read_b1_13",
    level: "B1",
    category: "Şart ve Koşul",
    title: "Safety in Extreme Sports",
    titleTr: "Ekstrem Sporlarda Güvenlik",
    grammarRef: {
      id: "b1-conditionals-unless-as-soon-as",
      name: "Conditionals with Unless & As soon as (Koşul ve Zaman Bağlaçları)",
      targetFocus: "'-medikçe / -mezse' anlamına gelen 'unless (= if not)' ve '-er ... -mez' için 'as soon as'."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "Extreme mountaineering demands meticulous preparation and mental fortitude. You will never conquer sub-zero summits <mark class='vocab-hl' data-word='unless you wear' data-pos='phrase' data-phonetic='/ənˈles juː weər/' data-tr='giymedikçe (if you do not wear)' data-def='Unless introducing negative condition.' data-ex='Unless you wear thermal insulation.'>unless you wear</mark> adequate multilayered thermal insulation. Alpine guides always instruct climbers to seek shelter <mark class='vocab-hl' data-word='as soon as barometric pressure drops' data-pos='phrase' data-phonetic='/æz suːn æz.../' data-tr='barometrik basınç düşer düşmez' data-def='Immediate temporal conjunction.' data-ex='Seek shelter as soon as pressure drops.'>as soon as barometric pressure drops</mark> precipitously, because blizzards strike mountain ridges without warning. Furthermore, athletes carry emergency satellite transponders in case cellular networks fail completely.",
    vocabularies: [
      { word: "meticulous", pos: "adj.", phonetic: "/məˈtɪk.jə.ləs/", tr: "titiz, kılı kırk yaran", def: "Showing great attention to detail; very careful and precise.", example: "Demands meticulous preparation." },
      { word: "precipitously", pos: "adv.", phonetic: "/prɪˈsɪp.ɪ.təs.li/", tr: "ani ve dik bir şekilde", def: "Very steeply or hastily.", example: "Pressure drops precipitously." }
    ],
    questions: [
      { q: "What does 'unless you wear' mean?", options: ["A) If you wear", "B) If you do not wear", "C) Because you wear"], answer: "B", exp: "'Unless' = 'if not' (eğer giymezseniz) anlamına gelir." },
      { q: "When should climbers seek shelter?", options: ["A) After the blizzard finishes", "B) As soon as barometric pressure drops", "C) Only at midnight"], answer: "B", exp: "Metinde 'as soon as barometric pressure drops precipitously' denmektedir." }
    ]
  },
  {
    id: "read_b1_14",
    level: "B1",
    category: "Geçmiş Pişmanlıklar",
    title: "The Titanic and the Missing Binoculars",
    titleTr: "Titanik ve Kayıp Dürbünler",
    grammarRef: {
      id: "b1-third-conditional",
      name: "Third Conditional: Type 3 (Geçmişte Gerçekleşmemiş Durumlar)",
      targetFocus: "Geçmişteki pişmanlık ve kaçırılmış fırsatlar için 'If had V3, would have V3'."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "The tragic sinking of RMS Titanic in April 1912 remains a poignant lesson in nautical hubris. Historical investigations revealed that the lookouts inside the crow's nest lacked optical binoculars because the storage locker key was mistakenly left behind in Southampton. If the lookouts <mark class='vocab-hl' data-word='had possessed' data-pos='v. phrase' data-phonetic='/hæd pəˈzest/' data-tr='sahip olsalardı (geçmişte)' data-def='Unreal past condition.' data-ex='If they had possessed binoculars...'>had possessed</mark> high-powered lenses, they <mark class='vocab-hl' data-word='would have spotted' data-pos='v. phrase' data-phonetic='/wʊd hæv ˈspɒt.ɪd/' data-tr='fark etmiş olurlardı' data-def='Hypothetical past outcome.' data-ex='They would have spotted the iceberg earlier.'>would have spotted</mark> the submerged black iceberg much earlier. If the luxury vessel <mark class='vocab-hl' data-word='had sailed' data-pos='v. phrase' data-phonetic='/hæd seɪld/' data-tr='seyretseydi' data-def='Past unreal condition.' data-ex='If the ship had sailed slower...'>had sailed</mark> at moderate speeds through the icy zone, the catastrophe could have been averted entirely.",
    vocabularies: [
      { word: "hubris", pos: "noun", phonetic: "/ˈhjuː.brɪs/", tr: "kibir, aşırı gurur", def: "Excessive pride or self-confidence.", example: "A poignant lesson in nautical hubris." },
      { word: "averted", pos: "verb (past)", phonetic: "/əˈvɜː.tɪd/", tr: "önlenmiş, bertaraf edilmiş", def: "Prevented or turned away.", example: "The catastrophe could have been averted." }
    ],
    questions: [
      { q: "Why did lookouts lack binoculars on the Titanic?", options: ["A) Binoculars were not invented yet", "B) The key was mistakenly left behind in Southampton", "C) They fell into the sea"], answer: "B", exp: "Metinde 'the storage locker key was mistakenly left behind' denmektedir." },
      { q: "What does the Third Conditional express?", options: ["A) A general truth", "B) An unreal past situation that cannot be changed", "C) A future promise"], answer: "B", exp: "Third Conditional, geçmişte artık değiştirilmesi imkansız durumları anlatır." }
    ]
  },
  {
    id: "read_b1_15",
    level: "B1",
    category: "Zıtlık & Karşıtlık",
    title: "The Dilemma of Global Tourism",
    titleTr: "Küresel Turizmin İkilemi",
    grammarRef: {
      id: "b1-connectors-contrast",
      name: "Connectors of Contrast: However, Despite, In spite of (Zıtlık Bağlaçları)",
      targetFocus: "Cümle başında 'However' ve isim/isim fiille kullanılan 'Despite / In spite of'."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "International leisure travel revitalizes developing coastal economies. <mark class='vocab-hl' data-word='Despite generating' data-pos='phrase' data-phonetic='/dɪˈspaɪt ˈdʒen.ə.reɪ.tɪŋ/' data-tr='üretmesine rağmen (+ isim fiil)' data-def='Contrast connector followed by gerund.' data-ex='Despite generating substantial revenue...'>Despite generating</mark> substantial foreign revenue, mass tourism frequently inflicts severe environmental degradation upon delicate marine ecosystems. In Venice and Dubrovnik, historic infrastructure struggles under cruise vessel crowding. <mark class='vocab-hl' data-word='However' data-pos='adv.' data-phonetic='/haʊˈev.ər/' data-tr='bununla birlikte, ancak' data-def='Connector introducing contrasting sentence.' data-ex='However, banning tourists is impossible.'>However</mark>, banning international vacationers outright is economically unfeasible for small local merchants. Therefore, municipal planners are implementing tourist cap quotas to achieve equilibrium between prosperity and heritage preservation.",
    vocabularies: [
      { word: "degradation", pos: "noun", phonetic: "/ˌdeɡ.rəˈdeɪ.ʃən/", tr: "bozulma, tahribat", def: "The process of deteriorating or degrading.", example: "Inflicts severe environmental degradation." },
      { word: "equilibrium", pos: "noun", phonetic: "/ˌek.wɪˈlɪb.ri.əm/", tr: "denge, istikrar", def: "A state in which opposing forces or influences are balanced.", example: "To achieve equilibrium between prosperity and heritage." }
    ],
    questions: [
      { q: "What follows 'Despite' in grammar?", options: ["A) A complete sentence with verb", "B) A noun or gerund (-ing form)", "C) An infinitive"], answer: "B", exp: "'Despite' ardından isim veya gerund (-ing) alır (Despite generating)." },
      { q: "What solution are municipal planners implementing?", options: ["A) Closing airports permanently", "B) Tourist cap quotas", "C) Demolishing historic monuments"], answer: "B", exp: "Metinde 'implementing tourist cap quotas' denmektedir." }
    ]
  },
  {
    id: "read_b1_16",
    level: "B1",
    category: "Dilekler & Arzular",
    title: "Urban Noise and the Wish for Silence",
    titleTr: "Şehir Gürültüsü ve Sessizlik Dileği",
    grammarRef: {
      id: "b1-wish-if-only-present",
      name: "Wish / If only for Present Desires (Şimdiki Zaman Dilekleri)",
      targetFocus: "Şu anki durumun farklı olmasını arzularken 'wish + Past Simple' kullanımı."
    },
    wordCount: 160,
    readTime: "2 dk",
    text: "Acoustic pollution is an invisible health crisis in modern metropolises. Continuous sirens, automotive horns, and construction jackhammers elevate cortisol stress hormones. 'I <mark class='vocab-hl' data-word='wish our apartment were' data-pos='phrase' data-phonetic='/wɪʃ ˈaʊər əˈpɑːt.mənt wɜːr/' data-tr='apartmanımız keşke olsa' data-def='Unreal present desire.' data-ex='I wish our flat were quieter.'>wish our apartment were</mark> farther from the ring expressway,' Liam sighs as evening traffic rumbles past his window. '<mark class='vocab-hl' data-word='If only cities had' data-pos='phrase' data-phonetic='/ɪf ˈəʊn.li ˈsɪt.iz hæd/' data-tr='Şehirlerin keşke olsa' data-def='Strong wish for present change.' data-ex='If only cities had more quiet parks.'>If only cities had</mark> stricter acoustic zoning regulations!' Urban noise suppresses cognitive concentration in children, and Liam dreams of relocating to a tranquil pine valley.",
    vocabularies: [
      { word: "jackhammers", pos: "noun", phonetic: "/ˈdʒækˌhæm.ərz/", tr: "havalı kırıcılar, yol matkapları", def: "Pneumatic or electric percussion tools.", example: "Construction jackhammers create noise." },
      { word: "suppresses", pos: "verb", phonetic: "/səˈpres.ɪz/", tr: "baskılar, köreltir", def: "Forcibly puts an end to or dampens.", example: "Noise suppresses cognitive concentration." }
    ],
    questions: [
      { q: "What tense is used after 'I wish' to express a present desire?", options: ["A) Present Simple", "B) Past Simple (were / had)", "C) Future Simple"], answer: "B", exp: "Şimdiki zaman dileklerinde 'wish' sonrası fiil geçmiş zamana çekilir (wish were/had)." },
      { q: "What does Liam wish for?", options: ["A) A louder motorcycle", "B) Stricter acoustic zoning and a quieter apartment", "C) More construction"], answer: "B", exp: "Metinde sessiz bir apartman ve katı akustik düzenlemeler dilediği belirtilir." }
    ]
  },
  {
    id: "read_b1_17",
    level: "B1",
    category: "Deyimsel Fiiller",
    title: "Cleaning Up the Community Park",
    titleTr: "Topluluk Parkını Temizlemek",
    grammarRef: {
      id: "b1-phrasal-verbs-separable",
      name: "Phrasal Verbs: Separable vs Inseparable (Deyimsel Fiiller)",
      targetFocus: "Ayrılabilen (pick it up / clean up the park) ve ayrılamayan phrasal verb kuralları."
    },
    wordCount: 160,
    readTime: "2 dk",
    text: "Community volunteers gathered on Saturday morning to renovate the neighborhood park. First, they decided to <mark class='vocab-hl' data-word='clean up the litter' data-pos='phrasal v.' data-phonetic='/kliːn ʌp ðə ˈlɪt.ər/' data-tr='çöpleri temizlemek' data-def='To remove dirt or rubbish.' data-ex='Clean up the litter or clean it up.'>clean up the litter</mark> that negligent visitors had thrown on lawns. Volunteers gladly <mark class='vocab-hl' data-word='picked it up' data-pos='phrasal v.' data-phonetic='/pɪkt ɪt ʌp/' data-tr='onu yerden aldı' data-def='Separable pronoun placement.' data-ex='When finding trash, pick it up.'>picked it up</mark> using wooden trash tongs. The team refused to <mark class='vocab-hl' data-word='give up' data-pos='phrasal v.' data-phonetic='/ɡɪv ʌp/' data-tr='pes etmek, vazgeçmek' data-def='To cease making effort.' data-ex='Never give up on community projects.'>give up</mark> despite scorching midday sunshine. By four o'clock, they had planted thirty rose bushes and repainted the rusted perimeter gates.",
    vocabularies: [
      { word: "negligent", pos: "adj.", phonetic: "/ˈneɡ.lɪ.dʒənt/", tr: "ihmalkar, sorumsuz", def: "Failing to take proper care over something.", example: "Negligent visitors threw trash on lawns." },
      { word: "renovate", pos: "verb", phonetic: "/ˈren.ə.veɪt/", tr: "yenilemek, restore etmek", def: "Restore to a good state of repair.", example: "Gathered to renovate the neighborhood park." }
    ],
    questions: [
      { q: "Where does the pronoun 'it' go with the separable phrasal verb 'pick up'?", options: ["A) Pick up it", "B) Pick it up (in the middle)", "C) Up pick it"], answer: "B", exp: "Zamirler ayrılabilen phrasal verblerin ortasına gelir (picked it up)." },
      { q: "What does 'give up' mean?", options: ["A) To surrender or stop trying", "B) To donate money", "C) To paint a gate"], answer: "A", exp: "'Give up' pes etmek, çabayı bırakmak anlamına gelir." }
    ]
  },
  {
    id: "read_b1_18",
    level: "B1",
    category: "Tarih ve Koruma",
    title: "Preserving Ancient Heritage",
    titleTr: "Antik Mirasın Korunması",
    grammarRef: {
      id: "b1-passive-modals",
      name: "Passive Voice with Modals: Must be, Should be (Modal Edilgen Çatı)",
      targetFocus: "Gereklilik ve tavsiyeyi edilgen bildiren 'modal + be + V3' yapısı."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "Centuries-old archaeological monuments face mounting environmental threats. Specialists agree that fragile Greco-Roman temples <mark class='vocab-hl' data-word='must be protected' data-pos='v. phrase' data-phonetic='/mʌst biː prəˈtek.tɪd/' data-tr='korunmalıdır (edilgen)' data-def='Modal passive obligation.' data-ex='Monuments must be protected from rain.'>must be protected</mark> from corrosive atmospheric acid precipitation. Tourism entry numbers <mark class='vocab-hl' data-word='should be regulated' data-pos='v. phrase' data-phonetic='/ʃʊd biː ˈreɡ.jə.leɪ.tɪd/' data-tr='düzenlenmeli / sınırlandırılmalıdır' data-def='Modal passive recommendation.' data-ex='Visitor quotas should be regulated.'>should be regulated</mark> through digital timeslot reservations to prevent physical stone wear. Crumbling frescoes <mark class='vocab-hl' data-word='can be restored' data-pos='v. phrase' data-phonetic='/kæn biː rɪˈstɔːd/' data-tr='restore edilebilir' data-def='Modal passive possibility.' data-ex='Paintings can be restored with nanogel.'>can be restored</mark> using advanced nanogel consolidants. If global heritage sites are preserved conscientiously, future generations will continue to marvel at ancient architectural brilliance.",
    vocabularies: [
      { word: "corrosive", pos: "adj.", phonetic: "/kəˈrəʊ.sɪv/", tr: "aşındırıcı, çürütücü", def: "Tending to cause corrosion or gradual decay.", example: "Corrosive acid precipitation damages stone." },
      { word: "conscientiously", pos: "adv.", phonetic: "/ˌkɒn.ʃiˈen.ʃəs.li/", tr: "vicdanla, özenle ve dürüstçe", def: "In a thorough and responsible way.", example: "Preserved conscientiously for the future." }
    ],
    questions: [
      { q: "What grammatical formula represents passive with modals?", options: ["A) Modal + verb-ing", "B) Modal + be + Past Participle (V3)", "C) Modal + have + V1"], answer: "B", exp: "Modal edilgen çatı formülü: 'Modal + be + V3' (must be protected)." },
      { q: "What should be regulated according to specialists?", options: ["A) Archaeological paint sales", "B) Tourism entry numbers through timeslots", "C) Ticket prices only"], answer: "B", exp: "Metinde 'tourism entry numbers should be regulated' denmektedir." }
    ]
  },
  {
    id: "read_b1_19",
    level: "B1",
    category: "Fikir Birliği",
    title: "Healthy Lifestyle Discussions",
    titleTr: "Sağlıklı Yaşam Sohbetleri",
    grammarRef: {
      id: "b1-so-neither-agreement",
      name: "Agreement with So & Neither (Katılım Bildirme: So do I / Neither do I)",
      targetFocus: "Olumluya katılırken 'So + aux + subject', olumsuza katılırken 'Neither + aux + subject'."
    },
    wordCount: 160,
    readTime: "2 dk",
    text: "During lunch, colleagues Jessica and Liam discussed their wellness habits. 'I cycle ten kilometres to the tech office every morning,' Jessica remarked. Liam smiled, '<mark class='vocab-hl' data-word='So do I' data-pos='phrase' data-phonetic='/səʊ duː aɪ/' data-tr='ben de (olumluya katılım)' data-def='Agreeing with affirmative statement.' data-ex='I love cycling. — So do I.'>So do I</mark>; it invigorates my morning focus.' Jessica added, 'I don't consume sugary carbonated soft drinks during work.' Liam responded, '<mark class='vocab-hl' data-word='Neither do I' data-pos='phrase' data-phonetic='/ˈnaɪ.ðər duː aɪ/' data-tr='ben de (olumsuza katılım)' data-def='Agreeing with negative statement.' data-ex='I do not eat sugar. — Neither do I.'>Neither do I</mark>; I drink green tea and mineral water.' Sharing positive health practices fosters supportive work environments where employees thrive together.",
    vocabularies: [
      { word: "invigorates", pos: "verb", phonetic: "/ɪnˈvɪɡ.ər.eɪts/", tr: "canlandırır, dinçlik verir", def: "Gives strength or energy to.", example: "Cycling invigorates my morning focus." },
      { word: "fosters", pos: "verb", phonetic: "/ˈfɒs.tərz/", tr: "geliştirir, teşvik eder", def: "Encourages the development of something desirable.", example: "Fosters supportive work environments." }
    ],
    questions: [
      { q: "How does Liam agree with 'I cycle ten kilometres'?", options: ["A) Neither do I", "B) So do I", "C) So am I"], answer: "B", exp: "Olumlu geniş zaman cümlesine katılırken 'So do I' denir." },
      { q: "How does Liam agree with 'I don't consume sugary drinks'?", options: ["A) So do I", "B) Neither do I", "C) Neither am I"], answer: "B", exp: "Olumsuz cümleye katılırken 'Neither do I' (ben de tüketmem) kullanılır." }
    ]
  },
  {
    id: "read_b1_20",
    level: "B1",
    category: "Nezaket & İletişim",
    title: "Enquiring at the City Tourism Bureau",
    titleTr: "Şehir Turizm Bürosunda Danışma",
    grammarRef: {
      id: "b1-indirect-questions",
      name: "Indirect Questions (Dolaylı ve Kibar Sorular)",
      targetFocus: "Kibar soru kalıplarında düz cümle dizilimi (Could you tell me where the station is?)."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "At the municipal visitor information kiosk, tourist Emily politely approached the desk. 'Excuse me, <mark class='vocab-hl' data-word='could you tell me where' data-pos='phrase' data-phonetic='/kʊd juː tel miː weər/' data-tr='nerede olduğunu söyler misiniz' data-def='Polite indirect inquiry.' data-ex='Could you tell me where the museum is?'>could you tell me where</mark> the historical art museum is located?' she asked. The officer answered warmly with a map. Emily then enquired, '<mark class='vocab-hl' data-word='Do you know whether' data-pos='phrase' data-phonetic='/duː juː nəʊ ˈweð.ər/' data-tr='olup olmadığını biliyor musunuz' data-def='Indirect question for yes/no query.' data-ex='Do you know whether student discounts apply?'>Do you know whether</mark> the shuttle bus accepts contactless credit cards?' The clerk affirmed that digital payments were standard on all buses. Indirect queries demonstrate intercultural courtesy and facilitate seamless communication in public spaces.",
    vocabularies: [
      { word: "courtesy", pos: "noun", phonetic: "/ˈkɜː.tə.si/", tr: "nezaket, kibarlık", def: "The showing of politeness in one's attitude and behavior toward others.", example: "Indirect queries demonstrate courtesy." },
      { word: "contactless", pos: "adj.", phonetic: "/ˈkɒn.tæk.ləs/", tr: "temassız (ödeme)", def: "Relating to payment cards using RFID for instant tap transactions.", example: "Accepts contactless credit cards." }
    ],
    questions: [
      { q: "What is the word order in an indirect question?", options: ["A) Inverted verb before subject", "B) Normal affirmative order (Subject + Verb)", "C) Double auxiliary verbs"], answer: "B", exp: "Dolaylı sorularda 'where the museum is' şeklinde düz cümle dizilimi kullanılır." },
      { q: "What did Emily ask about the shuttle bus?", options: ["A) Its speed", "B) Whether it accepts contactless credit cards", "C) The driver's name"], answer: "B", exp: "Metinde 'whether the shuttle bus accepts contactless cards' sorulmuştur." }
    ]
  },
  {
    id: "read_b1_21",
    level: "B1",
    category: "Alışma Süreci",
    title: "Adapting to Nordic Winters",
    titleTr: "İskandinav Kışlarına Alışmak",
    grammarRef: {
      id: "b1-used-to-be-get-used-to",
      name: "Used to vs Be used to vs Get used to (Alışkanlık ve Uyum)",
      targetFocus: "Geçmiş alışkanlık (used to), alışkın olmak (be used to + ing), alışma süreci (get used to + ing)."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "When Carlos relocated from tropical Seville to Helsinki for a bio-engineering post, the climate contrast was overwhelming. Back in Spain, he <mark class='vocab-hl' data-word='used to experience' data-pos='phrase' data-phonetic='/juːst tuː ɪkˈspɪə.ri.əns/' data-tr='yaşardı (eskiden)' data-def='Past habit.' data-ex='He used to experience sunny winters.'>used to experience</mark> bright sunshine even in December. In Finland, daylight dwindled to five hours. Initially, it was difficult to <mark class='vocab-hl' data-word='get used to waking up' data-pos='phrase' data-phonetic='/ɡet juːst tuː ˈweɪ.kɪŋ ʌp/' data-tr='uyanmaya alışmak' data-def='Process of becoming accustomed.' data-ex='Hard to get used to dark mornings.'>get used to waking up</mark> in pitch darkness. However, after three seasons, Carlos is completely <mark class='vocab-hl' data-word='used to living' data-pos='phrase' data-phonetic='/juːst tuː ˈlɪv.ɪŋ/' data-tr='yaşamaya alışkındır' data-def='Accustomed state (+ ing).' data-ex='He is used to living in freezing snow.'>used to living</mark> amidst sub-zero snow and loves weekend lakeside wood saunas.",
    vocabularies: [
      { word: "dwindled", pos: "verb (past)", phonetic: "/ˈdwɪn.dəld/", tr: "azaldı, giderek küçüldü", def: "Diminished gradually in size, amount, or strength.", example: "Daylight dwindled to five hours." },
      { word: "overwhelming", pos: "adj.", phonetic: "/ˌəʊ.vəˈwel.mɪŋ/", tr: "ezici, başa çıkması güç", def: "Very great in amount; overpowering.", example: "The climate contrast was overwhelming." }
    ],
    questions: [
      { q: "What follows 'be used to' and 'get used to'?", options: ["A) Verb in base form (V1)", "B) Gerund (-ing form) or noun", "C) Past participle (V3)"], answer: "B", exp: "'Be/get used to' kalıplarından sonra isim veya fiil-ing gelir (used to living)." },
      { q: "How did Carlos feel about Nordic winters after three seasons?", options: ["A) He returned to Spain", "B) He is completely used to living in the snow", "C) He refused to leave his house"], answer: "B", exp: "Metinde 'Carlos is completely used to living amidst sub-zero snow' denir." }
    ]
  },
  {
    id: "read_b1_22",
    level: "B1",
    category: "Ettirgen Çatı",
    title: "Restoring an Old Country Cottage",
    titleTr: "Eski Bir Köy Evini Restore Ettirmek",
    grammarRef: {
      id: "b1-causative-have-get-done",
      name: "Causative: Have / Get something done (Ettirgen Yapı)",
      targetFocus: "Bir işi profesyonele yaptırma durumlarında 'have/get + object + V3' kullanımı."
    },
    wordCount: 160,
    readTime: "2 dk",
    text: "When homeowners purchased a derelict Victorian cottage in the Cotswolds, renovation was mandatory. Because structural stone masonry required specialist masonry tools, they <mark class='vocab-hl' data-word='had the roof repaired' data-pos='phrase' data-phonetic='/hæd ðə ruːf rɪˈpeəd/' data-tr='çatıyı tamir ettirdiler' data-def='Arranged for a professional to repair roof.' data-ex='They had the roof repaired by masons.'>had the roof repaired</mark> by traditional master builders. Furthermore, they <mark class='vocab-hl' data-word='got new double-glazed windows installed' data-pos='phrase' data-phonetic='/ɡɒt njuː ˈwɪn.dəʊz ɪnˈstɔːld/' data-tr='yeni pencereler taktırdılar' data-def='Causative with get.' data-ex='Got double windows installed.'>got new double-glazed windows installed</mark> to prevent drafts. Rather than attempting plumbing repairs amateurishly, they had all copper piping inspected by certified municipal plumbers. Hiring skilled tradespeople ensured that historical authenticity was protected.",
    vocabularies: [
      { word: "derelict", pos: "adj.", phonetic: "/ˈder.ə.lɪkt/", tr: "terk edilmiş, harabe", def: "In a very poor condition as a result of disuse and neglect.", example: "Purchased a derelict Victorian cottage." },
      { word: "mandatory", pos: "adj.", phonetic: "/ˈmæn.də.tər.i/", tr: "zorunlu", def: "Required by law or rules; compulsory.", example: "Renovation was mandatory." }
    ],
    questions: [
      { q: "What does 'had the roof repaired' mean?", options: ["A) They repaired it with their own hands", "B) They hired professionals to repair it for them", "C) The roof collapsed"], answer: "B", exp: "Causative 'have something done', işi başkasına/uzmanına yaptırmayı ifade eder." },
      { q: "Who installed the new windows?", options: ["A) The homeowners alone", "B) Specialist glaziers/tradespeople", "C) The postman"], answer: "B", exp: "Metinde 'got new double-glazed windows installed' denir." }
    ]
  },
  {
    id: "read_b1_23",
    level: "B1",
    category: "Geçmiş Pişmanlık Modalleri",
    title: "Exam Preparation Mistakes",
    titleTr: "Sınav Hazırlık Hataları",
    grammarRef: {
      id: "b1-modals-regret-should-have",
      name: "Modals of Regret: Should have done (Geçmiş Pişmanlık)",
      targetFocus: "Geçmişte yapılmalıydı ama yapılmadı anlamında 'should have + V3'."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "Reflecting on his disappointing academic results, engineering student Samuel felt acute remorse. 'I <mark class='vocab-hl' data-word='should have started' data-pos='phrase' data-phonetic='/ʃʊd hæv ˈstɑː.tɪd/' data-tr='başlamalıydım (ama başlamadım)' data-def='Past regret for omitted action.' data-ex='I should have started revising earlier.'>should have started</mark> my calculus revision at least six weeks prior to the finals,' he admitted candidly. 'I <mark class='vocab-hl' data-word='should not have spent' data-pos='phrase' data-phonetic='/ʃʊd nɒt hæv spent/' data-tr='harcamamalıydım (ama harcadım)' data-def='Regret for action committed.' data-ex='Should not have spent hours gaming.'>should not have spent</mark> endless hours gaming online every evening.' His academic tutor advised him that dwelling on past misjudgments was futile; instead, Samuel resolved to implement structured revision schedules for the subsequent academic semester.",
    vocabularies: [
      { word: "remorse", pos: "noun", phonetic: "/rɪˈmɔːs/", tr: "pişmanlık, vicdan azabı", def: "Deep regret or guilt for a wrong committed.", example: "Felt acute remorse over poor scores." },
      { word: "futile", pos: "adj.", phonetic: "/ˈfjuː.taɪl/", tr: "nafile, boşuna", def: "Incapable of producing any useful result; pointless.", example: "Dwelling on past misjudgments was futile." }
    ],
    questions: [
      { q: "What does 'I should have started earlier' indicate?", options: ["A) Samuel started earlier", "B) Samuel did NOT start earlier, and he regrets it", "C) Samuel will start tomorrow"], answer: "B", exp: "'Should have + V3' yapılması gereken ama yapılmamış geçmiş eylemler için pişmanlık bildirir." },
      { q: "What did Samuel resolve to do for next semester?", options: ["A) Drop out of college", "B) Implement structured revision schedules", "C) Play more games"], answer: "B", exp: "Metinde 'implement structured revision schedules' kararı aldığı belirtilir." }
    ]
  },
  {
    id: "read_b1_24",
    level: "B1",
    category: "Seçenek & Belirteçler",
    title: "Navigating Career Options",
    titleTr: "Kariyer Seçeneklerini Değerlendirmek",
    grammarRef: {
      id: "b1-both-either-neither",
      name: "Both, Either, Neither (İki Seçenek Arasında Tercih)",
      targetFocus: "İkisi de (both), ikisinden biri (either), hiçbiri (neither) kalıpları."
    },
    wordCount: 160,
    readTime: "2 dk",
    text: "Graduating university seniors confront vital professional crossroads. Some graduates consider <mark class='vocab-hl' data-word='both corporate banking and' data-pos='phrase' data-phonetic='/bəʊθ... ænd/' data-tr='hem ... hem de' data-def='Emphasizing two choices together.' data-ex='Both banking and consultancy.'>both corporate banking and</mark> management consulting attractive. However, work-life balance in <mark class='vocab-hl' data-word='neither sector' data-pos='phrase' data-phonetic='/ˈnaɪ.ðər ˈsek.tər/' data-tr='hiçbir sektör (iki sektörün hiçbiri)' data-def='Not one nor the other of two.' data-ex='Neither sector offers quiet hours.'>neither sector</mark> is particularly forgiving for young analysts. Career counsellors suggest that students can choose <mark class='vocab-hl' data-word='either a multinational corporation or' data-pos='phrase' data-phonetic='/ˈaɪ.ðər... ɔːr/' data-tr='ya ... ya da' data-def='One of two options.' data-ex='Either a corporate firm or a startup.'>either a multinational corporation or</mark> a social impact non-profit organisation. Aligning personal ethics with professional goals yields long-term vocational fulfilment.",
    vocabularies: [
      { word: "forgiving", pos: "adj.", phonetic: "/fəˈɡɪv.ɪŋ/", tr: "müsamahakar, esnek", def: "Leniency or providing room for ease.", example: "Neither sector is particularly forgiving." },
      { word: "vocational", pos: "adj.", phonetic: "/vəʊˈkeɪ.ʃən.əl/", tr: "mesleki, kariyer odaklı", def: "Relating to an occupation or employment.", example: "Yields long-term vocational fulfilment." }
    ],
    questions: [
      { q: "What does 'neither sector' mean?", options: ["A) Both sectors", "B) Not the first, nor the second sector", "C) All ten sectors"], answer: "B", exp: "'Neither' iki seçenekten hiçbirini temsil eder." },
      { q: "Which pair links with 'either'?", options: ["A) Either ... and", "B) Either ... or", "C) Either ... nor"], answer: "B", exp: "'Either' daima 'or' bağlacıyla eşleşir (Either A or B)." }
    ]
  },
  {
    id: "read_b1_25",
    level: "B1",
    category: "Zaman Bağlaçları",
    title: "The Antarctic Research Station",
    titleTr: "Antarktika Araştırma İstasyonu",
    grammarRef: {
      id: "b1-time-clauses-until-as-long-as",
      name: "Time Clauses with Until & As long as (Süreç Zaman Cümlecikleri)",
      targetFocus: "Süreklilik şartı belirten 'as long as (-dığı sürece)' ve sınırlama bildiren 'until (-e kadar)'."
    },
    wordCount: 165,
    readTime: "2 dk",
    text: "At Halley VI research station on the Brunt Ice Shelf, climatologists endure extreme polar isolation. Scientists remain stationed in isolated modular pods <mark class='vocab-hl' data-word='until spring icebreakers arrive' data-pos='phrase' data-phonetic='/ənˈtɪl sprɪŋ.../' data-tr='bahar buzkıranları gelene kadar' data-def='Up to the point in time.' data-ex='Stay inside until relief arrives.'>until spring icebreakers arrive</mark> in November. Heating systems operate flawlessly <mark class='vocab-hl' data-word='as long as diesel generators receive fuel' data-pos='phrase' data-phonetic='/æz lɒŋ æz.../' data-tr='yakıt aldığı sürece' data-def='Condition of duration.' data-ex='Warm as long as fuel lasts.'>as long as diesel generators receive fuel</mark> uninterruptedly. While catastrophic polar blizzards rage outside at minus fifty degrees Celsius, researchers continue collecting atmospheric ozone measurements to preserve global biosphere stability.",
    vocabularies: [
      { word: "endure", pos: "verb", phonetic: "/ɪnˈdʒʊər/", tr: "tahammül etmek, göğüs germek", def: "Suffer patiently or remain in existence.", example: "Climatologists endure extreme isolation." },
      { word: "icebreakers", pos: "noun", phonetic: "/ˈaɪsˌbreɪ.kərz/", tr: "buzkıran gemileri", def: "Ships designed for breaking a channel through ice.", example: "Until spring icebreakers arrive." }
    ],
    questions: [
      { q: "How long do scientists remain at the modular station?", options: ["A) Until spring icebreakers arrive in November", "B) For one weekend", "C) Permanently forever"], answer: "A", exp: "Metinde 'until spring icebreakers arrive in November' denmektedir." },
      { q: "What does 'as long as' express?", options: ["A) A past habit", "B) A condition that must continue for the result to hold", "C) An immediate interruption"], answer: "B", exp: "'As long as' bir durum sürdüğü müddetçe diğerinin geçerli olduğunu belirtir." }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.READING_B1 = READING_B1;
}
