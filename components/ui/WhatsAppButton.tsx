"use client";

import { useEffect, useState, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_MESSAGES } from "@/lib/constants";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  // Scroll tracking with throttle - show button after passing Hero section
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const heroHeight = window.innerHeight;
        const hasPassedHero = currentScrollY > heroHeight * 0.8;

        if (hasPassedHero && !footerRef.current?.classList.contains('is-visible')) {
          setIsVisible(true);
        } else if (!hasPassedHero) {
          setIsVisible(false);
        }
      }, 100); // Throttle 100ms for performance
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Footer visibility detection - hide button when Footer is visible
  useEffect(() => {
    const footerElement = document.getElementById('ubicación');
    footerRef.current = footerElement;

    if (!footerElement) return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Footer is visible - hide button
          setIsVisible(false);
          entry.target.classList.add('is-visible');
        } else {
          // Footer is not visible - re-evaluate scroll position
          entry.target.classList.remove('is-visible');
          const heroHeight = window.innerHeight;
          if (window.scrollY > heroHeight * 0.8) {
            setIsVisible(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(footerElement);

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <a
      href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGES.GENERAL)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed
        bottom-4 right-4
        md:bottom-8 md:right-8
        z-40
        group
        transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-8 pointer-events-none'
        }
      `}
      aria-label="Chat on WhatsApp"
      aria-hidden={!isVisible}
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16">
        {/* Premium glow effect - orange instead of green for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse-glow opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Main button with 3D effect */}
        <div className="relative w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-glow-lg hover:shadow-glow-xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform group-hover:scale-125 group-hover:-translate-y-2">
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white filter drop-shadow-lg" fill="white" />
        </div>

        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-full group-hover:animate-ping opacity-0 group-hover:opacity-75 bg-orange-500" />
      </div>

      {/* Tooltip on hover - hidden on mobile */}
      <div className="hidden md:block absolute right-20 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-neutral-900 text-white text-xs font-bold px-3 py-2 rounded-lg whitespace-nowrap backdrop-blur-md border border-orange-500/50">
          ¡Hablemos!
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
