import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import MenuSection from "@/components/sections/MenuSection";
import Ingredients from "@/components/sections/Ingredients";
import TheHype from "@/components/sections/TheHype";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <MenuSection />
        <Ingredients />
        <TheHype />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
