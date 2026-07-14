"use client";
import React, { useRef } from "react";
import Title from "../Title";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { Highlighter } from "@/components/ui/highlighter";
import { PROCESS_CONTENT } from "@/constants/landing-page";
import { FileUp, FileText, Zap, Headset } from "lucide-react";

const ICON_MAP = {
  FileUp,
  FileText,
  Zap,
  Headset
};

export default function HowItWorks() {
  const steps = PROCESS_CONTENT;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper
      title={
        <div className="mx-auto mb-20 text-center">
          <Title
            title={
              <>
                Effortless Onboarding. <br />{" "}
                <Highlighter action="highlight" color={"#22c55e"}>
                  <span className="relative z-10 px-4 text-white">
                    Instant Setup.
                  </span>
                </Highlighter>
              </>
            }
            description="Experience a seamless transition with our 4-step premium onboarding process."
          />
        </div>
      }
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6" ref={containerRef}>
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 dark:bg-zinc-800/50 rounded-full transform md:-translate-x-1/2 overflow-hidden">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-emerald-400 via-green-500 to-emerald-600 shadow-[0_0_15px_rgba(34,197,94,0.6)]"
          />
        </div>

        <div className="flex flex-col gap-12 md:gap-24 relative z-10 pb-12">
          {steps.map((step, idx) => {
            const Icon = ICON_MAP[step.iconName];
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? "md:justify-start" : "md:justify-end"} relative`}
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-[8px] md:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-zinc-950 border-4 border-emerald-500 shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center transform -translate-x-1/2 z-20 top-0 md:top-auto"
                >
                  <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400">{step.num}</span>
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
                >
                  <div className="group relative bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-8 rounded-3xl shadow-xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] hover:border-emerald-500/30 overflow-hidden">
                    
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/5 to-transparent transition-opacity duration-500 pointer-events-none" />

                    <div className={`flex items-center gap-4 mb-4 ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-50 dark:from-emerald-900/40 dark:to-emerald-800/20 flex items-center justify-center shrink-0 border border-emerald-200/50 dark:border-emerald-700/50 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
