"use client";

import React from "react";

import SectionTitle from "../Section Title/SectionTitle";
import Marquee from "react-fast-marquee";
import Card from "./Card";

const skills = [
  { label: "HTML5", icon: "html-5-logo-svgrepo-com.svg" },
  { label: "CSS3", icon: "css-3-svgrepo-com.svg" },
  { label: "JavaScript", icon: "js-svgrepo-com.svg" },
  {
    label: "TypeScript",
    icon: "typescript-icon-svgrepo-com.svg",
  },
  { label: "jQuery", icon: "jquery-svgrepo-com.svg" },
  { label: "ReactJS", icon: "reactjs-svgrepo-com.svg" },
  { label: "NextJS", icon: "nextjs-svgrepo-com.svg" },
  { label: "NodeJS", icon: "nodejs-svgrepo-com.svg" },
  {
    label: "Tailwind CSS",
    icon: "tailwind-css-svgrepo-com.svg",
  },
  { label: "SASS", icon: "sass-svgrepo-com.svg" },
  {
    label: "Bootstrap CSS",
    icon: "bootstrap-svgrepo-com.svg",
  },
  {
    label: "Material UI",
    icon: "material-ui-svgrepo-com.svg",
  },
  { label: "Git", icon: "git-svgrepo-com.svg" },
  { label: "GitHub", icon: "github-142-svgrepo-com.svg" },
  { label: "MySQL", icon: "mysql-svgrepo-com.svg" },
  {
    label: "RESTful API",
    icon: "rest-api-svgrepo-com.svg",
  },
  { label: "Java", icon: "java-svgrepo-com.svg" },
  { label: "Python", icon: "python-svgrepo-com.svg" },
];

const Technologies = () => {
  const [previewModeActive, setPreviewModeActive] = React.useState({
    row: true,
    grid: false,
  });

  const previewModeHandler = (mode: string) => {
    setPreviewModeActive({ row: mode === "row", grid: mode === "grid" });
  };

  const previewAction = (
    <div>
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <button
          onClick={() => previewModeHandler("row")}
          className={`hover:bg-[#dea30d] py-2 px-4 rounded-lg text-2xl ${
            previewModeActive.row ? "bg-[#dea30d]" : ""
          }`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M16 3H8c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM2 7v10c0 1.103.897 2 2 2V5c-1.103 0-2 .897-2 2zm18-2v14c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z" />
          </svg>
        </button>
        <button
          onClick={() => previewModeHandler("grid")}
          className={`hover:bg-[#dea30d] py-2 px-4 rounded-lg text-2xl ${
            previewModeActive.grid ? "bg-[#dea30d]" : ""
          }`}
        >
          <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
            <path d="M1 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V4zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM1 9a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V9zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V9zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V9z" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <section
      className={`flex items-start justify-center py-6 lg:pt-32 mx-auto ${
        previewModeActive.row ? "lg:h-screens" : ""
      }`}
    >
      <div>
        <div className="py-6 lg:py-12">
          <SectionTitle title="Tools I know" previewAction={previewAction} />
        </div>
        <div className="w-screen">
          {previewModeActive.row ? (
            <Marquee gradient gradientColor="#171717" gradientWidth={100}>
              {skills.map((skill) => (
                <Card key={skill.label} skill={skill} />
              ))}
            </Marquee>
          ) : (
            <div className="flex items-center justify-center pb-12">
              <div className="grid grid-cols-4 justify-items-center gap-y-4">
                {skills.map((skill) => (
                  <Card key={skill.label} skill={skill} className="" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
