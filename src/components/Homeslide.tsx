"use client";

import Header from "./Header";
import { useState, useEffect, useRef } from "react";
import SVG from "react-inlinesvg";

export default function Homeslide() {
  const [slide, setSlide] = useState(1);
  const [bgColour, setBgColour] = useState("greeny");
  const [textColour, setTextColour] = useState("green");
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

  useEffect(() => {
    switch (slide) {
      case 1:
        setBgColour("#BDE9C9");
        setTextColour("#027223");
        break;
      case 2:
        setBgColour("#C4D9F2");
        setTextColour("#3E464F");
        break;
      case 3:
        setBgColour("#3E464F");
        setTextColour("#BDE9C9");
        break;
      case 4:
        setBgColour("#E8E3F2");
        setTextColour("#3E464F");
        break;
      default:
        setBgColour("#BDE9C9");
        setTextColour("#027223");
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
          <h1 className="text-6xl text-green">
            BRINGING <br />
            <b>MELODIES</b> <br />
            TO <b>LIFE</b>
          </h1>
          <p className="text-green">
            Where music comes alive. Explore a world of arrangements that
            breathe new life into every note and phrase.
          </p>
          <a href="/arrangements" className="round-button bg-green text-white">
            EXPLORE ARRANGEMENTS
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
          <p className="text-right text-6xl text-dark">
            GIVING <b>VOICE</b> <br />
            TO YOUR <br />
            <b>MUSICAL VISION</b>
          </p>
          <p className="text-right text-dark">
            Giving voice to your musical vision starts with focused practice.{" "}
            <br />
            Get your custom learning tracks now.
          </p>
          <a
            href="/learning-tracks"
            className="round-button bg-dark text-white"
          >
            VIEW LEARNING TRACKS
          </a>
        </div>
      </div>

      <div
        id="slide3"
        className={`absolute left-0 top-0 flex h-screen w-screen items-center justify-between gap-20 pl-36 duration-500 ease-in-out ${slide === 3 ? "z-10 opacity-100" : "z-0 opacity-0"}`}
      >
        <div className="flex w-3/5 flex-col gap-5">
          <p className="text-6xl text-greeny">
            <b>DEVELOP</b> YOUR <br />
            VOCAL <b>POTENTIAL</b>
          </p>
          <p className="text-greeny">
            Develop your voice, build confidence, and achieve your singing goals
            and dreams.
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
          <p className="text-right text-6xl text-dark">
            <b>CREATING</b> A <br />
            <b>UNIFIED</b> SOUND
          </p>
          <p className="text-right text-dark">
            Creating a unified sound is an artistic journey. Help your ensemble
            explore its musicality and artistry, achieving a cohesive and
            expressive performance.
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
