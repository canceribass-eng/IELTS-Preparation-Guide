// =============================================================================
// CEFR A1 READING PRACTICE PASSAGES (15 Texts: A1-01 to A1-15)
// =============================================================================

const READING_A1 = [
  {
    id: "read_a1_01",
    level: "A1",
    category: "Günlük Yaşam",
    title: "David's Morning Routine",
    titleTr: "David'in Sabah Rutini",
    grammarRef: {
      id: "a1-present-simple",
      name: "Present Simple Tense (Geniş Zaman)",
      targetFocus: "Geniş zamanda 3. tekil şahıs fiil takısı (-s/-es) ve günlük rutin eylemleri."
    },
    wordCount: 110,
    readTime: "1 dk",
    text: "David is an architecture student in Manchester. Every morning, he <mark class='vocab-hl' data-word='wakes up' data-pos='v.' data-phonetic='/weɪks ʌp/' data-tr='uyanır' data-def='To stop sleeping and become active.' data-ex='David wakes up at seven.'>wakes up</mark> at seven o'clock. First, he washes his face and drinks a glass of cold water. Then, he <mark class='vocab-hl' data-word='prepares' data-pos='v.' data-phonetic='/prɪˈpeəz/' data-tr='hazırlar' data-def='To make food or drink ready for eating.' data-ex='He prepares a healthy breakfast.'>prepares</mark> a warm breakfast with eggs and toast. He never skips breakfast because his morning classes are very demanding. At eight o'clock, he takes his bicycle and rides to the university campus. His lectures start at half past eight, and he always arrives on time.",
    vocabularies: [
      { word: "wakes up", pos: "verb", phonetic: "/weɪks ʌp/", tr: "uyanır", def: "To stop sleeping.", example: "David wakes up at seven o'clock." },
      { word: "prepares", pos: "verb", phonetic: "/prɪˈpeəz/", tr: "hazırlar", def: "To make ready.", example: "He prepares a warm breakfast with toast." },
      { word: "demanding", pos: "adj.", phonetic: "/dɪˈmɑːn.dɪŋ/", tr: "zorlayıcı, emek isteyen", def: "Requiring much skill or effort.", example: "His university classes are very demanding." }
    ],
    questions: [
      { q: "What time does David wake up?", options: ["A) At 6:30", "B) At 7:00", "C) At 8:00"], answer: "B", exp: "Metinde 'he wakes up at seven o'clock' denmiştir." },
      { q: "How does David travel to university?", options: ["A) By bicycle", "B) By subway", "C) On foot"], answer: "A", exp: "Metinde 'he takes his bicycle and rides' ifadesi yer alır." }
    ]
  },
  {
    id: "read_a1_02",
    level: "A1",
    category: "Aile & Ev",
    title: "Meet the Miller Family",
    titleTr: "Miller Ailesiyle Tanışın",
    grammarRef: {
      id: "a1-verb-to-be",
      name: "Verb to be (am / is / are)",
      targetFocus: "Kimlik, meslek, yaş ve durum belirten 'to be' olumlu ve olumsuz cümleleri."
    },
    wordCount: 105,
    readTime: "1 dk",
    text: "The Millers <mark class='vocab-hl' data-word='are' data-pos='v.' data-phonetic='/ɑːr/' data-tr='olmak (-dır/-dir)' data-def='Present plural form of verb to be.' data-ex='They are a happy family.'>are</mark> a friendly family from Bristol. Thomas is forty-two years old, and he is a civil engineer. His wife, Clara, is a pediatrician at the city hospital. They have two children: Emma and Lucas. Emma is fourteen, and Lucas is nine. Their house is not very big, but it is comfortable and warm. There is a green garden with apple trees behind the house. They are always happy when grandparents visit them on Sundays.",
    vocabularies: [
      { word: "pediatrician", pos: "noun", phonetic: "/ˌpiː.di.əˈtrɪʃ.ən/", tr: "çocuk doktoru", def: "A medical doctor specializing in children.", example: "Clara is a pediatrician at the city hospital." },
      { word: "comfortable", pos: "adj.", phonetic: "/ˈkʌm.fə.tə.bəl/", tr: "rahat, konforlu", def: "Giving physical ease and relaxation.", example: "Their house is small but comfortable." }
    ],
    questions: [
      { q: "What is Clara's profession?", options: ["A) Civil engineer", "B) Pediatrician", "C) Teacher"], answer: "B", exp: "Metinde Clara'nın 'pediatrician at the city hospital' olduğu belirtilmiştir." },
      { q: "Is their house large?", options: ["A) Yes, extremely large", "B) No, it is not very big", "C) It is a skyscraper"], answer: "B", exp: "Metinde 'Their house is not very big' ifadesi geçer." }
    ]
  },
  {
    id: "read_a1_03",
    level: "A1",
    category: "Şehir & Yaşam",
    title: "My Hometown: Bath",
    titleTr: "Memleketim: Bath Şehri",
    grammarRef: {
      id: "a1-there-is-there-are",
      name: "There is / There are (Varlık Bildirme)",
      targetFocus: "Tekil ve çoğul nesnelerin varlığını belirten 'There is / There are' yapıları."
    },
    wordCount: 115,
    readTime: "1-2 dk",
    text: "Bath is a historic town in England. <mark class='vocab-hl' data-word='There are' data-pos='phrase' data-phonetic='/ðeər ɑːr/' data-tr='vardır (çoğul)' data-def='Used to indicate existence of plural items.' data-ex='There are many parks.'>There are</mark> many ancient Roman baths and classical buildings made of honey-coloured stone. In the city centre, there is a famous abbey and a lively market square. There are several cozy bookshops and traditional tea rooms where visitors taste English scones. There is also a scenic river called the River Avon. It is a quiet place because there are not many noisy factories or heavy motor traffic in the central district.",
    vocabularies: [
      { word: "ancient", pos: "adj.", phonetic: "/ˈeɪn.ʃənt/", tr: "antik, çok eski", def: "Belonging to the very distant past.", example: "There are ancient Roman baths in the town." },
      { word: "scenic", pos: "adj.", phonetic: "/ˈsiː.nɪk/", tr: "manzaralı, pitoresk", def: "Having impressive or beautiful natural scenery.", example: "There is a scenic river called the River Avon." }
    ],
    questions: [
      { q: "What famous historical sites exist in Bath?", options: ["A) Modern glass towers", "B) Roman baths and an abbey", "C) Desert dunes"], answer: "B", exp: "Metinde 'Roman baths' ve 'abbey' açıkça listelenmiştir." },
      { q: "Why is the city centre quiet?", options: ["A) There are no people", "B) There are not many factories or heavy traffic", "C) Cars are banned completely"], answer: "B", exp: "Metinde 'there are not many noisy factories or heavy motor traffic' denmiştir." }
    ]
  },
  {
    id: "read_a1_04",
    level: "A1",
    category: "Alışveriş & Yiyecek",
    title: "At the Local Farmers' Market",
    titleTr: "Yerel Çiftçi Pazarında",
    grammarRef: {
      id: "a1-countable-uncountable",
      name: "Countable & Uncountable Nouns (Sayılabilen / Sayılamayan İsimler)",
      targetFocus: "'some', 'any', 'much', 'many' ile sayılabilen meyve/sebze ve sayılamayan süt/peynir yapıları."
    },
    wordCount: 120,
    readTime: "1-2 dk",
    text: "Every Saturday, Mrs. Jenkins goes to the farmers' market to buy fresh groceries. She needs <mark class='vocab-hl' data-word='some' data-pos='determiner' data-phonetic='/sʌm/' data-tr='biraz / birkaç' data-def='An unspecified amount or number.' data-ex='She buys some milk and apples.'>some</mark> organic milk, three fresh loaves of bread, and some yellow cheese. She also wants to buy five red apples and a kilogram of sweet strawberries. She asks the vendor, 'Do you have <mark class='vocab-hl' data-word='any' data-pos='determiner' data-phonetic='/ˈen.i/' data-tr='hiç' data-def='Used in questions and negatives.' data-ex='Do you have any butter?'>any</mark> fresh butter today?' The vendor replies, 'Yes, ma'am, here is the finest country butter.' Mrs. Jenkins pays fifteen pounds and smiles contentedly.",
    vocabularies: [
      { word: "groceries", pos: "noun", phonetic: "/ˈɡrəʊ.sər.iz/", tr: "bakkaliye, gıda malzemeleri", def: "Food and household supplies.", example: "She buys fresh groceries every Saturday." },
      { word: "vendor", pos: "noun", phonetic: "/ˈven.dər/", tr: "satıcı, pazarcı", def: "A person selling goods.", example: "She asks the vendor for fresh butter." }
    ],
    questions: [
      { q: "How much does Mrs. Jenkins pay?", options: ["A) 50 pounds", "B) 15 pounds", "C) 5 pounds"], answer: "B", exp: "Metinde 'Mrs. Jenkins pays fifteen pounds' ifadesi yer alır." },
      { q: "Which word is uncountable in the passage?", options: ["A) Apple", "B) Bread", "C) Milk"], answer: "C", exp: "Milk (süt) sayılamayan (uncountable) bir isimdir." }
    ]
  },
  {
    id: "read_a1_05",
    level: "A1",
    category: "Yetenekler & Boş Zaman",
    title: "Elena's Talents",
    titleTr: "Elena'nın Yetenekleri",
    grammarRef: {
      id: "a1-can-cant-ability",
      name: "Modal Verb: Can / Can't (Yetenek ve İzin)",
      targetFocus: "Fiziksel ve zihinsel yetenekleri ifade eden 'can / can't + fiil yalın hali'."
    },
    wordCount: 110,
    readTime: "1 dk",
    text: "Elena is a creative girl from Madrid. She <mark class='vocab-hl' data-word='can play' data-pos='v. phrase' data-phonetic='/kæn pleɪ/' data-tr='çalabilir' data-def='Has the skill to perform music.' data-ex='She can play the violin.'>can play</mark> both the acoustic guitar and the classical violin skillfully. She can also speak three languages: Spanish, Italian, and conversational English. However, she <mark class='vocab-hl' data-word='cannot swim' data-pos='v. phrase' data-phonetic='/ˈkæn.ɒt swɪm/' data-tr='yüzemez' data-def='Lacks the ability to swim.' data-ex='Elena cannot swim well.'>cannot swim</mark> very well because she is afraid of deep sea water. Next summer, she wants to take swimming lessons at the local sports centre so that she can swim with her friends at the beach.",
    vocabularies: [
      { word: "skillfully", pos: "adv.", phonetic: "/ˈskɪl.fəl.i/", tr: "ustalıkla, beceriyle", def: "With high skill and competence.", example: "She can play the violin skillfully." },
      { word: "conversational", pos: "adj.", phonetic: "/ˌkɒn.vəˈseɪ.ʃən.əl/", tr: "günlük konuşma düzeyinde", def: "Appropriate for casual conversation.", example: "She speaks conversational English." }
    ],
    questions: [
      { q: "Which musical instruments can Elena play?", options: ["A) Piano and drums", "B) Guitar and violin", "C) Flute and cello"], answer: "B", exp: "Metinde 'acoustic guitar and classical violin' geçer." },
      { q: "What can Elena NOT do?", options: ["A) Speak Italian", "B) Swim well", "C) Play guitar"], answer: "B", exp: "Metinde 'she cannot swim very well' açıkça belirtilir." }
    ]
  },
  {
    id: "read_a1_06",
    level: "A1",
    category: "Şu An & Eylemler",
    title: "A Rainy Afternoon at the Library",
    titleTr: "Kütüphanede Yağmurlu Bir Öğleden Sonra",
    grammarRef: {
      id: "a1-present-continuous",
      name: "Present Continuous Tense (Şimdiki Zaman)",
      targetFocus: "Konuşma anında gerçekleşen eylemleri bildiren 'am/is/are + verb-ing' yapısı."
    },
    wordCount: 115,
    readTime: "1-2 dk",
    text: "Outside the university library, rain is falling steadily. Inside, students <mark class='vocab-hl' data-word='are studying' data-pos='v. phrase' data-phonetic='/ɑːr ˈstʌd.i.ɪŋ/' data-tr='ders çalışıyorlar' data-def='Present continuous action of studying.' data-ex='Students are studying quietly.'>are studying</mark> in complete silence. Mark is sitting near the window and reading a thick textbook on sociology. Near the corner, Sarah is taking detailed notes on her digital tablet. The librarian is organizing colourful science journals on the wooden shelf. Nobody is talking loudly because everybody is respecting the strict library rules.",
    vocabularies: [
      { word: "steadily", pos: "adv.", phonetic: "/ˈsted.əl.i/", tr: "durmaksızın, düzenli biçimde", def: "In a regular or continuous manner.", example: "Rain is falling steadily outside." },
      { word: "respecting", pos: "verb (part.)", phonetic: "/rɪˈspek.tɪŋ/", tr: "saygı gösteren / göstermek", def: "Adhering to or honouring rules.", example: "Everybody is respecting the library rules." }
    ],
    questions: [
      { q: "What is Mark doing right now?", options: ["A) Drinking coffee", "B) Reading a sociology textbook", "C) Playing chess"], answer: "B", exp: "Metinde 'Mark is sitting near the window and reading a thick textbook' denir." },
      { q: "Why is nobody talking loudly?", options: ["A) The library is closed", "B) Everybody is respecting library rules", "C) Students are sleeping"], answer: "B", exp: "Metinde 'everybody is respecting the strict library rules' ifadesi geçer." }
    ]
  },
  {
    id: "read_a1_07",
    level: "A1",
    category: "Zaman & Tarihler",
    title: "School Schedule and Calendar",
    titleTr: "Okul Takvimi ve Program",
    grammarRef: {
      id: "a1-prepositions-time",
      name: "Prepositions of Time (at, on, in)",
      targetFocus: "Saatlerde 'at', gün ve tarihlerde 'on', ay ve mevsimlerde 'in' kullanımı."
    },
    wordCount: 105,
    readTime: "1 dk",
    text: "Our academic term begins <mark class='vocab-hl' data-word='in September' data-pos='prep. phrase' data-phonetic='/ɪn səpˈtem.bər/' data-tr='Eylül ayında' data-def='Used with calendar months.' data-ex='Term begins in September.'>in September</mark>. Every week, we have English lectures <mark class='vocab-hl' data-word='on Mondays' data-pos='prep. phrase' data-phonetic='/ɒn ˈmʌn.deɪz/' data-tr='Pazartesi günleri' data-def='Used with days of the week.' data-ex='Lectures are on Mondays.'>on Mondays</mark> and Wednesdays. The morning class starts promptly <mark class='vocab-hl' data-word='at nine' data-pos='prep. phrase' data-phonetic='/æt naɪn/' data-tr='saat dokuzda' data-def='Used with clock times.' data-ex='Class starts at nine.'>at nine</mark> o'clock. In the afternoon, we spend two hours in the computer laboratory. At weekends, the university campus is usually calm because most students return to their homes.",
    vocabularies: [
      { word: "promptly", pos: "adv.", phonetic: "/ˈprɒmpt.li/", tr: "tam vaktinde, dakik bir şekilde", def: "Exactly at the specified time.", example: "The class starts promptly at nine." },
      { word: "calm", pos: "adj.", phonetic: "/kɑːm/", tr: "sakin, huzurlu", def: "Quiet and peaceful without disturbance.", example: "The campus is calm at weekends." }
    ],
    questions: [
      { q: "When do English lectures take place?", options: ["A) On Fridays", "B) On Mondays and Wednesdays", "C) On Sundays"], answer: "B", exp: "Metinde 'on Mondays and Wednesdays' belirtilmiştir." },
      { q: "Which preposition is used for calendar months?", options: ["A) At", "B) On", "C) In"], answer: "C", exp: "Aylar için 'in' edatı kullanılır (in September)." }
    ]
  },
  {
    id: "read_a1_08",
    level: "A1",
    category: "Mekan & Konum",
    title: "Inside My Bedroom",
    titleTr: "Yatak Odamın İçi",
    grammarRef: {
      id: "a1-prepositions-place",
      name: "Prepositions of Place (in, on, under, next to)",
      targetFocus: "Mekan ve nesne konumunu belirten 'in, on, next to, between, under' edatları."
    },
    wordCount: 110,
    readTime: "1 dk",
    text: "My bedroom is my personal sanctuary. There is a wooden desk <mark class='vocab-hl' data-word='next to' data-pos='prep.' data-phonetic='/nekst tuː/' data-tr='yanında, bitişiğinde' data-def='Beside or adjacent to.' data-ex='The desk is next to the window.'>next to</mark> the window. <mark class='vocab-hl' data-word='On the desk' data-pos='prep. phrase' data-phonetic='/ɒn ðə desk/' data-tr='masanın üzerinde' data-def='Supported by the surface.' data-ex='A laptop is on the desk.'>On the desk</mark>, there is a modern laptop computer, an adjustable lamp, and several coloured notebooks. My bed is between the wardrobe and the bookshelf. Under the bed, I keep a large storage box with winter shoes. On the wall above my bed, there is a framed world map.",
    vocabularies: [
      { word: "sanctuary", pos: "noun", phonetic: "/ˈsæŋk.tʃʊə.ri/", tr: "sığınak, huzur köşesi", def: "A quiet, safe place.", example: "My bedroom is my personal sanctuary." },
      { word: "adjustable", pos: "adj.", phonetic: "/əˈdʒʌs.tə.bəl/", tr: "ayarlanabilir", def: "Capable of being varied or adjusted.", example: "There is an adjustable lamp on the desk." }
    ],
    questions: [
      { q: "Where is the wooden desk located?", options: ["A) Under the bed", "B) Next to the window", "C) Inside the wardrobe"], answer: "B", exp: "Metinde 'wooden desk next to the window' geçer." },
      { q: "What is kept under the bed?", options: ["A) Notebooks", "B) Winter shoes in a storage box", "C) A laptop"], answer: "B", exp: "Metinde 'Under the bed, I keep a large storage box with winter shoes' denir." }
    ]
  },
  {
    id: "read_a1_09",
    level: "A1",
    category: "Sahiplik & Aile",
    title: "Sarah's Possessions",
    titleTr: "Sarah'nın Eşyaları",
    grammarRef: {
      id: "a1-possessive-adjectives-s",
      name: "Possessive 's and Possessive Adjectives (Aitlik)",
      targetFocus: "Kişisel aitlik bildiren apostrof -'s ve 'my, your, his, her, their' sıfatları."
    },
    wordCount: 105,
    readTime: "1 dk",
    text: "This is <mark class='vocab-hl' data-word='Sarah\'s' data-pos='noun (poss.)' data-phonetic='/ˈseə.rəz/' data-tr='Sarah\'nın' data-def='Belonging to Sarah.' data-ex='Sarah\'s bicycle is blue.'>Sarah's</mark> studio apartment. Her paintings hang on the white walls because she is a talented watercolorist. <mark class='vocab-hl' data-word='Her' data-pos='poss. adj.' data-phonetic='/hɜːr/' data-tr='onun (kadın)' data-def='Belonging to a female person.' data-ex='Her cat is very cute.'>Her</mark> younger brother, Tom, often visits her. Tom's bicycle is parked by the entrance door. Their parents live in Edinburgh, but they visit the children twice a month. All family members love spending quality time together.",
    vocabularies: [
      { word: "watercolorist", pos: "noun", phonetic: "/ˈwɔː.təˌkʌl.ər.ɪst/", tr: "suluboya sanatçısı", def: "An artist who paints with watercolours.", example: "She is a talented watercolorist." },
      { word: "possessions", pos: "noun", phonetic: "/pəˈzeʃ.ənz/", tr: "eşyalar, mülkler", def: "Things that a person owns.", example: "She keeps her possessions organized." }
    ],
    questions: [
      { q: "Where do Sarah's parents live?", options: ["A) In London", "B) In Manchester", "C) In Edinburgh"], answer: "C", exp: "Metinde 'Their parents live in Edinburgh' denmektedir." },
      { q: "Whose bicycle is parked by the entrance door?", options: ["A) Sarah's", "B) Tom's", "C) The neighbour's"], answer: "B", exp: "Metinde 'Tom's bicycle is parked by the entrance door' denmiştir." }
    ]
  },
  {
    id: "read_a1_10",
    level: "A1",
    category: "Soru Sorma & Tanışma",
    title: "An Interview with an Artist",
    titleTr: "Bir Sanatçıyla Röportaj",
    grammarRef: {
      id: "a1-wh-questions",
      name: "Wh- Questions (Soru Sözcükleri)",
      targetFocus: "Bilgi almaya yönelik 'What, Where, When, Who, Why, How' soru kalıpları."
    },
    wordCount: 110,
    readTime: "1 dk",
    text: "Journalist: '<mark class='vocab-hl' data-word='Where' data-pos='adv.' data-phonetic='/weər/' data-tr='Nerede / Nereye' data-def='Question word for place.' data-ex='Where do you paint?'>Where</mark> do you find your inspiration for these magnificent sculptures?' Artist: 'I observe wildlife in the national parks.' Journalist: '<mark class='vocab-hl' data-word='How often' data-pos='adv.' data-phonetic='/haʊ ˈɒf.ən/' data-tr='Ne sıklıkla' data-def='Question phrase for frequency.' data-ex='How often do you visit parks?'>How often</mark> do you travel to natural reserves?' Artist: 'I travel there twice a month.' Journalist: '<mark class='vocab-hl' data-word='Why' data-pos='adv.' data-phonetic='/waɪ/' data-tr='Neden' data-def='Question word for reason.' data-ex='Why do you prefer bronze?'>Why</mark> do you prefer using recycled copper?' Artist: 'Because it protects nature from industrial waste.'",
    vocabularies: [
      { word: "inspiration", pos: "noun", phonetic: "/ˌɪn.spɪˈreɪ.ʃən/", tr: "ilham kaynağı", def: "The process of being mentally stimulated to do something creative.", example: "Where do you find your inspiration?" },
      { word: "magnificent", pos: "adj.", phonetic: "/mæɡˈnɪf.ɪ.sənt/", tr: "muhteşem, görkemli", def: "Extremely beautiful or impressive.", example: "These magnificent sculptures are made of copper." }
    ],
    questions: [
      { q: "Where does the artist find inspiration?", options: ["A) In museum basements", "B) In national parks observing wildlife", "C) On social media"], answer: "B", exp: "Sanatçı 'I observe wildlife in the national parks' demiştir." },
      { q: "Why does the artist use recycled copper?", options: ["A) It is cheaper", "B) It protects nature from industrial waste", "C) It is lighter"], answer: "B", exp: "'Because it protects nature from industrial waste' yanıtı verilmiştir." }
    ]
  },
  {
    id: "read_a1_11",
    level: "A1",
    category: "Giyim & Alışveriş",
    title: "Choosing Winter Clothes",
    titleTr: "Kışlık Kıyafet Seçimi",
    grammarRef: {
      id: "a1-demonstratives",
      name: "Demonstratives (This, That, These, Those)",
      targetFocus: "Yakın ve uzak tekil/çoğul nesneleri işaret eden 'this, that, these, those'."
    },
    wordCount: 110,
    readTime: "1 dk",
    text: "Winter is coming, so Leo needs warm clothing. In the boutique, he points to a heavy wool coat. 'I like <mark class='vocab-hl' data-word='this' data-pos='pron.' data-phonetic='/ðɪs/' data-tr='bu (yakın tekil)' data-def='Referring to a specific nearby item.' data-ex='This coat is warm.'>this</mark> coat here,' he says to the sales assistant. 'How much is it?' Then he notices leather boots on the top shelf. 'Are <mark class='vocab-hl' data-word='those' data-pos='pron.' data-phonetic='/ðəʊz/' data-tr='şunlar (uzak çoğul)' data-def='Referring to distant plural items.' data-ex='Those boots are expensive.'>those</mark> boots waterproof?' The assistant explains that those boots are made of genuine leather and keep feet completely dry in deep snow.",
    vocabularies: [
      { word: "waterproof", pos: "adj.", phonetic: "/ˈwɔː.tə.pruːf/", tr: "su geçirmez", def: "Not allowing water to pass through.", example: "Are those winter boots waterproof?" },
      { word: "genuine", pos: "adj.", phonetic: "/ˈdʒen.ju.ɪn/", tr: "hakiki, gerçek", def: "Truly what something is said to be; authentic.", example: "They are made of genuine leather." }
    ],
    questions: [
      { q: "Where are the leather boots located?", options: ["A) On the floor", "B) On the top shelf", "C) Outside the store"], answer: "B", exp: "Metinde 'on the top shelf' ifadesi geçer." },
      { q: "What is special about the boots?", options: ["A) They are cheap", "B) They are waterproof and keep feet dry", "C) They are made of plastic"], answer: "B", exp: "Metinde 'keep feet completely dry in deep snow' denir." }
    ]
  },
  {
    id: "read_a1_12",
    level: "A1",
    category: "Yemek & Tarifler",
    title: "How to Make a Simple Tomato Soup",
    titleTr: "Basit Domates Çorbası Nasıl Yapılır",
    grammarRef: {
      id: "a1-imperatives",
      name: "Imperatives (Emir ve Yönerge Cümleleri)",
      targetFocus: "Tarif ve talimatlarda fiilin yalın haliyle başlayan emir/yönerge yapıları."
    },
    wordCount: 105,
    readTime: "1 dk",
    text: "<mark class='vocab-hl' data-word='Chop' data-pos='v.' data-phonetic='/tʃɒp/' data-tr='doğrayın' data-def='To cut into small pieces with a knife.' data-ex='Chop two red onions.'>Chop</mark> four fresh tomatoes and one sweet onion into small cubes. <mark class='vocab-hl' data-word='Heat' data-pos='v.' data-phonetic='/hiːt/' data-tr='ısıtın' data-def='To make warm or hot.' data-ex='Heat olive oil in a pan.'>Heat</mark> two tablespoons of virgin olive oil in a deep pan. Cook the onions gently until they become golden. Next, add the fresh tomatoes, half a liter of vegetable broth, and a pinch of black pepper. Simmer for twenty minutes on low heat. <mark class='vocab-hl' data-word='Do not boil' data-pos='v. phrase' data-phonetic='/duː nɒt bɔɪl/' data-tr='kaynatmayın' data-def='Negative imperative command.' data-ex='Do not boil excessively.'>Do not boil</mark> excessively. Serve warm with crunchy garlic bread.",
    vocabularies: [
      { word: "simmer", pos: "verb", phonetic: "/ˈsɪm.ər/", tr: "kısık ateşte kaynatmak", def: "To cook gently just below boiling point.", example: "Simmer for twenty minutes on low heat." },
      { word: "crunchy", pos: "adj.", phonetic: "/ˈkrʌn.tʃi/", tr: "çıtır, gevrek", def: "Crisp and easily crushed.", example: "Serve with crunchy garlic bread." }
    ],
    questions: [
      { q: "How long should the soup simmer?", options: ["A) For 5 minutes", "B) For 20 minutes", "C) For 2 hours"], answer: "B", exp: "Metinde 'Simmer for twenty minutes on low heat' denmektedir." },
      { q: "What should you NOT do?", options: ["A) Add salt", "B) Boil excessively", "C) Use fresh tomatoes"], answer: "B", exp: "Metinde 'Do not boil excessively' uyarısı vardır." }
    ]
  },
  {
    id: "read_a1_13",
    level: "A1",
    category: "Sağlık & Beden",
    title: "Staying Healthy Every Day",
    titleTr: "Her Gün Sağlıklı Kalmak",
    grammarRef: {
      id: "a1-adverbs-frequency",
      name: "Adverbs of Frequency (Sıklık Zarfları)",
      targetFocus: "Alışkanlıkların sıklığını belirten 'always, usually, often, sometimes, never'."
    },
    wordCount: 110,
    readTime: "1 dk",
    text: "Good health requires consistent habits. Dr. Harrison explains that people should <mark class='vocab-hl' data-word='always' data-pos='adv.' data-phonetic='/ˈɔːl.weɪz/' data-tr='her zaman' data-def='At all times; without exception.' data-ex='Always drink enough water.'>always</mark> drink at least two litres of pure water daily. He <mark class='vocab-hl' data-word='usually' data-pos='adv.' data-phonetic='/ˈjuː.ʒu.ə.li/' data-tr='genellikle' data-def='Under normal conditions; generally.' data-ex='He usually walks to his clinic.'>usually</mark> walks thirty minutes before starting his morning consultations. People <mark class='vocab-hl' data-word='sometimes' data-pos='adv.' data-phonetic='/ˈsʌm.taɪmz/' data-tr='bazen' data-def='Occasionally; not always.' data-ex='We sometimes eat dessert.'>sometimes</mark> forget to exercise during busy workdays. However, one should <mark class='vocab-hl' data-word='never' data-pos='adv.' data-phonetic='/ˈnev.ər/' data-tr='asla' data-def='Not ever; at no time.' data-ex='Never skip your meals.'>never</mark> stay seated for more than three hours without taking a short walking break.",
    vocabularies: [
      { word: "consistent", pos: "adj.", phonetic: "/kənˈsɪs.tənt/", tr: "tutarlı, istikrarlı", def: "Done in the same way over time.", example: "Good health requires consistent habits." },
      { word: "consultations", pos: "noun", phonetic: "/ˌkɒn.sʌlˈteɪ.ʃənz/", tr: "muayeneler, danışmanlıklar", def: "Formal medical meetings with a doctor.", example: "Before starting his morning consultations." }
    ],
    questions: [
      { q: "How much water is recommended daily?", options: ["A) 500 ml", "B) At least 2 litres", "C) 5 litres"], answer: "B", exp: "Metinde 'at least two litres of pure water daily' önerilmektedir." },
      { q: "What should you NEVER do?", options: ["A) Drink tea", "B) Stay seated for over 3 hours without a break", "C) Walk in the morning"], answer: "B", exp: "Metinde 'never stay seated for more than three hours' denmiştir." }
    ]
  },
  {
    id: "read_a1_14",
    level: "A1",
    category: "Tatiller & Ulaşım",
    title: "Travelling by Train",
    titleTr: "Trenle Seyahat Etmek",
    grammarRef: {
      id: "a1-subject-object-pronouns",
      name: "Subject & Object Pronouns (Özne ve Nesne Zamirleri)",
      targetFocus: "İsim tekrarını önleyen 'I/me, he/him, they/them' özne ve nesne zamirleri."
    },
    wordCount: 110,
    readTime: "1 dk",
    text: "Arthur and Sophie are at the central railway station. <mark class='vocab-hl' data-word='They' data-pos='pron.' data-phonetic='/ðeɪ/' data-tr='onlar' data-def='Subject pronoun for plural people.' data-ex='They want to visit York.'>They</mark> want to travel to York for the weekend. The ticket clerk hands tickets to Arthur, and Arthur thanks <mark class='vocab-hl' data-word='him' data-pos='pron.' data-phonetic='/hɪm/' data-tr='ona (erkek)' data-def='Object pronoun referring to a male.' data-ex='Arthur thanks him.'>him</mark> politely. Sophie carries two light backpacks, and Arthur assists <mark class='vocab-hl' data-word='her' data-pos='pron.' data-phonetic='/hɜːr/' data-tr='ona (kadın)' data-def='Object pronoun for female.' data-ex='He assists her with bags.'>her</mark> onto Platform 4. The train conductor smiles at them as the locomotive departs. The journey gives them beautiful views of the green English countryside.",
    vocabularies: [
      { word: "conductor", pos: "noun", phonetic: "/kənˈdʌk.tər/", tr: "kondüktör, bilet memuru", def: "An official who checks tickets on a train.", example: "The conductor smiles at them." },
      { word: "countryside", pos: "noun", phonetic: "/ˈkʌn.tri.saɪd/", tr: "kırsal bölge, taşra", def: "Land outside towns and cities.", example: "Views of the green English countryside." }
    ],
    questions: [
      { q: "Where are Arthur and Sophie going?", options: ["A) To London", "B) To York", "C) To Edinburgh"], answer: "B", exp: "Metinde 'travel to York for the weekend' denmiştir." },
      { q: "Which platform do they board from?", options: ["A) Platform 1", "B) Platform 4", "C) Platform 9"], answer: "B", exp: "Metinde 'Platform 4' açıkça belirtilmiştir." }
    ]
  },
  {
    id: "read_a1_15",
    level: "A1",
    category: "Doğa & Evcil Hayvanlar",
    title: "Barnaby: A Loyal Golden Retriever",
    titleTr: "Barnaby: Sadık Bir Golden Retriever",
    grammarRef: {
      id: "a1-adjectives-word-order",
      name: "Adjectives & Word Order (Sıfatlar ve Kelime Sırası)",
      targetFocus: "İsimlerin önünde niteleme yapan sıfat dizilimi (Opinion + Size + Colour + Noun)."
    },
    wordCount: 115,
    readTime: "1-2 dk",
    text: "Barnaby is a <mark class='vocab-hl' data-word='friendly golden' data-pos='adj. phrase' data-phonetic='/ˈfrend.li ˈɡəʊl.dən/' data-tr='arkadaş canlısı altın rengi' data-def='Adjectives describing temperament and colour.' data-ex='He is a friendly golden dog.'>friendly golden</mark> retriever. He has large expressive brown eyes and thick soft fur. Every afternoon, his owner takes him to the local green park. Barnaby loves running after a small bouncy red ball. He always brings it back excitedly and wags his bushy tail. When other playful dogs approach him, Barnaby welcomes them gently. In the evening, he sleeps happily on a comfortable woollen rug.",
    vocabularies: [
      { word: "expressive", pos: "adj.", phonetic: "/ɪkˈspres.ɪv/", tr: "ifadeli, anlamlı bakan", def: "Effectively conveying feelings or thought.", example: "He has expressive brown eyes." },
      { word: "playful", pos: "adj.", phonetic: "/ˈpleɪ.fəl/", tr: "oyuncu, neşeli", def: "Fond of games and amusement; lighthearted.", example: "Other playful dogs approach him." }
    ],
    questions: [
      { q: "What kind of dog is Barnaby?", options: ["A) German Shepherd", "B) Golden Retriever", "C) Bulldog"], answer: "B", exp: "Metinde 'friendly golden retriever' olduğu ifade edilir." },
      { q: "Where does he sleep in the evening?", options: ["A) On the kitchen table", "B) On a comfortable woollen rug", "C) Outside in the rain"], answer: "B", exp: "Metinde 'on a comfortable woollen rug' denmiştir." }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.READING_A1 = READING_A1;
}
