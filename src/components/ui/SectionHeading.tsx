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
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-3", dark && "text-sage")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "text-balance text-2xl font-semibold leading-snug sm:text-3xl lg:text-[2.125rem]",
          dark ? "text-white" : "text-graphite",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-xl text-body-sm leading-relaxed sm:text-base",
            dark ? "text-stone/95" : "prose-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
