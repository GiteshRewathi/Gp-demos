import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soil & Soul — Plantable Clay Ganesha Idols",
  description:
    "Handcrafted, plantable clay Ganesha idols that dissolve in water and grow into plants. Celebrate festivals responsibly with Soil & Soul.",
  keywords: [
    "plantable Ganesha",
    "eco-friendly idol",
    "clay Ganesha",
    "Ganesh Chaturthi",
    "sustainable festival",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
