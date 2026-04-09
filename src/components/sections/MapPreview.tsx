"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";
import { buttonVariants } from "@/components/ui/Button";

const LeafletMap = dynamic(() => import("@/components/features/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-2xl bg-snow animate-pulse" />
  ),
});

export function MapPreview() {
  const { title, text, accent, cta } = content.mapSection;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="map-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Text — 40% */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: -40 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-2"
          >
            <h2
              id="map-heading"
              className="font-heading font-bold text-[1.75rem] lg:text-[3rem] text-charcoal leading-tight"
            >
              {title}
            </h2>
            <p className="mt-4 text-muted text-base lg:text-lg leading-relaxed">
              {text}
            </p>
            <p className="mt-4 text-secondary font-semibold text-base">
              {accent}
            </p>
            <div className="mt-6">
              <Link href="/standorte" className={buttonVariants("ghost")}>
                {cta}
              </Link>
            </div>
          </motion.div>

          {/* Map — 60% */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 40 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <LeafletMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
