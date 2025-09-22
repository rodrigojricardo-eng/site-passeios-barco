/* @ts-nocheck */
import React, { useState, useEffect } from "react";
import { Ship, Fish, Sun, MapPin, Phone, Mail, Instagram } from "lucide-react";

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
    capitaoTexto1: `O capitão Carlos Cavaco, nascido em Faro, é aficionado pela pesca desportiva e apaixonado pela Ria Formosa e Costa Algarvia. Conta com mais de 25 anos de experiência no mar e em atividades náuticas.`,
    capitaoTexto2: `Foi um dos grandes impulsionadores da Pesca de Big Game em Portugal, destacando-se na captura de Marlins, pequenos atuns e dourados.`,
    capitaoTexto3: `Entre as suas conquistas está o primeiro atum com mais de 200kg, homologado pela EFSA. Sempre atento ao bem-estar do ecossistema, coloca a qualidade e o cliente em primeiro lugar.`,

    embarcacaoTitulo: "A Embarcação",
    embarcacaoIntro: `A embarcação é uma Rodman 10.50m, equipada para proporcionar não só pesca, mas também conforto e lazer.`,
    embarcacaoItem1: "2 quartos confortáveis",
    embarcacaoItem2: "WC equipado",
    embarcacaoItem3: "Cozinha com grelhador elétrico e placa vitrocerâmica",
    embarcacaoItem4: "Máquina de café expresso",
    embarcacaoItem5: "Água potável a bordo",
    embarcacaoFim: `Tudo pensado para que viva um dia inesquecível, com qualidade e serviço premium. Sejam Bem-Vindos!`,

    servicosTitle: "Serviços Prestados",
    servicoPasseiosTitulo: "Passeios na Ria Formosa e Costa Algarvia",
    servicoPasseiosDesc: "Descubra a beleza da Ria Formosa e da Costa Algarvia em passeios únicos.",
    servicoPescaTitulo: "Pesca Desportiva",
    servicoPescaDesc: "Desde pesca de recife até Big Game aos Marlins e Atuns Gigantes.",
    servicoSunsetTitulo: "Sunset Experience",
    servicoSunsetDesc: "Passeio ao pôr-do-sol com vinho e degustação a bordo.",
    servicoIlhasTitulo: "Paragem nas Ilhas",
    servicoIlhasDesc: "Momentos relaxantes com paragens em ilhas da Ria Formosa.",

    precosTitle: "Preços",
    precosTexto: "Os preços variam conforme o serviço. Contacte-nos diretamente para obter uma proposta personalizada.",

    contactosTitle: "Contactos",
    contactosSubtitle: "Escolha a melhor forma de nos contactar:",
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
    capitaoTexto1: `Captain Carlos Cavaco, born in Faro, is passionate about sport fishing and a true lover of Ria Formosa and the Algarve Coast. He has over 25 years of experience at sea and in nautical activities.`,
    capitaoTexto2: `He was one of the pioneers of Big Game Fishing in Portugal, excelling in the catch of Marlins, small tuna, and dorados.`,
    capitaoTexto3: `Among his achievements is the first tuna over 200kg, certified by EFSA. Always attentive to the well-being of the ecosystem, he places quality and the client first.`,

    embarcacaoTitulo: "The Boat",
    embarcacaoIntro: `The boat is a Rodman 10.50m, equipped not only for fishing but also for comfort and leisure.`,
    embarcacaoItem1: "2 comfortable cabins",
    embarcacaoItem2: "Equipped bathroom",
    embarcacaoItem3: "Kitchen with electric grill and vitroceramic hob",
    embarcacaoItem4: "Espresso coffee machine",
    embarcacaoItem5: "Drinking water on board",
    embarcacaoFim: `Everything is designed for you to enjoy an unforgettable day, with premium quality and service. Welcome aboard!`,

    servicosTitle: "Our Services",
    servicoPasseiosTitulo: "Tours in Ria Formosa and Algarve Coast",
    servicoPasseiosDesc: "Discover the beauty of Ria Formosa and the Algarve Coast on unique tours.",
    servicoPescaTitulo: "Sport Fishing",
    servicoPescaDesc: "From reef fishing to Big Game targeting Marlins and Giant Tuna.",
    servicoSunsetTitulo: "Sunset Experience",
    servicoSunsetDesc: "Sunset cruise with wine and tasting on board.",
    servicoIlhasTitulo: "Island Stops",
    servicoIlhasDesc: "Relaxing breaks with stops on the Ria Formosa islands.",

    precosTitle: "Prices",
    precosTexto: "Prices vary depending on the service. Contact us directly for a personalized quote.",

    contactosTitle: "Contacts",
    contactosSubtitle: "Choose the best way to reach us:",
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
                     w-40 h-40 sm:w-56 sm:h-56 lg:w-[400px] lg:h-[400px] 
                     object-contain drop-shadow-lg"
        />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">{t.heroTitle}</h1>
        <p className="mb-6 text-base sm:text-lg lg:text-xl">{t.heroSubtitle}</p>
        <a href="#contactos" className="bg-white text-sky-600 font-bold px-6 py-3 rounded hover:bg-gray-100">{t.reservar}</a>
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

      {/* Capitão */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-3">👨‍✈️ {t.capitaoTitulo}</h3>
        <p className="text-slate-700 leading-relaxed mb-3">{t.capitaoTexto1}</p>
        <p className="text-slate-700 leading-relaxed mb-3">{t.capitaoTexto2}</p>
        <p className="text-slate-700 leading-relaxed">{t.capitaoTexto3}</p>
      </div>

      {/* Embarcação */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-3">🛥️ {t.embarcacaoTitulo}</h3>
        <p className="text-slate-700 leading-relaxed mb-3">{t.embarcacaoIntro}</p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-3">
          <li>{t.embarcacaoItem1}</li>
          <li>{t.embarcacaoItem2}</li>
          <li>{t.embarcacaoItem3}</li>
          <li>{t.embarcacaoItem4}</li>
          <li>{t.embarcacaoItem5}</li>
        </ul>
        <p className="text-slate-700 leading-relaxed font-medium">
          {t.embarcacaoFim}
        </p>
      </div>

      {/* Galeria de fotos e vídeos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <img src="/assets/foto1.jpg" alt="Passeio 1" className="rounded-lg shadow-md object-cover w-full h-64" />
        <img src="/assets/foto2.jpg" alt="Passeio 2" className="rounded-lg shadow-md object-cover w-full h-64" />
        <img src="/assets/foto3.jpg" alt="Passeio 3" className="rounded-lg shadow-md object-cover w-full h-64" />
        <img src="/assets/foto4.jpg" alt="Passeio 4" className="rounded-lg shadow-md object-cover w-full h-64" />
        <img src="/assets/foto5.jpg" alt="Passeio 5" className="rounded-lg shadow-md object-cover w-full h-64" />
        <img src="/assets/foto6.jpg" alt="Passeio 6" className="rounded-lg shadow-md object-cover w-full h-64" />
        <img src="/assets/foto7.jpg" alt="Passeio 7" className="rounded-lg shadow-md object-cover w-full h-64" />
        <img src="/assets/foto8.jpg" alt="Passeio 8" className="rounded-lg shadow-md object-cover w-full h-64" />

        {/* Vídeos */}
        <video controls className="rounded-lg shadow-md w-full h-64 object-cover">
          <source src="/assets/video1.mp4" type="video/mp4" />
          O seu navegador não suporta vídeos.
        </video>
        <video controls className="rounded-lg shadow-md w-full h-64 object-cover">
          <source src="/assets/video2.mp4" type="video/mp4" />
          O seu navegador não suporta vídeos.
        </video>
      </div>
    </Section>
  );
}

// 🔹 Serviços
function Servicos({ t }) {
  return (
    <Section id="servicos" title={t.servicosTitle}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-sky-100 p-6 rounded-xl shadow-md text-center">
          <Ship className="w-10 h-10 text-sky-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t.servicoPasseiosTitulo}</h3>
          <p className="text-slate-700">{t.servicoPasseiosDesc}</p>
        </div>
        <div className="bg-sky-100 p-6 rounded-xl shadow-md text-center">
          <Fish className="w-10 h-10 text-sky-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t.servicoPescaTitulo}</h3>
          <p className="text-slate-700">{t.servicoPescaDesc}</p>
        </div>
        <div className="bg-sky-100 p-6 rounded-xl shadow-md text-center">
          <Sun className="w-10 h-10 text-sky-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t.servicoSunsetTitulo}</h3>
          <p className="text-slate-700">{t.servicoSunsetDesc}</p>
        </div>
        <div className="bg-sky-100 p-6 rounded-xl shadow-md text-center">
          <MapPin className="w-10 h-10 text-sky-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t.servicoIlhasTitulo}</h3>
          <p className="text-slate-700">{t.servicoIlhasDesc}</p>
        </div>
      </div>
    </Section>
  );
}

// 🔹 Preços
function Precos({ t }) {
  return (
    <Section id="precos" title={t.precosTitle}>
      <div className="bg-sky-50 p-6 rounded-xl shadow text-center max-w-2xl mx-auto">
        <p className="text-slate-700 text-lg">{t.precosTexto}</p>
      </div>
    </Section>
  );
}

// 🔹 Contactos
function Contactos({ t }) {
  return (
    <Section id="contactos" title={t.contactosTitle} subtitle={t.contactosSubtitle}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-700">
        <div className="bg-sky-50 p-6 rounded-xl shadow text-center">
          <Phone className="w-8 h-8 text-sky-600 mx-auto mb-3" />
          <p><strong>{t.telefone}:</strong></p>
          <a href="tel:+351965881889" className="text-sky-600 hover:underline">965 881 889</a>
        </div>
        <div className="bg-sky-50 p-6 rounded-xl shadow text-center">
          <Mail className="w-8 h-8 text-sky-600 mx-auto mb-3" />
          <p><strong>{t.email}:</strong></p>
          <a href="mailto:ondutysealovers@gmail.com" className="text-sky-600 hover:underline">ondutysealovers@gmail.com</a>
        </div>
        <div className="bg-sky-50 p-6 rounded-xl shadow text-center">
          <Instagram className="w-8 h-8 text-sky-600 mx-auto mb-3" />
          <p><strong>{t.instagram}:</strong></p>
          <a href="https://instagram.com/on_duty_sea_lovers" target="_blank" className="text-sky-600 hover:underline">@on_duty_sea_lovers</a>
        </div>
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
      {/* Botão idioma */}
      <div className="absolute top-4 right-4 z-50">
        <button onClick={() => setLang(lang === "pt" ? "en" : "pt")} className="bg-white border px-2 py-1 rounded shadow hover:bg-gray-100">
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
            <a href="#sobre-nos" onClick={(e) => handleNavClick(e, "sobre-nos")} className="hover:underline">{t.navSobre}</a>
            <a href="#servicos" onClick={(e) => handleNavClick(e, "servicos")} className="hover:underline">{t.navServicos}</a>
            <a href="#precos" onClick={(e) => handleNavClick(e, "precos")} className="hover:underline">{t.navPrecos}</a>
            <a href="#contactos" onClick={(e) => handleNavClick(e, "contactos")} className="hover:underline">{t.navContactos}</a>
          </nav>
        </div>
      </header>

      <Hero t={t} />
      <SobreNos t={t} />
      <Servicos t={t} />
      <Precos t={t} />
      <Contactos t={t} />

      <footer className="py-6 bg-slate-100 text-center">
        &copy; 2025 On Duty. {t.footer}
      </footer>
    </div>
  );
}
