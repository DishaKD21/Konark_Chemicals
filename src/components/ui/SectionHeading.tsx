import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        align === "center" && "text-center mx-auto max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-xs font-medium uppercase tracking-[0.2em]",
            dark ? "text-stone/80" : "text-copper",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-[1.12] tracking-display sm:text-4xl lg:text-[2.65rem]",
          dark ? "text-ivory" : "text-graphite",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-xl text-base leading-relaxed sm:text-lg",
            dark ? "text-stone/90" : "text-soft-grey",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
