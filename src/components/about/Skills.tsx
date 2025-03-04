import React from "react";
import Tilt from "react-parallax-tilt";
import useSkills from "@/hooks/useSkills";
import { getSanityImageUrl } from "@/lib/helper";
// Define the Technology interface with correct Sanity image structure
interface Technology {
  title: string;
  icon: {
    asset: {
      _ref: string;
    };
  }[];
}

const Skills: React.FC = () => {
  // Type the useSkills hook return value
  const { skills } = useSkills() as { skills: Technology[] | undefined };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {skills?.map((technology: Technology) => (
        <Tilt
          key={technology.title}
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          perspective={1000}
          scale={1}
        >
          <div className="relative w-28 h-28 bg-tertiary rounded-[25px] group flex items-center justify-center overflow-hidden">
            {/* Check if icon exists and access the first element */}
            {technology.icon?.[0]?.asset?._ref && (
              <img
                alt={technology.title}
                src={getSanityImageUrl(technology.icon[0].asset._ref)}
                className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110 invert-colors"
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
  );
};

export default Skills;
