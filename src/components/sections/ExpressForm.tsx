"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";
import { PHONE_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  unternehmen: z.string().min(2, "Bitte geben Sie Ihr Unternehmen ein"),
  kontakt: z.string().min(5, "Bitte geben Sie Telefon oder E-Mail ein"),
  mitarbeiterAnzahl: z.string().min(1, "Bitte wählen Sie die Anzahl"),
  dringlichkeit: z.string().min(1, "Bitte wählen Sie die Dringlichkeit"),
  nachricht: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ExpressForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { expressForm: t } = content;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      mitarbeiterAnzahl: "",
      dringlichkeit: "",
    },
  });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  const inputClasses =
    "w-full bg-white border-[1.5px] border-white/20 rounded-[10px] px-4 py-3.5 text-base text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200";

  const labelClasses = "block text-sm font-semibold text-white/80 mb-1.5";
  const errorClasses = "text-xs text-error mt-1";

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: { once: true, margin: "-60px" as const },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section
      id="express-form"
      className="bg-navy py-16 lg:py-24"
      aria-labelledby="express-form-heading"
    >
      <motion.div
        {...motionProps}
        className="max-w-3xl mx-auto px-6 md:px-8"
      >
        {isSubmitted ? (
          <div className="text-center py-12">
            <CheckCircle
              className="w-16 h-16 text-success mx-auto mb-6"
              aria-hidden="true"
            />
            <h3 className="font-heading font-bold text-2xl text-white mb-3">
              {t.success.title}
            </h3>
            <p className="text-white/70 text-lg">{t.success.text}</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-10">
              <h2
                id="express-form-heading"
                className="font-heading font-bold text-[1.75rem] lg:text-[3rem] text-white leading-tight"
              >
                {t.title}
              </h2>
              <p className="mt-3 text-white/60 text-lg">{t.subtitle}</p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    {t.fields.name.label} *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t.fields.name.placeholder}
                    className={cn(inputClasses, errors.name && "border-error")}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className={errorClasses}>{errors.name.message}</p>
                  )}
                </div>

                {/* Unternehmen */}
                <div>
                  <label htmlFor="unternehmen" className={labelClasses}>
                    {t.fields.unternehmen.label} *
                  </label>
                  <input
                    id="unternehmen"
                    type="text"
                    placeholder={t.fields.unternehmen.placeholder}
                    className={cn(
                      inputClasses,
                      errors.unternehmen && "border-error",
                    )}
                    {...register("unternehmen")}
                  />
                  {errors.unternehmen && (
                    <p className={errorClasses}>
                      {errors.unternehmen.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Kontakt */}
              <div>
                <label htmlFor="kontakt" className={labelClasses}>
                  {t.fields.kontakt.label} *
                </label>
                <input
                  id="kontakt"
                  type="text"
                  placeholder={t.fields.kontakt.placeholder}
                  className={cn(
                    inputClasses,
                    errors.kontakt && "border-error",
                  )}
                  {...register("kontakt")}
                />
                {errors.kontakt && (
                  <p className={errorClasses}>{errors.kontakt.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Mitarbeiter-Anzahl */}
                <div>
                  <label htmlFor="mitarbeiterAnzahl" className={labelClasses}>
                    {t.fields.mitarbeiterAnzahl.label} *
                  </label>
                  <select
                    id="mitarbeiterAnzahl"
                    className={cn(
                      inputClasses,
                      "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22white%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M8%2011L3%206h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center]",
                      errors.mitarbeiterAnzahl && "border-error",
                    )}
                    defaultValue=""
                    {...register("mitarbeiterAnzahl")}
                  >
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {t.fields.mitarbeiterAnzahl.options.map((opt) => (
                      <option key={opt} value={opt} className="text-navy">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.mitarbeiterAnzahl && (
                    <p className={errorClasses}>
                      {errors.mitarbeiterAnzahl.message}
                    </p>
                  )}
                </div>

                {/* Dringlichkeit */}
                <div>
                  <span className={labelClasses}>
                    {t.fields.dringlichkeit.label} *
                  </span>
                  <div className="flex flex-col gap-2.5 mt-1">
                    {t.fields.dringlichkeit.options.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2.5 cursor-pointer"
                      >
                        <input
                          type="radio"
                          value={opt}
                          className="w-4 h-4 text-primary accent-primary"
                          {...register("dringlichkeit")}
                        />
                        <span className="text-sm text-white/70">{opt}</span>
                      </label>
                    ))}
                  </div>
                  {errors.dringlichkeit && (
                    <p className={errorClasses}>
                      {errors.dringlichkeit.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Nachricht */}
              <div>
                <label htmlFor="nachricht" className={labelClasses}>
                  {t.fields.nachricht.label}
                </label>
                <textarea
                  id="nachricht"
                  rows={3}
                  placeholder={t.fields.nachricht.placeholder}
                  className={cn(inputClasses, "resize-none")}
                  {...register("nachricht")}
                />
              </div>

              {/* Submit */}
              <div className="text-center pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto text-lg px-10 py-4"
                >
                  {t.cta}
                </Button>
                <p className="mt-4 text-white/50 text-sm flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>
                    Oder rufen Sie direkt an:{" "}
                    <a
                      href={PHONE_LINK}
                      className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
                    >
                      +49 (6323) 9870228
                    </a>
                  </span>
                </p>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </section>
  );
}
