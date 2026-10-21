import Link from "next/link";
import { leadership } from "@/data/team";
import { companyStory } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function HomeTeamPreview() {
  const lead = leadership[0];

  return (
    <section className="section-y bg-ivory">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <div className="card overflow-hidden bg-charcoal text-ivory shadow-card-elevated">
          <div className="grid gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
            <div>
              <SectionHeading
                eyebrow="People"
                title="Leadership and team"
                description="Profiles are published with approved names, roles, and photographs."
                dark
              />
              <Button
                href="/team"
                variant="secondary"
                className="mt-8 bg-white/10 text-white ring-white/20 hover:bg-white hover:text-graphite"
              >
                Meet our team
              </Button>
            </div>
            <div className="rounded-xl bg-white/10 p-6 lg:p-8">
              <p className="text-body-sm leading-relaxed text-stone/95">
                {companyStory.paragraphs[0]}
              </p>
              {lead && (
                <p className="mt-4 text-body-sm text-stone/85">
                  <span className="font-semibold text-white">{lead.name}</span>
                  {lead.designation && !lead.designation.startsWith("[") ? (
                    <> — {lead.designation}</>
                  ) : null}
                </p>
              )}
              <Link
                href="/about"
                className="mt-6 inline-block text-body-sm font-semibold text-copper hover:text-white"
              >
                Company story and credentials →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
