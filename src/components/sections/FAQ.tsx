"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { content } from "@/data/content";
import { cn } from "@/lib/utils";

function FAQJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.frage,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.antwort,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function AccordionItem({
  frage,
  antwort,
  isOpen,
  onToggle,
}: {
  frage: string;
  antwort: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="border-b border-black/[0.06]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-base lg:text-lg text-charcoal pr-4 group-hover:text-secondary transition-colors">
          {frage}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted shrink-0 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { height: "auto" } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted text-base leading-relaxed">
              {antwort}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const { title, items } = content.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="faq-heading">
      <FAQJsonLd />
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="max-w-3xl mx-auto px-6 md:px-8"
      >
        <h2
          id="faq-heading"
          className="font-heading font-bold text-[1.75rem] lg:text-[3rem] text-charcoal leading-tight text-center mb-10"
        >
          {title}
        </h2>

        <div>
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              frage={item.frage}
              antwort={item.antwort}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
