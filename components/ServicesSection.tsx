export function ServicesSection() {
  const items = [
    {
      title: "Custom AI Agents",
      body: "Bespoke agents designed around your stack, workflows and constraints."
    },
    {
      title: "AI Support Layer",
      body: "Frontline AI that answers common questions while humans handle edge cases."
    },
    {
      title: "Workflow Automation",
      body: "Automations that connect CRMs, docs, sheets and ticketing tools."
    },
    {
      title: "AI Sales & Research",
      body: "Lead research, qualification and outreach with human-level context."
    }
  ];

  return (
    <section className="px-10 pb-12">
      <div className="mb-6 space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">Services</h2>
        <p className="text-sm text-slate-600">
          We ship systems that are boring in the best way: reliable, observable and calm.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl bg-white/70 border border-slate-100 shadow-md px-5 py-4"
          >
            <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h3>
            <p className="text-xs text-slate-600">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
