import type { TimelineEvent } from "@/data/company";

type CompanyTimelineProps = {
  events: TimelineEvent[];
};

export function CompanyTimeline({ events }: CompanyTimelineProps) {
  const visible = events.filter((e) => e.confirmed);

  if (visible.length === 0) {
    return (
      <p className="text-body-sm text-soft-grey">
        Timeline entries will appear here once milestones are confirmed from
        company records.
      </p>
    );
  }

  return (
    <ol className="space-y-6">
      {visible.map((event, i) => (
        <li key={`${event.title}-${i}`} className="card flex gap-4 p-5">
          {event.year && (
            <span
              className="flex h-10 shrink-0 items-center justify-center rounded-full bg-olive/15 px-3 text-body-sm font-bold text-olive"
            >
              {event.year}
            </span>
          )}
          <div>
            <h3 className="font-semibold text-graphite">{event.title}</h3>
            <p className="mt-2 text-body-sm leading-relaxed text-soft-grey">
              {event.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
