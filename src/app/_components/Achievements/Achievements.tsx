"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const certificates = [
  { src: "/certificate/react.png", label: "React" },
  { src: "/certificate/mern-stack.png", label: "MERN Stack" },
  { src: "/certificate/python.jpg", label: "Python" },
];

const Achievements = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      if (next === active || animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActive(next);
        setAnimating(false);
      }, 250);
    },
    [active, animating]
  );

  const prev = () => goTo((active - 1 + certificates.length) % certificates.length);
  const next = () => goTo((active + 1) % certificates.length);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % certificates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [active, goTo]);

  return (
    <section id="achievements" className="container py-20 md:py-28">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-16">
        <span className="block w-8 h-px bg-primary" />
        <span className="font-inter text-xs font-semibold tracking-[0.3em] uppercase text-primary">
          Achievements
        </span>
      </div>

      {/* Heading + controls row */}
      <div className="flex items-end justify-between gap-6 mb-8">
        <h2 className="font-bebas text-[clamp(2.2rem,5vw,4.5rem)] leading-none text-black">
          Certificates &<br />
          <span className="text-primary">Credentials.</span>
        </h2>

        {/* Prev / Next */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={prev}
            aria-label="Previous certificate"
            className="w-10 h-10 border border-black/15 flex items-center justify-center text-black/50 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next certificate"
            className="w-10 h-10 border border-black/15 flex items-center justify-center text-black/50 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image viewer */}
      <div className="border border-black/10 overflow-hidden w-full relative aspect-[4/3] md:aspect-[16/9]">
        {certificates.map((cert, i) => (
          <div
            key={cert.src}
            className={`absolute inset-0 transition-opacity duration-300 ${
              i === active && !animating ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={cert.src}
              alt={cert.label}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dots + label */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-3">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to certificate ${i + 1}`}
              className={`h-px transition-all duration-300 ${
                i === active ? "w-8 bg-primary" : "w-4 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>

        <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-black/30">
          {certificates[active].label} · {active + 1} / {certificates.length}
        </span>
      </div>

    </section>
  );
};

export default Achievements;
