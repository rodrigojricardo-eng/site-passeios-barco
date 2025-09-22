/* @ts-nocheck */
import React, { useState, useEffect } from "react";
import { Ship, Fish, Sun, MapPin } from "lucide-react";

// 🔹 Textos em PT e EN
const texts = {
  pt: {
    navSobre: "Sobre Nós",
    navServicos: "Serviços",
    navPrecos: "Preços",
    navContactos: "Contactos",

    heroTitle: "On Duty - Passeios de Barco",
    heroSubtitle: "Descubra experiências incríveis e únicas no mar.",
    reservar: "Reservar Agora",

    sobreNosTitle: "Sobre Nós",
    sobreNosSubtitle: "Conheça a nossa empresa",

    servicosTitle: "Serviços Prestados",

    precosTitle: "Preços",
    precosTexto: "Os preços variam conforme o serviço. Contacte-nos para mais informações.",

    contactosTitle: "Contactos",
    contactosSubtitle: "Reserve o seu passeio através dos nossos contactos",
    telefone: "Telefone",
    email: "Email",
    instagram: "Instagram",

    footer: "Todos os direitos reservados.",
  },
  en: {
    navSobre: "About Us",
    navServicos: "Services",
    navPrecos: "Prices",
    navContactos: "Contacts",

    heroTitle: "On Duty - Boat Tours",
    heroSubtitle: "Discover incredible and unique experiences at sea.",
    reservar: "Book Now",

    sobreNosTitle: "About Us",
    sobreNosSubtitle: "Get to know our company",

    servicosTitle: "Our Services",

    precosTitle: "Prices",
    precosTexto: "Prices vary depending on the service. Contact us for details.",

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
        {/* Logo */}
        <img
          src="/assets/logo.png"
          alt="On Duty Logo"
          className="mx-auto mt-12 sm:mt-20 lg:mt-40 mb-6 
                     w-40 h-40 sm:w-56 sm:h-56 lg:w-[500px] lg:h-[500px] 
                     object-contain drop-shadow-lg"
        />

        {/* Texto e botão */}
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
function SobreNos() {
  return (
    <Section id="sobre-nos" title="Sobre Nós" subtitle="Conheça a nossa empresa">
      <p className="text-slate-700 mb-8 text-center max-w-3xl mx-auto">
        A <strong>On Duty</strong> dedica-se a proporcionar experiências únicas
        no mar. Desde passeios de barco até pesca. Venha viver as melhores
        experiências connosco.
      </p>

      {/* Texto sobre o Capitão */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-3">👨‍✈️ O Capitão</h3>
        <p className="text-slate-700 leading-relaxed mb-3">
          O capitão <strong>Carlos Cavaco</strong>, nascido em Faro, é aficionado pela pesca
          desportiva e apaixonado pela <strong>Ria Formosa</strong> e a <strong>Costa Algarvia</strong>.
          Conta com mais de <strong>25 anos de experiência</strong> no mar e em atividades náuticas.
        </p>
        <p className="text-slate-700 leading-relaxed mb-3">
          Foi um dos grandes impulsionadores da <strong>Pesca de Big Game</strong> em Portugal,
          destacando-se na captura de Marlins, pequenos atuns e dourados.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Entre as suas conquistas está o <strong>primeiro atum com mais de 200kg</strong>,
          homologado pela EFSA. Sempre atento ao <strong>bem-estar do ecossistema</strong>,
          coloca a <strong>qualidade</strong> e o <strong>cliente</strong> em primeiro lugar.
        </p>
      </div>

      {/* Texto sobre a Embarcação */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-3">🛥️ A Embarcação</h3>
        <p className="text-slate-700 leading-relaxed mb-3">
          A embarcação é uma <strong>Rodman 10.50m</strong>, equipada para proporcionar
          não só pesca, mas também <strong>conforto e lazer</strong>.
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-3">
          <li>2 quartos confortáveis</li>
          <li>WC equipado</li>
          <li>Cozinha com grelhador elétrico e placa vitrocerâmica</li>
          <li>Máquina de café expresso</li>
          <li>Água potável a bordo</li>
        </ul>
        <p className="text-slate-700 leading-relaxed font-medium">
          Tudo pensado para que viva um <strong>dia inesquecível</strong>,
          com qualidade e serviço premium. <br />
          <span className="font-bold uppercase">Sejam Bem-Vindos!</span>
        </p>
      </div>

      {/* Grid de mídia */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Vídeos */}
        <video controls className="rounded-xl w-full h-64 object-cover">
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
        <video controls className="rounded-xl w-full h-64 object-cover">
          <source src="/assets/video2.mp4" type="video/mp4" />
        </video>

        {/* Fotos */}
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

// 🔹 Serviços
function Servicos({ t }) {
  return (
    <Section id="servicos" title={t.servicosTitle}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-sky-100 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <Ship className="w-10 h-10 text-sky-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Passeios na Ria Formosa e Costa Algarvia
          </h3>
          <p className="text-slate-700">Explore a beleza natural e paisagens únicas.</p>
        </div>

        <div className="bg-sky-100 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <Fish className="w-10 h-10 text-sky-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Pesca Desportiva de Recife e Big Game
          </h3>
          <p className="text-slate-700">Atuns gigantes, Marlins e muito mais.</p>
        </div>

        <div className="bg-sky-100 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <Sun className="w-10 h-10 text-sky-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Sunset com Passeio, Vinho e Degustação
          </h3>
          <p className="text-slate-700">Momentos relaxantes com paragem nas ilhas.</p>
        </div>

        <div className="bg-sky-100 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <MapPin className="w-10 h-10 text-sky-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Paragem nas Ilhas da Ria Formosa
          </h3>
          <p className="text-slate-700">Descubra locais paradisíacos com águas cristalinas.</p>
        </div>

      </div>
    </Section>
  );
}

// 🔹 Preços
function Precos({ t }) {
  return (
    <Section id="precos" title={t.precosTitle}>
      <p className="text-slate-700 text-lg text-center">{t.precosTexto}</p>
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
            <a href="#sobre-nos" onClick={(e) => handleNavClick(e, "sobre-nos")} className="hover:underline">{t.navSobre}</a>
            <a href="#servicos" onClick={(e) => handleNavClick(e, "servicos")} className="hover:underline">{t.navServicos}</a>
            <a href="#precos" onClick={(e) => handleNavClick(e, "precos")} className="hover:underline">{t.navPrecos}</a>
            <a href="#contactos" onClick={(e) => handleNavClick(e, "contactos")} className="hover:underline">{t.navContactos}</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero t={t} />

      {/* Sobre Nós */}
      <SobreNos />

      {/* Serviços */}
      <Servicos t={t} />

      {/* Preços */}
      <Precos t={t} />

      {/* Contactos */}
      <Contactos t={t} />

      {/* Footer */}
      <footer className="py-6 bg-slate-100 text-center">
        &copy; 2025 On Duty. {t.footer}
      </footer>
    </div>
  );
}
