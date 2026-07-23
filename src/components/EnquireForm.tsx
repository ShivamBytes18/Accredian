"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function EnquireForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      teamSize: String(formData.get("teamSize") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="enquire" className="scroll-mt-20 bg-brand-tint-2 py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Speak With Our <span className="text-brand-blue">Advisor</span>
          </h2>
          <p className="mt-3 text-lg text-brand-slate">
            Tell us about your team and we&rsquo;ll get back within one business day.
          </p>
        </div>

        {status === "success" ? (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
            <CheckCircle2 className="h-10 w-10 text-emerald-500" />
            <p className="text-lg font-bold text-brand-ink">
              Thanks — your enquiry has been received!
            </p>
            <p className="text-sm text-brand-slate">
              Our team will reach out to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 text-sm font-semibold text-brand-blue underline underline-offset-4"
            >
              Submit another enquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 grid grid-cols-1 gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-2 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-ink">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-blue"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-ink">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-blue"
                placeholder="jane@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-brand-ink">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-blue"
                placeholder="Company name"
              />
            </div>

            <div>
              <label htmlFor="teamSize" className="mb-1.5 block text-sm font-semibold text-brand-ink">
                Team size
              </label>
              <select
                id="teamSize"
                name="teamSize"
                required
                defaultValue=""
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-blue"
              >
                <option value="" disabled>
                  Select team size
                </option>
                <option value="1-20">1–20</option>
                <option value="21-100">21–100</option>
                <option value="101-500">101–500</option>
                <option value="500+">500+</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-ink">
                What are you looking to upskill?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-blue"
                placeholder="e.g. Gen-AI upskilling for our product team"
              />
            </div>

            {status === "error" && (
              <p className="sm:col-span-2 text-sm font-medium text-red-600">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark disabled:opacity-70 sm:col-span-2 sm:w-fit"
            >
              {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
