"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import ProjectCard from "@/components/projects/ProjectCard";
import useProjects from "@/hooks/useProjects";

const ProjectsPage = () => {
  const { projects } = useProjects();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div variants={textVariant()} className="text-center mb-5">
        <p className="text-lg text-gray-600 font-medium dark:text-gray-50">
          My Work
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-500 my-4">
          Projects
        </h2>
      </motion.div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-center text-gray-600 text-lg leading-relaxed dark:text-gray-100"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. These reflect my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className=" mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-5 p-5">
          {projects?.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            >
              <ProjectCard index={index} project={project} className="h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
