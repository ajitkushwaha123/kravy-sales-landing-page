import "./globals.css";
import Providers from "@/providers";
import { Poppins } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
import AppShell from "@/components/global/AppShell";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";
import Script from "next/script";

// import { PostHogProvider } from "@/components/PostHogProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://offers.kravy.in"),

  title: {
    default: "Kravy POS Bundle | Restaurant Billing & Tech",
    template: "%s | Kravy",
  },

  description:
    "Upgrade your restaurant with the ultimate Kravy POS Bundle. Includes thermal printer, billing software, swiggy/zomato integration, and 2 years of support.",

  keywords: [
    "Restaurant POS",
    "Billing Machine",
    "Thermal Printer",
    "Cloud Kitchen Tech",
    "Swiggy Integration",
    "Zomato Integration",
    "Restaurant Billing Software",
    "Kravy POS",
  ],

  alternates: {
    canonical: "https://offers.kravy.in",
  },


  openGraph: {
    title: "Kravy POS Bundle | Restaurant Billing & Tech",
    description: "Upgrade your restaurant with the ultimate Kravy POS Bundle. Includes thermal printer, billing software, and 2 years of support.",
    url: "https://offers.kravy.in",
    siteName: "Kravy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kravy POS Bundle | Restaurant Billing & Tech",
    description: "Upgrade your restaurant with the ultimate Kravy POS Bundle.",
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kravy",
    url: "https://offers.kravy.in",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8826073117",
      contactType: "customer service",
      email: "support@Kravy.in",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kravy POS System",
    url: "https://offers.kravy.in",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WDS53PBB');`,
          }}
        />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1010234605103457');
fbq('track', 'PageView');`
          }}
        />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDS53PBB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1010234605103457&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* <PostHogProvider> */}

        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
        {/* </PostHogProvider> */}

        {/* <Analytics />
        <SpeedInsights /> */}
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
