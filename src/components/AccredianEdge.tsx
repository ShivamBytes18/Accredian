import { Check, X } from "lucide-react";
import {
  COURSE_SEGMENTATION,
  EDGE_PROGRAMS,
  WHO_SHOULD_JOIN,
} from "@/data/content";
import { EDGE_ICON_MAP } from "./icon-map";

const SEGMENT_ACCENTS = [
  "from-orange-100 to-orange-50",
  "from-violet-100 to-violet-50",
  "from-sky-100 to-sky-50",
  "from-emerald-100 to-emerald-50",
];

export default function AccredianEdge() {
  return (
    <section id="accredian-edge" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-sm font-semibold uppercase text-brand-blue">
            Specialized Programs
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Designed to Fuel Innovation
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EDGE_PROGRAMS.map((program) => {
            const Icon = EDGE_ICON_MAP[program.icon];
            return (
              <div
                key={program.title}
                className="rounded-2xl border border-slate-200 p-7 text-center transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-tint text-brand-blue">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-brand-ink">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-brand-slate">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tailored Course Segmentation */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Tailored <span className="text-brand-blue">Course Segmentation</span>
          </h2>
          <p className="mt-3 text-lg text-brand-slate">
            Explore <span className="text-brand-blue">Custom-fit Courses</span> Designed
            to Address Every Professional Focus
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSE_SEGMENTATION.map((segment, index) => (
            <div
              key={segment.title}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <div
                className={`flex h-40 items-center justify-center bg-gradient-to-br ${SEGMENT_ACCENTS[index % SEGMENT_ACCENTS.length]}`}
              >
                <span className="text-4xl font-extrabold text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-brand-blue">
                  {segment.title}
                </h3>
                <p className="mt-2 text-sm text-brand-slate">
                  {segment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Who Should Join */}
        <div className="mt-24 grid gap-10 rounded-3xl bg-brand-blue px-6 py-12 text-white sm:px-10 lg:grid-cols-[1fr_1.4fr] lg:px-14 lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Who Should Join?
            </p>
            <h3 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Strategic Skill Enhancement
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {WHO_SHOULD_JOIN.map((audience) => (
              <div key={audience.title}>
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg border-2 ${
                    audience.included
                      ? "border-white/80 bg-white/10"
                      : "border-white/40 bg-transparent"
                  }`}
                >
                  {audience.included ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <X className="h-5 w-5 text-blue-200" />
                  )}
                </div>
                <h4 className="text-lg font-bold">{audience.title}</h4>
                <p className="mt-1 text-sm text-blue-100">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
