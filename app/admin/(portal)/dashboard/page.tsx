import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import { demoApplications } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { FileCheck2, Clock, AlertTriangle, Users } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Total Applications", value: 128, icon: FileCheck2 },
  { label: "Pending Review", value: 14, icon: Clock },
  { label: "Corrections Needed", value: 5, icon: AlertTriangle },
  { label: "Active Clients", value: 92, icon: Users },
];

export default function AdminDashboardPage() {
  return (
    <>
      <Topbar title="Dashboard" />
      <div className="space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="p-5">
              <s.icon className="h-5 w-5 text-emerald-600" />
              <p className="mt-3 text-2xl font-semibold text-charcoal-800">{s.value}</p>
              <p className="mt-1 text-xs text-charcoal-700/60">{s.label}</p>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-charcoal-800">Applications needing attention</h3>
          <Card className="overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-charcoal-800/8 text-xs text-charcoal-800/50">
                <tr>
                  <th className="px-5 py-3 font-medium">Application</th>
                  <th className="px-5 py-3 font-medium">Client</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-800/6">
                {demoApplications.map((a) => (
                  <tr key={a.id} className="cursor-pointer hover:bg-charcoal-800/[0.02]">
                    <td className="px-5 py-3.5">
                      <Link href={`/admin/applications/${a.id}`} className="font-medium text-emerald-600">{a.applicationNumber}</Link>
                    </td>
                    <td className="px-5 py-3.5 text-charcoal-700">{a.clientName}</td>
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
