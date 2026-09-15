import React from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Modern interfaces built for performance.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="0" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3-3 3" />
        <path d="M13 14h4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Interactive UI",
    description: "Motion that adds meaning, not noise.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Full-Stack",
    description: "From interface to database.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "UI Implementation",
    description: "Design translated into production.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="container py-20 md:py-28">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-16">
        <span className="block w-8 h-px bg-primary" />
        <span className="font-inter text-xs font-semibold tracking-[0.3em] uppercase text-primary">
          Services
        </span>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10">
        {services.map((service) => (
          <div
            key={service.number}
            className="bg-off-white p-8 md:p-10 flex flex-col gap-6 group hover:bg-primary transition-colors duration-300"
          >
            {/* Top row — icon + number */}
            <div className="flex items-start justify-between">
              {/* Icon */}
              <div className="text-primary group-hover:text-off-white transition-colors duration-300">
                {service.icon}
              </div>
              {/* Number */}
              <span className="font-inter text-[11px] font-semibold tracking-[0.2em] text-black/20 group-hover:text-off-white/30 transition-colors duration-300">
                {service.number}
              </span>
            </div>

            {/* Bottom — title + description */}
            <div className="flex flex-col gap-3">
              <div className="w-6 h-px bg-black/15 group-hover:bg-off-white/30 transition-colors duration-300" />
              <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-black leading-none group-hover:text-off-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-inter text-xs text-black/45 leading-relaxed group-hover:text-off-white/65 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;
