"use client";

import { useState } from "react";
import Image from "next/image";
import {
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
      desc: "Doble smash ultra-crujiente, queso que gotea, cebolla caramelizada hasta el dulzor perfecto, nuestra salsa Chill secreta y pepinillos que crujen. Los bordes tostados son lo mejor.",
      price: "$12.50",
      tag: "BEST SELLER",
      img: "/images/menu/hamburguesas/menu-ha1.jpg",
    },
    {
      name: "TRUFFLE MAKER",
      desc: "Doble carne jugosa, queso suizo fundido en cada capa, mayonesa de trufa negra que perfuma cada bocado, champiñones portobello asados hasta lo carnoso. Umami nivel experto.",
      price: "$15.00",
      tag: "PREMIUM",
      img: "/images/menu/hamburguesas/menu-ha2.jpg",
    },
    {
      name: "SPICY INFERNO",
      desc: "Smash sellado en su propio jugo, jalapeños que pican progresivo, pepper jack fundido, salsa habanero-mango que equilibra fuego y dulce, bacon tan crujiente que se rompe. Pica rico, no te mata.",
      price: "$13.50",
      tag: "HOT",
      img: "/images/menu/hamburguesas/menu-ha3.jpg",
    },
    {
      name: "CRISPY CHICK",
      desc: "Pollo marinado 24h en buttermilk, frito dorado con costra crocante, ensalada de col morada fresca que cruje, pepinillos ácidos, spicy mayo cremosa. Escuchas el crunch en cada mordida.",
      price: "$11.00",
      tag: "NEW",
      img: "/images/menu/hamburguesas/menu-ha4.jpg",
    },
  ],
  hotdogs: [
    {
      name: "THE BEAST DOG",
      desc: "30cm de pura indulgencia: salchicha jumbo envuelta en bacon ahumado, cebolla grillada hasta lo caramelo, queso fundido que gotea por todos lados. Se necesitan dos manos.",
      price: "$10.50",
      tag: "BIG",
      img: "/images/menu/hotdogs/menu-ho1.jpg",
    },
    {
      name: "CHILI CHEESE",
      desc: "Salchicha ahumada 8 horas, chili con carne hecho desde cero (cocción lenta 4 horas), queso cheddar rallado al momento que se funde con el calor, cebollino fresco que corta lo pesado. Comfort food serio.",
      price: "$11.00",
      tag: "CLASSIC",
      img: "/images/menu/hotdogs/menu-ho2.jpg",
    },
    {
      name: "NYC STYLE",
      desc: "Straight from NYC: sauerkraut ácido que balancea, mostaza artesanal con especias secretas, salsa de cebolla caramelizada. Simple, honesto, perfecto. Como debe ser.",
      price: "$9.00",
      tag: "",
      img: "/images/menu/hotdogs/menu-ho3.jpg",
    },
    {
      name: "AVOCADO DOG",
      desc: "Salchicha de pavo jugosa, guacamole machacado al momento (aguacates Hass maduros), pico de gallo fresco que explota en tu boca, crema agria fría, totopos que añaden ese crunch. Fresco y contundente.",
      price: "$12.00",
      tag: "FRESH",
      img: "/images/menu/hotdogs/menu-ho4.jpg",
    },
  ],
  papas: [
    {
      name: "TRUFFLE PARM",
      desc: "Papas corte fino extra-crujientes, rociadas con aceite de trufa blanca (el real, no ese aceite falso), parmesano Reggiano 24 meses rallado grueso, perejil fresco. Huele a lujo, sabe a adicción.",
      price: "$8.50",
      tag: "PREMIUM",
      img: "/images/menu/papas/menu-pa1.jpg",
    },
    {
      name: "LOADED FRIES",
      desc: "Papas ahogadas en salsa de queso cheddar real (nada de Cheez Whiz), bacon crujiente en pedazos grandes, crema agria fría que contrasta, cebollín fresco. Un plato, tres texturas, cero arrepentimientos.",
      price: "$9.00",
      tag: "SHARE",
      img: "/images/menu/papas/menu-pa2.jpg",
    },
    {
      name: "CAJUN SPIRAL",
      desc: "Papas en espiral doradas y crocantes, cubiertas con nuestra mezcla cajún secreta (picante, ahumada, ligeramente dulce). Cada curva atrapa más sabor. Adictivas nivel peligroso.",
      price: "$7.00",
      tag: "SPICY",
      img: "/images/menu/papas/menu-pa3.jpg",
    },
    {
      name: "SWEET POTATO",
      desc: "Camote cortado grueso, frito hasta lo crujiente por fuera pero cremoso por dentro, dip de miel real con mostaza Dijon. El contraste dulce-ácido-picante que no sabías que necesitabas.",
      price: "$7.50",
      tag: "SWEET",
      img: "/images/menu/papas/menu-pa4.jpg",
    },
  ],
  alitas: [
    {
      name: "BUFFALO SOLDIER",
      desc: "Alitas fritas dos veces (extra crocantes), bañadas en salsa buffalo clásica: picante que pega, ácida que balancea, mantequilla que suaviza. Con blue cheese cremoso que apaga el fuego. Necesitas servilletas.",
      price: "$13.00",
      tag: "HOT",
      img: "/images/menu/alitas/menu-ali1.jpg",
    },
    {
      name: "BBQ BOURBON",
      desc: "Glaseadas en salsa BBQ que hacemos cada mañana: reducción de bourbon real, miel oscura, toque ahumado. Se caramelizan al final para ese brillo pegajoso. Sweet, smoky, con un toque boozy.",
      price: "$13.00",
      tag: "SMOKY",
      img: "/images/menu/alitas/menu-ali2.jpg",
    },
    {
      name: "MANGO HABANERO",
      desc: "Salsa de mango fresco que empieza dulce, tropical, inocente... hasta que el habanero te golpea. Fuego que sube gradual. Sudas, pero sigues comiendo. Ese es el punto.",
      price: "$13.50",
      tag: "SPICY",
      img: "/images/menu/alitas/menu-ali3.jpg",
    },
    {
      name: "GARLIC PARM",
      desc: "Ajo asado 40 minutos hasta lo dulce y cremoso, mezclado con parmesano Reggiano real, mantequilla europea. Sin picante, puro umami. Las más adictivas para los que no buscan fuego.",
      price: "$13.00",
      tag: "",
      img: "/images/menu/alitas/menu-ali4.jpg",
    },
  ],
  bebidas: [
    {
      name: "CRAFT COLA",
      desc: "Cola real hecha desde cero: nuez de cola importada, vainilla de Madagascar, cítricos frescos, cero jarabe de maíz. Sabe a lo que la Coca-Cola debería saber. Carbonatada al momento.",
      price: "$4.50",
      tag: "ARTISAN",
      img: "/images/menu/bebidas/menu-dri1.jpg",
    },
    {
      name: "MINT LEMONADE",
      desc: "Limones exprimidos a la orden, menta machacada que libera aceites esenciales, hielo picado fino, toque de azúcar de caña. Refrescante, herbácea, la cura perfecta para lo picante.",
      price: "$5.00",
      tag: "FRESH",
      img: "/images/menu/bebidas/menu-dri2.jpg",
    },
    {
      name: "VANILLA SKY",
      desc: "Malteada tan espesa que necesitas popote extra ancho: helado premium, vainilla de Madagascar (ves las semillas), leche entera, crema batida REAL encima. Fría, cremosa, pecaminosamente buena.",
      price: "$7.00",
      tag: "SHAKE",
      img: "/images/menu/bebidas/menu-dri3.jpg",
    },
    {
      name: "IPA DRAFT",
      desc: "IPA local de barril, siempre rotando: lúpulos cítricos que explotan en nariz, amargor presente pero balanceado, final limpio. Servida a 4°C exactos. Corta la grasa, limpia el paladar.",
      price: "$8.00",
      tag: "BEER",
      img: "/images/menu/bebidas/menu-dri4.jpg",
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
                  {/* Product Image */}
                  <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden relative bg-neutral-950">
                    {item.img ? (
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        quality={85}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-orange-500/30 to-yellow-600/20 flex items-center justify-center text-6xl opacity-50">
                        🍔
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-black/50 z-20" />
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
      </div>
    </section>
  );
};

export default MenuSection;
