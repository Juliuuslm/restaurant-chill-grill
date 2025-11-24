"use client";

import { useState } from "react";
import {
  ChevronRight,
  ArrowRight,
  Flame,
  Utensils,
  Drumstick,
  Beer,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { generateWhatsAppLink, getWhatsAppMessage } from "@/lib/utils";

type TabId = "hamburguesas" | "hotdogs" | "papas" | "alitas" | "bebidas";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  tag?: string;
  img?: string;
}

interface MenuData {
  [key: string]: MenuItem[];
}

const menuData: MenuData = {
  hamburguesas: [
    {
      name: "THE O.G. GRILL",
      desc: "Doble smash burger, queso americano, cebolla caramelizada, salsa Chill, pepinillos.",
      price: "$12.50",
      tag: "BEST SELLER",
    },
    {
      name: "TRUFFLE MAKER",
      desc: "Doble carne, queso suizo, mayonesa de trufa negra, champiñones portobello asados.",
      price: "$15.00",
      tag: "PREMIUM",
    },
    {
      name: "SPICY INFERNO",
      desc: "Smash simple, jalapeños encurtidos, pepper jack, salsa habanero-mango, bacon crujiente.",
      price: "$13.50",
      tag: "HOT",
    },
    {
      name: "CRISPY CHICK",
      desc: "Pollo frito en buttermilk, ensalada de col morada, pepinillos, spicy mayo.",
      price: "$11.00",
      tag: "NEW",
    },
  ],
  hotdogs: [
    {
      name: "THE BEAST DOG",
      desc: "Salchicha Jumbo 30cm, envuelta en bacon, cebolla grillada y queso fundido.",
      price: "$10.50",
      tag: "BIG",
    },
    {
      name: "CHILI CHEESE",
      desc: "Salchicha ahumada, chili con carne casero, queso cheddar rallado y cebollino.",
      price: "$11.00",
      tag: "CLASSIC",
    },
    {
      name: "NYC STYLE",
      desc: "La receta clásica de Nueva York: Sauerkraut, mostaza especiada y salsa de cebolla.",
      price: "$9.00",
      tag: "",
    },
    {
      name: "AVOCADO DOG",
      desc: "Salchicha de pavo, guacamole fresco, pico de gallo, crema agria y totopos.",
      price: "$12.00",
      tag: "FRESH",
    },
  ],
  papas: [
    {
      name: "TRUFFLE PARM",
      desc: "Papas francesas corte fino, aceite de trufa blanca, parmesano reggiano y perejil.",
      price: "$8.50",
      tag: "PREMIUM",
    },
    {
      name: "LOADED FRIES",
      desc: "Bañadas en salsa de queso cheddar, trozos de bacon crujiente, crema y cebollín.",
      price: "$9.00",
      tag: "SHARE",
    },
    {
      name: "CAJUN SPIRAL",
      desc: "Papas curly sazonadas con nuestra mezcla secreta de especias cajún.",
      price: "$7.00",
      tag: "SPICY",
    },
    {
      name: "SWEET POTATO",
      desc: "Camote frito crujiente servido con un dip de miel y mostaza.",
      price: "$7.50",
      tag: "SWEET",
    },
  ],
  alitas: [
    {
      name: "BUFFALO SOLDIER",
      desc: "Nuestra salsa buffalo clásica. Picante, avinagrada y adictiva. Con blue cheese.",
      price: "$13.00",
      tag: "HOT",
    },
    {
      name: "BBQ BOURBON",
      desc: "Glaseadas con salsa BBQ casera hecha con reducción de Bourbon y miel.",
      price: "$13.00",
      tag: "SMOKY",
    },
    {
      name: "MANGO HABANERO",
      desc: "El equilibrio perfecto entre dulce tropical y fuego intenso.",
      price: "$13.50",
      tag: "SPICY",
    },
    {
      name: "GARLIC PARM",
      desc: "Salsa cremosa de ajo asado y queso parmesano. Sin picante, todo sabor.",
      price: "$13.00",
      tag: "",
    },
  ],
  bebidas: [
    {
      name: "CRAFT COLA",
      desc: "Refresco de cola artesanal con nuez de cola real, vainilla y cítricos.",
      price: "$4.50",
      tag: "ARTISAN",
    },
    {
      name: "MINT LEMONADE",
      desc: "Limonada recién exprimida con mucha menta fresca y hielo picado.",
      price: "$5.00",
      tag: "FRESH",
    },
    {
      name: "VANILLA SKY",
      desc: "Malteada espesa de vainilla de Madagascar con crema batida real.",
      price: "$7.00",
      tag: "SHAKE",
    },
    {
      name: "IPA DRAFT",
      desc: "Cerveza artesanal IPA local. Notas cítricas y amargor equilibrado.",
      price: "$8.00",
      tag: "BEER",
    },
  ],
};

const tabs = [
  { id: "hamburguesas" as TabId, label: "Hamburguesas", icon: Flame },
  { id: "hotdogs" as TabId, label: "Hot Dogs", icon: Utensils },
  { id: "papas" as TabId, label: "Papas", icon: Utensils },
  { id: "alitas" as TabId, label: "Alitas", icon: Drumstick },
  { id: "bebidas" as TabId, label: "Bebidas", icon: Beer },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("hamburguesas");

  return (
    <section id="menu" className="py-24 bg-neutral-900 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-orange-500"></span>
              Nuestra Selección
              <span className="w-8 h-[1px] bg-orange-500"></span>
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              THE LINEUP
            </h3>
          </div>
        </Reveal>

        {/* TAB NAVIGATION */}
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, tabIdx) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide border overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    activeTab === tab.id
                      ? "bg-orange-600 text-white border-orange-600 shadow-[0_0_20px_rgba(234,88,12,0.4)] scale-105"
                      : "bg-neutral-800 text-neutral-400 border-white/10 hover:bg-neutral-700 hover:text-orange-400 hover:border-orange-500/30"
                  }`}
                  style={{ animationDelay: `${tabIdx * 50}ms` }}
                >
                  {/* Animated background on hover */}
                  <span className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/5 transition-colors duration-300" />

                  {/* Icon with rotation animation */}
                  <Icon size={16} className={`transition-transform duration-500 ${activeTab === tab.id ? "rotate-[360deg] scale-125" : "group-hover:rotate-[45deg] group-hover:scale-110"}`} />

                  {/* Label */}
                  <span className="relative">
                    {tab.label.toUpperCase()}
                  </span>

                  {/* Active indicator bottom line */}
                  {activeTab === tab.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-50" />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 min-h-[600px]">
          {menuData[activeTab].map((item, idx) => (
            <Reveal
              key={`${activeTab}-${idx}`}
              delay={idx * 150}
              direction="up"
            >
              <SpotlightCard className="group h-full hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.3)] transition-shadow duration-500">
                <div className="flex flex-col sm:flex-row h-full">
                  {/* Image Placeholder */}
                  <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative bg-neutral-950">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-black/50 z-20" />
                    <div className="w-full h-full bg-gradient-to-br from-orange-500/30 to-yellow-600/20 flex items-center justify-center text-6xl opacity-50">
                      🍔
                    </div>
                    {item.tag && (
                      <span
                        className={`absolute top-4 left-4 z-30 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg transform group-hover:translate-x-2 transition-transform duration-300 ${
                          ["HOT", "SPICY", "BIG"].includes(item.tag)
                            ? "bg-red-600 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Content Side */}
                  <div className="sm:w-3/5 p-8 flex flex-col justify-between relative z-20">
                    <div>
                      <h4 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                        {item.name}
                      </h4>
                      <div className="h-1 w-12 bg-orange-500 mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                      <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex justify-between items-end mt-6 border-t border-white/5 pt-6">
                      <div className="flex flex-col">
                        <span className="text-xs text-neutral-500 uppercase tracking-widest mb-1">
                          Precio
                        </span>
                        <span className="text-3xl font-black text-white tracking-tighter">
                          {item.price}
                        </span>
                      </div>
                      <a
                        href={generateWhatsAppLink(getWhatsAppMessage("MENU_ITEM", item.name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative bg-white text-black w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform group-hover:scale-125 group-hover:-rotate-45"
                      >
                        {/* Animated background */}
                        <span className="absolute inset-0 rounded-full bg-orange-600 scale-0 group-hover/btn:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />

                        {/* Icon */}
                        <ArrowRight size={24} strokeWidth={3} className="relative transition-all duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group relative px-8 py-3 overflow-hidden rounded-full bg-transparent text-white border border-white/30 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-orange-500 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]">
            {/* Animated gradient background */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600/0 via-orange-600/5 to-orange-600/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

            {/* Shine effect */}
            <span className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            {/* Content */}
            <span className="relative font-bold tracking-widest text-sm uppercase flex items-center gap-2">
              Ver menú completo
              <ChevronRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
