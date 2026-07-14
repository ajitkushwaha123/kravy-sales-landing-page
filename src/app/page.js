import React from "react";
import Home from "@/components/global/Home";

export const metadata = {
  title: {
    absolute: "Kravy POS Bundle - Restaurant Billing & Tech",
  },
  description: "Get your complete Restaurant POS System bundle including hardware and software starting at ₹4000/year. Expert support, hassle-free processing.",
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kravy POS Bundle",
    url: "https://offers.kravy.in",
    description: "Get the complete Restaurant POS System bundle.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kravy POS Bundle Registration",
    provider: {
      "@type": "Organization",
      name: "Kravy",
    },
    areaServed: "India",
    serviceType: "POS Software and Hardware",
    offers: {
      "@type": "Offer",
      price: "4000",
      priceCurrency: "INR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Kravy POS Bundle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Kravy POS Bundle is a complete restaurant technology package including billing software, thermal printer, and aggregator integrations.",
        },
      },
      {
        "@type": "Question",
        name: "Who needs this POS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you run any food-related business, you need an efficient POS, including: Restaurants, Cloud Kitchens, Cafés, Bakeries, and Sweet Shops.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to setup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We process and ship the hardware within 48 hours, and software setup is instant.",
        },
      },
      {
        "@type": "Question",
        name: "What hardware is included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You will receive a high-speed thermal receipt printer along with 2 free paper rolls.",
        },
      },
      {
        "@type": "Question",
        name: "What are your charges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our pricing is transparent: ₹4,000 for a 2-Year complete bundle access.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://offers.kravy.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kravy POS Bundle",
        item: "https://offers.kravy.in/#pricing",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Kravy POS System",
    "@id": "https://offers.kravy.in",
    url: "https://offers.kravy.in",
    telephone: "+918826073117",
    priceRange: "₹4000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "New Delhi",
      addressLocality: "New Delhi",
      addressRegion: "DL",
      postalCode: "110001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6139,
      longitude: 77.2090,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="relative bg-white dark:bg-[#0a0a1a] flex flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl w-full mx-auto px-2 md:px-4">
          <Home />
        </div>
      </div>
    </>
  );
}
