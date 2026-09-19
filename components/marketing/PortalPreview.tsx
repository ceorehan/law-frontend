import { LinkButton } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/Badge";
import { demoApplication } from "@/lib/mock-data";
import { FileCheck2, MessageSquare, Clock } from "lucide-react";

export function PortalPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-charcoal-800">
            Everything you need in one secure portal
          </h2>
          <p className="mt-4 text-charcoal-700/80">
            Track your tax year, complete your checklist, upload documents and message your
            consultant — all from the ZA Law Associates Client Portal.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-charcoal-700">
            <li className="flex items-center gap-2.5"><FileCheck2 className="h-4 w-4 text-emerald-600" /> Checklist &amp; document tracking</li>
            <li className="flex items-center gap-2.5"><MessageSquare className="h-4 w-4 text-emerald-600" /> Direct messages with your consultant</li>
            <li className="flex items-center gap-2.5"><Clock className="h-4 w-4 text-emerald-600" /> Real-time application status</li>
          </ul>
          <LinkButton href="/login" className="mt-8">
            Login to ZA Law Associates — Client Portal
          </LinkButton>
        </div>

        <div className="rounded-2xl border border-charcoal-800/8 bg-ivory-100 p-7 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-charcoal-800/50">Tax Filing {demoApplication.taxYear}</p>
              <p className="text-sm font-semibold text-charcoal-800">{demoApplication.applicationNumber}</p>
            </div>
            <StatusBadge status={demoApplication.status} />
          </div>
          <div className="mt-5">
            <div className="mb-1.5 flex justify-between text-xs text-charcoal-800/60">
              <span>Progress</span><span>{demoApplication.progress}%</span>
            </div>
            <ProgressBar value={demoApplication.progress} />
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div><dt className="text-charcoal-800/50">Checklist</dt><dd className="font-medium text-charcoal-800">18 / 22 Completed</dd></div>
            <div><dt className="text-charcoal-800/50">Pending</dt><dd className="font-medium text-charcoal-800">4 Items</dd></div>
            <div><dt className="text-charcoal-800/50">Documents</dt><dd className="font-medium text-charcoal-800">8 Uploaded</dd></div>
            <div><dt className="text-charcoal-800/50">Consultant</dt><dd className="font-medium text-charcoal-800">Reviewing application</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
