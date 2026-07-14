import React from "react";
import Template from "@/components/global/template";
import { Headset, ShieldCheck, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Disclaimer | Kravy",
  description:
    "Understand the scope, limitations, and responsibilities associated with the Kravy POS Bundle and software services.",
  keywords: [
    "Kravy Disclaimer",
    "POS Service",
    "Restaurant Technology",
    "Hardware Terms",
    "Software Disclaimer",
  ],
  authors: [{ name: "Kravy", url: "https://Kravy.in" }],
  openGraph: {
    title: "Disclaimer | Kravy",
    description:
      "Important information regarding the hardware and software services provided by Kravy.",
    url: "https://Kravy.in/disclaimer",
    siteName: "Kravy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Kravy",
    description:
      "Important information regarding the hardware and software services provided by Kravy.",
  },
};

const cardData = [
  {
    title: "Technology Provider",
    description:
      "We are a software and hardware technology provider.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kravy operates as an independent restaurant technology company. We provide 
        point-of-sale software, mobile applications, and hardware like thermal printers 
        to help businesses manage their operations. <br /> <br />
        We are responsible for the functionality of our software and the quality of our 
        supplied hardware, but the ultimate success, compliance, and operations of the 
        restaurant remain the sole responsibility of the business owner.
      </>
    ),
  },
  {
    title: "Third-Party Aggregators",
    description:
      "Swiggy and Toing approvals depend on the platform, not us.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        As part of our bundle, we offer complimentary onboarding assistance for platforms 
        like Swiggy and Toing. However, Kravy does not guarantee approval or the timeline 
        for getting listed on these third-party platforms. <br /> <br />
        Final approval, commission rates, and operational policies are determined strictly 
        by the respective food aggregators. We only assist in the technical setup and 
        application process.
      </>
    ),
  },
  {
    title: "Hardware Warranty & Support",
    description:
      "Specific terms apply to the physical items provided in the bundle.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        The 2-inch Thermal Printer provided in the bundle is covered against manufacturing 
        defects for a standard replacement period of 7 days from the date of delivery. <br /> <br />
        Damage caused by misuse, physical breakage, liquid spills, or electrical surges is 
        not covered. Support for hardware setup is provided digitally via our customer support channels.
      </>
    ),
  },
  {
    title: "Data & Business Responsibility",
    description:
      "You remain fully responsible for your menu data, pricing, and operations.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        While Kravy provides the tools to manage your billing and online ordering, you are 
        solely responsible for ensuring that all menu details, tax settings (GST), and pricing 
        entered into the system are legally compliant and accurate. <br /> <br />
        Kravy shall not be liable for any legal actions, customer disputes, or financial losses 
        resulting from misconfigured tax rates or incorrect pricing managed by your staff.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About This Disclaimer?",
  description:
    "We're happy to clarify any concerns regarding our POS services.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you have questions regarding this disclaimer or the scope of 
        services provided by Kravy, please contact us at{" "}
        <a
          href="mailto:support@Kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@Kravy.in
        </a>
        .{" "}
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
      title="Disclaimer"
      heading={
        <div>
          Disclaimer <br className="hidden sm:block" />& Important Information{" "}
        </div>
      }
      description="Please review the limitations, responsibilities, and terms associated with using Kravy's POS software and hardware bundle."
      ctaDescription="Our mission is to help food entrepreneurs streamline their billing and operations. Please note that we provide the technology, but business operations remain your responsibility."
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
