"use client";

import React from "react";
import SectionTitle from "../Section Title/SectionTitle";
import { projects } from "@/constant";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects2 = () => {
  const [visibleCount, setVisibleCount] = React.useState(5);

  const showMoreProjects = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center pb-12 mb-12"
    >
      <div className="w-full h-full">
        <div className="flex flex-col items-center justify-between bg-[url('/projects-background-image.png')] h-full rounded-3xl bg-contain">
          <div className="pt-20 md:pt-40 w-full">
            <SectionTitle title="Some Recent Projects" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center pb-24">
            {projects.slice(0, visibleCount).map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  ease: "linear",
                }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 200 },
                }}
              >
                <ProjectCard
                  cover={project.img}
                  title={project.title}
                  href={project.href}
                />
              </motion.div>
            ))}
            {visibleCount < projects.length && (
              <button
                className="col-span-1 sm:col-span-2 lg:col-span-3 py-3 px-6 sm:px-12 sm:py-6 sm:text-xl bg-[#684B03] hover:bg-[#FFD700] duration-300 rounded-2xl "
                onClick={showMoreProjects}
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
