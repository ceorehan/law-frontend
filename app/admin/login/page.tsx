"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FieldLabel, Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/site/Logo";
import { api } from "@/lib/api";

export default function ConsultantLoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    try {
      const res = await api.post<{ token: string }>("/auth/consultant-login", {
        email: form.get("email"),
        password: form.get("password"),
      });
      localStorage.setItem("za_admin_token", res.token);
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in. Check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal-800 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-ivory-100 p-8 shadow-card">
        <Logo />
        <h1 className="mt-6 font-display text-xl font-bold text-charcoal-800">
          Login — ZA Law Associates Consultant Portal
        </h1>
        <p className="mt-1.5 text-sm text-charcoal-700/70">Restricted access for consultants and staff.</p>

        <form onSubmit={onSubmit} className="mt-7 space-y-5">
          <div>
            <FieldLabel htmlFor="email">Work email</FieldLabel>
            <Input id="email" name="email" type="email" placeholder="you@zalawassociates.pk" required />
          </div>
          <div>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" name="password" type="password" placeholder="••••••••" required />
          </div>
          {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-charcoal-800/40">
          Not a consultant? <Link href="/login" className="font-medium text-charcoal-700">Go to Client Portal</Link>
        </p>
      </div>
    </div>
  );
}
