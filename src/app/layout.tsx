import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BackgroundEffects from "../components/gaming-hub/BackgroundEffects";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GameHub",
  description: "Modern Gaming Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white overflow-x-hidden min-h-screen">

        {/* Background */}
        <BackgroundEffects />

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/919876543210?text=Hello%20I%20want%20more%20details"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-[999]"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </a>

      </body>
    </html>
  );
}