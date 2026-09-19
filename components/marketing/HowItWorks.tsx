const steps = [
  { title: "Create Account", description: "Register securely and create your client profile." },
  { title: "Complete Checklist", description: "Provide the required information through our guided checklist." },
  { title: "Consultant Review", description: "Our tax consultant reviews your information and documents." },
  { title: "Tax Filing Complete", description: "Your filing is processed and you receive updates through your portal." },
];

export function HowItWorks() {
  return (
    <section className="bg-ivory-300/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-charcoal-800">How it works</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <span className="font-display text-4xl font-bold text-emerald-500/25">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-base font-semibold text-charcoal-800">{s.title}</h3>
              <p className="mt-2 text-sm text-charcoal-700/75">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
