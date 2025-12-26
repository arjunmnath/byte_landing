"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import StickersPage from "./stickers";

export default function IntroShutter() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1,
            ease: [0.77, 0, 0.175, 1],
          }}
          className="
            fixed inset-0 z-[9999]
            bg-primary
            flex items-center justify-center
            pointer-events-none
            shadow-[0_1px_0_0_var(--border),0_12px_24px_-12px_rgba(0,0,0,0.15)]

          "
        >
          {/* <div className="relative w-full"> */}
          <StickersPage />
          {/* Shutter lines */}
          {/* <div className="absolute inset-0 flex flex-col justify-center gap-3 opacity-30">
            <div className="h-px bg-border mx-16" />
            <div className="h-px bg-border mx-24" />
            <div className="h-px bg-border mx-16" />
          </div> */}

          {/* Logo */}
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: [1, 0.2, 0.2],
              y: -100,
            }}
            transition={{
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            exit={{ opacity: 0, y: -200 }}
            className="relative font-extrabold text-4xl text-white sm:text-7xl px-10 rounded-2xl py-20 bg-primary/90 dark:bg-background/90 font-serif  tracking-wide  z-40"
          >
            Byte
          </motion.h1>
          {/* </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
