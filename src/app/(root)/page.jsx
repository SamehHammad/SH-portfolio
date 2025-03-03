import React from "react";
import HeroSection from "@/components/HeroSection";
import Popup from "@/components/Popup";
import Info from "@/components/home/Info";
export default function Home() {
  return (
    <div className="lg:px-32">
      <section className=" flex flex-col lg:flex-row lg:justify-around lg:pt-10">
        <div className="grid col-span-1 lg:col-span-2 px-5  flex-1 ">
          <HeroSection />
        </div>
        <div className="col-span-1 flex flex-col justify-start items-center lg:pt-36 z-0 px-10 xxl:px-10 mb-40">
          <Info />
          <Popup />
        </div>
      </section>
    </div>
  );
}
