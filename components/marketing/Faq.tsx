"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What documents are required for tax filing?", a: "Typically your CNIC, salary certificate or business income records, and bank statements. Your checklist will list exactly what applies to you." },
  { q: "How can I become a filer in Pakistan?", a: "Register with ZA Law Associates, complete your tax checklist, and we'll handle your NTN registration and return filing with FBR." },
  { q: "How does the online tax filing process work?", a: "Create an account, complete your checklist in guided steps, upload documents, and your consultant reviews and files on your behalf." },
  { q: "Can I submit documents through the portal?", a: "Yes. You can upload PDF, JPG, or PNG files directly from desktop or mobile, up to 10 MB per file." },
  { q: "How long does tax filing take?", a: "Most individual filings are completed within 5–7 business days after your checklist and documents are submitted." },
  { q: "Can I track my application?", a: "Yes, your dashboard shows real-time status, from checklist submission through to filing completion." },
  { q: "Can I contact my tax consultant?", a: "Yes, use the Messages section of your portal to message your assigned consultant directly." },
  { q: "What happens if information is missing?", a: "Your consultant will mark the relevant section and request a correction. You'll be notified and can update it directly in your portal." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl font-bold text-charcoal-800">Frequently asked questions</h2>
      <div className="mt-8 divide-y divide-charcoal-800/8 border-t border-charcoal-800/8">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button
              className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-charcoal-800 focus-ring"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {f.q}
              <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="pb-4 text-sm leading-relaxed text-charcoal-700/75">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
