"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { content } from "@/data/content";
import { buttonVariants } from "@/components/ui/Button";

export function Referenzen() {
  const { title, text, cta } = content.referenzen;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-snow py-16 lg:py-24" aria-labelledby="referenzen-heading">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="max-w-3xl mx-auto px-6 md:px-8 text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-ice flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-7 h-7 text-secondary" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <h2
          id="referenzen-heading"
          className="font-heading font-bold text-[1.75rem] lg:text-[3rem] text-charcoal leading-tight"
        >
          {title}
        </h2>
        <p className="mt-5 text-muted text-base lg:text-lg leading-relaxed">
          {text}
        </p>
        <div className="mt-8">
          <Link href="/kontakt" className={buttonVariants("secondary")}>
            {cta}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
