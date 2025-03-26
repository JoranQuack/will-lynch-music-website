"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SVG from "react-inlinesvg";
import Hamburger from "hamburger-react";
import { useClickAway } from "react-use";

interface HeaderProps {
  textColour?: string;
  bgColour?: string;
}

const routes = [
  {
    title: "HOME",
    href: "/#home",
  },
  {
    title: "ABOUT",
    href: "/#about",
  },
  {
    title: "BROWSE",
    href: "/#browse",
  },
  {
    title: "EXPERTISE",
    href: "/#expertise",
  },
  {
    title: "CONTACT",
    href: "/#contact",
  },
];

interface NavMobileProps {
  colour: string;
  bgColour: string;
}

const NavMobile = ({ colour, bgColour }: NavMobileProps) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <div ref={ref} className="-mr-2 flex justify-end lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-ful fixed inset-x-0 top-20 border-b p-5 duration-500"
            style={{ backgroundColor: bgColour, borderColor: colour }}
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { href, title } = route;

                return (
                  <motion.li
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{
                      ease: "easeOut",
                      duration: 0.4,
                      delay: 0.1 + idx / 20,
                    }}
                    key={route.title}
                    className="rounded-xl p-0.5"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className="bg-hw-black flex w-fit items-center justify-between rounded-full p-3"
                      href={href}
                    >
                      <span className="flex gap-1" style={{ color: colour }}>
                        {title}
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Header({
  textColour = "#027223",
  bgColour = "#FFFFFF",
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check initial scroll position immediately
      setScrolled(window.pageYOffset > 5);

      // Add event listener for future scrolling
      const handleScroll = () => setScrolled(window.pageYOffset > 5);
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const colour = scrolled ? "#027223" : textColour;
  const bgColourScroll = scrolled ? "#FFFFFF" : bgColour;

  return (
    <header
      className="fixed left-0 top-0 z-40 flex h-20 w-screen items-center justify-between border-b px-8 transition-all duration-500 lg:px-36"
      style={{
        color: colour,
        borderColor: colour,
        backgroundColor: bgColourScroll,
      }}
    >
      <Link href="/">
        <SVG
          src="logo.svg"
          style={{ fill: colour }}
          className="-ml-3 scale-75 duration-500"
        />
      </Link>
      <nav className="hidden gap-10 font-medium lg:flex">
        <Link href="/#home">HOME</Link>
        <Link href="/#about">ABOUT</Link>
        <Link href="/#browse">BROWSE</Link>
        <Link href="/#expertise">EXPERTISE</Link>
        <Link href="/#contact">CONTACT</Link>
      </nav>
      <NavMobile colour={colour} bgColour={bgColourScroll} />
    </header>
  );
}
