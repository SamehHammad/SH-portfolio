"use client";
import React, { useState, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { getSanityImageUrl } from "@/lib/helper";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import { EyeOpenIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

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
  "text-red-400",
  "text-blue-400",
  "text-green-400",
  "text-yellow-400",
  "text-purple-400",
  "text-pink-400",
  "text-indigo-400",
  "text-teal-400",
  "text-orange-400",
  "text-cyan-400",
];

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project }) => {
  const [showMore, setShowMore] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const { theme } = useTheme();
  
  const maxChars = 100;
  const needsShowMore = project.description.length > maxChars;
  const displayText = showMore 
    ? project.description.slice(0, 200)
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
      const colorIndex = Math.abs(tag.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % colorClasses.length;
      colors[tag] = colorClasses[colorIndex];
    });
    return colors;
  }, [project.skills_tags]);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full max-w-[360px] mx-auto mb-5"
    >
      <Tilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        perspective={1000}
        scale={1.02}
        className={`
          w-[360px] h-[480px] 
          rounded-2xl overflow-hidden
          shadow-xl transition-all duration-300
          flex flex-col
          ${theme === "dark" 
            ? "bg-gray-800 text-gray-100 border border-gray-800" 
            : "bg-gray-200 text-gray-900 border border-gray-200"
          }
        `}
      >
        {/* Fixed Image Container */}
        <div 
          className="relative w-full h-[200px] flex-shrink-0"
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
                  transition-opacity duration-500
                  ${imgIndex === activeImage ? "opacity-100" : "opacity-0"}
                `}
                quality={85}
                priority={imgIndex === 0}
              />
            ))
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}

          {/* Overlay with Links */}
          <div className="absolute inset-0 flex justify-between p-3 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40">
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-10 h-10 rounded-full
                  flex items-center justify-center
                  ${theme === "dark" 
                    ? "bg-gray-800 hover:bg-gray-700" 
                    : "bg-white hover:bg-gray-100"
                  }
                  transition-transform duration-200 hover:scale-110
                `}
              >
                <EyeOpenIcon className="w-5 h-5" />
              </a>
            )}
            {project.code_url && (
              <a
                href={project.code_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-10 h-10 rounded-full
                  flex items-center justify-center
                  ${theme === "dark" 
                    ? "bg-gray-800 hover:bg-gray-700" 
                    : "bg-white hover:bg-gray-100"
                  }
                  transition-transform duration-200 hover:scale-110
                `}
              >
                <GitHubLogoIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 line-clamp-1">
            {project.title}
          </h3>
          
          <div className="text-sm text-gray-500 dark:text-gray-400 flex-grow">
            <p>{displayText}</p>
            {needsShowMore && (
              <button
                onClick={() => setShowMore(!showMore)}
                className={`
                  mt-2 text-sm font-medium text-primary-500
                  transition-colors duration-200
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
                  text-xs font-medium px-2 py-1 
                  rounded-full
                  ${tagColors[tag]}
                  ${theme === "dark" 
                    ? "bg-gray-800" 
                    : "bg-gray-100"
                  }
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