// =============================================================================
// CEFR A2 READING PRACTICE PASSAGES (20 Texts: A2-01 to A2-20)
// =============================================================================

const READING_A2 = [
  {
    id: "read_a2_01",
    level: "A2",
    category: "Geçmiş Deneyimler",
    title: "A Memorable Trip to Edinburgh",
    titleTr: "Unutulmaz Bir Edinburgh Gezisi",
    grammarRef: {
      id: "a2-past-simple-regular-irregular",
      name: "Past Simple: Regular & Irregular Verbs (Geçmiş Zaman)",
      targetFocus: "Geçmişte tamamlanmış eylemlerde düzenli (-ed) ve düzensiz (went, saw, took) fiil kullanımları."
    },
    wordCount: 130,
    readTime: "1-2 dk",
    text: "Last autumn, Julian <mark class='vocab-hl' data-word='travelled' data-pos='v.' data-phonetic='/ˈtræv.əld/' data-tr='seyahat etti' data-def='Made a journey to a distant place.' data-ex='Julian travelled to Scotland.'>travelled</mark> to Scotland for a four-day excursion. He <mark class='vocab-hl' data-word='visited' data-pos='v.' data-phonetic='/ˈvɪz.ɪ.tɪd/' data-tr='ziyaret etti' data-def='Went to see a landmark or person.' data-ex='He visited ancient castles.'>visited</mark> the majestic Edinburgh Castle perched high upon an extinct volcanic rock. In the afternoon, he walked down the historic Royal Mile and bought woollen souvenirs for his parents. He <mark class='vocab-hl' data-word='ate' data-pos='v.' data-phonetic='/et/' data-tr='yedi' data-def='Past tense of eat.' data-ex='He ate traditional Scottish broth.'>ate</mark> traditional Scottish barley soup at a historic tavern. Although the evening air was chilly, he enjoyed listening to traditional bagpipe melodies performed by local street buskers.",
    vocabularies: [
      { word: "excursion", pos: "noun", phonetic: "/ɪkˈskɜː.ʃən/", tr: "kısa gezi, tur", def: "A short journey or trip, especially one taken as a leisure activity.", example: "He went on a four-day excursion." },
      { word: "majestic", pos: "adj.", phonetic: "/məˈdʒes.tɪk/", tr: "görkemli, haşmetli", def: "Having impressive beauty or dignity.", example: "The majestic Edinburgh Castle stood on the rock." },
      { word: "buskers", pos: "noun", phonetic: "/ˈbʌs.kərz/", tr: "sokak çalgıcıları", def: "People who perform music or entertain in a public place for donations.", example: "Street buskers played bagpipes." }
    ],
    questions: [
      { q: "Where was Edinburgh Castle built?", options: ["A) On a river barge", "B) On an extinct volcanic rock", "C) Under a valley tunnel"], answer: "B", exp: "Metinde 'perched high upon an extinct volcanic rock' denmiştir." },
      { q: "What did Julian buy for his parents?", options: ["A) Woollen souvenirs", "B) A silver bagpipe", "C) Scottish cheese"], answer: "A", exp: "Metinde 'bought woollen souvenirs for his parents' geçer." }
    ]
  },
  {
    id: "read_a2_02",
    level: "A2",
    category: "Geçmişte Devam Eden Olaylar",
    title: "The Power Outage",
    titleTr: "Elektrik Kesintisi",
    grammarRef: {
      id: "a2-past-continuous",
      name: "Past Continuous Tense (Geçmişte Süregelen Zaman)",
      targetFocus: "Geçmişte belirli bir anda devam etmekte olan 'was/were + verb-ing' eylemleri."
    },
    wordCount: 135,
    readTime: "1-2 dk",
    text: "At eight o'clock yesterday evening, a violent thunderstorm struck the valley. While Clara <mark class='vocab-hl' data-word='was cooking' data-pos='v. phrase' data-phonetic='/wɒz ˈkʊk.ɪŋ/' data-tr='yemek pişiriyordu' data-def='Continuous action in the past.' data-ex='Clara was cooking vegetable stew.'>was cooking</mark> vegetable stew in the kitchen, her younger brother <mark class='vocab-hl' data-word='was finishing' data-pos='v. phrase' data-phonetic='/wɒz ˈfɪn.ɪ.ʃɪŋ/' data-tr='tamamlıyordu' data-def='Ongoing past process.' data-ex='He was finishing his homework.'>was finishing</mark> his geography assignment online. Suddenly, lightning illuminated the dark horizon, and all electric lights went out. While the thunder was rumbling loudly outside, their father found two wax candles and lit them carefully. They sat peacefully around the wooden dining table and told entertaining family folklore stories until the electric supply was restored.",
    vocabularies: [
      { word: "violent", pos: "adj.", phonetic: "/ˈvaɪə.lənt/", tr: "şiddetli, sert", def: "Using or involving great physical force.", example: "A violent thunderstorm struck the valley." },
      { word: "rumbling", pos: "verb (part.)", phonetic: "/ˈrʌm.blɪŋ/", tr: "gürleyen, uğuldayan", def: "Making a continuous deep, resonant sound.", example: "Thunder was rumbling outside." },
      { word: "restored", pos: "verb (past)", phonetic: "/rɪˈstɔːd/", tr: "yeniden sağlandı, geri geldi", def: "Brought back into existence or use.", example: "The electric supply was restored." }
    ],
    questions: [
      { q: "What was Clara doing when the power went out?", options: ["A) Reading a book", "B) Cooking vegetable stew", "C) Sleeping"], answer: "B", exp: "Metinde 'Clara was cooking vegetable stew in the kitchen' denmiştir." },
      { q: "How did the family spend time in the dark?", options: ["A) They panicked", "B) They told entertaining family folklore stories", "C) They went out into the storm"], answer: "B", exp: "Metinde 'told entertaining family folklore stories' geçer." }
    ]
  },
  {
    id: "read_a2_03",
    level: "A2",
    category: "Gelecek Planları",
    title: "Oliver's Environmental Project",
    titleTr: "Oliver'ın Çevre Projesi",
    grammarRef: {
      id: "a2-be-going-to-future",
      name: "Be Going to (Niyet ve Önceden Planlanmış Gelecek)",
      targetFocus: "Kişisel kararlar ve önceden planlanmış hedefler için 'am/is/are going to + verb'."
    },
    wordCount: 125,
    readTime: "1-2 dk",
    text: "Oliver is passionate about marine conservation. Next Saturday, he <mark class='vocab-hl' data-word='is going to participate' data-pos='v. phrase' data-phonetic='/ɪz ˈɡəʊ.ɪŋ tuː pɑːˈtɪs.ɪ.peɪt/' data-tr='katılacak (planlı)' data-def='Intends to join an event.' data-ex='He is going to participate in a cleanup.'>is going to participate</mark> in a voluntary beach cleanup organised by the town council. He and forty university students <mark class='vocab-hl' data-word='are going to collect' data-pos='v. phrase' data-phonetic='/ɑːr ˈɡəʊ.ɪŋ tuː kəˈlekt/' data-tr='toplayacaklar' data-def='Plan to gather items.' data-ex='They are going to collect plastics.'>are going to collect</mark> plastic debris and discarded fishing nets along five kilometres of coastal shoreline. Afterwards, a marine scientist is going to give a presentation about protecting endangered sea turtles from microplastic contamination.",
    vocabularies: [
      { word: "conservation", pos: "noun", phonetic: "/ˌkɒn.səˈveɪ.ʃən/", tr: "doğayı koruma", def: "The preservation and protection of the environment.", example: "He is passionate about marine conservation." },
      { word: "debris", pos: "noun", phonetic: "/ˈdeb.riː/", tr: "döküntü, atık kalıntıları", def: "Scattered fragments, typically of rubbish or something ruined.", example: "They collect plastic debris along the coast." }
    ],
    questions: [
      { q: "What are the students going to collect?", options: ["A) Wild oysters", "B) Plastic debris and discarded fishing nets", "C) Sand samples"], answer: "B", exp: "Metinde 'plastic debris and discarded fishing nets' geçer." },
      { q: "Who will give a presentation after the cleanup?", options: ["A) A local mayor", "B) A marine scientist", "C) A boat captain"], answer: "B", exp: "Metinde 'a marine scientist is going to give a presentation' denir." }
    ]
  },
  {
    id: "read_a2_04",
    level: "A2",
    category: "Karşılaştırmalar",
    title: "City Life versus Village Life",
    titleTr: "Şehir Yaşamı Köy Yaşamına Karşı",
    grammarRef: {
      id: "a2-comparatives-superlatives",
      name: "Comparatives & Superlatives (Karşılaştırma ve Üstünlük Dereceleri)",
      targetFocus: "İki durumu kıyaslayan '-er than / more... than' ve en üstün 'the -est / the most'."
    },
    wordCount: 140,
    readTime: "1-2 dk",
    text: "Living in a capital metropolis is noticeably <mark class='vocab-hl' data-word='more expensive than' data-pos='adj. phrase' data-phonetic='/mɔːr ɪkˈspen.sɪv ðæn/' data-tr='daha pahalıdır' data-def='Comparative form indicating higher cost.' data-ex='Rent is more expensive in London.'>more expensive than</mark> residing in a tranquil countryside village. Rental prices are considerably higher, and public transport is often <mark class='vocab-hl' data-word='more crowded' data-pos='adj. phrase' data-phonetic='/mɔːr ˈkraʊ.dɪd/' data-tr='daha kalabalık' data-def='Having more people.' data-ex='Trains are more crowded at rush hour.'>more crowded</mark> during morning rush hours. On the other hand, metropolitan cities provide the <mark class='vocab-hl' data-word='most diverse' data-pos='adj. phrase' data-phonetic='/ðə məʊst daɪˈvɜːs/' data-tr='en çeşitli' data-def='Superlative form showing greatest variety.' data-ex='London has the most diverse cuisine.'>most diverse</mark> career opportunities and international cultural exhibitions. In contrast, village life is much quieter and offers cleaner atmospheric air, making it the healthiest alternative for elderly retirees seeking peaceful retirement.",
    vocabularies: [
      { word: "tranquil", pos: "adj.", phonetic: "/ˈtræŋ.kwɪl/", tr: "dingin, sakin, huzurlu", def: "Free from disturbance; calm.", example: "Residing in a tranquil countryside village." },
      { word: "metropolis", pos: "noun", phonetic: "/məˈtrɒp.əl.ɪs/", tr: "büyükşehir, anakent", def: "A very large and densely populated city.", example: "Living in a capital metropolis is exciting." },
      { word: "retirees", pos: "noun", phonetic: "/rɪˌtaɪəˈriːz/", tr: "emekliler", def: "People who have stopped working permanently.", example: "Healthiest alternative for elderly retirees." }
    ],
    questions: [
      { q: "Why do some people prefer village life?", options: ["A) It has larger skyscrapers", "B) It is quieter and offers cleaner air", "C) It has cheaper airports"], answer: "B", exp: "Metinde 'village life is much quieter and offers cleaner atmospheric air' denir." },
      { q: "What is an advantage of a metropolis?", options: ["A) Zero traffic", "B) The most diverse career opportunities", "C) Complete silence"], answer: "B", exp: "Metinde 'most diverse career opportunities' açıkça belirtilmiştir." }
    ]
  },
  {
    id: "read_a2_05",
    level: "A2",
    category: "Gereklilik & Kurallar",
    title: "Airport Security Guidelines",
    titleTr: "Havalimanı Güvenlik Talimatları",
    grammarRef: {
      id: "a2-modals-obligation",
      name: "Modals of Obligation: Must & Have to (Zorunluluk)",
      targetFocus: "Dışsal ve yasal kuralları belirten 'have to / must' ve yasak belirten 'must not'."
    },
    wordCount: 130,
    readTime: "1-2 dk",
    text: "Before international travellers pass through passport control, they <mark class='vocab-hl' data-word='must display' data-pos='v. phrase' data-phonetic='/mʌst dɪˈspleɪ/' data-tr='göstermek zorundadır' data-def='Strong obligation or regulation.' data-ex='Passengers must display valid passports.'>must display</mark> a valid biometric passport and an approved boarding pass. All passengers <mark class='vocab-hl' data-word='have to place' data-pos='v. phrase' data-phonetic='/hæv tuː pleɪs/' data-tr='koymak zorundadırlar' data-def='External rule requirement.' data-ex='They have to place laptops in bins.'>have to place</mark> their electronic devices, metal watches, and liquids into plastic inspection trays. Crucially, travellers <mark class='vocab-hl' data-word='must not carry' data-pos='v. phrase' data-phonetic='/mʌst nɒt ˈkær.i/' data-tr='taşımamalıdırlar (yasaktır)' data-def='Strict prohibition.' data-ex='You must not carry sharp objects.'>must not carry</mark> sharp blades or liquids exceeding one hundred millilitres in their carry-on backpacks. Adhering to these aviation security regulations ensures that flights depart safely and punctually.",
    vocabularies: [
      { word: "adhering", pos: "verb (part.)", phonetic: "/ədˈhɪə.rɪŋ/", tr: "bağlı kalmak, uymak", def: "Strictly following or complying with rules.", example: "Adhering to security regulations is essential." },
      { word: "punctually", pos: "adv.", phonetic: "/ˈpʌŋk.tʃu.ə.li/", tr: "dakik bir şekilde, vaktinde", def: "At the agreed or proper time; promptly.", example: "Ensures flights depart punctually." }
    ],
    questions: [
      { q: "What maximum volume of liquid is allowed in carry-on bags?", options: ["A) 500 ml", "B) 100 ml", "C) 1 litre"], answer: "B", exp: "Metinde 'liquids exceeding one hundred millilitres' yasaklanmıştır." },
      { q: "Where must laptops and watches be placed during inspection?", options: ["A) In checked luggage", "B) Into plastic inspection trays", "C) In the overhead bin"], answer: "B", exp: "Metinde 'place electronic devices into plastic inspection trays' denir." }
    ]
  },
  {
    id: "read_a2_06",
    level: "A2",
    category: "Tavsiyeler & Sağlık",
    title: "Advice for Better Sleep",
    titleTr: "Daha İyi Uyku İçin Tavsiyeler",
    grammarRef: {
      id: "a2-modal-should-advice",
      name: "Modal Verb: Should / Shouldn't (Öneri ve Tavsiye)",
      targetFocus: "İdeal davranışlar ve sağlık tavsiyeleri için 'should / shouldn't + verb'."
    },
    wordCount: 125,
    readTime: "1-2 dk",
    text: "Modern medical specialists emphasize that adults need seven to eight hours of sound restorative sleep every night. If you suffer from insomnia, you <mark class='vocab-hl' data-word='should avoid' data-pos='v. phrase' data-phonetic='/ʃʊd əˈvɔɪd/' data-tr='kaçınmalısınız' data-def='Advice to not do something.' data-ex='You should avoid caffeine at night.'>should avoid</mark> caffeinated beverages after four o'clock in the afternoon. Furthermore, individuals <mark class='vocab-hl' data-word='should not stare' data-pos='v. phrase' data-phonetic='/ʃʊd nɒt steər/' data-tr='dik dik bakmamalıdır' data-def='Recommendation against bright screens.' data-ex='You should not stare at blue screens.'>should not stare</mark> at luminous smartphone screens right before bedtime because blue light suppresses melatonin production. Instead, you <mark class='vocab-hl' data-word='should read' data-pos='v. phrase' data-phonetic='/ʃʊd riːd/' data-tr='okumalısınız' data-def='Recommended relaxing activity.' data-ex='You should read a printed paperback book.'>should read</mark> a printed book or listen to calming acoustic music to unwind your nervous system.",
    vocabularies: [
      { word: "restorative", pos: "adj.", phonetic: "/rɪˈstɔː.rə.tɪv/", tr: "yenileyici, dinlendirici", def: "Having the ability to restore health or energy.", example: "Sound restorative sleep every night." },
      { word: "suppresses", pos: "verb", phonetic: "/səˈpres.ɪz/", tr: "baskılar, engeller", def: "Prevents the development or release of something.", example: "Blue light suppresses melatonin." }
    ],
    questions: [
      { q: "Why should people avoid screens before sleeping?", options: ["A) They waste electricity", "B) Blue light suppresses melatonin production", "C) Phones break easily"], answer: "B", exp: "Metinde 'blue light suppresses melatonin production' açıklaması yer alır." },
      { q: "What relaxing activity is recommended?", options: ["A) Running a marathon", "B) Reading a printed book or relaxing music", "C) Drinking espresso"], answer: "B", exp: "Metinde 'read a printed book or listen to calming music' tavsiye edilmektedir." }
    ]
  },
  {
    id: "read_a2_07",
    level: "A2",
    category: "Geçmiş Alışkanlıklar",
    title: "Life Before Smartphones",
    titleTr: "Akıllı Telefonlardan Önce Yaşam",
    grammarRef: {
      id: "a2-used-to-past-habits",
      name: "Used to (Geçmişteki Alışkanlıklar ve Değişen Durumlar)",
      targetFocus: "Eskiden yapılıp artık terkedilmiş eylemler için 'used to + fiil yalın hali'."
    },
    wordCount: 135,
    readTime: "1-2 dk",
    text: "Thirty years ago, communication technologies were remarkably different. People <mark class='vocab-hl' data-word='used to write' data-pos='v. phrase' data-phonetic='/juːst tuː raɪt/' data-tr='yazarlardı (eskiden)' data-def='Past habit no longer continued.' data-ex='People used to write handwritten letters.'>used to write</mark> handwritten postal letters on fine paper and wait patiently for postal carriers to deliver responses. Families <mark class='vocab-hl' data-word='used to gather' data-pos='v. phrase' data-phonetic='/juːst tuː ˈɡæð.ər/' data-tr='toplanırlardı' data-def='Regular past family activity.' data-ex='They used to gather around radio sets.'>used to gather</mark> around a single television set in the living room every evening to watch news broadcasts together. People did not use to check digital screens every five minutes. Nowadays, social networking apps enable instantaneous messaging, but many nostalgically miss the intimate authenticity that handwritten correspondence once embodied.",
    vocabularies: [
      { word: "instantaneous", pos: "adj.", phonetic: "/ˌɪn.stənˈteɪ.ni.əs/", tr: "anlık, hemen olan", def: "Occurring or done in an instant.", example: "Apps enable instantaneous messaging." },
      { word: "authenticity", pos: "noun", phonetic: "/ˌɔː.θenˈtɪs.ə.ti/", tr: "özgünlük, samimiyet", def: "The quality of being real, genuine, and authentic.", example: "Miss the intimate authenticity of letters." }
    ],
    questions: [
      { q: "How did people communicate across distances 30 years ago?", options: ["A) By holographic video", "B) By writing handwritten postal letters", "C) By neural implants"], answer: "B", exp: "Metinde 'used to write handwritten postal letters' denmiştir." },
      { q: "What does 'used to write' indicate?", options: ["A) An action continuing today", "B) A past habit that no longer occurs", "C) A future intention"], answer: "B", exp: "'Used to' geçmişteki ama artık sürmeyen alışkanlıkları ifade eder." }
    ]
  },
  {
    id: "read_a2_08",
    level: "A2",
    category: "Şart Cümleleri",
    title: "Planning an Outdoor Picnic",
    titleTr: "Açık Hava Pikniği Planlamak",
    grammarRef: {
      id: "a2-first-conditional",
      name: "First Conditional: Type 1 (Olası Gelecek Şartı)",
      targetFocus: "Gerçekleşmesi muhtemel şartlarda 'If + Present Simple, will + Verb' kalıbı."
    },
    wordCount: 130,
    readTime: "1-2 dk",
    text: "The student society is organizing an excursion to Windsor Great Park. If the weather <mark class='vocab-hl' data-word='is sunny' data-pos='phrase' data-phonetic='/ɪz ˈsʌn.i/' data-tr='güneşli olursa' data-def='Condition in present simple.' data-ex='If it is sunny tomorrow...'>is sunny</mark> this Saturday, we <mark class='vocab-hl' data-word='will rent' data-pos='v. phrase' data-phonetic='/wɪl rent/' data-tr='kiralayacağız' data-def='Future outcome of condition.' data-ex='We will rent rowing boats.'>will rent</mark> wooden rowing boats on the Thames River. If rain showers fall unexpectedly, we <mark class='vocab-hl' data-word='will take refuge' data-pos='v. phrase' data-phonetic='/wɪl teɪk ˈref.juːdʒ/' data-tr='sığınacağız' data-def='Will seek shelter.' data-ex='We will take refuge in the conservatory.'>will take refuge</mark> inside the royal botanical conservatory. Each participant will bring home-baked pastries and fresh fruit juice. If everyone collaborates responsibly, the outdoor gathering will be an unforgettable social success.",
    vocabularies: [
      { word: "refuge", pos: "noun", phonetic: "/ˈref.juːdʒ/", tr: "sığınak, korunma", def: "Shelter or protection from danger or weather.", example: "We will take refuge inside the conservatory." },
      { word: "collaborates", pos: "verb", phonetic: "/kəˈlæb.ə.reɪts/", tr: "iş birliği yapar", def: "Works cooperatively with others.", example: "If everyone collaborates responsibly." }
    ],
    questions: [
      { q: "What will they do if it is sunny?", options: ["A) Stay inside dormitories", "B) Rent wooden rowing boats on the river", "C) Cancel the event"], answer: "B", exp: "Metinde 'we will rent wooden rowing boats on the Thames River' denmiştir." },
      { q: "Where will they go if it rains?", options: ["A) Into the botanical conservatory", "B) To the airport", "C) Into a subterranean cave"], answer: "A", exp: "Metinde 'take refuge inside the royal botanical conservatory' belirtilir." }
    ]
  },
  {
    id: "read_a2_09",
    level: "A2",
    category: "Deneyimler & Geçmiş",
    title: "Have You Ever Seen the Northern Lights?",
    titleTr: "Hiç Kuzey Işıklarını Gördünüz mü?",
    grammarRef: {
      id: "a2-present-perfect-ever-never",
      name: "Present Perfect Simple: Ever & Never (Hayat Boyu Deneyimler)",
      targetFocus: "Zamanı belirsiz yaşam tecrübelerinde 'have/has + ever/never + V3' kalıbı."
    },
    wordCount: 130,
    readTime: "1-2 dk",
    text: "<mark class='vocab-hl' data-word='Have you ever witnessed' data-pos='v. phrase' data-phonetic='/hæv juː ˈev.ər ˈwɪt.nəst/' data-tr='hiç şahit oldunuz mu' data-def='Asking about lifetime experience.' data-ex='Have you ever witnessed auroras?'>Have you ever witnessed</mark> the ethereal dance of the Aurora Borealis? Maya is an astronomy enthusiast, but she has <mark class='vocab-hl' data-word='never seen' data-pos='v. phrase' data-phonetic='/ˈnev.ər siːn/' data-tr='hiç görmedi' data-def='Zero lifetime experience.' data-ex='She has never seen polar lights.'>never seen</mark> them in person. This winter, she has booked a travel expedition to Tromsø in northern Norway. She has bought insulated thermal gloves and a professional camera tripod. Many seasoned explorers have described polar auroras as the most breath-taking celestial spectacle on Earth, and Maya hopes that solar activity will reward her patience.",
    vocabularies: [
      { word: "ethereal", pos: "adj.", phonetic: "/iˈθɪə.ri.əl/", tr: "ruhani, büyüleyici, peri masalı gibi", def: "Extremely delicate and light in a way that seems not of this world.", example: "The ethereal dance of the Northern Lights." },
      { word: "celestial", pos: "adj.", phonetic: "/sɪˈles.ti.əl/", tr: "göksel, semavi", def: "Belonging or relating to heaven or space.", example: "Most breath-taking celestial spectacle." }
    ],
    questions: [
      { q: "Where is Maya travelling to see the auroras?", options: ["A) To Cairo", "B) To Tromsø in Norway", "C) To Sydney"], answer: "B", exp: "Metinde 'travel expedition to Tromsø in northern Norway' denir." },
      { q: "Has Maya seen the Northern Lights before?", options: ["A) Yes, multiple times", "B) No, she has never seen them in person", "C) Only from an airplane"], answer: "B", exp: "Metinde 'she has never seen them in person' ifadesi yer alır." }
    ]
  },
  {
    id: "read_a2_10",
    level: "A2",
    category: "İlgi Zamirleri",
    title: "The Inventors Who Changed the World",
    titleTr: "Dünyayı Değiştiren Mucitler",
    grammarRef: {
      id: "a2-defining-relative-clauses",
      name: "Defining Relative Clauses: Who, Which, That (İlgi Cümlecikleri)",
      targetFocus: "İnsanları niteleyen 'who/that' ve nesneleri/kavramları niteleyen 'which/that'."
    },
    wordCount: 135,
    readTime: "1-2 dk",
    text: "Throughout history, visionary individuals <mark class='vocab-hl' data-word='who possessed' data-pos='rel. phrase' data-phonetic='/huː pəˈzest/' data-tr='sahip olan (kişiler)' data-def='Relative clause modifying people.' data-ex='Inventors who possessed curiosity.'>who possessed</mark> boundless curiosity transformed civilization. Alexander Graham Bell was an engineer <mark class='vocab-hl' data-word='who patented' data-pos='rel. phrase' data-phonetic='/huː ˈpæt.ən.tɪd/' data-tr='patentini alan' data-def='Modifying person.' data-ex='Bell, who patented the telephone.'>who patented</mark> the acoustic telephone. Similarly, the steam locomotive was a revolutionary engine <mark class='vocab-hl' data-word='which accelerated' data-pos='rel. phrase' data-phonetic='/wɪtʃ əkˈsel.ə.reɪ.tɪd/' data-tr='hızlandıran (makine)' data-def='Relative clause modifying a thing.' data-ex='An engine which accelerated commerce.'>which accelerated</mark> international industrial trade across continents. Today, software engineers develop computer algorithms that diagnose medical illnesses swiftly. Without pioneers who dare to challenge accepted scientific orthodoxy, human technological progress would stagnate completely.",
    vocabularies: [
      { word: "visionary", pos: "adj.", phonetic: "/ˈvɪʒ.ən.ər.i/", tr: "vizyoner, ileri görüşlü", def: "Thinking about or planning the future with wisdom.", example: "Visionary individuals changed the world." },
      { word: "stagnate", pos: "verb", phonetic: "/stæɡˈneɪt/", tr: "durgunlaşmak, duraklamak", def: "Cease to develop; become inactive or dull.", example: "Progress would stagnate completely." }
    ],
    questions: [
      { q: "Which relative pronoun is used for Alexander Graham Bell?", options: ["A) Which", "B) Who", "C) Where"], answer: "B", exp: "İnsanlar için 'who' ilgi zamiri kullanılır." },
      { q: "What did the steam locomotive accelerate?", options: ["A) Rocket launches", "B) International industrial trade across continents", "C) Digital communications"], answer: "B", exp: "Metinde 'accelerated international industrial trade across continents' denir." }
    ]
  },
  {
    id: "read_a2_11",
    level: "A2",
    category: "Amaç Bildirme",
    title: "Why People Learn Languages",
    titleTr: "İnsanlar Neden Dil Öğrenir",
    grammarRef: {
      id: "a2-infinitive-purpose",
      name: "Infinitive of Purpose: To + Verb (Amaç Belirtme)",
      targetFocus: "Bir eylemin yapılma gayesini açıklayan 'to + fiil' (yapmak amacıyla) yapısı."
    },
    wordCount: 130,
    readTime: "1-2 dk",
    text: "Millions of young adults enroll in bilingual language academies worldwide. Many study foreign idioms <mark class='vocab-hl' data-word='to broaden' data-pos='inf. phrase' data-phonetic='/tuː ˈbrɔː.dən/' data-tr='genişletmek amacıyla' data-def='In order to expand.' data-ex='They study to broaden horizons.'>to broaden</mark> their academic horizons and secure prestigious scholarships abroad. Business executives learn Mandarin or Spanish <mark class='vocab-hl' data-word='to negotiate' data-pos='inf. phrase' data-phonetic='/tuː nəˈɡəʊ.ʃi.eɪt/' data-tr='müzakere etmek için' data-def='In order to conduct negotiations.' data-ex='To negotiate international contracts.'>to negotiate</mark> commercial partnerships directly without third-party translators. Others travel overseas <mark class='vocab-hl' data-word='to immerse' data-pos='inf. phrase' data-phonetic='/tuː ɪˈmɜːs/' data-tr='kendini kaptırmak / içine dalmak için' data-def='In order to involve deeply.' data-ex='To immerse themselves in local cultures.'>to immerse</mark> themselves in authentic culinary traditions. Whatever the initial incentive, acquiring a new language reshapes cognitive neural pathways and builds intercultural bridges.",
    vocabularies: [
      { word: "prestigious", pos: "adj.", phonetic: "/preˈstɪdʒ.əs/", tr: "saygın, itibarlı", def: "Inspiring respect and admiration; having high status.", example: "Secure prestigious scholarships abroad." },
      { word: "incentive", pos: "noun", phonetic: "/ɪnˈsen.tɪv/", tr: "teşvik, güdüleyici unsur", def: "A thing that motivates or encourages someone.", example: "Whatever the initial incentive may be." }
    ],
    questions: [
      { q: "Why do executives learn Mandarin or Spanish?", options: ["A) To play games", "B) To negotiate commercial partnerships directly", "C) To write poetry"], answer: "B", exp: "Metinde 'to negotiate commercial partnerships directly' belirtilir." },
      { q: "What does 'to broaden' express grammatically?", options: ["A) The purpose or goal of the action", "B) A past habit", "C) A passive state"], answer: "A", exp: "'Infinitive of purpose' eylemin amacını bildirir." }
    ]
  },
  {
    id: "read_a2_12",
    level: "A2",
    category: "Ölçü ve Derece",
    title: "Preparing for a Marathon",
    titleTr: "Maratona Hazırlanmak",
    grammarRef: {
      id: "a2-too-enough",
      name: "Too and Enough (Aşırılık ve Yeterlilik Dereceleri)",
      targetFocus: "Aşırı olumsuzluk bildiren 'too + adj' ve yeterlilik belirten 'adj + enough / enough + noun'."
    },
    wordCount: 130,
    readTime: "1-2 dk",
    text: "Training for a forty-two-kilometre footrace demands strict discipline. Beginners frequently fail because they run <mark class='vocab-hl' data-word='too fast' data-pos='adv. phrase' data-phonetic='/tuː fɑːst/' data-tr='aşırı hızlı' data-def='Excessively fast beyond capacity.' data-ex='Running too fast leads to fatigue.'>too fast</mark> during their preliminary practice sessions. If muscles are not resilient <mark class='vocab-hl' data-word='enough' data-pos='adv.' data-phonetic='/ɪˈnʌf/' data-tr='yeterince' data-def='Sufficiently to meet requirements.' data-ex='Muscles are not strong enough.'>enough</mark>, painful tendon inflammation inevitably occurs. Athletes must ensure that their bodies receive <mark class='vocab-hl' data-word='enough hydration' data-pos='noun phrase' data-phonetic='/ɪˈnʌf haɪˈdreɪ.ʃən/' data-tr='yeterli sıvı alımı' data-def='Sufficient water intake.' data-ex='Drink enough hydration electrolytes.'>enough hydration</mark> and nutrient-dense fuel before long runs. Never attempt strenuous workouts when you feel too exhausted, as proper recovery is just as vital as physical exertion.",
    vocabularies: [
      { word: "resilient", pos: "adj.", phonetic: "/rɪˈzɪl.i.ənt/", tr: "dayanıklı, dirençli", def: "Able to withstand or recover quickly from difficult conditions.", example: "If muscles are not resilient enough." },
      { word: "strenuous", pos: "adj.", phonetic: "/ˈstren.ju.əs/", tr: "ağır, yorucu, yoğun çaba gerektiren", def: "Requiring or using great exertion.", example: "Never attempt strenuous workouts while tired." }
    ],
    questions: [
      { q: "Where does 'enough' appear with an adjective?", options: ["A) Before the adjective", "B) After the adjective (resilient enough)", "C) At the start of the sentence"], answer: "B", exp: "Sıfatlardan sonra 'adjective + enough' (resilient enough) kullanılır." },
      { q: "What causes injuries in beginner runners?", options: ["A) Running too fast too early", "B) Drinking water", "C) Sleeping 8 hours"], answer: "A", exp: "Metinde 'they run too fast during preliminary sessions' denir." }
    ]
  },
  {
    id: "read_a2_13",
    level: "A2",
    category: "Miktar Zarfları",
    title: "Marine Life in Danger",
    titleTr: "Deniz Yaşamı Tehlikede",
    grammarRef: {
      id: "a2-quantifiers-much-many",
      name: "Quantifiers: Much, Many, A lot of, A few, A little (Miktar Belirteçleri)",
      targetFocus: "Sayılamayanlarla 'much / a little', sayılabilenlerle 'many / a few' kullanımı."
    },
    wordCount: 135,
    readTime: "1-2 dk",
    text: "Industrial pollution is devastating ocean ecosystems. Every year, <mark class='vocab-hl' data-word='many marine species' data-pos='noun phrase' data-phonetic='/ˈmen.i məˈriːn ˈspiː.ʃiːz/' data-tr='birçok deniz türü' data-def='Used with countable plural nouns.' data-ex='Many species ingest plastic.'>many marine species</mark> ingest toxic microplastics floating near surface waters. Chemical factories release <mark class='vocab-hl' data-word='too much industrial waste' data-pos='noun phrase' data-phonetic='/tuː mʌtʃ ɪnˈdʌs.tri.əl weɪst/' data-tr='aşırı miktarda sanayi atığı' data-def='Used with uncountable nouns.' data-ex='Too much waste damages corals.'>too much industrial waste</mark> into coastal estuaries. Fortunately, <mark class='vocab-hl' data-word='a few countries' data-pos='noun phrase' data-phonetic='/ə fjuː ˈkʌn.triz/' data-tr='birkaç ülke (olumlu)' data-def='Small number of countable items.' data-ex='A few countries have banned bags.'>a few countries</mark> have legislated strict bans against single-use synthetic packaging. However, we have only <mark class='vocab-hl' data-word='a little time' data-pos='noun phrase' data-phonetic='/ə ˈlɪt.əl taɪm/' data-tr='azıcık zaman' data-def='Small amount of uncountable noun.' data-ex='A little time remains to act.'>a little time</mark> left before coral bleaching becomes completely irreversible.",
    vocabularies: [
      { word: "devastating", pos: "adj.", phonetic: "/ˈdev.ə.steɪ.tɪŋ/", tr: "yıkıcı, harap edici", def: "Highly destructive or damaging.", example: "Pollution is devastating ocean habitats." },
      { word: "estuaries", pos: "noun", phonetic: "/ˈes.tʃʊə.riz/", tr: "nehir ağızları, haliçler", def: "Tidal mouths of large rivers where tide meets stream.", example: "Released into coastal estuaries." }
    ],
    questions: [
      { q: "Which quantifier is paired with 'industrial waste' (uncountable)?", options: ["A) Many", "B) Too much", "C) A few"], answer: "B", exp: "Sayılamayan 'waste' için 'too much' kullanılır." },
      { q: "What have a few countries done to help?", options: ["A) Closed down harbors", "B) Banned single-use synthetic packaging", "C) Drained coastal bays"], answer: "B", exp: "Metinde 'banned single-use synthetic packaging' denir." }
    ]
  },
  {
    id: "read_a2_14",
    level: "A2",
    category: "Dönüşlü Zamirler",
    title: "Learning by Yourself",
    titleTr: "Kendi Kendine Öğrenmek",
    grammarRef: {
      id: "a2-reflexive-pronouns",
      name: "Reflexive Pronouns (Dönüşlülük Zamirleri: Myself, Yourself, Themselves)",
      targetFocus: "Özne ve nesnenin aynı kişiyi temsil ettiği 'myself, himself, themselves' durumları."
    },
    wordCount: 130,
    readTime: "1-2 dk",
    text: "Autodidacts are passionate learners who educate <mark class='vocab-hl' data-word='themselves' data-pos='pron.' data-phonetic='/ðəmˈselvz/' data-tr='kendilerini' data-def='Reflexive pronoun for they.' data-ex='They teach themselves coding.'>themselves</mark> without formal classroom instructors. When Benjamin Franklin was a young printer's apprentice, he taught <mark class='vocab-hl' data-word='himself' data-pos='pron.' data-phonetic='/hɪmˈself/' data-tr='kendine / kendi kendini' data-def='Reflexive pronoun for he.' data-ex='He taught himself prose writing.'>himself</mark> advanced mathematics, philosophical debate, and multiple foreign languages. When you solve complicated engineering puzzles <mark class='vocab-hl' data-word='by yourself' data-pos='phrase' data-phonetic='/baɪ jɔːˈself/' data-tr='kendi başına, tek başına' data-def='Alone without outside assistance.' data-ex='You completed it by yourself.'>by yourself</mark>, your intellectual self-confidence increases dramatically. Students should take pride in their independent cognitive discoveries rather than relying exclusively on spoon-fed academic lectures.",
    vocabularies: [
      { word: "autodidacts", pos: "noun", phonetic: "/ˌɔː.təʊˈdaɪ.dækts/", tr: "kendi kendini yetiştirmiş kişiler", def: "Self-taught persons.", example: "Autodidacts educate themselves." },
      { word: "apprentice", pos: "noun", phonetic: "/əˈpren.tɪs/", tr: "çırak, stajyer", def: "A person learning a trade from a skilled employer.", example: "When he was a printer's apprentice." }
    ],
    questions: [
      { q: "What did Benjamin Franklin teach himself?", options: ["A) Deep-sea diving", "B) Advanced mathematics and foreign languages", "C) Culinary baking"], answer: "B", exp: "Metinde 'advanced mathematics and multiple foreign languages' denir." },
      { q: "What does 'by yourself' mean?", options: ["A) With a huge team", "B) Alone without assistance", "C) In a foreign country"], answer: "B", exp: "'By yourself' kendi başına, tek başına demektir." }
    ]
  },
  {
    id: "read_a2_15",
    level: "A2",
    category: "Hareket Edatları",
    title: "The Mountain Expedition",
    titleTr: "Dağ Tırmanış Seferi",
    grammarRef: {
      id: "a2-prepositions-movement",
      name: "Prepositions of Movement: Into, Through, Across, Along (Hareket Yönü)",
      targetFocus: "Fiziksel yer değiştirmeyi belirten 'through the forest, across the bridge, into the cave'."
    },
    wordCount: 135,
    readTime: "1-2 dk",
    text: "At dawn, four alpine mountaineers hiked <mark class='vocab-hl' data-word='through the dense pine forest' data-pos='prep. phrase' data-phonetic='/θruː ðə dens paɪn ˈfɒr.ɪst/' data-tr='yoğun çam ormanının içinden' data-def='Movement in a three-dimensional space.' data-ex='They walked through the forest.'>through the dense pine forest</mark> toward the base camp. They walked steadily <mark class='vocab-hl' data-word='along the winding river' data-pos='prep. phrase' data-phonetic='/əˈlɒŋ ðə ˈwaɪn.dɪŋ ˈrɪv.ər/' data-tr='kıvrımlı nehir boyunca' data-def='Movement following a line.' data-ex='Walking along the river bank.'>along the winding river</mark> until they reached a narrow suspension bridge. Carefully, they stepped <mark class='vocab-hl' data-word='across the deep chasm' data-pos='prep. phrase' data-phonetic='/əˈkrɒs ðə diːp ˈkæz.əm/' data-tr='derin uçurumun üzerinden karşıya' data-def='Movement from one side to another.' data-ex='Crossing across the deep canyon.'>across the deep chasm</mark> and entered <mark class='vocab-hl' data-word='into a granite cave' data-pos='prep. phrase' data-phonetic='/ˈɪn.tuː ə ˈɡræn.ɪt keɪv/' data-tr='granit bir mağaranın içine' data-def='Movement toward the interior.' data-ex='Going into the shelter.'>into a granite cave</mark> to shield their equipment from freezing mountain gusts.",
    vocabularies: [
      { word: "chasm", pos: "noun", phonetic: "/ˈkæz.əm/", tr: "uçurum, derin yarık", def: "A deep fissure in the earth, rock, or other surface.", example: "They stepped across the deep chasm." },
      { word: "gusts", pos: "noun", phonetic: "/ɡʌsts/", tr: "şiddetli rüzgar esintileri", def: "Brief, strong rushes of wind.", example: "Freezing mountain gusts swept the ridge." }
    ],
    questions: [
      { q: "Which preposition indicates movement inside a 3D space like a forest?", options: ["A) Across", "B) Through", "C) Along"], answer: "B", exp: "Bir şeyin içinden geçip gitmek için 'through' kullanılır." },
      { q: "Where did the climbers seek shelter?", options: ["A) In a wooden hut", "B) Into a granite cave", "C) Under a fallen pine tree"], answer: "B", exp: "Metinde 'entered into a granite cave' ifadesi geçer." }
    ]
  },
  {
    id: "read_a2_16",
    level: "A2",
    category: "Bağlaçlar & Akış",
    title: "Balancing Work and College",
    titleTr: "İş ve Üniversiteyi Dengelemek",
    grammarRef: {
      id: "a2-conjunctions-and-but-so-because",
      name: "Conjunctions: Although, Because, But, So (Temel Bağlaçlar)",
      targetFocus: "Sebep (because), sonuç (so), zıtlık (but, although) ilişkisi kuran bağlaçlar."
    },
    wordCount: 135,
    readTime: "1-2 dk",
    text: "<mark class='vocab-hl' data-word='Although' data-pos='conj.' data-phonetic='/ɔːlˈðəʊ/' data-tr='-e rağmen, karşın' data-def='Expressing contrast between clauses.' data-ex='Although working hours were long...'>Although</mark> working as a barista while studying finance is challenging, Marcus manages his schedule admirably. He wakes up early <mark class='vocab-hl' data-word='because' data-pos='conj.' data-phonetic='/bɪˈkɒz/' data-tr='çünkü' data-def='Giving reasons.' data-ex='Because his morning shift starts early.'>because</mark> his cafeteria shift begins at six o'clock. He earns valuable commercial experience, <mark class='vocab-hl' data-word='so' data-pos='conj.' data-phonetic='/səʊ/' data-tr='bu yüzden, bu sebeple' data-def='Showing result or outcome.' data-ex='He saves money, so he pays fees.'>so</mark> he pays his tuition without burdensome student loans. His schedule is intense, <mark class='vocab-hl' data-word='but' data-pos='conj.' data-phonetic='/bʌt/' data-tr='fakat, ama' data-def='Showing simple contrast.' data-ex='He is tired, but optimistic.'>but</mark> his unyielding determination keeps him focused on his graduation ambitions.",
    vocabularies: [
      { word: "admirably", pos: "adv.", phonetic: "/ˈæd.mɪ.rə.bli/", tr: "takdire şayan biçimde", def: "In a manner that arouses respect and approval.", example: "He manages his schedule admirably." },
      { word: "unyielding", pos: "adj.", phonetic: "/ʌnˈjiːl.dɪŋ/", tr: "boyun eğmez, sarsılmaz", def: "Not giving way to pressure; firm and determined.", example: "His unyielding determination." }
    ],
    questions: [
      { q: "Why does Marcus wake up early?", options: ["A) To jog in the park", "B) Because his cafeteria shift begins at 6:00", "C) To catch an international flight"], answer: "B", exp: "Metinde 'because his cafeteria shift begins at six o'clock' denmektedir." },
      { q: "Which conjunction introduces a contrast clause?", options: ["A) Because", "B) So", "C) Although"], answer: "C", exp: "'Although' (her ne kadar ... olsa da) zıtlık bildiren bağlaçtır." }
    ]
  },
  {
    id: "read_a2_17",
    level: "A2",
    category: "Eşitlik Kıyaslaması",
    title: "Electric Cars versus Hybrid Vehicles",
    titleTr: "Elektrikli Araçlar Hibrit Araçlara Karşı",
    grammarRef: {
      id: "a2-as-as-comparisons",
      name: "Equative Comparisons: As... as (Eşitlik Karşılaştırması)",
      targetFocus: "İki öğenin eşit derecede olduğunu veya olmadığını bildiren 'as + adj + as / not as... as'."
    },
    wordCount: 130,
    readTime: "1-2 dk",
    text: "Automotive engineering has evolved remarkably over the past decade. Modern battery electric vehicles are <mark class='vocab-hl' data-word='as fast as' data-pos='phrase' data-phonetic='/æz fɑːst æz/' data-tr='kadar hızlı' data-def='Showing equal speed.' data-ex='Electric cars are as fast as sports sedans.'>as fast as</mark> traditional fuel-powered sports cars. However, in rural territories, public charging points are <mark class='vocab-hl' data-word='not as common as' data-pos='phrase' data-phonetic='/nɒt æz ˈkɒm.ən æz/' data-tr='kadar yaygın değil' data-def='Showing lesser prevalence.' data-ex='Chargers are not as common as gas stations.'>not as common as</mark> petrol service stations. For long cross-country road trips, hybrid automobiles remain <mark class='vocab-hl' data-word='as reliable as' data-pos='phrase' data-phonetic='/æz rɪˈlaɪ.ə.bəl æz/' data-tr='kadar güvenilir' data-def='Equal reliability.' data-ex='Hybrids are as reliable as standard cars.'>as reliable as</mark> diesel engines because they switch seamlessly between battery reserves and combustion fuel.",
    vocabularies: [
      { word: "combustion", pos: "noun", phonetic: "/kəmˈbʌs.tʃən/", tr: "yanma, içten yanma", def: "The process of burning something.", example: "Combustion fuel engines produce emissions." },
      { word: "seamlessly", pos: "adv.", phonetic: "/ˈsiːm.ləs.li/", tr: "sorunsuzca, kesintisizce", def: "Smoothly and continuously, with no apparent gaps.", example: "Switch seamlessly between power sources." }
    ],
    questions: [
      { q: "Are public chargers as common as petrol stations in rural areas?", options: ["A) Yes, exactly equal", "B) No, they are not as common", "C) They are much more common"], answer: "B", exp: "Metinde 'not as common as petrol service stations' denir." },
      { q: "What does 'as fast as' denote?", options: ["A) Equal speed between vehicles", "B) Slower performance", "C) Highest possible speed"], answer: "A", exp: "'As fast as' iki aracın hızının eşit olduğunu ifade eder." }
    ]
  },
  {
    id: "read_a2_18",
    level: "A2",
    category: "Geçmiş Yetenekler",
    title: "Mozart's Early Genius",
    titleTr: "Mozart'ın Erken Dönem Dehası",
    grammarRef: {
      id: "a2-could-past-ability",
      name: "Could / Couldn't (Geçmişte Genel Yetenek)",
      targetFocus: "Geçmişteki genel kabiliyetleri ve yapılamayanları bildiren 'could / couldn't + fiil'."
    },
    wordCount: 130,
    readTime: "1-2 dk",
    text: "Wolfgang Amadeus Mozart was an extraordinary musical prodigy. By the tender age of five, he <mark class='vocab-hl' data-word='could play' data-pos='v. phrase' data-phonetic='/kʊd pleɪ/' data-tr='çalabiliyordu (geçmişte)' data-def='General ability in the past.' data-ex='He could play the harpsichord.'>could play</mark> the harpsichord and violin with astounding technical mastery. He <mark class='vocab-hl' data-word='could compose' data-pos='v. phrase' data-phonetic='/kʊd kəmˈpəʊz/' data-tr='besteleyebiliyordu' data-def='Past creative ability.' data-ex='He could compose intricate minuets.'>could compose</mark> intricate classical minuets before he could even write grammatical sentences correctly. Ordinary children of his age <mark class='vocab-hl' data-word='could not read' data-pos='v. phrase' data-phonetic='/kʊd nɒt riːd/' data-tr='okuyamıyorlardı' data-def='Inability in the past.' data-ex='They could not read musical scores.'>could not read</mark> complex orchestral scores, but young Mozart memorized long symphonic compositions effortlessly after listening to them only once.",
    vocabularies: [
      { word: "prodigy", pos: "noun", phonetic: "/ˈprɒd.ɪ.dʒi/", tr: "harika çocuk, dahi", def: "A young person endowed with exceptional qualities or abilities.", example: "Mozart was an extraordinary musical prodigy." },
      { word: "astounding", pos: "adj.", phonetic: "/əˈstaʊn.dɪŋ/", tr: "hayret verici, akıl almaz", def: "Surprisingly impressive or notable.", example: "With astounding technical mastery." }
    ],
    questions: [
      { q: "What could Mozart do by age five?", options: ["A) Fly airplanes", "B) Play the harpsichord and violin", "C) Conduct a military fleet"], answer: "B", exp: "Metinde 'could play the harpsichord and violin' denir." },
      { q: "What does 'could' express in this context?", options: ["A) Future request", "B) Past general ability", "C) A hypothetical wish"], answer: "B", exp: "'Could' geçmişteki genel yeteneği (past ability) ifade eder." }
    ]
  },
  {
    id: "read_a2_19",
    level: "A2",
    category: "Gelecek Tahminleri",
    title: "Cities of Tomorrow",
    titleTr: "Geleceğin Şehirleri",
    grammarRef: {
      id: "a2-future-will-predictions",
      name: "Future Simple: Will / Won't (Tahmin ve Olasılık)",
      targetFocus: "Geleceğe dair kişisel tahmin ve öngörüler için 'will / won't + fiil yalın hali'."
    },
    wordCount: 135,
    readTime: "1-2 dk",
    text: "Urban planners predict that municipal habitats <mark class='vocab-hl' data-word='will look' data-pos='v. phrase' data-phonetic='/wɪl lʊk/' data-tr='görünecek' data-def='Future prediction.' data-ex='Cities will look greener.'>will look</mark> radically different by 2050. Autonomous electric drones <mark class='vocab-hl' data-word='will deliver' data-pos='v. phrase' data-phonetic='/wɪl dɪˈlɪv.ər/' data-tr='teslim edecek' data-def='Anticipated service in future.' data-ex='Drones will deliver parcel goods.'>will deliver</mark> consumer goods directly to rooftop landing pods. Fossil-fuelled private vehicles <mark class='vocab-hl' data-word='will not operate' data-pos='v. phrase' data-phonetic='/wɪl nɒt ˈɒp.ər.eɪt/' data-tr='çalışmayacak / kullanılmayacak' data-def='Negative prediction.' data-ex='Petrol cars will not operate in centers.'>will not operate</mark> within historic inner boundaries. Instead, quiet magnetic transit trains will connect residential districts. Vertical hydroponic farms will cultivate fresh vegetables inside skyscrapers, significantly reducing environmental transport carbon emissions.",
    vocabularies: [
      { word: "radically", pos: "adv.", phonetic: "/ˈræd.ɪ.kəl.i/", tr: "kökten, radikal biçimde", def: "In a thorough or fundamentally transformative way.", example: "Cities will look radically different." },
      { word: "hydroponic", pos: "adj.", phonetic: "/ˌhaɪ.drəˈpɒn.ɪk/", tr: "topraksız sulu tarıma ait", def: "Growing plants in nutrient solutions without soil.", example: "Vertical hydroponic farms in towers." }
    ],
    questions: [
      { q: "How will parcel goods be delivered in 2050?", options: ["A) By steam trains", "B) By autonomous electric drones", "C) By horse carriages"], answer: "B", exp: "Metinde 'autonomous electric drones will deliver consumer goods' denmektedir." },
      { q: "What will happen to fossil-fuelled private cars in city centers?", options: ["A) They will multiply", "B) They will not operate in inner boundaries", "C) They will become free"], answer: "B", exp: "Metinde 'will not operate within historic inner boundaries' denir." }
    ]
  },
  {
    id: "read_a2_20",
    level: "A2",
    category: "Teyit Soruları",
    title: "Confirmation and Friendly Banter",
    titleTr: "Teyit ve Dostça Sohbet",
    grammarRef: {
      id: "a2-question-tags",
      name: "Question Tags (Teyit ve Onay Soruları: Isn't it? Don't you?)",
      targetFocus: "Cümle sonunda onay almak için 'olumlu cümle + olumsuz tag' veya tersi kuralı."
    },
    wordCount: 130,
    readTime: "1-2 dk",
    text: "Rachel and Daniel are reviewing their lecture notes over hot tea. 'The economics midterm exam was extremely tricky, <mark class='vocab-hl' data-word='wasn\'t it' data-pos='tag' data-phonetic='/ˈwɒz.ənt ɪt/' data-tr='öyle değil miydi' data-def='Question tag confirming past statement.' data-ex='It was tricky, wasn\'t it?'>wasn't it</mark>?' Rachel asks thoughtfully. Daniel chuckles, 'You scored eighty-five percent, <mark class='vocab-hl' data-word='didn\'t you' data-pos='tag' data-phonetic='/ˈdɪd.ənt juː/' data-tr='değil mi (yaptın)' data-def='Past tag confirmation.' data-ex='You scored high, didn\'t you?'>didn't you</mark>?' Rachel smiles, 'Yes, but question five on fiscal inflation was baffling. Professor Evans is delivering the research seminar tomorrow, <mark class='vocab-hl' data-word='isn\'t he' data-pos='tag' data-phonetic='/ˈɪz.ənt hiː/' data-tr='öyle değil mi' data-def='Present continuous tag.' data-ex='He is delivering it, isn\'t he?'>isn't he</mark>?' 'Indeed, he is,' Daniel affirms. Using tag questions helps speakers confirm mutual comprehension politely.",
    vocabularies: [
      { word: "baffling", pos: "adj.", phonetic: "/ˈbæf.lɪŋ/", tr: "kafa karıştırıcı, şaşırtıcı", def: "Impossible to understand; perplexing.", example: "Question five was baffling." },
      { word: "banter", pos: "noun", phonetic: "/ˈbæn.tər/", tr: "tatlı şakalaşma, sohbet", def: "The playful and friendly exchange of teasing remarks.", example: "Engaged in friendly banter over tea." }
    ],
    questions: [
      { q: "What tag matches 'You scored eighty-five percent'?", options: ["A) Don't you?", "B) Didn't you?", "C) Haven't you?"], answer: "B", exp: "Geçmiş zaman (Past Simple) olumlu cümlesi 'didn't you?' etiketi alır." },
      { q: "Why do English speakers use question tags?", options: ["A) To start arguments", "B) To confirm mutual comprehension politely", "C) To confuse listeners"], answer: "B", exp: "Metinde 'confirm mutual comprehension politely' denmiştir." }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.READING_A2 = READING_A2;
}
