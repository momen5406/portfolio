import React from "react";
import Skills from "../UI/Skills/Skills";

const Headline = () => {
  const skills = ["react", "next.js", "tailwind"];

  return (
    <div className="info">
      <h1 className="text-5xl font-bold text-white">Momen Hussein</h1>
      <h4 className="text-xl text-white font-semibold mt-2">
        Front End Developer
      </h4>
      <Skills skills={skills} />
      <p className="mt-4">I build pixel-perfect, high-performance web apps.</p>
    </div>
  );
};

export default Headline;
