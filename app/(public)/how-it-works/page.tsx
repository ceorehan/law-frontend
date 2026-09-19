import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/Button";
import { UserPlus, ListChecks, UploadCloud, ClipboardCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = { title: "How It Works" };

const steps = [
  { icon: UserPlus, title: "Create your account", description: "Register with your CNIC and contact details to create a secure client profile." },
  { icon: ListChecks, title: "Complete your checklist", description: "Work through a guided, multi-step checklist covering personal, income, and financial information." },
  { icon: UploadCloud, title: "Upload your documents", description: "Attach CNIC, salary certificates, bank statements and other required documents directly in the portal." },
  { icon: ClipboardCheck, title: "Consultant review", description: "Your assigned consultant reviews your checklist and documents, and flags anything that needs correction." },
  { icon: CheckCircle2, title: "Filing complete", description: "Once everything is verified, your consultant files on your behalf and you're notified in your dashboard." },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-charcoal-800">How it works</h1>
      <p className="mt-4 max-w-xl text-charcoal-700/80">
        A clear, guided path from account creation to a completed filing — with real-time
        status at every step.
      </p>

      <div className="mt-14 space-y-10">
        {steps.map((s, i) => (
          <div key={s.title} className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                <s.icon className="h-5 w-5 text-emerald-600" />
              </div>
              {i < steps.length - 1 && <div className="mt-2 w-px flex-1 bg-charcoal-800/10" />}
            </div>
            <div className="pb-2">
              <h3 className="text-base font-semibold text-charcoal-800">{s.title}</h3>
              <p className="mt-1.5 text-sm text-charcoal-700/75">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      <LinkButton href="/register" size="lg" className="mt-6">Start Your Tax Filing</LinkButton>
    </div>
  );
}
