import React from "react";
import Image from "next/image";
import photo from "../../../../public/personal_image.png";

const values = [
  {
    label: "Design-first thinking",
    desc: "I started in graphic design. Every interface I build carries that obsession with composition, spacing, and detail.",
  },
  {
    label: "Performance matters",
    desc: "Fast isn't a bonus — it's a feature. I care about load times, smooth interactions, and code that doesn't slow things down.",
  },
  {
    label: "I ship",
    desc: "No endless planning. I move fast, iterate often, and deliver working products on time.",
  },
  {
    label: "It has to feel good",
    desc: "Making something work is the baseline. Making it feel good to use is where I put my energy.",
  },
];

const About = () => {
  return (
    <section id="about" className="container py-20 md:py-32">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-12">
        <span className="block w-8 h-px bg-primary" />
        <span className="font-inter text-xs font-semibold tracking-[0.3em] uppercase text-primary">
          About
        </span>
      </div>

      {/* Top grid — photo + story */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-start">

        {/* Photo — desktop only, Hero already shows it on mobile */}
        <div className="relative shrink-0 hidden md:block">
          <div className="absolute -bottom-3 -left-3 w-full h-full bg-primary z-0" />
          <div className="relative z-10 border-2 border-black">
            <Image
              src={photo}
              alt="Momen Hussein"
              width={240}
              height={300}
              className="object-cover block"
            />
          </div>
        </div>

        {/* Story */}
        <div className="flex flex-col gap-6">
          <h2 className="font-bebas text-[clamp(2.5rem,6vw,5rem)] leading-none text-black">
            The person <br />
            <span className="text-primary">behind the screen.</span>
          </h2>

          <div className="flex flex-col gap-4 font-inter text-sm md:text-base text-black/60 leading-relaxed max-w-xl">
            <p>
              I&apos;m <span className="text-black font-semibold">Momen Hussein</span>, a software
              developer with a background in visual design.
            </p>
            <p>
              I started with graphic design, where I developed an obsession with composition,
              typography, color, and visual details. That eventually led me into web development,
              where I found a way to combine creative thinking with engineering.
            </p>
            <p>
              Today, I build modern web applications using technologies across the frontend and
              backend, with a particular interest in interactive experiences, animation, and
              performance.
            </p>
            <p>
              I care about more than making something work.{" "}
              <span className="text-black font-medium italic">I want it to feel good to use.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Values grid */}
      <div className="mt-20 md:mt-28">
        <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-black mb-8">
          What I stand for
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 border border-black/10">
          {values.map((v) => (
            <div
              key={v.label}
              className="bg-off-white p-6 md:p-8 flex flex-col gap-2 group hover:bg-primary transition-colors duration-300"
            >
              <span className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-primary group-hover:text-off-white transition-colors duration-300">
                {v.label}
              </span>
              <p className="font-inter text-sm text-black/60 leading-relaxed group-hover:text-off-white/80 transition-colors duration-300">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
