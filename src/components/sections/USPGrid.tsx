"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  UserCheck,
  Zap,
  Truck,
  LayoutDashboard,
  Home,
  MapPin,
} from "lucide-react";
import { content } from "@/data/content";
import { scaleIn, staggerContainer } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  UserCheck,
  Zap,
  Truck,
  LayoutDashboard,
  Home,
  MapPin,
};

export function USPGrid() {
  const items = content.uspBlocks;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="usp-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
        <h2 id="usp-heading" className="sr-only">Unsere Vorteile</h2>
        <motion.div
          {...(shouldReduceMotion
            ? {}
            : {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, margin: "-60px" },
              })}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.article
                key={item.icon}
                variants={shouldReduceMotion ? undefined : scaleIn}
                className="group bg-white rounded-2xl p-8 border border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400"
              >
                <div className="w-12 h-12 rounded-xl bg-ice flex items-center justify-center mb-5">
                  {Icon && (
                    <Icon
                      className="w-6 h-6 text-secondary"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="font-heading font-semibold text-lg text-charcoal leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
