import Template from "@/components/global/template";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Refund Policy | Kravy",
  description:
    "Read the refund policy for Kravy POS Bundle, software services, and hardware purchases.",
  keywords: [
    "Kravy Refund Policy",
    "No Refund Policy",
    "POS Refund Policy",
    "Hardware Refund",
  ],
  openGraph: {
    title: "Refund Policy | Kravy",
    description:
      "Kravy follows a strict no-refund policy for software subscriptions and advance payments once processing has begun.",
    url: "https://Kravy.in/refund-policy",
    siteName: "Kravy",
    type: "website",
  },
};

const cardData = [
  {
    title: "Advance Payment is Non-Refundable",
    description: "The ₹500 advance covers initial setup and logistics costs.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Kravy provides immediate digital configuration of your Web POS and Mobile App 
        upon receiving your advance payment. We also dispatch the physical hardware 
        shortly after. <br /> <br />
        Because professional time, software provisioning, and logistics costs are deployed 
        immediately, the ₹500 advance payment is strictly non-refundable once paid. <br /> <br />
        By completing your purchase, you acknowledge and agree to this no-refund policy 
        for the advance payment.
      </>
    ),
  },
  {
    title: "Non-Refundable Scenarios",
    description:
      "Refunds are not issued for change of mind or business closure.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Refunds will not be provided under any of the following circumstances:{" "}
        <ul className="list-disc ml-5 mt-2">
          {" "}
          <li>You changed your mind after making the payment.</li>{" "}
          <li>You refuse to accept the Cash on Delivery (COD) parcel.</li>{" "}
          <li>Your restaurant business plans are delayed or cancelled.</li>{" "}
          <li>You fail to provide the required menu details for onboarding.</li>{" "}
          <li>Third-party aggregators (Swiggy/Toing) reject your onboarding application.</li>{" "}
        </ul>{" "}
        <br />
        Third-party aggregator decisions are entirely outside our control, and rejection 
        by them does not qualify you for a refund of the Kravy POS Bundle.
      </>
    ),
  },
  {
    title: "Refunds Only for Our Errors",
    description: "Exceptions apply only when a billing issue is caused by us.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Refund requests may only be considered if:{" "}
        <ul className="list-disc ml-5 mt-2">
          {" "}
          <li>You were charged multiple times for the same purchase.</li>{" "}
          <li>A verified technical or payment processing error occurred on our end.</li>{" "}
        </ul>{" "}
        <br />
        Any approved refund remains solely at the discretion of Kravy 
        after reviewing the circumstances. If approved, the refund will be processed 
        back to the original payment method within 5-7 business days.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About Billing?",
  description:
    "Contact us if you believe a payment issue occurred due to our mistake.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you believe you were charged incorrectly or experienced a billing
        issue caused by our systems, please contact us with your payment details
        and transaction reference.{" "}
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
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Refund Policy"
      heading={
        <div>
          Refund Policy <br className="hidden sm:block" />& Payment Terms{" "}
        </div>
      }
      description="Please review our refund policy before purchasing the Kravy POS Bundle."
      ctaDescription="The ₹500 advance payment and software subscription costs are non-refundable once processing begins. Hardware is covered by a replacement policy rather than a refund."
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
