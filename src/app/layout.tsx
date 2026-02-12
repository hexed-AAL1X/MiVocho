import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Great_Vibes, Cinzel } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairScript = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mi Vocho",
  description: "Cocina tradicional con sazón de casa y reservas fáciles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} ${playfairScript.variable} ${cinzel.variable} antialiased bg-[var(--cream)] text-[var(--text)]`}
      >
        {children}
      </body>
    </html>
  );
}
