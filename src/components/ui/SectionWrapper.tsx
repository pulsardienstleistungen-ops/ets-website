"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type AnimationVariant = "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn";

interface SectionWrapperProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
}

const variantMap = {
  fadeInUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function SectionWrapper({
  children,
  variant = "fadeInUp",
  delay = 0,
  className,
}: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const v = variantMap[variant];

  return (
    <motion.div
      initial={v.hidden}
      whileInView={v.visible}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
