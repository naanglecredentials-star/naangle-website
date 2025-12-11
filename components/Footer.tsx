export function Footer() {
  return (
    <footer className="border-t border-slate-100 px-10 py-6 text-xs text-slate-500 flex justify-between items-center gap-4">
      <p>© {new Date().getFullYear()} NAANGLE — Calm, reliable AI systems.</p>
      <p className="text-slate-400">Glassmorphism interface · Pink / blue gradients.</p>
    </footer>
  );
}
