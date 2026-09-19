import Link from "next/link";
import { ArrowRight, FileText, Building2, Scale, BookOpenCheck, TrendingUp, BadgeCheck } from "lucide-react";
import { services } from "@/lib/mock-data";

const icons = { FileText, Building2, Scale, BookOpenCheck, TrendingUp, BadgeCheck } as const;

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-xl">
        <h2 className="font-display text-3xl font-bold text-charcoal-800">Services built around your obligations</h2>
        <p className="mt-3 text-charcoal-700/80">
          From first-time filers to established companies, every engagement starts with the right specialist.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = icons[s.icon as keyof typeof icons] ?? FileText;
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl border border-charcoal-800/8 bg-ivory-100 p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                <Icon className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-base font-semibold text-charcoal-800">{s.name}</h3>
              <p className="mt-2 text-sm text-charcoal-700/75">{s.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
