// CertificateCard.tsx
"use client";

import dynamic from "next/dynamic";
import React, { memo, useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { getSanityImageUrl } from "@/lib/helper";
import { PiCertificateFill } from "react-icons/pi";
import { CertificateCardProps } from "@/utils/types";


// Dynamically import the Next.js Image component
const Image = dynamic(() => import("next/image"), { ssr: false });

const CertificateCard = memo(({ course }: CertificateCardProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
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
      className=""
    >
      <div
        className="relative cursor-pointer"
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
          className="relative card p-6 border-8 border-yellow-400/40"
          style={{
            transform: `rotate(${rotation}deg)`,
            marginTop: `${stringLength}px`,
          }}
        >
          <div className="flex flex-col items-center space-y-3">
            {course.image?.[0]?.asset?._ref && (
              <Image
                src={getSanityImageUrl(course.image[0].asset._ref)}
                alt={course.title}
                width={280}
                height={200}
                quality={10}
                className="w-full h-52 object-cover rounded-sm"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/0z6RwAAAABJRU5ErkJggg=="
              />
            )}
            <h3 className="card-title text-cente">{course.title}</h3>
            <div className="relative mt-2 inline-block">
              <button
                aria-label={course.title}
                className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-all duration-300 z-20"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => handleCertificateClick(course.url)}
              >
                <PiCertificateFill className="text-xl w-6 h-6 interactive-link drop-shadow-sm transition-transform hover:scale-110 z-20" />
                {showTooltip && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-white bg-gray-800 rounded-md whitespace-nowrap shadow-lg z-20">
                    <p className="text-white">View Certificate</p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="border-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
          {/* Frame */}
          <div className="absolute inset-0 border-4 border-primary-500 rounded-lg" />
        </div>
      </div>
    </Tilt>
  );
});

CertificateCard.displayName = "CertificateCard";
export default CertificateCard;
