// =============================================================================
// CEFR C2 READING PRACTICE PASSAGES (10 Texts: C2-01 to C2-10)
// =============================================================================

const READING_C2 = [
  {
    id: "read_c2_01",
    level: "C2",
    category: "Kuantum Ontolojisi",
    title: "Bell's Theorem and the Death of Local Realism",
    titleTr: "Bell Teoremi ve Yerel Gerçekçiliğin Sonu",
    grammarRef: {
      id: "c2-absolute-constructions",
      name: "Absolute Constructions (Bağımsız Yan Cümlecikler)",
      targetFocus: "Kendi öznesi olan ve bağlaçsız kurulan 'Local realism having been disproven, physics embraced non-locality'."
    },
    wordCount: 215,
    readTime: "3-4 dk",
    text: "<mark class='vocab-hl' data-word='Local realism having been definitively invalidated' data-pos='absolute phrase' data-phonetic='/ˈləʊ.kəl ˈrɪə.lɪ.zəm ˈhæv.ɪŋ biːn.../' data-tr='Yerel gerçekçilik kesin olarak çürütülmüş vaziyetteyken (absolute construction)' data-def='Nominative absolute construction with its own subject and participle.' data-ex='The premise having failed, we abandoned the hypothesis.'>Local realism having been definitively invalidated</mark> by Alain Aspect and subsequent loophole-free Bell inequality experiments, modern quantum ontology confronts profound philosophical dissonance. Classical Newtonian determinism presupposed that physical entities possess definite, pre-existing attributes independent of measurement, and that no causal influence propagates faster than the speed of light. <mark class='vocab-hl' data-word='These epistemological bulwarks now shattered' data-pos='absolute phrase' data-phonetic='/ðiːz ɪˌpɪs.tə.məˈlɒdʒ.ɪ.kəl.../' data-tr='Bu epistemolojik dayanaklar artık paramparça olmuş halde' data-def='Absolute construction with participle omitted/implied.' data-ex='All doubts resolved, the team proceeded.'>These epistemological bulwarks now shattered</mark>, physicists must accept that either the universe is fundamentally non-local—wherein spatially separated entangled particles exhibit instantaneous correlative coherence across cosmic voids—or that objective counterfactual definiteness is an anthropocentric illusion. Far from being an esoteric mathematical curiosity, quantum non-locality underpins contemporary explorations into quantum teleportation and the holographical nature of spacetime itself.",
    vocabularies: [
      { word: "bulwarks", pos: "noun", phonetic: "/ˈbʊl.wəks/", tr: "siperler, sarsılmaz dayanaklar", def: "Defensive walls or strong supports.", example: "These epistemological bulwarks now shattered." },
      { word: "counterfactual", pos: "adj.", phonetic: "/ˌkaʊn.təˈfæk.tʃu.əl/", tr: "karşı-olgusal, varsayımsal", def: "Relating to or expressing what has not happened or is not the case.", example: "Counterfactual definiteness in physics." }
    ],
    questions: [
      { q: "What is an 'Absolute Construction' in advanced English syntax?", options: ["A) A simple prepositional phrase", "B) A grammatically independent non-finite clause possessing its own subject, functioning adverbially", "C) An exclamation mark"], answer: "B", exp: "Absolute construction, kendi müstakil öznesi bulunan ve zarf görevi gören bağımsız yan cümleciktir (Local realism having been invalidated)." },
      { q: "What did the violation of Bell's inequality prove?", options: ["A) That Newton was 100% correct", "B) That local realism is invalid and the universe exhibits non-local quantum correlations", "C) That light travels at infinite speed"], answer: "B", exp: "Metinde 'Local realism having been definitively invalidated' ve kuantum evreninin non-local olduğu doğrulanır." }
    ]
  },
  {
    id: "read_c2_02",
    level: "C2",
    category: "Evrimsel Antropoloji",
    title: "The Emergence of Human Symbolic Cognition",
    titleTr: "İnsan Sembolik Bilişinin Ortaya Çıkışı",
    grammarRef: {
      id: "c2-chiasmus-parallel-inversion",
      name: "Rhetorical Chiasmus & Syntactic Inversion (Kiazmus ve Çapraz Simetri)",
      targetFocus: "Kavramları çapraz simetriyle sunan retorik sanat (We shape our tools, and thereafter our tools shape us)."
    },
    wordCount: 220,
    readTime: "3-4 dk",
    text: "The evolutionary trajectory from archaic hominids to modern Homo sapiens represents not merely an escalation in cranial capacity, but a qualitative leap into recursive symbolic imagination. Paleolithic cave murals at Chauvet and ochre engravings at Blombos demonstrate that early humans externalized internal mental states through durable representations. In anthropological linguistics, it is observed that <mark class='vocab-hl' data-word='language creates culture, and through culture is language sustained' data-pos='chiasmus' data-phonetic='/.../' data-tr='dil kültürü yaratır, kültür aracılığıyla da dil yaşatılır (kiazmus)' data-def='Rhetorical chiasmus mirroring AB-BA syntactic structure.' data-ex='We shape language, and language shapes us.'>language creates culture, and through culture is language sustained</mark>. This chiastic symbiosis enabled human groups to accumulate transgenerational institutional knowledge, transforming ephemeral individual insights into permanent cultural heritage. <mark class='vocab-hl' data-word='Bereft of symbolic syntax, human society would collapse' data-pos='verbless clause' data-phonetic='/bɪˈreft ɒv.../' data-tr='Sembolik sözdiziminden yoksun haldeyken, insan toplumu çökerdi' data-def='Adjectival verbless conditional clause.' data-ex='Bereft of hope, they surrendered.'>Bereft of symbolic syntax, human society would collapse</mark> into immediate sensorimotor immediacy, stripped of historical memory and collective myth-making.",
    vocabularies: [
      { word: "ephemeral", pos: "adj.", phonetic: "/ɪˈfem.ər.əl/", tr: "geçici, günübirlik, uçucu", def: "Lasting for a very short time.", example: "Transforming ephemeral individual insights." },
      { word: "bereft", pos: "adj.", phonetic: "/bɪˈreft/", tr: "yoksun, mahrum", def: "Deprived of or lacking something.", example: "Bereft of symbolic syntax." }
    ],
    questions: [
      { q: "What rhetorical figure is displayed in 'language creates culture, and through culture is language sustained'?", options: ["A) Chiasmus (AB:BA inverted syntactic symmetry)", "B) Onomatopoeia", "C) Simple alliteration"], answer: "A", exp: "Kiazmus (Chiasmus), kavramların çapraz simetrik (AB-BA) şekilde birbirini yansıtması sanatıdır." },
      { q: "What did symbolic cognition allow humans to do?", options: ["A) Hunt without weapons", "B) Accumulate transgenerational institutional knowledge", "C) Fly over mountains"], answer: "B", exp: "Metinde 'accumulate transgenerational institutional knowledge' denmektedir." }
    ]
  },
  {
    id: "read_c2_03",
    level: "C2",
    category: "Dil Felsefesi",
    title: "Universal Grammar and the Poverty of the Stimulus",
    titleTr: "Evrensel Dilbilgisi ve Uyaran Eksikliği Argümanı",
    grammarRef: {
      id: "c2-left-branching-subordination",
      name: "Left-Branching Syntactic Subordination (Sol Dallanmalı Karmaşık Cümle)",
      targetFocus: "Ana yüklemden önce birden fazla yan cümlecik yerleştiren ileri akademik sözdizimi."
    },
    wordCount: 220,
    readTime: "3-4 dk",
    text: "<mark class='vocab-hl' data-word='That human infants effortlessly master highly intricate syntactic recursion despite encountering fragmented sensory data' data-pos='noun clause (subj.)' data-phonetic='/ðæt ˈhjuː.mən.../' data-tr='İnsan bebeklerinin parçalı duyusal verilerle karşılaşmalarına rağmen karmaşık sözdizimini zahmetsizce öğrenmesi (özne görevinde That-cümlesi)' data-def='Left-branching subject clause introduced by That.' data-ex='That the experiment succeeded surprised observers.'>That human infants effortlessly master highly intricate syntactic recursion despite encountering fragmented sensory data</mark> remains the foundational pillar of Chomskyan nativism. Known as the 'poverty of the stimulus' argument, this epistemological thesis posits that the linguistic inputs children receive are too degenerative, idiosyncratic, and impoverished to explain the swift convergence upon complex syntactic competence through empiricist trial and error alone. Therefore, innatists deduce that a biologically hardwired Language Acquisition Device must constrain hypotheses prior to environmental immersion. While connectionist neural network models demonstrate emergent pattern extraction, <mark class='vocab-hl' data-word='the extent to which biological predispositions dictate grammar remains hotly disputed' data-pos='nom. clause' data-phonetic='/ðɪ ɪkˈstent tuː wɪtʃ.../' data-tr='biyolojik yatkınlıkların grameri ne dereceye kadar belirlediği hararetle tartışılmaktadır' data-def='Complex noun clause.' data-ex='The extent to which AI understands language.'>the extent to which biological predispositions dictate grammar remains hotly disputed</mark>.",
    vocabularies: [
      { word: "idiosyncratic", pos: "adj.", phonetic: "/ˌɪd.i.ə.sɪŋˈkræt.ɪk/", tr: "kendine has, nev-i şahsına münhasır", def: "Relating to idiosyncrasy; peculiar or individual.", example: "Idiosyncratic and impoverished input." },
      { word: "convergence", pos: "noun", phonetic: "/kənˈvɜː.dʒəns/", tr: "yakınsama, ortak noktada buluşma", def: "The process of coming together from different directions.", example: "Convergence upon syntactic competence." }
    ],
    questions: [
      { q: "How does the first sentence begin syntactically?", options: ["A) With a simple preposition", "B) With a complex 'That...' nominal clause serving as the entire sentence subject (left-branching)", "C) With an imperative verb"], answer: "B", exp: "Cümle, 'That human infants master...' şeklinde devasa bir isim cümleciği ile özne olarak başlamaktadır." },
      { q: "What does the 'poverty of the stimulus' argument assert?", options: ["A) That children learn languages from television", "B) That linguistic input is too impoverished to explain rapid language mastery without innate biological mechanisms", "C) That books are expensive"], answer: "B", exp: "Metinde çocukların duyduğu verinin dili tek başına açıklamaya yetersiz olduğu (poverty of stimulus) vurgulanır." }
    ]
  },
  {
    id: "read_c2_04",
    level: "C2",
    category: "Yapay Zeka & Zihin Felsefesi",
    title: "The Chinese Room and the Illusion of Intentionality",
    titleTr: "Çin Odası ve Kasıtlılık (Intentionality) Yanılsaması",
    grammarRef: {
      id: "c2-concessive-conditional-inverted",
      name: "Concessive-Conditional with Inverted Modality (Devrik Ödünlü Koşul)",
      targetFocus: "'Be an artificial model however sophisticated, it cannot acquire true intentionality'."
    },
    wordCount: 220,
    readTime: "3-4 dk",
    text: "John Searle's classic 'Chinese Room' thought experiment remains an insurmountable critique against computational functionalism. Suppose a monolingual English speaker sits inside a locked chamber, manipulating Chinese orthographic glyphs by following an exhaustive formal rulebook. When external observers pass questions through the slot, the agent matches symbols mechanically and produces flawless replies. To outside observers, the room understands Cantonese. Yet <mark class='vocab-hl' data-word='be the algorithmic rulebook however comprehensive' data-pos='inv. concession' data-phonetic='/biː ðɪ.../' data-tr='Algoritmik kural kitabı ne kadar kapsamlı olursa olsun (devrik ödünlü koşul)' data-def='Inverted concessive conditional with subjunctive be.' data-ex='Be the challenge however daunting, we proceed.'>be the algorithmic rulebook however comprehensive</mark>, neither the clerk nor the filing cabinets comprehend a single semantic nuance. Syntax, Searle concluded, is fundamentally insufficient for semantics. <mark class='vocab-hl' data-word='Possess large language models whatever syntactic dexterity they may' data-pos='inv. concession' data-phonetic='/pəˈzes.../' data-tr='Büyük dil modelleri ne kadar sözdizimsel çevikliğe sahip olurlarsa olsunlar' data-def='Fronted verb concessive clause.' data-ex='Have they whatever resources they might.'>Possess large language models whatever syntactic dexterity they may</mark>, their probabilistic word calculations lack subjective phenomenological intentionality.",
    vocabularies: [
      { word: "orthographic", pos: "adj.", phonetic: "/ˌɔː.θəˈɡræf.ɪk/", tr: "yazımsal, imlaya ait", def: "Relating to the conventional spelling or character system of a language.", example: "Chinese orthographic glyphs." },
      { word: "intentionality", pos: "noun", phonetic: "/ɪnˌten.ʃəˈnæl.ə.ti/", tr: "yönelmişlik, kasıtlılık (zihin felsefesi)", def: "The fact of being about something or having meaning.", example: "Subjective phenomenological intentionality." }
    ],
    questions: [
      { q: "What does 'be the rulebook however comprehensive' mean?", options: ["A) If the rulebook is small", "B) No matter how comprehensive the rulebook is (concessive conditional)", "C) The rulebook must be destroyed"], answer: "B", exp: "'Be X however Y' kalıbı 'ne kadar Y olursa olsun' anlamında ileri düzey ödünlü koşul bildirir." },
      { q: "What did Searle conclude regarding syntax and semantics?", options: ["A) Syntax is identical to semantics", "B) Syntax is fundamentally insufficient to produce true semantic understanding", "C) Semantics is useless"], answer: "B", exp: "Metinde 'Syntax, Searle concluded, is fundamentally insufficient for semantics' denmektedir." }
    ]
  },
  {
    id: "read_c2_05",
    level: "C2",
    category: "Makro-Finans & Jeopolitik",
    title: "The Triffin Dilemma and Hegemonic Monetary De-dollarization",
    titleTr: "Triffin İkilemi ve Hegemonik Dolar-Dışılaşma",
    grammarRef: {
      id: "c2-anaphoric-cohesion-chains",
      name: "Dense Anaphoric Chains & Nominal Substitution (Metin İçi Zincirleme Bağdaşıklık)",
      targetFocus: "İleri düzey akademik metinlerde kavramların zincirleme soyut isimlerle yinelenmesi (this structural imbalance, such hegemony)."
    },
    wordCount: 220,
    readTime: "3-4 dk",
    text: "In the 1960s, Belgian economist Robert Triffin formulated a structural paradox inherent to national currencies serving as global reserve assets. To satisfy international liquidity demands, the reserve-issuing sovereign nation must perpetually run current account balance deficits, flooding the globe with treasury obligations. <mark class='vocab-hl' data-word='This persistent macroeconomic hemorrhage' data-pos='anaphoric phrase' data-phonetic='/ðɪs pəˈsɪs.tənt.../' data-tr='bu ısrarcı makroekonomik kanama (anaphoric chain)' data-def='Complex nominal anaphora referring back to balance deficits.' data-ex='This persistent structural friction.'>This persistent macroeconomic hemorrhage</mark> inevitably erodes foreign confidence in the reserve asset's long-term convertibility. <mark class='vocab-hl' data-word='Were foreign central banks to liquidate' data-pos='inv. conditional' data-phonetic='/wɜːr ˈfɒr.ɪn.../' data-tr='yabancı merkez bankaları tasfiye edecek olsaydı' data-def='Inverted hypothetical conditional.' data-ex='Were investors to abandon bonds.'>Were foreign central banks to liquidate</mark> dollar reserves concurrently in favor of bilateral bullion or sovereign cryptographic settlements, the architecture of post-Bretton Woods capital mobility would undergo seismic realignment. Diversifying reserve portfolios into basket currencies represents not merely risk mitigation, but an existential recalibration of twentieth-century geopolitical hegemony.",
    vocabularies: [
      { word: "hemorrhage", pos: "noun", phonetic: "/ˈhem.ər.ɪdʒ/", tr: "kanama, büyük sermaye/kaynak kaybı", def: "A damaging loss of valuable resources.", example: "This persistent macroeconomic hemorrhage." },
      { word: "bullion", pos: "noun", phonetic: "/ˈbʊl.i.ən/", tr: "külçe altın veya gümüş", def: "Gold or silver in bulk before coining, or valued by weight.", example: "Bilateral bullion settlements." }
    ],
    questions: [
      { q: "What is the Triffin Dilemma described in the passage?", options: ["A) A maritime shipping crisis", "B) The paradox where a global reserve currency issuer must run deficits to provide liquidity, which eventually erodes confidence", "C) A digital banking software bug"], answer: "B", exp: "Metinde küresel likidite için cari açık vermesi gereken rezerv ülkenin güven aşınması yaşadığı anlatılır." },
      { q: "What does 'This persistent macroeconomic hemorrhage' refer back to anaphorically?", options: ["A) The gold standard", "B) Running perpetual current account balance deficits", "C) Bilateral trade agreements"], answer: "B", exp: "Bu anaphoric zincir bir önceki cümledeki 'perpetually run current account balance deficits' kavramını özetler." }
    ]
  },
  {
    id: "read_c2_06",
    level: "C2",
    category: "Biyosemiyotik",
    title: "Biosemiotics and the Umwelten of Non-Human Beings",
    titleTr: "Biyosemiyotik ve İnsan Dışı Varlıkların Dünyaları (Umwelt)",
    grammarRef: {
      id: "c2-verbless-adjectival-clauses",
      name: "Verbless Adjectival Clauses (Fiilsiz Sıfat Cümlecikleri)",
      targetFocus: "Fiil içermeyen sıfat öbeklerinin doğrudan ana cümleye bağlanması (Attuned to magnetic field lines, birds navigate...)."
    },
    wordCount: 220,
    readTime: "3-4 dk",
    text: "Pioneered by Baltic biologist Jakob von Uexküll, biosemiotics rejects the mechanistic view that organisms are passive biological automatons responding to blind physical stimuli. Rather, each species inhabits its distinct 'Umwelt'—a subjective perceptual reality constructed through species-specific sensory interfaces. <mark class='vocab-hl' data-word='Attuned exclusively to butyric acid and thermal gradients' data-pos='verbless clause' data-phonetic='/əˈtjuːnd ɪkˈskluː.sɪv.li.../' data-tr='Yalnızca bütirik asit ve termal gradyanlara duyarlı haldeyken' data-def='Verbless adjectival clause modifying the tick.' data-ex='Aware of the danger, she paused.'>Attuned exclusively to butyric acid and thermal gradients</mark>, a common forest tick perceives nothing of floral colors, auditory symphonies, or celestial stars. Her experiential cosmos is sparse yet biologically complete. <mark class='vocab-hl' data-word='Incapable of transcending our own sensory apparatus' data-pos='verbless clause' data-phonetic='/ɪnˈkeɪ.pə.bəl ɒv.../' data-tr='Kendi duyusal aygıtımızı aşmaktan acizken' data-def='Verbless participial clause modifying humans.' data-ex='Incapable of speech, the animal looked up.'>Incapable of transcending our own sensory apparatus</mark>, humans naively mistake anthropocentric perception for absolute reality. Biosemiotics reminds us that nature is an orchestral symphony of coexisting subjective lifeworlds.",
    vocabularies: [
      { word: "automatons", pos: "noun", phonetic: "/ɔːˈtɒm.ə.tənz/", tr: "otomatlar, mekanik robotlar", def: "Moving mechanical devices made in imitation of human beings.", example: "Organisms are not passive automatons." },
      { word: "apparatus", pos: "noun", phonetic: "/ˌæp.əˈreɪ.təs/", tr: "aygıt, karmaşık yapı veya organ", def: "A complex structure within an organism or system.", example: "Our own sensory apparatus." }
    ],
    questions: [
      { q: "What is a 'Verbless Adjectival Clause' as seen in 'Attuned exclusively to butyric acid...'?", options: ["A) A clause containing three auxiliary verbs", "B) An adjective phrase acting as a dependent clause without an explicit verb", "C) An interrogative clause"], answer: "B", exp: "Fiilsiz sıfat cümleciği, 'being' fiili atılarak doğrudan sıfat öbeğiyle ana cümleye bağlanan yapıdır." },
      { q: "What is an 'Umwelt' according to biosemiotics?", options: ["A) A computerized laboratory", "B) A subjective perceptual reality constructed through a species' unique senses", "C) A type of fossil"], answer: "B", exp: "Metinde 'a subjective perceptual reality constructed through species-specific sensory interfaces' denmektedir." }
    ]
  },
  {
    id: "read_c2_07",
    level: "C2",
    category: "Karmaşık Sistemler",
    title: "Tipping Elements in the Earth System",
    titleTr: "Dünya Sisteminde Kırılma Noktaları (Tipping Elements)",
    grammarRef: {
      id: "c2-subordination-nested-clauses",
      name: "Deeply Nested Syntactic Subordination (İç İçe Geçmiş Yan Cümlecikler)",
      targetFocus: "Çok katmanlı yan cümle bağlama: 'which, when disturbed by X, trigger Y that in turn accelerates Z'."
    },
    wordCount: 220,
    readTime: "3-4 dk",
    text: "The Earth system behaves not as an aggregation of linear isolated components, but as a deeply coupled, non-linear thermodynamic machine characterized by acute hysteresis. Planetary scientists identify fifteen critical tipping elements, <mark class='vocab-hl' data-word='which, when pushed beyond critical biophysical thresholds by anthropogenic forcing, trigger abrupt systemic bifurcations that in turn cascade into adjacent biomes' data-pos='nested clause' data-phonetic='/.../' data-tr='insani zorlamayla kritik eşikleri aştığında, sırayla komşu biyomlara sıçrayan ani sistemik çatallanmaları tetikleyen (iç içe geçmiş cümle)' data-def='Deeply nested relative and conditional subordination.' data-ex='Systems which, when disturbed, trigger feedback.'>which, when pushed beyond critical biophysical thresholds by anthropogenic forcing, trigger abrupt systemic bifurcations that in turn cascade into adjacent biomes</mark>. The destabilization of the Atlantic Meridional Overturning Circulation (AMOC) would perturb the West African monsoon, simultaneously accelerating Amazonian rainforest dieback into arid savannah. Because tipping cascades exhibit irreversible momentum once triggered, incremental policy responses are thermodynamic delusions; only radical planetary decarbonisation can prevent irreversible hothouse trajectory.",
    vocabularies: [
      { word: "hysteresis", pos: "noun", phonetic: "/ˌhɪs.təˈriː.sɪs/", tr: "histeresis, geçmişe bağımlılık (fizik/sistem)", def: "The phenomenon in which the value of a physical property lags behind changes in the effect causing it.", example: "Characterized by acute hysteresis." },
      { word: "bifurcations", pos: "noun", phonetic: "/ˌbaɪ.fəˈkeɪ.ʃənz/", tr: "çatallanmalar, ani yön değişimleri", def: "Splits or divisions of something into two branches or parts.", example: "Abrupt systemic bifurcations." }
    ],
    questions: [
      { q: "What happens when a tipping element is pushed beyond its threshold?", options: ["A) It repairs itself in 24 hours", "B) It triggers abrupt bifurcations that cascade into adjacent biomes", "C) Sea levels immediately drop"], answer: "B", exp: "Metinde 'trigger abrupt systemic bifurcations that in turn cascade into adjacent biomes' denir." },
      { q: "Why are incremental climate policies described as delusions in complex systems?", options: ["A) Because policies are written on paper", "B) Because tipping cascades exhibit irreversible non-linear momentum once triggered", "C) Because temperatures never change"], answer: "B", exp: "Metinde 'Because tipping cascades exhibit irreversible momentum once triggered' açıklaması yer alır." }
    ]
  },
  {
    id: "read_c2_08",
    level: "C2",
    category: "Tarihsel Teleoloji",
    title: "The Fall of Civilizations and the Trap of Diminishing Returns",
    titleTr: "Uygarlıkların Çöküşü ve Azalan Getiriler Tuzağı",
    grammarRef: {
      id: "c2-fronted-negative-participles",
      name: "Fronted Negative Participle Clauses (Öne Alınmış Olumsuz Ortaklaşa Cümlecikler)",
      targetFocus: "'Not having anticipated the systemic fragility, the empire collapsed into anarchy'."
    },
    wordCount: 220,
    readTime: "3-4 dk",
    text: "Anthropologist Joseph Tainter formulated a foundational theory regarding sociopolitical collapse: complex societies inevitably encounter diminishing marginal returns on administrative investments. <mark class='vocab-hl' data-word='Not having anticipated the exponential fiscal overhead required to maintain bureaucratic garrisons' data-pos='neg. participle' data-phonetic='/nɒt ˈhæv.ɪŋ ænˈtɪs.ɪ.peɪ.tɪd.../' data-tr='Bürokratik garnizonları sürdürmek için gereken üstel mali masrafları öngörememiş olan (olumsuz participle)' data-def='Fronted negative perfect participle showing causal error.' data-ex='Not having studied, the candidate failed.'>Not having anticipated the exponential fiscal overhead required to maintain bureaucratic garrisons</mark>, empires extract increasingly burdensome agrarian taxes from restive subject populations. Each marginal tax levy produces less net utility than its predecessor, until the society becomes too administratively brittle to absorb exogenous shocks such as pestilence, climatic droughts, or foreign invasions. <mark class='vocab-hl' data-word='Faced with insolvency, collapse is not a failure but a rational devolution' data-pos='fronted clause' data-phonetic='/feɪst wɪð.../' data-tr='İflasla yüzleşildiğinde, çöküş bir başarısızlık değil akılcı bir sadeleşmedir' data-def='Passive participle followed by paradoxical thesis.' data-ex='Faced with crisis, restructuring follows.'>Faced with insolvency, collapse is not a failure but a rational devolution</mark> toward a simpler, energetically cheaper organizational baseline.",
    vocabularies: [
      { word: "devolution", pos: "noun", phonetic: "/ˌdiː.vəˈluː.ʃən/", tr: "gerileme, sadeleşme, yetki devri", def: "Descent or degeneration to a lower or simpler state.", example: "Collapse is a rational devolution." },
      { word: "restive", pos: "adj.", phonetic: "/ˈres.tɪv/", tr: "huzursuz, başkaldıran", def: "Unable to remain still, silent, or submissive, especially because of boredom or dissatisfaction.", example: "Extract taxes from restive populations." }
    ],
    questions: [
      { q: "What does Tainter identify as the primary cause of societal collapse?", options: ["A) Lack of iron weapons", "B) Diminishing marginal returns on administrative complexity and overhead", "C) Complete loss of language"], answer: "B", exp: "Metinde 'diminishing marginal returns on administrative investments' çöküşün ana nedeni olarak tanımlanır." },
      { q: "How is 'collapse' re-conceptualized in Tainter's thesis?", options: ["A) As a total cosmic end", "B) As a rational devolution toward an energetically cheaper organizational baseline", "C) As a military victory"], answer: "B", exp: "Metinde 'a rational devolution toward a simpler, energetically cheaper organizational baseline' ifadesi geçer." }
    ]
  },
  {
    id: "read_c2_09",
    level: "C2",
    category: "Bilinç Bilimi",
    title: "The Hard Problem of Consciousness and Phenomenal Qualia",
    titleTr: "Bilinçte Zor Problem ve Fenomenal Nitelikler (Qualia)",
    grammarRef: {
      id: "c2-hypothetical-subjunctive-inversion",
      name: "Hypothetical Subjunctive Inversion with Were & Had (İleri Varsayımsal Devriklik)",
      targetFocus: "'Were cognitive scientists to map every neuron, the explanatory gap would remain insurmountable'."
    },
    wordCount: 220,
    readTime: "3-4 dk",
    text: "Philosopher David Chalmers famously bifurcated consciousness studies into the 'easy problems'—such as perceptual categorization and neural signal integration—and the intractable 'Hard Problem.' <mark class='vocab-hl' data-word='Were cognitive scientists to map every individual synaptic firing' data-pos='inv. subjunctive' data-phonetic='/wɜːr ˈkɒɡ.nɪ.tɪv.../' data-tr='Bilişsel bilimciler her bir sinaptik ateşlemeyi haritalandıracak olsa bile (devrik şart)' data-def='Inverted hypothetical subjunctive with were.' data-ex='Were we to uncover all data, doubts remain.'>Were cognitive scientists to map every individual synaptic firing</mark> across the cerebral neocortex with sub-millisecond precision, the explanatory abyss between objective electrochemistry and subjective phenomenal experience would persist untouched. Why should the physical processing of electromagnetic wavelengths around seven hundred nanometers accompany the unmistakable, qualitative redness of a rose? <mark class='vocab-hl' data-word='Had evolution prioritized functional behavior alone' data-pos='inv. past conditional' data-phonetic='/hæd ˌev.əˈluː.ʃən.../' data-tr='Evrim yalnızca işlevsel davranışa öncelik vermiş olsaydı' data-def='Inverted past unreal conditional.' data-ex='Had nature created zombies, consciousness was void.'>Had evolution prioritized functional behavior alone</mark>, nature could have engineered philosophical zombies: biological automatons executing survival computation without internal experiential glow. The persistent existence of qualia defies reductionist materialism.",
    vocabularies: [
      { word: "qualia", pos: "noun (pl.)", phonetic: "/ˈkwɑː.li.ə/", tr: "nitelikler, öznel bilinç deneyimleri", def: "Individual instances of subjective, conscious experience (e.g. the redness of red).", example: "The persistent existence of qualia." },
      { word: "bifurcated", pos: "verb (past)", phonetic: "/ˈbaɪ.fə.keɪ.tɪd/", tr: "ikiye böldü, çatallandırdı", def: "Divided into two branches or forks.", example: "Bifurcated consciousness studies into easy and hard problems." }
    ],
    questions: [
      { q: "What does 'Were cognitive scientists to map...' imply?", options: ["A) Scientists have already completed the brain map", "B) Even in the hypothetical event that every neuron were mapped, subjective experience would remain unexplained", "C) Scientists will never study the brain"], answer: "B", exp: "'Were + subject + to verb' yapısı varsayımsal bir gelecekte bile 'Hard Problem'ın çözümsüz kalacağını vurgular." },
      { q: "What are 'qualia' in philosophy of mind?", options: ["A) Quantum subatomic particles", "B) Individual instances of subjective, qualitative conscious experiences (like redness)", "C) Computer RAM chips"], answer: "B", exp: "Qualia, nesnel kimyasal süreçlerin zihinde yarattığı öznel hissiyat (örneğin kırmızının kırmızılığı) demektir." }
    ]
  },
  {
    id: "read_c2_10",
    level: "C2",
    category: "Estetik Felsefesi",
    title: "The Sublime and the Limits of Representation",
    titleTr: "Yücelik (Sublime) ve Temsilin Sınırları",
    grammarRef: {
      id: "c2-complex-clefting-thematic-focus",
      name: "Complex Pseudo-Clefting with Thematic Focus (Sözde Bölünmüş Cümle)",
      targetFocus: "'What the sublime confronts us with is not mere beauty, but the terrifying realization that...'."
    },
    wordCount: 220,
    readTime: "3-4 dk",
    text: "In Immanuel Kant's aesthetic taxonomy, beauty delights through harmonious proportion, whereas the 'Sublime' overwhelms human perceptual faculties through boundless magnitude or terrifying dynamic power. Confronting raging oceanic abysses or cosmic stellar voids, the human imagination staggers under sensory inadequacy. <mark class='vocab-hl' data-word='What the sublime confronts our finite consciousness with is' data-pos='pseudo-cleft' data-phonetic='/wɒt ðə səˈblaɪm.../' data-tr='Yüceliğin sonlu bilincimizi yüzleştirdiği şey ...-dır (pseudo-cleft)' data-def='Complex pseudo-cleft structuring thematic focus.' data-ex='What art reveals is human mortality.'>What the sublime confronts our finite consciousness with is</mark> not harmonious aesthetic gratification, but the vertigo of our physical insignificance. Yet in that very humiliation of sensory comprehension, Kant argued, reason awakens to its own transcendent moral dignity: <mark class='vocab-hl' data-word='physically dwarfed by cosmic torrents though we may be' data-pos='concession inversion' data-phonetic='/ˈfɪz.ɪ.kli dwɔːft.../' data-tr='kozmik akıntılar karşısında fiziksel olarak cüceleşmiş olsak bile' data-def='Adjective fronted with though... may.' data-ex='Frail though the mind may be, it endures.'>physically dwarfed by cosmic torrents though we may be</mark>, our cognitive capacity to conceptualize the infinite elevates humanity above blind matter.",
    vocabularies: [
      { word: "taxonomy", pos: "noun", phonetic: "/tækˈsɒn.ə.mi/", tr: "sınıflandırma, taksonomi", def: "A scheme of classification.", example: "In Kant's aesthetic taxonomy." },
      { word: "dwarfed", pos: "verb (part.)", phonetic: "/dwɔːft/", tr: "küçültülmüş, gölgede bırakılmış, cüce kalmış", def: "Caused to seem small or insignificant in comparison.", example: "Physically dwarfed by cosmic torrents." }
    ],
    questions: [
      { q: "What does 'What the sublime confronts our consciousness with is...' emphasize?", options: ["A) The cost of gallery tickets", "B) The essential philosophical difference between simple beauty and terrifying sublimity", "C) The chemical composition of paint"], answer: "B", exp: "Pseudo-cleft yapısı yücelik (sublime) kavramının insana yaşattığı varoluşsal sarsıntıyı vurgular." },
      { q: "How is 'physically dwarfed though we may be' structured grammatically?", options: ["A) As a question", "B) Fronted adjective/participle with 'though' expressing rhetorical concession (Although we may be dwarfed)", "C) As a command"], answer: "B", exp: "'Adjective + though + subject + may be' kalıbı ileri düzey ödün/zıtlık (concession) yapısıdır." }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.READING_C2 = READING_C2;
}
