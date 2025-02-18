import React from "react";
import { motion } from "motion/react";

function About() {
  return (
    <div className="flex items-start justify-start flex-row min-h-screen text-white ">
      <motion.div
        initial={{ y: "100vh", x: 0 }}
        animate={{ y: "20vh", x: 0 }}
        transition={{
          stiffness: 50,
          duration: 2.5,
          ease: "easeIn",
        }}
        className="flex items-start justify-center w-[50%] "
      >
        <img src="./public/sanjana.jpg" />
      </motion.div>
      <motion.div
       initial={{ y: "100vh", x: "-10vw",  }}
       animate={{ y: "20vh", x: "-10vw"}}
       transition={{
         stiffness: 50,
         duration: 2.0,
         ease: "easeIn",
         delay:2
       }}
      className="text-[rgba(234,190,123,1)] text-[20px] font-medium">
      <h3>About</h3>

      </motion.div>
      
    </div>
  );
}

export default About;
