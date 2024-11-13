"use client";

import React from "react";
import SectionTitle from "../Section Title/SectionTitle";
import ProjectsCarousel from "./ProjectsCarousel";
import { projects } from "@/constant";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects2 = () => {
  const [previewMode, setPreviewMode] = React.useState({
    row: true,
    grid: false,
  });
  const [visibleCount, setVisibleCount] = React.useState(5);

  const showMoreProjects = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const handlePreviewModeChange = (mode: string) => {
    setPreviewMode({ row: mode === "row", grid: mode === "grid" });
  };

  return (
    <section id="projects" className="min-h-screen flex items-center">
      <div className="w-full h-full">
        <div className="flex flex-col items-center justify-between bg-[url('/projects-background-image.png')] h-full rounded-3xl bg-contain">
          <div className="pt-6 md:pt-40 w-full">
            <SectionTitle
              title="Some Recent Projects"
              previewAction={handlePreviewModeChange}
            />
          </div>
          <div className="w-full xl:max-w-[75.5rem]">
            {previewMode.row ? (
              <ProjectsCarousel projects={projects} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center pb-24">
                {projects.slice(0, visibleCount).map((project) => (
                  <Link href={project.href} key={project.id}>
                    <ProjectCard cover={project.img} title={project.title} />
                  </Link>
                ))}
                {visibleCount < projects.length && (
                  <button
                    className="col-span-1 sm:col-span-2 lg:col-span-3 px-12 py-6 text-xl bg-[#684B03] hover:bg-[#FFD700] duration-300 rounded-3xl "
                    onClick={showMoreProjects}
                  >
                    Show More
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
