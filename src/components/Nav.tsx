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

// next router

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 w-full lg:left-auto lg:right-4 lg:top-[80%] lg:h-[85%] lg:w-16 lg:max-w-md lg:-translate-y-1/2">
      {/* inner */}
      <div className="flex w-full items-center justify-between gap-y-10 bg-black/60 dark:bg-primary-500 px-4 py-4 backdrop-blur-sm dark:bg-gray-800/50 md:px-40 lg:h-max lg:flex-col lg:justify-center lg:rounded-full lg:px-0 lg:py-8">
        {navData.map((link, index) => {
          return (
            <Link
              aria-label={link.name}
              className={`${
                link.path === pathname
                  ? "text-primary-500 dark:text-white"
                  : "text-primary-100 dark:text-black/80"
              } relative flex items-center group  transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 min-w-max hidden xl:group-hover:flex">
                <div className="bg-primary-500 relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold text-white z-50">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-gray-700 dark:border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
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
