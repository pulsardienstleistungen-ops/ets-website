"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";
import { buttonVariants } from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function HowItWorks() {
  const { title, steps, cta } = content.howItWorks;
  const shouldReduceMotion = useReducedMotion();

  const containerProps = shouldReduceMotion
    ? {}
    : {
        variants: staggerContainer,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-60px" },
      };

  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
        <motion.h2
          id="how-it-works-heading"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-heading font-bold text-[1.75rem] lg:text-[3rem] text-charcoal leading-tight text-center mb-14"
        >
          {title}
        </motion.h2>

        {/* Desktop: horizontal */}
        <motion.div {...containerProps} className="hidden md:grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div
            className="absolute top-10 left-[16.66%] right-[16.66%] h-px border-t-2 border-dashed border-subtle/40"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={shouldReduceMotion ? undefined : staggerItem}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10 ring-4 ring-white">
                <span className="font-heading font-extrabold text-2xl text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: vertical timeline */}
        <motion.div {...containerProps} className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={shouldReduceMotion ? undefined : staggerItem}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-heading font-extrabold text-lg text-primary">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 border-l-2 border-dashed border-subtle/40 my-2" aria-hidden="true" />
                )}
              </div>
              <div className="pb-10">
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-1.5 pt-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/kontakt" className={buttonVariants("primary")}>
            {cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
