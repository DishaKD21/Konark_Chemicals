import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-copper bg-copper text-ivory hover:bg-graphite hover:border-graphite",
  secondary:
    "border border-graphite/30 bg-transparent text-graphite hover:border-copper hover:text-copper",
  ghost:
    "border border-transparent text-ivory hover:border-ivory/40 hover:bg-ivory/5",
};

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200",
    variantClasses[variant],
    disabled && "pointer-events-none opacity-50",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
