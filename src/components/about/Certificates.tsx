// Certificates.tsx
"use client";
import React from "react";
import CertificateCard from "./CertificateCard";
import useSkills from "@/hooks/useSkills";

// Define the Course type
interface Course {
  _id: string;
  title: string;
  url: string;
  image?: {
    asset: {
      _ref: string;
    };
  }[];
}

const Certificates = () => {
  const { courses } = useSkills() as { courses: Course[] | undefined };

  return (
    <div className="relative py-5 bg-gradient-to-b from-transparent-100 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        {courses?.map((course, idx) => (
          <CertificateCard
            key={course._id}
            course={course}
            index={idx}
            totalCourses={courses.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
