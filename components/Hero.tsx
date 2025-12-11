"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useCallback } from "react";

const textContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const textLine = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const orbX = useTransform(mx, [-0.5, 0.5], [-12, 12]);
  const orbY = useTransform(my, [-0.5, 0.5], [10, -10]);
  const glassX = useTransform(mx, [-0.5, 0.5], [8, -8]);
  const glassY = useTransform(my, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(x);
      my.set(y);
    },
    [mx, my]
  );

  const handleMouseLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <section
      className="px-10 pb-10 pt-10 md:pt-14"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
        
        {/* LEFT SIDE TEXT */}
        <div className="space-y-5">
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-2">
              <motion.p
                variants={textLine}
                className="text-[11px] uppercase tracking-[0.28em] text-slate-500"
              >
                AI systems · Glassmorphism interface
              </motion.p>

              <motion.h1
                className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900"
              >
                <motion.span variants={textLine} className="block">
                  Transform
                </motion.span>
                <motion.span variants={textLine} className="block">
                  your work
                </motion.span>
                <motion.span variants={textLine} className="block">
                  with AI.
                </motion.span>
              </motion.h1>

              <motion.p
                variants={textLine}
                className="text-sm text-slate-600 max-w-md"
              >
                NAANGLE designs calm, predictable AI systems that remove repetitive work
                without adding chaos. Clear surfaces, reliable workflows, and measurable impact.
              </motion.p>
            </div>

            <motion.div
              variants={textLine}
              className="flex flex-wrap items-center gap-3 text-xs"
            >
              <Link
                href="/schedule"
                className="rounded-full bg-black px-5 py-2 text-white font-medium hover:bg-slate-900"
              >
                Schedule a call
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-slate-300 px-5 py-2 text-slate-800 hover:border-slate-500"
              >
                Explore our services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE VISUALS */}
        <div className="relative h-64 md:h-72 flex items-center justify-center">
          
          {/* ORB */}
          <motion.div
            style={{ x: orbX, y: orbY }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="h-48 w-48 md:h-56 md:w-56 rounded-full bg-[conic-gradient(at_top,_#fb7185,_#ec4899,_#6366f1,_#22d3ee,_#fb7185)] opacity-90 blur-[1px] animate-orb" />
          </motion.div>

          {/* BACK BAR */}
          <motion.div
            style={{ x: orbX, y: orbY }}
            className="absolute left-12 right-4 h-32 rounded-3xl bg-gradient-to-r from-pink-400 via-fuchsia-500 to-sky-400 opacity-80 blur-sm pointer-events-none"
          />

          {/* GLASS BLOCK */}
          <motion.div
            style={{ x: glassX, y: glassY }}
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-40 w-32 md:h-48 md:w-40 rounded-3xl bg-white/65 backdrop-blur-2xl border border-white shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
