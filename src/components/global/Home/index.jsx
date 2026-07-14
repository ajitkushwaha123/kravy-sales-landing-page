import React from "react";
import ProductDetails from "@/components/product-detail";
import StickyMobileCTA from "@/components/general/StickyMobileCTA";
import BundleIncludesSection from "@/components/general/PainSection";
import Pricing from "@/components/general/Pricing";
import MasonryGallery from "@/components/general/galllery";
import Testimonials from "@/components/general/Reviews";
import Faqs from "@/components/general/Faqs";

const kravyProduct = {
  _id: "kravy-pos-bundle",
  slug: "kravy-pos-bundle",
  name: "Kravy Billing Bundle - [2 Years]",
  images: [
    { 
      id: 1, 
      src: "/assets/offers/kravy-web.webp", 
      thumb: "/assets/offers/kravy-web.webp", 
      alt: "Kravy Web POS",
      badge: "2 YEARS ACCESS",
      badgeColor: "bg-blue-600 hover:bg-blue-600"
    },
    { 
      id: 2, 
      src: "/assets/offers/kravy-app.webp", 
      thumb: "/assets/offers/kravy-app.webp", 
      alt: "Kravy Mobile App",
      badge: "2 YEARS ACCESS",
      badgeColor: "bg-blue-600 hover:bg-blue-600"
    },
    { 
      id: 3, 
      src: "/assets/offers/qr-code-ordering.webp", 
      thumb: "/assets/offers/qr-code-ordering.webp", 
      alt: "QR Code Ordering",
      badge: "FREE QR ORDERING",
      badgeColor: "bg-fuchsia-500 hover:bg-fuchsia-600"
    },
    { 
      id: 4, 
      src: "/assets/offers/printer.webp", 
      thumb: "/assets/offers/printer.webp", 
      alt: "2-Inch Thermal Printer",
      badge: "FREE PRINTER",
      badgeColor: "bg-emerald-500 hover:bg-emerald-500"
    },
    { 
      id: 5, 
      src: "/assets/offers/rolls.webp", 
      thumb: "/assets/offers/rolls.webp", 
      alt: "5 Thermal Paper Rolls",
      badge: "FREE 5 ROLLS",
      badgeColor: "bg-teal-500 hover:bg-teal-600"
    },
    { 
      id: 6, 
      src: "/assets/offers/swiggy.webp", 
      thumb: "/assets/offers/swiggy.webp", 
      alt: "Free Swiggy Onboarding",
      badge: "FREE ONBOARDING",
      badgeColor: "bg-orange-500 hover:bg-orange-500"
    },
    { 
      id: 5, 
      src: "/assets/offers/toing.webp", 
      thumb: "/assets/offers/toing.webp", 
      alt: "Free Toing Onboarding",
      badge: "FREE ONBOARDING",
      badgeColor: "bg-indigo-500 hover:bg-indigo-500"
    }
  ],
  price: 6000,
  originalPrice: 15000,
  discount: 60,
  rating: 4.9,
  reviewCount: 524,
  description: "The ultimate Kravy Billing Bundle - [2 Years]: Everything you need to manage orders, billing, and online delivery. Includes 2 Years POS & Web Access, Free 2-inch Thermal Printer, and Free Swiggy & Toing Setup.",
  features: [
    "Web POS Included - Access the powerful Kravy Point of Sale from any web browser.",
    "Mobile App Access - Manage your restaurant on the go.",
    "Free QR Code Ordering - Allow dine-in customers to order seamlessly from their phones.",
    "Free Hardware - Get a free 2-inch thermal printer.",
    "Free Paper Rolls - 5 thermal receipt rolls included.",
    "Free Setup - Zero-cost onboarding for Swiggy & Toing."
  ],
  badges: [
    { icon: "Award", label: "Best Seller" },
    { icon: "Truck", label: "Free Shipping" }
  ],
  shipping: [
    "Free shipping across India.",
    "Printer is dispatched within 24-48 hours.",
    "Delivery usually takes 4-7 working days.",
    "7-day replacement policy for hardware defects."
  ],
  stock: 100,
  maxQty: 5
};

export default function Home() {
  return (
    <div className="w-full text-neutral-900 transition-colors duration-300 dark:text-white">
      <ProductDetails product={kravyProduct} />
      <BundleIncludesSection />
      <StickyMobileCTA />
      <Pricing />
      <MasonryGallery />
      <Testimonials />
      <Faqs />
    </div>
  );
}
