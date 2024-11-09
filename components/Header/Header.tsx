import React from "react";
import Image from "next/image";
import pyramid from "@/assets/pyramid-gold-4000x4000.png";
import Luminaire from "../Luminaire/Luminaire";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About Me", href: "#about-me" },
    { label: "Technologies", href: "#technologies" },
    { label: "Experince", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <header className="lg:fixed lg:translate-x-1/2 lg:right-1/2 z-50 top-16 container mx-auto">
      <nav className="hidden min-w-[56.75rem] max-w-fit mx-auto lg:block rounded-[3.125rem] border border-[#daa52080] backdrop-blur-xl bg-[#1c1c1c73]/45 p-2">
        <DesktopNav navItems={navItems} />
      </nav>
      <MobileNav navItems={navItems} />
    </header>
  );
};

export default Header;
