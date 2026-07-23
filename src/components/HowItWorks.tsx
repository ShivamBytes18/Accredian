import { HOW_IT_WORKS } from "@/data/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            How It <span className="text-brand-blue">Works</span>
          </h2>
          <p className="mt-3 text-lg text-brand-slate">
            From first conversation to a certified, upskilled team
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-slate-200 sm:block lg:left-1/2"
            aria-hidden="true"
          />
          <ol className="space-y-10 lg:space-y-16">
            {HOW_IT_WORKS.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <li
                  key={item.step}
                  className={`relative flex flex-col gap-4 pl-16 sm:pl-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:pl-0 ${
                    isEven ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  <span
                    className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-lg font-extrabold text-white lg:left-1/2 lg:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>

                  <div className={isEven ? "lg:col-start-2" : "lg:col-start-1"}>
                    <div
                      className={`rounded-2xl border border-slate-200 p-6 ${
                        isEven ? "lg:ml-4" : "lg:mr-4"
                      }`}
                    >
                      <h3 className="text-lg font-bold text-brand-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-brand-slate">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
