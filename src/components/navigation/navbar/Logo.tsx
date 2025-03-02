import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ style }: { style: string }) => {
  return (
    <Link href={"/"}>
      <div className="flex flex-col items-center">
        <Image
          src={"/logo2.svg"}
          width={25}
          height={25}
          quality={1}
          alt="StartSite logo"
          priority={true}
          className="animate-spin-slow-nolinear w-full h-full max-w-[100px] max-h-[100px] invert-colors "
        />
        <Image
          src={"/logo.svg"}
          width={25}
          height={25}
          quality={1}
          alt="StartSite logo"
          priority={true}
          className={`w-full h-full max-w-[100px] max-h-[100px] mt-4 absolute invert-colors ${style}`}
        />
      </div>
    </Link>
  );
};

export default Logo;
