"use client"; // Mark as Client Component

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import useInfo from "@/hooks/useInfo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

export default function HeroPage() {
  // Wrap the component content in QueryClientProvider
  return (
    <QueryClientProvider client={queryClient}>
      <HeroPageContent />
    </QueryClientProvider>
  );
}

function HeroPageContent() {
  const { heroSlider } = useInfo();
  console.log(heroSlider);

  const images = [
    "/pp.avif",
    "/ceramic.png",
    "/bg-code.png",
    "/dash.avif",
    "/task.avif",
    "/tt.png",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center gap-5 h-full z-0">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={100}
        slidesPerView={1}
        loop={true}
        navigation={false}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="rounded-2xl overflow-hidden shadow-lg relative h-full w-full [&_.swiper-slide-active]:opacity-100 [&_.swiper-slide]:opacity-0 [&_.swiper-slide]:transition-opacity [&_.swiper-slide]:duration-1000"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                quality={100}
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
