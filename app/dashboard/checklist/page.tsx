"use client";
import { useState } from "react";
import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { Stepper } from "@/components/ui/Stepper";
import { Button } from "@/components/ui/Button";
import { FieldLabel, Input, Select, Textarea } from "@/components/ui/Input";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { checklistSteps } from "@/lib/mock-data";
import { UploadCloud, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

export default function ChecklistPage() {
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);
  const step = checklistSteps[index];
  const isLast = index === checklistSteps.length - 1;

  function goNext() {
    setCompleted((prev) => (prev.includes(step.key) ? prev : [...prev, step.key]));
    if (!isLast) setIndex((i) => i + 1);
  }
  function goBack() {
    if (index > 0) setIndex((i) => i - 1);
  }

  return (
    <>
      <Topbar title="Tax Checklist" />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-xs text-charcoal-800/50">
            <span>Step {index + 1} of {checklistSteps.length}</span>
            <span>{Math.round(((index) / (checklistSteps.length - 1)) * 100)}% complete</span>
          </div>
          <ProgressBar value={(index / (checklistSteps.length - 1)) * 100} />
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <Card className="h-fit p-3">
            <Stepper steps={checklistSteps} currentIndex={index} completedKeys={completed} />
          </Card>

          <Card className="p-6 sm:p-8">
            <StepContent stepKey={step.key} title={step.title} />

            <div className="mt-8 flex justify-between border-t border-charcoal-800/8 pt-6">
              <Button variant="outline" onClick={goBack} disabled={index === 0}>
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              <Button onClick={goNext}>
                {isLast ? "Submit Checklist" : "Save & Continue"}
                {!isLast && <ArrowRight className="h-4 w-4" />}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

function StepContent({ stepKey, title }: { stepKey: string; title: string }) {
  switch (stepKey) {
    case "personal":
      return (
        <FormShell title={title} description="Your basic personal information as it appears on your CNIC.">
          <Row>
            <Field label="Full name"><Input placeholder="Ahmed Khan" /></Field>
            <Field label="Father / Husband name"><Input placeholder="Full name" /></Field>
          </Row>
          <Row>
            <Field label="CNIC number"><Input placeholder="XXXXX-XXXXXXX-X" /></Field>
            <Field label="Date of birth"><Input type="date" /></Field>
          </Row>
          <Row>
            <Field label="Phone number"><Input type="tel" placeholder="03XX-XXXXXXX" /></Field>
            <Field label="Email address"><Input type="email" placeholder="you@example.com" /></Field>
          </Row>
          <Field label="Residential address"><Textarea rows={2} placeholder="House, street, city" /></Field>
        </FormShell>
      );
    case "tax-profile":
      return (
        <FormShell title={title} description="Tell us about your current tax registration status.">
          <Row>
            <Field label="NTN (if already registered)"><Input placeholder="Optional" /></Field>
            <Field label="Tax year">
              <Select defaultValue="2026"><option value="2026">2026</option><option value="2025">2025</option></Select>
            </Field>
          </Row>
          <Field label="Filer status">
            <Select defaultValue=""><option value="" disabled>Select status</option><option>Filer</option><option>Non-filer</option><option>Not sure</option></Select>
          </Field>
          <Field label="Occupation type">
            <Select defaultValue=""><option value="" disabled>Select occupation</option><option>Salaried</option><option>Business owner</option><option>Freelancer</option><option>Overseas Pakistani</option></Select>
          </Field>
        </FormShell>
      );
    case "employment":
      return (
        <FormShell title={title} description="Salary and employment income for the tax year.">
          <Row>
            <Field label="Employer name"><Input placeholder="Company name" /></Field>
            <Field label="Annual gross salary (PKR)"><Input type="number" placeholder="0" /></Field>
          </Row>
          <Field label="Tax already deducted by employer (PKR)"><Input type="number" placeholder="0" /></Field>
        </FormShell>
      );
    case "documents":
      return (
        <FormShell title={title} description="Upload the documents required for your service.">
          <div className="rounded-xl border-2 border-dashed border-charcoal-800/15 p-8 text-center">
            <UploadCloud className="mx-auto h-8 w-8 text-emerald-600" />
            <p className="mt-3 text-sm font-medium text-charcoal-800">Drag files here or click to upload</p>
            <p className="mt-1 text-xs text-charcoal-800/50">PDF, JPG or PNG, up to 10 MB per file</p>
            <Button variant="outline" size="sm" className="mt-4" type="button">Browse Files</Button>
          </div>
        </FormShell>
      );
    case "review":
      return (
        <FormShell title={title} description="Review your information before you submit.">
          <div className="space-y-3 rounded-xl bg-ivory-300/50 p-4 text-sm">
            <SummaryRow label="Full name" value="Ahmed Khan" />
            <SummaryRow label="CNIC" value="XXXXX-XXXXXXX-X" />
            <SummaryRow label="Filer status" value="Filer" />
            <SummaryRow label="Documents uploaded" value="4 of 5" />
          </div>
        </FormShell>
      );
    case "declaration":
      return (
        <FormShell title={title} description="Confirm your declaration to submit your checklist.">
          <label className="flex items-start gap-3 rounded-xl border border-charcoal-800/10 p-4 text-sm text-charcoal-700">
            <input type="checkbox" className="mt-0.5 rounded border-charcoal-800/25 text-emerald-600 focus-ring" />
            I declare that the information provided is true and complete to the best of my knowledge.
          </label>
          <div className="mt-4 flex items-center gap-2 text-sm text-emerald-700">
            <CheckCircle2 className="h-4 w-4" /> Your consultant will review this submission within 1 business day.
          </div>
        </FormShell>
      );
    default:
      return (
        <FormShell title={title} description="Answer the questions below. Skip anything that doesn't apply to you.">
          <Field label="Do you have anything to report for this section?">
            <Select defaultValue=""><option value="" disabled>Select an option</option><option>Yes</option><option>No</option></Select>
          </Field>
          <Field label="Additional details"><Textarea rows={3} placeholder="Optional" /></Field>
        </FormShell>
      );
  }
}

function FormShell({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-lg font-bold text-charcoal-800">{title}</h2>
      <p className="mt-1 text-sm text-charcoal-700/70">{description}</p>
      <div className="mt-6 space-y-5">{children}</div>
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-2">{children}</div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      {children}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-charcoal-800/6 pb-2 last:border-0 last:pb-0">
      <span className="text-charcoal-800/50">{label}</span>
      <span className="font-medium text-charcoal-800">{value}</span>
    </div>
  );
}
