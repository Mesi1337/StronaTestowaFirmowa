/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Scissors, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  User, 
  Sparkles,
  Star,
  CheckCircle2
} from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "O nas", href: "#o-nas" },
  { name: "Usługi", href: "#uslugi" },
  { name: "Kontakt", href: "#kontakt" },
];

const SERVICES = [
  {
    id: "service-1",
    title: "Strzyżenie męskie",
    description: "Precyzyjne cięcie dopasowane do kształtu twarzy i Twojego stylu.",
    icon: <Scissors className="w-6 h-6" />,
    price: "od 40 zł"
  },
  {
    id: "service-2",
    title: "Strzyżenie damskie",
    description: "Nowoczesne strzyżenie, odświeżenie końcówek lub całkowita metamorfoza.",
    icon: <Scissors className="w-6 h-6 rotate-45" />,
    price: "od 60 zł"
  },
  {
    id: "service-3",
    title: "Stylizacja i modelowanie",
    description: "Okolicznościowe upięcia, fale lub profesjonalne wygładzenie włosów.",
    icon: <Sparkles className="w-6 h-6" />,
    price: "od 50 zł"
  },
  {
    id: "service-4",
    title: "Kompleksowa pielęgnacja",
    description: "Zabiegi regeneracyjne i odżywcze dla zdrowych i lśniących włosów.",
    icon: <Star className="w-6 h-6" />,
    price: "od 80 zł"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white border-x-8 border-white">
      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-x-8 border-white ${
          scrolled ? "bg-white/90 backdrop-blur-md border-b border-[#1a1a1a]/10 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-baseline gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-serif text-2xl font-bold tracking-tighter">SYLWIA S.</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold hidden sm:block">Studio Fryzur</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              onClick={() => scrollToSection("#kontakt")}
              className="bg-[#1a1a1a] text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#333] transition-colors"
            >
              Umów Wizytę
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[#1a1a1a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#fbfaf8] pt-24 px-10 md:hidden"
          >
            <div className="flex flex-col gap-10 items-center text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-3xl font-serif tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => scrollToSection("#kontakt")}
                className="w-full bg-[#1a1a1a] text-white py-4 text-xs font-bold uppercase tracking-widest"
              >
                Kontakt
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-24">
          <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8b7e6a] mb-6 font-bold">Wolsztyn • ul. Kocha</p>
              <h1 className="text-6xl md:text-8xl font-serif font-black leading-[0.95] mb-8 tracking-tighter">
                Najlepsze usługi <br/> 
                <span className="italic font-light text-[#8b7e6a]">fryzjerskie</span> <br/> 
                w Wolsztynie
              </h1>
              <p className="text-base text-[#444] max-w-md leading-relaxed mb-10 font-normal">
                Wieloletnie doświadczenie oraz zespół gwarantujący najwyższy poziom kompetencji i profesjonalną obsługę każdego klienta.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => scrollToSection("#kontakt")}
                  className="bg-[#1a1a1a] text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#333] transition-colors shadow-xl"
                >
                  Umów się teraz
                </button>
                <div className="flex items-center gap-4 group cursor-pointer" onClick={() => scrollToSection("#o-nas")}>
                  <div className="h-[1px] w-12 bg-[#1a1a1a]/20 group-hover:w-16 transition-all duration-300"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Odkryj Studio</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] lg:aspect-square"
            >
              <div className="absolute inset-0 bg-neutral-200 border border-[#1a1a1a]/10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1024" 
                  alt="Salon Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#000]/5 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-2xl border border-[#1a1a1a]/5 hidden md:block">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#8b7e6a] mb-1">Eksperci w koloryzacji</p>
                <p className="text-xl font-serif italic tracking-tighter">Perfekcyjne Cięcie</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="o-nas" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-10">
            <div className="mb-20 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#8b7e6a] font-bold block mb-4">Dziedzictwo</span>
              <h2 className="text-5xl font-serif tracking-tighter mb-8 leading-tight">Fachowość, którą <span className="italic">poczujesz</span> od wejścia.</h2>
              <div className="w-20 h-[1px] bg-[#1a1a1a] mb-8"></div>
              <p className="text-lg text-[#444] leading-relaxed mb-6 font-light">
                Zakład Fryzjerski Damsko-Męski Sylwia S. to nie tylko salon — to miejsce kreacji stylu. Od lat dbamy o wygląd mieszkańców Wolsztyna, stawiając na najwyższą jakość i zadowolenie.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/10 border border-[#1a1a1a]/10">
              {[
                { title: "Pasja", desc: "Każdy klient to nowa historia i unikalna stylizacja." },
                { title: "Kompetencje", desc: "Nieustannie szkolimy się w najnowszych technikach." },
                { title: "Jakość", desc: "Pracujemy wyłącznie na produktach premium." },
                { title: "Tradycja", desc: "Wieloletnia obecność na rynku buduje zaufanie." }
              ].map((benefit, i) => (
                <div key={i} className="bg-white p-10 group hover:bg-[#fbfaf8] transition-colors">
                  <span className="text-[10px] opacity-30 font-mono block mb-4">0{i+1}.</span>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-3">{benefit.title}</h3>
                  <p className="text-xs text-[#777] leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="uslugi" className="py-32">
          <div className="max-w-7xl mx-auto px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-xl">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#8b7e6a] font-bold block mb-4">Menu</span>
                <h2 className="text-5xl font-serif tracking-tighter">Usługi Studyjne</h2>
              </div>
              <p className="text-sm text-[#666] max-w-xs italic font-serif">
                Zapewniamy pełen zakres usług fryzjerskich dla kobiet i mężczyzn.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1a1a1a]/5 gap-px border border-[#1a1a1a]/10">
              {SERVICES.map((service, i) => (
                <div key={service.id} className="bg-[#fbfaf8] p-12 flex flex-col hover:bg-white transition-colors duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] opacity-40 font-mono tracking-tighter">SERVICE 0{i+1}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8b7e6a]">{service.price}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-4 italic tracking-tight">{service.title}</h3>
                  <p className="text-sm text-[#555] leading-relaxed max-w-xs mb-10 font-normal">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-[#1a1a1a]/5">
                    <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest group opacity-60 hover:opacity-100 transition-opacity">
                      Szczegóły usługi
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section className="bg-[#1a1a1a] text-white py-24">
          <div className="max-w-7xl mx-auto px-10 text-center">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter mb-12 italic font-light">Zapraszamy do naszego <span className="text-[#8b7e6a]">świata stylu</span>.</h2>
            <button 
               onClick={() => scrollToSection("#kontakt")}
               className="border-b-2 border-[#8b7e6a] pb-2 text-xl font-serif tracking-tight hover:text-[#8b7e6a] transition-colors"
            >
              Umów wizytę telefonicznie: 601 92X XXX
            </button>
          </div>
        </section>

        {/* Contact/Details Section */}
        <section id="kontakt" className="py-32 bg-[#fbfaf8]">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <div className="aspect-video bg-neutral-100 relative group overflow-hidden border border-[#1a1a1a]/10">
                  <img 
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Salon Details"
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-10 text-center pointer-events-none group-hover:bg-transparent transition-colors">
                     <div className="bg-white/90 backdrop-blur-sm p-10 border border-[#1a1a1a]/10 group-hover:opacity-0 transition-opacity">
                        <p className="font-serif italic text-2xl tracking-tighter text-[#1a1a1a]">\"Fryzjerstwo to nasza pasja. Każde cięcie to dla nas osobna historia.\"</p>
                     </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="space-y-12">
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#8b7e6a] mb-6">Lokalizacja</h4>
                    <p className="text-2xl font-serif tracking-tighter">ul. Kocha, Wolsztyn</p>
                    <p className="text-sm text-[#888] mt-2 italic">Serce powiatu wolsztyńskiego</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#8b7e6a] mb-6">Kontakt</h4>
                    <p className="text-2xl font-serif tracking-tighter">+48 601 92X XXX</p>
                    <p className="text-sm text-[#888] mt-2 italic">Zadzwoń, aby dopytać o terminy</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#8b7e6a] mb-6">Harmonogram</h4>
                    <p className="text-base font-bold uppercase tracking-widest text-[#1a1a1a]">Pn — Pt: 9:00 — 18:00</p>
                    <p className="text-sm text-[#888] mt-1 font-bold">Sobota: 8:00 — 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="h-[120px] bg-white border-t border-[#1a1a1a]/10 flex flex-col md:flex-row items-center px-10 gap-16 justify-between mt-8">
        <div className="flex items-baseline gap-4">
          <span className="font-serif text-xl font-bold tracking-tighter">SYLWIA S.</span>
          <span className="text-[8px] uppercase tracking-[0.3em] opacity-40 font-black">Est. 2010</span>
        </div>
        
        <div className="hidden lg:flex gap-16">
          <div>
            <p className="text-[9px] uppercase tracking-widest opacity-50 mb-1 font-bold">Adres</p>
            <p className="text-[10px] font-bold uppercase">ul. Kocha, Wolsztyn</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest opacity-50 mb-1 font-bold">Telefon</p>
            <p className="text-[10px] font-bold tracking-tighter">+48 601 92X XXX</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-[11px] italic font-serif text-[#666]">Zapraszamy serdecznie do naszego salonu.</p>
          <p className="text-[9px] uppercase font-bold tracking-widest opacity-30 mt-1">© {new Date().getFullYear()} Studio Sylwia S.</p>
        </div>
      </footer>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}
