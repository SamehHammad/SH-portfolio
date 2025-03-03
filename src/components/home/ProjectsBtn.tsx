"use client";
import React from "react";
import Image from "next/image";
import { memo } from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = memo(() => {
  return (
    <div className='mx-auto xl:mx-0 z-10'>
      <Link
        aria-label='View projects'
        href={'/projects'}
        className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt='Rounded text'
          quality={10}
          className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] invert-colors'
          aria-label='Rounded text'
          loading='lazy'
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw" // Responsive image
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
});

ProjectsBtn.displayName = "ProjectsBtn";
export default ProjectsBtn;
