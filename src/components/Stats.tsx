import { PARTNER_LOGOS, STATS } from "@/data/content";

export default function Stats() {
  return (
    <section id="stats" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Our <span className="text-brand-blue">Track Record</span>
          </h2>
          <p className="mt-3 text-lg text-brand-slate">
            The Numbers Behind <span className="text-brand-blue">Our Success</span>
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-4 text-center">
              <span className="mb-5 inline-flex items-center justify-center rounded-full bg-brand-tint px-6 py-2.5 text-2xl font-extrabold text-brand-blue">
                {stat.value}
              </span>
              <p className="max-w-[16rem] text-[15px] font-medium text-brand-ink">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Our Proven <span className="text-brand-blue">Partnerships</span>
          </h2>
          <p className="mt-3 text-lg text-brand-slate">
            Successful Collaborations With the{" "}
            <span className="text-brand-blue">Industry&rsquo;s Best</span>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNER_LOGOS.map((name) => (
            <div
              key={name}
              className="flex h-16 items-center justify-center rounded-lg border border-slate-100 px-4 text-center text-sm font-bold text-slate-500 grayscale transition hover:grayscale-0"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
