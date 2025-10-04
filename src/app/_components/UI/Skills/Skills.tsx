import React from "react";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <ul className="flex items-center gap-3 mt-2">
      {skills.map((skill: string, index: number) => (
        <li
          key={index}
          className="bg-surface-secondary text-foreground/90 text-sm py-1 px-3 rounded-full border border-surface-primary/10 hover:border-accent-blue/50 hover:text-accent-blue hover:shadow-[0_0_10px_var(--accent-blue)/30] transition"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
