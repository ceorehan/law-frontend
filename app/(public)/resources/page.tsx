import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = { title: "Resources" };

const articles = [
  { title: "A first-time filer's guide to FBR tax returns", tag: "Tax Filing" },
  { title: "NTN vs STRN: which registration do you need?", tag: "Registration" },
  { title: "What corporate compliance actually requires each year", tag: "Corporate" },
  { title: "Common mistakes that delay tax filing in Pakistan", tag: "Tax Filing" },
  { title: "Legal documentation every small business should have", tag: "Legal" },
  { title: "Bookkeeping basics for freelancers", tag: "Accounting" },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-charcoal-800">Resources</h1>
      <p className="mt-4 max-w-xl text-charcoal-700/80">
        Guides and explainers on tax, legal and financial topics relevant to Pakistan.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <div key={a.title} className="rounded-2xl border border-charcoal-800/8 bg-ivory-100 p-6">
            <FileText className="h-5 w-5 text-emerald-600" />
            <p className="mt-3 text-xs font-medium text-emerald-600">{a.tag}</p>
            <h3 className="mt-1 text-sm font-semibold leading-snug text-charcoal-800">{a.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
