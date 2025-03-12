/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import React, { memo } from "react";
import Link from "next/link";
import { InternshipProps } from "@/utils/types";

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
      <div className="card w-full flex flex-col justify-between gap-2">
        <div className="flex flex-col items-start justify-between gap-2 w-full">
          <h3 className="card-title">{education.name}</h3>
          <span className="px-3 py-1 text-sm md:text-md rounded-full bg-accent/30 text-primary-500 shadow-md">
            {education.date}
          </span>
        </div>
        <div className="w-full ">
          <p className="card-description">
            Explore more about my internship experiences and projects I worked
            on during this period.
            <Link
              href={`/projects?org=${education.org}`}
              className="interactive-link"
              aria-label="explore more projects"
            >
              click here.
            </Link>
          </p>
        </div>
      </div>
    </Tilt>
  );
});

InternshipCard.displayName = "InternshipCard";
export default InternshipCard;
