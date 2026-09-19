import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-charcoal-800/8 bg-ivory-100 shadow-soft",
        className
      )}
      {...props}
    />
  );
}
