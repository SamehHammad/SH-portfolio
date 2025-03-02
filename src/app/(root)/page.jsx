import React from "react";
import HeroSection from "@/components/HeroSection";
import Popup from "@/components/Popup";

export default function Home() {
  return (
    <div className="mx-auto overflow-x-hidden  lg:px-40">
      <section className="h-auto sm:h-[600px] md:h-[800px] grid grid-cols-1 md:grid-cols-3 w-full gap-5 md:gap-20">
        <div className="grid col-span-1 md:col-span-2">
          <HeroSection />
        </div>
        <div className="lg:pt-36 z-50">
          <Popup/>
        </div>
      </section>
    </div>
  );
}
