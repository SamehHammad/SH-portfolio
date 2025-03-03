import React from "react";
import Navbar from "@/components/navigation/navbar";
import { ReactNode } from "react";
import Nav from "@/components/Nav";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="realtive">
      <Navbar />
      <div className="relative">
        <Nav />
      </div>
      <div className="flex">
        <section className="flex h-full w-full flex-col  ">
          <div className=" w-full ">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
