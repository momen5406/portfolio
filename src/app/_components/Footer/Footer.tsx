import React from "react";

const Footer = () => {
  return (
    <footer className="mx-6 pt-6 text-sm text-foreground border-t border-white/10">
      &copy; 2025{" "}
      <span className="text-white font-medium hover:text-accent-orange transition">
        Mo’men Hussein
      </span>{" "}
      — Built with{" "}
      <span className="text-white hover:text-accent-pink transition-colors">
        Next.js
      </span>{" "}
      &{" "}
      <span className="text-white hover:text-accent-blue transition-colors">
        Tailwind
      </span>
      .
    </footer>
  );
};

export default Footer;
