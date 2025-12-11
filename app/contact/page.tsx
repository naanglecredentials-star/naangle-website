"use client";

import { useState } from "react";
import { PageFade } from "@/components/PageFade";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageFade>
      <section className="px-10 py-10">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-semibold text-slate-900 mb-2 text-center">Contact</h1>
          <p className="text-sm text-slate-600 text-center mb-6">
            Tell us about your team and workflows. We&apos;ll reply with a concrete AI game plan.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4 rounded-2xl bg-white/70 border border-slate-100 shadow-md px-5 py-5"
          >
            <div className="space-y-1 text-xs">
              <label className="text-slate-700">Name</label>
              <input
                required
                className="h-9 w-full rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-pink-400"
              />
            </div>
            <div className="space-y-1 text-xs">
              <label className="text-slate-700">Email</label>
              <input
                required
                type="email"
                className="h-9 w-full rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-pink-400"
              />
            </div>
            <div className="space-y-1 text-xs">
              <label className="text-slate-700">What would a win look like?</label>
              <textarea
                required
                className="min-h-[80px] w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-pink-400"
              />
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex h-9 items-center justify-center rounded-full bg-black px-5 text-xs font-medium text-white hover:bg-slate-900"
            >
              Submit
            </button>
            {submitted && (
              <p className="text-[11px] text-pink-500 pt-1">
                Thanks — we&apos;ll review your message and respond with a structured proposal.
              </p>
            )}
          </form>
        </div>
      </section>
    </PageFade>
  );
}
