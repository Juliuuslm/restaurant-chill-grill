"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_MESSAGES } from "@/lib/constants";

const WhatsAppButton = () => {
  return (
    <a
      href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_MESSAGES.GENERAL)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative w-16 h-16">
        {/* Premium glow effect - orange instead of green for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse-glow opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Main button with 3D effect */}
        <div className="relative w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-glow-lg hover:shadow-glow-xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform group-hover:scale-125 group-hover:-translate-y-2">
          <MessageCircle className="w-8 h-8 text-white filter drop-shadow-lg" fill="white" />
        </div>

        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-full group-hover:animate-ping opacity-0 group-hover:opacity-75 bg-orange-500" />
      </div>

      {/* Tooltip on hover */}
      <div className="absolute right-20 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-neutral-900 text-white text-xs font-bold px-3 py-2 rounded-lg whitespace-nowrap backdrop-blur-md border border-orange-500/50">
          ¡Hablemos!
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
