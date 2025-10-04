import React from "react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const MySkills = () => {
  const mySkills = [
    { Icon: FaHtml5, label: "html" },
    { Icon: FaCss3Alt, label: "css" },
    { Icon: SiJavascript, label: "javascript" },
    { Icon: SiTypescript, label: "typescript" },
    { Icon: FaReact, label: "react" },
    { Icon: SiNextdotjs, label: "next.js" },
    { Icon: SiTailwindcss, label: "tailwindcss" },
    { Icon: FaGitAlt, label: "git" },
    { Icon: FaGithub, label: "github" },
  ];

  return (
    <section className="px-5">
      {/* Intro Text */}
      <p className="mb-10 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
        I specialize in building{" "}
        <span className="text-white font-semibold">
          modern front-end applications
        </span>{" "}
        that balance{" "}
        <span className="text-accent-orange font-medium">performance</span> with{" "}
        <span className="text-accent-pink font-medium">
          delightful user experience
        </span>
        .
      </p>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-6">
        {mySkills.map((skill, index) => (
          <div
            key={index}
            className="group bg-surface-primary border border-white/10 rounded-2xl h-[120px] 
                   flex flex-col items-center justify-center text-5xl 
                   hover:scale-105 hover:shadow-[0_0_20px_rgba(61,169,252,0.15)] 
                   hover:border-accent-blue/60 transition-all duration-300 relative"
          >
            {/* Icon */}
            <skill.Icon className="group-hover:text-accent-blue transition-colors duration-300" />

            {/* Tooltip / Label */}
            <span
              className="absolute bottom-3 text-xs text-gray-400 opacity-0 
                         group-hover:opacity-100 group-hover:translate-y-1 
                         transition-all duration-300"
            >
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
