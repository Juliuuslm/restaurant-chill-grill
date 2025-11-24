import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";

export const metadata: Metadata = {
  title: "GRILL & CHILL | Hamburguesas y Hot Dogs Gourmet",
  description:
    "Más que comida, es un estado mental. Hamburguesas premium, hot dogs artesanos y el mejor ambiente.",
  keywords: [
    "hamburguesas",
    "hot dogs",
    "comida rápida",
    "gourmet",
    "CDMX",
  ],
  authors: [{ name: "Grill & Chill" }],
  creator: "Grill & Chill",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://grillchill.mx",
    siteName: "GRILL & CHILL",
    title: "GRILL & CHILL | Hamburguesas y Hot Dogs Gourmet",
    description:
      "Más que comida, es un estado mental. Hamburguesas premium, hot dogs artesanos y el mejor ambiente.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRILL & CHILL",
    description:
      "Más que comida, es un estado mental. Hamburguesas premium, hot dogs artesanos y el mejor ambiente.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black font-sans selection:bg-orange-500 selection:text-white">
        <ScrollProgressIndicator />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
