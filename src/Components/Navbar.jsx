import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("intro");

  // Watch scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "about", "work", "contact"];
      let current = "intro";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to sections
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false); // close mobile menu on click
  };

  const menuItems = [
    { id: "intro", label: "Intro" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Say Hello" },
  ];

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-neutral-800"
    >
      <div className="container flex justify-between items-center h-16">
        {/* Logo + Name */}
        <div
          onClick={() => scrollToSection("intro")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src="/logo.png" alt="Sanjana Logo" className="h-10 w-auto" />
          <span className="font-bold text-lg">Sanjana</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition ${
                active === item.id ? "text-gold font-semibold" : "hover:text-gold"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-neutral-800 bg-black"
          >
            <div className="flex flex-col items-center py-4 gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition ${
                    active === item.id
                      ? "text-gold font-semibold"
                      : "hover:text-gold"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
