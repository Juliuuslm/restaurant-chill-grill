"use client";

import { useEffect, useState } from "react";

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div
        className={`fixed top-0 left-0 h-1 z-40 transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #f97316, #fbbf24)",
          boxShadow: "0 0 20px rgba(249, 115, 22, 0.8)",
        }}
      />

      {/* Subtle top border */}
      <div className="fixed top-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent pointer-events-none" />
    </>
  );
};

export default ScrollProgressIndicator;
