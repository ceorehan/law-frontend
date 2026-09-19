import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/mock-data";
import { LinkButton } from "@/components/ui/Button";
import { CheckCircle2, FileText, HelpCircle } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

const faqsByService: Record<string, { q: string; a: string }[]> = {
  default: [
    { q: "Who needs this service?", a: "Individuals, freelancers, or businesses who need to meet this specific obligation with FBR or another regulator." },
    { q: "How long does it take?", a: "Timelines vary by service and how quickly documents are provided — your consultant will confirm an estimate after reviewing your checklist." },
  ],
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const faqs = faqsByService[service.slug] ?? faqsByService.default;

  return (
    <div>
      <section className="bg-ivory-200 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium text-emerald-600">Service</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-charcoal-800">{service.name}</h1>
          <p className="mx-auto mt-4 max-w-xl text-charcoal-700/80">{service.shortDescription}</p>
          <LinkButton href="/register" size="lg" className="mt-7">Start Your Checklist</LinkButton>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-charcoal-800">Who needs this service</h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-700/80">
            This service is designed for clients who need {service.name.toLowerCase()} handled correctly
            and on time, without having to interpret tax and regulatory language themselves.
          </p>

          <h2 className="mt-10 text-lg font-semibold text-charcoal-800">Key features</h2>
          <ul className="mt-4 space-y-3">
            {service.keyFeatures.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-charcoal-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" /> {f}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-lg font-semibold text-charcoal-800">Process</h2>
          <ol className="mt-4 space-y-3">
            {service.process.map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-charcoal-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-medium text-emerald-700">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <h2 className="mt-10 text-lg font-semibold text-charcoal-800">FAQs</h2>
          <div className="mt-4 space-y-5">
            {faqs.map((f) => (
              <div key={f.q}>
                <p className="flex items-center gap-2 text-sm font-medium text-charcoal-800">
                  <HelpCircle className="h-4 w-4 text-emerald-600" /> {f.q}
                </p>
                <p className="mt-1.5 pl-6 text-sm text-charcoal-700/75">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <aside>
          <div className="rounded-2xl border border-charcoal-800/8 bg-ivory-100 p-6 shadow-soft">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-charcoal-800">
              <FileText className="h-4 w-4 text-emerald-600" /> Required documents
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-charcoal-700/80">
              {service.requiredDocuments.map((d) => (
                <li key={d}>&bull; {d}</li>
              ))}
            </ul>
            <LinkButton href="/register" className="mt-6 w-full">Start Your Checklist</LinkButton>
          </div>
        </aside>
      </section>
    </div>
  );
}
