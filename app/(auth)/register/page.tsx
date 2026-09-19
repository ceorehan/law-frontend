"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FieldLabel, Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { api } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const password = form.get("password");
    const confirm = form.get("confirmPassword");
    if (password !== confirm) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
    try {
      const res = await api.post<{ token: string }>("/auth/register", {
        fullName: form.get("fullName"),
        cnic: form.get("cnic"),
        phone: form.get("phone"),
        email: form.get("email"),
        password,
      });
      localStorage.setItem("za_token", res.token);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-charcoal-800">
        Create Your ZA Law Associates Client Account
      </h1>
      <p className="mt-2 text-sm text-charcoal-700/70">It takes less than two minutes.</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <div>
          <FieldLabel htmlFor="fullName">Full name</FieldLabel>
          <Input id="fullName" name="fullName" placeholder="Ahmed Khan" required />
        </div>
        <div>
          <FieldLabel htmlFor="cnic">CNIC number</FieldLabel>
          <Input id="cnic" name="cnic" placeholder="XXXXX-XXXXXXX-X" required />
        </div>
        <div>
          <FieldLabel htmlFor="phone">Phone number</FieldLabel>
          <Input id="phone" name="phone" type="tel" placeholder="03XX-XXXXXXX" required />
        </div>
        <div>
          <FieldLabel htmlFor="email">Email address</FieldLabel>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" name="password" type="password" placeholder="At least 8 characters" minLength={8} required />
        </div>
        <div>
          <FieldLabel htmlFor="confirmPassword">Confirm password</FieldLabel>
          <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Re-enter your password" required />
        </div>

        <label className="flex items-start gap-2.5 text-xs text-charcoal-700/70">
          <input type="checkbox" required className="mt-0.5 rounded border-charcoal-800/25 text-emerald-600 focus-ring" />
          I agree to the <Link href="/terms" className="underline">Terms &amp; Conditions</Link> and{" "}
          <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
        </label>

        {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

        <Button type="submit" className="w-full" size="lg" disabled={loading}>
          {loading ? "Creating account..." : "Create Account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-charcoal-700/70">
        Already have an account? <Link href="/login" className="font-medium text-emerald-600">Sign in</Link>
      </p>
    </div>
  );
}
