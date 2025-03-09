import React from "react";
import InternshipCard from "./InternshipCard";
import useSkills from "@/hooks/useSkills";
import { motion } from "framer-motion";
interface Education {
  _id: string;
  name: string;
  date: string;
}

const Internships = () => {
  // Type the useSkills hook return value
  const { education } = useSkills() as { education: Education[] | undefined };

  return (
    <div className="flex flex-col w-full flex-wrap items-center justify-between gap-2 mb-3">
      <div className="flex flex-col items-center w-full my-5 max-w-7xl">
        <motion.div
          className="flex flex-col items-center gap-2 pb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-lg md:text-2xl font-bold text-primary-500 text-center max-w-5xl mx-auto leading-relaxed">
            Explore my internships in the programming field.
          </span>
          <span className="text-sm md:text-lg text-gray-800 dark:text-gray-100 text-center mx-auto leading-relaxed">
            Let&apos;s collaborate and build something great together!
          </span>
        </motion.div>
      </div>

      {education
        ?.slice()
        .reverse()
        .map((edu) => <InternshipCard key={edu._id} education={edu} />)}
    </div>
  );
};

export default Internships;
