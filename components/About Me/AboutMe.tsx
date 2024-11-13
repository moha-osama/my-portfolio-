"use client";

import React from "react";
import Image from "next/image";
import bg from "@/assets/image-1.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import SectionTitle from "../Section Title/SectionTitle";

const stats = [
  { title: "Years of Experience", value: 1 },
  { title: "Projects", value: 8 },
  { title: "Customer Satisfaction", value: 4 },
];

const AboutMe = () => {
  const [start, setStart] = React.useState(false);

  return (
    <section
      id="about-me"
      className="lg:h-screen mt-12 bg-[url('/projects-background-image.png')] rounded-3xl bg-contain"
    >
      <div className="container pt-6 pb-12 lg:pt-48 flex flex-col mx-auto items-center justify-center h-full">
        <SectionTitle title="Know More About Me" />
        <div className="flex items-center">
          <div className="grid max-w-screen-xl px-4 py mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="lg:col-span-7 flex justify-around flex-col">
              <p>
                As a highly competent front-end developer, I have created a
                diverse range of projects which showcase my technical skills and
                expertise. My proficiency in HTML, CSS, and JavaScript and
                popular frameworks such as React, I also have experience in
                popular CSS frameworks to create beautiful UI designs and
                responsive layouts
              </p>
              <ScrollTrigger onEnter={() => setStart(true)}>
                <div className="grid grid-cols-3 sm:grid-cols-3 my-4 md:gap-16 bg-[#715204cc] md:w-fit rounded-xl py-3 lg:py-7 px-2 md:px-10">
                  {stats.map((item, index) => (
                    <div
                      key={item.title}
                      className={`flex flex-col text-center`}
                    >
                      {start && (
                        <>
                          <CountUp
                            className={`text-white text-2xl font-bold`}
                            start={0}
                            end={item.value}
                            duration={1}
                          />
                          <p className="text-white text-md">{item.title}</p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollTrigger>
            </div>
            <div className="gallery min-h-[26rem] hidden lg:flex relative lg:mt-0 lg:col-span-5">
              <div className="absolute right-0 top-0 z-10">
                <Image
                  className="rounded-[9px] object-cover w-full h-full"
                  src={bg}
                  width={200}
                  height={200}
                  quality={100}
                  alt="bg"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-[0] lg:-translate-x-[30%] -translate-y-1/2">
                <Image
                  className="rounded-[9px] object-cover w-full h-full"
                  src={bg}
                  width={200}
                  height={200}
                  quality={100}
                  alt="bg"
                />
              </div>
              <div className="absolute right-0 bottom-0 z-10">
                <Image
                  className="rounded-[9px] object-cover w-full h-full"
                  src={bg}
                  width={200}
                  height={200}
                  quality={100}
                  alt="bg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
