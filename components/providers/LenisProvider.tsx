"use client";

import { ReactNode, useEffect } from "react";

interface LenisProviderProps {
  children: ReactNode;
}

export const LenisProvider = ({ children }: LenisProviderProps) => {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }) as any;

      let frameId: number;

      const raf = (time: number) => {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      };

      frameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(frameId);
        lenis.destroy();
      };
    };

    const cleanup = initLenis();

    return () => {
      cleanup.then((cleanupFn) => cleanupFn?.());
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
