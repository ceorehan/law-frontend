"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FieldLabel, Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { api } from "@/lib/api";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    try {
      const res = await api.post<{ token: string }>("/auth/login", {
        email: form.get("email"),
        password: form.get("password"),
      });
      localStorage.setItem("za_token", res.token);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in. Check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-charcoal-800">
        Login — ZA Law Associates Client Portal
      </h1>
      <p className="mt-2 text-sm text-charcoal-700/70">Sign in to continue your tax filing.</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <div>
          <FieldLabel htmlFor="email">Email address</FieldLabel>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <div className="relative">
            <Input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-800/40"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-charcoal-700/80">
            <input type="checkbox" name="remember" className="rounded border-charcoal-800/25 text-emerald-600 focus-ring" />
            Remember me
          </label>
          <Link href="/forgot-password" className="font-medium text-emerald-600">Forgot password?</Link>
        </div>

        {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

        <Button type="submit" className="w-full" size="lg" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-charcoal-700/70">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium text-emerald-600">Create one</Link>
      </p>
      <p className="mt-2 text-center text-xs text-charcoal-800/40">
        Tax consultant?{" "}
        <Link href="/admin/login" className="font-medium text-charcoal-700">
          Login to Consultant Portal
        </Link>
      </p>
    </div>
  );
}
