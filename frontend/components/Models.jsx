"use client";
import { motion } from "framer-motion";

const models = [
  {
    name: "Mistral 7B",
    description:
      "A dense model with 7 billion parameters. Open-weight and efficient for a variety of NLP tasks.",
    link: "#",
  },
  {
    name: "Mixtral",
    description:
      "A mixture of experts model with 12.9 billion active parameters. Open-weight, high-performance.",
    link: "#",
  },
  {
    name: "Codestral",
    description:
      "A model specialized for code generation and reasoning. Ideal for developers and AI builders.",
    link: "#",
  },
];

export default function Models() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Our Models
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Explore our suite of open-weight models optimized for reasoning,
          efficiency, and accessibility.
        </p>

        {/* Model Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {models.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{model.name}</h3>
              <p className="text-gray-400 mb-6">{model.description}</p>
              <a
                href={model.link}
                className="text-white hover:text-gray-300 font-medium"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
