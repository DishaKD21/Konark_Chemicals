import type { TeamMember } from "@/data/team";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";

type TeamMemberCardProps = {
  member: TeamMember;
  large?: boolean;
};

export function TeamMemberCard({ member, large }: TeamMemberCardProps) {
  const showProfile = member.confirmed || !member.name.startsWith("[");

  return (
    <article
      className={cn(
        "card overflow-hidden",
        large ? "grid gap-0 lg:grid-cols-12" : "flex flex-col",
      )}
    >
      <div
        className={cn(
          "relative m-4 overflow-hidden rounded-image shadow-soft",
          large
            ? "aspect-[4/5] max-h-[280px] lg:col-span-4 lg:m-6 lg:max-h-none lg:aspect-[3/4]"
            : "mx-4 mt-4 aspect-[4/5] max-h-[240px]",
        )}
      >
        {member.imageSrc ? (
          <SafeImage
            src={member.imageSrc}
            alt={member.imageAlt ?? member.name}
            fill
            className="object-cover"
            sizes={large ? "280px" : "240px"}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-sage/50 text-body-sm text-soft-grey">
            Portrait pending
          </div>
        )}
      </div>
      <div
        className={cn(
          "flex flex-col justify-center p-6",
          large && "lg:col-span-8 lg:p-8 lg:pl-2",
        )}
      >
        {member.department && (
          <span className="inline-flex w-fit rounded-full bg-sage/80 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-olive">
            {member.department}
          </span>
        )}
        <h3 className="mt-3 text-xl font-semibold text-graphite">{member.name}</h3>
        <p className="mt-1 text-body-sm text-soft-grey">{member.designation}</p>
        {showProfile ? (
          <p className="mt-4 text-body-sm leading-relaxed text-soft-grey">
            {member.biography}
          </p>
        ) : (
          <p className="mt-4 text-body-sm italic text-soft-grey">
            Profile text and photograph to be confirmed before publication.
          </p>
        )}
        {member.experience && (
          <p className="mt-3 text-body-sm text-graphite">{member.experience}</p>
        )}
        {member.responsibilities && member.responsibilities.length > 0 && (
          <ul className="mt-4 list-inside list-disc text-body-sm text-soft-grey">
            {member.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
