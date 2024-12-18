"use client";

import React, { useRef, useState, useEffect } from "react";
import SectionTitle from "../Section Title/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";

const workExperience = [
  {
    company: "gamp.ai",
    position: "Frontend Developer",
    startDate: "October 2023",
    endDate: "Present",
    description:
      "Contributed to the development of the SaaS platform Nuiq. Designed and developed UI components, increasing target audience engagement by 12%, and implemented effective web solutions to manage over 2000 transcriptions per day. Developed a highly interactive video player and editor Mogul.",
  },
  {
    company: "skyscanner",
    position: "Frontend Developer",
    startDate: "February 2023",
    endDate: "March 2023",
    description:
      "Developed a Datepicker component in Backpack, a collection of design resources, reusable components, and guidelines for creating Skyscanner's products.",
  },
  {
    company: "Egyptian General Petroleum Corporation",
    position: "IT Training",
    startDate: "July 2023",
    endDate: "August 2023",
    description:
      "Gained a deep understanding of multi-layered security systems, network security, and firewall configuration. Learned about designing and maintaining network infrastructures for real-time data needs, improving disaster recovery planning, and business continuity strategies.",
  },
];

const Experience = () => {
  const descriptionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const calculatedHeights = descriptionRefs.current.map((ref) =>
      ref ? ref.clientHeight + 12 : 0
    );
    setHeights(calculatedHeights);
  }, [workExperience]);

  return (
    <AnimatePresence>
      <section
        id="experience"
        className="container mx-auto px-4 md:w-[80%] 2xl:w-[65%] min-h-screen py-20 lg:py-32"
      >
        <div>
          <div className="py-0 lg:py-12">
            <SectionTitle title="My Work Experience" />
          </div>
          <ul className="flex flex-col gap-12">
            {workExperience.map((experience, index) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 200 },
                }}
                key={experience.company}
                className="flex px-4 flex-col md:flex-row items-start justify-between"
              >
                <div className="flex items-center justify-between w-full md:w-fit md:items-start md:flex-col">
                  <h1 className="text-white text-xl md:text-2xl font-semibold max-w-52 md:max-w-60 lg:max-w-none">
                    {experience.company}
                  </h1>
                  <p className="text-[#98A2B3] text-sm md:text-lg font-normal">
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>

                <div
                  className="d-none lg:relative"
                  ref={(el: any) => (descriptionRefs.current[index] = el)}
                >
                  <h1 className="text-white text-xl md:text-2xl font-semibold">
                    {experience.position}
                  </h1>

                  <div className="hidden lg:flex flex-col justify-center items-center absolute top-0 -left-12">
                    <div
                      className={`w-9 h-9 rounded-full border-4 ${
                        experience.endDate !== "Present"
                          ? "bg-[#fff]"
                          : "bg-[#DAA520]"
                      }`}
                    ></div>

                    {index !== workExperience.length - 1 &&
                      heights.length > 0 && (
                        <div
                          className="w-1 bg-[#fff]"
                          style={{ height: `${heights[index]}px` }}
                        ></div>
                      )}
                  </div>

                  <p className="text-[#98A2B3] text-sm md:text-lg font-normal max-w-[27rem] text-justify sm:text-start">
                    {experience.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Experience;
