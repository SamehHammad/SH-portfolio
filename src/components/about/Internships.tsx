import React from 'react';
import InternshipCard from './InternshipCard';
import useSkills from '@/hooks/useSkills';

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
      {education?.slice().reverse().map((edu) => (
        <InternshipCard key={edu._id} education={edu} />
      ))}
    </div>
  );
};

export default Internships;