import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FieldLabel, Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Book a free consultation with ZA Law Associates.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-xl">
        <h1 className="font-display text-4xl font-bold text-charcoal-800">Book a free consultation</h1>
        <p className="mt-4 text-charcoal-700/80">
          Tell us a little about what you need help with and a consultant will get back to you
          within one business day.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <form className="space-y-5 lg:col-span-3">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input id="name" name="name" placeholder="Ahmed Khan" required />
            </div>
            <div>
              <FieldLabel htmlFor="phone">Phone number</FieldLabel>
              <Input id="phone" name="phone" type="tel" placeholder="03XX-XXXXXXX" required />
            </div>
          </div>
          <div>
            <FieldLabel htmlFor="email">Email address</FieldLabel>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <FieldLabel htmlFor="service">I need help with</FieldLabel>
            <Select id="service" name="service" defaultValue="">
              <option value="" disabled>Select a service</option>
              <option>Individual Tax Filing</option>
              <option>Corporate Tax & Compliance</option>
              <option>Legal Advisory</option>
              <option>Bookkeeping & Accounting</option>
              <option>Financial Planning & Advisory</option>
              <option>NTN / STRN & Registration</option>
            </Select>
          </div>
          <div>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea id="message" name="message" rows={4} placeholder="Briefly describe your situation" />
          </div>
          <Button type="submit" size="lg">Book Free Consultation</Button>
        </form>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-charcoal-800/8 bg-ivory-100 p-6">
            <h2 className="text-sm font-semibold text-charcoal-800">Contact details</h2>
            <ul className="mt-4 space-y-3 text-sm text-charcoal-700">
              <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-emerald-600" /> +92 21 0000 0000</li>
              <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-emerald-600" /> hello@zalawassociates.pk</li>
              <li className="flex items-center gap-2.5"><MessageCircle className="h-4 w-4 text-emerald-600" /> WhatsApp: +92 300 0000000</li>
              <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-emerald-600" /> Karachi, Pakistan</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-charcoal-800/8 bg-ivory-100 p-6">
            <h2 className="text-sm font-semibold text-charcoal-800">Office hours</h2>
            <p className="mt-2 text-sm text-charcoal-700/75">Monday – Saturday, 10:00 AM – 7:00 PM (PKT)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
