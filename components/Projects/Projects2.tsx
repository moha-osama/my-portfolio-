import React from "react";
import SectionTitle from "../Section Title/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects2 = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center">
      <div className="w-full h-full">
        <div className="flex flex-col items-center justify-between bg-[url('/projects-background-image.png')] h-full rounded-3xl bg-contain">
          <div className="pt-6 md:pt-28">
            <SectionTitle title="Some Recent Projects" />
          </div>
          <div className="w-full xl:max-w-[75.5rem]">
            <ProjectsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
