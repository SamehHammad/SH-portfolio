import Image from "next/image";
import React from "react";
import { memo } from "react";

const Circles = memo(() => {
  return (
    <div className="absolute w-[200px] xl:w-[300px] -right-16 -bottom-40 mix-blend-color-dodge animate-pulse duration-1500 ">
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        quality={10}
        className="w-full h-full"
        alt=""
        aria-label="Circles"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/0z6RwAAAABJRU5ErkJggg=="
      />
    </div>
  );
});

Circles.displayName = "Circles";
export default Circles;
