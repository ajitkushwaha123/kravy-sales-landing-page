"use client";

import { useEffect } from "react";

// Easily manage multiple tracking IDs here
const CONFIG = {
  googleAnalyticsIds: ["G-XVLEDXG07G"], // You can add multiple GA IDs here in the future
};

export default function ThirdPartyScripts() {
  useEffect(() => {
    let scriptsLoaded = false;

    const loadScripts = () => {
      if (scriptsLoaded) return;
      scriptsLoaded = true;

      // Remove event listeners once loaded
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, loadScripts);
      });

      // 1. Initialize Google Analytics dynamically
      if (CONFIG.googleAnalyticsIds.length > 0) {
        // Load the main gtag script using the first ID
        const gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalyticsIds[0]}`;
        document.head.appendChild(gaScript);

        // Initialize dataLayer and configure all IDs
        const gaInline = document.createElement("script");
        let configString = "";
        CONFIG.googleAnalyticsIds.forEach(id => {
          configString += `gtag('config', '${id}');\n`;
        });

        gaInline.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${configString}
        `;
        document.head.appendChild(gaInline);
      }



    const triggerEvents = ["mouseover", "keydown", "touchstart", "scroll"];

    triggerEvents.forEach((event) => {
      window.addEventListener(event, loadScripts, { passive: true });
    });

    return () => {
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, loadScripts);
      });
    };
  }, []);

  return null;
}
