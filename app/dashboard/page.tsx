import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { demoApplication, demoApplications } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { FileCheck2, Clock, MessageSquare, CalendarDays } from "lucide-react";

const stats = [
  { label: "Active Applications", value: demoApplications.filter((a) => a.status !== "Completed").length, icon: FileCheck2 },
  { label: "Pending Checklist Items", value: 4, icon: Clock },
  { label: "Unread Messages", value: 2, icon: MessageSquare },
  { label: "Upcoming Appointments", value: 1, icon: CalendarDays },
];

export default function DashboardOverviewPage() {
  return (
    <>
      <Topbar title="Overview" />
      <div className="space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-display text-xl font-bold text-charcoal-800">Welcome back, Ahmed</h2>
          <p className="mt-1 text-sm text-charcoal-700/70">Here&apos;s where your tax filing stands today.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="p-5">
              <s.icon className="h-5 w-5 text-emerald-600" />
              <p className="mt-3 text-2xl font-semibold text-charcoal-800">{s.value}</p>
              <p className="mt-1 text-xs text-charcoal-700/60">{s.label}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs text-charcoal-800/50">Tax Filing {demoApplication.taxYear}</p>
              <p className="text-base font-semibold text-charcoal-800">{demoApplication.applicationNumber} &middot; {demoApplication.service}</p>
            </div>
            <StatusBadge status={demoApplication.status} />
          </div>
          <div className="mt-5">
            <div className="mb-1.5 flex justify-between text-xs text-charcoal-800/60">
              <span>Progress</span><span>{demoApplication.progress}%</span>
            </div>
            <ProgressBar value={demoApplication.progress} />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <LinkButton href="/dashboard/checklist" size="sm">Continue Checklist</LinkButton>
            <LinkButton href="/dashboard/documents" variant="outline" size="sm">Upload Documents</LinkButton>
            <LinkButton href="/dashboard/messages" variant="ghost" size="sm">Message Consultant</LinkButton>
          </div>
        </Card>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-charcoal-800">Recent applications</h3>
            <LinkButton href="/dashboard/applications" variant="ghost" size="sm">View all</LinkButton>
          </div>
          <Card className="overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-charcoal-800/8 text-xs text-charcoal-800/50">
                <tr>
                  <th className="px-5 py-3 font-medium">Application</th>
                  <th className="px-5 py-3 font-medium">Service</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Last updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-800/6">
                {demoApplications.map((a) => (
                  <tr key={a.id}>
                    <td className="px-5 py-3.5 font-medium text-charcoal-800">{a.applicationNumber}</td>
                    <td className="px-5 py-3.5 text-charcoal-700">{a.service}</td>
                    <td className="px-5 py-3.5"><StatusBadge status={a.status} /></td>
                    <td className="px-5 py-3.5 text-charcoal-700/70">{formatDate(a.lastUpdated)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
}
