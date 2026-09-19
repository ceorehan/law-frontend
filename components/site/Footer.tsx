import Link from "next/link";
import { Logo } from "./Logo";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/individual-tax-filing", label: "Individual Tax Filing" },
      { href: "/services/corporate-tax-compliance", label: "Corporate Tax & Compliance" },
      { href: "/services/legal-advisory", label: "Legal Advisory" },
      { href: "/services/bookkeeping-accounting", label: "Bookkeeping & Accounting" },
    ],
  },
  {
    title: "Client Portal",
    links: [
      { href: "/login", label: "Login" },
      { href: "/register", label: "Create Account" },
      { href: "/dashboard/checklist", label: "Start Checklist" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal-800/8 bg-charcoal-800 text-ivory-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Logo className="[&_span:last-child]:text-ivory-100" />
            <p className="mt-4 max-w-xs text-sm text-ivory-300/70">
              Expert Tax, Legal &amp; Financial Solutions for Pakistan.
            </p>
            <div className="mt-5 space-y-2 text-sm text-ivory-300/70">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Karachi, Pakistan</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +92 21 0000 0000</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@zalawassociates.pk</div>
              <div className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp Us</div>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ivory-100">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ivory-300/70 hover:text-emerald-400">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ivory-100/10 pt-6 text-xs text-ivory-300/50 sm:flex-row">
          <p>&copy; 2026 ZA Law Associates. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-ivory-100">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ivory-100">Terms &amp; Conditions</Link>
            <Link href="/disclaimer" className="hover:text-ivory-100">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
