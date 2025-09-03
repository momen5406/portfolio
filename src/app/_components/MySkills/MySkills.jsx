import React from "react";

const MySkills = () => {
  const mySkills = ["html5", "css3-alt", "js", "react", "bootstrap", "npm"];

  return (
    <section className="pb-[100px] px-5">
      <p className="mb-5">
        I specialize in building modern front-end applications that balance
        performance with great user experience.
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-5">
        {mySkills.map((skill, index) => (
          <div
            key={index}
            className="bg-surface-primary border border-white/10 rounded-lg h-[100px] flex items-center justify-center text-5xl"
          >
            <i class={`fa-brands fa-${skill}`}></i>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
