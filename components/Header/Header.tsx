import React from "react";
import Image from "next/image";
import pyramid from "@/assets/pyramid-gold-4000x4000.png";
import Luminaire from "../Luminaire/Luminaire";

const Header = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/" },
    { label: "Projects", href: "/" },
    { label: "Testimonials", href: "/" },
    { label: "Contact", href: "/" },
  ];

  return (
    <header className="lg:sticky z-50 top-16 container mx-auto">
      <nav className="hidden w-fit mx-auto lg:block rounded-3xl border border-[#daa52080] backdrop-blur-xl bg-[#1c1c1c73]/45 py-4 px-32">
        <ul className="flex items-center gap-14">
          {navItems.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      </nav>
      <nav className="lg:hidden py-12 flex justify-end items-center px-4 w-full">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
