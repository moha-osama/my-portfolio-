"use client";

import React, { useEffect } from "react";

import SectionTitle from "../Section Title/SectionTitle";
import Marquee from "react-fast-marquee";
import Card from "./Card";
import { skills } from "@/constant";
import { motion, AnimatePresence } from "framer-motion";

const Technologies = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    let isMobile = window.innerWidth <= 650;
    setIsMobile(isMobile);
  }, []);

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
        className={`flex items-start justify-center py-16 lg:py-32 mx-auto ${
          previewModeActive.row ? "lg:h-screens" : ""
        }`}
      >
        <div>
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
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Technologies;
