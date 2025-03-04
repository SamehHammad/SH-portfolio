/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import React, { memo } from "react";

// Define the Education interface
interface Education {
  _id: string;
  name: string;
  date: string;
}

// Define props interface
interface InternshipProps {
  education: Education;
}

// Type the component with memo
const InternshipCard = memo<InternshipProps>(({ education }) => {
  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      perspective={1000}
      scale={1}
      className=""
    >
      <div
        // Removed key from here since it's already on the parent component
        className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 w-full flex justify-between"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 w-full">
          <div className="flex items-center gap-2 md:gap-4 justify-between w-full">
            <h3 className="text-xs md:text-lg font-semibold text-white text-start">
              {education.name}
            </h3>
            <span className="px-2 py-1 text-xs md:text-sm rounded-full bg-accent/20 dark:text-primary-500 shadow-sm whitespace-nowrap">
              {education.date}
            </span>
          </div>
        </div>
      </div>
    </Tilt>
  );
});

InternshipCard.displayName = "InternshipCard";
export default InternshipCard;
