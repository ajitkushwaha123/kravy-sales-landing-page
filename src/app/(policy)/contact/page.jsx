import Template from "@/components/global/template";
import { Headset, Mail, MapPin, ShieldCheck, FileCheck } from "lucide-react";

export const metadata = {
  title: "Contact Us | Kravy",
  description:
    "Get in touch with Kravy. We provide fast, secure, and hassle-free POS Software and Hardware solutions for restaurants across India.",
  keywords: [
    "Kravy",
    "POS Support",
    "Restaurant Tech Support",
    "Billing Software Help",
    "Cloud Kitchen Tech",
  ],
  openGraph: {
    title: "Contact Us | Kravy",
    description:
      "Get in touch with Kravy. We help you secure your restaurant billing easily.",
    url: "https://Kravy.in/contact",
    siteName: "Kravy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Kravy",
    description:
      "Need help with your Kravy POS Bundle? Contact Kravy today.",
  },
};

const cardData = [
  {
    title: "Technical Support",
    description:
      "Need help with POS installation, hardware setup, or software features?",
    icon: <Headset className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Whether you are starting your first shift, need help setting up your printer, 
        or have questions about aggregator integration, our team is here to help. <br /> <br />
        Reach us at{" "}
        <a
          href="mailto:support@Kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@Kravy.in
        </a>{" "}
        and we'll get back to you as soon as possible.
      </>
    ),
  },
  {
    title: "Expert Guidance",
    description: "Questions about scaling your restaurant technology?",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Get guidance on using advanced features of the Kravy POS. We help restaurants, 
        cloud kitchens, and QSRs streamline their billing, inventory, and online orders.
      </>
    ),
  },
  {
    title: "Location",
    description: "Serving food businesses everywhere in India.",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <>
        {" "}
        <strong>Kravy</strong> <br />
        New Delhi, India <br /> <br />
        We proudly provide restaurant technology and POS bundles nationwide.
      </>
    ),
  },
];

const contactData = {
  title: "Let's Scale Your Business",
  description:
    "Questions about our POS software or hardware?",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        Whether you're planning to launch your first food brand, start a cloud
        kitchen, or upgrade your existing restaurant tech, we're
        here to help you streamline operations quickly and affordably.{" "}
      </p>
      <p>
        Primary Support:{" "}
        <a
          href="mailto:support@Kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@Kravy.in
        </a>
        <br />
        Location: New Delhi, India
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Contact Us"
      heading={
        <div>
          Get Expert Help With Your <br className="hidden sm:block" />
          Kravy POS System{" "}
        </div>
      }
      description="Questions about setting up your restaurant billing? We're here to help."
      ctaDescription="Reach out to our team for support, guidance, and answers to your software questions. Whether you're just starting or expanding, we're happy to assist."
      ctaLink="mailto:support@Kravy.in"
      ctaButton={
        <span className="flex items-center gap-2">
          {" "}
          <Mail className="w-4 h-4" />
          Contact Support{" "}
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
