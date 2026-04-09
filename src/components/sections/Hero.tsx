"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { hero, karriereMarquee } = content;
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? undefined : { opacity: 0, y: 40 };
  const animate = shouldReduceMotion ? undefined : { opacity: 1, y: 0 };
  const tr = (delay: number) => ({ duration: 0.6, ease, delay });

  return (
    <section className="relative min-h-screen hero-gradient flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 xl:px-12 pt-24 pb-20">
        <div className="max-w-3xl">
          <motion.div initial={initial} animate={animate} transition={tr(0.2)}>
            <Badge className="bg-white/10 text-white/90">{hero.badge}</Badge>
          </motion.div>

          <motion.h1
            initial={initial}
            animate={animate}
            transition={tr(0.3)}
            className="mt-6 font-heading font-extrabold text-white text-[2.25rem] leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-[4rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={initial}
            animate={animate}
            transition={tr(0.45)}
            className="mt-6 text-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={tr(0.6)}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/kontakt"
              className={buttonVariants("primary", "w-full sm:w-auto")}
            >
              {hero.ctaPrimary}
            </Link>
            <a
              href="#express-form"
              className={buttonVariants("secondary", "w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-navy")}
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Karriere Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <Link href="/karriere" className="block" aria-label="Karriere — Jobs in verschiedenen Sprachen">
          <div className="overflow-hidden py-3">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...karriereMarquee, ...karriereMarquee].map((item, i) => (
                <span
                  key={i}
                  className="mx-6 text-white/60 text-sm font-medium"
                  aria-hidden={i >= karriereMarquee.length}
                >
                  {item.flag} {item.text}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
