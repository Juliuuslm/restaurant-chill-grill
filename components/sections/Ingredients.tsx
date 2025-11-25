"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

const ingredients = [
  {
    title: "100% Black Angus",
    desc: "Mezcla propia de chuck y brisket molidos diario. Ese marmoleado blanco que gotea cuando se cocina. Nunca congelada, nunca.",
  },
  {
    title: "Brioche Casero",
    desc: "Horneado cada mañana con mantequilla Francesa. Tostado en mantequilla antes de armar. Ese brioche dorado, esponjoso, ligeramente dulce que aguanta los jugos sin deshacerse.",
  },
  {
    title: "Quesos Importados",
    desc: "Cheddar añejo 18 meses que se funde perfecto. Gruyère suizo importado. Pepper Jack artesanal. Queso REAL, no esas singles de plástico.",
  },
];

const Ingredients = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effects for images with different speeds
      gsap.to(image1Ref.current, {
        y: -80,
        rotation: 6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
          markers: false,
        },
      });

      gsap.to(image2Ref.current, {
        y: 60,
        rotation: -3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 2,
          markers: false,
        },
      });

      // Stagger animation on ingredient items
      gsap.fromTo(
        ".ingredient-item",
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            markers: false,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ingredientes"
      className="py-24 bg-neutral-950 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              FRESHNESS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 animate-pulse-slow">
                OBSESSION
              </span>
            </h2>
            <div className="space-y-8">
              {ingredients.map((item, idx) => (
                <div
                  key={idx}
                  className="ingredient-item flex gap-4 group cursor-default transition-all duration-300 hover:translate-x-2"
                >
                  <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-white/10 group-hover:scale-110 group-hover:rotate-12 shrink-0">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Parallax Images Section */}
          <div className="relative h-[600px] w-full hidden lg:block perspective">
            {/* Image 1 - Top Right with parallax */}
            <div
              ref={image1Ref}
              className="absolute top-0 right-0 z-10 w-2/3 will-change-transform"
            >
              <div className="rounded-3xl shadow-depth-lg border-4 border-neutral-950 bg-gradient-to-br from-orange-500/20 to-yellow-600/20 h-64 flex items-center justify-center overflow-hidden hover:shadow-glow-lg transition-shadow duration-500">
                <div className="text-6xl opacity-60 animate-float">🍖</div>
              </div>
            </div>

            {/* Image 2 - Bottom Left with slower parallax */}
            <div
              ref={image2Ref}
              className="absolute bottom-0 left-10 z-20 w-3/5 will-change-transform"
            >
              <div className="rounded-3xl shadow-depth-lg border-4 border-neutral-950 bg-gradient-to-br from-green-500/20 to-emerald-600/20 h-64 flex items-center justify-center overflow-hidden hover:shadow-glow-lg transition-shadow duration-500">
                <div className="text-6xl opacity-60 animate-float" style={{ animationDelay: "0.5s" }}>
                  🍅
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
