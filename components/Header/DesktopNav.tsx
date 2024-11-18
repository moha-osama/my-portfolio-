"use client";
import React from "react";
import Link from "next/link";

type navItemObj = { label: string; href: string };

interface DesktopNavProps {
  navItems: navItemObj[];
}

const DesktopNav = ({ navItems }: DesktopNavProps) => {
  const navItemsRef = React.useRef<(HTMLLIElement | null)[]>([]);
  const [navItemWidth, setNavItemWidth] = React.useState<number | null>(null);
  const [navItemPosition, setNavItemPosition] = React.useState<number | null>(
    null
  );
  const [firstNavItemXPosition, setFirstNavItemXPosition] = React.useState<
    number | 0
  >(0);

  const activeNavItemHandler = (item: navItemObj) => {
    let clickedItem = navItemsRef.current.find(
      (li) => li?.ariaLabel === item.label
    );
    if (clickedItem) {
      const { width, x } = clickedItem.getBoundingClientRect();
      setNavItemWidth(width);
      setNavItemPosition(x - firstNavItemXPosition);
    }
  };

  React.useLayoutEffect(() => {
    const defaultItem = navItemsRef.current[0];
    if (defaultItem) {
      const { width, x } = defaultItem.getBoundingClientRect();
      if (firstNavItemXPosition === 0) {
        setFirstNavItemXPosition(x);
      } else {
        return;
      }
      setNavItemWidth(width);
      setNavItemPosition(0);
    }
  }, []);

  return (
    <nav className="hidden min-w-[56.75rem] max-w-fit mx-auto lg:block rounded-[3.125rem] border border-[#daa52080] backdrop-blur-xl bg-[#1c1c1c73]/45 p-2">
      <ul className="flex items-center gap-12 relative">
        {navItems.map((item, index) => (
          <Link
            scroll
            href={item.href}
            aria-label={item.label}
            onClick={() => activeNavItemHandler(item)}
            ref={(el: any) => (navItemsRef.current[index] = el)}
            key={item.label}
            className="py-4 z-20 px-10 min-w-24 text-center rounded-[3.75rem] hover:cursor-pointer duration-500 hover:bg-[#727272] active:bg-[#DAA520]"
          >
            <li>{item.label}</li>
          </Link>
        ))}
        <div
          className="bg-[#DAA520] absolute left-0 z-[0] h-full rounded-[3.75rem] duration-200 "
          style={{
            width: `${navItemWidth}px`,
            transform: `translateX(${navItemPosition}px)`,
          }}
        ></div>
      </ul>
    </nav>
  );
};

export default DesktopNav;
