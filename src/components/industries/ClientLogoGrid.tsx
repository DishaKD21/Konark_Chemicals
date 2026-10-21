import Image from "next/image";
import type { IndustryClient } from "@/data/industry-clients";

type ClientLogoGridProps = {
  title: string;
  description: string;
  clients: IndustryClient[];
};

export function ClientLogoGrid({ title, description, clients }: ClientLogoGridProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-graphite sm:text-[1.625rem]">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-body-sm leading-relaxed text-soft-grey">
        {description}
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 lg:gap-5">
        {clients.map((client) => (
          <li key={client.id}>
            <div className="card flex h-full flex-col items-center px-4 py-6 text-center">
              <div className="flex h-14 w-full items-center justify-center">
                <Image
                  src={client.logoSrc}
                  alt=""
                  width={140}
                  height={56}
                  className="h-12 w-auto max-w-[140px] object-contain"
                />
              </div>
              <p className="mt-4 text-body-sm font-semibold leading-snug text-graphite">
                {client.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
