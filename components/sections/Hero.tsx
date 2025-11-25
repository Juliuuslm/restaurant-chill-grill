"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/ui/Reveal";
import { generateWhatsAppLink, getWhatsAppMessage } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect on background - moves slower than scroll
      gsap.to(bgRef.current, {
        y: 150,
        scale: 1.2,
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          markers: false,
        },
      });

      // Fade out and move up text on scroll
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "50% top",
          scrub: 1,
          markers: false,
        },
      });

      // Individual elements fade out at different rates
      gsap.to(".hero-label", {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "30% top",
          scrub: 1,
        },
      });

      gsap.to(".hero-title", {
        opacity: 0,
        y: -80,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "40% top",
          scrub: 1,
        },
      });

      gsap.to(".hero-ctas", {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "35% top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-neutral-950 flex items-center justify-center"
    >
      {/* PARALLAX BACKGROUND LAYERS */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        {/* Hero Background Image */}
        <Image
          src="/images/hero/hero.jpg"
          alt="Hero Background"
          fill
          className="absolute inset-0 object-cover"
          priority
          quality={85}
        />

        {/* Overlay base para garantizar contraste de texto */}
        <div className="absolute inset-0 bg-neutral-950/30 z-[1]" />

        {/* Rotating orb with enhanced glow */}
        <div className="relative w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full animate-spin-slow shadow-[0_0_120px_rgba(249,115,22,0.3)]">
          <div className="w-full h-full bg-gradient-to-br from-orange-600/15 via-orange-500/10 to-yellow-600/10 rounded-full backdrop-blur-sm" />
        </div>

        {/* Animated mesh background - adds depth */}
        <div className="relative top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-35"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-25"></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-yellow-500/8 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 opacity-20"></div>
        </div>

        {/* Gradient overlays for depth - FIXED */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/30 z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-neutral-950/80 z-[2]" />
      </div>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="container mx-auto px-6 relative z-10 text-center will-change-transform"
      >
        <Reveal direction="down">
          <span className="hero-label inline-block py-2 px-4 border border-orange-500/50 rounded-full text-orange-400 text-xs font-bold tracking-[0.2em] mb-8 uppercase bg-orange-500/5 backdrop-blur-sm hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300 will-change-transform">
            Est. 2024 - Grill & Chill
          </span>
        </Reveal>

        <Reveal delay={200}>
          <h1 className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-6 md:mb-8 will-change-transform [text-shadow:_0_2px_8px_rgb(0_0_0_/_90%),_0_4px_16px_rgb(0_0_0_/_70%)]">
            GRILL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 animate-pulse-slow [filter:_drop-shadow(0_2px_8px_rgb(0_0_0_/_100%))_drop-shadow(0_4px_16px_rgb(0_0_0_/_80%))]">
              & CHILL.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-neutral-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed will-change-transform [text-shadow:_0_2px_12px_rgb(0_0_0_/_100%),_0_4px_20px_rgb(0_0_0_/_80%)]">
            Donde la parrilla canta y cada bocado cuenta una historia. Carne que gotea sabor, pan tostado que cruje, sabores que explotan en tu boca.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center items-center will-change-transform">
            <a
              href="#menu"
              className="group relative bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg tracking-wide overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center gap-2 shadow-glow-md hover:shadow-glow-lg hover:scale-105"
            >
              {/* Ripple background */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content */}
              <span className="relative flex items-center gap-2">
                VER EL MENÚ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            <a
              href={generateWhatsAppLink(getWhatsAppMessage("RESERVATION"))}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full font-bold text-base sm:text-lg text-white border-2 border-white/30 hover:border-orange-500 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] backdrop-blur-md hover:bg-orange-500/10 hover:shadow-glow-md"
            >
              RESERVAR MESA
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator - subtle animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-orange-500 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
