"use client";
import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useInView } from "framer-motion"; // Import useInView
import "react-vertical-timeline-component/style.min.css";
import { styles } from "@/utils/style/styles";
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
}) => {
  const logoUrl =
    experience?.logos?.[0]?.asset?._ref &&
    getSanityImageUrl(experience.logos[0].asset._ref);

  // Create a ref for the element to track
  const ref = useRef(null);
  // Use useInView to detect when the element is in view
  const isInView = useInView(ref, { once: true }); // 'once: true' ensures it triggers only once

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#6B7280",
        color: "#FF7000",
      }}
      visible={isInView} // Pass the boolean value from useInView
      contentArrowStyle={{ borderRight: "7px solid  #6B7280" }}
      date={experience.date}
      iconStyle={{ background: "black" }}
      icon={
        <div className=" flex justify-center items-center w-full h-full">
          <img
            src={logoUrl}
            alt={experience.company}
            className="w-[90%] h-[90%] object-fill rounded-[40px]"
          />
        </div>
      }
      ref={ref}
    >
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-gray-950 dark:gray-800 text-[22px] font-bold">
          {experience.company}
        </h3>
        <p
          className="text-gray-50 dark:text-white text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.description}
        </p>
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
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} text-center text-black dark:text-white font-bold text-xl `}
        >
       Work Experience.
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center text-black dark:text-white font-semibold text-md`}
        >
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor={isDark ? "white" : "#FF7000"} // Red in both modes, but you could customize
        >
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
