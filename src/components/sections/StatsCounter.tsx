"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { content } from "@/data/content";
import { useCountUp } from "@/hooks/useCountUp";
import { staggerContainer, staggerItem } from "@/lib/animations";

function StatItem({
  value,
  label,
  inView,
}: {
  value: string;
  label: string;
  inView: boolean;
}) {
  const isStatic = value.includes("/");
  const hasSuffix = value.endsWith("+");
  const hasSeparator = value.includes(".");

  const numericPart = value.replace(/[+]/g, "").replace(/\./g, "");
  const numericValue = parseInt(numericPart, 10);
  const suffix = hasSuffix ? "+" : "";
  const separator = hasSeparator ? "." : "";

  const display = useCountUp({
    end: isStatic ? 0 : numericValue,
    suffix,
    separator,
    duration: 2000,
    start: inView,
  });

  return (
    <div className="text-center">
      <span className="block font-heading font-extrabold text-5xl sm:text-6xl lg:text-[5rem] text-primary leading-none tabular-nums">
        {isStatic ? value : display}
      </span>
      <span className="block mt-3 text-sm sm:text-base text-white/70 font-medium">
        {label}
      </span>
    </div>
  );
}

export function StatsCounter() {
  const items = content.stats;
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-navy py-16 lg:py-24"
      aria-label="Unternehmenszahlen"
    >
      <motion.div
        {...(shouldReduceMotion
          ? {}
          : {
              variants: staggerContainer,
              initial: "hidden" as const,
              whileInView: "visible" as const,
              viewport: { once: true, margin: "-60px" },
            })}
        className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
      >
        {items.map((item) => (
          <motion.div
            key={item.value}
            variants={shouldReduceMotion ? undefined : staggerItem}
          >
            <StatItem value={item.value} label={item.label} inView={inView} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
