"use client";

import Header from "../components/Header";
import { useState, useEffect, useRef, useMemo } from "react";
import SVG from "react-inlinesvg";

export default function Homeslide() {
  const [slide, setSlide] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function handleClick(number: number) {
    setSlide(number);
  }

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setSlide((prevSlide) => (prevSlide % 4) + 1);
    }, 7000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slide]);

  const [bgColour, textColour] = useMemo(() => {
    switch (slide) {
      default:
      case 1:
        return ["#BDE9C9", "#027223"];
      case 2:
        return ["#C4D9F2", "#3E464F"];
      case 3:
        return ["#3E464F", "#BDE9C9"];
      case 4:
        return ["#E8E3F2", "#3E464F"];
    }
  }, [slide]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div
        className={
          "absolute left-0 top-0 -z-10 h-screen w-screen transition-colors duration-500"
        }
        style={{ backgroundColor: bgColour }}
      ></div>
      <Header textColour={textColour} />

      <div
        id="slide1"
        className={`absolute left-0 top-0 flex h-screen w-screen items-center justify-between gap-80 pl-36 duration-500 ease-in-out ${slide === 1 ? "z-10 translate-x-0 opacity-100" : "z-0 -translate-x-[118%] opacity-0"}`}
      >
        <div className="items flex w-2/5 flex-col gap-5">
          <h1 className="text-wrap text-6xl text-green">
            PROFESSIONAL <br />
            <b>VOCAL ARRANGEMENTS</b>
          </h1>
          <p className="text-green">
            Charts in all voicings, with a wide variety of genres! If you
            don&apos;t see a song there that you think would be a banger, hit me
            up and I can arrange it for you!
          </p>
          <a href="/arrangements" className="round-button bg-green text-white">
            EXPLORE
          </a>
        </div>
        <SVG
          src="stave.svg"
          className="h-full w-full scale-90 overflow-visible fill-green"
          viewBox="0 -200 1000 1000"
        />
      </div>

      <div
        id="slide2"
        className={`absolute left-0 top-0 flex h-screen w-screen items-center justify-end gap-20 pr-36 duration-500 ${slide === 1 ? "z-0 translate-x-[118%] opacity-0" : ""} ${slide === 2 ? "z-10 opacity-100" : ""} ${slide === 3 ? "z-0 -translate-x-[118%] opacity-0" : ""} ${slide === 4 ? "z-0 -translate-x-[118%] opacity-0" : ""}`}
      >
        <SVG
          src="stave.svg"
          className="h-full w-full scale-90 overflow-visible fill-dark"
          viewBox="1500 -200 1000 1000"
        />
        <div className="flex w-3/5 flex-col items-end gap-5">
          <h1 className="text-wrap text-right text-6xl text-dark">
            RECORDED <br />
            <b>LEARNING TRACKS</b>
          </h1>
          <p className="text-right text-dark">
            Recorded in a variety of voicings, feel free to browse through my
            library of existing learning tracks! If you need a new set of
            learning tracks or revoicing of an existing set, don&apos;t hesitate
            to get in touch.
          </p>
          <a
            href="/learning-tracks"
            className="round-button bg-dark text-white"
          >
            EXPLORE
          </a>
        </div>
      </div>

      <div
        id="slide3"
        className={`absolute left-0 top-0 flex h-screen w-screen items-center justify-between gap-20 pl-36 duration-500 ease-in-out ${slide === 3 ? "z-10 opacity-100" : "z-0 opacity-0"}`}
      >
        <div className="flex w-3/5 flex-col gap-5">
          <h1 className="text-wrap text-6xl text-greeny">
            PRIVATE <br />
            <b>VOCAL LESSONS</b>
          </h1>
          <p className="text-greeny">
            I run a private home vocal studio, and am also able to teach online.
            If you&apos;re keen to kickstart your vocal journey, I would love to
            do all I can to help you along the way!
          </p>
          <a href="#voice-lessons" className="round-button bg-greeny text-dark">
            LEARN MORE
          </a>
        </div>
        <SVG
          src="mic.svg"
          className="h-full w-full overflow-y-hidden fill-greeny"
          viewBox="0 -50 200 300"
        />
      </div>

      <div
        id="slide4"
        className={`absolute left-0 top-0 flex h-screen w-screen items-center justify-between gap-20 pr-36 duration-500 ${slide === 4 ? "z-10 opacity-100" : "z-0 opacity-0"}`}
      >
        <SVG src="people.svg" className="-translate-x-[10%] fill-dark" />
        <div className="flex w-2/5 flex-col items-end gap-5">
          <h1 className="text-wrap text-right text-6xl text-dark">
            ENSEMBLE <br />
            <b>COACHING</b>
          </h1>
          <p className="text-right text-dark">
            I&apos;m an experienced performer, director and coach with 10 years
            of experience learning all I can about creating meaningful music and
            impactful performances. I would love to share what I can to help
            your group reach its full potential, so get in touch to book your
            slot today!
          </p>
          <a href="#ensemble" className="round-button bg-dark text-white">
            LEARN MORE
          </a>
        </div>
      </div>

      <div
        className={`absolute bottom-0 z-20 h-28 w-screen duration-500 ${slide === 3 ? "opacity-100" : "opacity-0"} bg-gradient-to-b from-transparent to-dark`}
      ></div>

      <div className="absolute bottom-20 left-36 z-30 flex h-3 gap-2">
        <button
          className={`${slide === 1 ? "active" : ""} slide-button`}
          onClick={() => handleClick(1)}
        >
          <div
            className={`${slide === 1 ? "active" : "inactive"} progress-bar`}
            style={{ background: textColour }}
          ></div>
        </button>
        <button
          className={`${slide === 2 ? "active" : ""} slide-button`}
          onClick={() => handleClick(2)}
        >
          <div
            className={`${slide === 2 ? "active" : "inactive"} progress-bar`}
            style={{ background: textColour }}
          ></div>
        </button>
        <button
          className={`${slide === 3 ? "active" : ""} slide-button`}
          onClick={() => handleClick(3)}
        >
          <div
            className={`${slide === 3 ? "active" : "inactive"} progress-bar`}
            style={{ background: textColour }}
          ></div>
        </button>
        <button
          className={`${slide === 4 ? "active" : ""} slide-button`}
          onClick={() => handleClick(4)}
        >
          <div
            className={`${slide === 4 ? "active" : "inactive"} progress-bar`}
            style={{ background: textColour }}
          ></div>
        </button>
      </div>
    </div>
  );
}
