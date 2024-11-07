import React from "react";
import solgan from "@/assets/fa6-solid_ankh.svg";
import Image from "next/image";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex gap-3 items-end justify-center my-6 lg:my-0">
      <Image src={solgan} width={20} height={20} quality={100} alt="solgan" />
      <h1 className="about-me-title text-2xl lg:text-4xl font-bold">{title}</h1>
      <Image src={solgan} width={20} height={20} quality={100} alt="solgan" />
    </div>
  );
};

export default SectionTitle;
