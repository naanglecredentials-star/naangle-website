"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useCallback } from "react";

// TEXT ANIMATION VARIANTS
const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const textLine = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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
        
        {/* LEFT CONTENT */}
        <div className="space-y-5">

          {/* BADGE */}
          <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
            <motion.span
              initial="hidden"
              animate="visible"
              variants={textLine}
            >
              AI systems
            </motion.span>
          </p>

          {/* HEADING + SUBTEXT */}
          <div className="space-y-2">
            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
                <motion.span variants={textLine} className="block">
                  Transform
                </motion.span>

                <motion.span variants={textLine} className="block">
                  your work
                </motion.span>

                <motion.span variants={textLine} className="block">
                  with AI.
                </motion.span>
              </h1>

              {/* FIXED SUBTEXT – no className on motion.p */}
              <p className="text-sm text-slate-600 max-w-md">
                <motion.span variants={textLine}>
                  NAANGLE designs calm, predictable AI systems that remove 
                  repetitive work without adding chaos. Clear surfaces, 
                  reliable workflows, and measurable impact.
                </motion.span>
              </p>
            </motion.div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <Link href="/schedule">
              <button className="rounded-full bg-black px-5 py-2 text-white font-medium hover:bg-slate-900">
                Schedule a call
              </button>
            </Link>

            <Link href="/services">
              <button className="rounded-full border border-slate-300 px-5 py-2 text-slate-800 hover:border-slate-500">
                Explore our services
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT ANIMATED VISUALS */}
        <div className="relative h-64 md:h-80 flex items-center justify-center">
          
          {/* BACKGROUND GRADIENT CLOUD */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute h-[350px] w-[350px] rounded-full
                       bg-gradient-to-br from-blue-200 via-pink-200 to-purple-200
                       blur-3xl opacity-40"
          />

          {/* SECOND CLOUD */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute h-[280px] w-[280px] rounded-full
                       bg-gradient-to-br from-sky-300 via-fuchsia-300 to-pink-200
                       blur-2xl opacity-50"
          />

          {/* ORGANIC BLOB */}
          <motion.div
            animate={{
              borderRadius: [
                "40% 60% 50% 50%",
                "70% 30% 60% 40%",
                "50% 50% 30% 70%",
                "40% 60% 50% 50%"
              ],
              rotate: [0, 20, -20, 0]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-48 w-48 md:h-56 md:w-56
                       bg-gradient-to-br from-pink-400 via-fuchsia-500 to-sky-400
                       opacity-90 blur-[1px]"
          />

          {/* ROTATING GEOMETRIC BLOCK */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute h-40 w-40 md:h-48 md:w-48
                       bg-gradient-to-br from-blue-400 to-purple-500
                       rounded-2xl shadow-2xl opacity-90"
          />

          {/* FLOATING GLASS BLOCK */}
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [-4, 4, -4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-20 w-24 md:h-40 md:w-32
                       rounded-3xl bg-white/40 backdrop-blur-xl
                       border border-white/70 shadow-[0_12px_32px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>
    </section>
  );
}
