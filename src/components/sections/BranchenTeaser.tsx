"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Package,
  Factory,
  Recycle,
  Wrench,
  Car,
  Hammer,
  HardHat,
  UtensilsCrossed,
  Building2,
} from "lucide-react";
import { content } from "@/data/content";
import { buttonVariants } from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

const branchenIcons: LucideIcon[] = [
  Package,
  Factory,
  Recycle,
  Wrench,
  Car,
  Hammer,
  HardHat,
  UtensilsCrossed,
  Building2,
];

export function BranchenTeaser() {
  const { title, text, cta, branchen } = content.branchenTeaser;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-snow py-16 lg:py-24" aria-labelledby="branchen-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2
            id="branchen-heading"
            className="font-heading font-bold text-[1.75rem] lg:text-[3rem] text-charcoal leading-tight"
          >
            {title}
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">{text}</p>
        </motion.div>

        {/* Industry icons — horizontal scroll on mobile */}
        <motion.div
          {...(shouldReduceMotion
            ? {}
            : {
                variants: staggerContainer,
                initial: "hidden" as const,
                whileInView: "visible" as const,
                viewport: { once: true, margin: "-40px" },
              })}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-9 lg:gap-6 lg:overflow-visible lg:pb-0"
        >
          {branchen.map((name, i) => {
            const Icon = branchenIcons[i];
            return (
              <motion.div
                key={name}
                variants={shouldReduceMotion ? undefined : staggerItem}
                className="flex flex-col items-center gap-3 min-w-[100px] snap-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-black/[0.04] flex items-center justify-center group-hover:shadow-md transition-shadow">
                  <Icon
                    className="w-7 h-7 text-secondary"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted text-center leading-tight whitespace-nowrap">
                  {name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link href="/branchen" className={buttonVariants("ghost")}>
            {cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
