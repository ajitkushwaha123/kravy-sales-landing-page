"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function AccordionItem({
  title,
  isOpen,
  onToggle,
  children,
}) {
  return (
    <div className="px-5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 text-sm font-semibold text-zinc-900 transition-colors hover:text-primary"
      >
        <span>{title}</span>

        <ChevronDown
          size={16}
          className={cn(
            "text-zinc-400 transition-all duration-300",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export function ProductAccordion({
  details = [],
  shipping = [],
}) {
  const [open, setOpen] = useState("details");

  const sections = [
    {
      key: "details",
      title: "Product Details",
      content: (
        <ul className="space-y-2 pl-5 text-sm text-zinc-600 list-disc">
          {details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      key: "shipping",
      title: "Return & Shipping Info",
      content: (
        <ul className="space-y-2 pl-5 text-sm text-zinc-600 list-disc">
          {shipping.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white divide-y divide-zinc-100">
      {sections.map((section) => (
        <AccordionItem
          key={section.key}
          title={section.title}
          isOpen={open === section.key}
          onToggle={() =>
            setOpen((prev) =>
              prev === section.key ? null : section.key
            )
          }
        >
          {section.content}
        </AccordionItem>
      ))}
    </div>
  );
}