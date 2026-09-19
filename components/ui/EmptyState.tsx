import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-charcoal-800/15 px-6 py-16 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
        <Icon className="h-6 w-6 text-emerald-600" />
      </div>
      <h3 className="text-base font-semibold text-charcoal-800">{title}</h3>
      <p className="mt-1 max-w-xs text-sm text-charcoal-800/60">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
