import React from "react";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import QueryProvider from "@/providers/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { metadata } from '../lib/metaData';


const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});
export { metadata };


const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <QueryProvider>
        <body
          className={`${inter.className} ${spaceGrotesk.variable} antialiased background-light850_dark100 `}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="">{children}</div>
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProvider>
        </body>
      </QueryProvider>
    </html>
  );
};

export default RootLayout;
