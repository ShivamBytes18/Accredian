import { CheckCircle2, Laptop, TrendingUp, Users2 } from "lucide-react";
import { HERO } from "@/data/content";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="grid items-center gap-10 rounded-3xl bg-brand-tint px-6 py-12 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:px-14 lg:py-16">
          <div className="animate-fade-up">
            <p className="section-eyebrow mb-4 text-sm font-semibold uppercase text-brand-blue">
              {HERO.eyebrow}
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-ink sm:text-5xl">
              {HERO.titleLine1}{" "}
              <span className="text-brand-blue">{HERO.titleAccent1}</span>
              <br />
              {HERO.titleLine2}{" "}
              <span className="text-brand-blue">{HERO.titleAccent2}</span>
            </h1>

            <p className="mt-6 max-w-md text-lg text-brand-slate">
              {HERO.subtitle}
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {HERO.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2 text-[15px] font-medium text-brand-ink"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                  {bullet}
                </li>
              ))}
            </ul>

            <a
              href="#enquire"
              className="mt-9 inline-block rounded-xl bg-brand-blue px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-200 transition-colors hover:bg-brand-blue-dark"
            >
              {HERO.cta}
            </a>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex">
            <div className="absolute inset-6 rounded-[40%] bg-gradient-to-br from-blue-200 via-blue-100 to-white" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-5 rounded-3xl bg-white/80 px-10 py-10 shadow-xl shadow-blue-100 backdrop-blur">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue text-white">
                  <Laptop className="h-8 w-8" />
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <Users2 className="h-6 w-6" />
                  </div>
                </div>
                <p className="max-w-[12rem] text-center text-sm font-medium text-brand-slate">
                  Cohorts trained across tech &amp; non-tech enterprise teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
