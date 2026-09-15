import React from "react";
import cornerstone from "../../../../public/projects/cornerstone.png";
import spotify from "../../../../public/projects/spotify.png";
import brainify from "../../../../public/projects/brainify.png";
import Image from "next/image";

const projects = [
  {
    screenshot: spotify,
    name: "Spotify Clone",
    description:
      "A web application that mimics the core functionality of Spotify, built with Next.js and Supabase. Users can authenticate, browse playlists, play music, add songs to favourites, and control playback.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    link: "https://spotify-clone-momen.vercel.app/",
  },
  {
    screenshot: cornerstone,
    name: "CornerStone",
    description:
      "A modern e-commerce platform built with Next.js 15. Features secure auth, shopping cart, wishlist, address management, and order tracking — all with a responsive, polished UI.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://cornerstone-ecommerce-app.vercel.app/",
  },
  {
    screenshot: brainify,
    name: "Brainify",
    description:
      "An AI-powered learning tool that turns any topic into a structured quiz. Generates questions on the fly, tracks your score, and adapts to your knowledge gaps.",
    tags: ["React", "OpenAI", "Node.js"],
    link: "https://momen5406.github.io/Brainify-Quiz-App/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container pt-12 pb-20 md:pt-16 md:pb-28">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-16">
        <span className="block w-8 h-px bg-primary" />
        <span className="font-inter text-xs font-semibold tracking-[0.3em] uppercase text-primary">
          Projects
        </span>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-off-white border border-black/10 flex flex-col overflow-hidden group hover:border-primary transition-colors duration-300"
          >
            {/* Screenshot */}
            <div className="overflow-hidden border-b border-black/10 group-hover:border-primary transition-colors duration-300">
              <Image
                src={project.screenshot}
                alt={project.name}
                width={400}
                height={220}
                className="w-full h-48 object-cover group-hover:scale-[1.03] transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col justify-between gap-6 flex-1">
              <div className="flex flex-col gap-3">
                <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-black leading-none">
                  {project.name}
                </h3>
                <p className="font-inter text-xs text-black/50 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex items-end justify-between gap-2">
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-inter text-[10px] font-semibold tracking-widest uppercase text-black/30 group-hover:text-primary transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-inter text-[10px] text-black/30 shrink-0 flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
                  View
                  <svg
                    className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12">
        <a
          href="https://github.com/momen5406"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-sm font-semibold tracking-wider uppercase border border-black text-black px-6 py-3 hover:bg-black hover:text-off-white transition-colors duration-200 inline-flex items-center gap-2 group"
        >
          View all on GitHub
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="square" strokeLinejoin="miter" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

    </section>
  );
};

export default Projects;
