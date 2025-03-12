"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const Popup: React.FC = () => {
  const handleDownloadCV = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent default navigation if the link is relative or invalid
    event.preventDefault();
    // Use a Blob or direct URL to ensure the download works
    const cvUrl = "/Sameh_Frontend-.pdf"; // Ensure this file exists in the public directory
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Sameh_Frontend_CV.pdf"; // Specify the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-yellow-900 transition duration-300">
          Check Out My CV
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full p-4 sm:p-6 md:p-8 rounded-lg shadow-lg bg-white">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-semibold mb-4">
            Check Out My CV
          </DialogTitle>
          <DialogDescription className="mb-6 text-gray-600">
            Check my experiences and projects in an interactive flipbook for you
            to explore.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-end space-y-4">
          <iframe
            src="https://3d-flipbook.vercel.app/" // Replace with actual URL or remove if not needed
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] border rounded-lg shadow-md"
            allowFullScreen
            title="CV Flipbook"
          />
          <Link
            href="#"
            onClick={handleDownloadCV}
            aria-label="cv download"
            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-yellow-800 transition duration-300 font-medium text-sm sm:text-base"
          >
            Download CV
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
