import { Topbar } from "@/components/dashboard/Topbar";
import { Card } from "@/components/ui/Card";
import { FileCheck2, MessageSquare, AlertTriangle, CalendarClock } from "lucide-react";

const notifications = [
  { icon: MessageSquare, text: "Sara Ahmed sent you a message about your bank statement.", time: "10 minutes ago" },
  { icon: AlertTriangle, text: "Correction requested on Bank_Statement_Jul2026.pdf.", time: "2 hours ago" },
  { icon: FileCheck2, text: "Your CNIC documents were approved.", time: "Yesterday" },
  { icon: CalendarClock, text: "Appointment confirmed for 22 Sep 2026, 3:00 PM.", time: "2 days ago" },
];

export default function NotificationsPage() {
  return (
    <>
      <Topbar title="Notifications" />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <Card className="divide-y divide-charcoal-800/6">
          {notifications.map((n, i) => (
            <div key={i} className="flex items-start gap-3.5 px-5 py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                <n.icon className="h-4.5 w-4.5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-charcoal-800">{n.text}</p>
                <p className="mt-0.5 text-xs text-charcoal-800/45">{n.time}</p>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}
