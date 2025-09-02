import { motion } from "framer-motion";
import Circles from "../components/Circles.jsx";

export default function Intro() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center gap-6 overflow-hidden">
      {/* Circles background */}
      <Circles />

      <div className="container relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h3"
        >
          HELLO WORLD
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="h1"
        >
          I am Sanjana,<br />a frontend developer<br />based in India.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="copy max-w-prose"
        >
          I design & build fast, accessible interfaces using React, Tailwind and modern tooling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3 pt-2"
        >
          <a href="/work" className="px-5 py-3 rounded-xl bg-gold text-black font-semibold">View Work</a>
          <a href="/say-hello" className="px-5 py-3 rounded-xl border border-neutral-700">Say Hello</a>
        </motion.div>
      </div>
    </section>
  );
}