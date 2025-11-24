"use client";

import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const { cursorRef, cursorBlurRef } = useCustomCursor();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Hide default cursor
    document.documentElement.style.cursor = "none";

    return () => {
      document.documentElement.style.cursor = "auto";
    };
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* Main cursor - sharp center dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 w-6 h-6 -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out"
      >
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-orange-500/80 mix-blend-screen" />

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full" />

        {/* Inner glow */}
        <div className="absolute inset-1 rounded-full bg-orange-500/20 blur-sm" />

        {/* Active state ring */}
        <div className="cursor-active:border-orange-400 cursor-active:w-8 cursor-active:h-8 absolute inset-0 rounded-full border-2 border-orange-500/0 transition-all duration-300 pointer-events-none" />
      </div>

      {/* Blur cursor - trailing blur effect */}
      <div
        ref={cursorBlurRef}
        className="pointer-events-none fixed z-40 w-12 h-12 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
      >
        {/* Outer blur halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/30 to-transparent blur-xl mix-blend-screen" />

        {/* Active state larger halo */}
        <div className="cursor-blur-active:w-16 cursor-blur-active:h-16 absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-transparent blur-2xl transition-all duration-300" />
      </div>
    </>
  );
};

export default CustomCursor;
