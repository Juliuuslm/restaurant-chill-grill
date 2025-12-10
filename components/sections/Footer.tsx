"use client";

import { MapPin, Clock, ChevronRight, Instagram, Twitter, Facebook, Flame } from "lucide-react";
import { RESTAURANT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("¡Gracias por suscribirse!");
  };

  return (
    <footer
      id="ubicación"
      className="bg-black pt-24 pb-12 border-t border-neutral-900"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <Reveal delay={0} direction="left">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-black tracking-tighter text-white flex items-center gap-2 mb-6">
                <Flame className="text-orange-500 fill-orange-500" />
                GRILL & CHILL.
              </div>
              <p className="text-neutral-400 max-w-sm mb-6">
                No somos solo una burger joint. Somos el lugar donde el fuego, la técnica y los ingredientes reales se encuentran. Cada plato sale de una cocina que le pone corazón. Ven a probar la diferencia.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram", delay: 0 },
                  { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter", delay: 50 },
                  { Icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook", delay: 100 },
                ].map(({ Icon, href, label, delay }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-125 hover:rotate-12"
                    aria-label={label}
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    <span className="absolute inset-0 rounded-full bg-orange-500 scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] -z-10" />
                    <span className="absolute inset-0 rounded-full bg-neutral-900 group-hover:bg-orange-500 transition-colors duration-300 -z-10" />
                    <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Location Section */}
          <Reveal delay={150} direction="up">
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">
                Encuéntranos
              </h4>
              <div className="space-y-4">
                <div className="flex gap-3 text-neutral-400">
                  <MapPin
                    className="text-orange-500 shrink-0"
                    size={20}
                  />
                  <p>{RESTAURANT_INFO.address}</p>
                </div>
                <div className="flex gap-3 text-neutral-400">
                  <Clock
                    className="text-orange-500 shrink-0"
                    size={20}
                  />
                  <div>
                    <p>Mar - Jue: {RESTAURANT_INFO.hours.weekday}</p>
                    <p>Vie - Sab: {RESTAURANT_INFO.hours.friday}</p>
                    <p>Dom: {RESTAURANT_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Newsletter Section */}
          <Reveal delay={300} direction="up">
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">
                Newsletter
              </h4>
              <p className="text-neutral-400 text-sm mb-4">
                Ofertas secretas, nuevos platillos, eventos especiales. Directo a tu inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex group">
                <input
                  type="email"
                  placeholder="Tu email..."
                  required
                  className="bg-neutral-900 border-none text-white px-4 py-2 w-full rounded-l-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300"
                />
                <button
                  type="submit"
                  className="group/btn relative bg-orange-600 px-4 py-2 rounded-r-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)]"
                  aria-label="Subscribe"
                >
                  <ChevronRight className="text-white transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:scale-110" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col items-center gap-6 text-center text-neutral-500 text-sm">
          <p>Built with love and AI.</p>
          <p>Copyright © {RESTAURANT_INFO.year} GRILL & CHILL. Built with love and AI by <span className="text-orange-500 font-semibold">aurora33</span></p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
