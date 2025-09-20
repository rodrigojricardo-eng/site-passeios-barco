/* @ts-nocheck */
import React, { useState, useEffect } from "react";
import { Ship } from "lucide-react";

// 🔹 Textos em PT e EN
const texts = {
  pt: {
    navSobre: "Sobre Nós",
    navContactos: "Contactos",

    heroTitle: "On Duty - Passeios de Barco",
    heroSubtitle: "Descubra experiências incríveis e únicas no mar.",
    reservar: "Reservar Agora",

    sobreNosTitle: "Sobre Nós",
    sobreNosSubtitle: "Conheça a nossa empresa",
    sobreNosTexto: `A On Duty dedica-se a proporcionar experiências únicas no mar. 
Desde passeios de barco até pesca. Venha viver as melhores experiências connosco.`,

    contactosTitle: "Contactos",
    contactosSubtitle: "Reserve o seu passeio através dos nossos contactos",
    telefone: "Telefone",
    email: "Email",
    instagram: "Instagram",

    footer: "Todos os direitos reservados.",
  },
  en: {
    navSobre: "About Us",
    navContactos: "Contacts",

    heroTitle: "On Duty - Boat Tours",
    heroSubtitle: "Discover incredible and unique experiences at sea.",
    reservar: "Book Now",

    sobreNosTitle: "About Us",
    sobreNosSubtitle: "Get to know our company",
    sobreNosTexto: `On Duty is dedicated to providing unique experiences at sea. 
From boat trips to fishing. Come and enjoy the best experiences with us.`,

    contactosTitle: "Contacts",
    contactosSubtitle: "Book your tour through our contacts",
    telefone: "Phone",
    email: "Email",
    instagram: "Instagram",

    footer: "All rights reserved.",
  },
};

// 🔹 Componente genérico de seção
function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-slate-600 mb-6">{subtitle}</p>}
      {children}	
    </section>
  );
}

// 🔹 Hero responsivo
function Hero({ t }) {
  return (
    <section
      className="relative h-[100vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/fundo.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center">
<img
  src="/assets/logo.png"
  alt="On Duty Logo"
  className="mx-auto mt-12 sm:mt-20 lg:mt-40 mb-6 
             w-72 h-72 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] 
             object-contain drop-shadow-lg"
/>


        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
          {t.heroTitle}
        </h1>
        <p className="mb-6 text-base sm:text-lg lg:text-xl">{t.heroSubtitle}</p>
        <a
          href="#contactos"
          className="bg-white text-sky-600 font-bold px-6 py-3 rounded hover:bg-gray-100"
        >
          {t.reservar}
        </a>
      </div>
    </section>
  );
}

// 🔹 Sobre Nós
function SobreNos({ t }) {
  return (
    <Section id="sobre-nos" title={t.sobreNosTitle} subtitle={t.sobreNosSubtitle}>
      <p className="text-slate-700 mb-8 text-center max-w-3xl mx-auto">
        {t.sobreNosTexto}
      </p>

      {/* Grid de mídia */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <video controls className="rounded-xl w-full h-64 object-cover">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <video controls className="rounded-xl w-full h-64 object-cover">
          <source src="/assets/video2.mp4" type="video/mp4" />
        </video>

        <img src="/assets/foto1.jpg" alt="Foto 1" className="rounded-xl w-full h-64 object-cover" />
        <img src="/assets/foto2.jpg" alt="Foto 2" className="rounded-xl w-full h-64 object-cover" />
        <img src="/assets/foto3.jpg" alt="Foto 3" className="rounded-xl w-full h-64 object-cover" />
        <img src="/assets/foto4.jpg" alt="Foto 4" className="rounded-xl w-full h-64 object-cover" />
        <img src="/assets/foto5.jpg" alt="Foto 5" className="rounded-xl w-full h-64 object-cover" />
        <img src="/assets/foto6.jpg" alt="Foto 6" className="rounded-xl w-full h-64 object-cover" />
        <img src="/assets/foto7.jpg" alt="Foto 7" className="rounded-xl w-full h-64 object-cover" />
        <img src="/assets/foto8.jpg" alt="Foto 8" className="rounded-xl w-full h-64 object-cover" />
      </div>
    </Section>
  );
}

// 🔹 Contactos
function Contactos({ t }) {
  return (
    <Section id="contactos" title={t.contactosTitle} subtitle={t.contactosSubtitle}>
      <div className="space-y-4 text-slate-700">
        <p>
          <strong>{t.telefone}:</strong>{" "}
          <a href="tel:+351965881889" className="text-sky-600 hover:underline">
            965 881 889
          </a>
        </p>
        <p>
          <strong>{t.email}:</strong>{" "}
          <a
            href="mailto:ondutysealovers@gmail.com"
            className="text-sky-600 hover:underline"
          >
            ondutysealovers@gmail.com
          </a>
        </p>
        <p>
          <strong>{t.instagram}:</strong>{" "}
          <a
            href="https://instagram.com/on_duty_sea_lovers"
            target="_blank"
            className="text-sky-600 hover:underline"
          >
            @on_duty_sea_lovers
          </a>
        </p>
      </div>
    </Section>
  );
}

// 🔹 App principal
export default function SitePasseiosBarco() {
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().startsWith("en")) {
      setLang("en");
    } else {
      setLang("pt");
    }
  }, []);

  const t = texts[lang];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Botão de idioma */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
          className="bg-white border px-2 py-1 rounded shadow hover:bg-gray-100 flex items-center gap-2"
        >
          {lang === "pt" ? (
            <>
              🇬🇧 <span className="text-sm font-medium">EN</span>
            </>
          ) : (
            <>
              🇵🇹 <span className="text-sm font-medium">PT</span>
            </>
          )}
        </button>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-extrabold text-xl tracking-tight"
          >
            <Ship className="w-6 h-6" /> ON DUTY
          </a>

          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a
              href="#sobre-nos"
              onClick={(e) => handleNavClick(e, "sobre-nos")}
              className="hover:underline"
            >
              {t.navSobre}
            </a>
            <a
              href="#contactos"
              onClick={(e) => handleNavClick(e, "contactos")}
              className="hover:underline"
            >
              {t.navContactos}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero t={t} />

      {/* Sobre Nós */}
      <SobreNos t={t} />

      {/* Contactos */}
      <Contactos t={t} />

      {/* Footer */}
      <footer className="py-6 bg-slate-100 text-center">
        &copy; 2025 On Duty. {t.footer}
      </footer>
    </div>
  );
}
