"use client";

import React from "react";
import CertificateCard from "./CertificateCard";
import useSkills from "@/hooks/useSkills";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Course } from "@/utils/types";


const Certificates = () => {
  const { courses } = useSkills() as { courses: Course[] | undefined };

  return (
    <div className=" md:px-8 flex flex-col justify-center items-center">
      <div className="flex flex-col w-full my-4 md:max-w-7xl">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="tab-header">
          Certificates of Achievement in Programming
          </span>
          <span className="tab-description">
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
