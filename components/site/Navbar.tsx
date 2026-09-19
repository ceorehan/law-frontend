"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LinkButton } from "@/components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal-800/8 bg-ivory-200/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-charcoal-700 transition-colors hover:text-emerald-600"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LinkButton href="/login" variant="ghost" size="sm">
            Login
          </LinkButton>
          <LinkButton href="/register" variant="primary" size="sm">
            Get Started
          </LinkButton>
        </div>

        <button
          className="rounded-lg p-2 text-charcoal-800 md:hidden focus-ring"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal-800/8 bg-ivory-200 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-1.5 text-sm text-charcoal-700" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-3">
              <LinkButton href="/login" variant="outline" size="sm" className="flex-1">
                Login
              </LinkButton>
              <LinkButton href="/register" variant="primary" size="sm" className="flex-1">
                Get Started
              </LinkButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
