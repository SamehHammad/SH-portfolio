"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import ProjectCard from "@/components/projects/ProjectCard";
import useProjects from "@/hooks/useProjects";
import { useSearchParams } from "next/navigation";

// Move this outside the component to avoid recalculation
const filterProjects = (projects, organization) => {
  if (!projects) return [];
  if (!organization) return projects;
  return projects.filter(
    (project) =>
      project.organization === (organization === "iti" ? "iti" : "sef")
  );
};

const ProjectsPage = () => {
  const { projects } = useProjects();
  const searchParams = useSearchParams();
  const organization = searchParams?.get("intern");
  const displayProjects = filterProjects(projects, organization);

  return (
    <div className="pt-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-2 md:mb-4"
      >
        <h2 className="tab-header md:mb-2">
          Projects
        </h2>
        <p className="tab-description">
          My Projects{" "}
          {organization && (
            <span className="inline-block tab-description">
              in <span className="text-primary-500 font-bold">{organization.toUpperCase()}</span> Internship
            </span>
          )}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center tab-description"
        >
          These projects highlight my skills and experience through real-world
          examples, showcasing my ability to tackle complex challenges with
          diverse technologies. Each includes links to code repositories and
          live demos for further exploration.
        </motion.p>
      </div>

      <div className="px-4 md:px-8 flex justify-center">
        <div className="w-full max-w-7xl">
          {displayProjects.length > 0 ? (
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                480: { slidesPerView: 1.5, spaceBetween: 20 },
                830: { slidesPerView: 2, spaceBetween: 25 },
                1024: { slidesPerView: 2, spaceBetween: 30 },
                1300: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="mySwiper pb-16"
            >
              {displayProjects.map((project, index) => (
                <SwiperSlide
                  key={`project-${project.id || index}`}
                  className="py-6 flex justify-center"
                >
                  <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                    <motion.div
                      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                    >
                      <ProjectCard
                        index={index}
                        project={project}
                        className="h-full"
                      />
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300">
                No projects available to display
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
