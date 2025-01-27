import React from 'react'
import {motion} from 'motion/react'

function Circles() {
  return (
    <div className=' relative w-screen h-screen flex justify-end items-center'>
 <motion.div
          initial={{y:'0%', opacity: 0.2 }}
          animate={{y:'0%', opacity:[ 0.2,1,0.2 ] }}
          transition={{            
            duration: 0.5,
            ease: "easeIn",
            delay:4,
          }}
          className="absolute z-20 rounded-l-full w-[350px] h-[650px] p-2 border-l-2 border-t-2 border-b-2 border-[rgba(234,190,123,1)]"
        >
        </motion.div>


        <motion.div
          initial={{y:'0%', opacity: 0.2 }}
          animate={{y:'0%', opacity:[ 0.2,1,0.2 ] }}
          transition={{            
            duration: 0.5,
            ease: "easeIn",
            delay:3.5,
          }}
          className="absolute z-20 rounded-l-full w-[300px] h-[550px] p-2 border-l-2 border-t-2 border-b-2 border-[rgba(234,190,123,1)]"
        >
        </motion.div>
<motion.div
          initial={{y:'0%', opacity: 0.2 }}
          animate={{y:'0%', opacity:[ 0.2,1,0.2 ] }}
          transition={{            
            duration: 0.5,
            ease: "easeIn",
            delay:3,
          }}
          className="absolute z-20 rounded-l-full w-56 h-[450px] p-2 border-l-2 border-t-2 border-b-2 border-[rgba(234,190,123,1)]"
        >
        </motion.div>

        <motion.div
          initial={{y:'0%', opacity: 1 }}
          animate={{y:'0%', opacity:[ 0.2,1,0.2 ] }}
          transition={{            
            duration: 0.5,
            ease: "easeIn",
            delay:2.5,
                  }}
          className="absolute rounded-l-full w-40 h-80 p-2 border-l-2 border-t-2 border-b-2 border-[rgba(234,190,123,1)]"
        >
        </motion.div>

<motion.div
          initial={{y:'0%', opacity: 1 }}
          animate={{y:'0%', opacity:[ 0.2,1,0.2 ]}}
          transition={{            
            duration: 0.5,
            ease: "easeIn",
            delay:2,
          }}
          className="absolute z-10 rounded-l-full w-20 h-40 p-2 border-l-2 border-t-2 border-b-2 border-[rgba(234,190,123,1)]"
        >
        </motion.div>
       
        
    </div>
  )
}

export default Circles