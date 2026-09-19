const testimonials = [
  { quote: "The checklist made it simple to know exactly what I needed to submit. Filing took a fraction of the time I expected.", name: "Business Owner", location: "Karachi" },
  { quote: "I could upload documents from my phone between client calls. The portal kept me updated at every step.", name: "Freelancer", location: "Lahore" },
  { quote: "My consultant explained things in plain language, not tax jargon. That made a real difference.", name: "Salaried Professional", location: "Islamabad" },
  { quote: "Corporate compliance used to eat up our finance team's time. This portal keeps everything organized in one place.", name: "Corporate Client", location: "Pakistan" },
];

export function Testimonials() {
  return (
    <section className="bg-charcoal-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-ivory-100">Trusted by clients across Pakistan</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name + t.location} className="rounded-2xl border border-ivory-100/10 bg-charcoal-700 p-6">
              <blockquote className="text-sm leading-relaxed text-ivory-200/85">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-ivory-300/60">
                {t.name} &middot; {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
