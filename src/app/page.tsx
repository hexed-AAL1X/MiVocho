"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const copy = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      menu: "Carta",
      testimonials: "Testimonios",
      contact: "Contacto",
    },
    hero: {
      tagline: "Nuestra especialidad, pescados y mariscos que conquistará tu paladar.",
      intro: "Sabores de mar con acento peruano. Frescura, técnica y calidez en cada plato.",
      badge: "Cocina marina",
      location: "San Isidro",
    },
    stats: [
      { label: "Reseñas 5⭐", value: "4.9" },
      { label: "Reservas/semana", value: "240" },
      { label: "Años cocinando", value: "12" },
    ],
    about: [
      "Desde nuestra apertura, nos enfocamos en ser referencia de cocina marina peruana: pescados y mariscos frescos, técnica moderna y un servicio cálido.",
      "Nuestro equipo combina tradición y creatividad para lograr platos consistentes, con trazabilidad de insumos y respeto por cada proceso. Apostamos por una experiencia que equilibra calidad, sostenibilidad y hospitalidad.",
      "Creemos que lo simple, bien hecho, es lo que conquista: por eso cuidamos cada detalle para que tu visita sea memorable.",
    ],
    cartaTitle: "Clásica cocina peruana",
    cartaLabel: "Nuestra carta",
    cartaSlideTitles: [
      "Platos tradicionales",
      "Cocina marina",
      "Bebidas naturales",
      "Especialidades criollas",
      "Desayunos",
      "Sopas",
    ],
    testimonialsTitle: "Qué opinan nuestros clientes",
    testimonialsLabel: "Testimonios",
    excellent: "Excelente",
    basedOn: "Basado en 46 reseñas",
    contactTitle: "Contacto",
    contactIntro: "Si tienes preguntas o comentarios, no dudes en comunicarte con nosotros.",
    contactLabels: {
      address: "Dirección",
      phone: "Teléfono",
      email: "Correo",
    },
    scheduleTitle: "Horario de atención*",
    scheduleLines: {
      daily: "Abrimos todos los días, incluido feriados.",
      weekday: "Lunes a sábado de 7:00 am a 4:00 pm",
      sunday: "Domingos sin atención ni reservas.",
      reduced: "Horario reducido: 24, 25, 31 de diciembre y 1 de enero de 12:00 m a 6:00 pm (última reserva 4:00 pm).",
      disclaimer: "*Horario sujeto a modificación.",
    },
    whatsappCta: "Reservar por WhatsApp",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      menu: "Menu",
      testimonials: "Reviews",
      contact: "Contact",
    },
    hero: {
      tagline: "Our specialty: seafood dishes that will win you over.",
      intro: "Sea flavors with a Peruvian accent. Freshness, technique, and warmth in every plate.",
      badge: "Seafood cuisine",
      location: "San Isidro",
    },
    stats: [
      { label: "5⭐ Reviews", value: "4.9" },
      { label: "Bookings/week", value: "240" },
      { label: "Years cooking", value: "12" },
    ],
    about: [
      "Since opening, we've focused on being a reference for Peruvian seafood: fresh fish and shellfish, modern technique, and warm service.",
      "Our team blends tradition and creativity to deliver consistent plates, with traceable sourcing and respect for every process. We aim for an experience that balances quality, sustainability, and hospitality.",
      "We believe well-crafted simplicity wins: that's why we care for every detail to make your visit memorable.",
    ],
    cartaTitle: "Classic Peruvian cuisine",
    cartaLabel: "Our menu",
    cartaSlideTitles: [
      "Traditional dishes",
      "Seafood cuisine",
      "Natural drinks",
      "Creole specialties",
      "Breakfast",
      "Soups",
    ],
    testimonialsTitle: "What our guests say",
    testimonialsLabel: "Reviews",
    excellent: "Excellent",
    basedOn: "Based on 46 reviews",
    contactTitle: "Contact",
    contactIntro: "If you have questions or comments, feel free to reach out.",
    contactLabels: {
      address: "Address",
      phone: "Phone",
      email: "Email",
    },
    scheduleTitle: "Opening hours*",
    scheduleLines: {
      daily: "Open every day, holidays included.",
      weekday: "Monday to Saturday from 7:00 am to 4:00 pm",
      sunday: "Sundays closed (no reservations).",
      reduced: "Reduced hours: Dec 24, 25, 31 and Jan 1 from 12:00 pm to 6:00 pm (last reservation 4:00 pm).",
      disclaimer: "*Hours subject to change.",
    },
    whatsappCta: "Book via WhatsApp",
  },
};

const menuHighlights = [
  {
    title: "Pulpo a las brasas",
    description: "Con puré de coliflor rostizada y aceite de chile de árbol.",
    price: "$320",
  },
  {
    title: "Risotto de hongos",
    description: "Arborio con setas de temporada, parmesano madurado y mantequilla de salvia.",
    price: "$280",
  },
  {
    title: "Tiradito de hamachi",
    description: "Leche de tigre cítrica, pepino encurtido y ajonjolí tostado.",
    price: "$310",
  },
  {
    title: "Panna cotta de vainilla",
    description: "Compota de frutos rojos, crumble de almendra y menta fresca.",
    price: "$160",
  },
];

const cartaSlides = [
  {
    src: "/food.webp",
    alt: "Plato 1 Mi Vocho.",
    title: "Platos tradicionales",
  },
  {
    src: "/food2.webp",
    alt: "Plato 2 Mi Vocho.",
    title: "Cocina marina",
  },
  {
    src: "/food3.webp",
    alt: "Plato 3 Mi Vocho.",
    title: "Bebidas naturales",
  },
  {
    src: "/food4.webp",
    alt: "Plato 4 Mi Vocho.",
    title: "Especialidades criollas",
  },
  {
    src: "/food5.webp",
    alt: "Plato 5 Mi Vocho.",
    title: "Desayunos",
  },
  {
    src: "/food6.webp",
    alt: "Plato 6 Mi Vocho.",
    title: "Sopas",
  },
];

const reviews = {
  es: [
    {
      quote: "Muy buen lugar de menú y ensaldas",
      name: "Gustavo Cano",
      source: "Google",
      avatar: "/opinion1.webp",
    },
    {
      quote: "Comida: 5\nServicio: 5\nAmbiente: 4",
      name: "Renso Sarco",
      source: "Google",
      avatar: "/opinion2.webp",
    },
    {
      quote: "Muy buena la comida, de primera precios muy comodos.",
      name: "Cary Rodríguez",
      source: "Google",
      avatar: "/opinion3.webp",
    },
    {
      quote: "Me encantó la comida y el servicio",
      name: "Hector Humberto Pina Castaneda",
      source: "Google",
      avatar: "/opinion4.webp",
    },
  ],
  en: [
    {
      quote: "Great spot for set menus and salads.",
      name: "Gustavo Cano",
      source: "Google",
      avatar: "/opinion1.webp",
    },
    {
      quote: "Food: 5\nService: 5\nAmbience: 4",
      name: "Renso Sarco",
      source: "Google",
      avatar: "/opinion2.webp",
    },
    {
      quote: "Excellent food, top quality and very fair prices.",
      name: "Cary Rodríguez",
      source: "Google",
      avatar: "/opinion3.webp",
    },
    {
      quote: "Loved the food and the service",
      name: "Hector Humberto Pina Castaneda",
      source: "Google",
      avatar: "/opinion4.webp",
    },
  ],
};

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    alt: "Mesa servida con vino y platillos.",
  },
  {
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80",
    alt: "Plato principal con salsa y hierbas frescas.",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Mesa de restaurante con copas y platos listos.",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");
  const [currentReview, setCurrentReview] = useState(0);
  const heroTopRef = useRef<HTMLDivElement | null>(null);
  const reviewTimerRef = useRef<NodeJS.Timeout | null>(null);
  const cartaRowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = heroTopRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const reviewList = reviews[lang];

  useEffect(() => {
    const startTimer = () => {
      if (reviewTimerRef.current) clearInterval(reviewTimerRef.current);
      reviewTimerRef.current = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviewList.length);
      }, 6500);
    };
    setCurrentReview(0);
    startTimer();
    return () => {
      if (reviewTimerRef.current) clearInterval(reviewTimerRef.current);
    };
  }, [lang, reviewList.length]);

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviewList.length) % reviewList.length);
    if (reviewTimerRef.current) {
      clearInterval(reviewTimerRef.current);
      reviewTimerRef.current = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviewList.length);
      }, 6500);
    }
  };

  const scrollCarta = (direction: number) => {
    const container = cartaRowRef.current;
    if (!container) return;
    const delta = container.clientWidth * 0.8;
    container.scrollBy({ left: delta * direction, behavior: "smooth" });
  };

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviewList.length);
    if (reviewTimerRef.current) {
      clearInterval(reviewTimerRef.current);
      reviewTimerRef.current = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviewList.length);
      }, 6500);
    }
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  const headerClass = `fixed inset-x-0 top-0 z-40 backdrop-blur-sm transition-colors duration-300 ${
    scrolled
      ? "border-b border-[var(--footer-text)]/25 bg-[var(--cream)]/95"
      : "border-b border-transparent bg-gradient-to-b from-black/10 via-black/5 to-transparent"
  }`;

  const navTextColor = scrolled ? "text-[var(--footer-text)]" : "text-[var(--cream-soft)]";
  const navDivider = scrolled ? "divide-[var(--footer-text)]/30" : "divide-[var(--cream-soft)]/30";
  const logoClass = scrolled
    ? "object-contain"
    : "object-contain brightness-0 invert drop-shadow";

  const text = copy[lang];
  const langFlag = lang === "es" ? "🇪🇸" : "🇺🇸";
  return (
    <div className="relative min-h-screen bg-[var(--cream)] text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0" />

      <header className={headerClass} style={{ animation: "fadeDown 0.9s ease forwards" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 md:px-5 md:py-4 lg:px-7">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-40 shrink-0 md:h-[72px] md:w-[208px]">
              <Image src="/mivocho2.webp" alt="Mi Vocho" fill className={logoClass} priority sizes="200px" />
            </div>
          </div>
          <nav className={`hidden items-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${navTextColor} md:ml-8 md:flex ml-4`}>
            <div className={`flex items-center divide-x ${navDivider}`}>
              <a className="px-4 py-1 transition hover:text-[var(--gold)] first:pl-0" href="#hero">{text.nav.home}</a>
              <a className="px-4 py-1 transition hover:text-[var(--gold)]" href="#nosotros">{text.nav.about}</a>
              <a className="px-4 py-1 transition hover:text-[var(--gold)]" href="#carta">{text.nav.menu}</a>
              <a className="px-4 py-1 transition hover:text-[var(--gold)]" href="#testimonios">{text.nav.testimonials}</a>
              <a className="px-4 py-1 transition hover:text-[var(--gold)]" href="#contacto">{text.nav.contact}</a>
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-4 py-1 transition hover:text-[var(--gold)]"
                  type="button"
                  onClick={() => setLangOpen((v) => !v)}
                >
                  <span className="text-lg leading-none">{langFlag}</span>
                  <span>{lang.toUpperCase()}</span>
                  <svg
                    className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : "rotate-0"}`}
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute right-0 mt-2 w-32 overflow-hidden rounded-lg border border-[var(--footer-text)]/20 bg-[var(--cream)] shadow-lg">
                    <button
                      type="button"
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-[var(--text)] transition hover:bg-[var(--wine)]/10"
                      onClick={() => {
                        setLang("en");
                        setLangOpen(false);
                      }}
                    >
                      <span className="text-lg leading-none">🇺🇸</span>
                      <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">EN</span>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-[var(--text)] transition hover:bg-[var(--wine)]/10"
                      onClick={() => {
                        setLang("es");
                        setLangOpen(false);
                      }}
                    >
                      <span className="text-lg leading-none">🇪🇸</span>
                      <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">ES</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>
          <div className="relative md:hidden ml-3">
            <button
              className={`flex items-center gap-2 rounded-md border border-[var(--footer-text)]/25 px-3 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition ${navTextColor}`}
              type="button"
              onClick={() => setLangOpen((v) => !v)}
            >
              <span className="text-lg leading-none">{langFlag}</span>
              <span>{lang.toUpperCase()}</span>
              <svg
                className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : "rotate-0"}`}
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 overflow-hidden rounded-lg border border-[var(--footer-text)]/20 bg-[var(--cream)] shadow-lg">
                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-3 py-2 text-left text-[var(--text)] transition hover:bg-[var(--wine)]/10"
                  onClick={() => setLangOpen(false)}
                >
                  <span className="text-lg leading-none">🇺🇸</span>
                  <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">EN</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <section id="hero" className="relative h-[102vh] min-h-[940px] w-full overflow-hidden bg-[var(--cream)] pb-12 md:h-[110vh] md:min-h-[1100px] md:pb-16">
        <div ref={heroTopRef} className="absolute top-[25%] h-1 w-px" aria-hidden />
        <Image
          src="/fondo.webp"
          alt="Plato de ceviche y acompañamientos."
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[var(--cream)]/25 to-[var(--cream)]" />

        <div className="relative z-10 h-full">
          {/* Hero móvil: logo, línea tricolor debajo y texto debajo de la línea */}
          <div className="flex h-full flex-col items-center justify-center gap-5 px-6 pt-10 text-white md:hidden translate-y-[-4vh]">
            <div className="relative h-44 w-44 mt-4" style={{ animation: "fadeUp 1s ease forwards" }}>
              <Image
                src="/logito.webp"
                alt="Mi Vocho"
                fill
                sizes="220px"
                className="object-contain brightness-0 invert drop-shadow-[0_0_14px_rgba(255,255,255,0.9)] translate-y-8"
                priority
              />
            </div>
            <div
              className="hero-line h-[6px] w-[20rem] max-w-[90vw] rounded-full ring-1 ring-white/30 shadow-[0_6px_18px_rgba(0,0,0,0.28)]"
              style={{
                background:
                  "linear-gradient(90deg, #c41230 0%, #c41230 33.33%, #ffffff 33.33%, #ffffff 66.66%, #c41230 66.66%, #c41230 100%)",
                maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.9) 24%, rgba(0,0,0,0.9) 76%, rgba(0,0,0,0.6) 88%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.9) 24%, rgba(0,0,0,0.9) 76%, rgba(0,0,0,0.6) 88%, transparent 100%)",
              }}
              aria-hidden
            />
            <p className="max-w-sm text-center font-[var(--font-body)] text-base text-white/90">
              {text.hero.tagline}
            </p>
          </div>

          {/* Hero desktop/laptop (sin cambios) */}
          <div className="hidden h-full items-start justify-center px-6 pt-12 md:flex md:px-12 md:pt-16 lg:px-16 lg:pt-20">
            <div className="mt-30 flex flex-col items-center md:mt-34 lg:mt-38" style={{ animation: "fadeUp 1s ease forwards" }}>
              <div className="relative h-72 w-72 md:h-96 md:w-96 lg:h-[26rem] lg:w-[26rem]">
                <Image
                  src="/logito.webp"
                  alt="Mi Vocho"
                  fill
                  sizes="(max-width: 768px) 60vw, 320px"
                  className="object-contain brightness-0 invert drop-shadow-[0_0_18px_rgba(255,255,255,0.8)]"
                  priority
                />
              </div>
              <div
                className="hero-line -mt-35 h-[6px] w-[28rem] rounded-full ring-1 ring-white/30 shadow-[0_6px_18px_rgba(0,0,0,0.28)] md:h-[7px] md:w-[28rem]"
                style={{
                  background:
                    "linear-gradient(90deg, #c41230 0%, #c41230 33.33%, #ffffff 33.33%, #ffffff 66.66%, #c41230 66.66%, #c41230 100%)",
                  maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.9) 24%, rgba(0,0,0,0.9) 76%, rgba(0,0,0,0.6) 88%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.9) 24%, rgba(0,0,0,0.9) 76%, rgba(0,0,0,0.6) 88%, transparent 100%)",
                }}
                aria-hidden
              />
              <p className="mt-2 text-center font-[var(--font-body)] text-base text-white/90 md:text-lg">
                {text.hero.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="relative flex flex-col gap-12 pb-24 pt-14 bg-[var(--cream)]">
        <div className="pointer-events-none absolute inset-x-0 -top-16 h-24 bg-gradient-to-b from-transparent to-[var(--cream)]" />

        <section id="nosotros" className="bg-[var(--cream)] px-4 py-16 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center space-y-6">
            <div className="space-y-4 font-[var(--font-body)] text-[var(--text)]/85 leading-relaxed md:text-lg">
              {text.about.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
              alt="Equipo de cocina trabajando en Mi Vocho"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
        </section>

        <section id="carta" className="relative overflow-hidden bg-white px-3 py-12 md:px-5 lg:px-7">
          <div className="mx-auto max-w-6xl text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--wine)]">{text.cartaLabel}</p>
            <h2
              className="font-[var(--font-cinzel)] text-4xl md:text-5xl font-medium tracking-[0.05em] text-[var(--wine-strong)]"
              style={{ fontFamily: '"Cinzel", var(--font-cinzel), serif' }}
            >
              {text.cartaTitle}
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-12 rounded-full bg-[#c41230]" />
              <span className="h-[2px] w-10 rounded-full bg-white" />
              <span className="h-[2px] w-12 rounded-full bg-[#c41230]" />
            </div>
          </div>

          <div
            className="relative mt-14 w-screen max-w-none"
            style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
          >
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--cream)] via-[var(--cream)]/70 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--cream)] via-[var(--cream)]/70 to-transparent pointer-events-none" />

            <div className="relative z-10 mb-4 flex justify-end gap-3 pr-6">
              <button
                type="button"
                aria-label="Anterior carta"
                onClick={() => scrollCarta(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--wine-strong)] text-[var(--cream)] shadow-md transition hover:scale-105 hover:bg-[var(--wine)]"
              >
                ◀
              </button>
              <button
                type="button"
                aria-label="Siguiente carta"
                onClick={() => scrollCarta(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--wine-strong)] text-[var(--cream)] shadow-md transition hover:scale-105 hover:bg-[var(--wine)]"
              >
                ▶
              </button>
            </div>

            <div
              ref={cartaRowRef}
              className="relative flex w-full gap-4 overflow-hidden px-1"
            >
              {cartaSlides.map((item) => (
                <div
                  key={item.src}
                  className="group flex min-w-[230px] max-w-[320px] flex-[0_0_70vw] sm:flex-[0_0_48%] lg:flex-[0_0_32%] flex-col overflow-hidden bg-[var(--footer-bg)]/90 shadow-xl"
                >
                  <a
                    href="https://www.instagram.com/vochocevicheria/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Ver en Instagram"
                    className="relative block aspect-[4/3] w-full"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="object-cover transition duration-300 group-hover:brightness-[0.55]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/10 to-transparent transition duration-300 group-hover:bg-[var(--wine-strong)]/45" />
                    <div className="absolute inset-0 grid place-items-center opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="rounded-full bg-black/45 p-3 text-white shadow-lg shadow-black/30">
                        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                          <rect x="4" y="4" width="16" height="16" rx="4" ry="4" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="16.4" cy="7.6" r="0.9" fill="currentColor" stroke="none" />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <div
                    className="bg-[var(--wine-strong)] py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--cream-soft)]"
                    style={{ fontFamily: '"Cinzel", var(--font-cinzel), serif' }}
                  >
                    {text.cartaSlideTitles[cartaSlides.indexOf(item)] ?? item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="space-y-10 bg-[var(--cream)] px-3 py-16 md:px-5 lg:px-7">
          <div className="mx-auto max-w-6xl text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--wine)]">{text.testimonialsLabel}</p>
            <h2
              className="font-[var(--font-cinzel)] text-4xl md:text-5xl font-medium tracking-[0.05em] text-[var(--wine-strong)]"
              style={{ fontFamily: '"Cinzel", var(--font-cinzel), serif' }}
            >
              {text.testimonialsTitle}
            </h2>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--wine-strong)]">{text.excellent}</span>
              <div className="flex items-center gap-1 text-[var(--gold)]">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l2.89 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.11-1.01L12 2z" />
                  </svg>
                ))}
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                  <defs>
                    <linearGradient id="half-gold" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="50%" stopColor="currentColor" />
                      <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2l2.89 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.11-1.01L12 2z" fill="url(#half-gold)" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <p className="text-xs text-[var(--text)]/70">{text.basedOn}</p>
            </div>
          </div>

          <div className="relative mx-auto max-w-4xl rounded-2xl bg-transparent px-6 py-10">
            <div
              key={currentReview}
              className="flex flex-col items-center text-center gap-4 animate-slide-in-left"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-[var(--wine)]/10">
                <Image
                  src={reviewList[currentReview].avatar}
                  alt={reviewList[currentReview].name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold text-[var(--wine-strong)] tracking-[0.08em] uppercase">{reviewList[currentReview].name}</p>
              <p className="text-base text-[var(--text)]/85 leading-relaxed max-w-2xl">“{reviewList[currentReview].quote}”</p>
              <div className="flex items-center gap-1 text-[var(--gold)]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l2.89 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.11-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>

            <button
              type="button"
              aria-label="Anterior testimonio"
              onClick={handlePrevReview}
              className="absolute left-4 top-[46%] -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-[var(--wine-strong)] text-[var(--cream)] shadow-sm transition hover:bg-[var(--wine)]"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Siguiente testimonio"
              onClick={handleNextReview}
              className="absolute right-4 top-[46%] -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-[var(--wine-strong)] text-[var(--cream)] shadow-sm transition hover:bg-[var(--wine)]"
            >
              ›
            </button>
          </div>
        </section>

        <div className="mx-auto max-w-6xl border-t border-[var(--footer-text)]/25" />

        <section id="contacto" className="space-y-10 bg-[var(--cream)] px-3 py-0 md:px-5 lg:px-7">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[3fr_2fr] md:items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2
                  className="font-[var(--font-cinzel)] text-4xl md:text-5xl font-medium tracking-[0.05em] text-[var(--wine-strong)]"
                  style={{ fontFamily: '"Cinzel", var(--font-cinzel), serif' }}
                >
                  {text.contactTitle}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-12 rounded-full bg-[#c41230]" />
                  <span className="h-[2px] w-10 rounded-full bg-white" />
                  <span className="h-[2px] w-12 rounded-full bg-[#c41230]" />
                </div>
                <p className="font-[var(--font-body)] text-[var(--text)]/85 leading-relaxed">
                  {text.contactIntro}
                </p>
              </div>

              <div className="space-y-3 text-[var(--text)] font-[var(--font-body)]">
                {[
                  {
                    label: text.contactLabels.address,
                    lines: ["Calle Armando Blondet 252, San Isidro", "Calle Mariano de los Santos 157, San Isidro"],
                    icon: (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: text.contactLabels.phone,
                    lines: ["997 564 652"],
                    icon: (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                  },
                  {
                    label: text.contactLabels.email,
                    lines: ["vochocevicheria@gmail.com"],
                    icon: (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0L9 7m7 5-7 5" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 rounded-2xl px-2 py-2">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[var(--cream-soft)] text-[var(--wine-strong)]">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--wine-strong)]/80">{item.label}</p>
                      {item.lines.map((line) => (
                        <p key={line} className="font-semibold text-[var(--wine-strong)] leading-snug">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--wine)]/25 bg-transparent p-6">
              <h3
                className="font-[var(--font-cinzel)] text-xl md:text-2xl font-medium tracking-[0.05em] text-[var(--wine-strong)]"
                style={{ fontFamily: '"Cinzel", var(--font-cinzel), serif' }}
              >
                {text.scheduleTitle}
              </h3>
              <div className="mt-4 space-y-2 text-sm text-[var(--text)]/85">
                <p>{text.scheduleLines.daily}</p>
                <p><span className="font-semibold text-[var(--wine-strong)]">{lang === "es" ? "Lunes a sábado" : "Monday to Saturday"}</span> {lang === "es" ? "de 7:00 am a 4:00 pm" : "from 7:00 am to 4:00 pm"}</p>
                <p><span className="font-semibold text-[var(--wine-strong)]">{lang === "es" ? "Domingos" : "Sundays"}</span> {lang === "es" ? "sin atención ni reservas." : "closed (no reservations)."}</p>
                <p className="text-xs text-[var(--text)]/70 pt-2">{text.scheduleLines.reduced}</p>
                <p className="text-xs text-[var(--text)]/70 italic">{text.scheduleLines.disclaimer}</p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--wine)]/15 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.880679152602!2d-77.0240!3d-12.0939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c87c6f9615e3%3A0x123456789abcdef!2sCalle%20Armando%20Blondet%20252%2C%20San%20Isidro%2C%20Peru!5e0!3m2!1ses-419!2spe!4v1700000000000"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Mi Vocho"
              />
            </div>
          </div>
        </section>

      </main>

      <a
        href="https://wa.me/51997564652"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-6 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-black/30"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-7 w-7" aria-hidden>
          <path d="M16.004 6.667c-4.395 0-7.965 3.57-7.965 7.965 0 1.402.366 2.771 1.061 3.978l-1.119 4.082 4.183-1.102a7.9 7.9 0 0 0 3.84 1.013h.001c4.394 0 7.965-3.57 7.965-7.965 0-2.126-.827-4.124-2.33-5.627a7.93 7.93 0 0 0-5.636-2.344zm0 14.596a6.6 6.6 0 0 1-3.367-.913l-.241-.143-2.483.654.663-2.422-.158-.248a6.627 6.627 0 0 1-1.022-3.572 6.64 6.64 0 0 1 6.636-6.635 6.61 6.61 0 0 1 4.706 1.948 6.61 6.61 0 0 1 1.93 4.714c0 3.661-2.977 6.617-6.664 6.617zm3.873-4.928c-.212-.106-1.254-.618-1.45-.688-.194-.07-.337-.106-.48.106-.141.212-.55.688-.674.83-.124.141-.247.159-.459.053-.212-.106-.895-.329-1.705-1.05-.63-.56-1.055-1.25-1.179-1.461-.124-.212-.013-.326.093-.432.095-.095.212-.247.318-.371.106-.124.141-.212.212-.353.07-.141.035-.265-.018-.371-.053-.106-.48-1.158-.658-1.589-.174-.419-.352-.361-.48-.367-.124-.006-.265-.007-.406-.007-.141 0-.371.053-.565.265-.194.212-.741.724-.741 1.768 0 1.044.759 2.054.865 2.194.106.141 1.492 2.28 3.619 3.196.506.219.899.35 1.207.448.506.161.966.138 1.331.084.406-.061 1.254-.513 1.431-1.008.177-.494.177-.917.124-.978-.053-.061-.194-.106-.406-.212z" />
        </svg>
      </a>

      <footer className="relative border-t border-[var(--cream-soft)]/18 bg-[#0b0b0b] text-[var(--cream-soft)]">
        <div className="absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-6xl px-6 py-12 flex flex-col items-center gap-10">
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.18em] text-[var(--cream-soft)]/85">
            {[
              { label: text.nav.home, href: "#hero" },
              { label: text.nav.about, href: "#nosotros" },
              { label: text.nav.menu, href: "#carta" },
              { label: text.nav.testimonials, href: "#testimonios" },
              { label: text.nav.contact, href: "#contacto" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[var(--gold)]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-[var(--cream-soft)]">
            <a
              href="https://www.facebook.com/profile.php?id=100041518822615"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition hover:text-[var(--gold)]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.07h3.129V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.637h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/vochocevicheria/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition hover:text-[var(--gold)]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@vochocevicheria"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="transition hover:text-[var(--gold)]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5 3h3.1c.2 2.2 1.7 3.8 3.9 4v3.1c-1.2-.02-2.3-.4-3.3-1v4.8c0 3-2.3 5.4-5.3 5.6-3.1.2-5.7-2.2-5.9-5.3-.2-3.1 2.2-5.7 5.3-5.9.3 0 .6 0 .9.02v3.2c-.2 0-.4-.02-.6 0-1.2.1-2.1 1.1-2 2.3.1 1.2 1.1 2.1 2.3 2 1.1-.1 2-1 2-2.2V3z" />
              </svg>
            </a>
          </div>

          <div className="w-full border-t border-[var(--cream-soft)]/25" />
          <p className="text-xs text-[var(--cream-soft)]/75 text-center w-full">
            © Mi Vocho 2026 | Hecho por AAL1X
          </p>
        </div>
      </footer>
    </div>
  );
}
