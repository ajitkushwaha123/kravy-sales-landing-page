import Template from "@/components/global/template";
import { Headset, ShieldCheck, Trash2, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Return & Cancellation Policy | Kravy",
  description:
    "Learn about hardware return policies, replacements, and software cancellation terms for the Kravy POS Bundle.",
  keywords: [
    "Kravy",
    "Return Policy",
    "Cancellation Policy",
    "Hardware Replacement",
    "POS Bundle",
  ],
  robots: "index, follow",
};

const cardData = [
  {
    title: "Hardware Replacement (7 Days)",
    description: "Defective hardware can be replaced within 7 days of delivery.",
    icon: <RefreshCw className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kravy provides a 7-day replacement policy for physical hardware, specifically 
        the 2-inch Thermal Printer, in case of manufacturing defects or dead-on-arrival 
        (DOA) issues. <br /> <br />
        To claim a replacement, you must notify our support team within 7 days of receiving 
        the package. The item must be returned in its original packaging with all accessories. <br /> <br />
        Damage caused by misuse, physical breakage, liquid spills, or electrical surges is 
        strictly not covered under the replacement policy. Consumables like paper rolls are 
        non-returnable once opened.
      </>
    ),
  },
  {
    title: "Software Cancellation Policy",
    description: "Software setup begins immediately after prepayment.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Once your ₹500 advance payment is completed, our team immediately begins configuring 
        your Web POS and Mobile App access, as well as setting up your aggregator integrations. <br /> <br />
        Because digital setup services and software access are provisioned instantly, the 
        prepayment and software subscription components are non-cancellable once the 
        configuration process has begun.
      </>
    ),
  },
  {
    title: "Order Refusal (Cash on Delivery)",
    description: "Refusal to accept the delivery forfeits your advance payment.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        If you have selected Cash on Delivery for the remaining balance and refuse to accept 
        the parcel when the courier arrives, your order will be cancelled and returned to our 
        warehouse. <br /> <br />
        In such cases, the ₹500 advance payment is non-refundable, as it covers the costs of 
        two-way shipping, packaging, and the digital software configuration that was already 
        provided to you.
      </>
    ),
  },
];

const contactData = {
  title: "Need to Request a Replacement?",
  description:
    "Contact our team if you received defective hardware.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you received a defective printer or damaged goods, please contact our support team 
        immediately with photos or videos of the issue to initiate a replacement request.{" "}
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
      title="Return & Cancellation Policy"
      heading={
        <div>
          Return, Replacement <br className="hidden sm:block" />& Cancellation Policy{" "}
        </div>
      }
      description="Please review our policies regarding hardware replacements, order cancellations, and software access before making a purchase."
      ctaDescription="Hardware is eligible for a 7-day replacement for manufacturing defects. Software configurations begin immediately and are non-cancellable."
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
