"use client";

import React from "react";
import Image from "next/image";
import bg from "@/assets/image-1.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import SectionTitle from "../Section Title/SectionTitle";

const stats = [
  { title: "Years of Experience", value: 2 },
  { title: "Projects", value: 150 },
  { title: "Customer Satisfaction", value: 100 },
];

const AboutMe = () => {
  const [start, setStart] = React.useState(false);

  return (
    <section
      id="about-me"
      className="container flex items-center justify-center pt-8 lg:pt-36 mx-auto lg:h-screen"
    >
      <div>
        <SectionTitle title="Know More About Me" />
        <div className="flex items-center">
          <div className="grid max-w-screen-xl px-4 py mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="lg:col-span-7 flex justify-around flex-col">
              <p>
                viverra enim. Cras dolor sapien varius nisl. vehicula, amet,
                diam scelerisque odio eget nisi amet, elementum est. cursus at
                nibh orci orci ultrices In libero, venenatis ex nulla, urna.
                faucibus libero, lorem. id porta commodo dignissim, vitae
                Vestibulum efficitur. ex est. tempor nibh non. ipsum Sed at, sit
                dolor Morbi amet, sodales. massa lorem. tincidunt lacus, ipsum
                non Vestibulum scelerisque non odio varius ac enim. tincidunt
                nec tortor. consectetur Morbi consectetur
              </p>
              {/* <ScrollTrigger onEnter={() => setStart(true)}> */}
              <div className="flex w-full justify-between my-4 md:gap-16 bg-[#715204cc] md:w-fit rounded-xl py-3 lg:py-7 px-2 md:px-10">
                {stats.map((item) => (
                  <div key={item.title} className="flex flex-col text-center">
                    {/* {start && ( */}
                    <>
                      <CountUp
                        className="text-white text-2xl font-bold"
                        start={0}
                        end={item.value}
                        duration={1}
                      />
                      <p className="text-white text-md">{item.title}</p>
                    </>
                    {/* )} */}
                  </div>
                ))}
              </div>
              {/* </ScrollTrigger> */}
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
              <div className="absolute top-1/2 left-1/2 transform -translate-x-[0] lg:-translate-x-[30%]  -translate-y-1/2">
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
