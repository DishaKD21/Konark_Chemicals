import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { employees, familyProfiles, leadership } from "@/data/team";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Our team",
  description:
    "Leadership, family heritage, and employees at Konark Chemicals. Profiles published with approved names, roles, and photographs.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="People behind Konark Chemicals"
        description="Professional profiles for leadership, family, and employees. Names, designations, and biographies are placeholders until you confirm and approve each entry."
      />

      <section className="section-y bg-ivory">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <h2 className="text-2xl font-semibold text-graphite">
            Leadership
          </h2>
          <div className="mt-10 space-y-10">
            {leadership.map((member) => (
              <TeamMemberCard key={member.id} member={member} large />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-sage/30">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <h2 className="text-2xl font-semibold text-graphite">
            Family heritage
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-soft-grey">
            Respectful profiles for family members featured on the website.
            Confirm official designations before publication.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {familyProfiles.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="mx-auto max-w-editorial px-6 lg:px-10">
          <h2 className="text-2xl font-semibold text-graphite">
            Employees
          </h2>
          <p className="mt-4 text-sm text-soft-grey">
            Only approved employee profiles are shown. Add entries to{" "}
            <code className="text-graphite">src/data/team.ts</code>.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {employees.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
