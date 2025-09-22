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
    sobreNosTexto: `A On Duty dedica-se a proporcionar experiências únicas no mar. 
Desde passeios de barco até pesca. Venha viver as melhores experiências connosco.`,
    capitaoTitulo: "O Capitão",
    capitaoTexto: `O capitão Carlos Cavaco, nascido em Faro, aficionado pela pesca desportiva e amante da nossa Ria Formosa e Costa Algarvia, leva já uma experiência de mar e atividades náuticas desde há 25 anos.
Um dos impulsionadores da Pesca de Big Game na pesca de Marlins, pequenos atuns, dourados e com o primeiro atum com mais de 200kg capturado a pesca de Big Game, homologado pela EFSA em Portugal.
Amante da natureza marítima e preocupado sempre com o bem estar do ecossistema.
À sua atividade aqui descrita junta-se a qualidade, preocupação e o bem estar, colocando sempre o cliente em primeiro lugar.`,

    embarcacaoTitulo: "A Embarcação",
    embarcacaoTexto: `A embarcação que vos oferece trata-se de uma embarcação da marca Rodman com 10.50 mt com todas as comodidades e conforto para quem não quer fazer somente pesca.
2 quartos, wc, cozinha com grelhador elétrico e placa vitroceramica, máquina de café expresso e água potável a bordo.
Tudo para que possam passar um dia inesquecível e memorável com a melhor qualidade e serviço pois trata-se da vossa casa no dia que se juntarem comigo.
SEJAM BEM VINDOS`,

    servicosTitle: "Serviços Prestados",
    servicosLista: [
      "Passeios na Ria Formosa e Costa Algarvia",
      "Pesca desportiva de recife e Big Game aos Marlins e Atuns Gigantes",
      "Sunset com passeio, vinho e degustação",
      "Paragem nas ilhas da Ria Formosa",
    ],

    precosTitle: "Preços",
    precosTexto: "Preços a contactar.",

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
    sobreNosTexto: `On Duty is dedicated to providing unique experiences at sea. 
From boat trips to fishing. Come and enjoy the best experiences with us.`,
    capitaoTitulo: "The Captain",
    capitaoTexto: `Captain Carlos Cavaco, born in Faro, passionate about sport fishing and a lover of our Ria Formosa and Algarve Coast, has over 25 years of experience at sea and in nautical activities.
One of the pioneers of Big Game Fishing in Portugal, with the first tuna over 200kg officially registered by EFSA.
A true ocean lover, always concerned with the well-being of the ecosystem, ensuring safety, quality and customer satisfaction on every trip.`,

    embarcacaoTitulo: "The Boat",
    embarcacaoTexto: `Our boat is a Rodman 10.50m, with all the amenities and comfort for those who want more than just fishing.
2 bedrooms, bathroom, kitchen with electric grill and vitroceramic hob, espresso machine and fresh water on board.
Everything so you can spend an unforgettable day with the best quality and service — this is your home at sea when you join us.
WELCOME ABOARD!`,

    servicosTitle: "Our Services",
    servicosLista: [
      "Boat tours in Ria Formosa and Algarve coast",
      "Reef sport fishing and Big Game for Marlins and Giant Tunas",
      "Sunset tour with wine and tasting experience",
      "Stops at Ria Formosa islands",
    ],

    precosTitle: "Prices",
    precosTexto: "Please contact us for pricing.",

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
      <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
      {subtitle && <p className="text-slate-600 mb-6 text-center">{subtitle}</p>}
      {children}
    </section>
  );
}

// 🔹 Hero
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
                     w-48 h-48 sm:w-64 sm:h-64 lg:w-[500px] lg:h-[500px] 
                     object-contain drop-shadow-lg"
        />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">{t.heroTitle}</h1>
        <p className="mb-6 text-base sm:text-lg lg:text-xl">{t.heroSubtitle}</p>
        <a href="#contactos" className="bg-white text-sky-600 font-bold px-6 py-3 rounded hover:bg-gray-100">
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
      {/* Texto inicial */}
      <p className="text-slate-700 mb-8 text-center max-w-3xl mx-auto">{t.sobreNosTexto}</p>

      {/* Capitão */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{t.capitaoTitulo}</h3>
        <p className="text-slate-700 leading-relaxed">{t.capitaoTexto}</p>
      </div>

      {/* Embarcação */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-2">{t.embarcacaoTitulo}</h3>
        <p className="text-slate-700 leading-relaxed">{t.embarcacaoTexto}</p>
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
    <Section id="servicos" title="Serviços Prestados">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-sky-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Passeios na Ria Formosa e Costa Algarvia</h3>
          <p className="text-slate-700">Explore a beleza natural e paisagens únicas.</p>
        </div>

        <div className="bg-sky-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Pesca Desportiva de Recife e Big Game</h3>
          <p className="text-slate-700">Atuns gigantes, Marlins e muito mais.</p>
        </div>

        <div className="bg-sky-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Sunset com Passeio, Vinho e Degustação</h3>
          <p className="text-slate-700">Momentos relaxantes com paragem nas ilhas.</p>
        </div>

      </div>
    </Section>
  );
}


// 🔹 Preços
function Precos({ t }) {
  return (
    <Section id="precos" title={t.precosTitle}>
      <p className="text-slate-700 text-center">{t.precosTexto}</p>
    </Section>
  );
}

// 🔹 Contactos
function Contactos({ t }) {
  return (
    <Section id="contactos" title={t.contactosTitle} subtitle={t.contactosSubtitle}>
      <div className="space-y-4 text-slate-700 text-center">
        <p>
          <strong>{t.telefone}:</strong>{" "}
          <a href="tel:+351965881889" className="text-sky-600 hover:underline">
            965 881 889
          </a>
        </p>
        <p>
          <strong>{t.email}:</strong>{" "}
          <a href="mailto:ondutysealovers@gmail.com" className="text-sky-600 hover:underline">
            ondutysealovers@gmail.com
          </a>
        </p>
        <p>
          <strong>{t.instagram}:</strong>{" "}
          <a href="https://instagram.com/on_duty_sea_lovers" target="_blank" className="text-sky-600 hover:underline">
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
    if (browserLang.toLowerCase().startsWith("en")) setLang("en");
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
          {lang === "pt" ? "🇬🇧 EN" : "🇵🇹 PT"}
        </button>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
            <Ship className="w-6 h-6" /> ON DUTY
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#sobre-nos" onClick={(e) => handleNavClick(e, "sobre-nos")} className="hover:underline">
              {t.navSobre}
            </a>
            <a href="#servicos" onClick={(e) => handleNavClick(e, "servicos")} className="hover:underline">
              {t.navServicos}
            </a>
            <a href="#precos" onClick={(e) => handleNavClick(e, "precos")} className="hover:underline">
              {t.navPrecos}
            </a>
            <a href="#contactos" onClick={(e) => handleNavClick(e, "contactos")} className="hover:underline">
              {t.navContactos}
            </a>
          </nav>
        </div>
      </header>

      {/* Secções */}
      <Hero t={t} />
      <SobreNos t={t} />
      <Servicos t={t} />
      <Precos t={t} />
      <Contactos t={t} />

      {/* Footer */}
      <footer className="py-6 bg-slate-100 text-center">
        &copy; 2025 On Duty. {t.footer}
      </footer>
    </div>
  );
}
