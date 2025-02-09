import React, { useRef, useState } from "react";
import { projects, projectsCategories } from "../Utils/constants";
import { motion, useInView } from "framer-motion";
import { CircleCheck, Link, CircleX } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("shopify stores");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsSectionRef = useRef(null);

  const isInView = useInView(projectsSectionRef, { once: true, threshold: 1 });

  function pluralToSingular(text) {
    return text.slice(0, text.length - 1);
  }

  const openOverlay = (project) => {
    setSelectedProject(project);
    setIsOverlayVisible(true);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
    setSelectedProject(null);
  };

  return (
    <section
      ref={projectsSectionRef}
      id="projects"
      className="container px-8 py-16 custom-sm:py-12"
    >
      <div className="flex flex-col gap-1.5 items-center">
        <h3
          className="text-3xl text-primary font-bold capitalize"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Projects
        </h3>
        <p className="text-gray-300 capitalize">My Creative Work</p>
      </div>
      <ul className="flex gap-4 items-center justify-center flex-wrap mt-12 custom-sm:gap-x-2 custom-sm:gap-y-3 custom-sm:mt-8">
        {projectsCategories.map((category, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: category.y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              className={`px-4 py-1.5 text-[0.9rem] rounded-full transition duration-200 border-solid border-2 border-primary ${
                selectedCategory.toLowerCase() === category.label.toLowerCase()
                  ? "bg-hover text-black"
                  : "bg-transparent text-primary"
              } hover:bg-hover hover:text-black`}
              onClick={() => setSelectedCategory(category.label)}
            >
              {category.label}
            </button>
          </motion.li>
        ))}
      </ul>

      <ul className="grid grid-cols-3 gap-x-6 gap-y-7 mt-24 custom-lg:grid-cols-2 custom-xsm:grid-cols-1 custom-sm:mt-16 custom-sm:gap-x-4 custom-sm:gap-y-5">
        {projects
          .filter(
            (project) =>
              project.category.toLowerCase() === selectedCategory.toLowerCase()
          )
          .map((project, index) => (
            <motion.li
              key={project.name}
              className={`flex flex-col items-start overflow-hidden group ${
                project.category === "shopify stores"
                  ? "cursor-default"
                  : "cursor-pointer"
              }`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() =>
                project.category !== "shopify stores" && openOverlay(project)
              } // Open overlay for non-shopify stores
            >
              <div className="relative">
                {project.media.split(".").pop() !== "mp4" ? (
                  <img
                    src={project.media}
                    alt={project.name}
                    className="w-full h-full aspect-[3/3] object-cover transition duration-300 rounded-tr-lg rounded-tl-lg group-hover:scale-105"
                  />
                ) : (
                  <video
                    loop
                    autoPlay
                    muted
                    className="w-full aspect-[3/3] object-cover rounded-tr-lg rounded-tl-lg transition duration-300 group-hover:scale-105"
                  >
                    <source src={project.media} type="video/mp4" />
                  </video>
                )}
                {project.description && hoveredProject === project.name && (
                  <div className="absolute p-4 inset-5 bg-card rounded-lg shadow-md hidden group-hover:flex flex-col gap-3 z-high opacity-85 overflow-y-auto hide-scrollbar custom-sm:opacity-0">
                    <h6 className="text-[0.825rem] text-white font-semibold capitalize">
                      Implementation & Technologies
                    </h6>
                    <ul className="flex flex-col gap-2 items-start">
                      {project.description.map((text, index) => (
                        <motion.li
                          className="grid grid-cols-[auto,1fr] items-center gap-2"
                          key={`desc-${index}`}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                          <CircleCheck className="size-3 text-green-500" />
                          <span className="text-[0.75rem] text-white leading-4">
                            {text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="hidden bg-black opacity-35 absolute inset-0 transition duration-300 group-hover:scale-105 group-hover:block"></div>
              </div>
              <div className="flex flex-col gap-1 p-4 bg-card shadow-md w-full rounded-bl-lg rounded-br-lg group-hover:rounded-bl-none group-hover:rounded-br-none">
                <div className="flex justify-between items-center w-full custom-xl:flex-col custom-xl:items-start custom-xl:gap-0.5">
                  <h3 className="text-white text-[1.1rem] font-semibold text-nowrap truncate custom-xl:text-base">
                    {project.name}
                  </h3>
                  {project.link && (
                    <div className="place-self-end mb-1 custom-xl:place-self-start">
                      <a
                        href={project.link}
                        target="_blank"
                        className="flex items-center gap-1.5 text-white"
                      >
                        <span className="text-sm font-semibold group-hover:underline">
                          Live Link
                        </span>
                        <Link className="size-3.5 transition duration-200 group-hover:rotate-90" />
                      </a>
                    </div>
                  )}
                </div>
                <h5 className="text-[0.75rem] text-white capitalize custom-xl:hidden">
                  {project.category === "logo's"
                    ? pluralToSingular(
                        project.category.slice(0, project.category.length - 1)
                      )
                    : pluralToSingular(project.category)}
                </h5>
              </div>
            </motion.li>
          ))}
      </ul>

      {isOverlayVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-overlay">
          <div className="shadow-sm">
            <button
              className="absolute z-high top-5 right-5  text-gray-300 text-2xl cursor-pointer hover:text-white"
              onClick={closeOverlay}
            >
              <CircleX className="size-8" />
            </button>
            {selectedProject.media.split(".").pop() === "mp4" ? (
              <motion.video
                loop
                autoPlay
                muted
                className="max-w-full max-h-[90vh] object-contain px-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <source src={selectedProject.media} type="video/mp4" />
              </motion.video>
            ) : (
              <motion.img
                src={selectedProject.media}
                alt={selectedProject.name}
                className="max-w-full max-h-[90vh] object-contain px-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
