// Cambridge Academic IELTS Authentic 20 Mock Examinations Database
// Real Cambridge IELTS 10 - 19 Exam Structures & Authentic Academic Themes

const MOCK_DATABASE = {
  // =========================================================================
  // MOCK #1: Cambridge 16 Format - Campus Life & Renewable Microgrids
  // =========================================================================
  mock1: {
    id: "mock1",
    number: 1,
    label: "MOCK EXAM #1",
    cambridgeRef: "Cambridge IELTS 16 Academic Test 1",
    category: "nature",
    categoryLabel: "🌿 Çevre & Doğa",
    theme: "Kampüs Konaklama & Yenilenebilir Enerji Microgridleri",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Campus Housing & Student Welfare Accommodation Service",
      audioScript: `Receptionist: Good morning, Student Accommodation Office. How can I assist you today?
Student: Hello. I'm a newly admitted postgraduate student looking for campus accommodation.
Receptionist: Certainly! First, may I take your full surname, please?
Student: Yes, my surname is Williams, that's W-I-L-L-I-A-M-S, and first name David.
Receptionist: Thank you, Mr. Williams. And your student identification number?
Student: It is ST-8842.
Receptionist: What type of room are you looking for?
Student: I would prefer an en-suite room if available.
Receptionist: We have en-suite rooms in Highfield Court. What is your weekly budget?
Student: My maximum weekly budget is 160 pounds.
Receptionist: That matches Highfield Court exactly, £160 per week. And what date do you intend to move in?
Student: I need to move in on September 18th.
Receptionist: All room fees include high-speed broadband without any extra charges. The campus library remains open 24 hours during exam periods. Also, if you need discounted semester bus passes, you can purchase them directly from the Student Union Office. A refundable deposit of £250 is required upon contract signing. Finally, if you opt for our catering meal plan, it provides breakfast and dinner every day.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Candidate Surname: [ W - I - L - L - I - A - M - S ]", label: "Soyisim (Surname)", answer: "Williams", explanation: "Diyalogda soyadı 'W-I-L-L-I-A-M-S' olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Student Identification Number: ST-[ ... ]", label: "Öğrenci Numarası", answer: "8842", explanation: "Öğrenci numarası 'ST-8842' olarak belirtilir." },
        { id: 3, type: "fill", prompt: "3. Preferred Room Type: [ ... ] room", label: "Oda Tipi", answer: "en-suite", explanation: "Öğrenci özel banyolu (en-suite) oda tercih etmiştir." },
        { id: 4, type: "fill", prompt: "4. Maximum Weekly Budget: £[ ... ]", label: "Haftalık Bütçe", answer: "160", explanation: "Maksimum bütçesi haftalık £160'dır." },
        { id: 5, type: "fill", prompt: "5. Move-in Date: September [ ... ]", label: "Giriş Tarihi", answer: "18 / 18th", explanation: "Giriş tarihi 18 Eylül'dür." },
        { id: 6, type: "mcq", prompt: "6. Which facility is included in the room fee without extra charges?", options: ["A) Laundry facilities", "B) Gym membership", "C) High-speed broadband"], answer: "C", explanation: "'All room fees include high-speed broadband without extra charges' ifadesi geçer." },
        { id: 7, type: "mcq", prompt: "7. During examination periods, the university library remains open:", options: ["A) Until 10:00 PM", "B) Until Midnight", "C) 24 hours"], answer: "C", explanation: "'The campus library remains open 24 hours during exam periods' denmiştir." },
        { id: 8, type: "mcq", prompt: "8. Where can students purchase discounted semester bus passes?", options: ["A) Student Union Office", "B) Main Campus Reception", "C) Online transport portal"], answer: "A", explanation: "İndirimli otobüs biletleri 'Student Union Office'ten temin edilir." },
        { id: 9, type: "mcq", prompt: "9. What deposit amount is required upon signing the contract?", options: ["A) £100", "B) £250", "C) £500"], answer: "B", explanation: "İade edilebilir depozito tutarı £250'dir." },
        { id: 10, type: "mcq", prompt: "10. The optional campus catering meal plan includes:", options: ["A) Breakfast only", "B) Breakfast and dinner", "C) All three daily meals"], answer: "B", explanation: "Yemek planı kahvaltı ve akşam yemeğini kapsar." }
      ]
    },
    reading: {
      title: "The Technological Evolution of Renewable Energy Microgrids",
      passage: `[A] As urban environments confront surging electricity consumption and escalating vulnerability to severe meteorological disturbances, the architecture of conventional, centralized power grids has come under unprecedented critical examination. In response, modern electrical engineering has increasingly turned to 'microgrids'—localized, self-sufficient energy networks that can disconnect from the traditional macrogrid and function autonomously during periods of widespread power disruption.

[B] The primary operational advantage of microgrids lies in their decentralization. Traditional power grids rely on vast transmission conduits that inevitably suffer substantial thermal and kinetic energy dissipation over long geographical distances. In contrast, microgrids generate power in close proximity to end users, predominantly utilizing rooftop photovoltaic solar arrays, localized wind turbines, and industrial cogeneration engines. Excess energy produced during periods of solar and wind abundance is conserved using advanced lithium-ion and chemical flow batteries.

[C] Crucially, microgrids are governed by sophisticated predictive artificial intelligence algorithms. By assimilating micro-meteorological forecasts with real-time consumption telemetry, these software agents predict regional demand peaks with extraordinary precision, dampening peak load spikes and preventing catastrophic urban blackouts. Furthermore, in the event of severe grid failures triggered by climatic crises, islanding protocols automatically isolate the microgrid within milliseconds.

[D] However, comprehensive adoption of microgrids is impeded by significant capital expenditure hurdles. Constructing local storage substations and installing smart bi-directional inverters demands substantial initial capital investments, which frequently deters private municipalities with constrained municipal budgets. Nevertheless, pioneering demonstration projects in Denmark and Germany have substantiated that long-term operational efficiencies offset upfront capitalization expenditures within seven to nine fiscal years.

[E] Over the coming decade, energy analysts project that microgrids will evolve from niche experimental enclaves into foundational pillars of smart municipal ecosystems. Supported by declining battery production costs and progressive carbon neutrality legislation, microgrids present the most viable engineering solution for realizing dependable, zero-emission urban power distribution.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Microgrids have the capability to function autonomously when separated from the central grid.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[A] paragrafında 'function autonomously during periods of widespread power disruption' denmiştir." },
        { id: 2, type: "tfng", prompt: "2. Traditional centralized grids experience zero energy loss during long-distance transmission.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[B] paragrafında 'inevitably suffer substantial thermal and kinetic energy dissipation' diyerek enerji kaybı yaşadığı belirtilmiştir." },
        { id: 3, type: "tfng", prompt: "3. Denmark has officially legislated that 100% of all rural towns must transition to microgrids by 2028.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN", explanation: "Metinde 2028'e dair yasal bir zorunluluktan söz edilmemektedir." },
        { id: 4, type: "tfng", prompt: "4. Artificial intelligence systems in microgrids anticipate energy demand by tracking local weather forecasts.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[C] paragrafında 'assimilating micro-meteorological forecasts with real-time consumption telemetry' ifadesi geçer." },
        { id: 5, type: "fill", prompt: "5. Decentralized microgrids generate electricity nearby using [ ... ] arrays and wind turbines.", label: "Teknoloji Türü", answer: "photovoltaic / solar", explanation: "[B] paragrafında 'rooftop photovoltaic solar arrays' belirtilmiştir." },
        { id: 6, type: "fill", prompt: "6. Surplus electrical energy generated during peak output is stored in [ ... ] batteries.", label: "Depolama", answer: "lithium-ion / flow", explanation: "[B] paragrafında 'advanced lithium-ion and chemical flow batteries' geçmektedir." },
        { id: 7, type: "fill", prompt: "7. Automated islanding protocols are designed to prevent catastrophic urban [ ... ].", label: "Sorun", answer: "blackouts / blackout", explanation: "[C] paragrafında 'preventing catastrophic urban blackouts' denmiştir." },
        { id: 8, type: "mcq", prompt: "8. What is identified as the chief impediment to widespread microgrid deployment?", options: ["A) High initial capital investment expenditure", "B) Complete public resistance to solar panels", "C) Inability to integrate with hospitals"], answer: "A", explanation: "[D] paragrafında 'impeded by significant capital expenditure hurdles' ifadesi geçer." },
        { id: 9, type: "mcq", prompt: "9. In paragraph D, the author refers to Denmark and Germany to illustrate:", options: ["A) Severe grid failures across Europe", "B) Long-term operational profitability overcoming upfront costs", "C) Why fossil fuels remain superior"], answer: "B", explanation: "[D] paragrafında ilk yatırım maliyetlerinin 7-9 yılda amorti edildiği gösterilir." },
        { id: 10, type: "mcq", prompt: "10. The author's overall conclusion regarding microgrid adoption in the next decade is:", options: ["A) Highly skeptical and doubtful", "B) Unconcerned with environmental impact", "C) Resolutely optimistic and positive"], answer: "C", explanation: "[E] paragrafında 'microgrids present the most viable engineering solution' diyerek olumlu bir sonuca varır." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The bar chart below illustrates the proportion of renewable electricity generation (Solar, Wind, and Hydro) across four European regions between 2010 and 2025. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
        wordMin: 150,
        svgType: "energy_bars"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Some energy experts assert that transitioning to 100% renewable energy should be legally mandated by international binding treaties, while others contend that sovereign nations should retain autonomy over their energy infrastructure. Discuss both views and give your own opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "Where is your hometown, and what do you like most about living there?", topic: "Hometown" },
        { q: "Do you prefer studying in a quiet library or in a lively public place? Why?", topic: "Study Habits" },
        { q: "How important is environmental conservation to young people in your country?", topic: "Environment" }
      ],
      part2: {
        cardPrompt: "Describe a community or environmental initiative you know about or participated in.",
        points: [
          "What the initiative was and where it took place",
          "Who organized or participated in it",
          "What results or benefits were achieved",
          "And explain how you felt about this project."
        ]
      },
      part3: [
        { q: "To what extent should individuals, rather than governments, be held responsible for climate action?", topic: "Individual Responsibility" },
        { q: "Do you believe renewable energy will completely replace fossil fuels in the near future?", topic: "Future Energy" },
        { q: "How can schools better educate children about sustainable lifestyle choices?", topic: "Education & Sustainability" }
      ]
    }
  },

  // =========================================================================
  // MOCK #2: Cambridge 17 Format - Telehealth & AI Diagnostics
  // =========================================================================
  mock2: {
    id: "mock2",
    number: 2,
    label: "MOCK EXAM #2",
    cambridgeRef: "Cambridge IELTS 17 Academic Test 3",
    category: "tech",
    categoryLabel: "🤖 Teknoloji & Bilim",
    theme: "Sağlık Hizmetleri & Radyolojide Yapay Zeka",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Apex Telehealth & Medical Center Appointment Desk",
      audioScript: `Desk: Hello, Apex Telehealth Services. How can I assist you?
Patient: Hi, I'd like to register for a virtual specialist consultation.
Desk: Certainly. May I have your surname first?
Patient: Yes, it's Henderson. That is H-E-N-D-E-R-S-O-N. First name is Marcus.
Desk: Thank you Mr. Henderson. What is your patient medical registration number?
Patient: It is MD-4921.
Desk: Which specialty department do you need?
Patient: I need the cardiology clinic for a cardiovascular review.
Desk: We have an available slot on November 12th at 2:45 PM.
Patient: That works well. Is consultation covered by standard health insurance?
Desk: Yes, standard plans cover 80%, leaving a copayment of £35.
Patient: Excellent. Please send the link to my email.
Desk: The confirmation link will be delivered 2 hours prior to your session with Doctor Patel.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Patient Surname: [ H - E - N - D - E - R - S - O - N ]", label: "Soyisim", answer: "Henderson", explanation: "Soyisim Henderson olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Medical ID Number: MD-[ ... ]", label: "Kayıt No", answer: "4921", explanation: "Kayıt numarası MD-4921'dir." },
        { id: 3, type: "fill", prompt: "3. Specialist Department: [ ... ] clinic", label: "Bölüm", answer: "cardiology", explanation: "Kardiyoloji (cardiology) kliniğidir." },
        { id: 4, type: "fill", prompt: "4. Appointment Date: November [ ... ]", label: "Randevu Tarihi", answer: "12 / 12th", explanation: "Randevu tarihi 12 Kasım'dır." },
        { id: 5, type: "fill", prompt: "5. Patient Copayment: £[ ... ]", label: "Katkı Payı", answer: "35", explanation: "Ödenecek tutar £35'tir." },
        { id: 6, type: "mcq", prompt: "6. When will the virtual session access link be delivered?", options: ["A) 24 hours prior", "B) 2 hours prior", "C) 10 minutes prior"], answer: "B", explanation: "Bağlantı randevudan 2 saat önce gönderilecektir." },
        { id: 7, type: "mcq", prompt: "7. Who is the consulting medical practitioner?", options: ["A) Doctor Patel", "B) Doctor Sterling", "C) Doctor Robinson"], answer: "A", explanation: "Hekim Doctor Patel'dir." },
        { id: 8, type: "mcq", prompt: "8. What percentage of consultation fees is covered by insurance?", options: ["A) 50%", "B) 80%", "C) 100%"], answer: "B", explanation: "Sigorta %80 oranında karşılamaktadır." },
        { id: 9, type: "mcq", prompt: "9. Which diagnostic device is recommended for home telemetry?", options: ["A) Digital thermometer", "B) Smart blood pressure monitor", "C) Sleep apnea detector"], answer: "B", explanation: "Tansiyon monitörü önerilmiştir." },
        { id: 10, type: "mcq", prompt: "10. In case of acute medical emergencies, patients are advised to:", options: ["A) Rebook online", "B) Dial emergency services directly", "C) Send an email ticket"], answer: "B", explanation: "Acil durumlarda acil servis aranmalıdır." }
      ]
    },
    reading: {
      title: "Artificial Intelligence Algorithms in Diagnostic Radiology",
      passage: `[A] Diagnostic radiology has undergone a profound paradigm shift through the integration of deep convolutional neural networks (CNNs). Radiologists are increasingly augmented by algorithmic computer vision systems engineered to detect minute anomalies in computerized tomography (CT) and magnetic resonance imaging (MRI) scans with sensitivities exceeding standard human perceptual thresholds.

[B] The foundational strength of diagnostic AI lies in high-dimensional feature extraction. Where human clinicians are vulnerable to visual fatigue following hours of continuous inspection, machine learning architectures maintain mathematical rigor across thousands of radiological images per second, flagging early oncological nodules and vascular occlusions.

[C] Despite clinical promise, ethical and medicolegal complexities persist regarding algorithmic transparency—often termed the 'black box' phenomenon. If an AI classifier delivers an erroneous diagnosis, determining liability between the healthcare provider and the software developer remains legally ambiguous in contemporary jurisprudence.

[D] Consequently, regulatory authorities including the FDA and EMA emphasize that AI must operate as a 'decision support system' rather than an autonomous medical practitioner. By combining human clinical empathy with algorithmic diagnostic velocity, hospitals achieve optimal patient outcomes.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Convolutional neural networks can detect image anomalies that may be overlooked by fatigued radiologists.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[A] ve [B] paragraflarında algoritmaların insan eşiklerini aştığı doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. The black box phenomenon refers to the legal certainty of diagnostic software accountability.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[C] paragrafında 'black box' nedeniyle sorumluluğun belirsiz olduğu belirtilir." },
        { id: 3, type: "tfng", prompt: "3. By 2030, all European hospitals plan to eliminate human radiologists entirely.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN", explanation: "Metinde böyle bir tasfiye planından söz edilmemektedir." },
        { id: 4, type: "tfng", prompt: "4. The FDA mandates that diagnostic AI must function as supportive software rather than an autonomous physician.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[D] paragrafında 'decision support system rather than autonomous practitioner' ifadesi geçer." },
        { id: 5, type: "fill", prompt: "5. Radiology AI primarily relies on deep convolutional [ ... ] networks.", label: "Teknoloji", answer: "neural", explanation: "[A] paragrafında 'deep convolutional neural networks' denmiştir." },
        { id: 6, type: "fill", prompt: "6. Machine learning tools maintain visual accuracy in detecting oncological [ ... ].", label: "Hastalık", answer: "nodules", explanation: "[B] paragrafında 'early oncological nodules' geçer." },
        { id: 7, type: "fill", prompt: "7. Current jurisprudence suffers from legal [ ... ] regarding AI malpractice liability.", label: "Durum", answer: "ambiguity / ambiguities", explanation: "[C] paragrafında 'remains legally ambiguous' denilmiştir." },
        { id: 8, type: "mcq", prompt: "8. What is the author's stance regarding the relationship between human clinicians and AI?", options: ["A) Clinicians should resist algorithmic tools", "B) Symbiotic collaboration yields optimal healthcare results", "C) Machines should replace doctors immediately"], answer: "B", explanation: "[D] paragrafında insan empatisi ve makine hızının birleşimi savunulur." },
        { id: 9, type: "mcq", prompt: "9. Why are human clinicians vulnerable during prolonged imaging shifts?", options: ["A) Visual and cognitive fatigue", "B) Inadequate medical training", "C) Lack of digital monitors"], answer: "A", explanation: "[B] paragrafında 'vulnerable to visual fatigue' belirtilir." },
        { id: 10, type: "mcq", prompt: "10. The term 'decision support system' denotes:", options: ["A) A fully autonomous surgeon", "B) An assistive tool that aids human expert decision-making", "C) An administrative billing software"], answer: "B", explanation: "Karar destek sistemi hekime yardımcı olan bir araçtır." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The line graph below compares public expenditure on healthcare and AI medical technology in four nations from 2015 to 2025. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
        wordMin: 150,
        svgType: "health_lines"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Technological advancements in healthcare have considerably prolonged human life expectancy. However, some argue that this creates unsustainable financial burdens on retirement systems. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "What healthy habits do you try to incorporate into your daily routine?", topic: "Healthy Habits" },
        { q: "Do you think modern technology makes people more or less active? Why?", topic: "Technology & Health" },
        { q: "How often do you use online services or medical apps to check wellness?", topic: "Digital Wellness" }
      ],
      part2: {
        cardPrompt: "Describe an important technological device or medical development you find beneficial.",
        points: [
          "What it is and how it functions",
          "When you first learned about it",
          "Who benefits most from this development",
          "And explain why you consider it significant."
        ]
      },
      part3: [
        { q: "Should healthcare provision be universally free, or should private insurance play a dominant role?", topic: "Public vs Private Healthcare" },
        { q: "How might artificial intelligence transform patient-doctor relationships in the coming decades?", topic: "Future AI Medicine" },
        { q: "What can governments do to encourage younger generations to pursue careers in health sciences?", topic: "Medical Education" }
      ]
    }
  },

  // =========================================================================
  // MOCK #3: Cambridge 18 Format - VentureHub & 15-Minute Cities
  // =========================================================================
  mock3: {
    id: "mock3",
    number: 3,
    label: "MOCK EXAM #3",
    cambridgeRef: "Cambridge IELTS 18 Academic Test 1",
    category: "society",
    categoryLabel: "🏙️ Toplum & Şehir",
    theme: "Ortak Çalışma Alanı Sözleşmesi & 15 Dakikalık Akıllı Şehirler",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "VentureHub International Co-Working & Enterprise Contract",
      audioScript: `Officer: Welcome to VentureHub. How may I assist your business enterprise?
Manager: Hello, our remote software development team requires dedicated flexible workspace.
Officer: Certainly. First, could you provide your company registration name?
Manager: Yes, it is NexaTech Solutions. That is N-E-X-A-T-E-C-H.
Officer: Thank you. And your primary contact telephone?
Manager: It is 020 7946 0831.
Officer: How many dedicated executive desks do you require?
Manager: We need 8 desks in a soundproof open-plan suite.
Officer: We can accommodate that on Level 4. The contract rate is £1,800 per calendar month.
Manager: Are conference meeting rooms included?
Officer: Yes, each team receives 20 complimentary conference room credits per month.
Manager: When is the earliest occupancy commencement date?
Officer: You can occupy the premises starting October 1st with access badges.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Enterprise Name: [ N - E - X - A - T - E - C - H ] Solutions", label: "Şirket Adı", answer: "NexaTech", explanation: "Şirket adı NexaTech olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Contact Telephone: 020 7946 [ ... ]", label: "Telefon", answer: "0831", explanation: "Telefonun son dört hanesi 0831'dir." },
        { id: 3, type: "fill", prompt: "3. Number of Dedicated Desks: [ ... ] desks", label: "Masa Sayısı", answer: "8 / eight", explanation: "Talep edilen masa sayısı 8'dir." },
        { id: 4, type: "fill", prompt: "4. Monthly Contract Fee: £[ ... ]", label: "Aylık Ücret", answer: "1800 / 1,800", explanation: "Aylık kira bedeli £1,800'dür." },
        { id: 5, type: "fill", prompt: "5. Occupancy Date: October [ ... ]", label: "Giriş Tarihi", answer: "1 / 1st", explanation: "Başlangıç tarihi 1 Ekim'dir." },
        { id: 6, type: "mcq", prompt: "6. Which facility tier includes complimentary credits?", options: ["A) Printing services", "B) Conference meeting rooms", "C) Executive catering"], answer: "B", explanation: "Toplantı odası kredileri dahildir." },
        { id: 7, type: "mcq", prompt: "7. The dedicated suite is situated on which building floor?", options: ["A) Ground Floor", "B) Level 2", "C) Level 4"], answer: "C", explanation: "Çalışma alanı 4. kattadır." },
        { id: 8, type: "mcq", prompt: "8. How many free meeting room credits are granted monthly?", options: ["A) 10 credits", "B) 20 credits", "C) 50 credits"], answer: "B", explanation: "Aylık 20 kredi verilmektedir." },
        { id: 9, type: "mcq", prompt: "9. Premises access is secured through:", options: ["A) Biometric thumbprint", "B) Digital access badges", "C) Facial recognition scan"], answer: "B", explanation: "Girişler dijital kartlarla sağlanır." },
        { id: 10, type: "mcq", prompt: "10. Minimum contract duration commitment is:", options: ["A) 1 month", "B) 6 months", "C) 12 months"], answer: "A", explanation: "Esnek kiralama aylık taahhütlüdür." }
      ]
    },
    reading: {
      title: "The Morphological Transformation of Post-Industrial Megacities",
      passage: `[A] In the early twenty-first century, classical urban geography presumed that economic productivity necessitated dense concentration in central business districts (CBDs). However, digital connectivity and decentralized remote working frameworks have triggered an irreversible demographic and structural re-engineering of global metropolitan centers.

[B] Commercial real estate vacancies in major capitals have prompted municipal authorities to convert underutilized corporate towers into mixed-use residential habitats and vertical green spaces. This phenomenon, termed 'polycentric urbanism', decentralizes commerce into self-contained 15-minute neighborhoods where residents access employment, education, and leisure without extensive commuting.

[C] Concurrently, urban mobility systems have transitioned from automobile hegemony toward active micro-mobility and mass transit electrification. Cities like Paris and Barcelona have spearheaded pedestrianization initiatives that concurrently reduce urban heat island effects and augment public health metrics.

[D] Nevertheless, polycentric decentralization presents fiscal dilemmas for municipal treasuries reliant on commercial property tax revenues. Urban planners argue that sustainable economic rejuvenation necessitates diversified tax frameworks coupled with robust public-private infrastructure partnerships.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Classical urban geography postulated that central business districts were essential for economic concentration.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[A] paragrafında 'necessitated dense concentration in central business districts' doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. Polycentric urbanism requires residents to commute over two hours for daily employment.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[B] paragrafında 'without extensive commuting' denilmektedir." },
        { id: 3, type: "tfng", prompt: "3. Barcelona plans to ban all motor vehicles permanently by the year 2027.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN", explanation: "Barselona'nın yaya alanları geliştirdiği söylenmiş fakat 2027 yasağı belirtilmemiştir." },
        { id: 4, type: "tfng", prompt: "4. Pedestrianization policies have contributed to mitigating urban heat island phenomena.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[C] paragrafında 'reduce urban heat island effects' doğrulanır." },
        { id: 5, type: "fill", prompt: "5. Vacant corporate towers are increasingly converted into mixed-use [ ... ] habitats.", label: "Alan Türü", answer: "residential", explanation: "[B] paragrafında 'mixed-use residential habitats' geçer." },
        { id: 6, type: "fill", prompt: "6. Self-contained urban enclaves are frequently designated as 15-minute [ ... ].", label: "Kavram", answer: "neighborhoods / neighbourhood", explanation: "[B] paragrafında '15-minute neighborhoods' geçer." },
        { id: 7, type: "fill", prompt: "7. Municipal governments face dilemmas due to declining commercial property [ ... ] revenues.", label: "Maliye", answer: "tax", explanation: "[D] paragrafında 'commercial property tax revenues' belirtilmiştir." },
        { id: 8, type: "mcq", prompt: "8. What is the fundamental principle underpinning polycentric urbanism?", options: ["A) Concentrating all business in a single skyscraper", "B) Creating decentralized self-contained urban zones", "C) Demolishing all suburban rail links"], answer: "B", explanation: "Merkezsizleştirilmiş ve kendi kendine yeten kentsel alanlar kurmaktır." },
        { id: 9, type: "mcq", prompt: "9. Active micro-mobility initiatives aim primarily to:", options: ["A) Encourage pedestrian and non-polluting transport", "B) Subsidize diesel vehicle purchases", "C) Construct intercity expressways"], answer: "A", explanation: "Yaya ve çevre dostu ulaşımı teşvik etmektir." },
        { id: 10, type: "mcq", prompt: "10. How do planners propose resolving urban fiscal deficits?", options: ["A) Cancelling all public transport", "B) Diversifying tax structures and public-private partnerships", "C) Banning remote digital work"], answer: "B", explanation: "[D] paragrafında vergi çeşitliliği ve kamu-özel ortaklığı önerilir." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The visual chart illustrates the distribution of the workforce across remote, hybrid, and in-office models in metropolitan centers between 2019 and 2025. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
        wordMin: 150,
        svgType: "urban_bars"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Rapid urbanization has created megacities with populations exceeding ten million residents. Some believe this leads to overwhelming social and infrastructural decay, while others assert that megacities are vital engines of cultural and economic growth. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "Do you prefer living in a bustling large city or a quiet town? Why?", topic: "Urban Living" },
        { q: "How do you usually commute to work or university each day?", topic: "Commuting" },
        { q: "What public amenities in your area do you utilize most frequently?", topic: "Public Amenities" }
      ],
      part2: {
        cardPrompt: "Describe an interesting city or metropolitan area you have visited or would like to visit.",
        points: [
          "Where it is located and how you learned about it",
          "What architecture or public transport system it possesses",
          "What activities visitors can engage in there",
          "And explain why you find this city remarkable."
        ]
      },
      part3: [
        { q: "Will telecommuting permanently diminish the economic vitality of central business districts?", topic: "Future of Work" },
        { q: "How can municipal leaders balance historical preservation with rapid infrastructure modernization?", topic: "Urban Heritage" },
        { q: "In what ways can cities combat environmental pollution caused by dense automotive traffic?", topic: "Urban Pollution" }
      ]
    }
  },

  // =========================================================================
  // MOCK #4: Cambridge 18 Format - Wildlife Sanctuary & Psychology of Laughter
  // =========================================================================
  mock4: {
    id: "mock4",
    number: 4,
    label: "MOCK EXAM #4",
    cambridgeRef: "Cambridge IELTS 18 Academic Test 2",
    category: "nature",
    categoryLabel: "🌿 Çevre & Doğa",
    theme: "Yaban Hayatı Koruma & İnsan Gülmesinin Evrimi ve Psikolojisi",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Woodland Wildlife Sanctuary Volunteer Program",
      audioScript: `Coordinator: Good morning. Welcome to the Woodland Wildlife Trust volunteer desk.
Applicant: Hello, I saw your advertisement regarding weekend conservation volunteers.
Coordinator: Excellent! Let's get your details on our volunteer roster. Surname, please?
Applicant: It's Gallagher. G-A-L-L-A-G-H-E-R. First name is Fiona.
Coordinator: Thanks Fiona. What is your contact mobile?
Applicant: 07892 415 628.
Coordinator: Perfect. Which wildlife team are you keen to join?
Applicant: I'm interested in the wetland habitat preservation team.
Coordinator: Wonderful! We meet on Saturdays at 8:30 AM at the North Gate.
Applicant: Do I need to purchase specialized gear?
Coordinator: No, all protective gloves and waterproof boots are supplied by the sanctuary. However, volunteers must pack their own lunch.
Applicant: Is there any formal training certification provided?
Coordinator: Yes, after 30 volunteer hours, you receive a certified Biodiversity Fieldwork certificate.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Volunteer Surname: [ G - A - L - L - A - G - H - E - R ]", label: "Soyisim", answer: "Gallagher", explanation: "Soyadı Gallagher olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Contact Mobile Number: 07892 [ ... ]", label: "Telefon", answer: "415 628 / 415628", explanation: "Telefon numarası 07892 415 628'dir." },
        { id: 3, type: "fill", prompt: "3. Preferred Conservation Team: [ ... ] habitat team", label: "Alan", answer: "wetland", explanation: "Sulak alan (wetland) ekibidir." },
        { id: 4, type: "fill", prompt: "4. Saturday Gathering Location: [ ... ] Gate", label: "Kapı", answer: "North", explanation: "Kuzey Kapısı (North Gate) buluşma yeridir." },
        { id: 5, type: "fill", prompt: "5. Minimum hours for Certification: [ ... ] hours", label: "Saat", answer: "30 / thirty", explanation: "Sertifika için 30 saat gereklidir." },
        { id: 6, type: "mcq", prompt: "6. Which equipment item must volunteers provide themselves?", options: ["A) Protective gloves", "B) Packed lunch", "C) Waterproof boots"], answer: "B", explanation: "Öğle yemeğini (packed lunch) kendileri getirmelidir." },
        { id: 7, type: "mcq", prompt: "7. Saturday field work officially commences at:", options: ["A) 8:30 AM", "B) 9:00 AM", "C) 10:00 AM"], answer: "A", explanation: "Buluşma saati sabah 8:30'dur." },
        { id: 8, type: "mcq", prompt: "8. The primary threat to local wetland wildlife is:", options: ["A) Chemical runoff from agriculture", "B) Severe drought", "C) Invasive flora species"], answer: "A", explanation: "Tarımsal atıklar birincil tehdittir." },
        { id: 9, type: "mcq", prompt: "9. How are volunteer assignments organized?", options: ["A) Individual solo tasks", "B) Paired buddy teams", "C) Rotating weekly committees"], answer: "B", explanation: "İkili takımlar halinde çalışılır." },
        { id: 10, type: "mcq", prompt: "10. In case of stormy weather, field tasks are:", options: ["A) Cancelled immediately", "B) Relocated to the research greenhouse", "C) Deferred to Sunday"], answer: "B", explanation: "Fırtınalı havalarda sera laboratuvarına geçilir." }
      ]
    },
    reading: {
      title: "The Evolutionary Biology and Cognitive Psychology of Human Laughter",
      passage: `[A] Far from being an exclusively whimsical byproduct of humor, human laughter represents an evolutionary ancient acoustic signaling mechanism. Comparative primatologists have demonstrated that ritualized vocal panting in chimpanzees and bonobos during rough-and-tumble social play constitutes the evolutionary precursor to human mirth.

[B] Neurologically, genuine spontaneous laughter engages involuntary subcortical networks, notably the amygdala, hippocampus, and anterior cingulate cortex. This releases endorphins and reduces systemic cortisol concentrations, fostering social bonding and reciprocal altruism within hunter-gatherer clans.

[C] Conversely, 'conversational laughter'—deliberate, polite titters embedded into daily dialogue—is modulated by neocortical motor speech regions. Brain imaging reveals that human listeners reliably distinguish between authentic emotional laughter and polite conversational vocalizations within 200 milliseconds.

[D] Anthropologists hypothesize that laughter evolved primarily as a safety signal. When an ancestral band experienced a false alarm, collective laughter broadcast that perceived predators had departed, neutralizing panic and re-establishing communal equanimity.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Play panting in great apes is considered an evolutionary forerunner of human laughter.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[A] paragrafında 'constitutes the evolutionary precursor' denmiştir." },
        { id: 2, type: "tfng", prompt: "2. Spontaneous emotional laughter is governed by the conscious neocortical motor cortex.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[B] paragrafında istemsiz subkortikal ağların (involuntary subcortical) yönettiği belirtilir." },
        { id: 3, type: "tfng", prompt: "3. Human listeners require at least five seconds to distinguish between real and polite laughter.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[C] paragrafında 200 milisaniye içinde (within 200 milliseconds) ayırt ettikleri söylenmiştir." },
        { id: 4, type: "tfng", prompt: "4. Laughter played an evolutionary role as a communal signal indicating that a perceived hazard had dissipated.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[D] paragrafında güvenlik sinyali (safety signal) olduğu doğrulanır." },
        { id: 5, type: "fill", prompt: "5. Spontaneous laughter triggers the secretion of mood-enhancing [ ... ] in the brain.", label: "Hormon", answer: "endorphins", explanation: "[B] paragrafında 'releases endorphins' denmiştir." },
        { id: 6, type: "fill", prompt: "6. Conversational polite laughter is modulated by the brain's [ ... ] motor areas.", label: "Bölge", answer: "neocortical", explanation: "[C] paragrafında 'modulated by neocortical motor speech regions' geçer." },
        { id: 7, type: "fill", prompt: "7. Evolutionary anthropologists view laughter as a false alarm [ ... ] signal.", label: "Kavram", answer: "safety", explanation: "[D] paragrafında 'safety signal' olarak adlandırılmıştır." },
        { id: 8, type: "mcq", prompt: "8. What physiological change is associated with genuine spontaneous laughter?", options: ["A) Elevated cortisol levels", "B) Diminished cortisol concentrations", "C) Heightened blood pressure"], answer: "B", explanation: "[B] paragrafında kortizol seviyesini düşürdüğü (reduces cortisol) belirtilir." },
        { id: 9, type: "mcq", prompt: "9. Why was communal laughter advantageous to ancestral hunter-gatherer bands?", options: ["A) It helped coordinate hunting ambushes", "B) It strengthened clan cohesion and reciprocal trust", "C) It frightened away territorial rival tribes"], answer: "B", explanation: "[B] paragrafında klan bağlarını güçlendirdiği belirtilir." },
        { id: 10, type: "mcq", prompt: "10. The primary purpose of paragraph C is to demonstrate that:", options: ["A) Politeness is genetically inherited", "B) Conscious social laughter relies on distinct neural pathways from genuine emotion", "C) Fake laughter causes neurological stress"], answer: "B", explanation: "Bilinçli nezaket gülüşünün farklı beyin yollarını kullandığı anlatılır." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The diagram illustrates the sequential stages of industrial wastewater purification and ecological recovery in a municipal filtration facility. Summarize the information by reporting the main features.",
        wordMin: 150,
        svgType: "water_flow"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "In many historic cities, municipal authorities allocate large budgets to preserving historic buildings, whereas critics argue this capital should be channeled into constructing affordable modern housing. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "How often do you visit parks or natural reserves in your neighborhood?", topic: "Nature" },
        { q: "What kinds of television comedy or films make you laugh the most?", topic: "Humor" },
        { q: "Do you prefer spending your weekends outdoors or relaxing indoors?", topic: "Weekends" }
      ],
      part2: {
        cardPrompt: "Describe an old or historic building you have visited and found memorable.",
        points: [
          "Where the building is situated and what purpose it originally served",
          "What architectural features caught your attention",
          "What you learned about its past history",
          "And explain why this building left a lasting impression on you."
        ]
      },
      part3: [
        { q: "Should municipal funds prioritize historic preservation or modern public infrastructure?", topic: "Historic Architecture" },
        { q: "How does the architecture of a neighborhood influence residents' mental well-being?", topic: "Built Environment" },
        { q: "Why is it important for younger generations to understand cultural heritage?", topic: "Cultural Identity" }
      ]
    }
  },

  // =========================================================================
  // MOCK #5: Cambridge 17 Format - Community Art & Deep Ocean Archeology
  // =========================================================================
  mock5: {
    id: "mock5",
    number: 5,
    label: "MOCK EXAM #5",
    cambridgeRef: "Cambridge IELTS 17 Academic Test 1",
    category: "history",
    categoryLabel: "🏛️ Tarih & Kültür",
    theme: "Toplum Sanat Festivali & Derin Okyanus Gemi Batığı Arkeolojisi",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Harborview Community Arts & Cultural Festival Booking",
      audioScript: `Agent: Harborview Arts Center box office, how may I direct your call?
Caller: Hello, I'd like to book workshop tickets for the upcoming Waterfront Arts Festival.
Agent: Delighted to help. Can I take your family name first?
Caller: Yes, it is Sinclair. S-I-N-C-L-A-I-R. First name Robert.
Agent: Thank you Robert. Which creative workshop would you like to enroll in?
Caller: The maritime ceramics and pottery workshop.
Agent: We have that scheduled on Saturday, July 22nd. The session starts at 10:15 AM.
Caller: How much is the workshop enrollment fee?
Agent: It is £45 per adult participant, which includes all clay and firing kiln fees.
Caller: Perfect. What is the designated meeting venue?
Agent: Studio 4 in the Old Warehouse by Pier 7.
Caller: Does the ticket grant access to the evening outdoor jazz concert?
Agent: Yes, all workshop participants receive complimentary evening lawn passes.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Participant Surname: [ S - I - N - C - L - A - I - R ]", label: "Soyisim", answer: "Sinclair", explanation: "Soyadı Sinclair olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Selected Creative Workshop: Maritime [ ... ]", label: "Atölye", answer: "ceramics / pottery", explanation: "Seramik (ceramics) atölyesidir." },
        { id: 3, type: "fill", prompt: "3. Workshop Date: July [ ... ]", label: "Tarih", answer: "22 / 22nd", explanation: "Tarih 22 Temmuz'dur." },
        { id: 4, type: "fill", prompt: "4. Workshop Session Start Time: [ ... ] AM", label: "Saat", answer: "10:15", explanation: "Başlangıç saati 10:15'tir." },
        { id: 5, type: "fill", prompt: "5. Total Adult Fee: £[ ... ]", label: "Ücret", answer: "45", explanation: "Ücret £45'tir." },
        { id: 6, type: "mcq", prompt: "6. Where is the designated workshop studio located?", options: ["A) City Hall Annex", "B) Old Warehouse by Pier 7", "C) Harbor Light Pavilion"], answer: "B", explanation: "Old Warehouse atölye yeridir." },
        { id: 7, type: "mcq", prompt: "7. The £45 enrollment fee includes:", options: ["A) Professional pottery apron only", "B) Clay materials and kiln firing", "C) A guided boat cruise"], answer: "B", explanation: "Kil ve fırınlama masrafları dahildir." },
        { id: 8, type: "mcq", prompt: "8. What special perk is granted to workshop ticket holders?", options: ["A) Free buffet luncheon", "B) Free evening jazz concert access", "C) Discounted parking token"], answer: "B", explanation: "Akşam konserine ücretsiz giriş sağlanır." },
        { id: 9, type: "mcq", prompt: "9. Children under 12 must be accompanied by:", options: ["A) A certified art tutor", "B) An adult guardian", "C) A student chaperone"], answer: "B", explanation: "Yetişkin bir refakatçi gereklidir." },
        { id: 10, type: "mcq", prompt: "10. In case of cancellation, full refunds are issued if requested:", options: ["A) 48 hours in advance", "B) 7 days in advance", "C) On the day of event"], answer: "A", explanation: "48 saat önceden haber verilmelidir." }
      ]
    },
    reading: {
      title: "Robotic Underwater Archeology and the Preservation of Deep-Sea Shipwrecks",
      passage: `[A] Until the dawn of autonomous underwater vehicles (AUVs) and robotic deep-submergence systems, maritime archeology was practically confined to the shallow continental shelves accessible by SCUBA divers. However, ancient trade galleys that foundered in abyssal depths greater than 1,000 meters remained pristine, sheltered from surface wave kinetics, coastal pollution, and commercial salvage looting.

[B] The profound preservation of abyssal wrecks is due to extreme bathypelagic environmental conditions: near-freezing temperatures, complete solar darkness, and critically low dissolved oxygen concentrations. Under such hypoxic conditions, wood-boring mollusks (Teredo navalis), which devour sunken timber structures in shallow waters, cannot survive, allowing wooden ship hulls from classical Greco-Roman antiquity to endure for millennia intact.

[C] Today, archeologists map deep shipwreck fields using synthetic aperture sonar (SAS) and photogrammetric 3D optical scanning. Submersibles capture millimeter-resolution stereoscopic imagery, enabling archeologists on research ships to reconstruct underwater sites virtually without disturbing fragile sediment layers.

[D] However, deep-sea archeology faces severe modern threats from industrial bottom trawling. Huge commercial fishing nets rake the ocean floor, obliterating irreplaceable nautical relics in seconds. International treaties, notably UNESCO's 2001 Convention on the Protection of the Underwater Cultural Heritage, seek to establish protected maritime exclusion zones around vital historical shipwrecks.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. SCUBA divers were historically capable of conducting archeological excavation at depths exceeding 1,000 meters.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[A] paragrafında 1000 metrenin SCUBA dalgıçlarının erişiminin ötesinde olduğu belirtilir." },
        { id: 2, type: "tfng", prompt: "2. The absence of wood-boring mollusks in the deep ocean is attributed to hypoxic conditions.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında oksijensiz ortamda (hypoxic conditions) bu canlıların yaşayamadığı açıklanır." },
        { id: 3, type: "tfng", prompt: "3. UNESCO has successfully eliminated 100% of illegal bottom trawling worldwide.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN", explanation: "Metinde böyle kesin bir başarı iddiası bulunmamaktadır." },
        { id: 4, type: "tfng", prompt: "4. Modern archeologists can survey deep-sea wrecks without physically disturbing marine sediment.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[C] paragrafında 'without disturbing fragile sediment layers' denmektedir." },
        { id: 5, type: "fill", prompt: "5. High-resolution sound mapping of abyssal wrecks is conducted using synthetic aperture [ ... ].", label: "Cihaz", answer: "sonar", explanation: "[C] paragrafında 'synthetic aperture sonar' geçer." },
        { id: 6, type: "fill", prompt: "6. Wood-eating mollusks cannot withstand low dissolved [ ... ] concentrations.", label: "Element", answer: "oxygen", explanation: "[B] paragrafında 'low dissolved oxygen concentrations' denilmiştir." },
        { id: 7, type: "fill", prompt: "7. Deep-sea wrecks face severe physical destruction caused by commercial bottom [ ... ].", label: "Balıkçılık", answer: "trawling", explanation: "[D] paragrafında 'commercial bottom trawling' belirtilmiştir." },
        { id: 8, type: "mcq", prompt: "8. What environmental factor contributes to the preservation of wooden hulls in the deep ocean?", options: ["A) High water temperature and bright sunlight", "B) Low dissolved oxygen and near-freezing temperatures", "C) Strong undersea tidal currents"], answer: "B", explanation: "[B] paragrafında soğuk ve oksijensiz suların koruduğu açıklanır." },
        { id: 9, type: "mcq", prompt: "9. Why are robotic submersibles superior to manual salvage recovery?", options: ["A) They can capture millimetric 3D models without physically destroying fragile relics", "B) They cost significantly less than fishing boats", "C) They require zero electrical power"], answer: "A", explanation: "[C] paragrafında fiziki zarar vermeden hassas 3D modelleme yapabildikleri belirtilir." },
        { id: 10, type: "mcq", prompt: "10. In paragraph D, the author refers to the UNESCO 2001 convention to emphasize:", options: ["A) The necessity of legal international protection against deep-sea trawling damage", "B) The commercial value of ancient gold coins", "C) The failure of maritime archeology"], answer: "A", explanation: "Uluslararası yasal koruma ihtiyacını vurgulamaktadır." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The bar chart below compares public expenditure on arts and maritime historical heritage across four nations between 2005 and 2025. Summarize the information and make comparisons where relevant.",
        wordMin: 150,
        svgType: "arts_bars"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Some argue that state funding should be dedicated strictly to practical disciplines like medicine and scientific engineering, rather than cultural arts and archeological research. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "Do you enjoy visiting historical museums or art galleries?", topic: "Museums" },
        { q: "What is your favorite type of visual art or handicraft?", topic: "Arts" },
        { q: "How often do you listen to live musical performances?", topic: "Music" }
      ],
      part2: {
        cardPrompt: "Describe an exciting or adventurous trip you took that you still remember clearly.",
        points: [
          "Where you traveled and who accompanied you",
          "What transport you utilized during the voyage",
          "What unexpected or adventurous events occurred",
          "And explain why this journey was so memorable to you."
        ]
      },
      part3: [
        { q: "Should historical artifacts discovered underwater remain on the sea floor or be exhibited in museums?", topic: "Heritage Preservation" },
        { q: "How can tourism in fragile historical locations be managed sustainably?", topic: "Sustainable Tourism" },
        { q: "What role does art education play in developing analytical thinking in young children?", topic: "Arts in Education" }
      ]
    }
  },

  // =========================================================================
  // MOCK #6: Cambridge 16 Format - Youth Camp & The Science of Sleep
  // =========================================================================
  mock6: {
    id: "mock6",
    number: 6,
    label: "MOCK EXAM #6",
    cambridgeRef: "Cambridge IELTS 16 Academic Test 4",
    category: "tech",
    categoryLabel: "🤖 Teknoloji & Bilim",
    theme: "Gençlik Kampı Personel Alımı & Uyku Bilimi ve Hafıza",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Pines Outdoor Summer Camp Staff Employment Desk",
      audioScript: `Interviewer: Good afternoon. Welcome to the Pines Adventure Summer Camp recruitment office.
Candidate: Thank you. I'm applying for the assistant outdoor activity instructor vacancy.
Interviewer: Let's record your personal details. Family name, please?
Candidate: It's Davenport. That is D-A-V-E-N-P-O-R-T. First name Liam.
Interviewer: What is your primary coaching qualification?
Candidate: I hold a Level 2 Mountain Leadership certificate.
Interviewer: When is your earliest availability date to begin training?
Candidate: I can commence on June 15th.
Interviewer: The contract is for 8 weeks, with on-site staff cabin accommodation provided. What is the weekly allowance?
Candidate: The listing stated £320 per week.
Interviewer: That's correct, £320 plus complimentary staff meals in the dining pavilion. A valid first aid certificate is mandatory.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Candidate Surname: [ D - A - V - E - N - P - O - R - T ]", label: "Soyisim", answer: "Davenport", explanation: "Soyadı Davenport olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Coaching Qualification: Level 2 [ ... ] Leadership", label: "Sertifika", answer: "Mountain", explanation: "Mountain Leadership sertifikasıdır." },
        { id: 3, type: "fill", prompt: "3. Training Commencement Date: June [ ... ]", label: "Tarih", answer: "15 / 15th", explanation: "Başlangıç 15 Haziran'dır." },
        { id: 4, type: "fill", prompt: "4. Total Contract Duration: [ ... ] weeks", label: "Süre", answer: "8 / eight", explanation: "Sözleşme 8 haftadır." },
        { id: 5, type: "fill", prompt: "5. Weekly Staff Allowance: £[ ... ]", label: "Haftalık Ücret", answer: "320", explanation: "Haftalık ücret £320'dir." },
        { id: 6, type: "mcq", prompt: "6. What mandatory credential must all camp instructors present?", options: ["A) Scuba diving license", "B) Valid first aid certificate", "C) Commercial truck license"], answer: "B", explanation: "İlk yardım sertifikası zorunludur." },
        { id: 7, type: "mcq", prompt: "7. Staff meals are provided without charge in:", options: ["A) Local village diner", "B) Camp dining pavilion", "C) Individual mobile food trucks"], answer: "B", explanation: "Yemekler kamp yemekhanesinde verilir." },
        { id: 8, type: "mcq", prompt: "8. Camp instructor duties primarily involve:", options: ["A) Supervising wilderness hikes and kayak tours", "B) Administrative bookkeeping", "C) Bus maintenance"], answer: "A", explanation: "Yürüyüş ve kano turları yönetilir." },
        { id: 9, type: "mcq", prompt: "9. Instructor to child ratio at the camp is maintained at:", options: ["A) 1 instructor to 6 children", "B) 1 instructor to 15 children", "C) 1 instructor to 30 children"], answer: "A", explanation: "Oran 1'e 6'dır." },
        { id: 10, type: "mcq", prompt: "10. In the event of emergency medical incidents, instructors must contact:", options: ["A) The duty camp nurse immediately", "B) The regional newspaper", "C) Equipment suppliers"], answer: "A", explanation: "Kamp hemşiresi aranmalıdır." }
      ]
    },
    reading: {
      title: "The Neurobiology of Slow-Wave Sleep and Synaptic Memory Consolidation",
      passage: `[A] For decades, biological science regarded sleep as a passive restorative state necessary merely for metabolic clearance and bodily recuperation. However, contemporary cognitive neuroscience has illuminated that non-rapid eye movement (NREM) slow-wave sleep represents an intensely active computational period during which the brain restructures, compresses, and consolidates memory representations.

[B] During active wakefulness, the hippocampus operates as a high-capacity but ephemeral episodic buffer, absorbing myriad daily sensory inputs. During deep nocturnal slow-wave oscillations, synchronized neural firing bursts—termed sharp-wave ripples—re-enact daytime hippocampal activations, translocating memory traces to the permanent long-term storage of the neocortex.

[C] Concurrently, sleep facilitates synaptic downscaling. The 'Synaptic Homeostasis Hypothesis' posits that daytime learning saturates brain synapses with heightened metabolic and structural connections. Slow-wave sleep systematically prunes redundant synaptic pathways while preserving salient connections, refreshing cognitive capacity for subsequent acquisition.

[D] Chronic sleep deprivation systematically disrupts this consolidation loop. Epidemiological studies demonstrate that sustained sleep restriction impairs prefrontal executive functioning, elevates amyloid-beta plaque deposition, and accelerates neurodegenerative cognitive decline.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Traditional biology viewed sleep as an active informational computing state.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[A] paragrafında eskiden pasif bir dinlenme durumu sanıldığı belirtilir." },
        { id: 2, type: "tfng", prompt: "2. The hippocampus functions as a permanent long-term memory archive throughout life.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[B] paragrafında geçici bir bellek tamponu (ephemeral episodic buffer) olduğu açıklanır." },
        { id: 3, type: "tfng", prompt: "3. Nocturnal sharp-wave ripples transfer memory traces toward the neocortex.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında 'translocating memory traces to the permanent long-term storage of the neocortex' denir." },
        { id: 4, type: "tfng", prompt: "4. Synaptic pruning during slow-wave sleep preserves key connections while eliminating redundant pathways.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[C] paragrafında 'prunes redundant synaptic pathways while preserving salient connections' doğrulanır." },
        { id: 5, type: "fill", prompt: "5. The temporary daytime memory storage buffer in the brain is the [ ... ].", label: "Beyin Bölgesi", answer: "hippocampus", explanation: "[B] paragrafında hippocampus geçici tampon olarak tanımlanır." },
        { id: 6, type: "fill", prompt: "6. Nocturnal synchronized neural firing bursts are designated as sharp-wave [ ... ].", label: "Dalga", answer: "ripples", explanation: "[B] paragrafında 'sharp-wave ripples' ifadesi geçer." },
        { id: 7, type: "fill", prompt: "7. Chronic lack of sleep fosters the deposition of toxic [ ... ] plaques.", label: "Protein", answer: "amyloid-beta", explanation: "[D] paragrafında 'elevates amyloid-beta plaque deposition' geçer." },
        { id: 8, type: "mcq", prompt: "8. What is the fundamental premise of the Synaptic Homeostasis Hypothesis?", options: ["A) The brain never eliminates daytime synapses", "B) Deep sleep prunes weak synaptic connections to restore learning capacity", "C) Synapses only grow while individuals sleep"], answer: "B", explanation: "[C] paragrafında gereksiz sinapsların budanarak kapasitenin yenilendiği açıklanır." },
        { id: 9, type: "mcq", prompt: "9. Why is chronic sleep deprivation perilous to long-term cognitive health?", options: ["A) It permanently eliminates appetite", "B) It accelerates neurodegenerative decline and executive impairment", "C) It causes immediate memory erasure"], answer: "B", explanation: "[D] paragrafında nörodejeneratif gerilemeyi hızlandırdığı belirtilir." },
        { id: 10, type: "mcq", prompt: "10. In paragraph B, the word 'ephemeral' most closely denotes:", options: ["A) Eternal and unchanging", "B) Short-lived and temporary", "C) Rigid and inflexible"], answer: "B", explanation: "Ephemeral kelimesi 'kısa ömürlü, geçici' anlamına gelir." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The line chart below illustrates global coffee bean production and international consumption trends between 1990 and 2025 across four major economic zones. Summarize the information.",
        wordMin: 150,
        svgType: "coffee_lines"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Governments allocate massive national budgets toward space exploration and lunar missions. Some believe this expenditure is unjustifiable when severe problems like poverty and climate displacement persist on Earth. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "How many hours of sleep do you typically get each night?", topic: "Sleep Habits" },
        { q: "Do you find it easy or difficult to concentrate when studying late at night?", topic: "Concentration" },
        { q: "What is your favorite season of the year, and why?", topic: "Seasons" }
      ],
      part2: {
        cardPrompt: "Describe an ambitious personal goal that you successfully achieved.",
        points: [
          "What the goal was and when you set it",
          "What obstacles or difficulties you encountered",
          "What steps you took to overcome these challenges",
          "And explain how you felt once you achieved it."
        ]
      },
      part3: [
        { q: "Do people today place excessive pressure on themselves to achieve career success?", topic: "Ambition" },
        { q: "How has the definition of success changed between older and younger generations?", topic: "Generational Values" },
        { q: "Why is adequate rest frequently undervalued in modern competitive workplaces?", topic: "Work-Life Balance" }
      ]
    }
  },

  // =========================================================================
  // MOCK #7: Cambridge 15 Format - City Bike Share & Driverless Transit
  // =========================================================================
  mock7: {
    id: "mock7",
    number: 7,
    label: "MOCK EXAM #7",
    cambridgeRef: "Cambridge IELTS 15 Academic Test 2",
    category: "society",
    categoryLabel: "🏙️ Toplum & Şehir",
    theme: "Bisiklet Paylaşım Anketi & Otonom Sürücüsüz Ulaşım Ağları",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Metropolitan Cycling Infrastructure & Bike Share Feedback",
      audioScript: `Surveyor: Excuse me sir, do you have three minutes to complete our city cycling survey?
Cyclist: Sure, I just returned my shared bicycle to this docking dock.
Surveyor: Splendid! May I take your surname please?
Cyclist: It is Montgomery. M-O-N-T-G-O-M-E-R-Y. First name Ethan.
Surveyor: What is your primary destination today?
Cyclist: I commute daily to the Financial District.
Surveyor: How frequently do you utilize the city bike-share system?
Cyclist: Approximately 4 times per week.
Surveyor: What is your monthly subscription cost?
Cyclist: I pay £28 per month on the commuter tier.
Surveyor: Which feature could the municipality improve most urgently?
Cyclist: More protected segregated cycle lanes along Regent Street, and better lighting at docking stations after dusk.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Cyclist Surname: [ M - O - N - T - G - O - M - E - R - Y ]", label: "Soyisim", answer: "Montgomery", explanation: "Soyadı Montgomery olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Commuter Primary Destination: [ ... ] District", label: "Varış Noktası", answer: "Financial", explanation: "Finans Bölgesi (Financial District) varış yeridir." },
        { id: 3, type: "fill", prompt: "3. Weekly Frequency of Usage: [ ... ] times per week", label: "Sıklık", answer: "4 / four", explanation: "Haftada 4 kez kullanmaktadır." },
        { id: 4, type: "fill", prompt: "4. Monthly Subscription Cost: £[ ... ]", label: "Aylık Ücret", answer: "28", explanation: "Aylık ücret £28'dir." },
        { id: 5, type: "fill", prompt: "5. Street needing cycle lanes: [ ... ] Street", label: "Cadde", answer: "Regent", explanation: "Regent Street için şerit talep etmiştir." },
        { id: 6, type: "mcq", prompt: "6. What docking station amenity needs urgent improvement?", options: ["A) Touchscreen color monitors", "B) Lighting after dusk", "C) Water refill fountains"], answer: "B", explanation: "Akşam aydınlatması (lighting after dusk) talep edilmiştir." },
        { id: 7, type: "mcq", prompt: "7. Why does the commuter prefer bike sharing over subways?", options: ["A) Subways are completely closed", "B) Health benefits and reliable transit times", "C) Free helmets are provided"], answer: "B", explanation: "Sağlık ve dakik ulaşım nedeniyle tercih eder." },
        { id: 8, type: "mcq", prompt: "8. How does the cyclist report maintenance defects?", options: ["A) In-app red maintenance button", "B) Telephone hotline only", "C) Mail-in postcard"], answer: "A", explanation: "Mobil uygulamadaki arıza butonuyla bildirir." },
        { id: 9, type: "mcq", prompt: "9. What safety accessory does the user consistently carry?", options: ["A) High-visibility reflective vest", "B) Personal helmet", "C) First aid kit"], answer: "B", explanation: "Kendi kaskını (personal helmet) taşır." },
        { id: 10, type: "mcq", prompt: "10. The municipality plans to expand docking capacity by:", options: ["A) 500 new bikes next spring", "B) 5,000 new stations", "C) Eliminating all cycle paths"], answer: "A", explanation: "İlkbaharda 500 yeni bisiklet eklenecektir." }
      ]
    },
    reading: {
      title: "The Transition toward Autonomous Vehicular Fleets and Urban Redesign",
      passage: `[A] Autonomous vehicles (AVs)—powered by real-time lidar, radar telemetry, and deep reinforcement learning—are poised to dismantle the century-old paradigm of private vehicle ownership. Urban transport economic models suggest that transition to shared autonomous taxi fleets will slash private car ownership in dense metropolitan zones by as much as 75% within two decades.

[B] The geometrical consequences for city planning are revolutionary. In modern cities, up to 30% of prime urban land area is devoted to parked private cars. Because shared autonomous vehicles operate continuously on demand, parking requirements will plummet, liberating millions of square meters for urban re-greening, pedestrian parks, and affordable social housing.

[C] Furthermore, algorithmic fleet routing virtually eliminates human error—the causal factor in 94% of vehicular collisions. With vehicular platooning and interconnected vehicle-to-everything (V2X) communications, traffic congestion bottlenecks will decline dramatically without widening existing highway corridors.

[D] However, transitional dilemmas abound. Transport economists warn of the 'rebound effect': if driverless journeys become extraordinarily cheap and frictionless, commuters may abandon mass rail transit entirely, generating counterproductive road gridlock. Regulatory authorities must therefore integrate autonomous fleets within municipal mass transit grids rather than allowing unfettered private competition.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Autonomous taxi fleets are projected to reduce private car ownership in dense cities.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[A] paragrafında 'slash private car ownership by 75%' ifadesi doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. Up to 30% of urban land in modern cities is currently occupied by parking infrastructure.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında 'up to 30% of prime urban land is devoted to parked cars' geçer." },
        { id: 3, type: "tfng", prompt: "3. All major car manufacturers have agreed to stop producing combustion engines by 2026.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN", explanation: "Metinde böyle küresel bir üretim durdurma anlaşmasından söz edilmez." },
        { id: 4, type: "tfng", prompt: "4. Human driver error accounts for fewer than 10% of conventional road traffic accidents.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[C] paragrafında insan hatasının kazaların %94'ünün sebebi olduğu (%94 of vehicular collisions) belirtilir." },
        { id: 5, type: "fill", prompt: "5. Autonomous fleets sense their environment using radar telemetry and [ ... ].", label: "Sensör", answer: "lidar", explanation: "[A] paragrafında lidar ve radar sensörleri sayılır." },
        { id: 6, type: "fill", prompt: "6. Interconnected vehicles coordinate navigation through vehicle-to-everything [ ... ] networks.", label: "Teknoloji", answer: "V2X", explanation: "[C] paragrafında 'vehicle-to-everything (V2X)' geçer." },
        { id: 7, type: "fill", prompt: "7. The danger that cheap driverless trips could cannibalize public rail is termed the [ ... ] effect.", label: "Kavram", answer: "rebound", explanation: "[D] paragrafında 'rebound effect' olarak adlandırılır." },
        { id: 8, type: "mcq", prompt: "8. What major urban land benefit will result from reduced parking requirements?", options: ["A) More land for green spaces and affordable housing", "B) Expansion of heavy industrial manufacturing", "C) Demolition of historic city centers"], answer: "A", explanation: "[B] paragrafında yeşil alanlar ve konut için arsa açılacağı belirtilir." },
        { id: 9, type: "mcq", prompt: "9. What risk does the 'rebound effect' pose to metropolitan transit?", options: ["A) Drivers will refuse to use computers", "B) Frictionless autonomous rides might crowd out mass transit and create gridlock", "C) Electric batteries will run out of power"], answer: "B", explanation: "[D] paragrafında toplu taşımadan kaçış ve trafik sıkışıklığı riski açıklanır." },
        { id: 10, type: "mcq", prompt: "10. In paragraph C, vehicular 'platooning' refers to:", options: ["A) Vehicles driving in tightly synchronized aerodynamic formations", "B) Vehicles parking on multistory rooftops", "C) Vehicles breaking down at intersections"], answer: "A", explanation: "Platooning araçların senkronize ve birbirine yakın konvoy halinde gitmesidir." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The chart illustrates passenger transport numbers (in billions of passenger-kilometers) across rail, air, and highway modes in three continents from 1995 to 2025. Summarize the information and report key trends.",
        wordMin: 150,
        svgType: "transit_lines"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Social media and digital smartphones have transformed the way people interact. Some argue that this fosters profound global connection, while others assert it has severely eroded authentic human empathy and mental well-being. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "How do you usually commute around your city or town?", topic: "Commute" },
        { q: "Do you know how to ride a bicycle, and do you ride regularly?", topic: "Cycling" },
        { q: "How important is punctuality to you when traveling for appointments?", topic: "Punctuality" }
      ],
      part2: {
        cardPrompt: "Describe an important invention or technological innovation that changed human daily life.",
        points: [
          "What the invention is and when it was developed",
          "How people utilized life before this invention existed",
          "What major benefits or conveniences it brought",
          "And explain why you consider this innovation pivotal."
        ]
      },
      part3: [
        { q: "Will autonomous machines make human workers obsolete in the transportation sector?", topic: "Automation & Labor" },
        { q: "How can urban planners design cities that prioritize pedestrians over automobiles?", topic: "Pedestrianization" },
        { q: "Is technological innovation always accompanied by unforeseen social disadvantages?", topic: "Technological Progress" }
      ]
    }
  },

  // =========================================================================
  // MOCK #8: Cambridge 14 Format - Marine Biology & Endangered Dialects
  // =========================================================================
  mock8: {
    id: "mock8",
    number: 8,
    label: "MOCK EXAM #8",
    cambridgeRef: "Cambridge IELTS 14 Academic Test 3",
    category: "history",
    categoryLabel: "🏛️ Tarih & Kültür",
    theme: "Deniz Biyolojisi Stajı & Yok Olma Tehlikesindeki Yerel Diller",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Pacific Marine Biology Research Station Internship",
      audioScript: `Advisor: Marine Research Institute, internship admissions. How can I assist?
Applicant: Hello, I'm submitting my undergraduate fieldwork internship application.
Advisor: Welcome. May I record your full surname?
Applicant: Yes, it's MacIntyre. M-A-C-I-N-T-Y-R-E. First name Callum.
Advisor: And your university registration number?
Applicant: U-N-I-5192.
Advisor: Which oceanic ecosystem module are you applying to join?
Applicant: The Coral Reef Regeneration project.
Advisor: We have 8 placements on Heron Island. The internship begins on March 10th.
Applicant: What is the subsidized accommodation cost?
Advisor: On-island research bunks are £80 per week, including laboratory bench privileges and diving tanks.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Applicant Surname: [ M - A - C - I - N - T - Y - R - E ]", label: "Soyisim", answer: "MacIntyre", explanation: "Soyadı MacIntyre olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Student Registration Number: UNI-[ ... ]", label: "Öğrenci No", answer: "5192", explanation: "Numara 5192'dir." },
        { id: 3, type: "fill", prompt: "3. Oceanic Research Project: [ ... ] Reef Regeneration", label: "Proje", answer: "Coral", explanation: "Mercan resifi (Coral) projesidir." },
        { id: 4, type: "fill", prompt: "4. Island Fieldwork Location: [ ... ] Island", label: "Ada", answer: "Heron", explanation: "Heron Adası'dır." },
        { id: 5, type: "fill", prompt: "5. Weekly Subsidized Lodging: £[ ... ]", label: "Haftalık Ücret", answer: "80", explanation: "Ücret £80'dir." },
        { id: 6, type: "mcq", prompt: "6. When does the field placement officially commence?", options: ["A) March 10th", "B) April 1st", "C) May 15th"], answer: "A", explanation: "Başlangıç tarihi 10 Mart'tır." },
        { id: 7, type: "mcq", prompt: "7. The £80 weekly lodging fee covers:", options: ["A) Personal meals only", "B) Research bunks, lab access, and diving tanks", "C) Flight travel tickets"], answer: "B", explanation: "Yatak, laboratuvar ve dalış tüpleri dahildir." },
        { id: 8, type: "mcq", prompt: "8. Applicants must demonstrate proficiency in:", options: ["A) Advanced marine diving certification", "B) Commercial fishing navigation", "C) Heavy crane operation"], answer: "A", explanation: "Dalış sertifikası gereklidir." },
        { id: 9, type: "mcq", prompt: "9. The primary fieldwork task involves:", options: ["A) Monitoring coral bleaching and water acidity", "B) Catching commercial fish", "C) Guiding tourist cruises"], answer: "A", explanation: "Mercan beyazlaması ve asitlik ölçülür." },
        { id: 10, type: "mcq", prompt: "10. At the end of the internship, students must submit:", options: ["A) A 5,000-word peer-reviewed research monograph", "B) A photo album", "C) A financial tax invoice"], answer: "A", explanation: "Araştırma raporu sunulmalıdır." }
      ]
    },
    reading: {
      title: "Linguistic Diversity and the Urgent Documentation of Endangered Dialects",
      passage: `[A] Of the roughly 7,000 distinct spoken languages existing on Earth today, linguists soberingly calculate that over 50% will fall silent by the close of the twenty-first century. Language extinction is accelerating at an unprecedented rate, predominantly driven by economic globalization, urbanization, and state educational policies that privilege major national languages over indigenous vernaculars.

[B] The demise of a language entails far more than the cessation of vocal syntax; it extinguishes an irreplaceable epistemological archive. Indigenous idioms encode intricate ecological lexicons accumulated over millennia, detailing medicinal plant botanies, weather indicators, and animal behavioral cycles unknown to Western scientific taxonomies. When an Amazonian or Arctic elder passes without an apprentice speaker, centuries of botanical science vanish irreversibly.

[C] In response, computational linguists and acoustic field researchers are deploying digital audio archives and natural language processing (NLP) to capture dying phonetics. Projects in Papua New Guinea, the Caucasus, and the Amazon record elderly speakers in immersion settings, compiling interactive digital audio lexicons and grammar primers.

[D] Ultimately, digital archiving is merely an emergency preservation measure; genuine language survival necessitates active intergenerational transmission. Revitalization initiatives like the Māori 'language nests' (Kōhanga Reo) in New Zealand demonstrate that community-led linguistic immersion in preschools can resurrect endangered tongues into vibrant living languages.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. More than half of currently spoken world languages are projected to vanish by 2100.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[A] paragrafında 'over 50% will fall silent by the close of the 21st century' doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. Indigenous vocabularies contain medicinal and botanical taxonomy often unrecorded in Western science.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında geleneksel tıp ve botanik bilgisini içerdiği doğrulanır." },
        { id: 3, type: "tfng", prompt: "3. Digital recording archives alone guarantee that a dying language will become spoken by younger generations.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[D] paragrafında arşivlemenin tek başına yetersiz olduğu, canlı aktarım gerektiği belirtilir." },
        { id: 4, type: "tfng", prompt: "4. The Māori 'language nest' model has been legislatively banned across New Zealand.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[D] paragrafında bu modelin başarılı bir canlanma örneği olduğu anlatılır." },
        { id: 5, type: "fill", prompt: "5. Indigenous idioms preserve irreplaceable ecological and botanical [ ... ].", label: "Kavram", answer: "lexicons / knowledge", explanation: "[B] paragrafında 'ecological lexicons' geçer." },
        { id: 6, type: "fill", prompt: "6. Linguists deploy digital audio archives and natural language [ ... ] to capture dying speech.", label: "Teknoloji", answer: "processing", explanation: "[C] paragrafında 'natural language processing (NLP)' geçer." },
        { id: 7, type: "fill", prompt: "7. The successful preschool language revitalization nests originated among the [ ... ] people.", label: "Topluluk", answer: "Māori / Maori", explanation: "[D] paragrafında Maori 'language nests' modeli verilir." },
        { id: 8, type: "mcq", prompt: "8. What is identified as a major driver of linguistic homogenization?", options: ["A) State education policies and economic globalization", "B) Expansion of oceanic sea lanes", "C) Traditional farming practices"], answer: "A", explanation: "[A] paragrafında küreselleşme ve eğitim politikaları gösterilir." },
        { id: 9, type: "mcq", prompt: "9. Why does the extinction of an indigenous language harm global scientific knowledge?", options: ["A) It prevents people from learning English", "B) It obliterates thousands of years of botanical and ecological medicinal knowledge", "C) It causes dictionary printing costs to rise"], answer: "B", explanation: "[B] paragrafında binlerce yıllık botanik bilginin kaybolduğu vurgulanır." },
        { id: 10, type: "mcq", prompt: "10. The author concludes that sustainable language survival requires:", options: ["A) Total isolation from modern technology", "B) Active community-led intergenerational transmission and immersion", "C) Heavy government fines for speaking English"], answer: "B", explanation: "[D] paragrafında nesiller arası canlı aktarımın şart olduğu ifade edilir." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The process flow diagram below delineates the industrial recycling of scrap steel into new construction materials. Summarize the process and describe key stages.",
        wordMin: 150,
        svgType: "steel_flow"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Due to advancements in internet video technology, tertiary education is increasingly conducted online. Some believe virtual universities will replace traditional campuses, while others maintain that in-person campus life is indispensable. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "How many languages can you speak, and which would you like to learn next?", topic: "Languages" },
        { q: "Do you enjoy learning about the marine life or ocean environments?", topic: "Oceans" },
        { q: "What colors do you prefer wearing when attending formal events?", topic: "Colors" }
      ],
      part2: {
        cardPrompt: "Describe a difficult decision you made that had a major positive outcome.",
        points: [
          "What the situation was and what choice you faced",
          "Why the decision was demanding or stressful",
          "What counsel or advice you sought from others",
          "And explain why this decision ultimately proved beneficial."
        ]
      },
      part3: [
        { q: "Do individuals today face too many trivial choices in commercial consumer culture?", topic: "Consumer Choices" },
        { q: "How does the preservation of minority languages influence national cohesion?", topic: "Linguistic Rights" },
        { q: "Should governments fund language revitalization or let dying dialects decline naturally?", topic: "Language Policy" }
      ]
    }
  },

  // =========================================================================
  // MOCK #9: Cambridge 19 Format - Conference Logistics & Quantum Computing
  // =========================================================================
  mock9: {
    id: "mock9",
    number: 9,
    label: "MOCK EXAM #9",
    cambridgeRef: "Cambridge IELTS 19 Academic Test 1",
    category: "tech",
    categoryLabel: "🤖 Teknoloji & Bilim",
    theme: "Uluslararası Konferans Lojistiği & Kuantum Kriptografi",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Global Tech Summit Volunteer & Logistics Coordination",
      audioScript: `Coordinator: Global Tech Summit logistics bureau, good morning.
Volunteer: Hello, I received the invitation to join the technical operations volunteer crew.
Coordinator: Excellent! May I confirm your family surname?
Volunteer: Yes, it is Fitzgerald. F-I-T-Z-G-E-R-A-L-D. First name Maya.
Coordinator: What is your preferred operational department?
Volunteer: Audio-visual staging and live satellite streaming.
Coordinator: Great. The summit is held at the ExCeL Convention Center from November 3rd to 5th.
Volunteer: What time is the mandatory briefing session?
Coordinator: The orientation briefing is on November 2nd at 9:00 AM in Hall B.
Volunteer: Are meals and travel expenses reimbursed?
Coordinator: Yes, lunch vouchers and a £25 daily travel stipend are provided to all active crew members.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Volunteer Surname: [ F - I - T - Z - G - E - R - A - L - D ]", label: "Soyisim", answer: "Fitzgerald", explanation: "Soyadı Fitzgerald olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Operational Department: Audio-visual staging & [ ... ]", label: "Bölüm", answer: "streaming", explanation: "Canlı yayın (streaming) bölümüdür." },
        { id: 3, type: "fill", prompt: "3. Convention Center Venue: [ ... ] Center", label: "Merkez", answer: "ExCeL", explanation: "ExCeL Kongre Merkezi'dir." },
        { id: 4, type: "fill", prompt: "4. Orientation Briefing Date: November [ ... ]", label: "Tarih", answer: "2 / 2nd", explanation: "Tarih 2 Kasım'dır." },
        { id: 5, type: "fill", prompt: "5. Daily Travel Stipend: £[ ... ]", label: "Seyahat Ödeneği", answer: "25", explanation: "Günlük ödenek £25'tir." },
        { id: 6, type: "mcq", prompt: "6. Where will the mandatory orientation briefing occur?", options: ["A) Hall B", "B) Main Ballroom", "C) Executive Lounge"], answer: "A", explanation: "Hall B'de yapılacaktır." },
        { id: 7, type: "mcq", prompt: "7. Active crew members receive complimentary:", options: ["A) Free hotel penthouse suite", "B) Lunch vouchers and travel stipend", "C) High-end laptop computer"], answer: "B", explanation: "Öğle yemeği kuponu ve yol parası verilir." },
        { id: 8, type: "mcq", prompt: "8. How many international delegates are expected to attend?", options: ["A) Over 5,000 delegates", "B) Exactly 200 delegates", "C) 50,000 delegates"], answer: "A", explanation: "5.000'den fazla delege beklenmektedir." },
        { id: 9, type: "mcq", prompt: "9. What uniform attire is required for the stage crew?", options: ["A) Casual jeans", "B) Black trousers and summit branded polo", "C) Formal tuxedo"], answer: "B", explanation: "Siyah pantolon ve logolu polo tişört giyilir." },
        { id: 10, type: "mcq", prompt: "10. In case of schedule changes, volunteers receive alerts via:", options: ["A) SMS text broadcast", "B) Postal letters", "C) Notice board bulletins"], answer: "A", explanation: "SMS mesajıyla anlık bilgilendirme yapılır." }
      ]
    },
    reading: {
      title: "Quantum Information Processing, Superposition, and Cryptographic Security",
      passage: `[A] Classical digital computing relies on the binary bit—an electrical charge representing definitively either 0 or 1. Quantum computing, by contrast, harnesses the bizarre counter-intuitive principles of quantum mechanics: superposition and entanglement. Leveraging quantum bits, or 'qubits', quantum processors perform multidimensional mathematical operations in fractions of a second that would consume classical supercomputers millennia.

[B] The cornerstone of quantum computation is superposition. A qubit can exist simultaneously in a linear combination of states |0⟩ and |1⟩ until physical measurement collapses its wave function. When multiple qubits are entangled, their quantum states become inextricably intertwined; changing the property of one instantaneously dictates the state of its counterpart, regardless of spatial distance.

[C] This immense computational velocity presents an existential crisis for modern cybersecurity. Contemporary e-commerce, banking encryption, and national defense databases rely upon public-key cryptography algorithms (such as RSA and ECC), which are mathematically protected by the intractable difficulty of factoring huge prime numbers. Peter Shor's quantum factoring algorithm proved that a fault-tolerant quantum computer could shatter RSA encryption in minutes.

[D] In response, international security agencies and mathematicians are racing to standardize 'post-quantum cryptography' (PQC). These novel lattice-based cryptographic architectures rely on complex geometric vector problems that remain mathematically impregnable to both classical and quantum attacks.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Classical binary computers can exist simultaneously in states 0 and 1 without external manipulation.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[A] paragrafında klasik bitlerin kesinlikle 0 ya da 1 olduğu belirtilir." },
        { id: 2, type: "tfng", prompt: "2. Shor's algorithm proves that quantum processors could decrypt conventional RSA banking algorithms.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[C] paragrafında Shor algoritmasının RSA'yı dakikalar içinde kırabileceği doğrulanır." },
        { id: 3, type: "tfng", prompt: "3. Post-quantum cryptography relies exclusively on classical prime number factorization.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[D] paragrafında asal sayılar yerine kafes tabanlı geometrik problemlere (lattice-based) dayandığı belirtilir." },
        { id: 4, type: "tfng", prompt: "4. Quantum entanglement ceases to function if particles are separated by more than 10 kilometers.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[B] paragrafında mesafeden bağımsız olduğu ('regardless of spatial distance') belirtilmiştir." },
        { id: 5, type: "fill", prompt: "5. The fundamental unit of information in quantum computing is the [ ... ].", label: "Birim", answer: "qubit / quantum bit", explanation: "[A] paragrafında 'qubit' olarak adlandırılır." },
        { id: 6, type: "fill", prompt: "6. Current banking security depends on the mathematical hardness of factoring [ ... ] numbers.", label: "Sayı Türü", answer: "prime", explanation: "[C] paragrafında 'factoring huge prime numbers' geçer." },
        { id: 7, type: "fill", prompt: "7. Post-quantum cryptographic systems utilize complex [ ... ] based geometric algorithms.", label: "Mimari", answer: "lattice", explanation: "[D] paragrafında 'lattice-based cryptographic architectures' geçer." },
        { id: 8, type: "mcq", prompt: "8. What physical phenomenon enables qubits to calculate multiple outcomes simultaneously?", options: ["A) Quantum superposition", "B) High electrical voltage", "C) Thermal insulation"], answer: "A", explanation: "[B] paragrafında süperpozisyon sayesinde olduğu açıklanır." },
        { id: 9, type: "mcq", prompt: "9. Why does quantum technology alarm global banking and security institutions?", options: ["A) It uses excessive water", "B) It threatens to dismantle public-key encryption architectures like RSA", "C) It causes satellite malfunctions"], answer: "B", explanation: "[C] paragrafında bankacılık şifreleme sistemlerini çökertme riski açıklanır." },
        { id: 10, type: "mcq", prompt: "10. What is the overarching objective of Post-Quantum Cryptography (PQC)?", options: ["A) Banning quantum computers entirely", "B) Designing encryption architectures invulnerable to both quantum and classical machines", "C) Reducing computer hardware manufacturing costs"], answer: "B", explanation: "[D] paragrafında kuantum saldırılarına dirençli yeni şifreleme geliştirmek olduğu belirtilir." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The bar chart below compares the proportion of the population aged 65 and over across five developed nations from 1980 to 2040 (projected). Summarize the information and describe key demographic shifts.",
        wordMin: 150,
        svgType: "aging_bars"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "With the rise of generative artificial intelligence, machines can generate realistic art, literature, and computer code. Some believe this diminishes the value of human creativity, while others assert AI will liberate human intellect. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "How often do you use artificial intelligence or computer chatbots in your daily studies?", topic: "Technology" },
        { q: "Do you enjoy cooking meals at home, or do you prefer eating out?", topic: "Cooking" },
        { q: "What is your favorite way to spend a quiet evening after work?", topic: "Evening Routine" }
      ],
      part2: {
        cardPrompt: "Describe an inspiring public lecture, speech, or presentation you listened to.",
        points: [
          "Who the speaker was and where the event occurred",
          "What topic or central message was presented",
          "How the audience reacted during the speech",
          "And explain why this talk inspired you personally."
        ]
      },
      part3: [
        { q: "What personal qualities distinguish an exceptional public speaker from an ordinary presenter?", topic: "Public Speaking" },
        { q: "How will artificial intelligence transform academic scholarship and student examinations?", topic: "AI & Education" },
        { q: "Should governments establish strict regulatory frameworks on autonomous computing systems?", topic: "Tech Governance" }
      ]
    }
  },

  // =========================================================================
  // MOCK #10: Cambridge 19 Format - Global Student Exchange & Microplastics
  // =========================================================================
  mock10: {
    id: "mock10",
    number: 10,
    label: "MOCK EXAM #10",
    cambridgeRef: "Cambridge IELTS 19 Academic Test 2",
    category: "nature",
    categoryLabel: "🌿 Çevre & Doğa",
    theme: "Üniversite Değişim Programı & Okyanuslardaki Mikroplastik Kirliliği",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Global University Erasmus & Exchange Briefing",
      audioScript: `Advisor: Study Abroad Office, how may I help?
Student: Hi, I'm attending the European University Exchange briefing session today.
Advisor: Excellent. May I take your family surname?
Student: It is O'Connor. O-C-O-N-N-O-R. First name Patrick.
Advisor: Thank you Patrick. What is your major degree discipline?
Student: Environmental Engineering.
Advisor: We have an accredited exchange partner at the University of Zurich. The semester begins on September 25th.
Student: Is there a language prerequisite?
Advisor: While classes are conducted in English, completing a basic B1 German module is strongly advised.
Student: What is the monthly living expense estimate?
Advisor: Accommodation in student halls averages 650 Swiss Francs per month.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Student Surname: [ O - C - O - N - N - O - R ]", label: "Soyisim", answer: "O'Connor", explanation: "Soyadı O'Connor olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Degree Discipline: [ ... ] Engineering", label: "Bölüm", answer: "Environmental", explanation: "Çevre Mühendisliği'dir." },
        { id: 3, type: "fill", prompt: "3. Exchange Partner City: University of [ ... ]", label: "Şehir", answer: "Zurich", explanation: "Zürih Üniversitesi'dir." },
        { id: 4, type: "fill", prompt: "4. Semester Start Date: September [ ... ]", label: "Tarih", answer: "25 / 25th", explanation: "Başlangıç 25 Eylül'dür." },
        { id: 5, type: "fill", prompt: "5. Monthly Hall Accommodation: [ ... ] Swiss Francs", label: "Aylık Ücret", answer: "650", explanation: "Aylık 650 İsviçre Frangı'dır." },
        { id: 6, type: "mcq", prompt: "6. Which language qualification is recommended prior to departure?", options: ["A) B1 German", "B) C2 French", "C) Native Italian"], answer: "A", explanation: "B1 Almanca önerilmektedir." },
        { id: 7, type: "mcq", prompt: "7. How are academic course credits transferred back?", options: ["A) ECTS European credit transfer protocol", "B) Retaking all exams upon return", "C) Automatic graduation"], answer: "A", explanation: "ECTS kredileriyle transfer edilir." },
        { id: 8, type: "mcq", prompt: "8. What medical coverage is required for exchange students?", options: ["A) European Health Insurance Card (EHIC)", "B) Private clinic subscription only", "C) No health insurance required"], answer: "A", explanation: "EHIC kartı zorunludur." },
        { id: 9, type: "mcq", prompt: "9. Where can students apply for study abroad travel grants?", options: ["A) International Student Mobility Office", "B) Main library desk", "C) City airport desk"], answer: "A", explanation: "Öğrenci Hareketliliği Ofisi'nden başvurulur." },
        { id: 10, type: "mcq", prompt: "10. Exchange application dossiers must be finalized by:", options: ["A) April 30th", "B) August 1st", "C) November 15th"], answer: "A", explanation: "Son başvuru 30 Nisan'dır." }
      ]
    },
    reading: {
      title: "Anthropogenic Oceanic Microplastics and Trophic Bioaccumulation",
      passage: `[A] Each year, an estimated 11 million metric tons of plastic waste cascades from terrestrial waterways into marine environments. Exposed to solar ultraviolet radiation, physical wave attrition, and saline oxidation, synthetic polymers fracture into microscopic particles less than five millimeters in diameter, categorized as 'microplastics'.

[B] The ecological peril of microplastics stems from their ubiquity and chemical lipophilicity. Microplastic particles adsorb hydrophobic organic pollutants—including polychlorinated biphenyls (PCBs) and polycyclic aromatic hydrocarbons (PAHs)—at concentrations millions of times higher than surrounding seawater. When filter-feeding zooplankton, mussels, and pelagic fish mistake these particles for nutritious plankton, toxic contaminants enter the foundational levels of the marine food web.

[C] Through trophic magnification (bioaccumulation), apex marine predators including tuna, swordfish, and cetaceans accumulate hazardous chemical body burdens. Recent autopsies and human blood samples demonstrate that microplastics have crossed mammalian biological barriers, infiltrating vascular tissue and placenta membranes.

[D] Mitigating microplastic contamination necessitates global industrial reform. Upstream solutions—such as deploying micro-fiber traps in industrial washing machines, biodegradable bio-polymers, and binding UN plastic treaties—represent the only viable mechanisms for protecting oceanic biosphere integrity.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Microplastics are defined as synthetic polymer fragments under five millimeters in diameter.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[A] paragrafında 'particles less than five millimeters in diameter' tanımı doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. Filter-feeding marine fauna consistently distinguish microplastics from natural plankton food.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[B] paragrafında plastiği besinle karıştırdıkları ('mistake these particles for plankton') belirtilir." },
        { id: 3, type: "tfng", prompt: "3. Microplastics have been identified in human vascular tissue and placental membranes.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[C] paragrafında insan damarlarında ve plasentada bulunduğu doğrulanır." },
        { id: 4, type: "tfng", prompt: "4. All world oceans are projected to be 100% free of microplastics by 2035.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN", explanation: "Metinde böyle gerçekçi olmayan bir tarihsel iddia yer almamaktadır." },
        { id: 5, type: "fill", prompt: "5. Plastic polymers fracture into microplastics under ultraviolet [ ... ] and wave attrition.", label: "Faktör", answer: "radiation", explanation: "[A] paragrafında 'ultraviolet radiation' geçer." },
        { id: 6, type: "fill", prompt: "6. Toxic chemicals accumulate up the food chain through trophic [ ... ].", label: "Biyoloji Terimi", answer: "magnification / bioaccumulation", explanation: "[C] paragrafında 'trophic magnification (bioaccumulation)' geçer." },
        { id: 7, type: "fill", prompt: "7. Washing machines can be retrofitted with micro-fiber [ ... ] to reduce plastic outflow.", label: "Cihaz", answer: "traps", explanation: "[D] paragrafında 'micro-fiber traps' belirtilir." },
        { id: 8, type: "mcq", prompt: "8. Why are microplastics chemically hazardous to marine organisms?", options: ["A) They adsorb toxic industrial pollutants at extremely high concentrations", "B) They dissolve immediately in salt water", "C) They emit high nuclear radioactivity"], answer: "A", explanation: "[B] paragrafında zehirli kimyasalları sünger gibi emdikleri açıklanır." },
        { id: 9, type: "mcq", prompt: "9. Which marine organisms first absorb microplastics at the base of the food web?", options: ["A) Apex killer whales", "B) Filter-feeding zooplankton and small fish", "C) Deep-sea giant squids"], answer: "B", explanation: "[B] paragrafında filtreyle beslenen zooplankton ve balıkların ilk yuttuğu belirtilir." },
        { id: 10, type: "mcq", prompt: "10. The author's primary proposed solution in paragraph D emphasizes:", options: ["A) Cleaning the entire ocean floor with magnets", "B) Upstream industrial redesign, fiber traps, and global binding treaties", "C) Banning all human fish consumption"], answer: "B", explanation: "Kaynağında önleme, mikro filtreler ve küresel anlaşmalar savunulur." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The line graph below charts global agricultural land usage, arable farmland loss, and deforestation rates from 1990 to 2025 across four continents. Summarize the information and report key trends.",
        wordMin: 150,
        svgType: "agri_lines"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Some nations require high school graduates to complete one year of mandatory community or military service before university. Proponents believe this builds civic responsibility, while opponents argue it infringes on personal liberty. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "Have you ever considered studying or living abroad in a foreign country?", topic: "Study Abroad" },
        { q: "How often do you recycle household plastic or sort your domestic waste?", topic: "Recycling" },
        { q: "Do you prefer traveling by high-speed train or taking commercial flights?", topic: "Travel Modes" }
      ],
      part2: {
        cardPrompt: "Describe an electronic device or appliance that you use every single day.",
        points: [
          "What the device is and how long you have owned it",
          "What daily functions or tasks you use it for",
          "How your daily routine would change without it",
          "And explain why this item is indispensable to you."
        ]
      },
      part3: [
        { q: "How has consumer electronic dependency transformed modern interpersonal relationships?", topic: "Technology Dependence" },
        { q: "What responsibilities do manufacturing corporations hold in curbing global plastic waste?", topic: "Corporate Accountability" },
        { q: "Can voluntary consumer recycling solve environmental crises without strict government laws?", topic: "Environmental Policy" }
      ]
    }
  },

  // =========================================================================
  // MOCK #11: Cambridge 15 Format - Museum Volunteer & Consumer Psychology
  // =========================================================================
  mock11: {
    id: "mock11",
    number: 11,
    label: "MOCK EXAM #11",
    cambridgeRef: "Cambridge IELTS 15 Academic Test 3",
    category: "history",
    categoryLabel: "🏛️ Tarih & Kültür",
    theme: "Müze Rehberliği & Tüketici Karar Verme Nöropsikolojisi",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Royal Antiquities Museum Docent Volunteer Registration",
      audioScript: `Coordinator: Royal Museum volunteer office, good morning.
Applicant: Hello, I'm inquiring about the volunteer gallery docent recruitment program.
Coordinator: Welcome! Let me take down your particulars. Surname, please?
Applicant: It is Kensington. K-E-N-S-I-N-G-T-O-N. First name Clara.
Coordinator: Thank you Clara. Which historical gallery would you prefer guiding?
Applicant: The Ancient Mesopotamian and Levant collection.
Coordinator: Docent training commences on October 14th in the Lecture Hall.
Applicant: What is the weekly time commitment?
Coordinator: We request four hours per week on either Tuesday or Saturday morning.
Applicant: Are volunteer travel passes provided?
Coordinator: Yes, all museum docents receive free city bus passes and a 20% discount in the museum bookstore.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Volunteer Surname: [ K - E - N - S - I - N - G - T - O - N ]", label: "Soyisim", answer: "Kensington", explanation: "Soyadı Kensington olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Historical Gallery Preference: Ancient [ ... ] Collection", label: "Bölüm", answer: "Mesopotamian", explanation: "Mezopotamya (Mesopotamian) koleksiyonudur." },
        { id: 3, type: "fill", prompt: "3. Docent Training Start Date: October [ ... ]", label: "Tarih", answer: "14 / 14th", explanation: "Eğitim 14 Ekim'dedir." },
        { id: 4, type: "fill", prompt: "4. Required Weekly Commitment: [ ... ] hours", label: "Süre", answer: "4 / four", explanation: "Haftada 4 saattir." },
        { id: 5, type: "fill", prompt: "5. Museum Bookstore Discount: [ ... ]%", label: "İndirim", answer: "20 / twenty", explanation: "Kitabevi indirimi %20'dir." },
        { id: 6, type: "mcq", prompt: "6. Volunteer training sessions are conducted in:", options: ["A) Museum Lecture Hall", "B) Basement storage vault", "C) Outdoor terrace garden"], answer: "A", explanation: "Müze konferans salonunda (Lecture Hall) yapılır." },
        { id: 7, type: "mcq", prompt: "7. Which shift schedule is available for volunteer docents?", options: ["A) Tuesday or Saturday morning", "B) Midnight night shifts only", "C) Sunday all-day shift"], answer: "A", explanation: "Salı veya Cumartesi sabahlarıdır." },
        { id: 8, type: "mcq", prompt: "8. What perk is granted to docents for their service?", options: ["A) Free city bus passes", "B) Company car rental", "C) Flight air miles"], answer: "A", explanation: "Ücretsiz belediye otobüs kartı verilir." },
        { id: 9, type: "mcq", prompt: "9. Docent duties primarily involve:", options: ["A) Conducting guided tours for school groups", "B) Selling entrance tickets", "C) Cleaning antiquities with chemicals"], answer: "A", explanation: "Okul gruplarına rehberlik etmektir." },
        { id: 10, type: "mcq", prompt: "10. Candidates must successfully complete an interview that assesses:", options: ["A) Basic historical knowledge and clear vocal communication", "B) Heavy lifting strength", "C) Speed typing ability"], answer: "A", explanation: "Tarih bilgisi ve akıcı iletişim değerlendirilir." }
      ]
    },
    reading: {
      title: "Behavioral Economics and the Neurobiology of Consumer Decision Making",
      passage: `[A] Classical neoclassical economics long presupposed the model of 'Homo economicus'—a rational decision-maker calculating optimal utility based on comprehensive cost-benefit assessments. In recent decades, however, behavioral economists and neuroscientists have debunked this paradigm, demonstrating that human purchasing decisions are routinely dominated by subconscious emotional heuristics, cognitive biases, and visceral neurological impulses.

[B] Functional neuroimaging reveals a biological battleground in the consumer brain. When individuals perceive an attractive product, the nucleus accumbens—the brain's dopaminergic reward pathway—ignites with metabolic activity. Conversely, viewing the monetary price activates the insular cortex, the neural node responsible for processing physical pain and disgust. The final purchase transaction occurs only if anticipated dopaminergic pleasure outweighs insular pain.

[C] Retailers and digital marketing platforms masterfully exploit these vulnerabilities through architectural 'choice nudging'. Artificial scarcity cues (e.g. 'only 2 seats remaining at this price') trigger evolutionary loss aversion, forcing immediate emotional compliance. Similarly, 'default opt-in' settings leverage consumer inertia, as human brains naturally conserve metabolic glucose by resisting active choice modification.

[D] In response, consumer advocacy organizations advocate for strict algorithmic transparency laws. By understanding neurological manipulation tactics, regulatory authorities can safeguard vulnerable populations against predatory financial credit schemes and compulsive commercial gambling behaviors.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Classical neoclassical economics presumed that consumers calculate purchases rationally.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[A] paragrafında rasyonel kararlar aldığının varsayıldığı doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. The insular cortex activates when individuals experience physical pain or high monetary prices.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında yüksek fiyat ve acının insulayı tetiklediği doğrulanır." },
        { id: 3, type: "tfng", prompt: "3. The dopaminergic reward center is situated exclusively within the brain's occipital lobe.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[B] paragrafında nucleus accumbens merkezinde olduğu açıklanır." },
        { id: 4, type: "tfng", prompt: "4. Loss aversion causes consumers to place greater value on acquiring new goods than preventing financial losses.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "Kayıptan kaçınma (loss aversion) kaybetmemeye daha çok değer verilmesidir." },
        { id: 5, type: "fill", prompt: "5. When perceiving an attractive commercial product, the [ ... ] accumbens ignites with activity.", label: "Beyin Bölgesi", answer: "nucleus", explanation: "[B] paragrafında 'nucleus accumbens' geçer." },
        { id: 6, type: "fill", prompt: "6. Viewing high monetary prices triggers activation in the [ ... ] cortex.", label: "Beyin Bölgesi", answer: "insular", explanation: "[B] paragrafında 'insular cortex' geçer." },
        { id: 7, type: "fill", prompt: "7. Subtle marketing manipulation designed to influence buyer choice is termed [ ... ].", label: "Terim", answer: "nudging / choice nudging", explanation: "[C] paragrafında 'choice nudging' geçer." },
        { id: 8, type: "mcq", prompt: "8. How do artificial scarcity banners (e.g. 'only 2 items left') influence consumer behavior?", options: ["A) They encourage buyers to wait for summer sales", "B) They trigger evolutionary loss aversion and hasten purchasing", "C) They convince shoppers to leave the website"], answer: "B", explanation: "[C] paragrafında kayıptan kaçınma dürtüsüyle hızlı satın almaya zorladığı açıklanır." },
        { id: 9, type: "mcq", prompt: "9. Why do consumers frequently remain with 'default opt-in' settings?", options: ["A) Due to cognitive inertia and biological energy conservation", "B) They are legally forbidden from switching", "C) Default options are always cheaper"], answer: "A", explanation: "[C] paragrafında beynin glikoz tasarrufu için eylemsizliği seçtiği açıklanır." },
        { id: 10, type: "mcq", prompt: "10. In paragraph D, the author argues that consumer protection requires:", options: ["A) Banning all digital marketing completely", "B) Algorithmic transparency and regulation against predatory manipulation", "C) Eliminating paper currency"], answer: "B", explanation: "Şeffaflık ve denetleyici yasal düzenlemeler savunulur." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The table below details domestic consumer spending on electronic gadgets, apparel, and cultural entertainment across five nations in 2024. Summarize the information.",
        wordMin: 150,
        svgType: "consumer_table"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Advertising heavily influences modern consumers to purchase goods they do not genuinely require. Some assert that commercial advertising should be strictly restricted, while others maintain that it fuels economic growth. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "Do you enjoy shopping online, or do you prefer visiting physical retail stores?", topic: "Shopping" },
        { q: "How do you usually budget your monthly allowance or living expenses?", topic: "Money Management" },
        { q: "What kind of museum or historical exhibition interests you the most?", topic: "Museums" }
      ],
      part2: {
        cardPrompt: "Describe an impulse purchase you made that you later regretted or loved.",
        points: [
          "What the item was and where you bought it",
          "What advertised feature persuaded you to purchase it",
          "How often you ended up using it in reality",
          "And explain your overall feelings about this purchase now."
        ]
      },
      part3: [
        { q: "Why is consumer culture so dominant in developed modern societies?", topic: "Consumerism" },
        { q: "How can parents teach children prudent financial habits from an early age?", topic: "Financial Literacy" },
        { q: "Should governments ban manipulative advertising targeted directly at young children?", topic: "Advertising Ethics" }
      ]
    }
  },

  // =========================================================================
  // MOCK #12: Cambridge 16 Format - Eco Farm Tour & Vertical Farming
  // =========================================================================
  mock12: {
    id: "mock12",
    number: 12,
    label: "MOCK EXAM #12",
    cambridgeRef: "Cambridge IELTS 16 Academic Test 2",
    category: "nature",
    categoryLabel: "🌿 Çevre & Doğa",
    theme: "Ekolojik Çiftlik Turu & Dikey Tarım ve Küresel Gıda Güvenliği",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Valley Organic Farm Educational Guided Tour",
      audioScript: `Guide: Welcome to Valley Organic Farm visitor center. How can I assist your group?
Visitor: Hello, we are a group of university students seeking a guided agroecology tour.
Guide: Fantastic! Let me note your party's details. Group leader's surname?
Visitor: It is Beaumont. B-E-A-U-M-O-N-T. First name Chloe.
Guide: Thank you Chloe. What is your preferred excursion date?
Visitor: Next Wednesday, April 19th.
Guide: We have our Permaculture and Soil Microbiology tour starting at 10:00 AM.
Visitor: What is the group admission tariff?
Guide: The subsidized student ticket is £14 per person, including organic cider tasting.
Visitor: Excellent. Is parking accessible for mini-buses?
Guide: Yes, free parking is located adjacent to Barn 3.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Group Leader Surname: [ B - E - A - U - M - O - N - T ]", label: "Soyisim", answer: "Beaumont", explanation: "Soyadı Beaumont olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Excursion Date: April [ ... ]", label: "Tarih", answer: "19 / 19th", explanation: "Tarih 19 Nisan'dır." },
        { id: 3, type: "fill", prompt: "3. Tour Subject: Permaculture and Soil [ ... ]", label: "Konu", answer: "Microbiology", explanation: "Toprak mikrobiyolojisi (Soil Microbiology) konusudur." },
        { id: 4, type: "fill", prompt: "4. Student Subsidized Tariff: £[ ... ]", label: "Ücret", answer: "14", explanation: "Öğrenci bileti £14'tür." },
        { id: 5, type: "fill", prompt: "5. Mini-bus Parking Location: Adjacent to [ ... ] 3", label: "Konum", answer: "Barn", explanation: "Barn 3 (Ambar 3) yanıdır." },
        { id: 6, type: "mcq", prompt: "6. What is included in the £14 guided ticket?", options: ["A) Three-course restaurant steak", "B) Guided tour and organic cider tasting", "C) Free bag of organic fertilizer"], answer: "B", explanation: "Rehberli tur ve elma şırası tadımı dahildir." },
        { id: 7, type: "mcq", prompt: "7. The tour specifically demonstrates:", options: ["A) Zero-pesticide biological crop pest management", "B) Heavy diesel tractor manufacturing", "C) Factory pig farming"], answer: "A", explanation: "İlaçsız biyolojik zararlı yönetimi gösterilir." },
        { id: 8, type: "mcq", prompt: "8. Appropriate attire recommended for visitors includes:", options: ["A) High-heeled shoes", "B) Sturdy waterproof walking boots", "C) White silk coats"], answer: "B", explanation: "Su geçirmez sağlam botlar önerilir." },
        { id: 9, type: "mcq", prompt: "9. How long does the guided fieldwork walk last?", options: ["A) Approximately 90 minutes", "B) 10 minutes", "C) 6 hours"], answer: "A", explanation: "Tur 90 dakika sürmektedir." },
        { id: 10, type: "mcq", prompt: "10. In case of inclement downpours, the tour moves to:", options: ["A) The hydroponic greenhouse complex", "B) The parking lot", "C) Is cancelled entirely"], answer: "A", explanation: "Yağmurda hidroponik sera kompleksine geçilir." }
      ]
    },
    reading: {
      title: "Vertical Farming, Hydroponics, and the Future of Urban Agronomy",
      passage: `[A] As global populations approach ten billion by mid-century, conventional terrestrial agriculture faces catastrophic planetary boundaries: severe soil degradation, groundwater depletion, and deforestation. In response, agronomic engineers have pioneered 'vertical farming'—the practice of cultivating crops in vertically stacked indoor layers governed by closed-loop controlled-environment agriculture (CEA).

[B] Vertical agricultural facilities operate predominantly on advanced aeroponic or hydroponic nutrient circulations. By delivering mineral-rich mist directly to plant roots without soil substrates, vertical farms consume up to 95% less water than traditional open-field agriculture. Furthermore, because these facilities operate in sealed bioclimatic chambers, synthetic chemical pesticides and fungicides are entirely obsolete.

[C] Artificial LED illumination provides another photosynthetic revolution. By tailoring light spectra to the exact chlorophyll absorption wavelengths (predominantly red and blue photons), indoor agronomists accelerate photoperiod cycles, achieving harvest turnarounds three times faster than seasonal field agriculture throughout the calendar year.

[D] However, high energetic requirements represent the fundamental bottleneck of vertical farms. Powering artificial photon arrays and HVAC humidity-temperature controls demands tremendous electricity. Until municipal electrical grids achieve 100% decarbonization through renewables, the carbon footprint of vertical produce can paradoxically exceed outdoor produce transported from distant rural regions.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Vertical farming systems consume significantly less water than traditional open-field crops.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında %95 daha az su tükettiği (%95 less water) doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. Synthetic chemical pesticides are applied daily inside sealed vertical farm chambers.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[B] paragrafında böcek ilaçlarının tamamen gereksiz olduğu ('entirely obsolete') belirtilir." },
        { id: 3, type: "tfng", prompt: "3. Red and blue light spectra are optimal for stimulating chlorophyll photosynthetic absorption.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[C] paragrafında kırmızı ve mavi fotonların klorofil emilimini hızlandırdığı doğrulanır." },
        { id: 4, type: "tfng", prompt: "4. All vertical farms in Europe operate exclusively on solar energy today.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN", explanation: "Metinde Avrupa'daki tüm çiftliklerin sadece güneşle çalıştığına dair bir bilgi yoktur." },
        { id: 5, type: "fill", prompt: "5. Closed-loop indoor cultivation is designated as controlled-environment [ ... ].", label: "Terim", answer: "agriculture", explanation: "[A] paragrafında 'controlled-environment agriculture (CEA)' geçer." },
        { id: 6, type: "fill", prompt: "6. Vertical farms feed plant roots with mineral-rich mist using [ ... ] or hydroponic systems.", label: "Teknoloji", answer: "aeroponic", explanation: "[B] paragrafında 'aeroponic or hydroponic' geçer." },
        { id: 7, type: "fill", prompt: "7. The primary technological bottleneck in vertical farming is massive [ ... ] consumption.", label: "Kısıt", answer: "electricity / energetic", explanation: "[D] paragrafında yüksek elektrik tüketimi vurgulanır." },
        { id: 8, type: "mcq", prompt: "8. What environmental benefit results from eliminating soil in aeroponic vertical farming?", options: ["A) Complete avoidance of soil erosion and 95% water savings", "B) Producing zero oxygen", "C) Attracting wild birds"], answer: "A", explanation: "[B] paragrafında toprak erozyonunu önlediği ve %95 su tasarrufu sağladığı açıklanır." },
        { id: 9, type: "mcq", prompt: "9. Why can vertical farms harvest crops up to three times faster than field farms?", options: ["A) Through optimized continuous LED spectrum photoperiods", "B) By using chemical genetic mutagens", "C) By exposing plants to nuclear radiation"], answer: "A", explanation: "[C] paragrafında optimize edilmiş LED spektrumları sayesinde olduğu belirtilir." },
        { id: 10, type: "mcq", prompt: "10. In paragraph D, what paradoxical environmental drawback is highlighted?", options: ["A) High electricity consumption can yield a larger carbon footprint if the grid relies on fossil fuels", "B) Vegetables taste salty", "C) Indoor plants cannot grow leaves"], answer: "A", explanation: "Elektrik şebekesi fosil yakıtlı ise karbon ayak izinin daha yüksek olabileceği çelişkisi vurgulanır." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The bar chart below compares freshwater consumption and crop yield per hectare between conventional open-field agriculture and vertical farming systems across four staple crops. Summarize the features.",
        wordMin: 150,
        svgType: "agri_bars"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "With modern populations concentrated in megacities, some argue food should be produced locally in urban vertical farms, while others believe traditional rural farming is more ecologically sound. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "What fresh fruits or vegetables do you consume most regularly?", topic: "Diet" },
        { q: "Have you ever grown flowers, herbs, or vegetables in a home garden?", topic: "Gardening" },
        { q: "Do you prefer living close to rural countryside or in the center of a city?", topic: "Living Environment" }
      ],
      part2: {
        cardPrompt: "Describe an environmental habit or dietary change you adopted to reduce your ecological footprint.",
        points: [
          "What change you made and when you implemented it",
          "What motivated you to adopt this habit",
          "Whether it was difficult or convenient to sustain",
          "And explain what positive impact it had on your lifestyle."
        ]
      },
      part3: [
        { q: "How will climate change affect global agricultural food production in the coming decades?", topic: "Food Security" },
        { q: "Should municipal governments subsidize urban rooftop gardens and vertical farms?", topic: "Urban Agriculture" },
        { q: "Why do organic food products generally carry higher price tags in supermarkets?", topic: "Organic Economics" }
      ]
    }
  },

  // =========================================================================
  // MOCK #13: Cambridge 14 Format - Library Renovation & Roman Aqueducts
  // =========================================================================
  mock13: {
    id: "mock13",
    number: 13,
    label: "MOCK EXAM #13",
    cambridgeRef: "Cambridge IELTS 14 Academic Test 1",
    category: "history",
    categoryLabel: "🏛️ Tarih & Kültür",
    theme: "Kütüphane Restorasyonu & Antik Roma Su Kemerleri Mühendisliği",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Central Public Library Renovation Feedback & Survey",
      audioScript: `Librarian: Good morning, Central Public Library consultation desk.
Patron: Hello, I'd like to participate in the public consultation regarding the library refurbishment.
Librarian: Wonderful! First, may I take your surname?
Patron: It is MacAlister. M-A-C-A-L-I-S-T-E-R. First name Donald.
Librarian: Which library facility do you frequent most?
Patron: The Local History and Archives annex.
Librarian: What is the primary improvement you wish to see?
Patron: Additional soundproof study pods on the 3rd floor.
Librarian: And what opening hours would serve your research needs?
Patron: Staying open until 9:00 PM on weekday evenings.
Librarian: The newly proposed digital lab will provide 30 multimedia computer terminals.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Patron Surname: [ M - A - C - A - L - I - S - T - E - R ]", label: "Soyisim", answer: "MacAlister", explanation: "Soyadı MacAlister olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Most Frequented Section: Local [ ... ] Annex", label: "Bölüm", answer: "History", explanation: "Yerel Tarih (Local History) bölümüdür." },
        { id: 3, type: "fill", prompt: "3. Requested Improvement: Soundproof [ ... ] pods", label: "Talep", answer: "study", explanation: "Sessiz çalışma kabinleri (study pods) talep edilmiştir." },
        { id: 4, type: "fill", prompt: "4. Requested Weekday Closing Time: [ ... ] PM", label: "Saat", answer: "9:00 / 9", explanation: "Akşam 9:00'dur." },
        { id: 5, type: "fill", prompt: "5. Digital Lab Terminals Count: [ ... ] terminals", label: "Sayı", answer: "30 / thirty", explanation: "30 terminal bulunacaktır." },
        { id: 6, type: "mcq", prompt: "6. Which floor is designated for quiet individual study pods?", options: ["A) Ground Floor", "B) 1st Floor", "C) 3rd Floor"], answer: "C", explanation: "3. kat (3rd floor) seçilmiştir." },
        { id: 7, type: "mcq", prompt: "7. How often does the patron utilize the public library?", options: ["A) Twice a week", "B) Once every two years", "C) Every single morning"], answer: "A", explanation: "Haftada iki kez kullanmaktadır." },
        { id: 8, type: "mcq", prompt: "8. What community service will expand inside the renovated building?", options: ["A) Free digital literacy classes for senior citizens", "B) Commercial movie screenings", "C) High-stakes gambling"], answer: "A", explanation: "Yaşlılar için dijital okuryazarlık dersleri verilecektir." },
        { id: 9, type: "mcq", prompt: "9. Where can citizens review the architectural architectural blue-prints?", options: ["A) Online municipal portal", "B) At the city airport", "C) Local police station"], answer: "A", explanation: "Belediye internet portalından incelenebilir." },
        { id: 10, type: "mcq", prompt: "10. Construction work on the library annex begins in:", options: ["A) October next year", "B) Two weeks", "C) Ten years"], answer: "A", explanation: "Gelecek yıl Ekim ayında başlayacaktır." }
      ]
    },
    reading: {
      title: "Hydraulic Engineering and Architectural Genius of Roman Aqueducts",
      passage: `[A] Among the grand infrastructural monuments of classical antiquity, Roman aqueducts stand as peerless feats of hydraulic civil engineering. Over a span of five centuries, Roman architects constructed thousands of kilometers of conduits, bridging rugged valleys with colossal stone arcades to channel millions of cubic meters of mountain spring water into imperial urban centers daily.

[B] The foundational engineering principle governing all Roman aqueducts was unassisted gravity. Because the Romans lacked mechanical electric pumps, engineers surveyed watercourses with extraordinary geodetic precision, maintaining a minuscule, continuous gradient—frequently dropping merely 30 centimeters per kilometer over distances exceeding 50 kilometers. Instruments like the chorobates (a six-meter wooden leveling bench with water troughs) ensured this flawless slope.

[C] Contrary to popular imagination, roughly 80% of aqueduct infrastructure was subterranean, buried beneath hillsides in sealed terracotta-lined stone channels. Tunneling protected freshwater against evaporation, airborne contamination, and enemy sabotage during siege warfare.

[D] At the terminus of the aqueduct, water emptied into the castellum divisorium—a massive distribution basin with sluice gates. Water was prioritized hierarchically: first to public fountains accessible to all citizens, second to public thermal baths, and only surplus flow to wealthy private villas whose owners paid a specialized water tax (vectigal).`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Roman aqueducts operated entirely on continuous gravitational gradient without mechanical pumps.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında 'unassisted gravity' ve pompasız eğim doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. The majority of Roman aqueduct conduits were built as elevated open-air stone arcades.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[C] paragrafında %80'inin yeraltında (subterranean) olduğu açıklanır." },
        { id: 3, type: "tfng", prompt: "3. In Roman cities, private residential villas received water before public street fountains.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[D] paragrafında halk çeşmelerinin birinci öncelikli olduğu açıklanır." },
        { id: 4, type: "tfng", prompt: "4. The chorobates was a wooden leveling instrument used to calculate gradient slopes.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında chorobates aletinin eğim ölçtüğü doğrulanır." },
        { id: 5, type: "fill", prompt: "5. Roman hydraulic channels operated solely through unassisted [ ... ].", label: "Fizik İlkesi", answer: "gravity", explanation: "[B] paragrafında yerçekimi (gravity) ilkesi geçer." },
        { id: 6, type: "fill", prompt: "6. Roughly 80% of Roman aqueduct systems were [ ... ] channels.", label: "Konum", answer: "subterranean / underground", explanation: "[C] paragrafında yeraltı kanalları olduğu belirtilir." },
        { id: 7, type: "fill", prompt: "7. Wealthy citizens paying a specialized water tax received private water in their [ ... ].", label: "Bina Türü", answer: "villas", explanation: "[D] paragrafında 'private villas' ifadesi geçer." },
        { id: 8, type: "mcq", prompt: "8. Why were Roman aqueduct conduits predominantly buried underground?", options: ["A) To prevent evaporation, contamination, and siege sabotage", "B) Because stones were too heavy to lift", "C) To hide water from the Emperor"], answer: "A", explanation: "[C] paragrafında buharlaşma, kirlilik ve sabotajı önlemek için gömüldüğü açıklanır." },
        { id: 9, type: "mcq", prompt: "9. What was the function of the 'castellum divisorium' at the aqueduct terminus?", options: ["A) A filtration basin that prioritized water allocation", "B) A gladiatorial arena", "C) A royal coin treasury"], answer: "A", explanation: "[D] paragrafında suyu hiyerarşik öncelikle dağıtan havuz olduğu belirtilir." },
        { id: 10, type: "mcq", prompt: "10. In paragraph B, the gradient of 30 cm per kilometer illustrates:", options: ["A) The extreme geodetic precision of Roman engineering", "B) A major architectural mistake", "C) Why water could not flow"], answer: "A", explanation: "Roma mühendisliğinin inanılmaz hassasiyetini göstermek için verilir." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The diagrams below demonstrate the architectural plan of a university library before and after a major renovation. Summarize the changes by selecting key features and make comparisons.",
        wordMin: 150,
        svgType: "library_map"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "With digital books and internet archives widely available on laptops and phones, some believe municipal libraries are obsolete and a waste of public funds. Others maintain libraries remain essential community hubs. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "How frequently do you borrow books from libraries or buy books online?", topic: "Reading Habits" },
        { q: "Do you prefer reading physical paperback books or reading on digital screens?", topic: "Books" },
        { q: "What is your favorite historic landmark or monument in your country?", topic: "Landmarks" }
      ],
      part2: {
        cardPrompt: "Describe a public library, study hall, or educational facility you find comfortable.",
        points: [
          "Where the building is located and how often you visit it",
          "What facilities or atmosphere it provides for studying",
          "What activities you usually carry out there",
          "And explain why you enjoy working in this place."
        ]
      },
      part3: [
        { q: "Will artificial intelligence search engines replace human librarians in research facilities?", topic: "Future of Libraries" },
        { q: "How can ancient architectural techniques inspire sustainable modern green buildings?", topic: "Historical Engineering" },
        { q: "Should public infrastructure like clean water and libraries be universally free for all citizens?", topic: "Public Goods" }
      ]
    }
  },

  // =========================================================================
  // MOCK #14: Cambridge 17 Format - Eco-Tourism & Megafauna Extinction
  // =========================================================================
  mock14: {
    id: "mock14",
    number: 14,
    label: "MOCK EXAM #14",
    cambridgeRef: "Cambridge IELTS 17 Academic Test 4",
    category: "nature",
    categoryLabel: "🌿 Çevre & Doğa",
    theme: "Ekoturizm Rezervasyonu & Pleistosen Megafauna Yok Oluşu",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Wilderness Eco-Lodge Booking & Safari Reservation",
      audioScript: `Desk: Highlands Eco-Resort and Wildlife Reserve. How may I assist you?
Guest: Hello, I'd like to reserve an eco-cabin for our family vacation.
Desk: Delighted to assist! May I have your surname?
Guest: It is MacPherson. That is M-A-C-P-H-E-R-S-O-N. First name Callum.
Desk: Which eco-chalet style do you desire?
Guest: The Treehouse Canopy Chalet overlooking the river.
Desk: We have that available for 4 nights starting August 12th.
Guest: What is the total package tariff?
Desk: It is £720, inclusive of all solar-powered electricity, guided dawn safari walks, and organic farm meals.
Guest: Do you arrange airport pick-up?
Desk: Yes, our hybrid electric shuttle meets guests at the regional terminal for £30.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Guest Surname: [ M - A - C - P - H - E - R - S - O - N ]", label: "Soyisim", answer: "MacPherson", explanation: "Soyadı MacPherson olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Desired Chalet Style: Treehouse [ ... ] Chalet", label: "Oda Türü", answer: "Canopy", explanation: "Treehouse Canopy tarzıdır." },
        { id: 3, type: "fill", prompt: "3. Arrival Date: August [ ... ]", label: "Tarih", answer: "12 / 12th", explanation: "Giriş 12 Ağustos'tur." },
        { id: 4, type: "fill", prompt: "4. Total Package Cost: £[ ... ]", label: "Ücret", answer: "720", explanation: "Paket ücreti £720'dir." },
        { id: 5, type: "fill", prompt: "5. Airport Hybrid Shuttle Fee: £[ ... ]", label: "Transfer Ücreti", answer: "30", explanation: "Transfer £30'dur." },
        { id: 6, type: "mcq", prompt: "6. The £720 eco-chalet package includes:", options: ["A) Solar power, dawn safari walks, and organic meals", "B) Helicopter sightseeing only", "C) Scuba diving in the Arctic"], answer: "A", explanation: "Güneş enerjisi, safari yürüyüşü ve organik yemekler dahildir." },
        { id: 7, type: "mcq", prompt: "7. How is electricity generated at the wilderness lodge?", options: ["A) 100% off-grid solar photovoltaic panels", "B) Diesel generators running 24/7", "C) Coal burning"], answer: "A", explanation: "%100 güneş panelleriyle üretilir." },
        { id: 8, type: "mcq", prompt: "8. What wildlife species can guests observe from the canopy chalet?", options: ["A) Rare migratory raptors and river otters", "B) Polar bears", "C) Desert camels"], answer: "A", explanation: "Göçmen yırtıcı kuşlar ve su samurları gözlemlenebilir." },
        { id: 9, type: "mcq", prompt: "9. Guests must observe which strict environmental rule?", options: ["A) No single-use plastics permitted on premises", "B) No walking after 2 PM", "C) No speaking during breakfast"], answer: "A", explanation: "Tek kullanımlık plastik yasaktır." },
        { id: 10, type: "mcq", prompt: "10. In case of booking changes, guests must provide notice:", options: ["A) 14 days prior to arrival", "B) One hour prior", "C) Six months prior"], answer: "A", explanation: "14 gün önceden bildirilmelidir." }
      ]
    },
    reading: {
      title: "The Quaternary Megafauna Extinction and Pleistocene Rewilding",
      passage: `[A] At the conclusion of the Pleistocene epoch roughly 11,000 years ago, Earth witnessed the abrupt annihilation of its most majestic terrestrial giants: woolly mammoths, sabertooth cats, giant ground sloths, and woolly rhinoceroses. Paleontologists have long engaged in fierce debate over the primary catalyst of this extinction spasm: rapid climatic warming at the end of the Last Glacial Maximum, or anthropogenic overkill by early human hunter-gatherers equipped with Clovis projectile points.

[B] Emerging geochronological and fossil pollen datasets strongly support the 'overkill hypothesis'. Radiocarbon datings demonstrate that megafaunal collapses correlated uncannily with the chronological arrival of modern humans across continents. Furthermore, large herbivores possessed low reproductive rates and lengthy gestation periods, rendering them incapable of withstanding sustained human predatory pressure.

[C] The disappearance of megafauna triggered catastrophic trophic cascades across global ecosystems. Without gigantic herbivores to consume brush, trample saplings, and disperse large seeds, productive subarctic mammoth steppes converted into waterlogged, nutrient-poor mossy tundra.

[D] Today, conservation biologists champion 'Pleistocene rewilding'—the ecological reintroduction of surviving functional proxies, such as bison, wild horses, and muskoxen, into northern latitudes. In Siberia's Pleistocene Park, grazing herds compact insulating snow during winter, allowing sub-zero arctic frosts to penetrate deeper into the earth, preventing ancient permafrost from melting and releasing gigatons of trapped greenhouse methane.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. The Quaternary extinction predominantly eliminated small rodent and insect species.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[A] paragrafında dev memelilerin (terrestrial giants) yok olduğu belirtilir." },
        { id: 2, type: "tfng", prompt: "2. Large Pleistocene herbivores were vulnerable to hunting due to slow reproductive rates.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında yavaş üreme döngülerinin avlanmaya karşı kırılgan kıldığı doğrulanır." },
        { id: 3, type: "tfng", prompt: "3. Grazing animals in Pleistocene Park prevent permafrost melting by compacting snow.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[D] paragrafında karı ezerek don tabakasını korudukları doğrulanır." },
        { id: 4, type: "tfng", prompt: "4. Genetic cloning of woolly mammoths has already repopulated 50,000 animals in Alaska.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN", explanation: "Metinde böyle bir klonlama sayısından söz edilmez." },
        { id: 5, type: "fill", prompt: "5. The theory attributing extinction to human hunting is termed the [ ... ] hypothesis.", label: "Teori", answer: "overkill", explanation: "[B] paragrafında 'overkill hypothesis' geçer." },
        { id: 6, type: "fill", prompt: "6. Disappearance of large herbivores transformed subarctic mammoth steppes into mossy [ ... ].", label: "Biyom", answer: "tundra", explanation: "[C] paragrafında 'mossy tundra' geçer." },
        { id: 7, type: "fill", prompt: "7. Preventing permafrost thawing curbs the release of atmospheric [ ... ].", label: "Gaz", answer: "methane", explanation: "[D] paragrafında metan gazı salımı vurgulanır." },
        { id: 8, type: "mcq", prompt: "8. What ecological role did giant mammoths play in Pleistocene ecosystems?", options: ["A) Trampling brush and maintaining productive grassland steppes", "B) Eliminating all river waterways", "C) Causing ice sheets to melt"], answer: "A", explanation: "[C] paragrafında çalıları ezerek otlak steplerini korudukları açıklanır." },
        { id: 9, type: "mcq", prompt: "9. Why is permafrost melting considered a catastrophic planetary hazard?", options: ["A) It triggers gigatons of trapped greenhouse methane release", "B) It causes oceans to freeze instantly", "C) It stops the earth from rotating"], answer: "A", explanation: "[D] paragrafında hapsolmuş metan gazını serbest bırakacağı belirtilir." },
        { id: 10, type: "mcq", prompt: "10. The concept of 'Pleistocene rewilding' advocates:", options: ["A) Reintroducing large grazing proxies to restore ecological equilibrium", "B) Building amusement parks in the Arctic", "C) Hunting remaining wild horses"], answer: "A", explanation: "Büyük otoburları doğaya geri salarak ekolojik dengeyi kurmaktır." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The line chart below illustrates the historical population decline of three large mammal species alongside the estimated growth of early human populations between 50,000 BCE and 10,000 BCE. Summarize the trends.",
        wordMin: 150,
        svgType: "megafauna_chart"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Some conservation scientists advocate cloning extinct animal species like the woolly mammoth using modern biotechnology. Critics argue this diverts critical funds away from saving living endangered animals today. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "Have you ever traveled to a wildlife reserve, national park, or safari?", topic: "Wildlife" },
        { q: "What is your favorite animal, and why do you find it interesting?", topic: "Animals" },
        { q: "Do you enjoy staying in eco-friendly hotels when traveling on vacation?", topic: "Eco-Travel" }
      ],
      part2: {
        cardPrompt: "Describe a documentary film, book, or article about nature that made a profound impact on you.",
        points: [
          "What the work was and who produced or authored it",
          "What environmental ecosystem or wildlife species it focused on",
          "What surprising scientific facts you learned",
          "And explain why this work influenced your view on ecology."
        ]
      },
      part3: [
        { q: "Is de-extinction biotechnology ethically justifiable when thousands of living species face imminent extinction?", topic: "Genetic Ethics" },
        { q: "How can ecotourism support indigenous local communities without damaging fragile natural habitats?", topic: "Ecotourism" },
        { q: "What measures can governments enforce to ban the international trafficking of endangered animal body parts?", topic: "Wildlife Protection" }
      ]
    }
  },

  // =========================================================================
  // MOCK #15: Cambridge 13 Format - Sports Center & Evolution of Bipedalism
  // =========================================================================
  mock15: {
    id: "mock15",
    number: 15,
    label: "MOCK EXAM #15",
    cambridgeRef: "Cambridge IELTS 13 Academic Test 2",
    category: "society",
    categoryLabel: "🏙️ Toplum & Şehir",
    theme: "Spor Kompleksi Üyelik Sözleşmesi & İki Ayak Üzerinde Yürümenin Evrimi",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Apex Sports Complex & Aquatic Center Membership",
      audioScript: `Staff: Apex Sports Complex, welcome. How may I assist you?
Member: Hello, I'm looking to join your fitness and Olympic swimming facilities.
Staff: Fantastic! Let me take down your registration details. Surname?
Member: It is Sterling. S-T-E-R-L-I-N-G. First name Marcus.
Staff: Thank you Mr. Sterling. What membership tier are you interested in?
Member: The Gold All-Inclusive pass.
Staff: The Gold tier rate is £55 per calendar month.
Member: What facilities are included in Gold?
Staff: Full access to the 50-meter swimming pool, sauna, weight gym, and free squash courts.
Member: What is the initial joining fee?
Staff: There is a one-time induction registration fee of £20.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Member Surname: [ S - T - E - R - L - I - N - G ]", label: "Soyisim", answer: "Sterling", explanation: "Soyadı Sterling olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Selected Membership Tier: [ ... ] All-Inclusive", label: "Üyelik", answer: "Gold", explanation: "Gold paketidir." },
        { id: 3, type: "fill", prompt: "3. Monthly Membership Fee: £[ ... ]", label: "Aylık Ücret", answer: "55", explanation: "Aylık ücret £55'tir." },
        { id: 4, type: "fill", prompt: "4. Olympic Pool Length: [ ... ] meters", label: "Havuz Uzunluğu", answer: "50 / fifty", explanation: "50 metrelik olimpik havuzdur." },
        { id: 5, type: "fill", prompt: "5. One-time Induction Fee: £[ ... ]", label: "Kayıt Ücreti", answer: "20", explanation: "Kayıt ücreti £20'dir." },
        { id: 6, type: "mcq", prompt: "6. Which racquet sports facility is complimentary for Gold members?", options: ["A) Indoor squash courts", "B) Clay tennis stadium", "C) Badminton hall"], answer: "A", explanation: "Squash kortları ücretsizdir." },
        { id: 7, type: "mcq", prompt: "7. Member lockers operate through:", options: ["A) Digital RFID wristbands", "B) Traditional brass padlocks", "C) Eye scan"], answer: "A", explanation: "RFID bilekliklerle çalışır." },
        { id: 8, type: "mcq", prompt: "8. Gold members receive a free personal trainer consultation:", options: ["A) Once every 3 months", "B) Every single morning", "C) Never"], answer: "A", explanation: "Her 3 ayda bir antrenör danışmanlığı dahildir." },
        { id: 9, type: "mcq", prompt: "9. Complex operating hours on weekends are:", options: ["A) 7:00 AM to 9:00 PM", "B) 24 hours open", "C) 1:00 PM to 4:00 PM"], answer: "A", explanation: "Hafta sonu 7:00 - 21:00 arası açıktır." },
        { id: 10, type: "mcq", prompt: "10. In case of medical freeze, memberships can be paused for up to:", options: ["A) 3 months with a doctor's note", "B) 5 years", "C) Zero days"], answer: "A", explanation: "Doktor raporuyla 3 aya kadar dondurulabilir." }
      ]
    },
    reading: {
      title: "The Evolutionary Morphology and Biomechanics of Human Bipedalism",
      passage: `[A] Bipedal locomotion—walking upright on two lower limbs—represents the single most defining morphological breakthrough in hominin evolutionary divergence from ancestral quadrupeds. The emergence of habitual bipedalism in early hominins, such as Australopithecus afarensis over three million years ago, precipitated radical anatomical re-engineering of the human musculoskeletal framework.

[B] Biomechanically, upright locomotion necessitated restructuring the pelvis. The hominin ilium shortened, broadened, and rotated laterally, transforming the gluteal musculature into pelvic stabilizers that prevent the torso from collapsing during single-leg stance phases. Simultaneously, the evolution of a bicondylar angle (the inward angulation of the femur) aligned the knees directly underneath the body's center of gravity.

[C] Energetically, bipedal endurance walking proved extraordinarily cost-efficient. Comparative metabolic testing demonstrates that human bipedal striding expends 75% less metabolic energy than quadrupedal chimpanzee knuckle-walking. In the arid savannah environments of the Pliocene, this energetic economy enabled early foragers to travel vast distances to scavenge carcasses and forage roots without hyperthermia.

[D] However, bipedalism inflicted severe physiological evolutionary tradeoffs. Narrowing the birth canal to accommodate upright pelvic stability, coupled with the rapid encephalization (brain growth) of the genus Homo, created the 'obstetric dilemma': human infants are born neurologically altricial and helpless, requiring prolonged communal maternal care.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Habitual bipedalism first evolved after modern Homo sapiens established agricultural settlements.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[A] paragrafında 3 milyon yıl önce Australopithecus ile başladığı belirtilir." },
        { id: 2, type: "tfng", prompt: "2. Human bipedal walking consumes approximately 75% less metabolic energy than chimpanzee knuckle-walking.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[C] paragrafında %75 daha az enerji harcadığı doğrulanır." },
        { id: 3, type: "tfng", prompt: "3. The obstetric dilemma arose from the anatomical conflict between narrow bipedal pelvises and large fetal brains.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[D] paragrafında leğen kemiği darlığı ile büyük beyin arasındaki çatışma doğrulanır." },
        { id: 4, type: "tfng", prompt: "4. Australopithecus afarensis possessed an adult brain volume identical to modern humans.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "Metinde encephalization sürecinin daha sonra gerçekleştiği açıklanır." },
        { id: 5, type: "fill", prompt: "5. Upright walking necessitated the inward angulation of the femur, known as the bicondylar [ ... ].", label: "Anatomi", answer: "angle", explanation: "[B] paragrafında 'bicondylar angle' geçer." },
        { id: 6, type: "fill", prompt: "6. Bipedal locomotion enabled early hominins to traverse arid [ ... ] environments efficiently.", label: "Biyom", answer: "savannah", explanation: "[C] paragrafında 'arid savannah environments' geçer." },
        { id: 7, type: "fill", prompt: "7. The evolutionary childbirth compromise caused by a narrow birth canal is termed the [ ... ] dilemma.", label: "Kavram", answer: "obstetric", explanation: "[D] paragrafında 'obstetric dilemma' geçer." },
        { id: 8, type: "mcq", prompt: "8. What major muscular reorganization occurred in the bipedal pelvic girdle?", options: ["A) Gluteal muscles rotated to act as pelvic stabilizers", "B) Leg muscles disappeared completely", "C) Arm muscles became twice as thick"], answer: "A", explanation: "[B] paragrafında kalça kaslarının dengeleyiciye dönüştüğü açıklanır." },
        { id: 9, type: "mcq", prompt: "9. Why was energetic walking economy advantageous in Pliocene savannahs?", options: ["A) It allowed long-distance foraging without exhausting metabolic hyperthermia", "B) It helped hominins fly into trees", "C) It frightened away apex predators"], answer: "A", explanation: "[C] paragrafında uzun mesafelerde aşırı ısınmadan yiyecek aramayı sağladığı açıklanır." },
        { id: 10, type: "mcq", prompt: "10. In paragraph D, the word 'altricial' indicates that human newborns are:", options: ["A) Helpless and requiring prolonged maternal care", "B) Completely independent at birth", "C) Highly aggressive predators"], answer: "A", explanation: "Altricial kelimesi doğduklarında bakıma muhtaç ve çaresiz olmayı ifade eder." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The line chart below illustrates physical exercise participation rates across five age cohorts between 2000 and 2024. Summarize the information and describe key trends.",
        wordMin: 150,
        svgType: "sports_lines"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Physical fitness is crucial to public health. Some advocate that governments should impose mandatory fitness hours and tax unhealthy foods, while others believe health is an individual private liberty. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "What sports or athletic activities do you participate in regularly?", topic: "Sports" },
        { q: "Do you prefer exercising outdoors in nature or inside an indoor fitness gym?", topic: "Exercise" },
        { q: "How many steps do you typically walk on an average working day?", topic: "Walking Habits" }
      ],
      part2: {
        cardPrompt: "Describe an outdoor sporting event or athletic contest you watched or participated in.",
        points: [
          "What the event was and where it took place",
          "Who competed and who you attended with",
          "What the competitive atmosphere was like",
          "And explain why this sports event made a memorable impression."
        ]
      },
      part3: [
        { q: "Should competitive physical education be compulsory throughout primary and secondary schooling?", topic: "Physical Education" },
        { q: "How does regular physical exercise influence cognitive productivity in the workplace?", topic: "Health & Work" },
        { q: "Why do mega-sporting events like the Olympic Games place massive financial strains on host cities?", topic: "Olympic Economics" }
      ]
    }
  },

  // =========================================================================
  // MOCK #16: Cambridge 18 Format - Airport Transit & Space Debris Hazards
  // =========================================================================
  mock16: {
    id: "mock16",
    number: 16,
    label: "MOCK EXAM #16",
    cambridgeRef: "Cambridge IELTS 18 Academic Test 4",
    category: "tech",
    categoryLabel: "🤖 Teknoloji & Bilim",
    theme: "Havalimanı Ekspres Ulaşım & Uzay Çöpü ve Uydu İletişim Güvenliği",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Airport SkyLink Express High-Speed Transit Desk",
      audioScript: `Clerk: SkyLink Express customer information desk, welcome.
Passenger: Hello, I need to purchase a group return pass for our family to the International Airport.
Clerk: Certainly! May I have your surname, sir?
Passenger: It is Montgomery-Smith. M-O-N-T-G-O-M-E-R-Y. First name Julian.
Clerk: How many adult passengers and children?
Passenger: Two adults and one child aged 8.
Clerk: The family open return ticket is £42.
Passenger: How frequent are train departures from this terminal?
Clerk: Trains depart every 12 minutes from Platform 4.
Passenger: What is the transit journey duration?
Clerk: Exactly 18 minutes non-stop to Terminal 3. Luggage trolleys are complimentary on all train cars.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Passenger Surname: [ M - O - N - T - G - O - M - E - R - Y ]", label: "Soyisim", answer: "Montgomery", explanation: "Soyadı Montgomery olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Family Return Ticket Price: £[ ... ]", label: "Bilet Ücreti", answer: "42", explanation: "Bilet £42'dir." },
        { id: 3, type: "fill", prompt: "3. Departure Platform: Platform [ ... ]", label: "Peron", answer: "4 / four", explanation: "Peron 4'tür." },
        { id: 4, type: "fill", prompt: "4. Train Departure Frequency: Every [ ... ] minutes", label: "Sıklık", answer: "12 / twelve", explanation: "Her 12 dakikada birdir." },
        { id: 5, type: "fill", prompt: "5. Non-stop Transit Duration: [ ... ] minutes", label: "Süre", answer: "18 / eighteen", explanation: "Süre 18 dakikadır." },
        { id: 6, type: "mcq", prompt: "6. Which terminal is the non-stop destination of SkyLink?", options: ["A) Terminal 1", "B) Terminal 3", "C) Cargo Depot"], answer: "B", explanation: "Terminal 3 varış yeridir." },
        { id: 7, type: "mcq", prompt: "7. Which amenity is complimentary on all SkyLink train cars?", options: ["A) Luggage trolleys and Wi-Fi", "B) Champagne service", "C) Free airline check-in"], answer: "A", explanation: "Bagaj arabaları ve Wi-Fi ücretsizdir." },
        { id: 8, type: "mcq", prompt: "8. Children under which age travel free of charge?", options: ["A) Under 5 years old", "B) Under 18", "C) Under 21"], answer: "A", explanation: "5 yaş altı ücretsizdir." },
        { id: 9, type: "mcq", prompt: "9. How can passengers purchase mobile tickets?", options: ["A) Scan QR code on the mobile app", "B) Fax a form", "C) Post a paper cheque"], answer: "A", explanation: "Mobil uygulamadan QR kod taranır." },
        { id: 10, type: "mcq", prompt: "10. In case of flight delays, return tickets remain valid for:", options: ["A) 30 calendar days", "B) 10 minutes", "C) 1 year"], answer: "A", explanation: "Biletler 30 gün geçerlidir." }
      ]
    },
    reading: {
      title: "Orbital Debris Accumulation and the Threat of the Kessler Syndrome",
      passage: `[A] Since the launch of Sputnik 1 in 1957, humanity has launched over 15,000 satellites into Low Earth Orbit (LEO). Today, orbital space has become dangerously congested with orbital space debris: spent rocket booster stages, defunct satellites, and millions of fragmentation shards traveling at hypervelocity speeds exceeding 28,000 kilometers per hour.

[B] At such velocities, even a paint fleck or five-millimeter bolt possesses the kinetic energy of a hand grenade. Impacts can puncture pressurized crew modules on the International Space Station (ISS) and shred active communications and meteorology satellites.

[C] In 1978, NASA astrophysicist Donald Kessler formulated the catastrophic 'Kessler Syndrome'. The hypothesis postulates that when orbital debris density crosses a critical threshold, a single catastrophic collision generates a cascading chain reaction of fragments. Each collision creates secondary clouds of shrapnel that collide with further satellites, rendering Low Earth Orbit entirely unusable for human spaceflight and satellite telemetry for generations.

[D] Mitigating this orbital crisis demands Active Debris Removal (ADR) technologies. Aerospace companies are experimenting with magnetic docking grappling arms, space harpoons, and orbital nets to de-orbit derelict rocket stages into Earth's upper atmosphere, where friction incinerates the debris safely.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Orbital debris in Low Earth Orbit travels at speeds exceeding 28,000 kilometers per hour.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[A] paragrafında saatte 28.000 km'yi aştığı doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. A five-millimeter fragment in orbit causes zero structural damage due to its diminutive mass.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[B] paragrafında el bombası kadar kinetik enerjiye sahip olduğu belirtilir." },
        { id: 3, type: "tfng", prompt: "3. The Kessler Syndrome predicts a self-sustaining cascading collision chain reaction in orbit.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[C] paragrafında zincirleme çarpışma reaksiyonu (cascading chain reaction) doğrulanır." },
        { id: 4, type: "tfng", prompt: "4. The United Nations has mandated that all active satellites must de-orbit within 24 hours of launch.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN", explanation: "Metinde böyle bir 24 saatlik yasal kuraldan söz edilmemektedir." },
        { id: 5, type: "fill", prompt: "5. The dangerous chain reaction of cascading orbital collisions is designated the [ ... ] Syndrome.", label: "Teori", answer: "Kessler", explanation: "[C] paragrafında 'Kessler Syndrome' olarak adlandırılır." },
        { id: 6, type: "fill", prompt: "6. Satellites can be captured using magnetic arms, nets, or space [ ... ].", label: "Cihaz", answer: "harpoons", explanation: "[D] paragrafında uzay zıpkınları (space harpoons) sayılır." },
        { id: 7, type: "fill", prompt: "7. Captured derelict space hardware is de-orbited to burn up in Earth's upper [ ... ].", label: "Katman", answer: "atmosphere", explanation: "[D] paragrafında atmosferde yandığı açıklanır." },
        { id: 8, type: "mcq", prompt: "8. Why is tiny orbital debris so lethal to satellites and space stations?", options: ["A) Extreme hypervelocity kinetic energy", "B) High chemical toxicity", "C) Magnetic interference"], answer: "A", explanation: "[B] paragrafında aşırı hızın getirdiği kinetik enerji vurgulanır." },
        { id: 9, type: "mcq", prompt: "9. What catastrophic outcome would occur if the Kessler Syndrome reaches runaway levels?", options: ["A) Low Earth Orbit would become completely impassable and unusable for generations", "B) Earth would lose its atmospheric oxygen", "C) Satellites would crash into the Moon"], answer: "A", explanation: "[C] paragrafında yörüngenin nesiller boyu kullanılamaz hale geleceği belirtilir." },
        { id: 10, type: "mcq", prompt: "10. In paragraph D, Active Debris Removal (ADR) primarily aims to:", options: ["A) Safely de-orbit defunct satellites into the burning atmosphere", "B) Collect satellites to resell on Earth", "C) Launch more rockets into space"], answer: "A", explanation: "Atıl uyduları atmosfere sokarak yakıp yok etmeyi amaçlar." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The bar chart below compares the estimated number of orbital space debris objects tracked in Low Earth Orbit across different size categories between 1980 and 2025. Summarize the information and report key trends.",
        wordMin: 150,
        svgType: "space_bars"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Commercial aerospace corporations are launching mega-constellations containing thousands of private internet satellites. Some celebrate this as a democratic connectivity breakthrough, while astronomers and critics argue it creates space junk and ruins celestial observation. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "How often do you travel by commercial airplane or high-speed train?", topic: "Travel" },
        { q: "Do you enjoy gazing at the stars or reading about space exploration?", topic: "Astronomy" },
        { q: "What internet service do you rely upon most when traveling abroad?", topic: "Connectivity" }
      ],
      part2: {
        cardPrompt: "Describe a long journey you undertook that experienced unexpected delays or rerouting.",
        points: [
          "Where you were traveling to and what transport mode you used",
          "What caused the delay or disruption to occur",
          "How you spent your time during the delay",
          "And explain how the situation was ultimately resolved."
        ]
      },
      part3: [
        { q: "Should private satellite corporations be taxed to fund the cleanup of orbital space debris?", topic: "Space Regulation" },
        { q: "How has satellite telecommunication transformed remote education and telemedicine in rural areas?", topic: "Satellite Impact" },
        { q: "Is space tourism a justifiable commercial industry given its massive carbon footprint?", topic: "Space Tourism" }
      ]
    }
  },

  // =========================================================================
  // MOCK #17: Cambridge 15 Format - Music Academy & Pitch Perception
  // =========================================================================
  mock17: {
    id: "mock17",
    number: 17,
    label: "MOCK EXAM #17",
    cambridgeRef: "Cambridge IELTS 15 Academic Test 4",
    category: "history",
    categoryLabel: "🏛️ Tarih & Kültür",
    theme: "Müzik Konservatuvarı Kaydı & Müzik Algısının Nörolojisi",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Royal Philharmonic Conservatory Evening Course Registration",
      audioScript: `Registrar: Royal Conservatory admissions office. How may I direct your call?
Applicant: Hello, I'm enrolling for the adult evening classical musicianship module.
Registrar: Wonderful! May I record your surname?
Applicant: It is Harrington. H-A-R-R-I-N-G-T-O-N. First name Sebastian.
Registrar: Which primary instrument do you play?
Applicant: Classical cello and piano theory.
Registrar: We have an advanced chamber music class on Thursday evenings at 7:00 PM.
Applicant: What is the term tuition fee?
Registrar: It is £240 for a 10-week semester, including full practice studio privileges.
Applicant: Does that grant free admission to the student symphony orchestra concerts?
Registrar: Yes, all conservatory students receive complimentary recital auditorium tickets.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Applicant Surname: [ H - A - R - R - I - N - G - T - O - N ]", label: "Soyisim", answer: "Harrington", explanation: "Soyadı Harrington olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Primary Instrument: Classical [ ... ]", label: "Enstrüman", answer: "cello", explanation: "Çello (cello) enstrümanıdır." },
        { id: 3, type: "fill", prompt: "3. Class Evening: [ ... ] at 7:00 PM", label: "Gün", answer: "Thursday", explanation: "Perşembe (Thursday) akşamıdır." },
        { id: 4, type: "fill", prompt: "4. 10-week Term Tuition: £[ ... ]", label: "Harç Ücreti", answer: "240", explanation: "Dönemlik ücret £240'tır." },
        { id: 5, type: "fill", prompt: "5. Semester Duration: [ ... ] weeks", label: "Süre", answer: "10 / ten", explanation: "10 haftalık sömestrdır." },
        { id: 6, type: "mcq", prompt: "6. What is included in the £240 term tuition?", options: ["A) 10 weeks of classes and practice studio access", "B) Free custom cello instrument", "C) Recording contract"], answer: "A", explanation: "Dersler ve stüdyo kullanımı dahildir." },
        { id: 7, type: "mcq", prompt: "7. What special performance privilege is granted to enrolled students?", options: ["A) Free recital and symphony concert tickets", "B) Free private taxi transport", "C) Formal dinner with the conductor"], answer: "A", explanation: "Senfoni konserlerine ücretsiz giriş verilir." },
        { id: 8, type: "mcq", prompt: "8. What prerequisite level is expected for the chamber class?", options: ["A) Grade 6 or higher proficiency", "B) Complete beginners with zero experience", "C) Professional concert soloists only"], answer: "A", explanation: "Grade 6 veya üzeri seviye beklenir." },
        { id: 9, type: "mcq", prompt: "9. Practice studios can be reserved up to:", options: ["A) 48 hours in advance online", "B) Six months ahead", "C) Only by telephone at midnight"], answer: "A", explanation: "48 saat önceden rezerve edilir." },
        { id: 10, type: "mcq", prompt: "10. At the conclusion of the semester, students perform in:", options: ["A) The annual Winter Gala Recital", "B) A street busking contest", "C) An empty classroom"], answer: "A", explanation: "Geleneksel Kış Galası'nda konser verirler." }
      ]
    },
    reading: {
      title: "Cognitive Neuroscience of Absolute Pitch and Auditory Cortex Plasticity",
      passage: `[A] Absolute pitch (AP), colloquially designated 'perfect pitch', is the rare cognitive ability to identify or recreate a musical note instantaneously without reference to an external benchmark tone. While occurring in fewer than one in ten thousand individuals in Western societies, cognitive neuroscientists view absolute pitch as a profound window into sensory neuroplasticity, genetics, and critical developmental windows.

[B] Structurally, individuals possessing absolute pitch exhibit pronounced neuroanatomical asymmetry in the superior temporal gyrus, specifically the planum temporale in the left auditory cortex. In AP musicians, the left planum temporale is significantly larger than in non-AP musicians, reflecting heightened cortical territory allocated to categorical auditory processing.

[C] Crucially, possessing the genetic predisposition alone is insufficient; AP acquisition necessitates musical ear training during an early childhood 'critical window' between three and seven years of age. During this developmental period, the infant brain organizes auditory inputs into categorical cognitive templates similar to how native phonemes are mastered during speech acquisition.

[D] Intriguingly, speakers of tonal languages (such as Mandarin and Cantonese), where pitch contours dictate the lexical meaning of words, demonstrate a vastly higher prevalence of absolute pitch. This empirical cross-linguistic correlation substantiates that the neural circuits parsing musical pitch and linguistic semantics share overlapping cognitive substrates.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Absolute pitch occurs in more than 50% of the adult Western population.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[A] paragrafında on binde birden az kişide (fewer than one in 10,000) görüldüğü belirtilir." },
        { id: 2, type: "tfng", prompt: "2. Absolute pitch musicians display an enlarged left planum temporale in the auditory cortex.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında sol planum temporale bölgesinin belirgin şekilde büyük olduğu doğrulanır." },
        { id: 3, type: "tfng", prompt: "3. Tonal language speakers display a markedly higher prevalence of absolute pitch.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[D] paragrafında tonlu dil konuşanlarda oranın çok daha yüksek olduğu doğrulanır." },
        { id: 4, type: "tfng", prompt: "4. Adults who start music at age 40 acquire absolute pitch with ease.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[C] paragrafında 3-7 yaş arasındaki kritik dönemde kazanıldığı açıklanır." },
        { id: 5, type: "fill", prompt: "5. Absolute pitch is colloquially referred to as [ ... ] pitch.", label: "Terim", answer: "perfect", explanation: "[A] paragrafında 'perfect pitch' denmektedir." },
        { id: 6, type: "fill", prompt: "6. The enlarged left auditory brain structure in AP musicians is the planum [ ... ].", label: "Beyin Bölgesi", answer: "temporale", explanation: "[B] paragrafında 'planum temporale' geçer." },
        { id: 7, type: "fill", prompt: "7. Native speakers of [ ... ] languages like Mandarin exhibit higher AP rates.", label: "Dil Türü", answer: "tonal", explanation: "[D] paragrafında 'tonal languages' geçer." },
        { id: 8, type: "mcq", prompt: "8. During what developmental critical window must musical training occur to foster absolute pitch?", options: ["A) Between 3 and 7 years of age", "B) During university years", "C) In retirement"], answer: "A", explanation: "[C] paragrafında 3 ile 7 yaş arası kritik dönem olarak verilir." },
        { id: 9, type: "mcq", prompt: "9. What does the correlation between tonal languages and absolute pitch prove?", options: ["A) Musical pitch and speech semantics share overlapping neural substrates", "B) Mandarin speakers dislike classical instruments", "C) English speakers cannot hear musical tones"], answer: "A", explanation: "[D] paragrafında müzik ve dil devrelerinin ortak beyin ağlarını paylaştığı açıklanır." },
        { id: 10, type: "mcq", prompt: "10. In paragraph B, an enlarged left planum temporale illustrates:", options: ["A) Auditory brain plasticity responding to early musical categorization", "B) A dangerous brain swelling", "C) Inability to comprehend speech"], answer: "A", explanation: "Erken müzikal eğitimin beynin işitsel yapısını şekillendirdiğini gösterir." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The table below compares the percentage of school children learning musical instruments and singing in choirs across four nations between 2000 and 2024. Summarize the information.",
        wordMin: 150,
        svgType: "music_table"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Music and performing arts are proven to enhance spatial intelligence and emotional well-being. Some argue schools should make music education mandatory for all students, while others believe academic curricula should focus strictly on science and mathematics. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "What genre of musical melodies do you enjoy listening to when relaxing?", topic: "Music Taste" },
        { q: "Can you play any musical instrument, or would you like to learn one?", topic: "Instruments" },
        { q: "Do you prefer listening to recorded albums or attending live stadium concerts?", topic: "Live Music" }
      ],
      part2: {
        cardPrompt: "Describe a memorable musical performance, concert, or festival you attended.",
        points: [
          "What the event was and where it was staged",
          "Who performed and who you attended with",
          "What the acoustics and stage atmosphere were like",
          "And explain why this performance was so moving to you."
        ]
      },
      part3: [
        { q: "Should national governments subsidize classical symphony orchestras and opera houses with taxpayers' money?", topic: "Art Subsidies" },
        { q: "How has digital audio streaming algorithms impacted the commercial income of independent musicians?", topic: "Music Streaming" },
        { q: "Why does certain music evoke universal emotional responses across disparate human cultures?", topic: "Universal Psychology of Music" }
      ]
    }
  },

  // =========================================================================
  // MOCK #18: Cambridge 16 Format - Solar Cooperative & Biomimicry
  // =========================================================================
  mock18: {
    id: "mock18",
    number: 18,
    label: "MOCK EXAM #18",
    cambridgeRef: "Cambridge IELTS 16 Academic Test 3",
    category: "nature",
    categoryLabel: "🌿 Çevre & Doğa",
    theme: "Güneş Enerjisi Kooperatifi & Biyomimikri (Doğadan İlham Alan Mühendislik)",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Community Solar Cooperative Shareholder Enrollment",
      audioScript: `Advisor: GreenValley Community Energy Cooperative. How can I assist?
Resident: Hello, I'm a local homeowner interested in purchasing community solar shares.
Advisor: Splendid! Let me register your property address and name. Surname, please?
Resident: It is MacFarlane. M-A-C-F-A-R-L-A-N-E. First name Gordon.
Advisor: What is your street address?
Resident: 42 Hawthorne Crescent.
Advisor: How many solar share units would you like to sponsor?
Resident: I wish to purchase 5 shares in the rooftop solar farm.
Advisor: Each cooperative share is valued at £150, totaling £750.
Resident: What projected annual dividend return does the cooperative pay?
Advisor: Historical returns average 4.5% annually, credited directly toward your domestic power bill.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Resident Surname: [ M - A - C - F - A - R - L - A - N - E ]", label: "Soyisim", answer: "MacFarlane", explanation: "Soyadı MacFarlane olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Street Address: 42 [ ... ] Crescent", label: "Cadde", answer: "Hawthorne", explanation: "Hawthorne Crescent adresidir." },
        { id: 3, type: "fill", prompt: "3. Number of Solar Shares Purchased: [ ... ] shares", label: "Hisse Sayısı", answer: "5 / five", explanation: "5 hisse almıştır." },
        { id: 4, type: "fill", prompt: "4. Total Share Capital Cost: £[ ... ]", label: "Toplam Tutar", answer: "750", explanation: "Toplam £750'dir." },
        { id: 5, type: "fill", prompt: "5. Projected Annual Dividend: [ ... ]%", label: "Yıllık Getiri", answer: "4.5", explanation: "Getiri oranı %4.5'tir." },
        { id: 6, type: "mcq", prompt: "6. Where is the community solar farm physically installed?", options: ["A) On municipal school and warehouse rooftops", "B) In the middle of the highway", "C) Under an underground railway tunnel"], answer: "A", explanation: "Okul ve depo çatılarında kuruludur." },
        { id: 7, type: "mcq", prompt: "7. How is the annual financial dividend distributed to shareholders?", options: ["A) Credited directly toward their domestic energy bills", "B) Sent as physical gold tokens", "C) In cash envelopes only"], answer: "A", explanation: "Elektrik faturasına indirim olarak yansıtılır." },
        { id: 8, type: "mcq", prompt: "8. Minimum shareholding holding period commitment is:", options: ["A) 12 months", "B) 25 years", "C) One week"], answer: "A", explanation: "12 aylık taahhüt süresi vardır." },
        { id: 9, type: "mcq", prompt: "9. Who governs the cooperative's investment decisions?", options: ["A) An elected volunteer committee of local residents", "B) A private foreign hedge fund", "C) The regional military"], answer: "A", explanation: "Seçilmiş yerel komite yönetir." },
        { id: 10, type: "mcq", prompt: "10. In case of moving house, shares can be:", options: ["A) Transferred to the new homeowner or redeemed", "B) Completely forfeited", "C) Converted to grocery store coupons"], answer: "A", explanation: "Yeni ev sahibine devredilebilir veya iade alınabilir." }
      ]
    },
    reading: {
      title: "Biomimicry: Engineering Innovations Inspired by Biological Evolution",
      passage: `[A] Over 3.8 billion years of natural selection, biological evolution has resolved extraordinarily complex engineering dilemmas: structural resilience, aerodynamic efficiency, thermal regulation, and adhesive mechanics. Contemporary material scientists and civil engineers are increasingly abandoning brute-force mechanical design in favor of 'biomimicry'—the conscious emulation of nature's genius to devise sustainable technological breakthroughs.

[B] A celebrated archetype of biomimetic engineering is the Eastgate Centre in Harare, Zimbabwe, designed by architect Mick Pearce. Conventional commercial towers in sub-Saharan climates rely on massive electrical air-conditioning chillers. Pearce instead modeled the Eastgate Centre on the ventilation architecture of indigenous macroterme termite mounds. Termites construct labyrinthine vertical chimneys that continuously draw cool subterranean air through convection while venting heat through passive roof flues, enabling the human building to operate with 90% less energy than conventional office complexes.

[C] In transportation engineering, Japanese Shinkansen bullet train engineers tackled the severe sonic boom produced when high-speed trains entered narrow mountain tunnels. Engineer Eiji Nakatsu, an avid ornithologist, redesigned the train's nose cone to mimic the streamlined beak of the kingfisher bird, which dives from air into dense water with virtually zero splash or acoustic displacement. The biomimetic nose eliminated tunnel boom while augmenting velocity by 10% and slashing power consumption by 15%.

[D] On micro-scales, the adhesive pads of gecko lizards—which adhere to smooth glass ceilings through intermolecular van der Waals forces without chemical glue—have inspired dry medical adhesives and robotic gripping claws. By replicating nature's refined architectural geometries, biomimicry transforms human industrial production into harmonious closed-loop ecological cycles.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. The Eastgate Centre in Zimbabwe utilizes 90% less energy by mimicking termite mound ventilation.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında termit yuvası tasarımıyla %90 daha az enerji tükettiği doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. The redesigned nose cone of the Shinkansen bullet train was modeled after an owl's feather.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[C] paragrafında yalıçapkını kuşunun (kingfisher bird) gagasından esinlenildiği belirtilir." },
        { id: 3, type: "tfng", prompt: "3. Gecko adhesive pads function through liquid chemical excretion.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[D] paragrafında kimyasal sıvı yerine van der Waals kuvvetleriyle tutunduğu açıklanır." },
        { id: 4, type: "tfng", prompt: "4. All commercial skyscrapers in Africa are legally mandated to adopt termite architecture.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN", explanation: "Metinde böyle bir zorunlu yasadan söz edilmemektedir." },
        { id: 5, type: "fill", prompt: "5. Emulating biological evolutionary forms in modern engineering is termed [ ... ].", label: "Terim", answer: "biomimicry", explanation: "[A] paragrafında 'biomimicry' olarak adlandırılır." },
        { id: 6, type: "fill", prompt: "6. The Eastgate building cools its internal spaces through natural [ ... ] flues.", label: "Hava Akımı", answer: "convection", explanation: "[B] paragrafında konveksiyon (convection) hava akımı geçer." },
        { id: 7, type: "fill", prompt: "7. Gecko lizards adhere to smooth surfaces utilizing intermolecular van der [ ... ] forces.", label: "Fizik Kuvveti", answer: "Waals", explanation: "[D] paragrafında 'van der Waals forces' geçer." },
        { id: 8, type: "mcq", prompt: "8. What problem did kingfisher-inspired nose design eliminate for Japanese bullet trains?", options: ["A) Acoustic tunnel sonic boom and aerodynamic drag", "B) Overheating train wheels", "C) Electrical conductor fires"], answer: "A", explanation: "[C] paragrafında tünel sonik patlamasını yok ettiği ve sürtünmeyi azalttığı açıklanır." },
        { id: 9, type: "mcq", prompt: "9. How do macroterme termite mounds maintain steady internal temperatures?", options: ["A) Passive convection chimneys drawing cool air and venting heat", "B) Digging into active volcanoes", "C) Using ice crystals"], answer: "A", explanation: "[B] paragrafında dikey bacalarla serin hava çekip sıcağı tahliye ettikleri açıklanır." },
        { id: 10, type: "mcq", prompt: "10. The author's primary thesis regarding biomimicry is that:", options: ["A) Evolution offers tested, energy-efficient solutions for human technological design", "B) All human machines should be made of organic wood", "C) Animals should replace human engineers"], answer: "A", explanation: "Doğanın milyarlarca yıllık evrimle mükemmel enerji verimliliği çözümleri sunduğu savunulur." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The diagram below illustrates the passive cooling airflow of a termite mound alongside the architectural ventilation system of the Eastgate Centre building. Summarize the information and describe corresponding features.",
        wordMin: 150,
        svgType: "termite_diagram"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Many argue that human technological progress inherently destroys the natural environment. Others contend that scientific innovation and green engineering are the only realistic ways to restore ecological health. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "Do you have solar panels installed in your community or on your roof?", topic: "Solar Energy" },
        { q: "What animal or bird in nature do you find most graceful or fascinating?", topic: "Nature" },
        { q: "How do you try to conserve electrical energy in your home?", topic: "Energy Conservation" }
      ],
      part2: {
        cardPrompt: "Describe an architectural building, bridge, or design that you consider ingenious.",
        points: [
          "Where the building or structure is located",
          "What architectural or functional features make it special",
          "How people utilize or inhabit this structure",
          "And explain why you find its design ingenious."
        ]
      },
      part3: [
        { q: "How can architecture in hot climates be designed to minimize energy consumption without air conditioning?", topic: "Sustainable Architecture" },
        { q: "Why have modern societies been slow to transition to community-owned renewable cooperatives?", topic: "Energy Transition" },
        { q: "What lessons can human industrial manufacturing learn from closed-loop natural ecosystems?", topic: "Circular Economy" }
      ]
    }
  },

  // =========================================================================
  // MOCK #19: Cambridge 14 Format - Heritage Train Tour & Sociolinguistics
  // =========================================================================
  mock19: {
    id: "mock19",
    number: 19,
    label: "MOCK EXAM #19",
    cambridgeRef: "Cambridge IELTS 14 Academic Test 4",
    category: "history",
    categoryLabel: "🏛️ Tarih & Kültür",
    theme: "Tarihi Buharlı Tren Turu & Küresel Ortak Dil Olarak İngilizce",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Highland Steam Heritage Railway Excursion Booking",
      audioScript: `Booking Clerk: Highland Steam Railway reservation line. How may I assist you?
Passenger: Good afternoon. I wish to book excursion seats on the Jacobite Steam Locomotive.
Booking Clerk: Wonderful! May I note your surname?
Passenger: It is Abernathy. A-B-E-R-N-A-T-H-Y. First name Craig.
Booking Clerk: Which travel carriage class do you prefer?
Passenger: The First-Class Observation Car.
Booking Clerk: We have seats on Friday, June 9th departing Fort William at 10:15 AM.
Passenger: What is the fare per ticket?
Booking Clerk: First class is £68 per passenger, including morning tea and traditional shortbread.
Passenger: Does the train traverse the famous Glenfinnan Viaduct?
Booking Clerk: Yes, the locomotive slows across the 21 arches of the viaduct at 11:05 AM for photographs.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Passenger Surname: [ A - B - E - R - N - A - T - H - Y ]", label: "Soyisim", answer: "Abernathy", explanation: "Soyadı Abernathy olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Carriage Class: First-Class [ ... ] Car", label: "Vagon", answer: "Observation", explanation: "Observation Car (Manzara Vagonu)'dur." },
        { id: 3, type: "fill", prompt: "3. Departure Date: Friday, June [ ... ]", label: "Tarih", answer: "9 / 9th", explanation: "Tarih 9 Haziran'dır." },
        { id: 4, type: "fill", prompt: "4. Departure Time: [ ... ] AM from Fort William", label: "Saat", answer: "10:15", explanation: "Kalkış 10:15'tir." },
        { id: 5, type: "fill", prompt: "5. First Class Ticket Fare: £[ ... ]", label: "Bilet Ücreti", answer: "68", explanation: "Ücret £68'dir." },
        { id: 6, type: "mcq", prompt: "6. Which iconic landmark does the steam train cross at 11:05 AM?", options: ["A) Glenfinnan Viaduct with 21 arches", "B) Golden Gate Bridge", "C) Tower Bridge"], answer: "A", explanation: "Glenfinnan Viyadüğü'dür." },
        { id: 7, type: "mcq", prompt: "7. The first-class fare includes:", options: ["A) Morning tea and traditional shortbread", "B) Three-course champagne banquet", "C) Overnight sleeper cabin"], answer: "A", explanation: "Çay ve kurabiye ikramı dahildir." },
        { id: 8, type: "mcq", prompt: "8. Passenger luggage storage on the historic coaches is located:", options: ["A) In vintage overhead racks and Guard's van", "B) On the train roof", "C) Towed behind the engine"], answer: "A", explanation: "Tavan rafları ve bagaj vagonundadır." },
        { id: 9, type: "mcq", prompt: "9. How long is the stopover at the coastal terminus of Mallaig?", options: ["A) One hour and 45 minutes", "B) Exactly five minutes", "C) Two full days"], answer: "A", explanation: "Mallaig'de 1 saat 45 dakika mola verilir." },
        { id: 10, type: "mcq", prompt: "10. In case of locomotive maintenance, the railway operates with:", options: ["A) A vintage heritage diesel locomotive", "B) A modern bullet train", "C) Horse carriages"], answer: "A", explanation: "Klasik dizel lokomotifle sefer tamamlanır." }
      ]
    },
    reading: {
      title: "Global English as a Lingua Franca: Sociolinguistic Fragmentation or Convergence?",
      passage: `[A] Never in recorded human history has a single tongue achieved the planetary ubiquity currently commanded by the English language. Today, non-native speakers of English outnumber native speakers by more than three to one. English operates as the undisputed global operating system for international aviation, maritime navigation, scientific publication, and diplomatic multilateralism.

[B] In sociolinguistics, this phenomenon is conceptualized through Braj Kachru's 'Three Concentric Circles of English'. The Inner Circle represents traditional native bases (UK, USA, Australia); the Outer Circle encompasses post-colonial nations where English holds official institutional status (India, Nigeria, Singapore); and the rapidly expanding Expanding Circle encompasses nations utilizing English as an international lingua franca without historical colonial ties (China, Germany, Brazil).

[C] Crucially, English as a Lingua Franca (ELF) is no longer beholden to Inner Circle native-speaker norms. In multinational business boardrooms from Tokyo to Zurich, non-native speakers communicate with high pragmatic efficacy, frequently dispensing with idiosyncratic British or American idioms, phrasal verbs, and irregular prepositions that impede cross-cultural intelligibility.

[D] Sociolinguists actively debate whether global English will maintain international convergence or undergo dialectal divergence akin to Latin. When the Roman Empire fragmented, regional colloquial Vulgar Latin devolved into distinct Romance languages (French, Spanish, Italian). Similarly, nativized varieties like 'Singlish' in Singapore or 'Hinglish' in India demonstrate that localized Englishes develop distinct syntactical architectures, asserting regional cultural identity.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Non-native speakers of English outnumber native speakers worldwide.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[A] paragrafında ana dili olmayanların 3'e 1 oranında fazla olduğu doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. Braj Kachru's Inner Circle includes nations like India and Nigeria.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[B] paragrafında Hindistan ve Nijerya'nın Outer Circle olduğu belirtilir." },
        { id: 3, type: "tfng", prompt: "3. Non-native speakers in business environments strictly require British idioms for mutual comprehension.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[C] paragrafında yerel deyimlerin aksine anlaşılırlığı zorlaştırdığı ve elendiği açıklanır." },
        { id: 4, type: "tfng", prompt: "4. The fragmentation of Latin into Romance languages provides a historical parallel for global English.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[D] paragrafında Latincenin parçalanması benzer bir süreç olarak verilir." },
        { id: 5, type: "fill", prompt: "5. Kachru conceptualized world Englishes into three concentric [ ... ].", label: "Kavram", answer: "circles", explanation: "[B] paragrafında 'Three Concentric Circles' geçer." },
        { id: 6, type: "fill", prompt: "6. English used between speakers with different native tongues is termed a lingua [ ... ].", label: "Terim", answer: "franca", explanation: "[C] paragrafında 'lingua franca' geçer." },
        { id: 7, type: "fill", prompt: "7. Regional colloquial varieties in Singapore and India are termed Singlish and [ ... ].", label: "Lehçe", answer: "Hinglish", explanation: "[D] paragrafında Singlish ve Hinglish örnek verilir." },
        { id: 8, type: "mcq", prompt: "8. What distinguishes the 'Expanding Circle' in Kachru's model?", options: ["A) Nations using English for international communication without historical British colonization", "B) Traditional native-speaking nations", "C) Countries where English is completely banned"], answer: "A", explanation: "[B] paragrafında sömürge bağı olmadan uluslararası iletişim için kullanan ülkeler olduğu açıklanır." },
        { id: 9, type: "mcq", prompt: "9. Why do non-native speakers in multinational settings often avoid native British/American idioms?", options: ["A) Idioms often impede clear mutual cross-cultural intelligibility", "B) Idioms are legally forbidden in commerce", "C) They do not understand grammar"], answer: "A", explanation: "[C] paragrafında deyimlerin anlaşılırlığı zorlaştırdığı açıklanır." },
        { id: 10, type: "mcq", prompt: "10. In paragraph D, what major sociolinguistic dilemma is highlighted?", options: ["A) Whether global English will remain unified or diverge into separate mutually unintelligible languages", "B) Why no one wants to learn English anymore", "C) How Latin can become spoken again"], answer: "A", explanation: "İngilizcenin küresel birleşmede mi kalacağı yoksa yeni dillere mi bölüneceği tartışmasıdır." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The pie charts below illustrate the worldwide proportion of native English speakers, second-language speakers, and foreign-language learners in 1980 and 2025. Summarize the changes.",
        wordMin: 150,
        svgType: "english_pies"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "As English dominates international commerce, science, and the internet, some celebrate this as a universal bridge connecting humanity. Others argue it leads to cultural imperialism and the extinction of indigenous languages. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "How long have you been studying English, and what is your favorite way to practice?", topic: "Language Learning" },
        { q: "Do you enjoy taking scenic train journeys when you travel on holiday?", topic: "Trains" },
        { q: "What is your native mother tongue, and what do you cherish most about it?", topic: "Native Language" }
      ],
      part2: {
        cardPrompt: "Describe a conversation or cross-cultural encounter you had in English with someone from another country.",
        points: [
          "Who you spoke with and where this encounter occurred",
          "What subjects or topics you discussed together",
          "Whether you experienced any linguistic misunderstandings",
          "And explain how you felt communicating in a shared global language."
        ]
      },
      part3: [
        { q: "Will artificial intelligence simultaneous real-time ear translation eliminate the need to learn foreign languages?", topic: "Future Translation" },
        { q: "Does the global spread of English threaten national cultural identities?", topic: "Cultural Identity" },
        { q: "Should international organizations adopt multiple regional languages rather than relying solely on English?", topic: "Language Diplomacy" }
      ]
    }
  },

  // =========================================================================
  // MOCK #20: Cambridge 19 Master - Botanical Internship & Carbon Capture
  // =========================================================================
  mock20: {
    id: "mock20",
    number: 20,
    label: "MOCK EXAM #20",
    cambridgeRef: "Cambridge IELTS 19 Academic Test 3",
    category: "nature",
    categoryLabel: "🌿 Çevre & Doğa",
    theme: "Botanik Bahçesi Stajı & Karbon Yakalama ve Jeolojik Depolama",
    difficulty: "Band 6.5 - 8.5",
    listening: {
      title: "Imperial Botanical Gardens Research Fellowship Application",
      audioScript: `Curator: Imperial Botanical Gardens, Herbarium Division. How can I assist?
Scholar: Hello, I'm calling to inquire about the postgraduate research fellowship in tropical botany.
Curator: Welcome. May I record your full surname?
Scholar: It is Sterling-Vance. S-T-E-R-L-I-N-G. First name Julian.
Curator: Which plant conservation genus are you researching?
Scholar: The Orchidaceae epiphytic canopy varieties of Southeast Asia.
Curator: The fellowship tenure commences on October 1st at the Kew Research Complex.
Scholar: What stipend does the fellowship grant?
Curator: The monthly research stipend is £1,650, which includes fully funded laboratory sequencing access.
Scholar: Is on-campus scholar housing available?
Curator: Yes, residential studio flats in Victoria Lodge are provided for £450 monthly.`,
      questions: [
        { id: 1, type: "fill", prompt: "1. Scholar Surname: [ S - T - E - R - L - I - N - G ]", label: "Soyisim", answer: "Sterling", explanation: "Soyadı Sterling olarak hecelenir." },
        { id: 2, type: "fill", prompt: "2. Plant Family of Research: [ ... ] canopy varieties", label: "Bitki Ailesi", answer: "Orchidaceae / Orchid", explanation: "Orkide (Orchidaceae) ailesidir." },
        { id: 3, type: "fill", prompt: "3. Fellowship Start Date: October [ ... ]", label: "Tarih", answer: "1 / 1st", explanation: "Başlangıç 1 Ekim'dir." },
        { id: 4, type: "fill", prompt: "4. Monthly Research Stipend: £[ ... ]", label: "Burs", answer: "1650 / 1,650", explanation: "Aylık burs £1,650'dir." },
        { id: 5, type: "fill", prompt: "5. Subsidized Scholar Housing Rent: £[ ... ]", label: "Kira", answer: "450", explanation: "Kira ücreti £450'dir." },
        { id: 6, type: "mcq", prompt: "6. Where is the research fellowship physically conducted?", options: ["A) Kew Research Complex", "B) Underground coal mine", "C) City airport terminal"], answer: "A", explanation: "Kew Araştırma Kompleksi'nde yapılır." },
        { id: 7, type: "mcq", prompt: "7. The £1,650 research stipend covers:", options: ["A) Monthly living support and laboratory DNA sequencing access", "B) Luxury sports car purchase", "C) Commercial airline stock"], answer: "A", explanation: "Yaşam desteği ve DNA dizileme laboratuvarını kapsar." },
        { id: 8, type: "mcq", prompt: "8. Fellows must present their scientific findings at:", options: ["A) The Annual International Botanical Congress", "B) Local primary schools only", "C) A private television game show"], answer: "A", explanation: "Uluslararası Botanik Kongresi'nde sunum yapılır." },
        { id: 9, type: "mcq", prompt: "9. Herbarium specimen handling requires:", options: ["A) Climate-controlled sterile glove cabinets", "B) Open flame fires", "C) Water hoses"], answer: "A", explanation: "Steril iklim dolaplarında incelenir." },
        { id: 10, type: "mcq", prompt: "10. Application submission deadline is strictly:", options: ["A) July 15th at 5:00 PM", "B) Midnight on New Year's Eve", "C) Any time next year"], answer: "A", explanation: "Son başvuru 15 Temmuz'dur." }
      ]
    },
    reading: {
      title: "Direct Air Capture and Deep Geological Carbon Mineralization",
      passage: `[A] As atmospheric concentrations of greenhouse carbon dioxide breach 425 parts per million (ppm), climate scientists increasingly emphasize that emissions abatement alone cannot prevent severe planetary tipping points. Achieving net-negative emissions mandates technological carbon dioxide removal (CDR), notably through Direct Air Capture (DAC) coupled with permanent deep geological storage.

[B] Direct Air Capture installations deploy massive industrial fans to force ambient air through chemical contactors containing basic solid sorbents or potassium hydroxide solutions. When heated through low-carbon geothermal energy to 100°C, these sorbents release pure, concentrated CO2 gas, which is compressed into a supercritical fluid state.

[C] Safe permanent disposal relies upon in-situ basalt mineralization—a breakthrough process pioneered by the Carbfix project in Iceland. Supercritical CO2 is dissolved in enormous volumes of water and injected over 1,000 meters into porous subterranean basaltic bedrock. Within two years, the dissolved acidic carbon dioxide reacts chemically with magnesium, calcium, and iron ions, precipitating into solid, inert carbonate minerals (such as limestone), eliminating risk of leakage back to the surface.

[D] The critical obstacle facing direct air capture is thermodynamic scaling. Because CO2 is dilute in ambient air (roughly one molecule in every 2,500 air molecules), capturing one gigaton of carbon dioxide demands colossal electrical and thermal inputs. Without deployment of dedicated zero-carbon geothermal or nuclear energy, direct air capture risks expending more energy than it remediates.`,
      questions: [
        { id: 1, type: "tfng", prompt: "1. Direct air capture machines filter carbon dioxide directly from open ambient air.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[B] paragrafında 'ambient air through chemical contactors' ifadesi doğrulanır." },
        { id: 2, type: "tfng", prompt: "2. The Carbfix process in Iceland permanently turns carbon dioxide gas into solid rock within two years.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE", explanation: "[C] paragrafında iki yıl içinde katı karbonat mineraline dönüştüğü doğrulanır." },
        { id: 3, type: "tfng", prompt: "3. Direct Air Capture is currently operated with zero electricity consumption.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[D] paragrafında devasa elektrik ve ısı tükettiği ('colossal electrical and thermal inputs') belirtilir." },
        { id: 4, type: "tfng", prompt: "4. Carbon dioxide constitutes more than 20% of ambient atmospheric air molecules.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE", explanation: "[D] paragrafında her 2.500 molekülden sadece birinin CO2 olduğu açıklanır." },
        { id: 5, type: "fill", prompt: "5. The technology filtering atmospheric carbon dioxide is termed Direct [ ... ] Capture.", label: "Teknoloji", answer: "Air", explanation: "[A] paragrafında Direct Air Capture geçer." },
        { id: 6, type: "fill", prompt: "6. Supercritical CO2 reacts with basalt rock to precipitate into solid [ ... ] minerals.", label: "Kaya Türü", answer: "carbonate / limestone", explanation: "[C] paragrafında karbonat minerallerine (carbonate minerals) dönüştüğü açıklanır." },
        { id: 7, type: "fill", prompt: "7. The pioneering geological mineralization project in Iceland is named [ ... ].", label: "Proje", answer: "Carbfix", explanation: "[C] paragrafında Carbfix projesi belirtilir." },
        { id: 8, type: "mcq", prompt: "8. Why is direct air capture energetically demanding compared to flue gas filtration?", options: ["A) Carbon dioxide is extremely dilute in ambient atmosphere", "B) Ambient air is too cold to pump", "C) Direct air capture uses wooden fans"], answer: "A", explanation: "[D] paragrafında açık havadaki CO2 konsantrasyonunun çok seyreltik olduğu açıklanır." },
        { id: 9, type: "mcq", prompt: "9. How does in-situ basalt mineralization permanently eliminate carbon leakage risks?", options: ["A) By chemically transforming gaseous carbon dioxide into immovable solid stone", "B) By storing it in plastic tanks", "C) By shipping it to the Moon"], answer: "A", explanation: "[C] paragrafında gazı katı taşa dönüştürerek sızma riskini yok ettiği açıklanır." },
        { id: 10, type: "mcq", prompt: "10. In paragraph A, what does 'net-negative emissions' denote?", options: ["A) Removing more greenhouse carbon from the atmosphere than human industry emits", "B) Banning all human vehicles", "C) Stopping all industrial manufacturing"], answer: "A", explanation: "Atmosferden insanlığın saldığından daha fazla karbon çekmek anlamına gelir." }
      ]
    },
    writing: {
      task1: {
        type: "Academic Task 1 (Report)",
        prompt: "The line graph below depicts atmospheric CO2 concentration (ppm) from 1960 to 2025 alongside industrial carbon capture capacity projections up to 2040. Summarize the information and report key trends.",
        wordMin: 150,
        svgType: "carbon_lines"
      },
      task2: {
        type: "Academic Task 2 (Discursive Essay)",
        prompt: "Some environmentalists contend that investing billions into technological carbon capture creates a moral hazard, allowing fossil fuel corporations to delay phasing out coal and oil. Others believe direct air capture is indispensable for climate survival. Discuss both views and give your opinion.",
        wordMin: 250
      }
    },
    speaking: {
      part1: [
        { q: "Do you enjoy visiting botanical gardens or greenhouse conservatories?", topic: "Gardens" },
        { q: "What plants or flowers grow most commonly in your country?", topic: "Flora" },
        { q: "What environmental issues do you care about the most right now?", topic: "Climate Change" }
      ],
      part2: {
        cardPrompt: "Describe an innovative scientific project or technological breakthrough that could help heal the environment.",
        points: [
          "What the technology or scientific project is",
          "How it functions and where it is deployed",
          "What major environmental problems it addresses",
          "And explain why you consider this innovation promising."
        ]
      },
      part3: [
        { q: "Can technological geoengineering solutions ever fully replace the need to reduce fossil fuel consumption?", topic: "Geoengineering Ethics" },
        { q: "How can wealthy industrialized nations assist developing economies in adopting green technologies?", topic: "Climate Justice" },
        { q: "What role should scientific researchers play in shaping national legislative environmental policies?", topic: "Scientists & Policy" }
      ]
    }
  }
};
