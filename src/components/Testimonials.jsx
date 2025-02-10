import React, { useState, useEffect, useRef } from "react";
import { testimonials } from "../Utils/constants";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideInterval = useRef(null);

  const handleNext = () => {
    setActiveTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    restartAutoSlide();
  };

  const handlePrev = () => {
    setActiveTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    restartAutoSlide();
  };

  const startAutoSlide = () => {
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setActiveTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);
  };

  const restartAutoSlide = () => {
    clearInterval(slideInterval.current);
    startAutoSlide();
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoSlide();
    }
    return () => clearInterval(slideInterval.current);
  }, [isHovered]);

  return (
    <section className="container px-8 py-16 custom-sm:py-10" id="testimonials">
      <div className="flex flex-col gap-1.5 items-center">
        <h3 className="text-3xl text-primary font-bold capitalize">
          Testimonials
        </h3>
        <p className="text-gray-300 capitalize">Words From My Clients</p>
      </div>
      <div className="flex flex-col mt-16 gap-10 custom-sm:mt-12">
        <div className="flex justify-between items-center gap-8 min-h-[15rem] custom-md:justify-center custom-md:flex-col custom-md:h-auto custom-md:gap-3 custom-xsm:gap-12">
          <motion.button
            onClick={handlePrev}
            className="custom-md:hidden"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ChevronLeft className="size-16 text-primary transition duration-200 hover:text-hover hover:scale-110" />
          </motion.button>

          <motion.ul
            className="max-w-[28rem] translate-x-8 custom-lg:max-w-[24rem] custom-md:max-w-[87.5%] custom-md:h-[15rem]"
            key={activeTestimonialIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {testimonials.map(
              (testimonial, index) =>
                index === activeTestimonialIndex && (
                  <li
                    key={testimonial.name}
                    className="relative flex flex-col gap-1"
                  >
                    <Quote className="size-6 absolute -bottom-2 -right-1" />
                    <div className="flex justify-between items-center gap-0.5 custom-md:flex-col custom-md:items-start">
                      <h3 className="text-3xl font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <span className="text-[0.75rem] text-hover">
                        {testimonial.duration}
                      </span>
                    </div>
                    <h6 className="text-hover font-semibold leading-5 custom-md:mt-1">
                      Project: {testimonial.project}
                    </h6>
                    <p className="mt-1 text-[0.95rem] leading-[1.45rem] text-white">
                      {testimonial.experience}
                    </p>
                    <div className="flex items-center gap-3">
                      <h6 className="text-hover">Rating:</h6>
                      <ul className="flex items-center gap-1.5">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <li key={i}>
                              <i
                                className="fa fa-star text-hover"
                                aria-hidden="true"
                              ></i>
                            </li>
                          ))}
                      </ul>
                    </div>
                    <Quote className="size-6 absolute -top-2 -left-9 rotate-180" />
                  </li>
                )
            )}
          </motion.ul>

          <motion.button
            onClick={handleNext}
            className="custom-md:hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ChevronRight className="size-16 text-primary transition duration-200 hover:text-hover hover:scale-110" />
          </motion.button>

          <div className="hidden items-center justify-items-start gap-3 custom-md:flex">
            <motion.button
              onClick={handlePrev}
              className="text-dark p-1.5 rounded-full bg-primary transition duration-200 hover:bg-hover"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ChevronLeft className="size-5" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="text-dark p-1.5 rounded-full bg-primary transition duration-200 hover:bg-hover"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ChevronRight className="size-5" />
            </motion.button>
          </div>
        </div>

        <ul className="flex gap-2 items-center place-self-center">
          {testimonials.map((_, index) => (
            <li
              key={index}
              className={`rounded-full p-1 transition-all duration-200 ${
                index === activeTestimonialIndex
                  ? "bg-hover scale-125"
                  : "bg-gray-300"
              }`}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
