"use client";

import React, { useRef } from "react";
import Image from "next/image";
import pyramid from "@/assets/pyramid-gold-4000x4000.png";
import Luminaire from "../Luminaire/Luminaire";
import Links from "./Links";
import Technologies from "../Technologies/Technologies";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const imageRef = useRef<any>(null);

  return (
    <section
      id="hero"
      className="lg:min-h-screen relative pb-8 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto pt-4 lg:pt-28">
        <div className="grid max-w-screen-xl py mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
          <motion.div
            style={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="place-self-center px-4 lg:col-span-7"
          >
            <div className="flex flex-col">
              <h3 className="text-xl lg:text-3xl text-white font-bold opacity-85">
                👋 Hi, I'm Mohamed Osama
              </h3>
              <div className="flex flex-col gap-5">
                <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-normal">
                  Front-end Developer
                </h1>
                <p className="text-md lg:text-2xl tracking-wider text-white">
                  Junior Frontend Developer skilled in technologies such as
                  React, Next.js, and Tailwind CSS, with a strong background in
                  creating engaging user interfaces and web applications and has
                  experience working on SaaS platforms and various web projects.
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
              <a href="#projects">
                <button className="px-5 py-2 text-white border border-white rounded-lg hover:bg-white duration-300 hover:text-[#654A06] active:scale-[1.1]">
                  View Projects
                </button>
              </a>
            </div>
            <Links />
          </motion.div>
          <motion.div
            style={{ x: 400, opacity: 0 }}
            animate={{ x: 100, opacity: 1 }}
            className="hidden lg:flex justify-end lg:mt-0 lg:col-span-5 relative"
          >
            <Image
              ref={imageRef}
              src={pyramid}
              alt="pyramid"
              width={400}
              height={400}
              quality={100}
              className="absolute left-0 z-10"
            />
          </motion.div>
        </div>
      </div>
      <div className="lg:hidden w-full">
        <Technologies />
      </div>
      <div className="hidden lg:block absolute -bottom-24 left-0">
        <Luminaire />
      </div>
      {/* <div className="absolute z-0 -right-40 top-1/2 -translate-y-1/2">
        <Luminaire className="w-[37rem] h-[27rem] m-[50px]" />
      </div> */}
    </section>
  );
};

export default Hero;
