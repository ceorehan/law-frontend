import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  key: string;
  title: string;
}

export function Stepper({
  steps,
  currentIndex,
  completedKeys,
}: {
  steps: Step[];
  currentIndex: number;
  completedKeys: string[];
}) {
  return (
    <ol className="space-y-1">
      {steps.map((step, i) => {
        const done = completedKeys.includes(step.key);
        const current = i === currentIndex;
        return (
          <li key={step.key}>
            <div
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                current && "bg-emerald-50 text-emerald-700 font-medium",
                !current && done && "text-charcoal-700",
                !current && !done && "text-charcoal-800/45"
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs",
                  done ? "bg-emerald-500 text-white" : current ? "border-2 border-emerald-500 text-emerald-600" : "border border-charcoal-800/20"
                )}
              >
                {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </span>
              <span>{step.title}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
