import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "gold";

const toneClasses: Record<Tone, string> = {
  neutral: "bg-charcoal-800/6 text-charcoal-700",
  success: "bg-emerald-50 text-emerald-600",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-red-50 text-red-700",
  info: "bg-sky-50 text-sky-700",
  gold: "bg-gold-100 text-gold-500",
};

export function Badge({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        toneClasses[tone]
      )}
    >
      {children}
    </span>
  );
}

const statusTone: Record<string, Tone> = {
  New: "neutral",
  InProgress: "info",
  Submitted: "info",
  DocumentsUnderReview: "warning",
  ConsultantReviewing: "info",
  CorrectionRequired: "danger",
  ReadyForFiling: "gold",
  Filed: "success",
  Completed: "success",
  Uploaded: "info",
  UnderReview: "warning",
  Approved: "success",
  Rejected: "danger",
  ReplacementRequired: "danger",
};

const statusLabel: Record<string, string> = {
  New: "New",
  InProgress: "In Progress",
  Submitted: "Submitted",
  DocumentsUnderReview: "Documents Under Review",
  ConsultantReviewing: "Consultant Reviewing",
  CorrectionRequired: "Correction Required",
  ReadyForFiling: "Ready for Filing",
  Filed: "Filed",
  Completed: "Completed",
  Uploaded: "Uploaded",
  UnderReview: "Under Review",
  Approved: "Approved",
  Rejected: "Rejected",
  ReplacementRequired: "Replacement Required",
};

export function StatusBadge({ status }: { status: string }) {
  return <Badge tone={statusTone[status] ?? "neutral"}>{statusLabel[status] ?? status}</Badge>;
}
