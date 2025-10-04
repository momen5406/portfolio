import React from "react";
import Skills from "../UI/Skills/Skills";

const Headline = () => {
  const skills = ["react", "next.js", "tailwind"];

  return (
    <div className="info">
      {/* Name */}
      <h1 className="text-5xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-accent-orange via-accent-pink to-accent-blue bg-clip-text text-transparent">
          Mo’men Hussein
        </span>
      </h1>

      {/* Role */}
      <h4 className="text-xl text-foreground font-semibold mt-3">
        Front End Developer
      </h4>

      {/* Skills */}
      <div className="mt-6">
        <Skills skills={skills} />
      </div>

      {/* Description */}
      <p className="mt-6 text-foreground leading-relaxed text-lg">
        I build <span className="text-white font-medium">pixel-perfect</span>,
        <span className="text-white font-medium"> high-performance</span> web
        apps that balance <span className="text-foreground">speed</span>,
        <span className="text-foreground"> accessibility</span>, and
        <span className="text-foreground"> detail</span>.
      </p>
    </div>
  );
};

export default Headline;
