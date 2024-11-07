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
  return (
    <section className="mt-8 mb-24 w-full max-w-[120rem] mx-auto">
      <div className="py-6 lg:py-12">
        <SectionTitle title="Tools I know" />
      </div>
      <div>
        <Marquee gradient gradientColor="#171717" gradientWidth={100}>
          {skills.map((skill) => (
            <Card key={skill.label} skill={skill} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Technologies;
