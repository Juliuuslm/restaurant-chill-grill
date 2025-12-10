import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";

export const metadata: Metadata = {
  title: "GRILL & CHILL | Hamburguesas y Hot Dogs Gourmet",
  description:
    "Donde la parrilla canta y cada bocado cuenta una historia. Carne que gotea sabor, pan tostado que cruje, sabores que explotan en tu boca.",
  keywords: [
    "hamburguesas",
    "hot dogs",
    "comida rápida",
    "gourmet",
    "CDMX",
  ],
  authors: [{ name: "Grill & Chill" }],
  creator: "Grill & Chill",
  icons: {
    icon: "/favicon/favicon-grill-chill.png",
    shortcut: "/favicon/favicon-grill-chill.png",
    apple: "/favicon/favicon-grill-chill.png",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://grillchill.mx",
    siteName: "GRILL & CHILL",
    title: "GRILL & CHILL | Hamburguesas y Hot Dogs Gourmet",
    description:
      "Donde la parrilla canta y cada bocado cuenta una historia. Carne que gotea sabor, pan tostado que cruje, sabores que explotan en tu boca.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRILL & CHILL",
    description:
      "Donde la parrilla canta y cada bocado cuenta una historia. Carne que gotea sabor, pan tostado que cruje, sabores que explotan en tu boca.",
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
