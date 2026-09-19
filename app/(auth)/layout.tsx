import { Logo } from "@/components/site/Logo";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 flex-col justify-between bg-charcoal-800 p-12 lg:flex">
        <Logo className="[&_span:last-child]:text-ivory-100" />
        <div>
          <p className="font-display text-3xl font-semibold leading-snug text-ivory-100">
            Expert Tax, Legal &amp; Financial Solutions for Pakistan
          </p>
          <p className="mt-4 max-w-sm text-sm text-ivory-300/60">
            Secure access to your applications, documents, and consultant — in one portal.
          </p>
        </div>
        <p className="text-xs text-ivory-300/40">&copy; 2026 ZA Law Associates. All rights reserved.</p>
      </div>

      <div className="flex w-full flex-col items-center justify-center bg-ivory-200 px-4 py-12 lg:w-1/2">
        <div className="mb-8 lg:hidden">
          <Link href="/"><Logo /></Link>
        </div>
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
