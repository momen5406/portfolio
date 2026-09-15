import React from "react";
import photo from "../../../../public/personal_image.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="container min-h-[88vh] flex flex-col justify-center py-16">

      {/* Top label */}
      <div className="flex items-center gap-3 mb-8">
        <span className="block w-8 h-px bg-primary" />
        <span className="font-inter text-xs font-semibold tracking-[0.3em] uppercase text-primary">
          Full Stack Developer
        </span>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">

        {/* Left — headline + bio + CTA */}
        <div className="flex flex-col gap-6">
          <h1 className="font-bebas text-[clamp(3.5rem,10vw,8rem)] leading-[0.92] text-black">
            Building Websites <br />
            <span className="text-primary">People Remember.</span>
          </h1>
          <p className="font-inter text-base md:text-lg text-black/60 leading-relaxed max-w-md">
            I&apos;m <span className="text-black font-semibold">Momen Hussein</span> — I turn ideas into
            fast, polished web products. From a landing page to a full-stack app,
            I deliver clean code and results that speak for themselves.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#projects"
              className="font-inter text-sm font-semibold tracking-wider uppercase bg-primary text-off-white px-6 py-3 hover:bg-primary-light transition-colors duration-200"
            >
              See My Work
            </a>
            <a
              href="/Momen_s_Resume.pdf"
              download
              className="font-inter text-sm font-semibold tracking-wider uppercase border border-black text-black px-6 py-3 hover:bg-black hover:text-off-white transition-colors duration-200"
            >
              Download CV
            </a>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 border-t border-black/10 pt-6">
            {["React", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="font-inter text-[11px] font-semibold tracking-[0.2em] uppercase text-black/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Photo — above text on mobile, right column on desktop */}
        <div className="order-first md:order-none w-fit mx-auto md:mx-0">
          <div className="relative">
            <div className="absolute -top-3 -right-3 w-full h-full bg-primary z-0" />
            <div className="relative z-10 border-2 border-black">
              <Image
                src={photo}
                alt="Momen Hussein"
                width={260}
                height={320}
                className="object-cover block w-48 h-auto md:w-[260px]"
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom scroll hint */}
      <div className="flex items-center gap-3 mt-16 md:mt-24">
        <span className="block w-5 h-px bg-black/30" />
        <span className="font-inter text-[11px] tracking-[0.25em] uppercase text-black/30">
          Scroll to explore
        </span>
      </div>

    </section>
  );
};

export default Hero;
