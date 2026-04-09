"use client";

import { motion, useReducedMotion } from "framer-motion";
import { X, Check } from "lucide-react";
import { content } from "@/data/content";
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight } from "@/lib/animations";

export function PainSolution() {
  const { painTitle, pains, solutionTitle, solutions } = content.painSolution;
  const shouldReduceMotion = useReducedMotion();

  const containerProps = shouldReduceMotion
    ? {}
    : { variants: staggerContainer, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-60px" } };

  const leftProps = shouldReduceMotion
    ? {}
    : { variants: fadeInLeft, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-60px" } };

  const rightProps = shouldReduceMotion
    ? {}
    : { variants: fadeInRight, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-60px" } };

  return (
    <section className="bg-snow py-16 lg:py-24" aria-labelledby="pain-solution-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Pain column */}
          <motion.div {...leftProps}>
            <h2
              id="pain-solution-heading"
              className="font-heading font-bold text-[1.75rem] lg:text-[3rem] text-charcoal leading-tight"
            >
              {painTitle}
            </h2>
            <motion.ul {...containerProps} className="mt-8 space-y-4">
              {pains.map((pain, i) => (
                <motion.li
                  key={i}
                  variants={shouldReduceMotion ? undefined : staggerItem}
                  className="flex gap-3 items-start"
                >
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-content leading-relaxed">{pain}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Solution column */}
          <motion.div {...rightProps}>
            <h2 className="font-heading font-bold text-[1.75rem] lg:text-[3rem] text-charcoal leading-tight">
              {solutionTitle}
            </h2>
            <motion.ul {...containerProps} className="mt-8 space-y-4">
              {solutions.map((solution, i) => (
                <motion.li
                  key={i}
                  variants={shouldReduceMotion ? undefined : staggerItem}
                  className="flex gap-3 items-start"
                >
                  <span className="mt-1 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-success" aria-hidden="true" />
                  </span>
                  <span className="text-content leading-relaxed">{solution}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
