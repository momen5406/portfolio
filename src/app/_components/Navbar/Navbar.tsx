"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="py-4 border-b border-black/10 relative z-50 bg-off-white">
        <div className="container flex items-center justify-between">

          {/* Left links — hidden below lg */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-inter text-sm font-medium tracking-widest uppercase text-black/60 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Center — name (always visible) */}
          <h1 className="font-bebas text-4xl text-black">
            Momen Hussein
          </h1>

          {/* Right links — hidden below lg */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.slice(3).map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-inter text-sm font-medium tracking-widest uppercase text-black/60 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — visible below lg */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 shrink-0"
          >
            <span
              className={`block h-px bg-black transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-[7px] w-6" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-black transition-all duration-300 ${
                open ? "opacity-0 w-4" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-black transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[7px] w-6" : "w-6"
              }`}
            />
          </button>

        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-off-white flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header — mirrors navbar height */}
        <div className="py-4 border-b border-black/10">
          <div className="container flex items-center justify-between">
            <h1 className="font-bebas text-4xl text-black">Momen Hussein</h1>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex flex-col justify-center gap-[5px] w-8 h-8"
            >
              <span className="block h-px w-6 bg-black rotate-45 translate-y-[3px]" />
              <span className="block h-px w-6 bg-black -rotate-45 -translate-y-[3px]" />
            </button>
          </div>
        </div>

        {/* Drawer links */}
        <ul className="flex flex-col divide-y divide-black/10 px-6 mt-4">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-5 group"
              >
                <span className="font-inter text-[11px] font-semibold tracking-[0.25em] uppercase text-black/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-bebas text-3xl tracking-wide text-black group-hover:text-primary transition-colors duration-200">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer footer */}
        <div className="mt-auto px-6 pb-10 pt-6 border-t border-black/10">
          <p className="font-inter text-xs text-black/30 tracking-widest uppercase">
            Cairo, Egypt · Available for remote
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
