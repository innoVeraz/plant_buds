import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Manjari } from "next/font/google";

import { Header } from "@/components/Header";

const font = Manjari({ weight: ["100", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plant Buds",
  description: "The replanting service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="se">
      <body className={`${font.className} text-dark-forest`}>
        <Header />
        <main className="md:pt-[9.6em] pt-[9.6em] max-w-5xl m-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
