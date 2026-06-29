import physcGymLogo from "@/assets/physc-gym-logo.svg";

/**
 * CENTRAL GYM CONFIGURATION
 * -----------------------------------------------------------------------------
 * This is the ONLY file you need to edit to personalise this concept for a
 * different gym client. Replace the values below — logo, colours, copy,
 * imagery, contact details, trainers, plans, etc. — and the entire site will
 * update automatically.
 *
 * All images are marked as PLACEHOLDER. Replace `imageUrl` strings with the
 * client's real, approved photography before delivering.
 * -----------------------------------------------------------------------------
 */

export type GymConfig = typeof gymConfig;

export const gymConfig = {
  // ---------------------------------------------------------------------------
  // AGENCY / CONCEPT BAR
  // ---------------------------------------------------------------------------
  agency: {
    name: "Studio Atlas",
    showConceptBar: false, // concept bar removed per client request
  },

  // ---------------------------------------------------------------------------
  // BRAND
  // ---------------------------------------------------------------------------
  brand: {
    name: "Physc Gym",
    logoText: "Physc Gym", // fallback word-mark if logoImage is empty
    logoImage: physcGymLogo, // optional: paste a logo URL to use an image instead of text
    tagline: "Premium Strength & Conditioning",
  },

  // ---------------------------------------------------------------------------
  // COLOURS — one configurable accent drives the whole site
  // Use any valid CSS colour. The site theme is dark charcoal/black.
  // ---------------------------------------------------------------------------
  colors: {
    background: "#0a0a0a", // near-black
    surface: "#141414", // charcoal
    accent: "#E8FF3A", // electric lime — change to brand colour
    accentForeground: "#0a0a0a",
  },

  // ---------------------------------------------------------------------------
  // CONTACT
  // ---------------------------------------------------------------------------
  contact: {
    phone: "+91 98765 43210",
    whatsapp: "919876543210", // digits only, with country code
    email: "hello@physcgym.fit",
    instagram: "https://www.instagram.com/physc_gym/?hl=en",
    googleMaps: "https://maps.google.com/?q=Physc+Gym",
    address: "Unit 5A, Bund Garden Road, Pune 411001",
    landmark: "Near Bund Garden",
    parking: "Free covered parking for members",
  },

  // ---------------------------------------------------------------------------
  // TIMINGS
  // ---------------------------------------------------------------------------
  timings: {
    weekdays: "5:00 AM – 11:00 PM",
    weekends: "6:00 AM – 10:00 PM",
    short: "Open today · 5 AM – 11 PM",
  },

  // ---------------------------------------------------------------------------
  // GOOGLE RATING
  // ---------------------------------------------------------------------------
  rating: {
    score: 4.9,
    reviews: 482,
  },

  // ---------------------------------------------------------------------------
  // HERO
  // ---------------------------------------------------------------------------
  hero: {
    eyebrow: "Premium Fitness Experience",
    heading: "Train Stronger.\nLive Better.",
    subheading:
      "Premium equipment, expert trainers and a motivating fitness community designed to help you achieve real results.",
    primaryCta: "Book a Free Trial",
    secondaryCta: "Explore the Gym",
    // PLACEHOLDER — replace with the client's real hero photograph
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80",
    location: "Pune, Maharashtra",
    activeMembers: "500+ active members",
  },

  // ---------------------------------------------------------------------------
  // STATS
  // ---------------------------------------------------------------------------
  stats: [
    { value: 10000, suffix: "+", label: "sq. ft. facility" },
    { value: 25, suffix: "+", label: "certified trainers" },
    { value: 500, suffix: "+", label: "active members" },
    { value: 30, suffix: "+", label: "weekly classes" },
  ],

  // ---------------------------------------------------------------------------
  // ABOUT
  // ---------------------------------------------------------------------------
  about: {
    label: "About the gym",
    heading: "Built for serious training, designed for everyone.",
    body: "Physc Gym is a 10,000 sq. ft. strength and conditioning club in the heart of Pune. We pair premium equipment with certified coaches and personalised programmes — so every member, from first-timer to athlete, trains with intent.",
    differentiators: [
      { title: "Premium equipment", desc: "Hammer Strength, Rogue, Technogym." },
      { title: "Certified trainers", desc: "NSCA, ACE & K11 certified coaches." },
      { title: "Personalised programmes", desc: "Built around your goals, not a template." },
    ],
    cta: "Know More About Us",
    // PLACEHOLDER
    imageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80",
  },

  // ---------------------------------------------------------------------------
  // FACILITIES — Replace images with the client's real infrastructure photos
  // ---------------------------------------------------------------------------
  facilities: [
    {
      name: "Strength Training",
      desc: "Olympic platforms, racks and free-weight floor.",
      imageUrl:
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Cardio Zone",
      desc: "Treadmills, bikes, rowers and stair climbers.",
      imageUrl:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Functional Training",
      desc: "Turf, sleds, kettlebells and rigs.",
      imageUrl:
        "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Group Activity Studio",
      desc: "Heated mirror studio for yoga, zumba & HIIT.",
      imageUrl:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Personal Training",
      desc: "Private 1-on-1 coaching area.",
      imageUrl:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Changing Rooms",
      desc: "Showers, vanity and premium amenities.",
      imageUrl:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Lockers",
      desc: "Secure digital lockers for every member.",
      imageUrl:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Recovery Area",
      desc: "Foam-rolling, stretching & mobility.",
      imageUrl:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  // ---------------------------------------------------------------------------
  // PROGRAMMES
  // ---------------------------------------------------------------------------
  programmes: [
    {
      name: "Strength Training",
      desc: "Build muscle, get stronger.",
      level: "All levels",
      imageUrl:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Personal Training",
      desc: "1-on-1 coaching, fully customised.",
      level: "Beginner → Pro",
      imageUrl:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Functional Training",
      desc: "Movement quality & athleticism.",
      level: "Intermediate",
      imageUrl:
        "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "CrossFit",
      desc: "High-intensity group conditioning.",
      level: "Intermediate",
      imageUrl:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Yoga",
      desc: "Strength, balance, mindfulness.",
      level: "All levels",
      imageUrl:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Zumba",
      desc: "Dance-led cardio for everyone.",
      level: "Beginner",
      imageUrl:
        "https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Boxing",
      desc: "Pad-work, bag-work, sparring.",
      level: "All levels",
      imageUrl:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Transformation",
      desc: "12-week guided body recomposition.",
      level: "Committed",
      imageUrl:
        "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  // ---------------------------------------------------------------------------
  // WHY CHOOSE
  // ---------------------------------------------------------------------------
  whyChoose: [
    "Certified coaches",
    "Premium equipment",
    "Personalised training",
    "Flexible timings",
    "Clean & hygienic facility",
    "Supportive community",
  ],

  // ---------------------------------------------------------------------------
  // TRAINERS — Replace with the client's real coaches
  // ---------------------------------------------------------------------------
  trainers: [
    {
      name: "Arjun Mehta",
      speciality: "Strength & Powerlifting",
      years: 9,
      certs: "NSCA-CSCS, K11",
      instagram: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Priya Sharma",
      speciality: "Functional & Mobility",
      years: 7,
      certs: "ACE, FRC",
      instagram: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Rohan Iyer",
      speciality: "Boxing & Conditioning",
      years: 11,
      certs: "IBA, ACE",
      instagram: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Neha Kapoor",
      speciality: "Yoga & Pilates",
      years: 8,
      certs: "RYT-500",
      instagram: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sameer Khan",
      speciality: "Transformation Coach",
      years: 12,
      certs: "ISSA, K11",
      instagram: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    },
  ],

  // ---------------------------------------------------------------------------
  // MEMBERSHIPS
  // ---------------------------------------------------------------------------
  memberships: {
    plans: [
      {
        name: "Monthly",
        desc: "Flexible month-to-month.",
        benefits: ["Full gym access", "All group classes", "Locker access"],
        popular: false,
      },
      {
        name: "Quarterly",
        desc: "Best for trying things out.",
        benefits: ["Everything in Monthly", "1 PT session / month", "Body composition scan"],
        popular: false,
      },
      {
        name: "Half-Yearly",
        desc: "Most chosen by serious members.",
        benefits: ["Everything in Quarterly", "3 PT sessions / month", "Nutrition consultation"],
        popular: true,
      },
      {
        name: "Annual",
        desc: "Best value, fully committed.",
        benefits: [
          "Everything in Half-Yearly",
          "Unlimited PT add-on support",
          "Guest passes & perks",
        ],
        popular: false,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // TRANSFORMATIONS — PLACEHOLDER until client provides approved photos
  // ---------------------------------------------------------------------------
  transformations: [
    {
      name: "Member · Sample A",
      goal: "Fat loss",
      duration: "16 weeks",
      quote: "Sample testimonial — replace once approved by member.",
      before:
        "https://images.unsplash.com/photo-1583500178690-f7fd58a83b3a?auto=format&fit=crop&w=900&q=80",
      after:
        "https://images.unsplash.com/photo-1583454152273-1a3fbc36ad13?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Member · Sample B",
      goal: "Muscle gain",
      duration: "20 weeks",
      quote: "Sample testimonial — replace once approved by member.",
      before:
        "https://images.unsplash.com/photo-1568690692522-2bd9b3354c34?auto=format&fit=crop&w=900&q=80",
      after:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Member · Sample C",
      goal: "Strength",
      duration: "24 weeks",
      quote: "Sample testimonial — replace once approved by member.",
      before:
        "https://images.unsplash.com/photo-1532384661225-aa48c11061d5?auto=format&fit=crop&w=900&q=80",
      after:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80",
    },
  ],

  // ---------------------------------------------------------------------------
  // BRANCHES
  // ---------------------------------------------------------------------------
  branches: [
    {
      name: "Physc Gym Koregaon Park",
      city: "Koregaon Park",
      address: "Unit 5A, Bund Garden Road, Pune 411001",
      hours: "Mon–Fri · 5:00 AM – 11:00 PM / Sat–Sun · 6:00 AM – 10:00 PM",
      note: "Premium strength and conditioning facility with group classes and personal coaching.",
    },
    {
      name: "Physc Gym Kharadi",
      city: "Kharadi",
      address: "Shop 8, EON Free Zone, Kharadi, Pune 411014",
      hours: "Mon–Fri · 5:00 AM – 11:00 PM / Sat–Sun · 6:00 AM – 10:00 PM",
      note: "High-performance training studio with Olympic lifting platforms and recovery amenities.",
    },
    {
      name: "Physc Gym Viman Nagar",
      city: "Viman Nagar",
      address: "Ground Floor, Phoenix Marketcity, Viman Nagar, Pune 411014",
      hours: "Mon–Fri · 5:00 AM – 11:00 PM / Sat–Sun · 6:00 AM – 10:00 PM",
      note: "Convenient city branch with expert coaching, cardio, and functional training zones.",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS — clearly marked sample content
  // ---------------------------------------------------------------------------
  testimonials: [
    {
      name: "Member · Sample 1",
      duration: "Member since 2022",
      rating: 5,
      quote:
        "Sample review for concept presentation. Replace with real, approved member testimonials before launch.",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Member · Sample 2",
      duration: "Member since 2023",
      rating: 5,
      quote:
        "Sample review for concept presentation. Replace with real, approved member testimonials before launch.",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Member · Sample 3",
      duration: "Member since 2021",
      rating: 5,
      quote:
        "Sample review for concept presentation. Replace with real, approved member testimonials before launch.",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
  ],

  // ---------------------------------------------------------------------------
  // FINAL CTA
  // ---------------------------------------------------------------------------
  finalCta: {
    heading: "Your Strongest Transformation Starts Here.",
    body: "Visit the gym, meet the trainers and experience the environment before choosing your membership.",
    imageUrl:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=80",
  },
};
