import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeButton from "./ThemeButton";

const Header = () => {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About Me", href: "#about-me" },
    { label: "Experince", href: "#experience" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <header className="lg:fixed lg:translate-x-1/2 lg:right-1/2 z-50 top-16 w-full mx-auto">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
      {/* <ThemeButton className="fixed z-50 right-5 md:right-2 xl:right-16 top-5 lg:top-1/2 lg:-translate-y-1/2" /> */}
    </header>
  );
};

export default Header;
