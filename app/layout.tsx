import type { Metadata } from "next";
import { Geist, Geist_Mono, Varela_Round } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shinobu",
  description: "The official website for shinobu discord bot.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${varelaRound.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
