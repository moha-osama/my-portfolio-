"use client";

import React, { useRef } from "react";
import Image from "next/image";
import pyramid from "@/assets/pyramid-gold-4000x4000.png";
import Luminaire from "../Luminaire/Luminaire";

const Hero: React.FC = () => {
  const imageRef = useRef<any>(null);

  return (
    <section
      id="hero"
      className="container mx-auto pt-12 lg:pt-24 lg:min-h-screen flex items-start lg:items-center relative"
    >
      <div className="grid max-w-screen-xl px-4 py mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center lg:col-span-7">
          <div className="flex flex-col">
            <h3 className="text-xl md:text-3xl text-white font-bold opacity-85">
              👋 Hi, I'm Mohamed Osama
            </h3>
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-normal">
                Front-end Developer
              </h1>
              <p className="text-md md:text-2xl tracking-wider text-white">
                As a highly competent front-end developer, I have created a
                diverse range of projects which showcase my technical skills and
                expertise. My proficiency in HTML, CSS, and JavaScript and
                popular frameworks such as React, I also have experience in
                popular CSS frameworks to create beautiful UI designs and
                responsive layouts
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="mailto:zmuhamedosama@gmail.com"
              className="px-5 py-2 text-black bg-white rounded-lg hover:bg-[#654A06] hover:text-white duration-300 active:scale-[1.1]"
            >
              Get In Touch
            </a>
            <button className="px-5 py-2 text-white border border-white rounded-lg hover:bg-white duration-300 hover:text-[#654A06] active:scale-[1.1]">
              View Projects
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:mt-0 lg:col-span-5">
          <Luminaire className="w-[37rem] h-[27rem] m-[50px]" />
          <Image
            ref={imageRef}
            src={pyramid}
            alt="pyramid"
            width={400}
            height={400}
            quality={100}
            className="moving-image"
            style={{
              position: "absolute",
              transition: "all 1s ease",
            }}
          />
        </div>
      </div>
      <div className="hidden lg:block absolute -bottom-24">
        <Luminaire />
      </div>
    </section>
  );
};

export default Hero;
