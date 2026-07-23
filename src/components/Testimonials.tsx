import { Headset, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            What Our <span className="text-brand-blue">Clients Say</span>
          </h2>
          <p className="mt-3 text-lg text-brand-slate">
            Real feedback from the teams we&rsquo;ve trained
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-slate-200 p-7"
            >
              <Quote className="h-7 w-7 text-brand-blue/40" />
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-brand-ink">
                {testimonial.quote}
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="text-sm font-bold text-brand-ink">
                  {testimonial.name}
                </p>
                <p className="text-sm text-brand-slate">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-blue px-6 py-10 text-white sm:flex-row sm:px-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
              <Headset className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-bold sm:text-xl">
                Want to Learn More About Our Training Solutions?
              </p>
              <p className="text-sm text-blue-100">
                Get Expert Guidance for Your Team&rsquo;s Success!
              </p>
            </div>
          </div>
          <a
            href="#enquire"
            className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-bold text-brand-blue transition hover:bg-blue-50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
