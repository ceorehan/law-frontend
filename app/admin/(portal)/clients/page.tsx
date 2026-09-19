import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const clients = [
  { name: "Ahmed Khan", cnic: "42101-XXXXXXX-X", applications: 1, joined: "2026-01-14", status: "Active" },
  { name: "Mehwish Raza", cnic: "35202-XXXXXXX-X", applications: 2, joined: "2026-02-02", status: "Active" },
  { name: "Usman Tariq", cnic: "61101-XXXXXXX-X", applications: 1, joined: "2025-11-19", status: "Active" },
  { name: "Zainab Sheikh", cnic: "42301-XXXXXXX-X", applications: 1, joined: "2026-09-01", status: "New" },
];

export default function ClientsPage() {
  return (
    <>
      <Topbar title="Clients" />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-charcoal-800/8 text-xs text-charcoal-800/50">
              <tr>
                <th className="px-5 py-3 font-medium">Client</th>
                <th className="px-5 py-3 font-medium">CNIC</th>
                <th className="px-5 py-3 font-medium">Applications</th>
                <th className="px-5 py-3 font-medium">Joined</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800/6">
              {clients.map((c) => (
                <tr key={c.cnic} className="hover:bg-charcoal-800/[0.02]">
                  <td className="px-5 py-3.5 font-medium text-charcoal-800">{c.name}</td>
                  <td className="px-5 py-3.5 text-charcoal-700">{c.cnic}</td>
                  <td className="px-5 py-3.5 text-charcoal-700">{c.applications}</td>
                  <td className="px-5 py-3.5 text-charcoal-700/70">{c.joined}</td>
                  <td className="px-5 py-3.5"><Badge tone={c.status === "New" ? "info" : "success"}>{c.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
