"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

interface Review {
  user: string;
  text: string;
  stars: number;
  date: string;
}

const TheHype = () => {
  const [page, setPage] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const cpv = window.innerWidth < 768 ? 1 : 3;
      setCardsPerView(cpv);
      setPage(0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const reviews: Review[] = [
    {
      user: "@damian.palacios",
      text: "Literalmente la mejor hamburguesa que he probado en años. El pan brioche es otro nivel. 🔥",
      stars: 5,
      date: "Hace 2 días",
    },
    {
      user: "@sofia_rangel.mx",
      text: "Ambiente 10/10. La música, las luces y esa 'Truffle Maker' me volaron la cabeza.",
      stars: 5,
      date: "Hace 1 semana",
    },
    {
      user: "@carlos.vlbs",
      text: "Si no has probado las alitas Mango Habanero, no sabes de lo que te pierdes. Pican rico.",
      stars: 5,
      date: "Hace 3 días",
    },
    {
      user: "@pame.ordaz",
      text: "El hot dog artesanal es una locura. El pan tostado y los toppings hacen toda la diferencia. Ya voy por el tercero.",
      stars: 5,
      date: "Hace 5 días",
    },
    {
      user: "@rodrigo_vilchis",
      text: "Las papas con queso cheddar y tocino son lo que necesitaba en mi vida. El lugar es increíble desde que entras.",
      stars: 5,
      date: "Hace 4 días",
    },
    {
      user: "@monica.delgadillo",
      text: "Vinimos en grupo y todos quedamos enamorados. Servicio rápido, porciones generosas y todo sabía espectacular.",
      stars: 5,
      date: "Hace 2 semanas",
    },
  ];

  return (
    <section
      id="reseñas"
      className="py-24 bg-neutral-900 border-t border-neutral-800"
    >
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3">
                Lo que dicen
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter">
                THE HYPE
              </h3>
            </div>
            <div className="hidden md:block">
              <a
                href="https://aurora33.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 rounded-full font-bold text-sm tracking-wide text-white border border-white/20 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:rounded-full hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(234,88,12,0.3)]"
              >
                {/* Animated background */}
                <span className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />

                {/* Shine effect */}
                <span className="absolute inset-0 rounded-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Content */}
                <span className="relative group-hover:text-black transition-colors duration-300">
                  DEJAR RESEÑA
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {reviews.map((review, i) => (
              <div key={i} style={{ minWidth: `${100 / cardsPerView}%` }} className="px-2 sm:px-4">
                <div className="group relative h-full flex flex-col bg-neutral-800 p-5 sm:p-8 rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-orange-500/30 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.2)]">
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 via-transparent to-orange-600/0 group-hover:from-orange-600/5 group-hover:to-orange-600/5 transition-colors duration-500 pointer-events-none" />

                  {/* Quote icon with animation */}
                  <div className="absolute top-8 right-8 text-neutral-700 group-hover:text-orange-500 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-12">
                    <Quote size={40} fill="currentColor" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.stars)].map((_, s) => (
                      <Star
                        key={s}
                        size={16}
                        className="text-orange-500 fill-orange-500 transition-all duration-300 group-hover:scale-125"
                        style={{ transitionDelay: `${s * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="flex-1 text-white text-lg font-medium leading-relaxed mb-6 relative z-10 group-hover:text-neutral-100 transition-colors duration-300">
                    "{review.text}"
                  </p>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-6 border-t border-white/5 group-hover:border-orange-500/20 transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-500 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)]" />
                      <span className="text-neutral-400 font-bold text-sm group-hover:text-neutral-300 transition-colors duration-300">
                        {review.user}
                      </span>
                    </div>
                    <span className="text-neutral-600 text-xs group-hover:text-neutral-500 transition-colors duration-300">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:border-orange-500 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(reviews.length / cardsPerView) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  page === i ? "w-6 bg-orange-500" : "w-2 bg-neutral-600 hover:bg-neutral-400"
                }`}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(Math.ceil(reviews.length / cardsPerView) - 1, p + 1))}
            disabled={page === Math.ceil(reviews.length / cardsPerView) - 1}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:border-orange-500 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheHype;
