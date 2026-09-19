"use client";
import { useState } from "react";
import Link from "next/link";
import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import { Input, Select } from "@/components/ui/Input";
import { demoApplications } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { Search } from "lucide-react";

export default function AdminApplicationsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const filtered = demoApplications.filter((a) => {
    const matchesQuery =
      a.clientName.toLowerCase().includes(query.toLowerCase()) ||
      a.applicationNumber.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "all" || a.status === status;
    return matchesQuery && matchesStatus;
  });

  return (
    <>
      <Topbar title="Applications" />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap gap-3">
          <div className="relative max-w-xs flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-800/40" />
            <Input placeholder="Search client or application #" className="pl-10" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <Select className="w-auto" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="all">All statuses</option>
            <option value="New">New</option>
            <option value="ConsultantReviewing">Consultant Reviewing</option>
            <option value="CorrectionRequired">Correction Required</option>
            <option value="Completed">Completed</option>
          </Select>
        </div>

        <Card className="overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-charcoal-800/8 text-xs text-charcoal-800/50">
              <tr>
                <th className="px-5 py-3 font-medium">Application</th>
                <th className="px-5 py-3 font-medium">Client</th>
                <th className="px-5 py-3 font-medium">Service</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Consultant</th>
                <th className="px-5 py-3 font-medium">Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800/6">
              {filtered.map((a) => (
                <tr key={a.id} className="hover:bg-charcoal-800/[0.02]">
                  <td className="px-5 py-3.5">
                    <Link href={`/admin/applications/${a.id}`} className="font-medium text-emerald-600">{a.applicationNumber}</Link>
                  </td>
                  <td className="px-5 py-3.5 text-charcoal-700">{a.clientName}</td>
                  <td className="px-5 py-3.5 text-charcoal-700">{a.service}</td>
                  <td className="px-5 py-3.5"><StatusBadge status={a.status} /></td>
                  <td className="px-5 py-3.5 text-charcoal-700/70">{a.assignedConsultant ?? "Unassigned"}</td>
                  <td className="px-5 py-3.5 text-charcoal-700/70">{formatDate(a.lastUpdated)}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="px-5 py-10 text-center text-charcoal-800/50">No applications match your filters.</td></tr>
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
