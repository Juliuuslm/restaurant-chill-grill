"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface UseGSAPAnimationOptions {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  onComplete?: () => void;
}

/**
 * Hook for managing GSAP animations with ScrollTrigger
 * Usage: useGSAPAnimation({ trigger: ".element", ... })
 */
export const useGSAPAnimation = (
  animationCallback: (ctx: gsap.Context) => void,
  _options: UseGSAPAnimationOptions = {}
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      animationCallback(ctx);
    }, containerRef);

    return () => ctx.revert();
  }, [animationCallback]);

  return containerRef;
};

/**
 * Parallax effect - Element follows scroll at different speed
 */
export const createParallaxEffect = (
  selector: string,
  speed: number = 0.5,
  startOffset: string = "top center"
) => {
  gsap.to(selector, {
    y: (index: number) => index * speed * 100,
    scrollTrigger: {
      trigger: selector,
      start: startOffset,
      scrub: 1.5,
      markers: false,
    },
  });
};

/**
 * Fade and scale on scroll
 */
export const createFadeScaleEffect = (
  selector: string,
  options: {
    startOpacity?: number;
    endOpacity?: number;
    startScale?: number;
    endScale?: number;
  } = {}
) => {
  const { startOpacity = 0, endOpacity = 1, startScale = 0.8, endScale = 1 } =
    options;

  gsap.fromTo(
    selector,
    {
      opacity: startOpacity,
      scale: startScale,
    },
    {
      opacity: endOpacity,
      scale: endScale,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        markers: false,
      },
    }
  );
};

/**
 * Stagger animation on children
 */
export const createStaggerAnimation = (
  parentSelector: string,
  childSelector: string,
  options: {
    duration?: number;
    stagger?: number;
    y?: number;
    opacity?: number;
  } = {}
) => {
  const { duration = 0.6, stagger = 0.1, y = 30, opacity = 0 } = options;

  gsap.fromTo(
    `${parentSelector} ${childSelector}`,
    {
      opacity: opacity,
      y: y,
    },
    {
      opacity: 1,
      y: 0,
      duration: duration,
      stagger: stagger,
      scrollTrigger: {
        trigger: parentSelector,
        start: "top 80%",
        markers: false,
      },
    }
  );
};

/**
 * Text reveal animation
 */
export const createTextReveal = (
  selector: string,
  splitType: "chars" | "words" | "lines" = "chars"
) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const text = element.textContent || "";
    const isChars = splitType === "chars";
    const isWords = splitType === "words";

    const chars = isChars ? text.split("") : isWords ? text.split(" ") : [text];

    element.innerHTML = chars
      .map((char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");

    gsap.fromTo(
      `${selector} .char`,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.05,
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          markers: false,
        },
      }
    );
  });
};

/**
 * Cleanup all ScrollTrigger instances
 */
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
