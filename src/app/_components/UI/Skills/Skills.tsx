import React from "react";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <ul className="flex items-center gap-5 mt-2">
      {skills.map((skill: string, index: number) => (
        <li
          key={index}
          className="bg-surface-secondary text-white text-sm py-1 px-3 rounded-full"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
