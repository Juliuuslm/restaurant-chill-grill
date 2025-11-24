"use client";

import { useEffect, useRef } from "react";

export const useCustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBlurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBlur = cursorBlurRef.current;

    if (!cursor || !cursorBlur) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Main cursor position
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;

      // Blur cursor with slight delay for trailing effect
      setTimeout(() => {
        cursorBlur.style.left = `${clientX}px`;
        cursorBlur.style.top = `${clientY}px`;
      }, 50);

      // Change cursor on hover of interactive elements
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        cursor.classList.add("cursor-active");
        cursorBlur.classList.add("cursor-blur-active");
      } else {
        cursor.classList.remove("cursor-active");
        cursorBlur.classList.remove("cursor-blur-active");
      }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      cursorBlur.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      cursorBlur.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { cursorRef, cursorBlurRef };
};
