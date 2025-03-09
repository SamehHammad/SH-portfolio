"use client";

import React from "react";
import ServiceCard, { ServiceData } from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

interface SEOProps {
  services: ServiceData[];
}

const Performance: React.FC<SEOProps> = ({ services }) => {
  return (
    <div className="px-4 md:px-8 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center w-full my-5">
        <motion.p
          className="text-sm md:text-lg  text-gray-800 dark:text-gray-100 text-center max-w-5xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Optimize web performance by reducing third-party dependencies,
          implementing code splitting and lazy loading with Next.js and Webpack,
          and enhancing JavaScript execution through profiling and browser dev
          tools for better Lighthouse scores.
        </motion.p>
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
          {services?.map((service) => (
            <SwiperSlide key={service._id} className="py-6 flex justify-center">
              <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                <ServiceCard service={service} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Performance;
