import React,{useState} from 'react'
import { motion } from "motion/react"

function Navbar() {

const navItems = ['INTRO','ABOUT','WORKS','SAY HELLO']
const [itemSelected,setSelectedItem] = useState(null)

const handleItemClick=(item)=>{
    setSelectedItem(item)
   
}

  return (
    <motion.div  initial={{ y: -100 }} // Start position above the viewport
    animate={{ y: 0 }} // Animate to its final position
    transition={{
      type: "spring", // Smooth bouncing effect
      stiffness: 50,
      duration: 0.8,
    }} className='fixed flex justify-center w-screen'>
        <img className='h-8 w-8 mr-4 mt-2' src="logo.png"></img>
        <ul className='flex justify-around list-none '>
        {navItems.map((item,index)=>(
            <li key={index} onClick={()=>handleItemClick(item)}
            className={` border-slate-900 border font-PublicSans  w-[15rem] text-[10px] pt-4 pb-4 pl-4
                 ${itemSelected===item ? 'bg-[#2c2c2d] text-[#eabe7b]':'bg-black text-gray-200'}`}>
               {item} 
            </li>

        ))}
        </ul>
    </motion.div>
  )
}

export default Navbar