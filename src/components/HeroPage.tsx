"use client"; // Mark as Client Component

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Script from "next/script";

// Create a QueryClient instance
const queryClient = new QueryClient();

export default function HeroPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroPageContent />
    </QueryClientProvider>
  );
}

function HeroPageContent() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-5 h-full z-0">
      <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <source src="/16.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Example of using next/script for external scripts */}
      <Script
        src="https://example.com/external-script.js"
        strategy="lazyOnload"
        onLoad={() => console.log("External script loaded")}
      />
    </div>
  );
}
