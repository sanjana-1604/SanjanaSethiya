import { useState } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'


function App() {
 

  return (
    <>
      <div className='bg-black w-screen h-screen p-4'>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Intro/>}/>
        </Routes>
        </BrowserRouter>
       
        
        </div>
    </>
  )
}

export default App
