"use client";
import { motion } from "framer-motion";

const companies = [
  "OpenAI", "Anthropic", "Hugging Face", "Cohere", "Eleuther", "Mistral", "LLaMA"
];

export default function Marquee() {
  return (
    <section className="bg-black text-gray-400 py-10 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-20 text-2xl font-medium whitespace-nowrap"
      >
        {[...companies, ...companies].map((name, i) => (
          <span key={i}>{name}</span>
        ))}
      </motion.div>
    </section>
  );
}
