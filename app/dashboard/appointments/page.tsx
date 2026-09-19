import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CalendarDays, Video, Plus } from "lucide-react";

const appointments = [
  { title: "Tax filing review call", with: "Sara Ahmed", date: "22 Sep 2026", time: "3:00 PM", type: "Video Call" },
];

export default function AppointmentsPage() {
  return (
    <>
      <Topbar title="Appointments" />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-charcoal-700/70">Manage your consultation calls with your consultant.</p>
          <Button size="sm"><Plus className="h-4 w-4" /> Book Appointment</Button>
        </div>

        <div className="space-y-4">
          {appointments.map((a) => (
            <Card key={a.title} className="flex flex-wrap items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                  <CalendarDays className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal-800">{a.title}</p>
                  <p className="text-xs text-charcoal-800/50">with {a.with} &middot; {a.date} at {a.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs text-charcoal-700/70"><Video className="h-3.5 w-3.5" /> {a.type}</span>
                <Button variant="outline" size="sm">Reschedule</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
