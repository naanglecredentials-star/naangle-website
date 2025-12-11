"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/schedule", label: "Schedule" }
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-center justify-between px-10 pt-6 pb-4 text-sm"
    >
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white">
          <div className="h-4 w-4 rounded-full bg-[conic-gradient(at_top,_#fb7185,_#ec4899,_#6366f1,_#22d3ee,_#fb7185)]" />
        </div>
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
          NAANGLE
        </span>
      </div>
      <nav className="flex items-center gap-6 text-xs text-slate-600">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-slate-900">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3 text-xs">
        <button className="px-4 py-1.5 rounded-full bg-black text-white font-medium hover:bg-slate-900">
          Sign up
        </button>
      </div>
    </motion.header>
  );
}
