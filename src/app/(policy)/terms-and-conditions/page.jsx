import Template from "@/components/global/template";
import { Headset, Rows, ShieldCheck, Trash2, Zap } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Kravy",
  description:
    "Review the Terms & Conditions governing your use of Kravy's POS Bundle and related software services.",
  keywords: [
    "Kravy",
    "Terms and Conditions",
    "POS Licensing Service",
    "Service Terms",
    "Hardware Terms",
    "Food Business Compliance",
  ],
  authors: [
    { name: "Kravy", url: "https://Kravy.in" },
  ],
  openGraph: {
    title: "Terms & Conditions | Kravy",
    description:
      "Review the Terms & Conditions governing your use of Kravy's POS Bundle and related software services.",
    url: "https://Kravy.in/terms-and-conditions",
    siteName: "Kravy",
    type: "website",
  },
};

const cardData = [
  {
    title: "Client Responsibilities & Data Accuracy",
    description: "Clients must provide accurate business details for onboarding.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        By engaging Kravy for POS and billing services, 
        you agree that all menu data, GST details, and business proofs 
        provided by you for onboarding are 100% authentic and legally valid. <br /> <br />
        You are solely responsible for any legal repercussions, tax penalties, or 
        aggregator rejections that arise from submitting incorrect or falsified 
        information through our platform.
      </>
    ),
  },
  {
    title: "Technology Service Provider",
    description:
      "We provide software tools, not business operations management.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kravy operates as a restaurant technology provider. 
        We are not responsible for your daily operations, compliance with food safety 
        laws, or customer dispute resolution. <br /> <br />
        Our professional fees cover the cost of the POS software subscription, 
        hardware provision, and technical setup services.
      </>
    ),
  },
  {
    title: "Third-Party Aggregator Integrations",
    description: "Final listing decisions rest with Swiggy/Zomato.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        While our experts assist with Swiggy and Toing onboarding, 
        we do not and cannot guarantee the final approval, listing, or processing 
        timeline of your restaurant on these third-party platforms. <br /> <br />
        These platforms may request additional documents or reject applications based on 
        their own criteria. Kravy holds no liability for aggregator rejections or 
        commission changes.
      </>
    ),
  },
  {
    title: "Termination & Fraud Policy",
    description: "Services may be revoked for fraudulent activities.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We reserve the right to immediately suspend or terminate our software 
        services without refund if a client:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>Engages in fraudulent billing or tax evasion using our POS.</li>{" "}
          <li>Engages in abusive or threatening behavior toward our staff.</li>{" "}
          <li>Attempts to reverse-engineer or pirate our software.</li>{" "}
          <li>Violates these Terms & Conditions.</li>{" "}
        </ul>{" "}
        <br />
        Service termination does not create eligibility for a refund.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About These Terms?",
  description: "We're happy to clarify any aspect of our Terms & Conditions.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        By purchasing the Kravy POS Bundle or using our software, 
        you legally agree to these Terms & Conditions.{" "}
      </p>
      <p className="mb-2">
        Support & Legal Inquiries:{" "}
        <a
          href="mailto:support@Kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@Kravy.in
        </a>
      </p>
      <p>
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
      title="Terms & Conditions"
      heading={
        <div>
          Terms & Conditions <br className="hidden sm:block" />
          For Clients{" "}
        </div>
      }
      description="Please review the terms governing your use of Kravy's POS software, hardware bundle, and technical services."
      ctaDescription="By engaging our services, you agree to these Terms & Conditions, ensuring a transparent and legally compliant service experience."
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
