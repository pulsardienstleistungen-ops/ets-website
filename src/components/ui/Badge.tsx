import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block bg-ice text-secondary px-3.5 py-1.5 rounded-full text-[13px] font-semibold",
        className,
      )}
    >
      {children}
    </span>
  );
}
