"use client";

import dynamic from "next/dynamic";
import React, { memo, useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { getSanityImageUrl } from "@/lib/helper";
import { CertificateCardProps } from "@/utils/types";
import Link from "next/link";
import { EyeOpenIcon } from "@radix-ui/react-icons";

// Dynamically import the Next.js Image component
const Image = dynamic(() => import("next/image"), { ssr: false });

const CertificateCard = memo(({ course }: CertificateCardProps) => {
  const [rotation, setRotation] = useState(0);
  const [stringLength, setStringLength] = useState(0);

  useEffect(() => {
    setRotation(Math.random() * 6 - 3);
    setStringLength(Math.random() * 50);
  }, []);

  const handleCertificateClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      perspective={1000}
      scale={1}
      className="mb-4"
    >
      <div
        className="relative cursor-pointer group" // Added 'group' class for hover
        onClick={() => handleCertificateClick(course.url)}
      >
        {/* Nail */}
        <div className="absolute left-1/2 -top-6 w-4 h-4 transform -translate-x-1/2">
          <div className="w-3 h-3 bg-primary-500 rounded-full shadow-lg z-50" />
          <div className="w-[1px] h-24 -left-12 bg-gray-400 dark:bg-gray-100 rotate-[75deg] rounded-lg fixed -top-8 z-0" />
          <div className="w-[1px] h-24 -right-[42px] bg-gray-400 dark:bg-gray-100 -rotate-[75deg] rounded-lg fixed -top-8 z-0" />
        </div>

        {/* String */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 rotate-[45deg]"
          style={{
            height: `${stringLength}px`,
            width: "2px",
            background: "linear-gradient(to bottom, #d4d4d4, #a3a3a3)",
            transformOrigin: "top",
            transform: `rotate(${rotation}deg)`,
          }}
        />

        {/* Certificate Card */}
        <div
          className="relative card !p-2 border-8 border-yellow-400/40"
          style={{
            transform: `rotate(${rotation}deg)`,
            marginTop: `${stringLength}px`,
          }}
        >
          <div className="relative flex flex-col items-center space-y-3 w-full h-52">
            {course.image?.[0]?.asset?._ref && (
              <Image
                src={getSanityImageUrl(course.image[0].asset._ref)}
                alt={course.title}
                quality={100}
                fill
                className="object-fit rounded-sm"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/0z6RwAAAABJRU5ErkJggg=="
              />
            )}
            {/* Overlay with Eye Icon */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 p-3 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -top-5">
              <Link
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View certificate"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 shadow-md"
              >
                <EyeOpenIcon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
              </Link>
            </div>
          </div>
          {/* Frame */}
          <div className="absolute inset-0 border-4 border-primary-500 rounded-lg" />
        </div>
      </div>
      <h3 className="card-title text-center p-3">{course.title}</h3>
    </Tilt>
  );
});

CertificateCard.displayName = "CertificateCard";
export default CertificateCard;
