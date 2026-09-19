import { ShieldCheck, Clock, Users, Lock, GraduationCap, Scale } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "FBR Registered" },
  { icon: Clock, label: "10+ Years Experience" },
  { icon: Users, label: "500+ Clients" },
  { icon: Lock, label: "Secure & Confidential" },
  { icon: GraduationCap, label: "Professional Tax Advisors" },
  { icon: Scale, label: "Licensed Legal Advisory" },
];

export function TrustSection() {
  return (
    <section className="border-y border-charcoal-800/8 bg-ivory-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2.5 text-center">
              <Icon className="h-6 w-6 text-emerald-600" />
              <p className="text-xs font-medium text-charcoal-700">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
