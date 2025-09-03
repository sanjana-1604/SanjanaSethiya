import { motion } from "framer-motion";
import Circles from "../Components/Circles.jsx";

export default function Intro() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="intro" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center gap-6">
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
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => scrollToSection("work")}
              className="px-6 py-3 rounded-xl bg-gold text-black font-semibold shadow-md hover:shadow-lg transition"
            >
              View Work
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-xl border border-gold text-gold font-semibold shadow-md hover:shadow-lg transition"
            >
              Say Hello
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
