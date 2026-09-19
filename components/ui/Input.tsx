import { cn } from "@/lib/utils";
import { InputHTMLAttributes, LabelHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";

export function FieldLabel({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("mb-1.5 block text-sm font-medium text-charcoal-800", className)} {...props} />;
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { error?: string }>(
  ({ className, error, ...props }, ref) => (
    <div>
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border bg-ivory-100 px-4 py-2.5 text-sm text-charcoal-800 placeholder:text-charcoal-800/40 focus-ring transition-colors",
          error ? "border-red-400" : "border-charcoal-800/15 focus:border-emerald-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
);
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-charcoal-800/15 bg-ivory-100 px-4 py-2.5 text-sm text-charcoal-800 placeholder:text-charcoal-800/40 focus-ring focus:border-emerald-500",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export const Select = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-charcoal-800/15 bg-ivory-100 px-4 py-2.5 text-sm text-charcoal-800 focus-ring focus:border-emerald-500",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";
