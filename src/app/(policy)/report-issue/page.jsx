import Template from "@/components/global/template";
import { Bug, Headset, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Support & Issue Reporting | Kravy",
  description:
    "Need help with your Kravy POS Bundle, hardware delivery, or software setup? Contact the Kravy support team.",
  keywords: [
    "Kravy Support",
    "Service Support",
    "POS Application Support",
    "Hardware Support",
    "Payment Issue",
    "Software Help",
  ],
  openGraph: {
    title: "Support & Issue Reporting | Kravy",
    description:
      "Need help with your Kravy POS Bundle processing, software setup, or payments? Contact our support team.",
    url: "https://Kravy.in/report-issue",
    siteName: "Kravy",
    locale: "en_IN",
    type: "website",
  },
};

const cardData = [
  {
    title: "Software & Hardware Issues",
    description: "Unable to setup your POS or hardware?",
    icon: <Bug className="w-6 h-6 text-red-500" />,
    content: (
      <>
        If you're unable to log into your Web POS, connect your Thermal Printer, 
        or check the status of your hardware delivery, our team is ready to
        help. <br /> <br />
        Please email your registered phone number, email address, and issue details to{" "}
        <a
          href="mailto:support@Kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@Kravy.in
        </a>
        .
      </>
    ),
  },
  {
    title: "Payment & Billing Support",
    description: "Facing payment confirmation or billing-related issues?",
    icon: <Mail className="w-6 h-6 text-green-500" />,
    content: (
      <>
        If your advance payment was successful but you did not receive a confirmation receipt, 
        or if you believe a billing error occurred, please contact our support team with
        your transaction details. <br /> <br />
        We will investigate and resolve legitimate billing issues as quickly as
        possible.
      </>
    ),
  },
  {
    title: "Onboarding Support",
    description: "Need assistance regarding aggregator integrations?",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <>
        For questions regarding Swiggy or Toing onboarding, menu configurations,
        or QR ordering setup queries for your food business, contact our
        expert team. <br /> <br />
        Kravy operates online and provides restaurant technology
        across India.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help? We're Here For You",
  description:
    "Whether it's software setup, payment concerns, or hardware issues, our team is ready to assist.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you're facing any issue related to our POS software, 
        hardware setup, aggregator integrations, or payments, please reach out
        with complete details so we can assist you efficiently.{" "}
      </p>
      <p>
        📧 Support Email:{" "}
        <a
          href="mailto:support@Kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@Kravy.in
        </a>
        <br />
        📍 Location: New Delhi, India
        <br />
        🛡️ Kravy – Restaurant Technology & POS Support
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Support & Issue Reporting"
      heading={
        <div>
          Need Help? <br className="hidden sm:block" />
          Contact Our Support Team{" "}
        </div>
      }
      description="Facing an issue with your POS software, hardware setup, or payments? Let us know and we'll help resolve it."
      ctaDescription="Our team is committed to providing a smooth restaurant technology experience. If you encounter any technical or billing issues, we're just an email away."
      ctaLink="/contact"
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
