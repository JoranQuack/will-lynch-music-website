"use client";

import { useState, useEffect } from "react";
import SVG from "react-inlinesvg";

interface HeaderProps {
  textColour: string;
}

export default function Header({ textColour }: HeaderProps) {
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
      className={`w-screen h-20 border-b duration-500
            flex items-center justify-between px-36 fixed top-0 left-0 z-40`}
      style={{ color: colour, borderColor: colour, backgroundColor: bgColour }}
    >
      <SVG
        src="logo.svg"
        style={{ fill: colour }}
        className="duration-500 scale-75 -ml-3"
      />
      <nav className="flex gap-10 font-medium">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#browse">
          BROWSE{" "}
          <SVG
            src="down-arrow.svg"
            style={{ stroke: colour }}
            className="duration-500 -mr-2"
          />{" "}
        </a>
        <a href="#expertise">
          EXPERTISE{" "}
          <SVG
            src="down-arrow.svg"
            style={{ stroke: colour }}
            className="duration-500 -mr-2"
          />{" "}
        </a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}
