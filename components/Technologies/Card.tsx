"use client";

import React from "react";
import Image from "next/image";

interface CardProps {
  skill: { label: string; icon: string };
}

const Card = ({ skill }: CardProps) => {
  const cardRef = React.useRef<HTMLLIElement>(null);

  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    if (!cardRef.current) return;

    const div = cardRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <li
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      className="list-none mx-2 rounded-3xl backdrop-blur-xl p-4 lg:p-8 h-fit w-fit"
      style={{
        background: `${
          position.x !== 0 || position.y !== 0
            ? `radial-gradient(500px circle at ${position.x}px ${position.y}px, #ffb700, transparent 40%)`
            : "#654A06"
        }`,
        cursor: "pointer",
      }}
    >
      <div className="w-fit">
        <Image
          className={`object-cover duration-1000 h-[40px] w-[40px] lg:h-[64px] lg:w-[64px] `}
          src={skill.icon}
          alt={skill.label}
          width={100}
          height={100}
          quality={100}
        />
      </div>
    </li>
  );
};

export default Card;
