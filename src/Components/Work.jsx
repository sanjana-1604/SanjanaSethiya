import React from 'react'

const projects=[
  {
    name: 'Doc-Mini-App',
    detail:'Application made using',
    image: 'Doc-Mini-App.png',
    link:'https://doc-mini-app-psi.vercel.app/'
  },
  {
    name: 'Doc-Mini-App',
    detail:'Application made using',
    image: 'Doc-Mini-App.png',
    link:'https://doc-mini-app-psi.vercel.app/'

  },
  {
    name: 'Doc-Mini-App',
    detail:'Application made using',
    image: 'Doc-Mini-App.png',
    link:'https://doc-mini-app-psi.vercel.app/'

  },
  {
    name: 'Doc-Mini-App',
    detail:'Application made using',
    image: 'Doc-Mini-App.png',
    link:'https://doc-mini-app-psi.vercel.app/'

  }
]

function Work() {
  return (
   <>
   <div className='w-[85%] p-10 m-20 text-white font-PublicSans'>
   <h3>Recent Works</h3>
   <h1 className=' text-[50px] font-Dm-serif leading-relaxed'>Here are some of my favourite projetcs 
    I have done lately. Feel free to check them out.</h1>

<div className='grid grid-cols-2 w-full border-collapse'>
  {projects.map((item,index)=>{
    return (
    <div key = {index} >
<a href={item.link} target="_blank" rel="noopener noreferrer" className='flex border-slate-900 border-t-[1px]'>
         
         <img className='w-[150px] h-[150px] p-2 mr-2 hover:opacity-70' src={`./public/${item.image}`} />
         <div className='m-4'>
         <h5 className='font-Dm-serif'>{item.name}</h5>
         <p className=''>{item.detail} </p>
         </div>
         </a>

    </div>)
  })}
  
</div>
    </div>
   </>
  )
}

export default Work