"use client";
import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import useInfo from "../../hooks/useInfo";
import { fadeIn } from "../variants";
import ProjectsBtn from "./ProjectsBtn";
import { UserInfo } from "@/utils/types";


const Info = () => {
  // Use the useInfo hook and type the returned data
  const { info } = useInfo() as { info: UserInfo[] | null };
  const userInfo = info?.[0];

  // Memoize userInfo to prevent unnecessary re-renders
  const memoizedUserInfo = useMemo(() => userInfo, [userInfo]);

  // Memoize the name rendering logic
  const renderName = useCallback(() => {
    if (!memoizedUserInfo?.name) return null;

    const nameParts = memoizedUserInfo.name.split(" ");
    if (nameParts.length < 2) return memoizedUserInfo.name;

    const firstName = nameParts[0];
    const lastName = nameParts[1];

    return (
      <>
        {firstName.slice(0, -2)}
        <motion.span
          className="text-primary-500 mix-blend-color-dodge animate-pulse"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {firstName.slice(-2)}
        </motion.span>{" "}
        <motion.span
          className="text-primary-500 mix-blend-color-dodge animate-pulse"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {lastName.slice(0, 2)}
        </motion.span>
        {lastName.slice(2)}
      </>
    );
  }, [memoizedUserInfo]);

  return (
    <div className="relative z-0">
      {/* Image Container */}
      <div className="">
        {/* Avatar Image */}
        {memoizedUserInfo?.image?.[0]?.asset?._ref && (
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className=""
          ></motion.div>
        )}
      </div>

      {/* Text Content */}
      <div className="">
        <div className="text-center flex flex-col justify-center items-center gap-2">
          {/* Name Display */}
          {memoizedUserInfo?.name && (
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 font-extrabold text-4xl md:text-5xl lg:text-5xl dark:text-white text-black/35 tracking-wide"
            >
              {renderName()}
            </motion.h1>
          )}

          {/* Title */}
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-xl sm:text-lg md:text-xl text-gray-700 dark:text-yellow-700   mix-blend-color-dodge animate-pulse my-2 font-bold tracking-wider"
          >
            {memoizedUserInfo?.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:max-w-xl mx-auto xl:mx-0 sm:text-md md:text-md tracking-widest"
          >
            {memoizedUserInfo?.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="my-8"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Info); // Memoize the entire component
