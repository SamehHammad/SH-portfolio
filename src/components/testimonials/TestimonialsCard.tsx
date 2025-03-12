"use client";
import React from "react";
import { getSanityImageUrl } from "@/lib/helper";
import Tilt from "react-parallax-tilt";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

//================ Type Definitions ================
interface TestimonialData {
  _id: string;
  name: string;
  position: string;
  comment: string;
  image: Array<{
    _type: string;
    _key: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }>;
}

interface FeedbackCardProps {
  index: number;
  testimonial: TestimonialData;
  isDark: boolean;
}

//================ TestimonialCard Component ================
const TestimonialCard: React.FC<FeedbackCardProps> = ({
  testimonial,
  isDark,
}) => {
  const imageUrl =
    testimonial?.image?.[0]?.asset?._ref &&
    getSanityImageUrl(testimonial.image[0].asset._ref);

  // Define light and dark mode classes
  const dividerColor = isDark ? "bg-slate-400" : "bg-slate-300";

  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      perspective={1000}
      scale={1}
      className={`card sm:w-[360px] min-h-[350px] h-auto p-10 rounded-3xl w-full flex flex-col gap-5 shadow-lg mb-4`}
    >
      <div className="flex flex-col items-center gap-1">
        {imageUrl && (
          <Image
            width={10}
            height={10}
            src={imageUrl}
            alt={`${testimonial.name}'s profile`}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div className="flex-1 flex flex-col items-center">
          <p className={`card-title font-medium text-[16px]`}>
            <span className={isDark ? "text-primary-500" : "text-blue-600"}>
              @
            </span>{" "}
            {testimonial.name}
          </p>
          <p className={`mt-1 card-description text-[14px] text-center`}>
            {testimonial.position}
          </p>
        </div>
      </div>
      <div className={`w-full h-[1px] ${dividerColor}`}></div>
      <div>
        <p
          className={`card-description tracking-wider text-xs md:text-sm  xl:text-[16px] text-center`}
        >
          {testimonial.comment}
        </p>
      </div>
    </Tilt>
  );
};

export default TestimonialCard;
