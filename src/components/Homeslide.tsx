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
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div
        className={`absolute top-0 left-0 w-screen h-screen -z-10 transition-colors duration-500`}
        style={{ backgroundColor: bgColour }}
      ></div>
      <Header colour={textColour} />

      <div
        id="slide1"
        className={`absolute w-screen h-screen flex items-center justify-between pl-36 top-0 left-0 ease-in-out duration-500
                ${slide === 1 ? "opacity-100 translate-x-0 z-10" : ""}
                ${slide === 2 ? "opacity-100 -translate-x-[110%] z-0" : ""}
                ${slide === 3 ? "opacity-0 -translate-x-[110%] z-0" : ""}
                ${slide === 4 ? "opacity-0 -translate-x-[110%] z-0" : ""}`}
      >
        <div className="w-2/5 flex flex-col gap-5">
          <p className="text-6xl duration-500" style={{ color: textColour }}>
            BRINGING <br />
            <b>MELODIES</b> <br />
            TO <b>LIFE</b>
          </p>
          <p className="duration-500" style={{ color: textColour }}>
            Where music comes alive. Explore a world of arrangements that
            breathe new life into every note and phrase.
          </p>
          <a
            href="/arrangements"
            className="round-button duration-500"
            style={{ backgroundColor: textColour, color: bgColour }}
          >
            EXPLORE ARRANGEMENTS
          </a>
        </div>
        <SVG
          src="stave.svg"
          className="ml-72 duration-500 overflow-visible"
          style={{ fill: textColour }}
        />
      </div>

      <div
        id="slide2"
        className={`absolute w-screen h-screen flex items-center justify-end pr-36 top-0 left-0 duration-500
                ${slide === 2 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
      >
        {/* <SVG
          src="stave.svg"
          className="duration-500 translate-y-7 overflow-visible -translate-x-[50%]"
          style={{ fill: textColour }}
        /> */}
        <div className="w-3/5 flex flex-col gap-5 items-end">
          <p
            className="text-6xl text-right duration-500"
            style={{ color: textColour }}
          >
            GIVING <b>VOICE</b> <br />
            TO YOUR <br />
            <b>MUSICAL VISION</b>
          </p>
          <p className="duration-500 text-right" style={{ color: textColour }}>
            Giving voice to your musical vision starts with focused practice.{" "}
            <br />
            Get your custom learning tracks now.
          </p>
          <a
            href="/learning-tracks"
            className="round-button duration-500"
            style={{ backgroundColor: textColour, color: bgColour }}
          >
            VIEW LEARNING TRACKS
          </a>
        </div>
      </div>

      <div
        id="slide3"
        className={`absolute w-screen h-screen flex items-center justify-between pl-36 top-0 left-0 ease-in-out duration-500
                ${slide === 3 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
      >
        <div className="w-4/5 flex flex-col gap-5">
          <p className="text-6xl duration-500" style={{ color: textColour }}>
            <b>DEVELOP</b> YOUR <br />
            VOCAL <b>POTENTIAL</b>
          </p>
          <p className="duration-500" style={{ color: textColour }}>
            Develop your voice, build confidence, and achieve your singing goals
            and dreams.
          </p>
          <a
            href="#voice-lessons"
            className="round-button duration-500"
            style={{ backgroundColor: textColour, color: bgColour }}
          >
            LEARN MORE
          </a>
        </div>
        <SVG
          src="mic.svg"
          className="ml-20 duration-500 scale-[400%] -translate-x-80 translate-y-[120%]"
          style={{ fill: textColour }}
        />
      </div>

      <div
        id="slide4"
        className={`absolute w-screen h-screen flex items-center justify-between pr-36 top-0 left-0 duration-500 gap-20
                ${slide === 4 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
      >
        <SVG
          src="people.svg"
          className="duration-500 -translate-x-[10%]"
          style={{ fill: textColour }}
        />
        <div className="w-2/5 flex flex-col gap-5 items-end">
          <p
            className="text-6xl text-right duration-500"
            style={{ color: textColour }}
          >
            <b>CREATING</b> A <br />
            <b>UNIFIED</b> SOUND
          </p>
          <p className="duration-500 text-right" style={{ color: textColour }}>
            Creating a unified sound is an artistic journey. Help your ensemble
            explore its musicality and artistry, achieving a cohesive and
            expressive performance.
          </p>
          <a
            href="/arrangements"
            className="round-button duration-500"
            style={{ backgroundColor: textColour, color: bgColour }}
          >
            LEARN MORE
          </a>
        </div>
      </div>

      <div
        className={`absolute w-screen bottom-0 h-28 z-20 duration-500
            ${slide === 3 ? "opacity-100" : "opacity-0"} bg-gradient-to-b from-transparent to-dark`}
      ></div>

      <div className="absolute bottom-20 left-36 h-3 flex gap-2 z-30">
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
