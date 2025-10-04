import React from "react";
import cornerstone from "../../../../public/projects/cornerstone.png";
import spotify from "../../../../public/projects/spotify.png";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      screenshot: spotify,
      name: "Spotify Clone",
      description:
        "About A web application that mimics the core functionality of Spotify, built with NextJS and Supabase. This project allows users to authenticate, browse playlists, play music, add songs to favorites, and control playback, offering a familiar user experience similar to the popular music streaming service.",
      frameworks: ["nextjs", "typescript", "tailwind", "supabase"],
      link: "https://spotify-clone-momen.vercel.app/",
    },
    {
      screenshot: cornerstone,
      name: "CornerStone - Ecommerce Shop",
      description:
        "CornerStone eCommerce is a modern eCommerce web application built with Next.js 15, TypeScript, and Tailwind CSS. It features secure authentication with NextAuth.js, shopping cart, wishlist, address management, and order tracking. The platform ensures responsive design, smooth user experience, and protected routes for logged-in users.",
      frameworks: ["nextjs", "typescript", "tailwind"],
      link: "https://cornerstone-ecommerce-app.vercel.app/",
    },
  ];

  return (
    <section>
      <ul className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <li key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid items-start gap-5 bg-surface-primary/30 hover:bg-surface-primary p-6 rounded-2xl 
                     border border-background hover:border-accent-blue/50 hover:shadow-[0_0_25px_rgba(61,169,252,0.15)] 
                     transition-all duration-300"
            >
              {/* Project Screenshot */}
              <div className="w-full border border-white/10 rounded-xl overflow-hidden relative">
                <Image
                  className="w-full h-56 object-cover group-hover:scale-105 group-hover:rotate-[0.5deg] transition duration-500"
                  width={500}
                  height={300}
                  src={project.screenshot}
                  alt={project.name}
                />
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Project Content */}
              <div>
                <h5 className="text-white font-semibold text-lg tracking-wide group-hover:text-accent-orange transition">
                  {project.name}
                </h5>
                <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3 my-3">
                  {project.description}
                </p>

                {/* Framework Tags */}
                <ul className="flex flex-wrap items-center gap-2 mt-3">
                  {project.frameworks.map((framework, i) => (
                    <li
                      key={i}
                      className="bg-surface-secondary text-white/90 text-sm py-1 px-3 rounded-full border border-transparent 
                             hover:border-accent-pink/50 hover:text-accent-pink transition duration-300"
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

      {/* CTA Link */}
      <a
        href="#"
        className="group px-6 text-white font-semibold mt-12 inline-flex items-center gap-2 text-base 
               hover:text-accent-gold transition duration-300"
      >
        View Full Project Archive
        <i className="fa-solid fa-arrow-right text-sm transform group-hover:translate-x-2 group-hover:text-accent-gold transition duration-300"></i>
      </a>
    </section>
  );
};

export default Projects;
