import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/ui/shared/Footer";
import { NavBar } from "@/ui/shared/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://installation00.dev"),
  title: "Installation 00",
  description: "An unofficial foundry and archive of Halo interfaces.",
};

export default function RootLayout({ children, navbar }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
        <NavBar>{navbar}</NavBar>
      </body>
    </html>
  );
}
