"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, ListChecks, Users, Settings, LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/applications", label: "Applications", icon: ListChecks },
  { href: "/admin/clients", label: "Clients", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden h-screen w-64 shrink-0 flex-col bg-charcoal-800 lg:flex">
      <div className="px-6 py-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-100 font-display text-sm font-bold text-charcoal-800">ZA</span>
          <div>
            <p className="text-sm font-semibold leading-tight text-ivory-100">Law Associates</p>
            <p className="text-[10px] uppercase tracking-wide text-ivory-300/50">Consultant Portal</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {items.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                active ? "bg-ivory-100/10 font-medium text-ivory-100" : "text-ivory-300/70 hover:bg-ivory-100/5"
              )}
            >
              <item.icon className="h-4.5 w-4.5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-3">
        <Link href="/admin/login" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ivory-300/70 hover:bg-ivory-100/5">
          <LogOut className="h-4.5 w-4.5" /> Sign Out
        </Link>
      </div>
    </aside>
  );
}
