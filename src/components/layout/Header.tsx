"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { content } from "@/data/content";
import { PHONE_LINK, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 bg-white",
        isScrolled
          ? "h-14 shadow-sm backdrop-blur-md bg-white/95"
          : "h-16",
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 md:px-8 xl:px-12">
        <Link
          href="/"
          className="font-heading font-bold text-xl text-charcoal tracking-tight shrink-0"
          aria-label="ETS — Startseite"
        >
          ETS
        </Link>

        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Hauptnavigation"
        >
          {content.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-content font-body text-sm font-medium hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-whatsapp hover:scale-110 transition-transform"
            aria-label="Per WhatsApp kontaktieren"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          <a
            href={PHONE_LINK}
            className="hidden md:flex items-center gap-1.5 min-h-[44px] px-2 text-content text-sm font-medium hover:text-secondary transition-colors"
            aria-label="Anrufen"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="hidden xl:inline">{PHONE_DISPLAY}</span>
          </a>

          <a
            href={PHONE_LINK}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-content hover:text-secondary transition-colors"
            aria-label="Anrufen"
          >
            <Phone className="w-5 h-5" />
          </a>

          <Link
            href="/kontakt"
            className={cn("hidden sm:inline-flex", buttonVariants("primary", "text-sm px-5 py-2.5"))}
          >
            {content.nav.cta}
          </Link>

          <button
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-content hover:text-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
