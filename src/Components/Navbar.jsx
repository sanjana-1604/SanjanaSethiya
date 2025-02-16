import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import About from "./About";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "INTRO", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "WORKS", path: "/work" },
    { name: "SAY HELLO", path: "/sayhello" },
  ];

  const location = useLocation();
  const [itemSelected, setSelectedItem] = useState(location.pathname);

 
  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 50,
        duration: 0.8,
      }}
      className="fixed flex justify-center w-screen top-0 left-0 bg-black z-50"
    >
      <img className="h-8 w-8 mr-4 mt-2" src="logo.png"></img>
      <ul className="flex justify-around list-none ">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={` border-slate-900 border font-PublicSans w-[15rem] text-[10px] pt-4 pb-4 pl-4
              ${
                itemSelected === item.path
                  ? "bg-[#2c2c2d] text-[#eabe7b]"
                  : "bg-black text-gray-200"
              }`}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Navbar;
