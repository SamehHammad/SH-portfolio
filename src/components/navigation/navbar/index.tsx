import React from "react";
import Theme from "./Theme";
import Logo from "./Logo";
import Socials from "@/components/Socials";

const Navbar = async () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 max-h-20 ">
      <Logo style={"-top-5"} />
      <div className="hidden sm:flex">
        <Socials />
      </div>

      <div className="flex-between gap-5">
        <div className="z-50">
          <Theme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
