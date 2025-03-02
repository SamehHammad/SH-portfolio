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
import Flipbook from "@/components/Flipbook"; // Adjust import as necessary
import Link from "next/link";

const Popup = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <p className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-yellow-900 transition duration-300">
          See My CV
        </p>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center mb-4">
            Check Out My CV
          </DialogTitle>
          <DialogDescription className="text-center mb-6">
            Check my experiences and projects in an interactive flipbook for you
            to explore.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-end space-y-4">
          <Flipbook /> {/* Your Flipbook component */}
          <Link
            href="/test.pdf" // Update with actual path to the CV file
            download
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Download CV
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
