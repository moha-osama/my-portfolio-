import React from "react";
import SectionTitle from "../Section Title/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects2 = () => {
  return (
    <section className="my-24 bg-[url('/projects-background-image.png')] bg-contain rounded-3xl">
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div className="pt-12">
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
    </section>
  );
};

export default Projects2;
