import { BookOpenCheck, LineChart, MonitorPlay, Settings2, Wrench } from "lucide-react";
import { CAT_FRAMEWORK, DELIVER_RESULTS } from "@/data/content";

const CAT_ICONS = [BookOpenCheck, Settings2, Wrench];
const RESULT_ICONS = [LineChart, MonitorPlay, Wrench];

export default function CatFramework() {
  return (
    <section id="cat" className="scroll-mt-20 bg-brand-tint-2 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            The <span className="text-brand-blue">CAT Framework</span>
          </h2>
          <p className="mt-3 text-lg text-brand-slate">
            Our Proven Approach to <span className="text-brand-blue">Learning Excellence</span>
          </p>
        </div>

        <div className="relative mt-16">
          <svg
            className="absolute left-0 top-14 hidden w-full sm:block"
            viewBox="0 0 900 120"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 60 60 C 60 0, 220 0, 220 60 C 220 120, 380 120, 380 60 C 380 0, 520 0, 520 60 C 520 120, 680 120, 680 60 C 680 0, 840 0, 840 60"
              stroke="#bfdbfe"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-3">
            {CAT_FRAMEWORK.map((item, index) => {
              const Icon = CAT_ICONS[index];
              return (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border-4 border-brand-tint bg-white text-brand-blue shadow-md">
                    <Icon className="h-9 w-9" />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-ink">
                    {item.step}
                  </h3>
                  <p className="mt-2 max-w-[15rem] text-sm text-brand-slate">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            How We <span className="text-brand-blue">Deliver Results</span> That Matter?
          </h2>
          <p className="mt-3 text-lg text-brand-slate">
            A Structured Three-Step Approach to{" "}
            <span className="text-brand-blue">Skill Development</span>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {DELIVER_RESULTS.map((item, index) => {
            const Icon = RESULT_ICONS[index];
            return (
              <div
                key={item.number}
                className="relative rounded-2xl bg-white p-7 pt-10 shadow-sm ring-1 ring-slate-100"
              >
                <span className="absolute -top-4 left-7 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                  {item.number}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-slate">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
