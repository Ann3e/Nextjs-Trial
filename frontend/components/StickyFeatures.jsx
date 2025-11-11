"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Frontier intelligence, tailored to You.",
    description:
      "Make your AI your own. Train, distill, fine-tune, and build with the world’s best open source models.",
  },
  {
    title: "Enterprise-grade. Agent-ready.",
    description:
      "Deploy agents that execute, adapt, and deliver real results, with powerful orchestration, tooling, and safety.",
  },
  {
    title: "Privacy-first.",
    description:
      "Deploy and build with AI anywhere—on-premises, cloud, edge, devices, and more—while retaining full control of your data.",
  },
  {
    title: "Deeply engaged solutioning and value delivery.",
    description:
      "Hands-on assistance from the world’s foremost applied AI scientists across deployment, solutioning, safety, and beyond.",
  },
];

export default function StickyFeatures() {
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        {/* LEFT SIDE - Sticky */}
        <div className="md:w-1/2 relative">
          <div className="md:sticky md:top-1/4">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Your AI future belongs in your hands.
            </h2>
            <p className="text-gray-400 mt-6 text-lg">
              Flag your independence. <br />
              Build your intelligence.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Scroll Content */}
        <div className="md:w-1/2 flex flex-col gap-40">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
