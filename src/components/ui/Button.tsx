import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white rounded-xl px-8 py-4 text-base shadow-[0_4px_14px_rgba(212,32,39,0.3)] hover:bg-primary-dark hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(212,32,39,0.4)] focus-visible:ring-primary",
  secondary:
    "border-2 border-secondary text-secondary bg-transparent rounded-xl px-[30px] py-3.5 text-base hover:bg-secondary hover:text-white focus-visible:ring-secondary",
  ghost:
    "text-secondary bg-transparent px-0 py-2 text-base border-b-2 border-transparent hover:border-secondary focus-visible:ring-secondary",
};

export function buttonVariants(
  variant: ButtonVariant = "primary",
  className?: string,
) {
  return cn(base, variantStyles[variant], className);
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants(variant, className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant };
