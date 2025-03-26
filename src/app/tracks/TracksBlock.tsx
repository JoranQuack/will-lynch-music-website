"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconX, IconMusic } from "@tabler/icons-react";

interface TracksBlockProps {
  title: string;
  sampleID: string | string[];
  arrangedBy: string;
  parts: string;
  purpose: string;
  style: string;
  difficulty: string;
  inspiredBy: string;
  tempo: string;
  voicings: string;
}

export default function TracksBlock({
  title,
  sampleID,
  arrangedBy,
  parts,
  purpose,
  style,
  difficulty,
  inspiredBy,
  tempo,
  voicings,
}: TracksBlockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChildClick = (event: { stopPropagation: () => void }) => {
    console.log("Child clicked");
    event.stopPropagation();
  };

  return (
    <AnimatePresence>
      <div
        className="flex min-h-24 cursor-pointer items-center justify-start gap-3 rounded-xl bg-dark p-2 px-5 text-white duration-500 hover:scale-105 hover:opacity-80"
        onClick={() => setIsOpen(true)}
      >
        <IconMusic className="w-10" />
        <p className="w-full break-all">{title}</p>
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
            className="w-full cursor-default rounded-xl bg-white p-3"
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
            <div className="flex flex-col justify-between gap-10 p-4 lg:px-8 lg:py-5 lg:pb-8">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl text-dark lg:text-3xl">{title}</h2>
                {inspiredBy === "---" ? (
                  ""
                ) : (
                  <sub className="-mt-2 text-base text-dark">
                    Inspired by {inspiredBy}
                  </sub>
                )}
                {arrangedBy === "---" ? (
                  ""
                ) : (
                  <p className="text-sm">Arranged by {arrangedBy}</p>
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
              <iframe
                src={`https://drive.google.com/file/d/${sampleID}/preview`}
                width="450"
                height="100"
                allow="autoplay"
                className="w-full rounded-xl lg:w-auto"
              ></iframe>
              <div className="flex flex-col gap-2">
                <p>Available for purchase:</p>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="round-button bg-green text-white"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
