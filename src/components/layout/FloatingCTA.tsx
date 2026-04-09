"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PHONE_LINK } from "@/lib/constants";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setIsVisible(scrollPercentage > 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={shouldReduceMotion ? undefined : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-white/90 backdrop-blur-md border-t border-black/5 safe-area-pb"
        >
          <a
            href={PHONE_LINK}
            className="flex items-center justify-center gap-2 w-full bg-primary text-white font-semibold py-3.5 rounded-xl shadow-[0_4px_14px_rgba(212,32,39,0.3)] active:scale-[0.98] transition-transform"
            aria-label="Jetzt anrufen"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Jetzt anrufen
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
