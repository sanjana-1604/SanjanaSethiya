import { useState } from 'react'
// import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import Circles from './Components/Circles'


function App() {
 

  return (
    <>
      <div className='bg-black w-screen h-screen  flex'>
        
        <Navbar></Navbar>        
        <Intro></Intro>
        <Circles></Circles>
      
       
        
        </div>
    </>
  )
}

export default App
