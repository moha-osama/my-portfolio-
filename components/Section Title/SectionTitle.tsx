"use client";

import React from "react";
import solgan from "@/assets/fa6-solid_ankh.svg";
import Image from "next/image";

interface SectionTitleProps {
  title: string;
  previewAction?: (mode: string) => void;
}

const SectionTitle = ({ title, previewAction }: SectionTitleProps) => {
  const [previewModeActive, setPreviewModeActive] = React.useState({
    row: true,
    grid: false,
  });

  const previewModeHandler = (mode: string) => {
    setPreviewModeActive({ row: mode === "row", grid: mode === "grid" });
    if (previewAction) previewAction(mode);
  };

  return (
    <div
      className={`flex gap-3 items-end justify-center my-6 lg:my-0 relative ${
        previewAction ? "pb-12" : ""
      }`}
    >
      <Image src={solgan} width={20} height={20} quality={100} alt="solgan" />
      <h1 className="about-me-title text-2xl lg:text-4xl font-bold">{title}</h1>
      <Image src={solgan} width={20} height={20} quality={100} alt="solgan" />
      {previewAction && (
        <div
          className={`absolute right-4 md:right-16  ${
            previewAction !== undefined ? "-bottom-4 lg:bottom-0" : ""
          }`}
        >
          <div>
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <button
                onClick={() => previewModeHandler("row")}
                className={`hover:bg-[#dea30d] py-2 px-4 rounded-lg text-2xl ${
                  previewModeActive.row ? "bg-[#dea30d]" : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M16 3H8c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM2 7v10c0 1.103.897 2 2 2V5c-1.103 0-2 .897-2 2zm18-2v14c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z" />
                </svg>
              </button>
              <button
                onClick={() => previewModeHandler("grid")}
                className={`hover:bg-[#dea30d] py-2 px-4 rounded-lg text-2xl ${
                  previewModeActive.grid ? "bg-[#dea30d]" : ""
                }`}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M1 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V4zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM1 9a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V9zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V9zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
