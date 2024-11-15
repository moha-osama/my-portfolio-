"use client";

import React from "react";

import SectionTitle from "../Section Title/SectionTitle";
import Marquee from "react-fast-marquee";
import Card from "./Card";
import { skills } from "@/constant";
import { motion, AnimatePresence } from "framer-motion";

const Technologies = () => {
  let isMobile = window.innerWidth <= 650;

  const [previewModeActive, setPreviewModeActive] = React.useState({
    row: true,
    grid: false,
  });

  const handlePreviewModeChange = (mode: string) => {
    setPreviewModeActive({ row: mode === "row", grid: mode === "grid" });
  };

  return (
    <AnimatePresence>
      <section
        className={`flex items-start justify-center lg:pt-32 mx-auto ${
          previewModeActive.row ? "lg:h-screens" : ""
        }`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: isMobile ? 0.3 : 0,
            ease: "linear",
          }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 200 },
          }}
        >
          <div className="py-6 lg:py-12">
            <SectionTitle
              title="Tools I know"
              previewAction={handlePreviewModeChange}
            />
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
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default Technologies;
