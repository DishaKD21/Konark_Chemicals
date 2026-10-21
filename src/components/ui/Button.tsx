import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-copper text-white shadow-soft hover:bg-graphite hover:shadow-card",
  secondary:
    "bg-white text-graphite shadow-soft ring-1 ring-graphite/10 hover:ring-olive/30 hover:text-copper",
  ghost:
    "bg-white/10 text-graphite ring-1 ring-graphite/10 hover:bg-white hover:shadow-soft",
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
    "btn-base",
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
