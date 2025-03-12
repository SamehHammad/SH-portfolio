"use client"; // Add this at the top for Client Component

import React from "react";
import { metadata } from "../../../lib/testimonialsMeta";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import useTestimonials from "@/hooks/useTestimonials";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import TestimonialCard from "@/components/testimonials/TestimonialsCard";
import { textVariant } from "@/utils/motion";
import { useTheme } from "next-themes";
import Socials from "@/components/Socials";



export { metadata };

const TestimonialsPage = () => {
  const { testimonials } = useTestimonials();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div
      className={` transition-colors duration-300 px-5 lg:px-20`}
    >
      {/* Header Section */}
      <div className={`rounded-2xl mt-12 mx-4 md:mx-8 shadow-lg  card`}>
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3"
        >
          <div className="flex flex-col justify-center items-center sm:items-start w-full">
            <h2 className={`tab-header mt-2`}>Testimonials</h2>
            <div className="flex flex-col items-center justify-between w-full sm:flex-row">
              <p className={`card-description  uppercase `}>
                What others say
              </p>

              <p className="tab-description mt-2">
                Want to see more reviews?{"  "}
                <Link
                  className="interactive-link"
                  href="https://www.linkedin.com/in/sameh7ammad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="more reviews"
                >
                  Click here.
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="sm:hidden flex justify-center items-center w-full">
            <Socials />
          </div>
        </motion.div>
      </div>

      {/* Testimonials Swiper */}
      <div className="px-4 md:px-8 flex justify-center">
        <div className="w-full max-w-7xl">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
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
            {testimonials?.map((testimonial, index) => (
              <SwiperSlide
                key={testimonial._id}
                className="py-6 flex justify-center"
              >
                <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                  <TestimonialCard
                    index={index}
                    testimonial={testimonial}
                    isDark={isDark}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
