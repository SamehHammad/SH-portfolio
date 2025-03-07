"use client";
// icons
import React from "react";
import {
  HiHome,
  HiUserGroup,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { usePathname } from "next/navigation";
// next link
import Link from "next/link";

// nav data
export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUserGroup /> },
  { name: "Services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "Projects", path: "/projects", icon: <HiViewColumns /> },
  {
    name: "Testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  { name: "Contact", path: "/contact", icon: <HiEnvelope /> },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 w-full xl:right-[2%] xl:top-0 xl:h-[85%] xl:w-16 xl:max-w-md">
      {/* inner */}
      <div className="flex w-full items-center justify-between gap-y-10 bg-white/10 dark:bg-primary-500 px-4 py-4 backdrop-blur-sm dark:bg-gray-800/50 md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:py-8">
        {navData.map((link, index) => {
          return (
            <Link
              aria-label={link.name}
              className={`${
                link.path === pathname
                  ? "text-accent"
                  : "text-gray-700 dark:text-gray-300"
              } relative flex items-center transition-all duration-300 hover:text-accent`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute right-0 hidden min-w-max pr-14 xl:group-hover:flex">
                <div className="relative flex items-center rounded-[3px] bg-primary-500 p-[6px] text-primary">
                  <div className="z-50 text-[12px] font-semibold leading-none text-white">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-gray-700 dark:border-l-white"></div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
