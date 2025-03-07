"use client";
import React from "react";
import { getSanityImageUrl } from "@/lib/helper";
import Tilt from "react-parallax-tilt";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  const cardBg = isDark ? "bg-gray-800 " : "bg-gray-100";
  const textColor = isDark ? "text-white" : "text-gray-800";
  const secondaryTextColor = isDark ? "text-gray-300" : "text-gray-600";
  const dividerColor = isDark ? "bg-slate-400" : "bg-slate-300";
  const cardBorder = isDark
    ? "border border-gray-700"
    : "border border-gray-300";

  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      perspective={1000}
      scale={1}
      className={`${cardBg} ${cardBorder} sm:w-[360px] min-h-[350px] h-auto p-10 rounded-3xl w-full flex flex-col gap-5 shadow-lg`}
    >
      <div className="flex flex-col items-center gap-1">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`${testimonial.name}'s profile`}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div className="flex-1 flex flex-col items-center">
          <p className={`${textColor} font-medium text-[16px]`}>
            <span className={isDark ? "blue-text-gradient" : "text-blue-600"}>
              @
            </span>{" "}
            {testimonial.name}
          </p>
          <p className={`mt-1 ${secondaryTextColor} text-[14px] text-center`}>
            {testimonial.position}
          </p>
        </div>
      </div>
      <div className={`w-full h-[1px] ${dividerColor}`}></div>
      <div>
        <p className={`${textColor} tracking-wider text-xs md:text-sm  xl:text-[16px] text-center`}>
          {testimonial.comment}
        </p>
      </div>
    </Tilt>
  );
};

export default TestimonialCard;
