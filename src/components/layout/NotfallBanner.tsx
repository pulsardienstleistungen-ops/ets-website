"use client";

import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import { content } from "@/data/content";
import { PHONE_LINK } from "@/lib/constants";

const STORAGE_KEY = "ets-notfall-banner-dismissed";

export function NotfallBanner() {
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setIsDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  if (isDismissed) return null;

  return (
    <div
      className="hidden lg:block bg-primary text-white text-sm font-medium"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-12 flex items-center justify-center gap-2 py-2.5 relative">
        <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>{content.notfallBanner.text}</span>
        <a
          href={PHONE_LINK}
          className="font-bold underline underline-offset-2 hover:no-underline"
        >
          {content.notfallBanner.phone}
        </a>
        <button
          onClick={handleDismiss}
          className="absolute right-4 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Banner schließen"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
