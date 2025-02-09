import React, { useState } from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <header className="container px-8 py-4">
      <motion.nav
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a
          href="/"
          className="text-[1.5rem] text-primary font-semibold tracking-tighter transition duration-200 hover:text-hover hover:scale-110"
        >
          <span>Sonalika Saini</span>
        </a>
        <div>
          <a
            href="#contact"
            className="flex gap-2 items-center rounded-full text-sm text-primary font-medium px-4 py-2 border-solid border-2 border-primary transition duration-300 hover:bg-hover hover:text-white hover:border-hover"
          >
            <span>Let's Talk</span>
            <i className="ri-chat-1-fill"></i>
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
