import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-sage/60 pt-28 pb-12 lg:pt-36 lg:pb-16",
        className,
      )}
    >
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold leading-snug sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-body-sm leading-relaxed text-soft-grey sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
