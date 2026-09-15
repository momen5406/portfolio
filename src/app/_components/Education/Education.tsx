import React from "react";

const courses = [
  "Programming",
  "Data Structures",
  "OOP",
  "Algorithms",
  "Databases",
  "Web Development",
];

const Education = () => {
  return (
    <section id="education" className="container py-12 md:py-16 border-y border-black/10">

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

        {/* Left — label + degree */}
        <div className="flex items-start gap-4">
          <span className="block w-8 h-px bg-primary mt-2 shrink-0" />
          <div className="flex flex-col gap-1">
            <span className="font-inter text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Education
            </span>
            <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-black leading-tight">
              Capital University
            </h3>
            <p className="font-inter text-sm text-black/50 font-medium">
              B.Sc. Artificial Intelligence
            </p>
          </div>
        </div>

        {/* Right — relevant coursework */}
        <div className="flex flex-col gap-2 md:items-end">
          <span className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-black/30">
            Relevant Coursework
          </span>
          <div className="flex flex-wrap gap-x-3 gap-y-1 md:justify-end">
            {courses.map((course, i) => (
              <span key={course} className="flex items-center gap-3">
                <span className="font-inter text-xs font-medium tracking-wide text-black/60">
                  {course}
                </span>
                {i < courses.length - 1 && (
                  <span className="text-primary font-bold text-xs">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default Education;
