import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import "./globals.css";
import Loading from "@/components/Loading";
import FadeIn from "@/components/FadeIn";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Will Lynch Music",
  description:
    "Freelance musician from Christchurch, New Zealand. Specialising in arranging, recording, vocal coaching, ensemble coaching, and performing!",
};

export const revalidate = 86400; // revalidate at most every day

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.className} scroll-smooth`}
      style={{ colorScheme: "light" }}
    >
      <body className={`${quicksand.variable} overflow-x-hidden antialiased`}>
        <Suspense fallback={<Loading />}>
          <FadeIn />
          {children}
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
