/*
 * CLIENT CONFIGURATION
 * Update this file for each client. The website and admin page read from this
 * object, so no HTML content changes are needed for a standard handover.
 */
window.BUSINESS_CONFIG = {
  business: {
    name: "Aster Clinic",
    type: "Aesthetic & Skin Clinic",
    tagline: "Feel like yourself, only more confident.",
    description: "Doctor-led skin and aesthetic care designed around your goals, your schedule, and your comfort.",
    address: "MM Alam Road, Gulberg III, Lahore, Pakistan",
    city: "Lahore",
    country: "Pakistan",
    phone: "+923001234567",
    displayPhone: "+92 300 1234567",
    whatsappNumber: "923001234567",
    whatsappMessage: "Assalam-o-alaikum, I would like to book a consultation at Aster Clinic.",
    email: "hello@asterclinic.pk",
    hours: "Mon-Sat, 10:00 AM-8:00 PM"
  },

  theme: {
    accent: "#e9a96c",
    accentRgb: "233, 169, 108",
    accentDark: "#c7844c"
  },

  seo: {
    title: "Aster Clinic | Aesthetic & Skin Care in Lahore",
    description: "Personalised aesthetic and skin care in Lahore. Book your consultation at Aster Clinic today.",
    canonicalUrl: "https://your-github-username.github.io/your-repository/",
    ogImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=85",
    schemaType: "MedicalClinic",
    schemaOpeningHours: "Mo-Sa 10:00-20:00"
  },

  supabase: {
    url: "https://YOUR_PROJECT_REF.supabase.co",
    anonKey: "YOUR_SUPABASE_ANON_KEY"
  },

  hero: {
    eyebrow: "Personalised care in Lahore",
    headline: "A clearer path to skin you feel good in.",
    supportingText: "Thoughtful consultations, evidence-led treatments, and a result that still looks like you.",
    primaryCta: "Book a consultation",
    secondaryCta: "Call the clinic",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=2200&q=90",
    imageAlt: "A calm, modern treatment room at Aster Clinic"
  },

  sections: {
    intro: "is a calm, private space for considered skin and aesthetic care.",
    services: {
      eyebrow: "What we do",
      headline: "Care that begins with listening.",
      supportingText: "Every recommendation starts with a real conversation about what you want to change, and what you want to keep.",
      cta: "Explore your options"
    },
    gallery: {
      eyebrow: "The experience",
      headline: "A pause from the pace outside.",
      supportingText: "Private appointments, unhurried care, and a space designed to put you at ease.",
      cta: "Visit the clinic"
    },
    pricing: {
      eyebrow: "Simple starting points",
      headline: "Clear pricing. No pressure.",
      supportingText: "Start with the service that suits your goals. We will explain every recommendation before you decide.",
      cta: "Choose your appointment"
    },
    testimonials: {
      eyebrow: "Kind words",
      headline: "The confidence to come back.",
      cta: "Book your consultation"
    },
    faq: {
      eyebrow: "Questions, answered",
      headline: "Know what to expect.",
      supportingText: "If you would rather talk it through, our team is only a call or WhatsApp message away.",
      cta: "Book with confidence"
    },
    booking: {
      eyebrow: "Make time for you",
      headline: "Your consultation starts here.",
      supportingText: "Send us a few details and our team will confirm the best available appointment time. Prefer a quick chat? Call or message us instead."
    }
  },

  services: [
    {
      name: "Skin consultations",
      description: "A doctor-led plan for concerns such as acne, pigmentation, texture, and sensitivity.",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=80",
      alt: "Skin consultation in a bright clinic"
    },
    {
      name: "Hydrafacial treatments",
      description: "A deep-cleaning, hydrating facial tailored to leave skin looking rested and fresh.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
      alt: "Relaxing facial treatment at a skincare clinic"
    },
    {
      name: "Laser hair reduction",
      description: "Comfort-conscious sessions using proven technology and a plan made for your skin tone.",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
      alt: "Client receiving a professional beauty treatment"
    }
  ],

  gallery: [
    {
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
      alt: "Facial treatment with a professional skincare device"
    },
    {
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=85",
      alt: "Minimal calming aesthetic treatment room"
    },
    {
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85",
      alt: "Careful skincare treatment at a clinic"
    }
  ],

  pricing: [
    {
      name: "First visit",
      price: "PKR 2,500",
      detail: "A focused consultation with a personalised next-step plan.",
      featured: false
    },
    {
      name: "Signature glow",
      price: "PKR 8,500",
      detail: "A tailored Hydrafacial treatment for a fresh, hydrated finish.",
      featured: true
    },
    {
      name: "Laser package",
      price: "From PKR 15,000",
      detail: "A course of treatment planned around your area and hair type.",
      featured: false
    }
  ],

  testimonials: [
    {
      quote: "I was nervous about starting treatment, but the consultation was clear and never pushy. My skin looks calmer than it has in years.",
      name: "Maha R.",
      service: "Skin consultation"
    },
    {
      quote: "The clinic is immaculate and every step was explained properly. I left feeling looked after, not rushed.",
      name: "Areeba K.",
      service: "Hydrafacial client"
    },
    {
      quote: "The team understood my concerns and made a realistic plan. The results have been gradual and very natural.",
      name: "Hira S.",
      service: "Laser client"
    }
  ],

  faqs: [
    {
      question: "How do I know which treatment is right for me?",
      answer: "Start with a consultation. We assess your goals and skin before recommending any treatment, so you only proceed when the plan feels right."
    },
    {
      question: "Is there downtime after treatment?",
      answer: "It depends on your treatment. We will clearly explain any expected redness, aftercare, and the best time to schedule before you book."
    },
    {
      question: "Do you treat sensitive or acne-prone skin?",
      answer: "Yes. Your practitioner will consider your skin history, current routine, and sensitivities when building your plan."
    },
    {
      question: "Can I book by WhatsApp?",
      answer: "Yes. Tap the WhatsApp button and our team will help you choose a convenient appointment time."
    }
  ],

  socials: {
    instagram: "https://instagram.com/yourclinic",
    facebook: "https://facebook.com/yourclinic",
    tiktok: "https://tiktok.com/@yourclinic"
  },

  mapEmbedUrl: "https://www.google.com/maps?q=MM%20Alam%20Road%2C%20Gulberg%20III%2C%20Lahore&z=15&output=embed"
};