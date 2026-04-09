import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NotfallBanner } from "@/components/layout/NotfallBanner";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { content } from "@/data/content";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "ETS Personaldienstleister",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <NotfallBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <FloatingCTA />
      </body>
    </html>
  );
}
