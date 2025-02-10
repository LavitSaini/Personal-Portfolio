import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { navItems } from "../Utils/constants";

const NavigationMenu = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionVisibility = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionVisibility[entry.target.id] = entry.intersectionRatio;
        });

        const mostVisibleSection = Object.keys(sectionVisibility).reduce(
          (prev, curr) =>
            sectionVisibility[curr] > sectionVisibility[prev] ? curr : prev
        );

        setActiveSection(mostVisibleSection);
      },
      { threshold: [0.25, 0.5, 0.75, 1] }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.div
      className="fixed z-menu bottom-10 left-1/2 -translate-x-1/2 bg-nav px-7 py-3 rounded-full backdrop-blur-[10px] flex justify-center items-center gap-6 shadow-md border-solid border-b-[1px] border-b-primary"
      initial={{ opacity: 0, y: 30, x: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <ul className="flex items-center gap-8">
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={`#${item.label}`} className="relative group">
                <div
                  className={`p-2 rounded-full transition duration-200 text-white group-hover:bg-hover ${
                    activeSection === item.label ? "bg-hover" : "bg-transparent"
                  }`}
                >
                  <item.icon className="size-5" />
                </div>
                <span className="absolute text-sm capitalize text-dark bg-primary px-2 py-1 rounded-md opacity-0 transition-opacity duration-200 shadow-sm group-hover:opacity-100 left-1/2 -translate-x-1/2 -top-10 pointer-events-none">
                  {item.label}
                  <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary"></span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default NavigationMenu;
