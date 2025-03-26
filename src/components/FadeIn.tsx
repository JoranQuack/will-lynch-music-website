"use client";
import { AnimatePresence, motion } from "motion/react";

export default function FadeIn() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transitionEnd: {
            display: "none",
          },
        }}
        transition={{ duration: 0.5 }}
        className="fixed z-50 flex h-screen w-screen items-center justify-center bg-white"
      />
    </AnimatePresence>
  );
}
