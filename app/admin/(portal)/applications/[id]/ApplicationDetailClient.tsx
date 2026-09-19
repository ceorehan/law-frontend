"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { StatusBadge, Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Textarea, Select, FieldLabel } from "@/components/ui/Input";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Modal } from "@/components/ui/Modal";
import { demoApplications, demoDocuments } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { FileText, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

export default function ApplicationDetailClient({ id }: { id: string }) {
  const application = demoApplications.find((a) => a.id === id);
  const [correctionOpen, setCorrectionOpen] = useState(false);

  if (!application) notFound();

  return (
    <>
      <Topbar title={`Application ${application.applicationNumber}`} />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-charcoal-800/50">{application.applicationNumber} &middot; Tax Year {application.taxYear}</p>
                  <h2 className="mt-0.5 text-lg font-semibold text-charcoal-800">{application.clientName}</h2>
                  <p className="text-sm text-charcoal-700/70">{application.service}</p>
                </div>
                <StatusBadge status={application.status} />
              </div>
              <div className="mt-5">
                <div className="mb-1.5 flex justify-between text-xs text-charcoal-800/50">
                  <span>Checklist progress</span><span>{application.progress}%</span>
                </div>
                <ProgressBar value={application.progress} />
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm font-semibold text-charcoal-800">Documents</h3>
              <div className="mt-4 divide-y divide-charcoal-800/6">
                {demoDocuments.map((d) => (
                  <div key={d.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4.5 w-4.5 text-emerald-600" />
                      <div>
                        <p className="text-sm font-medium text-charcoal-800">{d.name}</p>
                        <p className="text-xs text-charcoal-800/50">{formatDate(d.uploadedDate)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge tone={d.status === "Approved" ? "success" : d.status === "ReplacementRequired" ? "danger" : "warning"}>
                        {d.status.replace(/([A-Z])/g, " $1").trim()}
                      </Badge>
                      <button className="rounded-lg p-1.5 text-emerald-600 hover:bg-emerald-50" aria-label="Approve document">
                        <CheckCircle2 className="h-4 w-4" />
                      </button>
                      <button className="rounded-lg p-1.5 text-red-600 hover:bg-red-50" aria-label="Reject document">
                        <XCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm font-semibold text-charcoal-800">Consultant notes</h3>
              <Textarea rows={4} placeholder="Add internal notes about this application..." className="mt-3" />
              <Button size="sm" className="mt-3">Save Note</Button>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-charcoal-800">Update status</h3>
              <div className="mt-3">
                <FieldLabel htmlFor="status">Application status</FieldLabel>
                <Select id="status" defaultValue={application.status}>
                  <option value="New">New</option>
                  <option value="InProgress">In Progress</option>
                  <option value="DocumentsUnderReview">Documents Under Review</option>
                  <option value="ConsultantReviewing">Consultant Reviewing</option>
                  <option value="CorrectionRequired">Correction Required</option>
                  <option value="ReadyForFiling">Ready for Filing</option>
                  <option value="Filed">Filed</option>
                  <option value="Completed">Completed</option>
                </Select>
              </div>
              <Button className="mt-4 w-full">Update Status</Button>
              <Button
                variant="outline"
                className="mt-2.5 w-full border-red-200 text-red-600 hover:border-red-400"
                onClick={() => setCorrectionOpen(true)}
              >
                <AlertTriangle className="h-4 w-4" /> Request Correction
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm font-semibold text-charcoal-800">Client details</h3>
              <dl className="mt-3 space-y-2.5 text-sm">
                <div className="flex justify-between"><dt className="text-charcoal-800/50">CNIC</dt><dd className="text-charcoal-800">{application.cnic}</dd></div>
                <div className="flex justify-between"><dt className="text-charcoal-800/50">Consultant</dt><dd className="text-charcoal-800">{application.assignedConsultant ?? "Unassigned"}</dd></div>
                <div className="flex justify-between"><dt className="text-charcoal-800/50">Submitted</dt><dd className="text-charcoal-800">{application.submittedDate ? formatDate(application.submittedDate) : "—"}</dd></div>
              </dl>
              <Button variant="ghost" size="sm" className="mt-4 w-full">Message Client</Button>
            </Card>
          </div>
        </div>
      </div>

      <Modal
        open={correctionOpen}
        onClose={() => setCorrectionOpen(false)}
        title="Request a correction"
        footer={
          <>
            <Button variant="outline" onClick={() => setCorrectionOpen(false)}>Cancel</Button>
            <Button onClick={() => setCorrectionOpen(false)}>Send Request</Button>
          </>
        }
      >
        <FieldLabel htmlFor="correction-note">What needs to be corrected?</FieldLabel>
        <Textarea id="correction-note" rows={4} placeholder="Describe what the client needs to fix or re-upload..." />
      </Modal>
    </>
  );
}
