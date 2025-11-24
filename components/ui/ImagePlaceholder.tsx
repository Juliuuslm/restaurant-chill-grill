"use client";

import React from "react";

type PlaceholderType =
  | "burger"
  | "hotdog"
  | "fries"
  | "wings"
  | "drink"
  | "chef"
  | "ingredient";

interface ImagePlaceholderProps {
  type: PlaceholderType;
  className?: string;
  animate?: boolean;
}

const gradientMap: Record<PlaceholderType, string> = {
  burger:
    "from-orange-600/40 via-orange-500/30 to-orange-700/20 dark:from-orange-500/40",
  hotdog:
    "from-yellow-500/40 via-orange-600/30 to-orange-700/20 dark:from-yellow-400/40",
  fries: "from-orange-400/40 via-yellow-500/30 to-orange-600/20",
  wings: "from-red-600/40 via-orange-500/30 to-orange-700/20",
  drink: "from-blue-600/40 via-cyan-500/30 to-blue-700/20",
  chef: "from-yellow-500/40 via-orange-600/30 to-orange-700/20",
  ingredient:
    "from-green-600/40 via-emerald-500/30 to-green-700/20 dark:from-green-500/40",
};

const iconMap: Record<PlaceholderType, string> = {
  burger: "🍔",
  hotdog: "🌭",
  fries: "🍟",
  wings: "🍗",
  drink: "🥤",
  chef: "👨‍🍳",
  ingredient: "🍅",
};

export const ImagePlaceholder = ({
  type,
  className = "",
  animate = true,
}: ImagePlaceholderProps) => {
  const gradient = gradientMap[type];
  const icon = iconMap[type];

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Subtle grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Center icon with float animation */}
      <div
        className={`relative z-10 text-6xl ${animate ? "animate-float" : ""}`}
      >
        {icon}
      </div>

      {/* Shine effect from top-left */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ImagePlaceholder;
