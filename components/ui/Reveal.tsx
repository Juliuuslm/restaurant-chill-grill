"use client";

import { ReactNode } from "react";
import { useOnScreen } from "@/hooks/useOnScreen";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  const transforms: Record<Direction, string> = {
    up: "translate-y-12",
    down: "translate-y-[-3rem]",
    left: "translate-x-12",
    right: "translate-x-[-3rem]",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${transforms[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
