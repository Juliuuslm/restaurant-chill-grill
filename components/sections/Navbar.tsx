"use client";

import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";
import { generateWhatsAppLink, getWhatsAppMessage } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems = [
    { label: "ORIGEN", href: "#origen" },
    { label: "MENU", href: "#menu" },
    { label: "INGREDIENTES", href: "#ingredientes" },
    { label: "UBICACIÓN", href: "#ubicación" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section is in viewport (with offset for navbar)
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-4"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
          <Flame className="text-orange-500 fill-orange-500" />
          GRILL & CHILL.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-bold tracking-widest">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative uppercase transition-colors duration-300 ${
                  isActive
                    ? "text-orange-500"
                    : "text-white/80 hover:text-orange-500"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 animate-in slide-in-from-left-5" />
                )}
              </a>
            );
          })}
          <a
            href={generateWhatsAppLink(getWhatsAppMessage("ORDER"))}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"
          >
            PEDIR AHORA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 border-t border-neutral-800 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-bold text-white uppercase hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={generateWhatsAppLink(getWhatsAppMessage("ORDER"))}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 text-center uppercase mt-4"
            onClick={() => setIsOpen(false)}
          >
            PEDIR AHORA
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
