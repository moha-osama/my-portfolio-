"use client";

import React from "react";
import CountUp from "react-countup";
import SectionTitle from "../Section Title/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import Technologies from "../Technologies/Technologies";

const stats = [
  { title: "Years of Experience", value: 1 },
  { title: "Projects", value: 10 },
  { title: "Customer Satisfaction", value: 10 },
];

const AboutMe = () => {
  const [start, setStart] = React.useState(false);

  return (
    <AnimatePresence>
      <section id="about-me" className="h-screen">
        <div className="bg-[url('/projects-background-image.png')] h-full bg-contain">
          <div className="container px-3 sm:px-0 pt-6 pb-12 lg:pt-24 flex flex-col mx-auto items-center justify-center h-full ">
            <SectionTitle title="Know More About Me" />
            <div className="flex items-center">
              <div className="grid max-w-screen-xl px-4 py mx-auto lg:gap-8 xl:gap-0 lg:py-16">
                <div className="flex justify-around flex-col">
                  <p className="text-md lg:text-2xl tracking-wider text-white text-justify">
                    As a highly competent front-end developer, I have created a
                    diverse range of projects which showcase my technical skills
                    and expertise. My proficiency in HTML, CSS, and JavaScript
                    and popular frameworks such as React, I also have experience
                    in popular CSS frameworks to create beautiful UI designs and
                    responsive layouts
                  </p>
                  {/* <ScrollTrigger onEnter={() => setStart(true)}> */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 200 },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-3 my-4 md:gap-16 bg-[#715204cc] md:w-fit rounded-xl py-3 lg:py-7 px-2 md:px-10"
                  >
                    {stats.map((item, index) => (
                      <div
                        key={item.title}
                        className={`flex flex-col text-center py-4`}
                      >
                        <>
                          <div>
                            <span className="text-2xl">+</span>
                            <CountUp
                              className={`text-white text-2xl font-bold`}
                              start={0}
                              end={item.value}
                              duration={1}
                            />
                          </div>
                          <p className="text-white text-md">{item.title}</p>
                        </>
                      </div>
                    ))}
                  </motion.div>
                  {/* </ScrollTrigger> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default AboutMe;
