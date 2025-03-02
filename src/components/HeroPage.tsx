import React from "react";
import Image from "next/image";

export default function HeroPage() {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-5 lg:max-w-[95%] h-full z-0 bg-red-600`}
    >
      <Image
        src="/bg2.png"
        fill
        alt=""
        className="z-0 min-h-full"
        quality={100}
      />
    </div>
  );
}
