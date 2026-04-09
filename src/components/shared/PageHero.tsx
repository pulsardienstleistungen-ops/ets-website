import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { buttonVariants } from "@/components/ui/Button";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="hero-gradient py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12">
        <SectionWrapper>
          <h1 className="font-heading font-extrabold text-white text-[2rem] leading-[1.15] tracking-[-0.02em] md:text-4xl lg:text-5xl max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </SectionWrapper>
      </div>
    </section>
  );
}

interface CTABlockProps {
  title: string;
  text: string;
  buttonText: string;
  href?: string;
}

export function CTABlock({
  title,
  text,
  buttonText,
  href = "/kontakt",
}: CTABlockProps) {
  return (
    <section className="bg-snow py-16 lg:py-20">
      <SectionWrapper className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <h2 className="font-heading font-bold text-[1.75rem] lg:text-[2.5rem] text-charcoal leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-muted text-base lg:text-lg leading-relaxed">
          {text}
        </p>
        <div className="mt-8">
          <Link href={href} className={buttonVariants("primary")}>
            {buttonText}
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}
