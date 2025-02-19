import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Will Lynch Music",
  description: "Your friendly neighbourhood freelance musician!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={quicksand.className}
      style={{ colorScheme: "light" }}
    >
      <body
        className={`${quicksand.variable} antialiased scroll-smooth overflow-x-hidden`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
