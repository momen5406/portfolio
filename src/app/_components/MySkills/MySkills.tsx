const marqueeItems = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Django", "PostgreSQL", "AWS", "NestJS",
  "Tailwind CSS", "GSAP", "REST APIs", "Docker",
];

const MySkills = () => {
  return (
    <section id="skills" className="py-20 md:py-24">

      {/* Section label */}
      <div className="container flex items-center gap-3 mb-12">
        <span className="block w-8 h-px bg-primary" />
        <span className="font-inter text-xs font-semibold tracking-[0.3em] uppercase text-primary">
          Skills
        </span>
      </div>

      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-black/10 py-6 select-none">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-bebas text-xl tracking-widest text-black/30">
                {item}
              </span>
              <span className="text-primary font-bold text-sm">·</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default MySkills;
