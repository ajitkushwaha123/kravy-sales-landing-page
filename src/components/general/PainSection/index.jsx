"use client";
import clsx from "clsx";
import Title from "../Title";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import { GridPattern } from "@/components/ui/grid-pattern";
import { BUNDLE_INCLUDES_CONTENT } from "@/constants/landing-page";

export default function BundleIncludesSection() {
  // Extract all images from the structured data
  const allImages = BUNDLE_INCLUDES_CONTENT.flatMap(item =>
    item.images.map(img => typeof img === 'object' ? img.image : img)
  );

  // The layout will now use a natural CSS columns (Masonry) approach, 
  // so we don't need fixed heights or row spans.
  return (
    <section
      id="bundle-includes"
      className="relative overflow-hidden py-16 md:py-24 bg-zinc-50 dark:bg-[#050505]"
    >
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 h-full w-full stroke-emerald-600/30 fill-emerald-600/30 dark:stroke-emerald-400/30 dark:fill-emerald-400/30 z-0",
          "[mask-image:linear-gradient(to_bottom,white,transparent_40%)]",
        )}
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <Title
            title={
              <span className="text-4xl md:text-5xl lg:text-6xl font-black">
                Everything You Get In The <br className="hidden md:block" />
                <span className="inline-block mt-2">
                  <Highlighter action="highlight" color="#22c55e">
                    <span className="text-white relative z-10 px-4 py-2 rounded-lg">
                      Ultimate Tech Bundle
                    </span>
                  </Highlighter>
                </span>
              </span>
            }
            description="Take a visual tour of exactly what's included in your complete restaurant technology package."
          />
        </motion.div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
          {allImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
                duration: 0.45,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg break-inside-avoid"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-black z-0" />

              {/* Image - Natural height determines container height */}
              <img
                loading="lazy"
                src={src}
                alt={`Bundle Item ${index + 1}`}
                className="relative z-10 w-full h-auto object-contain p-4 transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-emerald-400/40 transition-all duration-500 z-30 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
