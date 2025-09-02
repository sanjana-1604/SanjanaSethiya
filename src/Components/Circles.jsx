import React from "react";
import { motion } from "framer-motion";

function Circles() {
  const sizes = [
    { w: 280, h: 480, delay: 2 },
    { w: 220, h: 380, delay: 2.5 },
    { w: 160, h: 280, delay: 3 },
    { w: 120, h: 200, delay: 3.5 },
    { w: 80, h: 140, delay: 4 },
  ];

  return (
    // hidden on mobile, show flex from sm: up
    <div className="hidden sm:flex absolute inset-0 justify-end items-center overflow-hidden pointer-events-none">
      {sizes.map((size, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.1, x: 40 }}
          animate={{ opacity: [0.1, 0.6, 0.1], x: 0 }}
          transition={{ duration: 3, repeat: Infinity, delay: size.delay }}
          className="absolute right-0 rounded-l-full border-l-2 border-t-2 border-b-2 border-gold"
          style={{
            width: `${size.w}px`,
            height: `${size.h}px`,
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
        />
      ))}
    </div>
  );
}

export default Circles;