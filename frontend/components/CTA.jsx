"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-t from-black via-[#0a0a0a] to-black text-white py-32 px-6 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,1)_80%)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Build with our Models
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Access open-weight AI models, integrate with APIs, and start creating
          intelligent products today.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/ai-studio"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Try AI Studio
          </Link>
          <Link
            href="/docs"
            className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Read the Docs
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
