import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "GDC ELEX | DAVV Indore",
  description: "Game Development Cell, School of Electronics, DAVV Indore.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body bg-background text-gray-100 antialiased selection:bg-primary/20 selection:text-primary flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-1 pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}