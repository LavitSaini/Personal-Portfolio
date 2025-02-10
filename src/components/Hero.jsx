import React, { useState, useEffect, useRef } from "react";
import { mediaItems, technologiesIcons } from "../Utils/constants";
import { motion } from "framer-motion";

const roles = [
  "Shopify Store's Developer",
  "Theme Customization",
  "App Integration",
  "Widget Customization",
  "Integration of Third-Party Add-ons",
  "Graphics Design",
  "SEO friendly websites",
  "Website maintenance",
  "Social media marketing",
  "Figma / XD / PSD",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [iconPositions, setIconPositions] = useState([]);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      if (heroSectionRef.current) {
        const { width, height } =
          heroSectionRef.current.getBoundingClientRect();

        setIconPositions(
          technologiesIcons.map(() => ({
            left: Math.random() * (width - 64),
            top: Math.random() * (height - 160),
          }))
        );
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const currentPhrase = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100; // Faster deleting, normal typing

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), typingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (charIndex < currentPhrase.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      }
    }

    setDisplayedText(currentPhrase.slice(0, charIndex));
  }, [charIndex, isDeleting, currentRole]);

  return (
    <section
      ref={heroSectionRef}
      className="container relative px-8 flex items-start py-[5rem] custom-sm:py-10"
      id="home"
    >
      {iconPositions.map((pos, index) => (
        <img
          key={index}
          src={technologiesIcons[index].url}
          alt={technologiesIcons[index].label}
          loading="lazy"
          className={`absolute w-9 z-low opacity-40 custom-sm:hidden ${
            technologiesIcons[index].whileInView
              ? "whileInView-scale-infinite"
              : ""
          }`}
          style={{
            left: `${pos.left}px`,
            top: `${pos.top}px`,
            transform: `rotate(${technologiesIcons[index].rotateAngle}deg)`,
          }}
        />
      ))}

      <div className="grid grid-cols-12 items-center w-full">
        <motion.div
          className="col-span-2 justify-self-start flex flex-col gap-y-24 items-center -translate-x-10 custom-xl:hidden"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: -40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h5 className="text-primary capitalize text-[0.9rem] -rotate-90">
            Follow On
          </h5>
          <div className="h-[1px] w-24 bg-primary rotate-90"></div>
          <ul className="flex flex-col gap-3 -mt-6">
            {mediaItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <i
                    className={`${item.icon} text-[1.25rem] text-primary transition duration-100 group-hover:scale-125 group-hover:text-hover`}
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="hidden col-span-2 justify-self-start flex-col gap-y-24 items-center translate-x-10 custom-xl:order-1 custom-xl:flex custom-xl:justify-self-end custom-xl:col-start-11"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h5 className="text-primary capitalize text-[0.9rem] -rotate-90">
            Follow On
          </h5>
          <div className="h-[1px] w-24 bg-primary rotate-90"></div>
          <ul className="flex flex-col gap-3 -mt-6">
            {mediaItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <i
                    className={`fa fa-${item.icon} text-[1.25rem] text-primary transition duration-100 group-hover:scale-125 group-hover:text-hover`}
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 items-center col-span-8 custom-xl:col-span-8 custom-xl:flex custom-xl:flex-col custom-xl:items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="../assets/images/hero_image.png"
              alt="Hero Image"
              className="w-full relative z-high custom-xl:w-[20rem]"
              loading="lazy"
            />
          </motion.div>
          <div
            className="flex flex-col items-start relative min-w-[18rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h4
              className="text-gray-300 text-[1rem] capitalize"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Hello, I'm
            </motion.h4>

            <motion.h1
              className="text-[2.7rem] font-extrabold text-white -mt-2"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Sonalika
            </motion.h1>
            <motion.p
              className="text-[0.9rem] text-gray-200 -mt-1 mb-3"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Transforming Ideas into Stunning & Scalable Shopify eCommerce
              Solutions
            </motion.p>
            <motion.p
              className="text-nowrap text-white text-[1.25rem] font-bold capitalize flex items-center gap-1 h-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {displayedText}
              <span className="text-primary whileInView-blink">|</span>
            </motion.p>
          </div>
        </div>

        <motion.div
          className="col-span-2 justify-self-end w-36 h-[1px] bg-primary rotate-90 translate-x-16 custom-xl:hidden"
          initial={{ opacity: 0, x: 94, rotate: 90 }}
          whileInView={{ opacity: 1, x: 64, rotate: 90 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
