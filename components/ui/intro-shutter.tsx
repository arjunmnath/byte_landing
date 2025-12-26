"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import StickersPage from "./stickers";

export default function IntroShutter() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 1. TIMING REDUCED: Changed from 1400 to 1100 for a quicker exit
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="shutter"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.5, // Faster exit animation
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary shadow-2xl overflow-hidden"
        >
          {/* Background Pattern */}
          <StickersPage />

          {/* MASK CONTAINER */}
          {/* Added more padding-top (pt-8) so the floating logo doesn't get cut off */}
          <div className="z-10 relative overflow-hidden px-4 pt-8 pb-2">
            {/* 1. ENTRANCE CONTAINER (Handles the pop up from line) */}
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                delay: 0.1, // Reduced delay (starts sooner)
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="flex justify-center"
            >
              {/* 2. IDLE ANIMATION WRAPPER (Handles the life/breathing) */}
              <motion.div
                animate={{
                  y: [0, -6, 0], // Gentle bobbing up and down
                  scale: [1, 1.02, 1], // Subtle breathing size change
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity, // Loops forever
                  repeatType: "reverse",
                }}
              >
                <img
                  src="/byte-logo.png"
                  alt="Byte Logo"
                  className="w-56 h-28 object-cover mb-4 rounded-xl relative z-20"
                />
              </motion.div>
            </motion.div>

            {/* THE LINE */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: 0.1, // Syncs with logo start
                duration: 0.6, // Faster draw speed
                ease: "circOut",
              }}
              className="absolute bottom-0 left-0 w-full h-[3px] bg-white rounded-full origin-center z-30"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
