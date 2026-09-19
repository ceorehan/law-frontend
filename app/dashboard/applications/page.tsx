import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { demoApplications } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export default function ApplicationsPage() {
  return (
    <>
      <Topbar title="My Applications" />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          {demoApplications.map((a) => (
            <Card key={a.id} className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-charcoal-800/50">{a.applicationNumber} &middot; Tax Year {a.taxYear}</p>
                  <p className="mt-0.5 text-sm font-semibold text-charcoal-800">{a.service}</p>
                </div>
                <StatusBadge status={a.status} />
              </div>
              <div className="mt-4">
                <div className="mb-1 flex justify-between text-xs text-charcoal-800/50">
                  <span>Progress</span><span>{a.progress}%</span>
                </div>
                <ProgressBar value={a.progress} />
              </div>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-charcoal-700/60">
                {a.assignedConsultant && <span>Consultant: {a.assignedConsultant}</span>}
                {a.submittedDate && <span>Submitted: {formatDate(a.submittedDate)}</span>}
                <span>Last updated: {formatDate(a.lastUpdated)}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
