import React from "react";
import SectionTitle from "../Section Title/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects2 = () => {
  return (
    <section id="projects" className="my-24 lg:min-h-screen flex items-center">
      <div className="w-full">
        <div className="flex flex-col items-center justify-between bg-[url('/projects-background-image.png')] rounded-3xl bg-contain">
          <div className="pt-28">
            <SectionTitle title="Some Recent Projects" />
          </div>
          <div className="hidden md:block w-[100%] 2xl:w-[80%]">
            <ProjectsCarousel />
          </div>
          <div className="flex flex-col items-center justify-center md:hidden ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
