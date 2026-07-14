import Template from "@/components/global/template";
import { Truck, ShieldCheck, Clock, Headset } from "lucide-react";

export const metadata = {
  title: "Shipping & Delivery Policy | Kravy",
  description:
    "Learn how Kravy delivers your POS hardware, software access, and onboarding services.",
  keywords: [
    "Kravy",
    "Hardware Shipping",
    "POS Delivery",
    "Software Access",
    "Onboarding",
  ],
  robots: "index, follow",
};

const cardData = [
  {
    title: "Hardware Dispatch & Delivery",
    description:
      "Physical items like printers and paper rolls are shipped via reliable courier partners.",
    icon: <Truck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kravy dispatches physical hardware (such as the 2-inch Thermal Printer and receipt rolls) 
        within 24-48 hours of order confirmation. <br /> <br />
        Standard delivery times are generally 4 to 7 working days depending on your location 
        within India. You will receive a tracking link via WhatsApp/Email as soon as your 
        package is dispatched.
      </>
    ),
  },
  {
    title: "Instant Software Access",
    description: "Web POS and Mobile App access is provided digitally.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Your Kravy Web POS and Mobile App credentials will be set up and delivered 
        digitally. <br /> <br />
        Within 24 hours of your prepayment, our team will configure your account and 
        share the login credentials and download links directly to your registered 
        email address and WhatsApp number.
      </>
    ),
  },
  {
    title: "Onboarding & Setup Services",
    description:
      "Swiggy, Toing, and QR code setups are managed remotely.",
    icon: <Clock className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Services like Swiggy & Toing onboarding, as well as digital QR Code ordering setup, 
        are handled remotely by our onboarding experts. <br /> <br />
        Our team will schedule a call with you to collect the necessary menu details and 
        restaurant information to complete the integrations. Timelines for aggregator approvals 
        depend on the respective platforms.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help With Your Order?",
  description:
    "Our support team is available to assist with shipping and setup questions.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If your hardware delivery is delayed, or if you haven't received your software 
        credentials within 24 hours, please contact our support team immediately.{" "}
      </p>
      <p>
        Support Email:{" "}
        <a
          href="mailto:support@Kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@Kravy.in
        </a>
      </p>
      <p className="mt-3">
        Kravy
        <br />
        New Delhi, India
        <br />
        Restaurant Technology Solutions
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Shipping & Delivery Policy"
      heading={
        <div>
          Shipping & Delivery <br className="hidden sm:block" />
          Policy{" "}
        </div>
      }
      description="Learn how your Kravy POS Bundle hardware is shipped and how your software accounts are delivered."
      ctaDescription="Hardware is shipped across India within 4-7 days, while software credentials and onboarding support are delivered digitally within 24 hours."
      ctaLink="mailto:support@Kravy.in"
      ctaButton={
        <span className="flex items-center gap-2">
          {" "}
          <Headset className="w-4 h-4" />
          Contact Support{" "}
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
