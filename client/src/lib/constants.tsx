export const CONTACT_INFO = {
  phone: "+40744922305",
  email: "angelicanegura@yahoo.com",
  address: "Strada Soficu nr 1, Iași",
  addressDetails: "la intersecție cu Str. Vantu nr 6",
  whatsapp: "https://wa.me/40744922305",
  facebook: "https://www.facebook.com/angelica.negura"
};

export const MAIN_SERVICES = [
  {
    id: "kangen",
    title: "Apa Kangen",
    slug: "apa-kangen",
    description: "Apa alcalină ionizată cu proprietăți antioxidante și microstructurată pentru hidratare superioară și echilibrul pH-ului organismului.",
    benefits: ["Alcalină ionizată", "Antioxidantă", "Microstructurată"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: "biorezonanta",
    title: "Biorezonanță Magnetică",
    slug: "biorezonanta",
    description: "Metodă non-invazivă de evaluare și tratament prin frecvențe electromagnetice pentru detectarea și corectarea dezechilibrelor energetice din organism.",
    benefits: ["Non-invaziv", "Diagnostic complet", "Tratament personalizat"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: "andullation",
    title: "Andullation",
    slug: "andullation",
    description: "Terapie prin vibrații mecanice și căldură infraroșu pentru îmbunătățirea circulației, reducerea durerii și accelerarea proceselor de vindecare.",
    benefits: ["Vibrații terapeutice", "Căldură infraroșu", "Recuperare rapidă"],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: "healy",
    title: "Healy",
    slug: "healy",
    description: "Dispozitiv de biorezonanță portabil pentru echilibrarea câmpului bioenergetice și sprijinirea proceselor naturale de vindecare ale organismului.",
    benefits: ["Portabil", "Bioenergetică", "Personalizat"],
    color: "text-green-600",
    bgColor: "bg-green-50",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  }
];

export const ADDITIONAL_SERVICES = [
  {
    id: "reiki",
    title: "Terapie Reiki",
    description: "Tehnică japoneză de vindecare prin energie pentru tratarea durerii fizice și emoționale. Sistem pentru echilibru și armonizarea tuturor dimensiunilor ființei.",
    benefits: ["Sigur", "Plăcut", "Armonizant"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: "terapie-bowen",
    title: "Terapie Bowen",
    description: "Terapia Bowen prezintă unul dintre cele mai profunde concepte terapeutice existente. Se bazează pe relaxarea totală a corpului pentru activarea abilității proprii de vindecare.",
    benefits: ["Relaxare", "Echilibru", "Armonie"],
    color: "text-green-600",
    bgColor: "bg-green-50",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: "rejuvance",
    title: "Rejuvance",
    description: "Terapie avansată de rejuvenare folosind tehnologii moderne pentru revitalizarea celulară și îmbunătățirea aspectului pielii.",
    benefits: ["Rejuvenare", "Revitalizare", "Anti-aging"],
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  }
];

export const ALL_SERVICES = [...MAIN_SERVICES, ...ADDITIONAL_SERVICES];

export const OFFICE_HOURS = [
  { day: "Luni - Vineri", hours: "09:00 - 18:00" },
  { day: "Sâmbătă", hours: "09:00 - 14:00" },
  { day: "Duminică", hours: "Închis", closed: true }
];
