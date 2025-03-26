"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";

interface ArrangementBlockProps {
  title: string;
  src: string;
  arrangedFor: string;
  parts: string;
  purpose: string;
  style: string;
  difficulty: string;
  inspiredBy: string;
  tempo: string;
  voicings: string;
  smp: string;
  smd: string;
}

export default function ArrangementBlock({
  title,
  src,
  arrangedFor,
  parts,
  purpose,
  style,
  difficulty,
  inspiredBy,
  tempo,
  voicings,
  smp,
  smd,
}: ArrangementBlockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChildClick = (event: { stopPropagation: () => void }) => {
    console.log("Child clicked");
    event.stopPropagation();
  };

  return (
    <AnimatePresence>
      <div
        className="flex cursor-pointer flex-col gap-3 text-center text-green duration-500 hover:scale-105 hover:opacity-80"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          height={500}
          width={500}
          alt={src}
          className="rounded-xl"
        />
        <p className="break-words">{title}</p>
      </div>
      {isOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex cursor-pointer items-center justify-center p-8 backdrop-blur-lg lg:p-0"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full cursor-default rounded-xl bg-white p-3 lg:w-fit lg:max-w-screen-lg"
            onClick={handleChildClick}
          >
            <div className="flex w-full justify-end">
              <button
                className="text-dark duration-500 hover:opacity-50"
                onClick={() => setIsOpen(false)}
              >
                <IconX className="h-full" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-2 px-5 pb-5 lg:flex-row lg:items-stretch lg:gap-10">
              <Image
                src={src}
                height={400}
                width={400}
                alt={src}
                className="h-96 w-auto rounded-xl lg:h-[70vh]"
              />
              <div className="flex flex-col justify-between py-2 lg:py-5">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl text-green lg:text-3xl">{title}</h2>
                  {inspiredBy === "---" ? (
                    ""
                  ) : (
                    <sub className="-mt-2 text-base text-green">
                      Inspired by {inspiredBy}
                    </sub>
                  )}
                  {arrangedFor === "---" ? (
                    ""
                  ) : (
                    <p className="text-sm lg:text-base">
                      Arranged for {arrangedFor}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2 text-sm lg:text-base [&>p]:h-fit [&>p]:rounded-full [&>p]:p-1 [&>p]:px-3">
                    <p className="bg-bluey">{voicings}</p>
                    <p className="bg-pinky">{parts} Parts</p>
                    <p className="bg-greeny">{purpose}</p>
                    <p className="bg-pinky">
                      {difficulty[0].toUpperCase() + difficulty.substring(1)}{" "}
                      Difficulty
                    </p>
                    <p className="bg-greeny">
                      {tempo[0].toUpperCase() + tempo.substring(1)} Tempo
                    </p>
                    <p className="bg-bluey">{style.replaceAll("/ ", "/")}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  {smp === "Contact Me!" ? (
                    <div>
                      <p className="mb-5">Available for purchase:</p>
                      <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="round-button bg-green text-white"
                      >
                        GET IN TOUCH
                      </a>
                    </div>
                  ) : (
                    <div>
                      <p>Buy online:</p>
                      <div className="flex gap-2">
                        <a href={smd} target="_blank" rel="noreferrer">
                          <Image
                            src="/sheetmusicdirect.png"
                            className="size-16 rounded-xl"
                            width={100}
                            height={100}
                            alt="Sheet Music Direct"
                          />
                        </a>
                        <a href={smp} target="_blank" rel="noreferrer">
                          <Image
                            src="/sheetmusicplus.png"
                            className="size-16 rounded-xl"
                            width={100}
                            height={100}
                            alt="Sheet Music Direct"
                          />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
