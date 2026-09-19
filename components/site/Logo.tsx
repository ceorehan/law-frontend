import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-charcoal-800 font-display text-sm font-bold tracking-tight text-gold-100">
        ZA
      </span>
      <span className="font-display text-[15px] font-semibold leading-tight text-charcoal-800">
        Law Associates
      </span>
    </Link>
  );
}
