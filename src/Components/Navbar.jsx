import React,{useState} from 'react'

function Navbar() {

const navItems = ['INTRO','ABOUT','WORKS','SAY HELLO']
const [itemSelected,setSelectedItem] = useState(null)

const handleItemClick=(item)=>{
    setSelectedItem(item)
   
}

  return (
    <div className='fixed flex justify-center w-screen'>
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
    </div>
  )
}

export default Navbar