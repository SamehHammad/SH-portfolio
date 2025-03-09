"use client";

import React from "react";
import CertificateCard from "./CertificateCard";
import useSkills from "@/hooks/useSkills";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

// Define the Course type
interface Course {
  _id: string;
  title: string;
  url: string;
  image?: {
    asset: {
      _ref: string;
    };
  }[];
}

const Certificates = () => {
  const { courses } = useSkills() as { courses: Course[] | undefined };

  return (
    <div className="px-4 md:px-8 flex flex-col justify-center items-center">
      <div className="flex flex-col w-full my-5 max-w-7xl">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-lg md:text-2xl font-bold text-primary-500 text-center  mx-auto leading-relaxed">
            Explore my internships in the programming field.
          </span>
          <span className="text-sm md:text-lg text-gray-800 dark:text-gray-100 text-center max-w-5xl leading-relaxed">
            Check out my front-end development certificates showcasing skills in
            Next.js, React, and clean coding! Browse them to learn more about my
            expertise in building modern, responsive web applications.{" "}
          </span>
        </motion.div>
      </div>
      <div className="w-full max-w-7xl">
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
          {courses?.map((course, idx) => (
            <SwiperSlide key={course._id} className="py-6 flex justify-center">
              <div className="w-full">
                <CertificateCard
                  course={course}
                  index={idx}
                  totalCourses={courses.length}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certificates;
