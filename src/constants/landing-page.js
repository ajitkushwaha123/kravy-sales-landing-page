import { HelpCircle, Sparkles, Store, CalendarClock, IndianRupee, XCircle, CheckCircle, Smartphone, Globe, ShieldCheck } from "lucide-react";

export const HERO_CONTENT = {
  badgeText: "🔥 Limited Time Offer",
  headingMain: "The Complete Restaurant POS & Billing Bundle",
  headingHighlight: "All For Just ₹6000 / 2 Years",
  subHeading: "All-in-One POS, Mobile App & Food Aggregator Onboarding",
  description: "🔥 MEGA OFFER: Get 2 Years POS & Web Access for ₹6000. Plus, get a Free 2-inch Thermal Printer, Free Swiggy Onboarding, and Free Toing Onboarding. All included in one unbelievable package!",
  priceHighlight: "Includes Free Printer! 🖨️",
  advancePaymentAmount: "₹500",
  advancePaymentText: "Advance",
  priceSubtext: "Pay the rest (₹5500) Cash on Delivery. Printer & Onboarding are absolutely FREE!",
  features: [
    "Kravy Mobile App Access",
    "Kravy Web POS",
    "QR Code Ordering (Free)",
    "Swiggy Onboarding (Free)",
    "Toing Onboarding (Free)",
    "2-inch Thermal Printer (Free)",
    "5 Thermal Receipt Rolls (Free)"
  ],
  imageAlt: "Kravy Billing Software Dashboard",
  imageSrc: "/kravy_pos_dashboard.webp"
};

export const FAQ_CONTENT = [
  {
    icon: Store,
    question: "What is included in the ₹6000 offer?",
    answer: "You get the complete Kravy Mobile App and Web POS for 2 full years. Plus, you get a free 2-inch thermal printer and free onboarding assistance for both Swiggy and Toing platforms."
  },
  {
    icon: Smartphone,
    question: "Can I manage orders from my phone?",
    answer: "Absolutely! The Kravy Mobile App allows you to track sales, manage inventory, and process orders directly from your smartphone, anytime, anywhere."
  },
  {
    icon: Globe,
    question: "Do you help with Swiggy and Toing onboarding?",
    answer: "Yes, our team provides end-to-end assistance for free to get your restaurant listed on Swiggy and Toing, so you can start receiving online orders quickly."
  },
  {
    icon: IndianRupee,
    question: "How does the payment work?",
    answer: "You only need to pay a ₹500 pre-booking amount to get started. The remaining ₹5500 is payable as Cash on Delivery once your setup is complete."
  },
  {
    icon: IndianRupee,
    question: "Are there any hidden fees?",
    answer: "No hidden fees for this package! The ₹6000 covers 2 years of software access. Our pricing is 100% transparent."
  },
  {
    icon: CalendarClock,
    question: "How long does it take to get setup?",
    answer: "Our software setup is instant! Swiggy and Toing onboarding timelines depend on their approval process, but our team expedites it as much as possible."
  },
  {
    icon: HelpCircle,
    question: "Is this software suitable for Cloud Kitchens?",
    answer: "Yes, Kravy is perfect for Cloud Kitchens, QSRs, Dine-in Restaurants, Cafes, and Food Trucks. It's built to handle diverse F&B operations."
  },
  {
    icon: ShieldCheck,
    question: "Is my data secure?",
    answer: "100% secure. Kravy is a cloud-based platform utilizing top-tier encryption and security protocols to ensure your restaurant's data is always safe."
  }
];

export const TESTIMONIALS_CONTENT = [
  {
      name: "Rohit Sharma",
      title: "Owner, Sharma Sweets",
      quote:
          "The Kravy billing software changed how we run our shop. The POS is super fast and getting listed on Swiggy and Toing took no effort from our side!",
      img: "/assets/reviews/client_rohit.webp",
  },
  {
      name: "Anjali Mehra",
      title: "Founder, Cozy Spot Cafe",
      quote:
          "Cloud kitchen start karne ke liye Kravy ka POS and mobile app best hai. Everything is easy to track on my phone. Worth every penny of the ₹6000 package.",
      img: "/assets/reviews/client_anjali.webp",
  },
  {
      name: "Karan Desai",
      title: "Owner, Spicy Kulcha Factory",
      quote:
          "I was struggling with multiple tablets for online orders. Kravy unified my billing and got us active on Swiggy and Toing seamlessly. Exceptional service!",
      img: "/assets/reviews/client_karan.webp",
  }
];

export const PRICING_PLAN = {
  title: "Kravy Billing Software",
  description: "2-Year Subscription Access",
  price: 6000,
  advancePrice: 500,
  originalPrice: 15000,
  features: [
    "2-Year Kravy Web POS Access",
    "2-Year Mobile App Access",
    "Swiggy Onboarding Assistance (Free)",
    "Toing Onboarding Assistance (Free)",
    "2-inch Receipt Printer Included (Free)",
    "Menu Setup & Configuration",
    "Secure & Encrypted Cloud Storage",
  ]
};

export const PROCESS_CONTENT = [
  {
    num: "01",
    title: "Book with Advance",
    description: "Pay just ₹500 pre-booking amount to start.",
    iconName: "FileUp"
  },
  {
    num: "02",
    title: "Submit Documents",
    description: "Provide documents for Swiggy & Toing onboarding.",
    iconName: "FileText"
  },
  {
    num: "03",
    title: "Instant Setup",
    description: "Get instant software access. Printer delivered in 4-7 days.",
    iconName: "Zap"
  },
  {
    num: "04",
    title: "Ongoing Support",
    description: "7 Days (10 AM - 7 PM) customer support for escalations.",
    iconName: "Headset"
  }
];

export const BUNDLE_INCLUDES_CONTENT = [
  {
    title: "Kravy Mobile App",
    description: "Manage orders, track sales, and run your restaurant directly from your smartphone.",
    images: [
      {
          "title": "Print Bills in 2 Clicks",
          "description": "Generate and print professional bills instantly with just two clicks.",
          "image": "/assets/pain-points/1.webp"
      },
      {
          "title": "Floor Management",
          "description": "Manage tables, orders, and staff from a single dashboard.",
          "image": "/assets/pain-points/2.webp"
      },
      {
          "title": "WhatsApp Marketing",
          "description": "Send offers, updates, and promotions directly to customers.",
          "image": "/assets/pain-points/3.webp"
      },
      {
          "title": "QR Ordering System",
          "description": "Customers scan, browse the menu, and order instantly.",
          "image": "/assets/pain-points/7.webp"
      },
      {
          "title": "Bluetooth Connectivity",
          "description": "Connect seamlessly with Bluetooth thermal printers.",
          "image": "/assets/pain-points/5.webp"
      },
      {
          "title": "Detailed Analytics",
          "description": "Track sales, orders, and business performance in real time.",
          "image": "/assets/pain-points/6.webp"
      }
    ],
    actualPrice: 4000,
    offerPrice: "INCLUDED (2 YRS)",
    features: [
      "Live order tracking & notifications",
      "Real-time sales & inventory reports",
      "Staff management & access controls",
      "Available on iOS & Android",
      "Seamless sync with Web POS"
    ],
    badgeText: "Mobile Power",
    badgeType: "included"
  },
  {
    title: "Kravy Web POS",
    description: "Unlimited access to our lightning-fast cloud-based Restaurant POS system.",
    images: ["/assets/offers/kravy-web.webp"],
    actualPrice: 12000,
    offerPrice: "INCLUDED (2 YRS)",
    features: [
      "Lightning-fast billing & order management",
      "Comprehensive inventory & recipe tracking",
      "Real-time analytics & sales reports",
      "Multi-outlet management ready",
      "Secure cloud data backup"
    ],
    badgeText: "Core Software",
    badgeType: "included"
  },
  {
    title: "2-inch Thermal Printer",
    description: "High-speed 2-inch Bluetooth/USB thermal receipt printer for instant bill generation.",
    images: ["/assets/offers/printer.webp"],
    actualPrice: 2000,
    offerPrice: "FREE",
    features: [
      "Print Speed: 90mm/sec",
      "No ink required (Direct Thermal)",
      "Bluetooth & USB connectivity",
      "Compact, durable & portable design",
      "1-Year replacement warranty"
    ],
    badgeText: "Hardware Included",
    badgeType: "free"
  },
  {
    title: "5 Thermal Receipt Rolls",
    description: "Get started instantly with 5 free rolls of premium thermal paper.",
    images: ["/assets/offers/rolls.webp"],
    actualPrice: 250,
    offerPrice: "FREE",
    features: [
      "High-quality BPA-free paper",
      "Smudge-proof crisp printing",
      "Standard 2-inch width",
      "Long-lasting print life"
    ],
    badgeText: "Supplies Included",
    badgeType: "free"
  },
  {
    title: "QR Code Ordering",
    description: "Allow dine-in customers to scan and order seamlessly from their phones.",
    images: ["/assets/offers/qr-code-ordering.webp"],
    actualPrice: 3000,
    offerPrice: "FREE SETUP",
    features: [
      "Zero-contact digital menu",
      "Direct table-to-kitchen ordering",
      "Integrated digital payments",
      "Custom branded QR standees support",
      "Faster table turnarounds"
    ],
    badgeText: "Dine-in Tech",
    badgeType: "free"
  },
  {
    title: "Swiggy & Toing Onboarding",
    description: "Complete end-to-end setup and onboarding for top food aggregator platforms.",
    images: ["/assets/offers/swiggy.webp", "/assets/offers/toing.webp"],
    actualPrice: 3000,
    offerPrice: "FREE",
    features: [
      "Dedicated account manager",
      "Menu creation & pricing strategy",
      "Document verification support",
      "Profile optimization for better ranking",
      "Go-live assistance within 7 days"
    ],
    badgeText: "Growth Included",
    badgeType: "free"
  }
];
