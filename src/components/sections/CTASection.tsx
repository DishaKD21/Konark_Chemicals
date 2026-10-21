import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  dark?: boolean;
};

export function CTASection({
  eyebrow = "Get in touch",
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  dark = true,
}: CTASectionProps) {
  return (
    <section className="section-y-lg bg-ivory">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div
          className={
            dark
              ? "rounded-lg bg-charcoal p-8 text-ivory shadow-card-elevated lg:p-12"
              : "card p-8 lg:p-12"
          }
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <SectionHeading
                eyebrow={eyebrow}
                title={title}
                description={description}
                dark={dark}
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref}>{primaryLabel}</Button>
              {secondaryHref && secondaryLabel && (
                <Button
                  href={secondaryHref}
                  variant="secondary"
                  className={
                    dark
                      ? "bg-white/10 text-white ring-white/25 hover:bg-white hover:text-graphite"
                      : undefined
                  }
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
