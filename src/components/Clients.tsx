import { CLIENT_INDUSTRIES, CLIENT_LOGOS } from "@/data/content";

export default function Clients() {
  return (
    <section id="clients" className="scroll-mt-20 bg-brand-tint-2 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Trusted Across <span className="text-brand-blue">Industries</span>
          </h2>
          <p className="mt-3 text-lg text-brand-slate">
            We partner with enterprise teams across every major sector
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENT_INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-blue/40 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-brand-ink">{industry.name}</h3>
              <p className="mt-2 text-sm text-brand-slate">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-white p-8 sm:p-10">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-brand-slate">
            Trusted by teams at
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {CLIENT_LOGOS.map((name) => (
              <div
                key={name}
                className="flex h-16 items-center justify-center rounded-lg border border-slate-100 px-4 text-center text-sm font-bold text-slate-500"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
