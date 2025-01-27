import { useState } from 'react'
 import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import About from './Components/About'
import Work from './Components/Work'
import SayHello from './Components/SayHello'
import { AnimatePresence, motion } from 'motion/react'


function App() {
 

  return (
    <>
    <BrowserRouter>
    <div className='bg-black w-screen h-screen flex '>
        
        <Navbar></Navbar> 
       
        <Routes>
          <Route path='/' element={<Intro/>}></Route>
          <Route path='/about' element = {<About/>}/>
          <Route path='/work' element = {<Work/>}/>
          <Route path='/sayhello' element = {<SayHello/>}/>
          </Routes> 
          </div>         
    </BrowserRouter>
      
    </>
  )
}

export default App
