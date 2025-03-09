/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import React, { memo } from "react";
import Link from "next/link";

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
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      perspective={1000}
      scale={1.05}
      className="transition-transform duration-500 ease-in-out"
    >
      <div className="p-6 rounded-lg bg-gray-100 border border-gray-300  bg-gradient-to-r  dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transform transition-all duration-300 w-full flex flex-col justify-between space-y-4">
        <div className="flex flex-col items-start justify-between gap-2 w-full">
          <h3 className="text-lg md:text-xl font-semibold dark:text-primary-100 leading-tight">
            {education.name}
          </h3>
          <span className="px-3 py-1 text-sm md:text-md rounded-full bg-accent/30 text-primary-500 shadow-md">
            {education.date}
          </span>
        </div>
        <div className="w-full text-sm text-gray-400">
          <p className="leading-relaxed">
            Explore more about my internship experiences and projects I worked
            on during this period. <Link href={"/projects"} className="underline text-primary-500 tracking-wider leading-8">click here</Link>
          </p>
        </div>
      </div>
    </Tilt>
  );
});

InternshipCard.displayName = "InternshipCard";
export default InternshipCard;
