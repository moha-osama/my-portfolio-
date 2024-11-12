"use client";

import React from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/util/use-dimensions";
import Link from "next/link";

type navItemObj = { label: string; href: string };

interface MobileNavProps {
  navItems: navItemObj[];
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MobileNav = ({ navItems }: MobileNavProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.nav
      className={`lg:hidden py-10 px-10 w-full h-full`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="absolute z-50 top-0 left-0 bottom-0 w-screen bg-white overscroll-y-none"
        variants={sidebar}
      />
      <motion.ul
        variants={ulVariants}
        className={`${
          !isOpen ? "hidden" : "top-0"
        } z-50 absolute left-0 w-full flex gap-8 flex-col items-center justify-center h-screen`}
      >
        {navItems.map((item) => (
          <motion.li
            className="text-black text-xl"
            variants={liVariants}
            key={item.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={item.href} onClick={() => toggleOpen()}>
              {item.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <button
        onClick={() => toggleOpen()}
        className="hover:cursor-pointer absolute z-50 top-[18px] left-[28px] w-[50px] h-[48px]"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </motion.nav>
  );
};

export default MobileNav;
