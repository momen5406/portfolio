import React from "react";

const Contact = () => {
  return (
    <section className="px-5 max-w-2xl mx-auto">
      {/* Heading */}
      <h4 className="text-3xl font-bold text-white mb-4">
        <span
          className="bg-gradient-to-r from-accent-orange via-accent-pink to-accent-blue 
                     bg-clip-text text-transparent animate-gradient"
        >
          Let’s Work Together
        </span>
      </h4>

      {/* Description */}
      <p className="text-foreground/90 leading-relaxed mb-8">
        I’m looking for opportunities to build
        <span className="text-white font-medium"> clean</span>,
        <span className="text-white font-medium"> fast</span>, and
        <span className="text-white font-medium"> user-focused</span> web apps.
        Whether it’s joining a development team or collaborating on a freelance
        project, I’d love to hear from you.
      </p>

      {/* CTA Button */}
      <a
        href="mailto:morenocoder@gmail.com"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold 
               bg-gradient-to-r from-accent-orange to-accent-pink 
               text-white shadow-lg hover:shadow-[0_0_25px_rgba(255,111,145,0.4)] 
               transition-all duration-300 hover:scale-105"
      >
        Get in Touch
        <i className="fa-solid fa-paper-plane text-sm"></i>
      </a>
    </section>
  );
};

export default Contact;
