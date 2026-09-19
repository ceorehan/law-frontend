import { Bell, Menu } from "lucide-react";

export function Topbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-charcoal-800/8 bg-ivory-200/90 px-4 backdrop-blur sm:px-6">
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 text-charcoal-800 lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-base font-semibold text-charcoal-800">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 text-charcoal-700 hover:bg-charcoal-800/5" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-emerald-500" />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-sm font-medium text-emerald-700">
          AK
        </div>
      </div>
    </header>
  );
}
