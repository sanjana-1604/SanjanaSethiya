import React from 'react'
import {motion} from 'motion/react'
import Circles from './Circles'


function Intro() {
  return (
  
<>
<div className =" flex flex-col w-screen ">
       
       <motion.h3 initial={{ y:"20vh", x:"80vw", opacity:0 }} 
       animate={{ y: "20vh", x:"10vw", opacity: 1 }} 
       transition={{
         stiffness: 50,
         duration: 1.5,
         ease: "easeIn",  
         delay: 0.9,   
       }} className=' text-[rgba(234,190,123,1)] text-[20px] font-medium tracking-[0.3rem] '> HELLO WORLD</motion.h3>
      
       <motion.h1 initial={{ y: "20vh",x:"80vw", opacity:0}} 
       animate={{ y: "20vh", x:"10vw", opacity:1 }} 
       transition={{
         stiffness: 50,
         duration: 1.5,
         ease: "easeIn", 
         delay: 1,    
       }} className='text-[80px] font-[800] text-white font-Dm-serif'>I am Sanjana,<br></br>
       a frontend developer<br></br> based in India.</motion.h1>
      
       </div>
       <Circles/>
       </>
      


      

   
  )
}

export default Intro