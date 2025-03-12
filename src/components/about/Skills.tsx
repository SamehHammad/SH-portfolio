import React from "react";
import Tilt from "react-parallax-tilt";
import useSkills from "@/hooks/useSkills";
import { motion } from "framer-motion";
import { getSanityImageUrl } from "@/lib/helper";
import Image from "next/image";
import { Technology } from "@/utils/types";

const Skills: React.FC = () => {
  // Type the useSkills hook return value
  const { skills } = useSkills() as { skills: Technology[] | undefined };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center w-full my-5 max-w-7xl">
        <motion.div
          className="flex flex-col items-center gap-2 pb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="tab-header">
            Take a look at my skills.
          </span>
          <span className="tab-description">
            Let&apos;s build something great!
          </span>
        </motion.div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 max-w-5xl">
        {skills?.map((technology: Technology) => (
          <Tilt
            key={technology.title}
            tiltMaxAngleX={45}
            tiltMaxAngleY={45}
            perspective={1000}
            scale={1}
          >
            <div className="relative w-14 md:w-20 h-20 md:h-20 bg-tertiary rounded-[25px] group flex items-center justify-center overflow-hidden">
              {/* Check if icon exists and access the first element */}
              {technology.icon?.[0]?.asset?._ref && (
                <Image
                  alt={technology.title}
                  src={getSanityImageUrl(technology.icon[0].asset._ref)}
                  fill
                  className="w-14 md:w-20 h-14  md:h-20 transition-transform duration-300 group-hover:scale-110 invert-colors"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm font-medium text-white text-center px-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {technology.title}
                </span>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Skills;
