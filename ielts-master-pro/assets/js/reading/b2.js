// =============================================================================
// CEFR B2 READING PRACTICE PASSAGES (20 Texts: B2-01 to B2-20)
// =============================================================================

const READING_B2 = [
  {
    id: "read_b2_01",
    level: "B2",
    category: "Yapay Zeka & Tıp",
    title: "Algorithmic Precision in Diagnostic Oncology",
    titleTr: "Tanısal Onkolojide Algoritmik Hassasiyet",
    grammarRef: {
      id: "b2-impersonal-passive",
      name: "Impersonal Passive: It is said that / X is believed to be (Akademik Edilgen)",
      targetFocus: "Bilimsel metinlerde tarafsız aktarım yapan 'It is widely acknowledged that...' ve 'CNNs are reported to detect...' yapıları."
    },
    wordCount: 180,
    readTime: "2-3 dk",
    text: "Modern radiology has undergone an epochal transformation through convolutional neural networks. <mark class='vocab-hl' data-word='It is widely acknowledged that' data-pos='phrase' data-phonetic='/ɪt ɪz ˈwaɪd.li əkˈnɒl.ɪdʒd ðæt/' data-tr='yaygın olarak kabul edilmektedir ki' data-def='Formal impersonal passive reporting consensus.' data-ex='It is acknowledged that algorithms aid doctors.'>It is widely acknowledged that</mark> deep-learning image classifiers process thousands of computerized tomography scans per second with mathematical accuracy exceeding human visual endurance. Deep algorithms <mark class='vocab-hl' data-word='are reported to identify' data-pos='phrase' data-phonetic='/ɑːr rɪˈpɔː.tɪd tuː aɪˈden.tɪ.faɪ/' data-tr='tespit ettikleri bildirilmektedir' data-def='Personal passive with infinitive.' data-ex='Systems are reported to identify micro-tumours.'>are reported to identify</mark> microscopic oncological lesions before clinical symptoms manifest externally. Nevertheless, medicolegal scholars caution against unchecked algorithmic autonomy. If liability remains ambiguous when an erroneous diagnosis occurs, judicial accountability collapses. Consequently, health authorities insist that software must operate strictly as assistive decision support rather than independent physicians.",
    vocabularies: [
      { word: "epochal", pos: "adj.", phonetic: "/ˈep.ə.kəl/", tr: "çağ açan, çığır açıcı", def: "Forming or characterizing an epoch; epoch-making.", example: "An epochal transformation through neural networks." },
      { word: "lesions", pos: "noun", phonetic: "/ˈliː.ʒənz/", tr: "lezyonlar, doku hasarları", def: "Regions in an organ or tissue which have suffered damage through injury or disease.", example: "Identify microscopic oncological lesions." }
    ],
    questions: [
      { q: "What does 'It is widely acknowledged that' convey?", options: ["A) A doubtful rumor", "B) An objective academic consensus in impersonal passive", "C) A personal diary note"], answer: "B", exp: "Akademik metinlerde nesnellik sağlamak için 'It is widely acknowledged that...' gibi impersonal passive kalıpları kullanılır." },
      { q: "How must diagnostic software operate according to health authorities?", options: ["A) As independent autonomous surgeons", "B) Strictly as assistive decision support systems", "C) As billing software"], answer: "B", exp: "Metinde 'must operate strictly as assistive decision support rather than independent physicians' denir." }
    ]
  },
  {
    id: "read_b2_02",
    level: "B2",
    category: "İklim & Biyosfer",
    title: "Permafrost Thaw and Methane Feedback Loops",
    titleTr: "Permafrost Çözülmesi ve Metan Geri Besleme Döngüleri",
    grammarRef: {
      id: "b2-inversion-negative-adverbials",
      name: "Inversion after Negative Adverbials (Devrik Cümle Yapısı)",
      targetFocus: "Cümle başında 'Never before, Seldom, Rarely' gibi zarflarla fiil-özne devrikliği (Seldom have scientists seen...)."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "<mark class='vocab-hl' data-word='Seldom have climatologists witnessed' data-pos='phrase' data-phonetic='/ˈsel.dəm hæv.../' data-tr='iklim bilimciler nadiren şahit olmuştur (devrik)' data-def='Inversion after negative adverbial seldom.' data-ex='Seldom have we witnessed such rapid melting.'>Seldom have climatologists witnessed</mark> cryospheric degradation as accelerated as contemporary Arctic permafrost thaw. As subterranean ice matrices liquefy across northern Siberia, dormant organic matter decomposes anaerobically, releasing immense volumes of trapped methane into the upper troposphere. <mark class='vocab-hl' data-word='Not only does this gaseous release augment' data-pos='phrase' data-phonetic='/nɒt ˈəʊn.li dʌz.../' data-tr='bu gaz salınımı sadece artırmakla kalmaz (devrik)' data-def='Inversion after Not only.' data-ex='Not only does it melt ice, but it heats seas.'>Not only does this gaseous release augment</mark> ambient planetary warming, but it also creates self-reinforcing ecological feedback loops that escape human mitigation. Only when sovereign states enforce stringent industrial decarbonisation can runaway biosphere collapse be impeded.",
    vocabularies: [
      { word: "cryospheric", pos: "adj.", phonetic: "/ˌkraɪ.əˈsfɪə.rɪk/", tr: "buzu küreye (donmuş yerküreye) ait", def: "Relating to the frozen water part of the Earth system.", example: "Cryospheric degradation in the Arctic." },
      { word: "mitigation", pos: "noun", phonetic: "/ˌmɪt.ɪˈɡeɪ.ʃən/", tr: "hafifletme, etkilerini azaltma", def: "The action of reducing the severity, seriousness, or painfulness of something.", example: "Escape human mitigation measures." }
    ],
    questions: [
      { q: "Why is the word order inverted in 'Seldom have climatologists witnessed'?", options: ["A) Typographical mistake", "B) Because the sentence begins with a negative/restrictive adverbial (Seldom)", "C) It is a direct question"], answer: "B", exp: "Cümle 'Seldom, Rarely, Never' gibi olumsuz/kısıtlayıcı zarflarla başladığında devrik yapı (Inversion) kurulur." },
      { q: "What happens when subterranean ice liquefies in Siberia?", options: ["A) Forests turn to stone", "B) Organic matter decomposes anaerobically, releasing methane", "C) Volcanoes erupt"], answer: "B", exp: "Metinde 'dormant organic matter decomposes anaerobically, releasing immense volumes of trapped methane' denmektedir." }
    ]
  },
  {
    id: "read_b2_03",
    level: "B2",
    category: "Tarih & Çevre",
    title: "Easter Island's Ecological Reckoning",
    titleTr: "Paskalya Adası'nın Ekolojik Muhasebesi",
    grammarRef: {
      id: "b2-mixed-conditionals",
      name: "Mixed Conditionals: Past Cause with Present Effect (Karma Şart Cümleleri)",
      targetFocus: "Geçmişteki eylemin şimdiki zamana etkisi: 'If past had been V3, present would be V1'."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "The historical collapse of the Rapa Nui civilization on Easter Island offers a somber parable for finite planet management. To transport colossal stone moai monuments, indigenous clans systematically cleared subtropical palm forests over several centuries. If the ancient islanders <mark class='vocab-hl' data-word='had not deforested' data-pos='phrase' data-phonetic='/hæd nɒt diːˈfɒr.ɪ.stɪd/' data-tr='ormanları yok etmemiş olsalardı (geçmişte)' data-def='Past condition in mixed conditional.' data-ex='If they had not cut trees...'>had not deforested</mark> their volcanic habitat so ruthlessly, the island's fertile topsoil <mark class='vocab-hl' data-word='would not be' data-pos='phrase' data-phonetic='/wʊd nɒt biː/' data-tr='olmazdı (şu anda)' data-def='Present result of past condition.' data-ex='Soil would not be barren today.'>would not be</mark> so desolate and vulnerable today. Soil erosion destroyed agricultural harvests, triggering inter-tribal conflict. If modern industrialized societies possessed identical short-sightedness regarding ecological reserves, humanity's future on Earth would remain equally precarious.",
    vocabularies: [
      { word: "parable", pos: "noun", phonetic: "/ˈpær.ə.bəl/", tr: "ibret verici kıssa, mesel", def: "A simple story used to illustrate a moral or spiritual lesson.", example: "Offers a somber parable for resource management." },
      { word: "precarious", pos: "adj.", phonetic: "/prɪˈkeə.ri.əs/", tr: "güvencesiz, pamuk ipliğine bağlı", def: "Not securely held or in position; dangerously likely to fall or collapse.", example: "Humanity's future would remain precarious." }
    ],
    questions: [
      { q: "What does the mixed conditional sentence illustrate?", options: ["A) How a past deforestation action caused the present barren condition of the soil", "B) Future tree planting", "C) A completely factual scientific certainty"], answer: "A", exp: "Karma şart cümlesi geçmişteki nedenin (had not deforested) bugünkü sonucunu (would not be desolate today) açıklar." },
      { q: "Why did islanders cut down the palm forests?", options: ["A) To build warships", "B) To transport colossal stone moai monuments", "C) To export lumber"], answer: "B", exp: "Metinde 'To transport colossal stone moai monuments, indigenous clans cleared forests' denmektedir." }
    ]
  },
  {
    id: "read_b2_04",
    level: "B2",
    category: "Psikoloji & Karar Verme",
    title: "Cognitive Heuristics and Financial Bubbles",
    titleTr: "Bilişsel Sezgiler ve Finansal Balonlar",
    grammarRef: {
      id: "b2-participle-clauses",
      name: "Participle Clauses (-ing and -ed Cümlecikleri)",
      targetFocus: "Cümleyi kısaltarak akıcılık katan 'Having analyzed...', 'Driven by speculative frenzy...' zarf cümlecikleri."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "Behavioral economics challenges the classical presumption that market participants operate with infallible rationality. <mark class='vocab-hl' data-word='Driven by speculative herd mentality' data-pos='part. phrase' data-phonetic='/ˈdrɪv.ən baɪ.../' data-tr='spekülatif sürü psikolojisiyle güdülenen' data-def='Past participle clause showing cause.' data-ex='Driven by panic, investors sell shares.'>Driven by speculative herd mentality</mark>, retail investors frequently inflate asset valuations far beyond intrinsic economic utility. <mark class='vocab-hl' data-word='Having witnessed early speculators amass' data-pos='part. phrase' data-phonetic='/ˈhæv.ɪŋ ˈwɪt.nəst.../' data-tr='erken spekülatörlerin biriktirdiğine şahit olan' data-def='Perfect participle clause showing prior action.' data-ex='Having seen profits, others joined.'>Having witnessed early speculators amass</mark> astronomical paper fortunes, late participants succumb to the fear of missing out. However, when asset liquidity contracts, market corrections happen mercilessly. By studying cognitive cognitive biases, regulatory agencies seek to erect structural safeguards that dampen systemic volatility.",
    vocabularies: [
      { word: "infallible", pos: "adj.", phonetic: "/ɪnˈfæl.ə.bəl/", tr: "yanılmaz, kusursuz", def: "Incapable of making mistakes or being wrong.", example: "Infallible rationality in economics." },
      { word: "volatility", pos: "noun", phonetic: "/ˌvɒl.əˈtɪl.ə.ti/", tr: "dalgalanma, değişkenlik", def: "Liability to change rapidly and unpredictably.", example: "Dampen systemic volatility." }
    ],
    questions: [
      { q: "What does 'Having witnessed...' express?", options: ["A) An action that happened after the stock market crashed", "B) An action completed prior to the main clause action", "C) A conditional wish"], answer: "B", exp: "'Perfect participle' (Having witnessed), ana eylemden daha önce gerçekleşmiş eylemi ifade eder." },
      { q: "Why do late participants enter speculative bubbles?", options: ["A) Because government mandates it", "B) Driven by the fear of missing out (FOMO) after seeing others profit", "C) To donate to charity"], answer: "B", exp: "Metinde 'succumb to the fear of missing out' denmektedir." }
    ]
  },
  {
    id: "read_b2_05",
    level: "B2",
    category: "Vurgu & Odak",
    title: "The Essence of Scientific Inquiry",
    titleTr: "Bilimsel Araştırmanın Özü",
    grammarRef: {
      id: "b2-cleft-sentences",
      name: "Cleft Sentences: What... is / It is... that (Bölünmüş Vurgu Cümleleri)",
      targetFocus: "Cümledeki ana unsuru vurgulayan 'What distinguishes science is...' ve 'It is empirical doubt that...' kalıpları."
    },
    wordCount: 180,
    readTime: "2-3 dk",
    text: "<mark class='vocab-hl' data-word='What distinguishes genuine science from dogma is' data-pos='cleft phrase' data-phonetic='/wɒt dɪˈstɪŋ.ɡwɪ.ʃɪz.../' data-tr='Gerçek bilimi dogmadan ayıran şey ...-dır' data-def='Wh-cleft sentence for thematic focus.' data-ex='What we need is empirical evidence.'>What distinguishes genuine science from dogma is</mark> its perpetual willingness to falsify cherished hypotheses upon encountering contrary empirical evidence. <mark class='vocab-hl' data-word='It was Albert Einstein who revolutionized' data-pos='cleft phrase' data-phonetic='/ɪt wɒz... huː ˌrev.əˈluː.ʃən.aɪzd/' data-tr='devrim yaratan Albert Einstein\'dı' data-def='It-cleft emphasizing the subject.' data-ex='It was Einstein who altered physics.'>It was Albert Einstein who revolutionized</mark> twentieth-century theoretical physics by demonstrating that time and spatial dimensions are relative rather than immutable constants. Science does not claim absolute omniscience; rather, <mark class='vocab-hl' data-word='what researchers celebrate is' data-pos='cleft phrase' data-phonetic='/wɒt rɪˈsɜː.tʃərz ˈsel.ə.breɪt ɪz/' data-tr='araştırmacıların kutladığı şey ...-dır' data-def='Wh-cleft structure.' data-ex='What we cherish is rigorous inquiry.'>what researchers celebrate is</mark> the relentless pursuit of rigorous falsification.",
    vocabularies: [
      { word: "falsification", pos: "noun", phonetic: "/ˌfɒl.sɪ.fɪˈkeɪ.ʃən/", tr: "yanlışlama, çürütme (bilim felsefesi)", def: "The act of proving a theory or statement to be false.", example: "Relentless pursuit of rigorous falsification." },
      { word: "omniscience", pos: "noun", phonetic: "/ɒmˈnɪs.i.əns/", tr: "her şeyi bilme gücü", def: "The state of knowing everything.", example: "Science does not claim absolute omniscience." }
    ],
    questions: [
      { q: "What is the stylistic purpose of a cleft sentence like 'What distinguishes science is...'?", options: ["A) To confuse students", "B) To place strong rhetorical emphasis on the focal point", "C) To make the text shorter"], answer: "B", exp: "Cleft cümleleri (Bölünmüş cümleler) verilmek istenen mesaja güçlü bir retorik odak ve vurgu kazandırır." },
      { q: "What revolutionized physics according to the passage?", options: ["A) Dogmatic traditions", "B) Demonstrating that space and time are relative", "C) Mechanical clockwork"], answer: "B", exp: "Metinde 'demonstrating that time and spatial dimensions are relative' denmektedir." }
    ]
  },
  {
    id: "read_b2_06",
    level: "B2",
    category: "Resmi Hukuk & Yönetişim",
    title: "Regulating Artificial Superintelligence",
    titleTr: "Yapay Süper Zekanın Düzenlenmesi",
    grammarRef: {
      id: "b2-subjunctive-formal",
      name: "Formal Subjunctive Mood (Resmi Dilek Kipi: demand that X be...)",
      targetFocus: "Tavsiye, talep ve gereklilik bildiren resmi yapılarda yalın fiil kullanımı (mandate that developers register...)."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "As autonomous cognitive architectures approach parity with human cognition, global policymakers grapple with unprecedented regulatory dilemmas. International cybersecurity treaties recommend that sovereign governments <mark class='vocab-hl' data-word='mandate that developers adhere' data-pos='subj. phrase' data-phonetic='/ˈmæn.deɪt ðæt... ədˈhɪər/' data-tr='geliştiricilerin uymasını zorunlu kılmak' data-def='Subjunctive base verb without -s.' data-ex='Recommend that he adhere to safety protocols.'>mandate that developers adhere</mark> to rigorous red-teaming security verifications before releasing frontier neural models. Furthermore, ethicists urge that any frontier artificial system <mark class='vocab-hl' data-word='be subjected to' data-pos='subj. phrase' data-phonetic='/biː səbˈdʒek.tɪd tuː/' data-tr='tabi tutulmalıdır (be yalın)' data-def='Passive subjunctive using bare verb be.' data-ex='Insist that algorithms be audited.'>be subjected to</mark> transparent algorithmic auditing. It is imperative that global regulatory harmonization <mark class='vocab-hl' data-word='prevent a disastrous unregulated race' data-pos='subj. phrase' data-phonetic='/prɪˈvent.../' data-tr='feci yarışı önlemesi (prevent yalın)' data-def='Subjunctive after imperative.' data-ex='Imperative that nations prevent conflict.'>prevent a disastrous unregulated race</mark> toward runaway artificial superintelligence.",
    vocabularies: [
      { word: "parity", pos: "noun", phonetic: "/ˈpær.ə.ti/", tr: "eşitlik, denklik", def: "The state or condition of being equal, especially regarding status or pay.", example: "Approach parity with human cognition." },
      { word: "harmonization", pos: "noun", phonetic: "/ˌhɑː.mə.naɪˈzeɪ.ʃən/", tr: "uyumlaştırma, standart birliği", def: "The process of making things consistent or compatible.", example: "Global regulatory harmonization." }
    ],
    questions: [
      { q: "Why is the verb 'be' used instead of 'is' in 'urged that the system be subjected'?", options: ["A) Grammatical mistake", "B) Formal subjunctive mood following verbs of urging/mandating", "C) Slang"], answer: "B", exp: "Resmi İngilizcede talep/tavsiye bildiren fiillerden (urge, insist, demand) sonra Subjunctive gereği fiilin yalın hali (be) kullanılır." },
      { q: "What should frontier models undergo before release?", options: ["A) Zero testing", "B) Rigorous red-teaming security verifications", "C) Complete public privatization"], answer: "B", exp: "Metinde 'adhere to rigorous red-teaming security verifications' belirtilir." }
    ]
  },
  {
    id: "read_b2_07",
    level: "B2",
    category: "Edatlı İlgi Cümleleri",
    title: "The Architecture of Classical Amphitheatres",
    titleTr: "Klasik Amfitiyatroların Mimarisi",
    grammarRef: {
      id: "b2-relative-clauses-prepositions",
      name: "Relative Clauses with Prepositions: in which, to whom, through which (Edatlı İlgi Cümleleri)",
      targetFocus: "Akademik dilde edatın ilgi zamirinin başına gelmesi (the medium through which sound travels)."
    },
    wordCount: 180,
    readTime: "2-3 dk",
    text: "Ancient Greco-Roman amphitheaters represent summits of acoustic engineering. Epidaurus, <mark class='vocab-hl' data-word='in which thousands of spectators gathered' data-pos='rel. phrase' data-phonetic='/ɪn wɪtʃ.../' data-tr='içinde binlerce seyircinin toplandığı' data-def='Relative clause with preposition in.' data-ex='The hall in which leaders met.'>in which thousands of spectators gathered</mark> for dramatic festivals, possessed phenomenal acoustic clarity without electrical amplification. The limestone benches acted as natural acoustic acoustic filters <mark class='vocab-hl' data-word='through which low-frequency crowd murmurs were dampened' data-pos='rel. phrase' data-phonetic='/θruː wɪtʃ.../' data-tr='sayesinde alçak frekanslı uğultuların bastırıldığı' data-def='Preposition through introducing clause.' data-ex='A conduit through which energy flows.'>through which low-frequency crowd murmurs were dampened</mark>. Consequently, words uttered by actors in the central orchestra radiated to the topmost rows with crystalline precision. Contemporary architects still study these ancient structural paradigms to design concert halls of peerless resonance.",
    vocabularies: [
      { word: "amphitheaters", pos: "noun", phonetic: "/ˈæm.fɪˌθɪə.tərz/", tr: "amfitiyatrolar", def: "Open-air venues used for entertainment, performances, and sports.", example: "Ancient Greco-Roman amphitheaters." },
      { word: "peerless", pos: "adj.", phonetic: "/ˈpɪə.ləs/", tr: "eşsiz, benzersiz", def: "Unequalled; unrivaled.", example: "Concert halls of peerless resonance." }
    ],
    questions: [
      { q: "Why is 'through which' used in the text?", options: ["A) To describe the physical filter mechanism through which sound waves passed", "B) To indicate future time", "C) To express regret"], answer: "A", exp: "'Through which' filtreleme işleminin hangi ortam vasıtasıyla gerçekleştiğini bağlar." },
      { q: "What role did the limestone benches play?", options: ["A) They heated the theater", "B) They dampened low-frequency crowd murmurs", "C) They reflected direct sunlight"], answer: "B", exp: "Metinde 'benches acted as acoustic filters through which low-frequency crowd murmurs were dampened' denmektedir." }
    ]
  },
  {
    id: "read_b2_08",
    level: "B2",
    category: "Geçmiş Çıkarım",
    title: "The Disappearance of the Neanderthals",
    titleTr: "Neandertallerin Ortadan Kayboluşu",
    grammarRef: {
      id: "b2-modals-past-deduction",
      name: "Modals of Past Deduction: Must have been, Couldn't have been (Geçmişe Dair Mantıksal Çıkarım)",
      targetFocus: "Geçmiş olaylar için güçlü çıkarım 'must have V3' ve imkansızlık 'couldn't have V3'."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "Approximately forty thousand years ago, Neanderthal populations vanished across western Eurasia. Anthropologists emphasize that climatic volatility <mark class='vocab-hl' data-word='must have played' data-pos='phrase' data-phonetic='/mʌst hæv pleɪd/' data-tr='oynamış olmalı (güçlü geçmiş çıkarım)' data-def='Deduction of high certainty regarding the past.' data-ex='Climate must have played a pivotal role.'>must have played</mark> a pivotal role in destabilizing megafaunal hunting habitats. The demographic extinction <mark class='vocab-hl' data-word='could not have been caused' data-pos='phrase' data-phonetic='/kʊd nɒt hæv biːn kɔːzd/' data-tr='neden olmuş olamaz (geçmiş imkansızlık)' data-def='Deduction of past impossibility.' data-ex='It could not have been caused by famine alone.'>could not have been caused</mark> solely by intellectual inferiority, as Neanderthals possessed symbolic burial rites, complex lithic toolkits, and sophisticated adhesives. Genomic sequencing substantiates that Homo sapiens interbred with Neanderthals, meaning that genetic assimilation alongside ecological competition <mark class='vocab-hl' data-word='might have accelerated' data-pos='phrase' data-phonetic='/maɪt hæv əkˈsel.ə.reɪ.tɪd/' data-tr='hızlandırmış olabilir (olasılık)' data-def='Past possibility deduction.' data-ex='Competition might have accelerated extinction.'>might have accelerated</mark> their demographic absorption.",
    vocabularies: [
      { word: "volatility", pos: "noun", phonetic: "/ˌvɒl.əˈtɪl.ə.ti/", tr: "oynaklık, kararsızlık", def: "Liability to change rapidly and unpredictably.", example: "Climatic volatility affected prey animals." },
      { word: "assimilation", pos: "noun", phonetic: "/əˌsɪm.ɪˈleɪ.ʃən/", tr: "özümseme, kaynaşma", def: "The absorption and integration of people into a wider population.", example: "Genetic assimilation alongside competition." }
    ],
    questions: [
      { q: "What does 'must have played a pivotal role' mean?", options: ["A) It definitely did not play a role", "B) Evidence strongly indicates that climate played a crucial role in the past", "C) Climate will play a role tomorrow"], answer: "B", exp: "'Must have + V3' geçmişe dair eldeki kanıtlara dayanan kuvvetli çıkarımı ifade eder." },
      { q: "Did genomic sequencing show interbreeding between Homo sapiens and Neanderthals?", options: ["A) Yes, genomic sequencing substantiates it", "B) No, it was debunked", "C) It is impossible to test"], answer: "A", exp: "Metinde 'Genomic sequencing substantiates that Homo sapiens interbred with Neanderthals' denir." }
    ]
  },
  {
    id: "read_b2_09",
    level: "B2",
    category: "İsimleştirme & Akademik Dil",
    title: "Nominalization in Scholarly Writing",
    titleTr: "Akademik Yazımda İsimleştirme (Nominalization)",
    grammarRef: {
      id: "b2-nominalization-academic",
      name: "Nominalization in Academic Discourse (Fiillerin İsme Dönüştürülmesi)",
      targetFocus: "Fiil/sıfat yerine soyut isimler kullanarak metne akademik ağırlık kazandırma (destroy -> the destruction of)."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "Mastering academic prose requires profound familiarity with nominalization—the stylistic process of converting active verbal clauses into dense nominal conceptual frameworks. Instead of asserting that 'factories polluted the river and destroyed species,' scholarly discourse articulates that <mark class='vocab-hl' data-word='the contamination of waterways resulted in the extermination' data-pos='nom. phrase' data-phonetic='/.../' data-tr='su yollarının kirlenmesi yok oluşla sonuçlandı' data-def='Nominalized construction compressing verbs into nouns.' data-ex='The implementation of policy brought stabilization.'>the contamination of waterways resulted in the extermination</mark> of endemic fauna. While excessive nominalization risks conceptual opacity, judicious employment enhances academic detachment and thematic compression. In IELTS Writing Task 2, substituting conversational verbs with appropriate Latinate nouns elevates lexical resource to Band 8.0.",
    vocabularies: [
      { word: "opacity", pos: "noun", phonetic: "/əʊˈpæs.ə.ti/", tr: "anlaşılmazlık, bulanıklık", def: "The quality of being difficult to understand or obscure.", example: "Excessive nominalization risks conceptual opacity." },
      { word: "judicious", pos: "adj.", phonetic: "/dʒuːˈdɪʃ.əs/", tr: "sağduyulu, yerinde, ölçülü", def: "Having, showing, or done with good judgment or sense.", example: "Judicious employment of academic nouns." }
    ],
    questions: [
      { q: "What is nominalization in linguistics?", options: ["A) Removing nouns from sentences", "B) Converting verbs and adjectives into abstract nouns to condense information", "C) Translating words to Latin"], answer: "B", exp: "Nominalization, eylemleri ve sıfatları soyut isim tamlamalarına dönüştürerek metne akademik yoğunluk kazandırmaktır." },
      { q: "Why is nominalization valuable in IELTS Writing Task 2?", options: ["A) It makes essays shorter", "B) It elevates Lexical Resource and Grammatical Range to higher band scores", "C) It replaces punctuation"], answer: "B", exp: "Metinde 'elevates lexical resource to Band 8.0' ifadesi yer alır." }
    ]
  },
  {
    id: "read_b2_10",
    level: "B2",
    category: "Şartlarda Devriklik",
    title: "Inversion in Conditional Clauses",
    titleTr: "Şart Cümlelerinde Devrik Yapılar",
    grammarRef: {
      id: "b2-inverted-conditionals",
      name: "Inverted Conditionals: Had I, Were I, Should you (Devrik Şart Kalıpları)",
      targetFocus: "'If' kullanmadan 'Had they investigated...', 'Were the government to...', 'Should you require...' yapıları."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "In formal diplomatic treaties and academic documentation, conditional clauses frequently dispense with the conjunction 'if' entirely. <mark class='vocab-hl' data-word='Had nuclear powers recognized' data-pos='inv. conditional' data-phonetic='/hæd ˈnjuː.klɪər.../' data-tr='nükleer güçler kabul etmiş olsaydı (= If they had recognized)' data-def='Inverted 3rd conditional without if.' data-ex='Had they acted, disaster was avoidable.'>Had nuclear powers recognized</mark> the catastrophic destabilization of proliferation early in the Cold War, comprehensive disarmament accords might have been signed decades earlier. <mark class='vocab-hl' data-word='Were nations to prioritize' data-pos='inv. conditional' data-phonetic='/wɜːr ˈneɪ.ʃənz tuː.../' data-tr='uluslar öncelik verseydi (= If nations were to prioritize)' data-def='Inverted 2nd conditional with were.' data-ex='Were governments to cooperate, peace would follow.'>Were nations to prioritize</mark> mutual ecological resilience over unilateral military hegemony, global defense expenditures could be redirected toward healthcare. <mark class='vocab-hl' data-word='Should regional crises escalate' data-pos='inv. conditional' data-phonetic='/ʃʊd ˈriː.dʒən.əl.../' data-tr='krizler tırmanacak olursa (= If crises should escalate)' data-def='Inverted 1st conditional with should.' data-ex='Should you need assistance, notify us.'>Should regional crises escalate</mark> unexpectedly, multilateral diplomacy remains humanity's sole buffer against cataclysm.",
    vocabularies: [
      { word: "proliferation", pos: "noun", phonetic: "/prəˌlɪf.əˈreɪ.ʃən/", tr: "yayılma, hızlı çoğalma", def: "Rapid increase in the number or amount of something.", example: "Destabilization of nuclear proliferation." },
      { word: "multilateral", pos: "adj.", phonetic: "/ˌmʌl.tiˈlæt.ər.əl/", tr: "çok taraflı", def: "Agreed upon or participated in by three or more parties.", example: "Multilateral diplomacy remains vital." }
    ],
    questions: [
      { q: "What does 'Had nuclear powers recognized' mean in standard English?", options: ["A) Did nuclear powers recognize?", "B) If nuclear powers had recognized", "C) Nuclear powers will recognize"], answer: "B", exp: "'Had + subject + V3' yapısı 'If + subject + had + V3' kalıbının devrik halidir." },
      { q: "What does 'Should regional crises escalate' mean?", options: ["A) Crises must escalate", "B) If regional crises should escalate in the future", "C) Crises have already escalated"], answer: "B", exp: "'Should + subject + verb' yapısı 'If + subject + should' kalıbının resmi devrik formudur." }
    ]
  },
  {
    id: "read_b2_11",
    level: "B2",
    category: "Gelecekteki Geçmiş",
    title: "The Unbuilt Utopias of Modernism",
    titleTr: "Modernizmin İnşa Edilmemiş Ütopyaları",
    grammarRef: {
      id: "b2-future-in-the-past",
      name: "Future in the Past: Was going to, Would (Geçmiş Perspektifinden Gelecek)",
      targetFocus: "Geçmişte planlanmış veya öngörülmüş eylemleri ifade eden 'was going to build / would transform'."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "In the 1920s, Swiss-French architect Le Corbusier unveiled the 'Plan Voisin'—a radical urban redevelopment scheme that <mark class='vocab-hl' data-word='was going to demolish' data-pos='phrase' data-phonetic='/wɒz ˈɡəʊ.ɪŋ tuː dɪˈmɒl.ɪʃ/' data-tr='yıkacaktı (ama yıkmadı)' data-def='Past intention that was not realized.' data-ex='He was going to demolish the old quarter.'>was going to demolish</mark> extensive historic quarters of central Paris to erect sixty-story cruciform towers. Corbusier envisioned that wide subterranean expressways <mark class='vocab-hl' data-word='would replace' data-pos='phrase' data-phonetic='/wʊd rɪˈpleɪs/' data-tr='yerini alacaktı' data-def='Future prediction viewed from the past.' data-ex='Automobiles would replace narrow streets.'>would replace</mark> winding medieval alleys. However, public outcry and prohibitive capitalization costs thwarted execution. While modern critics condemn the scheme as totalitarian sterility, Corbusier was convinced that his geometric megastructures would liberate urban citizens from industrial squalor.",
    vocabularies: [
      { word: "cruciform", pos: "adj.", phonetic: "/ˈkruː.sɪ.fɔːm/", tr: "haç biçiminde", def: "Having the shape of a cross.", example: "Sixty-story cruciform towers." },
      { word: "squalor", pos: "noun", phonetic: "/ˈskwɒl.ər/", tr: "sefalet, pislik", def: "The state of being extremely dirty and unpleasant.", example: "Liberate citizens from industrial squalor." }
    ],
    questions: [
      { q: "What does 'was going to demolish' indicate about the plan?", options: ["A) Paris was completely demolished", "B) There was an intention in the past to demolish, but it was NOT executed", "C) Demolition will begin tomorrow"], answer: "B", exp: "'Was going to' geçmişte planlanan ancak gerçekleşmeyen niyetleri anlatır." },
      { q: "Why was the 'Plan Voisin' abandoned?", options: ["A) Due to public outcry and prohibitive costs", "B) Because bricks ran out", "C) Corbusier lost interest"], answer: "A", exp: "Metinde 'public outcry and prohibitive capitalization costs thwarted execution' denir." }
    ]
  },
  {
    id: "read_b2_12",
    level: "B2",
    category: "Çift Karşılaştırma",
    title: "Deep Sleep and Memory Consolidation",
    titleTr: "Derin Uyku ve Hafıza Pekiştirmesi",
    grammarRef: {
      id: "b2-double-comparatives",
      name: "Double Comparatives: The more..., the more... (Orantılı Karşılaştırma)",
      targetFocus: "İki durumun birbirine paralel artış veya azalışını gösteren 'The -er..., the -er...' kalıbı."
    },
    wordCount: 180,
    readTime: "2-3 dk",
    text: "Neurobiological investigations continue to unravel the profound symbiosis between nocturnal slow-wave oscillations and synaptic memory retention. Laboratory sleep telemetry substantiates that <mark class='vocab-hl' data-word='the deeper an individual\'s slow-wave sleep is' data-pos='comp. phrase' data-phonetic='/ðə ˈdiː.pər.../' data-tr='kişinin yavaş dalga uykusu ne kadar derin olursa' data-def='Double comparative showing correlation.' data-ex='The deeper the sleep, the better the memory.'>the deeper an individual's slow-wave sleep is</mark>, <mark class='vocab-hl' data-word='the more effectively the hippocampus transfers' data-pos='comp. phrase' data-phonetic='/ðə mɔːr ɪˈfek.tɪv.li.../' data-tr='hipokampus o kadar etkili aktarır' data-def='Parallel resulting comparative.' data-ex='The more you rest, the more you recall.'>the more effectively the hippocampus transfers</mark> fragile short-term neural impressions into permanent neocortical storage. Conversely, the more fragmented nocturnal rest becomes, the higher the concentration of toxic beta-amyloid proteins inside cerebral tissue. Prioritizing consistent circadian rest cycles is essential for sustaining long-term cognitive stamina.",
    vocabularies: [
      { word: "symbiosis", pos: "noun", phonetic: "/ˌsɪm.baɪˈəʊ.sɪs/", tr: "ortak yaşam, karşılıklı bağ", def: "Interaction between two different organisms or systems.", example: "Symbiosis between sleep and memory." },
      { word: "stamina", pos: "noun", phonetic: "/ˈstæm.ɪ.nə/", tr: "dayanıklılık, zihinsel dinçlik", def: "The ability to sustain prolonged physical or mental effort.", example: "Sustaining long-term cognitive stamina." }
    ],
    questions: [
      { q: "What happens when slow-wave sleep is deeper?", options: ["A) Memory retention becomes weaker", "B) The hippocampus transfers memories to long-term storage more effectively", "C) Headaches increase"], answer: "B", exp: "Metinde 'the deeper the sleep, the more effectively hippocampus transfers memories' denir." },
      { q: "How is the double comparative structured?", options: ["A) The + comparative..., the + comparative...", "B) More and more", "C) As... as"], answer: "A", exp: "Double comparative formülü 'The + comparative..., the + comparative...' şeklindedir." }
    ]
  },
  {
    id: "read_b2_13",
    level: "B2",
    category: "Ön Odaklama",
    title: "Fronting for Thematic Weight",
    titleTr: "Tematik Vurgu İçin Ön Odaklama (Fronting)",
    grammarRef: {
      id: "b2-fronting-inversion-focus",
      name: "Fronting for Focus (Öğe Öne Alma ve Odak)",
      targetFocus: "Tümleç veya sıfat grubunu cümlenin en başına alarak güçlü akademik vurgu yapma."
    },
    wordCount: 180,
    readTime: "2-3 dk",
    text: "In scholarly rhetoric, syntactic fronting redistributes propositional information to heighten conceptual prominence. <mark class='vocab-hl' data-word='Crucial to this socio-economic debate is' data-pos='fronted phrase' data-phonetic='/ˈkruː.ʃəl tuː ðɪs.../' data-tr='Bu sosyo-ekonomik tartışma için can alıcı olan şey ...-dır' data-def='Adjectival phrase fronted before verb is.' data-ex='Central to the argument is equity.'>Crucial to this socio-economic debate is</mark> the equitable allocation of technological dividend windfalls across marginalized demographics. <mark class='vocab-hl' data-word='Equally contentious remains' data-pos='fronted phrase' data-phonetic='/ˈiː.kwə.li kənˈten.ʃəs.../' data-tr='Aynı derecede tartışmalı kalan şey ...-dır' data-def='Predicate adjective fronted.' data-ex='Equally contentious is taxation.'>Equally contentious remains</mark> the ethical taxation of automated machine labor. By placing focal evaluative adjectives at the vanguard of the sentence, academic authors steer reader cognitive attention directly toward the decisive analytical issue before unveiling substantive evidence.",
    vocabularies: [
      { word: "windfalls", pos: "noun", phonetic: "/ˈwɪnd.fɔːlz/", tr: "beklenmedik kazançlar", def: "Large amounts of money that are won or received unexpectedly.", example: "Technological dividend windfalls." },
      { word: "vanguard", pos: "noun", phonetic: "/ˈvæn.ɡɑːd/", tr: "ön saf, en ön mevki", def: "The foremost part of an advancing army or group; the forefront.", example: "At the vanguard of the sentence." }
    ],
    questions: [
      { q: "What is the function of fronting in academic writing?", options: ["A) To create spelling errors", "B) To heighten conceptual prominence and steer reader attention", "C) To lengthen sentences unnecessarily"], answer: "B", exp: "Fronting (öğe öne alma), kritik fikirleri cümlenin başına çekerek okuyucunun dikkatini odaklar." },
      { q: "What is fronted in 'Crucial to this debate is the allocation'?", options: ["A) The subject", "B) The predicate adjective complement", "C) The object pronoun"], answer: "B", exp: "'Crucial to this debate' sıfat tamlaması cümlenin başına getirilerek vurgulanmıştır." }
    ]
  },
  {
    id: "read_b2_14",
    level: "B2",
    category: "İhtiyatlı Dil",
    title: "Hedging and Academic Nuance",
    titleTr: "İhtiyatlı Dil (Hedging) ve Akademik Nüans",
    grammarRef: {
      id: "b2-hedging-epistemic-stance",
      name: "Hedging and Epistemic Stance (İhtiyatlı Akademik Tavır)",
      targetFocus: "Kesin iddialar yerine 'tends to indicate, appears to suggest, arguably' gibi temkinli yapılar."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "A cardinal virtue of academic writing is epistemic modesty. Inexperienced candidates frequently employ dogmatic absolutes, claiming that 'social media causes depression.' In contrast, peer-reviewed literature <mark class='vocab-hl' data-word='tends to suggest that' data-pos='phrase' data-phonetic='/tendz tuː səˈdʒest ðæt/' data-tr='işaret etme eğilimindedir ki' data-def='Hedging verb softening absolute claims.' data-ex='Data tends to suggest correlations.'>tends to suggest that</mark> excessive screen latency <mark class='vocab-hl' data-word='may potentially exacerbate' data-pos='phrase' data-phonetic='/meɪ pəˈten.ʃə.li ɪɡˈzæs.ə.beɪt/' data-tr='potansiyel olarak kötüleştirebilir' data-def='Double modal hedge.' data-ex='Factors may potentially exacerbate anxiety.'>may potentially exacerbate</mark> pre-existing vulnerability. Empirical telemetry <mark class='vocab-hl' data-word='arguably substantiates' data-pos='phrase' data-phonetic='/ˈɑːɡ.ju.ə.bli.../' data-tr='tartışmasız olmasa da kuvvetle destekler' data-def='Adverbial hedge indicating reasoned stance.' data-ex='The study arguably demonstrates links.'>arguably substantiates</mark> bidirectional correlation rather than straightforward linear causation. Incorporating modal qualifiers like 'indicates, suggests, arguably' demonstrates intellectual sophistication and shields scientific theses against dogmatic vulnerability.",
    vocabularies: [
      { word: "exacerbate", pos: "verb", phonetic: "/ɪɡˈzæs.ə.beɪt/", tr: "şiddetlendirmek, daha da kötüleştirmek", def: "Make a problem or bad situation worse.", example: "May potentially exacerbate depression." },
      { word: "causation", pos: "noun", phonetic: "/kɔːˈzeɪ.ʃən/", tr: "nedensellik, sebep-sonuç ilişkisi", def: "The action of causing something.", example: "Correlation rather than straightforward causation." }
    ],
    questions: [
      { q: "Why do academic researchers use 'hedging' verbs like 'tends to suggest'?", options: ["A) Because they are unsure of English grammar", "B) To express careful epistemic nuance and avoid dogmatic overstatements", "C) To hide data"], answer: "B", exp: "Hedging (ihtiyatlı dil), bilimsel iddiaların abartısız ve temkinli sunulmasını sağlar." },
      { q: "Does correlation prove causation?", options: ["A) Yes, always identical", "B) No, correlation indicates association, not necessarily direct causation", "C) Causation is impossible"], answer: "B", exp: "Metinde 'bidirectional correlation rather than straightforward linear causation' ayrımı yapılır." }
    ]
  },
  {
    id: "read_b2_15",
    level: "B2",
    category: "Çok Parçacıklı Deyimler",
    title: "Overcoming Bureaucratic Inertia",
    titleTr: "Bürokratik Ataletle Mücadele Etmek",
    grammarRef: {
      id: "b2-three-part-phrasal-verbs",
      name: "Three-part Phrasal Verbs (Üç Parçalı Deyimsel Fiiller)",
      targetFocus: "'come up against, cut down on, look forward to, put up with' gibi ayrılmayan çok parçacıklı fiiller."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "Entrepreneurs spearheading renewable microgrid startups regularly <mark class='vocab-hl' data-word='come up against' data-pos='phrasal v.' data-phonetic='/kʌm ʌp əˈɡenst/' data-tr='karşılaşmak, toslamak' data-def='Encounter or face difficulties.' data-ex='They come up against regulatory hurdles.'>come up against</mark> entrenched administrative inertia. Municipal utility monopolies often refuse to integrate local solar collectives smoothly. To survive commercially, green tech founders must <mark class='vocab-hl' data-word='cut down on' data-pos='phrasal v.' data-phonetic='/kʌt daʊn ɒn/' data-tr='kısmak, azaltmak' data-def='Reduce expenditure or consumption.' data-ex='Cut down on operational overhead.'>cut down on</mark> superfluous operational expenditure while lobbying municipal assemblies. They cannot afford to <mark class='vocab-hl' data-word='put up with' data-pos='phrasal v.' data-phonetic='/pʊt ʌp wɪð/' data-tr='tahammül etmek, katlanmak' data-def='Tolerate or endure.' data-ex='Cannot put up with bureaucratic delay.'>put up with</mark> bureaucratic stagnation when venture funding runways are constrained. Tenacity and agility remain non-negotiable prerequisites.",
    vocabularies: [
      { word: "entrenched", pos: "adj.", phonetic: "/ɪnˈtrentʃt/", tr: "kökleşmiş, yerleşmiş", def: "Firmly established and difficult or unlikely to change.", example: "Entrenched administrative inertia." },
      { word: "prerequisites", pos: "noun", phonetic: "/ˌpriːˈrek.wɪ.zɪts/", tr: "ön koşullar, olmazsa olmazlar", def: "Things that are required as prior conditions for something else.", example: "Tenacity and agility are prerequisites." }
    ],
    questions: [
      { q: "What does 'come up against' mean in the passage?", options: ["A) To agree completely", "B) To encounter or face obstacles", "C) To invest capital"], answer: "B", exp: "'Come up against' bir zorlukla veya engelle yüz yüze gelmek demektir." },
      { q: "What does 'put up with' mean?", options: ["A) To build a fence", "B) To tolerate or endure an unpleasant situation", "C) To sign a check"], answer: "B", exp: "'Put up with' katlanmak, tahammül etmek anlamına gelir." }
    ]
  },
  {
    id: "read_b2_16",
    level: "B2",
    category: "Mükemmel Mastar",
    title: "Archimedes and the Crown of Syracuse",
    titleTr: "Arşimet ve Siraküza Tacı",
    grammarRef: {
      id: "b2-perfect-infinitives-gerunds",
      name: "Perfect Infinitives & Gerunds: To have done / Having been done (Mükemmel Mastar)",
      targetFocus: "Ana fiilden daha önceki bir zamanı bildiren 'claimed to have discovered' ve 'credited with having solved'."
    },
    wordCount: 180,
    readTime: "2-3 dk",
    text: "Historical legend records that the Greek mathematician Archimedes was tasked with determining whether King Hiero's golden wreath had been adulterated with inferior silver. Stepping into a public bathhouse, Archimedes observed the displaced water and was reported <mark class='vocab-hl' data-word='to have shouted' data-pos='perf. inf.' data-phonetic='/tuː hæv ˈʃaʊ.tɪd/' data-tr='bağırmış olduğu (önceden)' data-def='Perfect infinitive showing earlier event.' data-ex='Reported to have shouted Eureka.'>to have shouted</mark> 'Eureka!' as he realized that volume displacement reveals true density. He is widely credited with <mark class='vocab-hl' data-word='having formulated' data-pos='perf. gerund' data-phonetic='/ˈhæv.ɪŋ ˈfɔː.mjə.leɪ.tɪd/' data-tr='formüle etmiş olmakla' data-def='Perfect gerund after preposition with.' data-ex='Credited with having formulated buoyancy laws.'>having formulated</mark> hydrostatics laws that govern marine engineering to this day.",
    vocabularies: [
      { word: "adulterated", pos: "verb (past)", phonetic: "/əˈdʌl.tə.reɪ.tɪd/", tr: "saflığı bozulmuş, hile katılmış", def: "Rendered poorer in quality by adding another substance.", example: "Whether the crown had been adulterated with silver." },
      { word: "buoyancy", pos: "noun", phonetic: "/ˈbɔɪ.ən.si/", tr: "kaldırma kuvveti, suyun kaldırma gücü", def: "The ability or tendency of something to float in water or other fluid.", example: "Hydrostatics laws governing buoyancy." }
    ],
    questions: [
      { q: "What does the perfect infinitive 'to have shouted' indicate?", options: ["A) Archimedes will shout tomorrow", "B) The shouting occurred prior to the time of the historical report", "C) Archimedes never spoke"], answer: "B", exp: "Perfect infinitive (to have V3), ana fiilden daha önce gerçekleşmiş bir eylemi bildirir." },
      { q: "How did Archimedes discover true density?", options: ["A) By melting the crown", "B) By observing the displacement of water in the bath", "C) By weighing it on a digital scale"], answer: "B", exp: "Metinde 'volume displacement reveals true density' denmektedir." }
    ]
  },
  {
    id: "read_b2_17",
    level: "B2",
    category: "Ödün & Karşıtlık",
    title: "Economic Growth versus Degrowth",
    titleTr: "Ekonomik Büyüme ve Küçülme (Degrowth)",
    grammarRef: {
      id: "b2-clauses-concession",
      name: "Clauses of Concession: Whereas, While, Albeit (Zıtlık ve Ödün Cümlecikleri)",
      targetFocus: "İki durumu kıyaslarken 'whereas / while' ve sıfatlarla 'albeit (her ne kadar ... olsa da)' kullanımı."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "Contemporary political economy exhibits profound ideological cleavage regarding macro-economic expansion. Neoliberal economists prioritize perpetual gross domestic product escalation, <mark class='vocab-hl' data-word='whereas ecological thinkers argue that' data-pos='conj. phrase' data-phonetic='/weərˈæz.../' data-tr='oysa ekolojik düşünürler savunur ki' data-def='Conjunction expressing direct contrast.' data-ex='A grows, whereas B shrinks.'>whereas ecological thinkers argue that</mark> infinite physical production on a finite planet is thermodynamic folly. Degrowth theorists advocate planned economic contraction, <mark class='vocab-hl' data-word='albeit one accompanied by' data-pos='phrase' data-phonetic='/ɔːlˈbiː.ɪt wʌn.../' data-tr='her ne kadar eşlik edilse de' data-def='Concession conjunction albeit (+ noun/adj).' data-ex='An effective solution, albeit expensive.'>albeit one accompanied by</mark> robust social safety nets and wealth redistribution. <mark class='vocab-hl' data-word='While technological efficiency reduces' data-pos='clause' data-phonetic='/waɪl.../' data-tr='Teknolojik verimlilik azaltırken' data-def='Concession clause showing contrast.' data-ex='While efficiency rises, consumption grows.'>While technological efficiency reduces</mark> resource intensity per manufactured unit, overall consumption rebounds cancel out ecological savings.",
    vocabularies: [
      { word: "cleavage", pos: "noun", phonetic: "/ˈkliː.vɪdʒ/", tr: "bölünme, keskin ayrışma", def: "A sharp division or split.", example: "Profound ideological cleavage in economics." },
      { word: "thermodynamic", pos: "adj.", phonetic: "/ˌθɜː.məʊ.daɪˈnæm.ɪk/", tr: "termodinamik, ısı ve enerji bilimine ait", def: "Relating to the branch of physics concerned with heat and energy.", example: "Thermodynamic folly on a finite planet." }
    ],
    questions: [
      { q: "What does 'whereas' express?", options: ["A) A cause-and-effect relationship", "B) A direct contrast between two differing views or groups", "C) A sequence of time"], answer: "B", exp: "'Whereas' iki farklı grup veya görüş arasındaki doğrudan tezatlığı belirtir." },
      { q: "How is 'albeit' used grammatically?", options: ["A) To introduce a full sentence with subject and verb", "B) As a concession conjunction followed by an adjective or noun phrase (albeit accompanied by...)", "C) As an exclamation"], answer: "B", exp: "'Albeit' sıfat veya isim öbeğiyle ödün/istisna bildirir (albeit accompanied by...)." }
    ]
  },
  {
    id: "read_b2_18",
    level: "B2",
    category: "Anlatı Zamanları",
    title: "The Archaeological Discovery at Göbeklitepe",
    titleTr: "Göbeklitepe'deki Arkeolojik Keşif",
    grammarRef: {
      id: "b2-narrative-tenses-complex",
      name: "Complex Narrative Tenses (Karmaşık Anlatı Zamanları)",
      targetFocus: "Geçmiş zaman katmanlarını birleştiren Past Simple, Past Continuous ve Past Perfect kombinasyonu."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "In the mid-1990s, German archaeologist Klaus Schmidt was inspecting a limestone ridge in southeastern Anatolia that earlier survey teams <mark class='vocab-hl' data-word='had dismissed' data-pos='v. (past perf.)' data-phonetic='/hæd dɪˈsmɪst/' data-tr='göz ardı etmişti (daha önce)' data-def='Action earlier than Schmidt\'s inspection.' data-ex='Teams had dismissed the hill.'>had dismissed</mark> as a medieval cemetery. As Schmidt <mark class='vocab-hl' data-word='was examining' data-pos='v. (past cont.)' data-phonetic='/wɒz ɪɡˈzæm.ɪ.nɪŋ/' data-tr='incelemekteyken' data-def='Ongoing past action interrupted by finding.' data-ex='While he was examining the hill...'>was examining</mark> flint flakes scattered across the arid summit, he recognized worked stone pillars. Excavations revealed monumental T-shaped limestone megaliths carved twelve thousand years ago. Hunter-gatherers <mark class='vocab-hl' data-word='had erected' data-pos='v. (past perf.)' data-phonetic='/hæd ɪˈrek.tɪd/' data-tr='inşa etmişti' data-def='Completed ancient construction.' data-ex='They had erected temple sanctuaries.'>had erected</mark> temple sanctuaries long before they developed settled agrarian farming. Schmidt's discovery overturned classical archaeological orthodoxy regarding the origins of human monumental architecture.",
    vocabularies: [
      { word: "megaliths", pos: "noun", phonetic: "/ˈmeɡ.ə.lɪθs/", tr: "megalitler, dev taş anıtlar", def: "Large stones that form prehistoric monuments.", example: "T-shaped limestone megaliths." },
      { word: "orthodoxy", pos: "noun", phonetic: "/ˈɔː.θə.dɒk.si/", tr: "yerleşik öğreti, geleneksel kabul", def: "Authorized or generally accepted theory, doctrine, or practice.", example: "Overturned classical archaeological orthodoxy." }
    ],
    questions: [
      { q: "Why did Schmidt's discovery overturn archaeological orthodoxy?", options: ["A) Because metal tools were found", "B) Because hunter-gatherers had built monumental temples before developing settled agriculture", "C) Because the stones were plastic"], answer: "B", exp: "Metinde 'Hunter-gatherers had erected temple sanctuaries long before settled agrarian farming' denmektedir." },
      { q: "Which tense explains what earlier survey teams did before Schmidt's arrival?", options: ["A) Past Simple", "B) Past Perfect (had dismissed)", "C) Present Perfect"], answer: "B", exp: "Schmidt'ten önceki ekiplerin yaptığı eylem daha eski olduğu için Past Perfect (had dismissed) kullanılmıştır." }
    ]
  },
  {
    id: "read_b2_19",
    level: "B2",
    category: "Metin İçi Bağdaşıklık",
    title: "Urban Heat Islands and Microclimate Architecture",
    titleTr: "Kentsel Isı Adaları ve Mikroklima Mimarisi",
    grammarRef: {
      id: "b2-cohesion-discourse-markers",
      name: "Discourse Markers for Cohesion: Furthermore, Consequently, In contrast (Metin İçi Bağlayıcılar)",
      targetFocus: "Paragraflar arası mantıksal geçiş sağlayan 'Consequently, In contrast, Furthermore' bağlayıcıları."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "Densely built metropolitan centers suffer acutely from urban heat island effects. Dark asphalt surfaces and concrete building envelopes absorb solar thermal energy during peak daylight. <mark class='vocab-hl' data-word='Consequently' data-pos='adv.' data-phonetic='/ˈkɒn.sɪ.kwənt.li/' data-tr='sonuç olarak, bu doğrultuda' data-def='Discourse marker showing result.' data-ex='Consequently, night temperatures rise.'>Consequently</mark>, nighttime ambient temperatures in city centres remain up to five degrees warmer than adjacent rural forests. <mark class='vocab-hl' data-word='Furthermore' data-pos='adv.' data-phonetic='/ˌfɜː.ðəˈmɔːr/' data-tr='dahası, buna ek olarak' data-def='Discourse marker adding supporting points.' data-ex='Furthermore, energy demands surge.'>Furthermore</mark>, surging electricity demands for indoor air conditioning trigger grid brownouts. <mark class='vocab-hl' data-word='In contrast' data-pos='phrase' data-phonetic='/ɪn ˈkɒn.trɑːst/' data-tr='buna karşılık, tam tersine' data-def='Discourse marker contrasting strategies.' data-ex='In contrast, green roofs cool buildings.'>In contrast</mark>, biophilic architecture incorporating reflective white cool roofs, green tree canopies, and water features diminishes surface temperatures dramatically.",
    vocabularies: [
      { word: "biophilic", pos: "adj.", phonetic: "/ˌbaɪ.əʊˈfɪl.ɪk/", tr: "doğayla uyumlu, canlısever", def: "Relating to architecture incorporating natural elements.", example: "Biophilic architecture incorporating greenery." },
      { word: "brownouts", pos: "noun", phonetic: "/ˈbraʊn.aʊts/", tr: "voltaj düşüşleri, kısmi elektrik kesintileri", def: "Reductions in or restrictions of the availability of electrical power in a particular area.", example: "Trigger grid brownouts during heatwaves." }
    ],
    questions: [
      { q: "What is the function of 'Consequently'?", options: ["A) To introduce an unexpected contradiction", "B) To indicate a logical causal result of the preceding point", "C) To finish a story"], answer: "B", exp: "'Consequently' önceki cümlenin mantıksal bir sonucunu bağlar." },
      { q: "How much warmer can urban centres be compared to rural forests at night?", options: ["A) 1 degree", "B) Up to five degrees warmer", "C) Zero degrees"], answer: "B", exp: "Metinde 'remain up to five degrees warmer than adjacent rural forests' denir." }
    ]
  },
  {
    id: "read_b2_20",
    level: "B2",
    category: "Karmaşık Dolaylı Aktarım",
    title: "The Diplomatic Resolution on Space Debris",
    titleTr: "Uzay Çöpleri Üzerine Diplomatik Karar",
    grammarRef: {
      id: "b2-complex-reported-speech-modals",
      name: "Complex Reported Speech with Modals (Modallı İleri Dolaylı Anlatım)",
      targetFocus: "Resmi tavsiye ve kararların aktarımında 'advised that measures should be undertaken' yapıları."
    },
    wordCount: 185,
    readTime: "2-3 dk",
    text: "At the United Nations Committee on the Peaceful Uses of Outer Space, delegates addressed the catastrophic cascade risk known as the Kessler Syndrome. The chief technical advisor <mark class='vocab-hl' data-word='warned that millions of orbital fragments could render' data-pos='rep. phrase' data-phonetic='/wɔːnd ðæt.../' data-tr='uyardı ki milyonlarca yörünge parçası getirebilirdi' data-def='Complex reported warning.' data-ex='Warned that debris could collide.'>warned that millions of orbital fragments could render</mark> low-Earth orbit unusable for navigation satellites. She <mark class='vocab-hl' data-word='recommended that spacefaring nations should deorbit' data-pos='rep. phrase' data-phonetic='/ˌrek.əˈmen.dɪd ðæt.../' data-tr='tavsiye etti ki uzay ülkeleri yörüngeden çıkarmalıydı' data-def='Reported recommendation with modal.' data-ex='Recommended that nations should clean orbits.'>recommended that spacefaring nations should deorbit</mark> defunct satellites within five years of operational termination. Delegations agreed that without binding international protocols, satellite collisions would inevitably proliferate exponentially.",
    vocabularies: [
      { word: "cascade", pos: "noun", phonetic: "/kæsˈkeɪd/", tr: "zincirleme reaksiyon, ardışık patlama", def: "A process whereby something, typically information or impact, is successively passed on.", example: "Catastrophic cascade risk in orbit." },
      { word: "defunct", pos: "adj.", phonetic: "/dɪˈfʌŋkt/", tr: "işlevini yitirmiş, ömrünü tamamlamış", def: "No longer existing or functioning.", example: "Deorbit defunct satellites." }
    ],
    questions: [
      { q: "What is the Kessler Syndrome in the passage?", options: ["A) A human genetic disorder", "B) A cascade collision risk where orbital space debris multiplies exponentially", "C) A financial banking collapse"], answer: "B", exp: "Metinde 'catastrophic cascade risk where fragments render low-Earth orbit unusable' denmektedir." },
      { q: "What timeframe did the advisor recommend for deorbiting defunct satellites?", options: ["A) 50 years", "B) Within 5 years of operational termination", "C) Immediately at launch"], answer: "B", exp: "Metinde 'within five years of operational termination' denir." }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.READING_B2 = READING_B2;
}
