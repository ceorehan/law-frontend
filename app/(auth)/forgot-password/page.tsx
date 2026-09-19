"use client";
import Link from "next/link";
import { useState } from "react";
import { FieldLabel, Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
        <h1 className="mt-4 font-display text-xl font-bold text-charcoal-800">Check your email</h1>
        <p className="mt-2 text-sm text-charcoal-700/70">
          If an account exists for that email, we&apos;ve sent a link to reset your password.
        </p>
        <Link href="/login" className="mt-6 inline-block text-sm font-medium text-emerald-600">
          Back to login
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-charcoal-800">Reset your password</h1>
      <p className="mt-2 text-sm text-charcoal-700/70">
        Enter your email and we&apos;ll send you a link to reset your password.
      </p>
      <form
        className="mt-8 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div>
          <FieldLabel htmlFor="email">Email address</FieldLabel>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <Button type="submit" className="w-full" size="lg">Send Reset Link</Button>
      </form>
      <p className="mt-6 text-center text-sm text-charcoal-700/70">
        <Link href="/login" className="font-medium text-emerald-600">Back to login</Link>
      </p>
    </div>
  );
}
