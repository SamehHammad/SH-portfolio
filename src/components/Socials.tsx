import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import icons for better performance
const RiWhatsappLine = dynamic(() =>
  import("react-icons/ri").then((mod) => mod.RiWhatsappLine)
);
const FaGithub = dynamic(() =>
  import("react-icons/fa6").then((mod) => mod.FaGithub)
);
const LuTwitter = dynamic(() =>
  import("react-icons/lu").then((mod) => mod.LuTwitter)
);
const FaFacebook = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaFacebook)
);
const FaLinkedin = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaLinkedin)
);

const Socials = React.memo(() => {
  return (
    <div className="flex items-center gap-x-5 text-2xl ">
      <Link
        aria-label="Visit my GitHub profile"
        href={"https://github.com/SamehHammad"}
        className="hover:text-primary-500 transition-all duration-300"
      >
        <FaGithub />
      </Link>
      <Link
        aria-label="Visit my LinkedIn profile"
        href={"https://www.linkedin.com/in/sameh-hammad-b20019246/"}
        className="hover:text-primary-500 transition-all duration-300"
      >
        <FaLinkedin />
      </Link>
      <Link
        aria-label="Send me a WhatsApp message"
        href={"https://wa.me/01112967597"}
        className="hover:text-primary-500 transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        aria-label="Visit my Twitter profile"
        href={"https://twitter.com/SamehHammad17"}
        className="hover:text-primary-500 transition-all duration-300"
      >
        <LuTwitter />
      </Link>
      <Link
        aria-label="Visit my Facebook profile"
        href={"https://www.facebook.com/same7.hammad/"}
        className="hover:text-primary-500 transition-all duration-300"
      >
        <FaFacebook />
      </Link>
    </div>
  );
});

Socials.displayName = "Socials";
export default Socials;
