import Template from "@/components/global/template";
import { Headset, Rows, ShieldCheck, Trash2, Zap } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Kravy",
  description:
    "Learn how Kravy collects, uses, and protects your personal and business information when you use our POS software and services.",
  keywords: [
    "Kravy Privacy Policy",
    "POS Software",
    "Data Protection",
    "Personal Information",
    "Restaurant Data Privacy",
  ],
  openGraph: {
    title: "Privacy Policy | Kravy",
    description:
      "Learn how Kravy collects, uses, and protects your information.",
    url: "https://Kravy.in/privacy-policy",
    siteName: "Kravy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Kravy",
    description:
      "Learn how Kravy collects, uses, and protects your information.",
  },
};

const cardData = [
  {
    title: "Information We Collect",
    description:
      "We collect information required to deliver our software and hardware services.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        When you purchase the Kravy POS Bundle or use our software, we may collect 
        your name, email address, phone number, restaurant business details, menu data, 
        and payment-related information. <br /> <br />
        We may also collect website analytics, device information, and software usage 
        data to improve our platform's performance and fix bugs.
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    description:
      "Your information helps us configure your POS and provide technical support.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We use your information to create your software accounts, dispatch hardware 
        to your location, set up your menu, process billing, and assist with third-party 
        onboarding (like Swiggy/Toing). <br /> <br />
        We may also send important software updates, feature announcements, and billing 
        reminders to your registered contact methods.
      </>
    ),
  },
  {
    title: "Data Security & Protection",
    description:
      "We take reasonable measures to protect your business data.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We implement industry-standard security practices and secure cloud hosting to 
        protect your personal information and restaurant data from unauthorized access. <br /> <br />
        We do not sell your personal information or restaurant data to third parties. 
        Information is only shared with trusted service providers (like couriers or payment 
        gateways) when necessary to deliver our services.
      </>
    ),
  },
  {
    title: "Your Rights & Data Requests",
    description:
      "You may request access, correction, or deletion of your information.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You may contact us at any time to request access to your information,
        update inaccurate details, unsubscribe from marketing communications, or
        request deletion of your personal data where legally permitted (subject to 
        active subscription constraints). <br />{" "}
        <br />
        To submit a privacy-related request, email us at{" "}
        <a
          href="mailto:support@Kravy.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@Kravy.in
        </a>
        .
      </>
    ),
  },
];

const contactData = {
  title: "Questions About Your Privacy?",
  description:
    "We're committed to transparency and protecting your business data.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you have questions about this Privacy Policy, your personal data, or
        how we handle information collected through our POS software and services, 
        please contact us.{" "}
      </p>
      <p className="mb-2">
        Email:{" "}
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
      title="Privacy Policy"
      heading={
        <div>
          Your Privacy. <br className="hidden sm:block" />
          Our Commitment.{" "}
        </div>
      }
      description="Learn how Kravy collects, uses, stores, and protects your personal and business information."
      ctaDescription="We respect your privacy and are committed to protecting your restaurant's data. This policy explains what data we collect, why we collect it, and how we keep it secure."
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
