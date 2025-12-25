import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProvider";
import IntroShutter from "@/components/ui/intro-shutter";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Byte - Order Food Seamlessly in Your College",
  description:
    "Byte lets you order and pay at the canteen with just a few taps. Fast, simple, and secure food ordering for college students.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <IntroShutter />

        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
