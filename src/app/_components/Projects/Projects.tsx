import React from "react";
import ironPulse from "../../../../public/projects/ironpulse.png";
import brainify from "../../../../public/projects/brainify.png";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      screenshot: ironPulse,
      name: "IronPulse - Landing Page",
      description:
        "About IronPulse Gym Landing Page — A modern, responsive landing page for IronPulse Gym built with a bold dark theme and vibrant orange accents. Highlights gym features, membership plans, real member transformations, and a contact form for inquiries. Perfect for showcasing fitness brand identity and web design skills.",
      frameworks: ["html", "tailwind"],
      link: "https://iron-pulse-landing-page.vercel.app/",
    },

    {
      screenshot: brainify,
      name: "Horizon — Modern Social Platform  ",
      description:
        "A fully responsive social networking app built with React, Next.js, and Tailwind CSS. Focused on performance, clean UI, and a cohesive dark-themed design system.  ",
      frameworks: ["react", "tailwind"],
      link: "https://iron-pulse-landing-page.vercel.app/",
    },

    {
      screenshot: ironPulse,
      name: "IronPulse - Landing Page",
      description:
        "About IronPulse Gym Landing Page — A modern, responsive landing page for IronPulse Gym built with a bold dark theme and vibrant orange accents. Highlights gym features, membership plans, real member transformations, and a contact form for inquiries. Perfect for showcasing fitness brand identity and web design skills.",
      frameworks: ["html", "tailwind"],
      link: "https://iron-pulse-landing-page.vercel.app/",
    },
  ];

  return (
    <section className="pb-[100px]">
      <ul className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <li key={index}>
            <a
              href={project.link}
              className="grid items-start gap-5 hover:bg-surface-primary p-5 rounded-lg hover:shadow border border-background hover:border-white/10 transition duration-300"
            >
              <div className="w-full border border-white/10 rounded overflow-hidden">
                <Image
                  className="w-full"
                  width={500}
                  src={project.screenshot}
                  alt="Iron Pulse"
                />
              </div>
              <div>
                <h5 className="text-white font-semibold">{project.name}</h5>
                <p className="text-sm line-clamp-3 my-2">
                  {project.description}
                </p>
                <ul className="flex items-center gap-2">
                  {project.frameworks.map((framework, index) => (
                    <li
                      key={index}
                      className="bg-surface-secondary text-white text-sm py-1 px-3 rounded-full"
                    >
                      {framework}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="group text-white font-semibold mt-5 px-5 flex items-center gap-2 group"
      >
        View Full Project Archive
        <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-2 transition duration-300"></i>
      </a>
    </section>
  );
};

export default Projects;
