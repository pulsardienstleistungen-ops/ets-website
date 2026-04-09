"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
  separator?: string;
  start?: boolean;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp({
  end,
  duration = 2000,
  suffix = "",
  separator = "",
  start = false,
}: UseCountUpOptions) {
  const [display, setDisplay] = useState(`0${suffix}`);
  const hasAnimated = useRef(false);

  const formatNumber = useCallback(
    (n: number) => {
      const rounded = Math.round(n);
      if (separator) {
        const str = rounded.toString();
        const parts: string[] = [];
        for (let i = str.length; i > 0; i -= 3) {
          parts.unshift(str.slice(Math.max(0, i - 3), i));
        }
        return parts.join(separator) + suffix;
      }
      return rounded + suffix;
    },
    [separator, suffix],
  );

  useEffect(() => {
    if (!start || hasAnimated.current || end === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setDisplay(formatNumber(end));
      hasAnimated.current = true;
      return;
    }

    hasAnimated.current = true;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = easeOutCubic(progress) * end;
      setDisplay(formatNumber(value));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, end, duration, formatNumber]);

  return display;
}
