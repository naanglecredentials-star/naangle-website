"use client";

import { useState } from "react";
import { PageFade } from "@/components/PageFade";

const slots = ["09:00", "11:00", "14:00", "16:00"];

export default function SchedulePage() {
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <PageFade>
      <section className="px-10 py-10">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-semibold text-slate-900 mb-2 text-center">
            Schedule a strategy call
          </h1>
          <p className="text-sm text-slate-600 text-center mb-6">
            Pick a time that works. We&apos;ll send a calendar invite with details.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!date || !slot) return;
              setConfirmed(true);
            }}
            className="space-y-4 rounded-2xl bg-white/70 border border-slate-100 shadow-md px-5 py-5"
          >
            <div className="space-y-1 text-xs">
              <label className="text-slate-700">Date</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setConfirmed(false);
                }}
                className="h-9 w-full rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-pink-400"
              />
            </div>
            <div className="space-y-2 text-xs">
              <label className="text-slate-700">Time</label>
              <div className="flex flex-wrap gap-2">
                {slots.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setSlot(s);
                      setConfirmed(false);
                    }}
                    className={`h-8 rounded-full border px-4 text-xs ${
                      slot === s
                        ? "border-pink-500 bg-pink-500 text-white"
                        : "border-slate-200 bg-white hover:border-slate-500"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex h-9 items-center justify-center rounded-full bg-black px-5 text-xs font-medium text-white hover:bg-slate-900"
            >
              Confirm
            </button>
            {confirmed && (
              <p className="text-[11px] text-pink-500 pt-1">
                Great — your slot is saved. We&apos;ll email calendar details shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </PageFade>
  );
}
