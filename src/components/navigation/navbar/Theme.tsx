"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  // Animation variants
  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 30,
  };

  const starVariants = {
    dark: { opacity: 1, scale: 1, rotate: 180 },
    light: { opacity: 0, scale: 0.5, rotate: 0 },
  };

  const cloudVariants = {
    light: { opacity: 0.7, scale: 1, y: 0 },
    dark: { opacity: 0, scale: 0.8, y: 5 },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.button
        name={`Toggle ${isDark ? "Light" : "Dark"} Mode`}
        className={`relative inline-flex items-center w-16 h-8 rounded-full 
          border-2 shadow-md overflow-hidden`}
        initial={false}
        animate={{
          background: isDark ? "#0D0B28" : "#38bdf8",
          borderColor: isDark ? "#818cf8" : "#7dd3fc",
        }}
        whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4 }}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={`Toggle ${isDark ? "Light" : "Dark"} Mode`}
      >
        {/* Background Stars for Dark Mode */}
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={isDark ? "dark" : "light"}
          variants={starVariants}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <motion.div
            className="absolute top-2 left-5 w-1 h-1 bg-white rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, delay: 0.3 }}
          />
          <motion.div
            className="absolute top-5 left-3 w-1 h-1 bg-white rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, delay: 0.6 }}
          />
          <motion.div
            className="absolute top-4 left-10 w-1 h-1 bg-white rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          />
        </motion.div>

        {/* Background Clouds for Light Mode */}
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={!isDark ? "light" : "dark"}
          variants={cloudVariants}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute top-2 left-8 w-3 h-3 bg-white rounded-full"
            animate={{ x: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <motion.div
            className="absolute top-4 left-6 w-4 h-2 bg-white rounded-full"
            animate={{ x: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1 left-3 w-4 h-2 bg-white rounded-full"
            animate={{ x: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Toggle Circle with Gradient */}
        <motion.div
          className="absolute h-6 w-6 rounded-full flex items-center justify-center shadow-md z-10"
          layout
          transition={spring}
          animate={{
            x: isDark ? 32 : 2,
            background: isDark
              ? "linear-gradient(145deg, #bfdbfe, #818cf8)"
              : "linear-gradient(145deg, #fef9c3, #fcd34d)",
          }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDark ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <FiSun
              className={`w-4 h-4 absolute ${!isDark ? "opacity-100" : "opacity-0"} text-yellow-600`}
            />
            <FiMoon
              className={`w-4 h-4 absolute ${isDark ? "opacity-100" : "opacity-0"} text-indigo-800`}
            />
          </motion.div>
        </motion.div>
      </motion.button>
    </div>
  );
}
