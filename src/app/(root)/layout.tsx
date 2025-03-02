import React from "react";
import Navbar from "@/components/navigation/navbar";
import { ReactNode } from "react";
import Nav from "@/components/Nav";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 realtive">
      <Navbar />
      <div className="relative">
        <Nav />
      </div>
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col  pb-6 pt-10 ">
          <div className="mx-auto w-full ">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
