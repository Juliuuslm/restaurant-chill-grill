"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const Philosophy = () => {
  const ingredients = [
    "Black Angus vetado - ese marmoleado que se derrite",
    "Salchichas ahumadas 12 horas en madera de mezquite",
    "Salsas hechas a diario - nunca de botella",
    "Cerveza artesanal helada a -2°C - casi congelada, nunca aguada",
  ];

  return (
    <section
      id="origen"
      className="py-20 bg-neutral-950 overflow-hidden relative"
    >
      {/* Infinite Scroll Text with premium styling */}
      <div className="marquee-container absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap py-4 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rotate-1 z-10 border-y-4 border-black shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:animate-none group cursor-pointer transition-all duration-300">
        <div className="animate-marquee group-hover:pause inline-block">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-2xl font-black text-black mx-8 uppercase tracking-widest italic drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
            >
              GRILL • CHILL • FRESH • TASTY •
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 pt-24 grid md:grid-cols-2 gap-16 items-center">
        <Reveal direction="right">
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-600/20 rounded-full blur-3xl" />
            <div className="relative rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden bg-neutral-800 h-96">
              <Image
                src="/images/philosophy/philosophy.jpg"
                alt="Chef - MASTERS OF FIRE"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={85}
              />
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={200}>
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-none">
              MASTERS OF{" "}
              <span className="text-orange-500">FIRE</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
              El fuego lo cambia todo. Carameliza, sella, ahúma, transforma. Cada corte premium se marca a 400°C, sellando jugos por fuera, manteniéndolo tierno por dentro. Escuchas el sizzle. Hueles el ahumado. Lo sientes en cada bocado.
            </p>
            <ul className="space-y-4">
              {ingredients.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Philosophy;
