"use client"; // Mark as Client Component

import React, { useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useInView } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "@/utils/motion";
import useSkills from "@/hooks/useSkills";
import { getSanityImageUrl } from "@/lib/helper";
import { useTheme } from "next-themes";

interface Experience {
  date: string;
  description: string;
  icon: string;
  company: string;
  title: string;
  points: string[];
  logos: { asset: { _ref: string } }[];
}

interface ExperienceCardProps {
  experience: Experience;
  isDark: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isDark,
}) => {
  const logoUrl =
    experience?.logos?.[0]?.asset?._ref &&
    getSanityImageUrl(experience.logos[0].asset._ref);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Add Show More/Show Less state
  const [showMore, setShowMore] = useState(false);
  const maxChars = 100; // Adjust this value as needed
  const needsShowMore = experience.description.length > maxChars;
  const displayText = showMore
    ? experience.description
    : `${experience.description.substring(0, maxChars)}${needsShowMore ? "..." : ""}`;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDark ? "#131a29" : "#f3f4f6",
        color: isDark ? "#f3f4f6" : "#131a29",
        boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.1)",
      }}
      visible={isInView}
      contentArrowStyle={{
        borderRight: `7px solid ${isDark ? "#1F2937" : "#6B7280"}`,
      }}
      date={experience.date}
      iconStyle={{ background: "black" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={logoUrl}
            alt={experience.company}
            className="w-[90%] h-[90%] object-fill rounded-[40px]"
          />
        </div>
      }
      ref={ref}
    >
      <div className="flex flex-col items-center gap-3 ">
        <h3 className="text-gray-800 dark:text-gray-100 card-title font-bold">
          {experience.company}
        </h3>
        <p
          className="card-description"
          style={{ margin: 0 }}
        >
          {displayText}
        </p>
        {needsShowMore && (
          <button
            onClick={() => setShowMore(!showMore)}
            className={`
              mt-2 text-sm font-medium text-primary-500
              hover:text-primary-600 dark:hover:text-primary-400
              transition-colors duration-200
            `}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
  const { experiences } = useSkills();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Ensure experiences is an array of Experience objects
  const experiencesArray: Experience[] = Array.isArray(experiences)
    ? experiences
    : [];

  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <h1
          className={`tab-header uppercase`}
        >
          Work Experience.
        </h1>
      </motion.div>

      <div className="flex flex-col">
        <VerticalTimeline lineColor={isDark ? "white" : "#FF7000"}>
          {experiencesArray.map((experience: Experience, index: number) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isDark={isDark}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
