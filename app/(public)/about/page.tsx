import type { Metadata } from "next";
import { Award, Users, ShieldCheck, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "ZA Law Associates is a Pakistani tax, legal and financial advisory firm serving individuals and businesses nationwide.",
};

const team = [
  { name: "Zara Ahsan", role: "Founding Partner, Tax & Legal Advisory" },
  { name: "Sara Ahmed", role: "Senior Tax Consultant" },
  { name: "Bilal Hussain", role: "Corporate Compliance Lead" },
  { name: "Ayesha Noor", role: "Legal Advisory Associate" },
];

const values = [
  { icon: ShieldCheck, title: "Compliance first", description: "Every filing and advisory opinion is grounded in current FBR and SECP regulation." },
  { icon: Users, title: "Client clarity", description: "We explain obligations in plain language, not jargon." },
  { icon: Award, title: "Accountability", description: "Every application has a named consultant responsible for it, start to finish." },
  { icon: Scale, title: "Integrity", description: "We advise on what's compliant and correct, not just what's convenient." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-ivory-200 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold text-charcoal-800">About ZA Law Associates</h1>
          <p className="mt-4 text-charcoal-700/80">
            We're a Pakistani tax, legal and financial advisory firm built to make compliance
            straightforward for individuals, freelancers, businesses and overseas Pakistanis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-charcoal-800/8 bg-ivory-100 p-6">
              <Icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-4 text-sm font-semibold text-charcoal-800">{title}</h3>
              <p className="mt-2 text-sm text-charcoal-700/70">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory-300/60 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-bold text-charcoal-800">Our team</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl border border-charcoal-800/8 bg-ivory-100 p-5 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <p className="mt-3 text-sm font-semibold text-charcoal-800">{m.name}</p>
                <p className="text-xs text-charcoal-700/60">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
