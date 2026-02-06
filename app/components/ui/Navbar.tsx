"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
  // { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - 120;

        if (window.scrollY >= sectionTop) {
          current = link.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const offset = 90;
    const y = section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* -------- Logo -------- */}
        <div
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3 cursor-pointer hover:scale-105 transition"
        >
          <Image
            src="/icon.png"
            alt="Ashok Kumar Logo"
            width={36}
            height={36}
            priority
            className="rounded-md"
          />

          {/* Name visible only on desktop */}
          <span className="text-xl font-bold text-primary tracking-wide">
            ASHOK KUMAR
          </span>
        </div>

        {/* -------- Navigation -------- */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`cursor-pointer font-semibold transition relative ${
                active === link.id
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {link.name}

              {active === link.id && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary rounded-full" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
