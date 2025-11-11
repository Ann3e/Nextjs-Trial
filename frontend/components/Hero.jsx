"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden bg-black text-white px-6"
    >
      {/* Moving Glow Background */}
      <motion.div
        style={{ y }}
        className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl"
      >
        <AnimatedText text="Get the job done faster, better." />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gray-400 text-lg mt-8"
        >
          Open-weight AI models built for real-world performance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition">
            Explore Models
          </button>
          <button className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-gray-500 text-sm"
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  );
}
