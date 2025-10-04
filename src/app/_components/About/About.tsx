import React from "react";

const About = () => {
  return (
    <section className="px-5 max-w-3xl mx-auto">
      {/* Intro Paragraph */}
      <p className="text-lg text-foreground leading-relaxed">
        I’m a{" "}
        <span className="text-accent-orange font-semibold">
          front-end developer
        </span>{" "}
        who crafts <span className="text-accent-blue font-medium">clean</span>,{" "}
        <span className="text-accent-pink font-semibold">responsive</span> and{" "}
        <span className="text-accent-gold font-medium">user-focused</span> web
        applications. My specialty lies in turning designs into{" "}
        <span className="text-white font-semibold">
          pixel-perfect, high-performance interfaces
        </span>{" "}
        using <span className="text-accent-blue font-bold">React</span>,{" "}
        <span className="text-accent-orange font-bold">Next.js</span> and{" "}
        <span className="text-accent-pink font-bold">Tailwind CSS</span>.
      </p>

      {/* Middle Section */}
      <p className="mt-6 text-foreground leading-relaxed">
        I care about{" "}
        <span className="text-accent-gold font-semibold">speed</span>,{" "}
        <span className="text-accent-pink font-semibold">accessibility</span>{" "}
        and <span className="text-accent-blue font-semibold">detail</span> —
        because a great user experience is as much about{" "}
        <span className="text-white font-medium">how a site feels</span> as{" "}
        <span className="text-white font-medium">how it looks</span>. Currently,
        I’m seeking opportunities to join a team where I can contribute to
        building{" "}
        <span className="text-accent-orange font-semibold">
          polished, scalable products
        </span>
        .
      </p>

      {/* Personal Touch */}
      <p className="mt-8 text-foreground italic">
        When I’m not coding, I enjoy exploring{" "}
        <span className="text-accent-blue">design trends</span> and learning
        about <span className="text-accent-gold">new web technologies</span>.
      </p>
    </section>
  );
};

export default About;
