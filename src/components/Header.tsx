"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import SVG from "react-inlinesvg";

interface HeaderProps {
  textColour?: string;
}

export default function Header({ textColour = "#027223" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolled(window.pageYOffset > 5)
      );
    }
  }, []);

  const colour = scrolled ? "#027223" : textColour;
  const bgColour = scrolled ? "#FFFFFF" : "transparent";

  return (
    <header
      className="fixed left-0 top-0 z-40 flex h-20 w-screen items-center justify-between border-b px-36 transition-all duration-500"
      style={{ color: colour, borderColor: colour, backgroundColor: bgColour }}
    >
      <Link href="/">
        <SVG
          src="logo.svg"
          style={{ fill: colour }}
          className="-ml-3 scale-75 duration-500"
        />
      </Link>
      <nav className="flex gap-10 font-medium">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#browse">BROWSE</a>
        <a href="#expertise">EXPERTISE</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}
