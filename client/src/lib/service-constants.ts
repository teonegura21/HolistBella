// Service Colors Configuration
export const SERVICE_COLORS = {
  "terapie-bowen": {
    primary: "green-600",
    secondary: "emerald-600",
    accent: "green-200",
    gradient: "from-green-600 to-emerald-600",
  },
  "biorezonanta": {
    primary: "purple-600",
    secondary: "violet-600",
    accent: "purple-200",
    gradient: "from-purple-600 to-violet-600",
  },
  "healy": {
    primary: "yellow-500",
    secondary: "orange-500",
    accent: "yellow-200",
    gradient: "from-yellow-500 to-orange-500",
  },
  "apa-kangen": {
    primary: "blue-600",
    secondary: "cyan-600",
    accent: "blue-200",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
  },
  "andullation": {
    primary: "blue-600",
    secondary: "cyan-600",
    accent: "cyan-200",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
  },
  "nutritie-celulara": {
    primary: "violet-600",
    secondary: "purple-600",
    accent: "violet-200",
    gradient: "from-violet-600 via-purple-600 to-violet-800",
  },
} as const;

// Shared Trust Signals
export const SHARED_TRUST_SIGNALS = [
  "✨ Consultație gratuită",
  "📞 Răspundem în maxim 2 ore",
  "✅ Garanție satisfacție 100%",
];

// Base Testimonial Template
export const BASE_TESTIMONIALS = {
  "terapie-bowen": [
    {
      text: "Terapia Bowen m-a ajutat să scap de durerile de spate cronice după doar 3 ședințe. Recomand cu încredere!",
      name: "Maria I.",
      age: "45 ani",
      condition: "Dureri de spate cronice",
      rating: 5,
    },
    {
      text: "Am observat o relaxare profundă și o îmbunătățire a mobilității după prima ședință.",
      name: "Ion P.",
      age: "38 ani",
      condition: "Tensiune musculară",
      rating: 5,
    },
    {
      text: "Ca sportiv, am încercat multe terapii de recuperare, dar Terapia Bowen este cu adevărat specială.",
      name: "Alexandru M.",
      age: "32 ani",
      condition: "Recuperare sportivă",
      rating: 5,
    },
  ],
  "biorezonanta": [
    {
      text: "Biorezonanța mi-a oferit indicii extrem de valoroase despre sursele de stres din organismul meu.",
      name: "Ana M.",
      age: "42 ani",
      condition: "Optimizare stare de sănătate",
      rating: 5,
    },
    {
      text: "Raportul detaliat și explicațiile clare ale terapeutului m-au ajutat să înțeleg mult mai bine ce se întâmplă în corpul meu.",
      name: "Ion G.",
      age: "38 ani",
      condition: "Evaluare energetică",
      rating: 5,
    },
    {
      text: "Ca sportiv, am folosit biorezonanța pentru a identifica factorii care îmi afectau recuperarea.",
      name: "Mihai D.",
      age: "29 ani",
      condition: "Optimizare performanță",
      rating: 5,
    },
  ],
  "healy": [
    {
      text: "Healy m-a ajutat să gestionez durerea de migrene mai eficient decât orice altceva am încercat.",
      name: "Elena S.",
      age: "41 ani",
      condition: "Migrene cronice",
      rating: 5,
    },
    {
      text: "Senzația de relaxare după o ședință Healy este incredibilă. Am observat o îmbunătățire clară a somnului.",
      name: "Mihai D.",
      age: "35 ani",
      condition: "Stres și insomnie",
      rating: 5,
    },
    {
      text: "Ca sportiv, folosesc Healy pentru recuperare musculară. Programele pentru fitness și durere m-au ajutat să reduc timpul de recuperare.",
      name: "Andrei T.",
      age: "28 ani",
      condition: "Recuperare sportivă",
      rating: 5,
    },
  ],
  "apa-kangen": [
    {
      text: "Apa Kangen a făcut o diferență uriașă în hidratarea mea zilnică. Am observat o îmbunătățire clară a energiei și digestiei.",
      name: "Elena R.",
      age: "39 ani",
      condition: "Hidratare optimă",
      rating: 5,
    },
    {
      text: "După ce am început să folosesc apa Kangen, am observat o reducere semnificativă a balonării și o digestie mult mai bună.",
      name: "Mihai C.",
      age: "44 ani",
      condition: "Suport digestiv",
      rating: 5,
    },
    {
      text: "Ca sportiv, apa Kangen m-a ajutat să mă rehidratez mult mai eficient după antrenamente. Recuperarea este mai rapidă.",
      name: "Andreea S.",
      age: "31 ani",
      condition: "Recuperare sportivă",
      rating: 5,
    },
  ],
  "andullation": [
    {
      text: "După 4 săptămâni de terapie Andullation, durerea lombară cronică s-a redus cu peste 50%. Este incredibil cum vibrațiile blânde pot face o diferență atât de mare.",
      name: "Ioana B.",
      age: "47 ani",
      condition: "Durere lombară cronică",
      rating: 5,
    },
    {
      text: "Am fost sceptică inițial, dar după prima ședință am simțit o relaxare profundă. După 6 ședințe, mobilitatea cervicală s-a îmbunătățit semnificativ.",
      name: "Cristina M.",
      age: "52 ani",
      condition: "Durere cervicală",
      rating: 5,
    },
    {
      text: "Ca terapeut fizic, folosesc Andullation ca adjuvant în programele de reabilitare. Pacienții raportează reducerea durerii și îmbunătățirea circulației.",
      name: "Dr. Andrei P.",
      title: "Fizioterapeut",
      rating: 5,
    },
  ],
  "nutritie-celulara": [
    {
      text: "Protocolul de nutriție celulară dezvoltat de Angelica completează perfect tratamentele medicale. Pacienții mei raportează îmbunătățiri semnificative în energia și starea generală.",
      name: "Dr. Elena Vasile",
      title: "Medic Specialist Endocrinologie",
      rating: 5,
    },
    {
      text: "După 2 luni de program de nutriție celulară, am energie ca la 25 de ani! Testele sangvine arată îmbunătățiri în toți markerii metabolici.",
      name: "Mihai Georgescu",
      age: "45 ani",
      condition: "Oboseală cronică",
      rating: 5,
    },
    {
      text: "Protocolul personalizat mi-a transformat complet metabolismul. Am slăbit 15 kg sănătos și toate analizele s-au îmbunătățit dramatic.",
      name: "Ana Popescu",
      age: "58 ani",
      condition: "Sindrom metabolic",
      rating: 5,
    },
  ],
} as const;

// Base FAQ Template
export const BASE_FAQS = {
  common: [
    {
      question: "Este sigur tratamentul?",
      answer: "Da, toate terapiile sunt sigure când se respectă contraindicațiile. Consultația medicală prealabilă este obligatorie.",
    },
    {
      question: "Cât durează să văd rezultate?",
      answer: "Rezultatele variază, dar majoritatea clienților observă îmbunătățiri după 3-5 ședințe sau 2-4 săptămâni de tratament consistent.",
    },
    {
      question: "Ce trebuie să fac după tratament?",
      answer: "Urmează recomandările personalizate pentru hidratare, odihnă și activitate fizică. Suportul continuu este disponibil pentru optimizare.",
    },
  ],
  "terapie-bowen": [
    {
      question: "Terapia Bowen doare?",
      answer: "Nu, absolut deloc! Mișcările sunt extrem de blânde și non-invazive. Majoritatea clienților descriu experiența ca fiind profund relaxantă.",
    },
    {
      question: "Trebuie să mă dezbrac pentru terapie?",
      answer: "Nu este necesar. Terapia Bowen se aplică peste haine lejere și confortabile (tricou și pantaloni de bumbac, de exemplu).",
    },
  ],
  "biorezonanta": [
    {
      question: "Biorezonanța poate diagnostica boli sau cancer?",
      answer: "Nu, categoric nu. Biorezonanța este o metodă de evaluare funcțională complementară, NU o metodă de diagnostic medical. Pentru diagnostic medical, consultați un medic calificat.",
    },
    {
      question: "Ce primesc la finalul ședinței?",
      answer: "Un raport detaliat și un plan de recomandări personalizate pentru stil de viață, dietă și suplimente.",
    },
  ],
  "healy": [
    {
      question: "Ce simt în timpul terapiei?",
      answer: "O ușoară furnicătură la nivelul electrozilor. Intensitatea este ajustabilă pentru confort maxim. Nu există durere sau disconfort.",
    },
    {
      question: "Este sigur de folosit?",
      answer: "Da, Healy este un dispozitiv medical certificat clasa IIa în UE și recunoscut de FDA pentru anumite aplicații. Respectați contraindicațiile.",
    },
  ],
  "apa-kangen": [
    {
      question: "Poate apa alcalină să modifice pH-ul organismului?",
      answer: "Nu. Organismul reglează strict pH-ul sanguin între 7.35-7.45 prin rinichi și plămâni. Consumul de apă alcalină nu poate altera semnificativ pH-ul general al corpului.",
    },
    {
      question: "Este sigură pentru consum pe termen lung?",
      answer: "Studiile disponibile indică că este în general sigură pentru majoritatea persoanelor. Totuși, pH-ul foarte ridicat (>9.8) consumat regulat poate prezenta riscuri, fiind recomandată consultarea medicală.",
    },
  ],
  "andullation": [
    {
      question: "Care sunt contraindicațiile terapiei?",
      answer: "Contraindicații absolute: tromboză acută, aneurisme, sarcină primul trimestru, implanturi cardiace nestabile. Contraindicații relative: hipertensiune severă necontrolată, epilepsie. Evaluarea medicală prealabilă este obligatorie.",
    },
    {
      question: "Cât timp durează să văd rezultate?",
      answer: "Conform studiilor, unii pacienți raportează îmbunătățiri în primele săptămâni. Beneficiile complete pot apărea la 8-12 săptămâni de tratament consistent.",
    },
  ],
  "nutritie-celulara": [
    {
      question: "Cât durează protocolul complet?",
      answer: "Protocolul standard durează 90 de zile, structurat în 3 faze: detoxificare (30 zile), regenerare (30 zile) și optimizare sistemică (30 zile). Durata poate fi ajustată în funcție de nevoile individuale.",
    },
    {
      question: "Văd rezultate imediat?",
      answer: "Mulți clienți observă îmbunătățiri în energie și claritate mentală în primele 2-3 săptămâni. Rezultatele complete, inclusiv în biomarkeri, se văd după 60-90 zile de implementare consistentă.",
    },
  ],
} as const;

// Service Stats Templates
export const SERVICE_STATS = {
  "terapie-bowen": [
    { number: "50+", label: "Ani de practică globală" },
    { number: "3-5", label: "Ședințe pentru rezultate" },
    { number: "90%", label: "Clienți mulțumiți" },
  ],
  "biorezonanta": [
    { number: "60-90", label: "Minute scanare" },
    { number: "500+", label: "Parametri evaluați" },
    { number: "100%", label: "Non-invaziv" },
  ],
  "healy": [
    { number: "20-60", label: "Minute ședință" },
    { number: "100+", label: "Programe specializate" },
    { number: "FDA", label: "Certificat medical" },
  ],
  "apa-kangen": [
    { number: "8.8-9.5", label: "pH Alcalin Optimal" },
    { number: "50+", label: "Ani experiență" },
    { number: "1000+", label: "Clienți mulțumiți" },
  ],
  "andullation": [
    { number: "5-40", label: "Hz Frecvență" },
    { number: "30-45", label: "Minute ședință" },
    { number: "50+", label: "Studii clinice" },
  ],
  "nutritie-celulara": [
    { number: "89%", label: "Funcție mitocondrială" },
    { number: "90", label: "Zile protocol complet" },
    { number: "500+", label: "Studii clinice validate" },
  ],
} as const;

// Uniform Disclaimer Component Data
export const UNIFORM_DISCLAIMER = {
  text: "Toate terapiile oferite sunt complementare și nu înlocuiesc diagnosticul sau tratamentul medical convențional. Consultația medicală prealabilă este obligatorie. Rezultatele pot varia în funcție de individ.",
  important: [
    "Consultație medicală prealabilă obligatorie",
    "Nu înlocuiesc tratamentele medicale standard",
    "Rezultatele individuale pot varia",
    "Pot exista contraindicații specifice",
    "Suport continuu disponibil pentru optimizare",
  ],
} as const;