import { LinkButton } from "@/components/ui/Button";
import { Check, Circle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700">
            FBR-Registered Tax & Legal Advisory
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-charcoal-800 sm:text-5xl">
            Expert Tax, Legal &amp; Financial Solutions for Pakistan
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal-700/80">
            FBR-compliant tax filing, legal advisory, corporate compliance, bookkeeping and
            strategic financial advisory for individuals and businesses across Pakistan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/register" size="lg">
              Start Your Tax Filing
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              Book Free Consultation
            </LinkButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-3xl border border-charcoal-800/8 bg-ivory-100 p-6 shadow-card">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-charcoal-800/50">Tax Filing 2026</p>
                <p className="text-sm font-semibold text-charcoal-800">Ahmed Khan · ZA-2026-00124</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                72%
              </span>
            </div>
            <div className="mb-5 h-2 rounded-full bg-charcoal-800/8">
              <div className="h-2 w-[72%] rounded-full bg-emerald-500" />
            </div>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Personal Information", done: true },
                { label: "Income Details", done: true },
                { label: "Business Information", done: true },
                { label: "Tax Documents", done: false },
                { label: "Final Review", done: false },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2.5">
                  {item.done ? (
                    <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                  ) : (
                    <Circle className="h-4 w-4 shrink-0 text-charcoal-800/25" />
                  )}
                  <span className={item.done ? "text-charcoal-700" : "text-charcoal-800/45"}>{item.label}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-full bg-charcoal-800 py-2.5 text-sm font-medium text-ivory-100">
              Continue Application
            </button>
          </div>
          <div className="absolute -right-6 -top-6 -z-10 h-28 w-28 rounded-full bg-gold-100/60 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
