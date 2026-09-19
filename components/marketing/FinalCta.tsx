import { LinkButton } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-emerald-500 px-8 py-16 text-center sm:px-16">
        <h2 className="font-display text-3xl font-bold text-ivory-100 sm:text-4xl">
          Ready to get your taxes sorted?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-emerald-50/90">
          Create your account and start your tax filing checklist today.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <LinkButton href="/register" variant="secondary" size="lg">
            Start Filing
          </LinkButton>
          <LinkButton href="/contact" variant="outline" size="lg" className="border-ivory-100/40 text-ivory-100 hover:border-ivory-100">
            Book Consultation
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
