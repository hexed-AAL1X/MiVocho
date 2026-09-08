import type { Metadata, Viewport } from "next";
import { Montserrat, Cinzel } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://mi-vocho.vercel.app";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#4a413a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mi Vocho | Restaurante & Cevichería en San Isidro",
    template: "%s | Mi Vocho",
  },
  description:
    "Restaurante peruano de pescados y mariscos en San Isidro. Conoce la carta, lee opiniones y reserva fácil por WhatsApp.",
  keywords: [
    "Mi Vocho",
    "cevichería",
    "restaurante peruano",
    "San Isidro",
    "pescados y mariscos",
    "ceviche",
    "reservas",
  ],
  authors: [{ name: "Mi Vocho" }],
  creator: "Mi Vocho",
  publisher: "Mi Vocho",
  alternates: {
    canonical: "/",
    languages: {
      "es-PE": "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "Mi Vocho",
    title: "Mi Vocho | Restaurante & Cevichería en San Isidro",
    description:
      "Sabores de mar con acento peruano. Carta, reseñas, ubicación y reservas por WhatsApp.",
    images: [
      {
        url: "/fondo.webp",
        width: 1536,
        height: 1024,
        alt: "Platos de cocina marina en Mi Vocho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Vocho | Restaurante & Cevichería en San Isidro",
    description:
      "Sabores de mar con acento peruano. Carta, reseñas, ubicación y reservas por WhatsApp.",
    images: ["/fondo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "food",
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Mi Vocho",
  alternateName: "Mi Vocho Restaurante & Cevichería",
  description:
    "Cocina marina peruana en San Isidro: pescados y mariscos frescos, carta clásica y reservas por WhatsApp.",
  url: SITE_URL,
  image: [`${SITE_URL}/fondo.webp`, `${SITE_URL}/logito.webp`],
  telephone: "+51997564652",
  email: "vochocevicheria@gmail.com",
  servesCuisine: ["Peruvian", "Seafood"],
  priceRange: "$$",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Calle Armando Blondet 252",
      addressLocality: "San Isidro",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Calle Mariano de los Santos 157",
      addressLocality: "San Isidro",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: -12.0939,
    longitude: -77.024,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "46",
    bestRating: "5",
  },
  sameAs: [
    "https://www.instagram.com/vochocevicheria/",
    "https://www.facebook.com/profile.php?id=100041518822615",
    "https://www.tiktok.com/@vochocevicheria",
  ],
  acceptsReservations: "True",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${cinzel.variable} antialiased bg-[var(--cream)] text-[var(--text)]`}
      >
        {children}
      </body>
    </html>
  );
}
