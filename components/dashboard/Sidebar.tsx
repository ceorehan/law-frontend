"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/site/Logo";
import {
  LayoutDashboard, ListChecks, FolderOpen, MessageSquare,
  CalendarDays, Bell, UserCircle, LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/applications", label: "My Applications", icon: ListChecks },
  { href: "/dashboard/checklist", label: "Tax Checklist", icon: ListChecks },
  { href: "/dashboard/documents", label: "Documents", icon: FolderOpen },
  { href: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { href: "/dashboard/appointments", label: "Appointments", icon: CalendarDays },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/profile", label: "Profile", icon: UserCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-64 shrink-0 flex-col border-r border-charcoal-800/8 bg-ivory-100 lg:flex">
      <div className="px-6 py-6">
        <Logo />
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                active ? "bg-emerald-50 font-medium text-emerald-700" : "text-charcoal-700 hover:bg-charcoal-800/5"
              )}
            >
              <item.icon className="h-4.5 w-4.5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-charcoal-800/8 p-3">
        <Link href="/login" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-charcoal-700 hover:bg-charcoal-800/5">
          <LogOut className="h-4.5 w-4.5" /> Sign Out
        </Link>
      </div>
    </aside>
  );
}
