import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Building2, Scale, BookOpenCheck, TrendingUp, BadgeCheck } from "lucide-react";
import { services } from "@/lib/mock-data";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Tax filing, legal advisory, corporate compliance, bookkeeping and financial advisory services from ZA Law Associates.",
};

const icons = { FileText, Building2, Scale, BookOpenCheck, TrendingUp, BadgeCheck } as const;

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-charcoal-800">Our Services</h1>
        <p className="mt-4 text-charcoal-700/80">
          Tax filing, legal advisory, corporate compliance, bookkeeping and strategic financial
          advisory — tailored for individuals, freelancers, businesses and overseas Pakistanis.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = icons[s.icon as keyof typeof icons] ?? FileText;
          return (
            <div key={s.slug} className="flex flex-col rounded-2xl border border-charcoal-800/8 bg-ivory-100 p-6 shadow-soft">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                <Icon className="h-5 w-5 text-emerald-600" />
              </div>
              <h2 className="text-base font-semibold text-charcoal-800">{s.name}</h2>
              <p className="mt-2 flex-1 text-sm text-charcoal-700/75">{s.shortDescription}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-charcoal-800/60">
                {s.keyFeatures.slice(0, 3).map((f) => (
                  <li key={f}>&bull; {f}</li>
                ))}
              </ul>
              <Link href={`/services/${s.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-16 rounded-2xl bg-ivory-300/60 p-8 text-center">
        <h2 className="font-display text-xl font-semibold text-charcoal-800">Not sure which service you need?</h2>
        <p className="mt-2 text-sm text-charcoal-700/75">Book a free consultation and we'll point you in the right direction.</p>
        <LinkButton href="/contact" className="mt-5">Book Free Consultation</LinkButton>
      </div>
    </div>
  );
}
