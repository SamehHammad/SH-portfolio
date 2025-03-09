"use client";

import React, { useState, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { getSanityImageUrl } from "@/lib/helper";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import { EyeOpenIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";

interface ProjectImageAsset {
  _ref: string;
  _type: string;
}

interface ProjectImage {
  _type: string;
  _key: string;
  asset: ProjectImageAsset;
}

interface ProjectSlug {
  current: string;
  _type: string;
}

interface Project {
  _id: string;
  title: string;
  description: string;
  code_url: string;
  demo_url: string;
  skills_tags: string[];
  image: ProjectImage[];
  slug: ProjectSlug;
  _createdAt: string;
  _updatedAt: string;
}

interface ProjectCardProps {
  index: number;
  project: Project;
}

const colorClasses = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-indigo-500",
  "text-teal-500",
  "text-orange-500",
  "text-cyan-500",
];

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project }) => {
  const [showMore, setShowMore] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const maxChars = 120; // Slightly increased for better initial readability
  const needsShowMore = project.description.length > maxChars;
  const displayText = showMore
    ? project.description
    : `${project.description.substring(0, maxChars)}${needsShowMore ? "..." : ""}`;

  const images = project.image.map((img) => getSanityImageUrl(img.asset._ref));

  const handleHover = () => {
    if (images.length > 1) {
      setActiveImage((prev) => (prev + 1) % images.length);
    }
  };

  const tagColors = useMemo(() => {
    const colors: { [key: string]: string } = {};
    project.skills_tags.forEach((tag) => {
      const colorIndex =
        Math.abs(
          tag.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
        ) % colorClasses.length;
      colors[tag] = colorClasses[colorIndex];
    });
    return colors;
  }, [project.skills_tags]);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full max-w-[360px] mx-auto mb-8"
    >
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={900}
        scale={1.03}
        transitionSpeed={450}
        className={`
          w-full h-auto min-h-[500px]
          rounded-xl overflow-hidden
          shadow-lg transition-all duration-300
          flex flex-col
            bg-[#f3f4f6] dark:bg-[#131a29] dark:text-gray-100 border border-gray-800
        `}
      >
        {/* Image Container */}
        <div
          className="relative w-full h-[200px] flex-shrink-0 bg-gray-100 dark:bg-gray-800"
          onMouseEnter={handleHover}
        >
          {images?.length > 0 ? (
            images.map((img, imgIndex) => (
              <Image
                key={imgIndex}
                src={img}
                alt={`${project.title} preview`}
                fill
                className={`
                  object-cover 
                  transition-opacity duration-700 ease-in-out
                  ${imgIndex === activeImage ? "opacity-100" : "opacity-0"}
                `}
                quality={90}
                priority={imgIndex === 0}
              />
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                No Image Available
              </span>
            </div>
          )}

          {/* Overlay with Links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 p-3 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900/60">
            {project.demo_url && (
              <Link
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-12 h-12 rounded-full
                  flex items-center justify-center
                  bg-white/90 dark:bg-gray-800/90 
                  hover:bg-white dark:hover:bg-gray-700
                  transition-all duration-200 hover:scale-105
                  shadow-md
                `}
              >
                <EyeOpenIcon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
              </Link>
            )}
            {project.code_url && (
              <Link
                href={project.code_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-12 h-12 rounded-full
                  flex items-center justify-center
                  bg-white/90 dark:bg-gray-800/90 
                  hover:bg-white dark:hover:bg-gray-700
                  transition-all duration-200 hover:scale-105
                  shadow-md
                `}
              >
                <GitHubLogoIcon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
              </Link>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3
            className={`
              text-lg font-semibold mb-3 
              line-clamp-1
              ${isDark ? "text-gray-100" : "text-gray-800"}
            `}
          >
            {project.title}
          </h3>

          <div className="text-xs flex-grow">
            <p
              className={`
                ${isDark ? "text-gray-300" : "text-gray-600"}
                leading-relaxed
              `}
            >
              {displayText}
            </p>
            {needsShowMore && (
              <button
                onClick={() => setShowMore(!showMore)}
                className={`
                  mt-3 text-sm font-medium text-primary-500 transition-colors duration-200
                `}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills_tags.map((tag) => (
              <span
                key={`${project.title}-${tag}`}
                className={`
                  text-xs font-medium px-2.5 py-1
                  rounded-full
                  ${tagColors[tag]}
                  ${isDark ? "bg-gray-800" : "bg-gray-100"}
                  shadow-sm
                `}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
