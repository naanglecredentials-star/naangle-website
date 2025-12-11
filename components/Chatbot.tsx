"use client";

import { useState } from "react";

export function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-30 h-12 w-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-slate-900"
      >
        💬
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-30 w-80 max-w-[90vw] rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-card p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs font-semibold">NAANGLE Assistant</p>
              <p className="text-[11px] text-slate-500">Ask anything about our AI services.</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-xs text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>
          </div>
          <div className="h-28 rounded-xl bg-slate-50 border border-slate-100 p-2 text-[11px] text-slate-600 overflow-y-auto">
            <p>Hello! Tell me about your workflow and I&apos;ll suggest how NAANGLE can help.</p>
          </div>
          <input
            className="mt-3 h-8 w-full rounded-full border border-slate-200 bg-white/80 px-3 text-[11px] outline-none focus:border-pink-400"
            placeholder="Type a message... (demo only)"
          />
        </div>
      )}
    </>
  );
}
