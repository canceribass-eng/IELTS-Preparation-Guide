// =============================================================================
// CEFR C1 READING PRACTICE PASSAGES (10 Texts: C1-01 to C1-10)
// =============================================================================

const READING_C1 = [
  {
    id: "read_c1_01",
    level: "C1",
    category: "Kuantum Kriptografi",
    title: "Quantum Entanglement and Post-RSA Cryptography",
    titleTr: "Kuantum Dolanıklığı ve RSA-Sonrası Kriptografi",
    grammarRef: {
      id: "c1-full-inversion-locative",
      name: "Full Locative Inversion (Yer Belirten Devrik Yapılar)",
      targetFocus: "Cümle başında yer zarfı sonrasında tam devriklik (Within these microscopic states lies the foundation...)."
    },
    wordCount: 200,
    readTime: "3 dk",
    text: "Contemporary cyber-infrastructure relies predominantly upon asymmetric public-key cryptography—mathematical frameworks such as RSA that derive operational resilience from the computational intractability of prime factorization. However, quantum computing architectures executing Shor's algorithm threaten to dismantle these protections within milliseconds. <mark class='vocab-hl' data-word='Within these delicate subatomic superposition states lies' data-pos='loc. inversion' data-phonetic='/wɪˈðɪn... laɪz/' data-tr='Bu narin atom altı durumlarının içinde yatar (tam devrik)' data-def='Full locative inversion placing verb lies before subject.' data-ex='Beyond the horizon lies the answer.'>Within these delicate subatomic superposition states lies</mark> both the peril of total decryption and the promise of unconditional quantum key distribution. Exploiting the quantum principle that measurement irreversibly disturbs an entangled photon wave-function, quantum networks detect eavesdroppers instantaneously. Consequently, <mark class='vocab-hl' data-word='under no circumstances can an intercepted photon transmit' data-pos='neg. inversion' data-phonetic='/ˈʌn.dər nəʊ.../' data-tr='hiçbir koşul altında iletemez (devrik)' data-def='Negative inversion under no circumstances.' data-ex='Under no circumstances can data leak.'>under no circumstances can an intercepted photon transmit</mark> cryptographic keys without triggering alerts. Post-quantum cryptographic migration is thus a national security imperative.",
    vocabularies: [
      { word: "intractability", pos: "noun", phonetic: "/ɪnˌtræk.təˈbɪl.ə.ti/", tr: "çözülemezlik, başa çıkılamazlık", def: "The state of being hard to control, solve, or manage computationally.", example: "Intractability of prime factorization." },
      { word: "eavesdroppers", pos: "noun", phonetic: "/ˈiːvzˌdrɒp.ərz/", tr: "gizlice dinleyenler, izinsiz araya girenler", def: "Persons who listen secretly to the private conversation of others.", example: "Detect eavesdroppers instantaneously." }
    ],
    questions: [
      { q: "What is inverted in 'Within these subatomic states lies the foundation'?", options: ["A) The entire subject and verb (verb 'lies' precedes subject 'foundation')", "B) Only an auxiliary verb", "C) No inversion occurs"], answer: "A", exp: "Yer bildiren zarf öne geldiğinde 'Full Locative Inversion' gereği tam fiil özneden önce gelir." },
      { q: "Why is an eavesdropper detected in quantum key distribution?", options: ["A) Sound alarms ring", "B) Measuring an entangled photon irreversibly disturbs its wave-function", "C) The computer shuts down"], answer: "B", exp: "Metinde 'measurement irreversibly disturbs an entangled photon wave-function' denmektedir." }
    ]
  },
  {
    id: "read_c1_02",
    level: "C1",
    category: "Dilbilim & Nöroloji",
    title: "Syntactic Ellipsis in Scholarly Discourse",
    titleTr: "Akademik Söylemde Sözdizimsel Eksilti (Ellipsis)",
    grammarRef: {
      id: "c1-syntactic-ellipsis-substitution",
      name: "Syntactic Ellipsis & Substitution (Sözdizimsel Eksilti ve Yerine Koyma)",
      targetFocus: "Tekrarları önlemek için fiil veya tümleçlerin atılması (Some scholars argue X; others, Y)."
    },
    wordCount: 195,
    readTime: "3 dk",
    text: "Advanced academic registers rely extensively upon syntactic ellipsis and substitution to optimize propositional brevity and structural elegance. Where conversational speech employs redundant phrasal duplication, scholarly prose condenses coordinate clauses seamlessly: <mark class='vocab-hl' data-word='generative grammarians prioritize innate biological mechanisms; functionalists, communicative pragmatics' data-pos='ellipsis phrase' data-phonetic='/.../' data-tr='üretici dilbilimciler biyolojik mekanizmalara öncelik verir; işlevselciler ise iletişimsel edimbilime (prioritize atılmıştır)' data-def='Gapping ellipsis where the verb prioritize is omitted in the second clause.' data-ex='John studied physics; Mary, mathematics.'>generative grammarians prioritize innate biological mechanisms; functionalists, communicative pragmatics</mark>. In the second coordinate clause, the verb 'prioritize' is deliberately elided without compromising semantic intelligibility. Mastering such grammatical economy enables researchers to present dense multidimensional arguments without lexical clutter, demonstrating stylistic mastery of academic conventions.",
    vocabularies: [
      { word: "elided", pos: "verb (past)", phonetic: "/iˈlaɪ.dɪd/", tr: "düşürülmüş, sözdiziminden atılmış", def: "Omitted (a sound or syllable) when speaking, or elided in syntax.", example: "The verb is deliberately elided." },
      { word: "intelligibility", pos: "noun", phonetic: "/ɪnˌtel.ɪ.dʒəˈbɪl.ə.ti/", tr: "anlaşılırlık, kavranabilirlik", def: "The state of being capable of being understood.", example: "Without compromising semantic intelligibility." }
    ],
    questions: [
      { q: "What was omitted in 'functionalists, communicative pragmatics'?", options: ["A) The noun functionalists", "B) The verb 'prioritize' via syntactic gapping ellipsis", "C) The punctuation"], answer: "B", exp: "İkinci cümlecikte 'prioritize' fiili tekrardan kaçınmak için eksilti (ellipsis) yoluyla atılmıştır." },
      { q: "What does syntactic ellipsis demonstrate in advanced writing?", options: ["A) Carelessness", "B) Grammatical economy and stylistic sophistication", "C) A lack of vocabulary"], answer: "B", exp: "Metinde 'demonstrating stylistic mastery of academic conventions' ifadesi geçer." }
    ]
  },
  {
    id: "read_c1_03",
    level: "C1",
    category: "Epistemoloji & Biyoetik",
    title: "CRISPR-Cas9 Germline Engineering and Moral Epistemology",
    titleTr: "CRISPR-Cas9 Germ Hattı Mühendisliği ve Ahlak Epistemolojisi",
    grammarRef: {
      id: "c1-stance-adverbials-hedging",
      name: "Stance Adverbials & Epistemic Caution (Tutum Belirten İleri Zarflar)",
      targetFocus: "Fikirsel duruş bildiren 'Inarguably, ostensibly, conceivably, manifestly' gibi üst düzey tutum zarfları."
    },
    wordCount: 200,
    readTime: "3 dk",
    text: "<mark class='vocab-hl' data-word='Inarguably, the therapeutic promise of' data-pos='stance adv.' data-phonetic='/ɪnˈɑːɡ.ju.ə.bli.../' data-tr='Tartışmasız bir şekilde şunun tedavi edici vaadi' data-def='Stance adverbial establishing unequivocal premise.' data-ex='Inarguably, gene editing holds promise.'>Inarguably, the therapeutic promise of</mark> precise base editing to eliminate monogenic genetic afflictions such as Huntington's chorea and sickle-cell anemia is immense. <mark class='vocab-hl' data-word='Ostensibly, altering human germline cells produces' data-pos='stance adv.' data-phonetic='/ɒsˈten.sɪ.bli.../' data-tr='Görünüşe göre / sözde germ hücrelerini değiştirmek üretir' data-def='Adverbial indicating apparent but questionable appearance.' data-ex='Ostensibly safe, but risks persist.'>Ostensibly, altering human germline cells produces</mark> generational immunity against devastating pathologies; yet off-target chromosomal translocations <mark class='vocab-hl' data-word='conceivably threaten' data-pos='stance adv.' data-phonetic='/kənˈsiː.və.bli ˈθret.ən/' data-tr='akla yatkın bir olasılıkla tehdit eder' data-def='Epistemic modal adverbial showing plausible risk.' data-ex='Could conceivably disrupt gene expression.'>conceivably threaten</mark> to introduce permanent mutagenic consequences into the human gene pool. Bioethicists <mark class='vocab-hl' data-word='manifestly assert that' data-pos='stance adv.' data-phonetic='/ˈmæn.ɪ.fest.li əˈsɜːt ðæt/' data-tr='açıkça ve kesinlikle savunmaktadır ki' data-def='Adverb emphasizing clarity of conviction.' data-ex='Manifestly assert regulatory vigilance.'>manifestly assert that</mark> clinical commercialisation must not outpace international regulatory consensus. Without democratic deliberation, germline modification risks inaugurating unprecedented socio-biological stratification.",
    vocabularies: [
      { word: "afflictions", pos: "noun", phonetic: "/əˈflɪk.ʃənz/", tr: "ıstıraplar, dertler, kronik hastalıklar", def: "Causes of pain or suffering.", example: "Eliminate monogenic genetic afflictions." },
      { word: "stratification", pos: "noun", phonetic: "/ˌstræt.ɪ.fɪˈkeɪ.ʃən/", tr: "tabakalaşma, katmanlaşma", def: "The arrangement or classification of something into different groups or layers.", example: "Risks socio-biological stratification." }
    ],
    questions: [
      { q: "What does the stance adverbial 'Ostensibly' imply?", options: ["A) An undeniable fact", "B) Something that appears true superficially, but warrants deeper skepticism", "C) An ancient custom"], answer: "B", exp: "'Ostensibly' (görünüşe göre/sözde) yüzeysel olarak doğru görünen ancak şüphe barındıran durumları belirtir." },
      { q: "What risk does germline engineering pose according to bioethicists?", options: ["A) Low crop yields", "B) Introducing permanent mutagenic consequences and socio-biological stratification", "C) Slower computers"], answer: "B", exp: "Metinde 'permanent mutagenic consequences into the gene pool and socio-biological stratification' geçer." }
    ]
  },
  {
    id: "read_c1_04",
    level: "C1",
    category: "Jeomühendislik & İklim",
    title: "Stratospheric Aerosol Injection: The Geoengineering Gamble",
    titleTr: "Stratosferik Aerosol Enjeksiyonu: Jeomühendislik Kumarı",
    grammarRef: {
      id: "c1-syntactic-compression-participles",
      name: "Complex Participle Clauses for Syntactic Compression (Sözdizimsel Sıkıştırma)",
      targetFocus: "Birden fazla cümleyi tek bir akıcı bileşiğe bağlayan 'Having analyzed...', 'Discharged into the stratosphere...' yapıları."
    },
    wordCount: 200,
    readTime: "3 dk",
    text: "<mark class='vocab-hl' data-word='Confronted by catastrophic thermospheric warming' data-pos='part. phrase' data-phonetic='/kənˈfrʌn.tɪd baɪ.../' data-tr='Felaket düzeyindeki ısınmayla yüzleşen (edilgen particple)' data-def='Passive participle clause compressing background.' data-ex='Confronted by crisis, leaders gathered.'>Confronted by catastrophic thermospheric warming</mark>, climate engineers have modelled Solar Radiation Management via stratospheric aerosol injection. <mark class='vocab-hl' data-word='Emulating explosive volcanic eruptions' data-pos='part. phrase' data-phonetic='/ˈem.jə.leɪ.tɪŋ.../' data-tr='Patlayıcı volkanik püskürmeleri taklit eden' data-def='Active present participle clause showing method.' data-ex='Emulating nature, engineers design wings.'>Emulating explosive volcanic eruptions</mark> like Mount Pinatubo, high-altitude aircraft would disperse millions of tons of reflective sulfur dioxide particles into the stratosphere, scattering solar photons back into space. <mark class='vocab-hl' data-word='Having temporarily depressed mean surface temperatures' data-pos='part. phrase' data-phonetic='/ˈhæv.ɪŋ ˈtem.pər.ər.əl.i dɪˈprest.../' data-tr='Ortalama yüzey sıcaklıklarını geçici olarak düşürmüş olan' data-def='Perfect participle clause expressing anteriority.' data-ex='Having tested the model, they proceeded.'>Having temporarily depressed mean surface temperatures</mark>, this geoengineering intervention might theoretically buy crucial decadal buffers for decarbonisation. However, atmospheric modellers warn that tampering with solar irradiance risks perturbing monsoon precipitation patterns across South Asia, devastating agrarian food security for billions.",
    vocabularies: [
      { word: "perturbing", pos: "verb (part.)", phonetic: "/pəˈtɜː.bɪŋ/", tr: "düzenini bozmak, altüst etmek", def: "Anxiously upsetting or disordering a system.", example: "Risks perturbing monsoon precipitation patterns." },
      { word: "irradiance", pos: "noun", phonetic: "/ɪˈreɪ.di.əns/", tr: "ışınım gücü, radyasyon akısı", def: "The flux of radiant energy per unit area.", example: "Tampering with solar irradiance." }
    ],
    questions: [
      { q: "What does 'Emulating explosive volcanic eruptions' describe?", options: ["A) Why volcanoes explode", "B) How stratospheric aerosol injection mimics natural volcanic sulfur cooling", "C) Why airplanes crash"], answer: "B", exp: "Metinde volkanik püskürmelerin stratosferi soğutma mekanizmasının taklit edildiği açıklanır." },
      { q: "What grave risk does Solar Radiation Management pose?", options: ["A) Extreme snowfall in the Sahara", "B) Perturbing monsoon precipitation and threatening food security", "C) Melting all steel buildings"], answer: "B", exp: "Metinde 'perturbing monsoon precipitation patterns across South Asia, devastating food security' denmektedir." }
    ]
  },
  {
    id: "read_c1_05",
    level: "C1",
    category: "Makroekonomi & Finans",
    title: "Central Bank Digital Currencies and Monetary Sovereignty",
    titleTr: "Merkez Bankası Dijital Para Birimleri ve Parasal Egemenlik",
    grammarRef: {
      id: "c1-cleft-thematic-nuance",
      name: "Complex Cleft Constructions (İleri Düzey Vurgu ve Nüans Cümleleri)",
      targetFocus: "'It is precisely through X that...', 'What remains profoundly contentious is...' ile derinlemesine akademik vurgu."
    },
    wordCount: 200,
    readTime: "3 dk",
    text: "The transition from physical fiat cash toward tokenized Central Bank Digital Currencies (CBDCs) represents a profound paradigm shift in sovereign monetary architecture. <mark class='vocab-hl' data-word='It is precisely through programmatic programmable ledgers that' data-pos='cleft phrase' data-phonetic='/ɪt ɪz prɪˈsaɪs.li θruː.../' data-tr='Tam da programlanabilir muhasebe defterleri sayesindedir ki' data-def='Complex cleft construction emphasizing the exact mechanism.' data-ex='It is precisely through diligence that scholars succeed.'>It is precisely through programmatic programmable ledgers that</mark> central treasuries aim to streamline settlement velocity and neutralize non-sovereign cryptographic assets. However, <mark class='vocab-hl' data-word='what civil libertarians find profoundly alarming is' data-pos='cleft phrase' data-phonetic='/wɒt ˈsɪv.əl ˌlɪb.əˈteə.ri.ənz faɪnd.../' data-tr='Sivil özgürlükçülerin derinden endişe verici bulduğu şey ...-dır' data-def='Wh-cleft isolating the core grievance.' data-ex='What we find alarming is surveillance.'>what civil libertarians find profoundly alarming is</mark> the specter of ubiquitous transactional surveillance. If sovereign states possess real-time telemetry over individual purchasing habits, financial autonomy erodes irreparably. Striking equilibrium between financial efficiency and constitutional privacy remains the quintessential monetary dilemma of the twenty-first century.",
    vocabularies: [
      { word: "ubiquitous", pos: "adj.", phonetic: "/juːˈbɪk.wɪ.təs/", tr: "her yerde hazır ve nazır, yaygın", def: "Present, appearing, or found everywhere.", example: "The specter of ubiquitous surveillance." },
      { word: "quintessential", pos: "adj.", phonetic: "/ˌkwɪn.tɪˈsen.ʃəl/", tr: "en tipik, mükemmel örneği olan", def: "Representing the most perfect or typical example of a quality or class.", example: "The quintessential monetary dilemma." }
    ],
    questions: [
      { q: "What do civil libertarians find alarming about CBDCs?", options: ["A) High inflation", "B) The specter of ubiquitous transactional surveillance and loss of privacy", "C) Slower computer networks"], answer: "B", exp: "Metinde 'the specter of ubiquitous transactional surveillance' açıkça vurgulanır." },
      { q: "What is highlighted by 'It is precisely through programmable ledgers that'?", options: ["A) The exact mechanism central banks use to streamline settlement", "B) The cost of printing banknotes", "C) An ancient barter system"], answer: "A", exp: "Cleft kalıbı merkez bankalarının sistemi hangi kesin araçla hızlandırdığını vurgulamaktadır." }
    ]
  },
  {
    id: "read_c1_06",
    level: "C1",
    category: "Denizaltı Biyokimyası",
    title: "Chemosynthetic Biospheres of Hydrothermal Vents",
    titleTr: "Hidrotermal Bacaların Kemosentetik Biyosferleri",
    grammarRef: {
      id: "c1-advanced-prepositional-collocations",
      name: "Advanced Prepositional Collocations (İleri Edatlı Eşdizimler)",
      targetFocus: "'By virtue of, in deference to, in view of, at the expense of' gibi yüksek seviye edat kalıpları."
    },
    wordCount: 200,
    readTime: "3 dk",
    text: "Discovered along the mid-ocean ridges in 1977, hydrothermal abyssal vents overturned the dogma that all terrestrial biology depends fundamentally upon solar photon photosynthesis. <mark class='vocab-hl' data-word='By virtue of chemosynthetic sulfur-oxidizing bacteria' data-pos='prep. phrase' data-phonetic='/baɪ ˈvɜː.tʃuː ɒv.../' data-tr='kemosentetik kükürt oksitleyici bakteriler sayesinde' data-def='Prepositional phrase meaning as a result of or by means of.' data-ex='By virtue of hard work, they prevailed.'>By virtue of chemosynthetic sulfur-oxidizing bacteria</mark>, thriving trophic pyramids flourish amidst complete perpetual darkness, crushing hydrostatic pressures, and mineral-laden superheated water exceeding three hundred degrees Celsius. Giant tube worms harbor endosymbiotic bacterial colonies within specialized trophosome tissues, <mark class='vocab-hl' data-word='in view of the total absence of digestive tracts' data-pos='prep. phrase' data-phonetic='/ɪn vjuː ɒv.../' data-tr='sindirim kanallarının tamamen yokluğu göz önüne alındığında' data-def='Prepositional phrase meaning considering.' data-ex='In view of these facts, we must adapt.'>in view of the total absence of digestive tracts</mark> in adult specimens. Astrobiologists deduce that analogous subterranean oceans on Jupiter's moon Europa might harbor extraterrestrial metabolic life <mark class='vocab-hl' data-word='under conditions of comparable geochemical hostility' data-pos='prep. phrase' data-phonetic='/ˈʌn.dər kənˈdɪʃ.ənz ɒv.../' data-tr='benzer jeokimyasal düşmanlık koşulları altında' data-def='Complex academic prepositional frame.' data-ex='Thriving under conditions of hostility.'>under conditions of comparable geochemical hostility</mark>.",
    vocabularies: [
      { word: "trophic", pos: "adj.", phonetic: "/ˈtrɒf.ɪk/", tr: "besinsel, besin zincirine ait", def: "Relating to feeding and nutrition.", example: "Thriving trophic pyramids flourish." },
      { word: "endosymbiotic", pos: "adj.", phonetic: "/ˌen.dəʊˌsɪm.baɪˈɒt.ɪk/", tr: "iç ortakyaşamsal", def: "Denoting symbiotic association where one organism lives inside another.", example: "Harbor endosymbiotic bacteria." }
    ],
    questions: [
      { q: "What does 'By virtue of' mean in academic English?", options: ["A) Despite", "B) By means of / as a result of", "C) In opposition to"], answer: "B", exp: "'By virtue of' vasıtasıyla / sayesinde anlamına gelen akademik bir edattır." },
      { q: "Why are hydrothermal vents significant for astrobiology?", options: ["A) They produce gold nuggets", "B) They demonstrate life can thrive in darkness without sunlight, as on Europa", "C) They drain ocean water"], answer: "B", exp: "Metinde güneş ışığı olmadan da yaşamın sürebileceğini kanıtladığı ve Europa için model oluşturduğu belirtilir." }
    ]
  },
  {
    id: "read_c1_07",
    level: "C1",
    category: "Hukuk & Biyoetik",
    title: "The Subjunctive in Supranational Environmental Governance",
    titleTr: "Ulusüstü Çevre Yönetişiminde Subjunctive Kipi",
    grammarRef: {
      id: "c1-subjunctive-regulatory-frameworks",
      name: "Subjunctive Mood in Legal & Regulatory Frameworks (Hukuki Subjunctive)",
      targetFocus: "Uluslararası antlaşmalarda yasal bağlayıcılık kuran 'decree that emissions be curtailed' kalıpları."
    },
    wordCount: 195,
    readTime: "3 dk",
    text: "International environmental treaties deploy the synthetic subjunctive mood to encode non-negotiable multilateral covenants. The Paris Protocol mandates that every signatory state <mark class='vocab-hl' data-word='submit comprehensive biennial carbon registries' data-pos='subjunctive' data-phonetic='/səbˈmɪt.../' data-tr='kapsamlı iki yıllık karbon kayıtlarını sunmasını (submit yalın)' data-def='Mandative subjunctive base verb.' data-ex='Mandates that each state submit data.'>submit comprehensive biennial carbon registries</mark> and <mark class='vocab-hl' data-word='take corrective fiscal measures' data-pos='subjunctive' data-phonetic='/teɪk kəˈrek.tɪv.../' data-tr='düzeltici mali tedbirler almasını (take yalın)' data-def='Coordinated subjunctive verb.' data-ex='Requires that a firm take action.'>take corrective fiscal measures</mark> whenever national emission targets are breached. Jurists stipulate that multinational industrial conglomerates <mark class='vocab-hl' data-word='be held strictly liable' data-pos='subjunctive' data-phonetic='/biː held ˈstrɪkt.li ˈlaɪ.ə.bəl/' data-tr='katı bir şekilde sorumlu tutulmalıdır (be yalın)' data-def='Passive legal subjunctive.' data-ex='Demand that firms be held liable.'>be held strictly liable</mark> for transboundary transboundary ecocide. It is essential that regulatory compliance <mark class='vocab-hl' data-word='remain impervious to corporate lobbying' data-pos='subjunctive' data-phonetic='/rɪˈmeɪn ɪmˈpɜː.vi.əs.../' data-tr='şirket lobilerine karşı geçirimsiz kalması (remain yalın)' data-def='Subjunctive after it is essential.' data-ex='Essential that courts remain neutral.'>remain impervious to corporate lobbying</mark>; otherwise, legal declarations degenerate into toothless declarations.",
    vocabularies: [
      { word: "impervious", pos: "adj.", phonetic: "/ɪmˈpɜː.vi.əs/", tr: "geçirimsiz, etkilenmez, boyun eğmez", def: "Unable to be affected or influenced by.", example: "Remain impervious to corporate lobbying." },
      { word: "covenants", pos: "noun", phonetic: "/ˈkʌv.ə.nənts/", tr: "ahitleşmeler, bağlayıcı antlaşmalar", def: "Formal and serious agreements or promises.", example: "Encode multilateral covenants." }
    ],
    questions: [
      { q: "Why is 'submit' used instead of 'submits' after 'every signatory state'?", options: ["A) Grammatical error", "B) Subjunctive mood triggered by the verb 'mandates that...'", "C) Plural agreement"], answer: "B", exp: "'Mandate that' kalıbı sonrasında 3. tekil şahısta bile fiilin yalın hali (submit) kullanılır." },
      { q: "What does the treaty stipulate for multinational corporations?", options: ["A) Tax exemptions", "B) That they be held strictly liable for transboundary ecocide", "C) Self-regulation"], answer: "B", exp: "Metinde 'conglomerates be held strictly liable for transboundary ecocide' denmektedir." }
    ]
  },
  {
    id: "read_c1_08",
    level: "C1",
    category: "Antropoloji & Sosyolinguistik",
    title: "The Vanishing Lexicons of Endangered Languages",
    titleTr: "Tehlike Altındaki Dillerin Kaybolan Kelime Hazineleri",
    grammarRef: {
      id: "c1-rhetorical-parallelism-balance",
      name: "Rhetorical Parallelism & Balance (Retorik Paralellik ve Simetri)",
      targetFocus: "Fikirleri dengeli ritimle sunan paralel sözdizimsel yapılar (Not only do they lose X, but they sever Y)."
    },
    wordCount: 200,
    readTime: "3 dk",
    text: "Linguistic diversity is declining at an unprecedented rate, with linguists projecting that half of the world's seven thousand idioms will vanish before this century concludes. <mark class='vocab-hl' data-word='When an indigenous dialect goes extinct, not only does a unique phonological tapestry unravel' data-pos='parallel phrase' data-phonetic='/.../' data-tr='Bir yerel lehçe yok olduğunda, sadece benzersiz bir ses örgüsü çözülmekle kalmaz' data-def='Inverted parallel clause with not only.' data-ex='Not only do words die, but history fades.'>When an indigenous dialect goes extinct, not only does a unique phonological tapestry unravel</mark>, <mark class='vocab-hl' data-word='but centuries of specialized ethnobotanical wisdom are obliterated' data-pos='parallel phrase' data-phonetic='/bʌt ˈsen.tʃʊə.riz ɒv.../' data-tr='aynı zamanda yüzyılların etnobotanik bilgeliği de silinip gider' data-def='Coordinated balanced clause.' data-ex='Wisdom is obliterated alongside culture.'>but centuries of specialized ethnobotanical wisdom are obliterated</mark>. Oral languages encapsulate encyclopedic nomenclatures for medicinal flora and delicate weather patterns that have no equivalents in standard lingua francas. Preserving minority dialects is not mere sentimental antiquarianism; it is the conservation of irreplaceable human cognitive adaptations.",
    vocabularies: [
      { word: "ethnobotanical", pos: "adj.", phonetic: "/ˌeθ.nəʊ.bəˈtæn.ɪ.kəl/", tr: "etnobotanik, yerel halkların bitki bilgisine ait", def: "Relating to the traditional knowledge and customs of a people concerning plants.", example: "Centuries of ethnobotanical wisdom." },
      { word: "antiquarianism", pos: "noun", phonetic: "/ˌæn.tɪˈkweə.ri.ə.nɪ.zəm/", tr: "eski eser düşkünlüğü, antika merakı", def: "Interest in the culture and artifacts of the past without practical purpose.", example: "Not mere sentimental antiquarianism." }
    ],
    questions: [
      { q: "How is rhetorical balance achieved in the second sentence?", options: ["A) Through a simple list", "B) Through balanced 'not only does X unravel, but Y is obliterated' parallelism", "C) By writing in rhyme"], answer: "B", exp: "Metinde 'not only ... but ...' yapısıyla paralel iki güçlü iddia dengeli olarak birleştirilmiştir." },
      { q: "What knowledge is lost when an indigenous language dies?", options: ["A) English vocabulary", "B) Encyclopedic nomenclatures for medicinal plants and weather patterns", "C) Digital computer files"], answer: "B", exp: "Metinde 'encyclopedic nomenclatures for medicinal flora and weather patterns' denmektedir." }
    ]
  },
  {
    id: "read_c1_09",
    level: "C1",
    category: "Olasılık & Kaçınılmazlık",
    title: "Epistemic Modality in Technological Disruption",
    titleTr: "Teknolojik Yıkımda Epistemik Modalite ve Kaçınılmazlık",
    grammarRef: {
      id: "c1-epistemic-modality-probabilistic",
      name: "Epistemic Modality: Bound to, Liable to, Inevitably (İleri Olasılık Kalıpları)",
      targetFocus: "Kesinliğe yakın olasılıkları bildiren 'is bound to displace, is liable to trigger, inevitably'."
    },
    wordCount: 195,
    readTime: "3 dk",
    text: "The acceleration of autonomous robotic dexterity across industrial manufacturing <mark class='vocab-hl' data-word='is bound to transform' data-pos='phrase' data-phonetic='/ɪz baʊnd tuː trænsˈfɔːm/' data-tr='dönüştürmesi kaçınılmazdır' data-def='Epistemic modal indicating near certainty.' data-ex='Automation is bound to transform labor.'>is bound to transform</mark> labor economics within the coming decade. As computer vision architectures achieve superhuman spatial tactile responsiveness, automated production lines <mark class='vocab-hl' data-word='are liable to displace' data-pos='phrase' data-phonetic='/ɑːr ˈlaɪ.ə.bəl tuː dɪsˈpleɪs/' data-tr='yerinden etme eğilimi/riski taşımaktadır' data-def='Probabilistic modal indicating risk or tendency.' data-ex='Machines are liable to displace workers.'>are liable to displace</mark> traditional assembly jobs at unprecedented velocity. Economists caution that unless educational retraining programs adapt synchronously, structural technological unemployment is bound to precipitate acute social polarization. Sovereign states must proactively recalibrate taxation systems to ensure equitable societal participation in algorithmic productivity gains.",
    vocabularies: [
      { word: "dexterity", pos: "noun", phonetic: "/dekˈster.ə.ti/", tr: "el becerisi, çeviklik", def: "Skill in performing tasks, especially with the hands.", example: "Autonomous robotic dexterity." },
      { word: "synchronously", pos: "adv.", phonetic: "/ˈsɪŋ.krə.nəs.li/", tr: "eş zamanlı olarak", def: "At the same time; simultaneously.", example: "Programs must adapt synchronously." }
    ],
    questions: [
      { q: "What does 'is bound to transform' mean?", options: ["A) Might transform slightly", "B) Is virtually certain to transform due to compelling inevitability", "C) Cannot transform"], answer: "B", exp: "'Bound to + V1' gerçekleşmesi neredeyse kaçınılmaz olan olayları ifade eder." },
      { q: "What does 'liable to displace' indicate?", options: ["A) Legal permission to fire", "B) A high risk or negative probability of displacement", "C) Immediate promotion"], answer: "B", exp: "'Liable to' genellikle olumsuz bir risk veya eğilim olasılığını gösterir." }
    ]
  },
  {
    id: "read_c1_10",
    level: "C1",
    category: "Ödünlü Koşul Cümleleri",
    title: "Concessive Conditionals in Geopolitics",
    titleTr: "Jeopolitikte Ödünlü Koşul Cümleleri",
    grammarRef: {
      id: "c1-concessive-conditionals",
      name: "Concessive Conditionals: Be that as it may, Whatever the outcome (Ödünlü Koşul)",
      targetFocus: "Her ne olursa olsun anlamına gelen 'Be that as it may, Whatever the diplomatic fallout...' kalıpları."
    },
    wordCount: 200,
    readTime: "3 dk",
    text: "Energy transitions frequently encounter stubborn geopolitical recalcitrance. Sovereign petrostates vigorously protect their fossil fuel export revenues, pointing out that abrupt hydrocarbon embargoes provoke catastrophic global industrial stagflation. <mark class='vocab-hl' data-word='Be that as it may' data-pos='idiom phrase' data-phonetic='/biː ðæt æz ɪt meɪ/' data-tr='Öyle olsa bile / Ne olursa olsun' data-def='Concessive formula accepting premise while asserting contrast.' data-ex='Be that as it may, climate urgency remains.'>Be that as it may</mark>, thermodynamic atmospheric realities remain utterly impervious to diplomatic negotiations. <mark class='vocab-hl' data-word='Whatever the short-term economic friction proves to be' data-pos='concessive clause' data-phonetic='/wɒtˈev.ər.../' data-tr='Kısa vadeli ekonomik sürtünme her ne olursa olsun' data-def='Concessive conditional introduced by whatever.' data-ex='Whatever the cost, we must decarbonize.'>Whatever the short-term economic friction proves to be</mark>, rapid decarbonisation of heavy industry is non-negotiable if ocean acidification and mega-droughts are to be prevented. Sovereign leaders must transcend electoral horizons and embrace generational stewardship.",
    vocabularies: [
      { word: "recalcitrance", pos: "noun", phonetic: "/rɪˈkæl.sɪ.trəns/", tr: "inatçı direnç, dik kafalılık", def: "Having an obstinately uncooperative attitude toward authority or discipline.", example: "Stubborn geopolitical recalcitrance." },
      { word: "impervious", pos: "adj.", phonetic: "/ɪmˈpɜː.vi.əs/", tr: "etkilenmez, sarsılmaz", def: "Unable to be affected by.", example: "Impervious to diplomatic negotiations." }
    ],
    questions: [
      { q: "What does the formal idiom 'Be that as it may' signal?", options: ["A) Total agreement with no further objections", "B) A concession that acknowledges the previous point but affirms an overriding counter-reality", "C) An introduction to a joke"], answer: "B", exp: "'Be that as it may' (öyle olsa bile), önceki argümanı kabul edip daha ağır basan asıl gerçeğe geçer." },
      { q: "Why is rapid decarbonization non-negotiable?", options: ["A) To win elections", "B) To prevent catastrophic ocean acidification and mega-droughts", "C) To burn more oil"], answer: "B", exp: "Metinde 'if ocean acidification and mega-droughts are to be prevented' denmektedir." }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.READING_C1 = READING_C1;
}
