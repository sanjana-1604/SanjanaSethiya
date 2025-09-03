import { motion } from "framer-motion";

export default function About() {
  // Function to trigger resume download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";   // ✅ resume file placed in public/
    link.download = "Sanjana_Sethiya_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="container section grid gap-10 sm:gap-16 sm:grid-cols-2 items-center">
      {/* Larger circular image on the left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="order-1 sm:order-1 flex justify-center"
      >
        <img
          src="/sanjana.jpg"
          alt="Sanjana portrait"
          className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-gold shadow-xl"
        />
      </motion.div>

      {/* Text on the right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="order-2 sm:order-2"
      >
        <h3 className="h3">ABOUT</h3>
        <h2 className="h2 mt-2">Who I am</h2>
        <p className="copy mt-4">
          I am a frontend developer passionate about building elegant, user-friendly interfaces. 
          I enjoy transforming complex problems into simple, intuitive designs that deliver seamless user experiences. 
          My work is rooted in attention to detail, accessibility, and performance, ensuring that every project is inclusive and efficient. 
          I stay curious and constantly explore modern frameworks, design systems, and coding practices to keep my skills sharp. 
          Beyond coding, I love experimenting with creative ideas, collaborating with diverse teams, and contributing to projects that make a positive impact.
        </p>

        {/* Download Resume Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="mt-8 px-6 py-3 rounded-xl bg-gold text-black font-semibold shadow-md hover:shadow-lg transition"
        >
          Download Resume
        </motion.button>
      </motion.div>
    </section>
  );
}