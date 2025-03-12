"use client"; // Add this at the top for Client Component

import React from "react";
import ServiceCard from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { ResponsiveProps } from "@/utils/types";


const Responsive: React.FC<ResponsiveProps> = ({ services }) => {
  return (
    <div className="px-4 md:px-8 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center w-full my-5">
        <motion.p
          className="tab-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Enhance browser compatibility and user experience by implementing
          JavaScript polyfills with Babel and Modernizr, automating
          cross-browser testing using tools like BrowserStack and Selenium, and
          applying progressive enhancement with graceful degradation techniques.
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

export default Responsive;
