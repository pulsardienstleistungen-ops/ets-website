"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";

export function TrustBar() {
  const items = content.trustBar;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-snow border-y border-black/5" aria-label="Zertifizierungen und Fakten">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12 py-4"
      >
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:gap-x-10">
          {items.map((item, i) => (
            <li
              key={i}
              className="text-muted text-[13px] sm:text-sm font-medium whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
