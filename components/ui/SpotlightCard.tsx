"use client";

import { ReactNode, useRef, useState, useCallback } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Throttle mouse move to avoid performance issues
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return;

      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({ x, y });

      // Calculate 3D tilt based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotX = ((y - centerY) / rect.height) * 15;
      const rotY = ((x - centerX) / rect.width) * -15;

      setRotateX(rotX);
      setRotateY(rotY);
    },
    []
  );

  const handleMouseEnter = () => {
    setOpacity(1);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      style={{
        perspective: "1000px",
      }}
      className="w-full h-full"
    >
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden rounded-3xl border border-white/5 bg-neutral-800 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${className}`}
        style={{
          transform: isHovering
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          transformStyle: "preserve-3d",
          boxShadow: isHovering
            ? `
              0 20px 25px rgba(0, 0, 0, 0.4),
              0 0 40px rgba(249, 115, 22, ${Math.max(0.3, opacity * 0.6)})
            `
            : "0 4px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* The Moving Spotlight Gradient */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            opacity,
            background: `radial-gradient(
              600px circle at ${position.x}px ${position.y}px,
              rgba(249, 115, 22, 0.2),
              transparent 40%
            )`,
          }}
        />

        {/* Inner glow effect */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            opacity: isHovering ? 0.1 : 0,
            background: `linear-gradient(135deg, rgba(249, 115, 22, 0.1), transparent)`,
            borderRadius: "inherit",
          }}
        />

        {/* Content wrapper to stay above background */}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
};

export default SpotlightCard;
