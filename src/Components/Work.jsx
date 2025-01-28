import React from 'react'

const projects=[
  {
    name: 'Doc-Mini-App',
    detail:'Application made using',
    image: 'Doc-Mini-App.png',
    link:'https://doc-mini-app-psi.vercel.app/'
  },
  {

  }
]

function Work() {
  return (
   <>
   <div className='w-[85%] p-10 m-20 text-white font-PublicSans'>
   <h3>Recent Works</h3>
   <h1 className=' text-[50px] font-Dm-serif leading-relaxed'>Here are some of my favourite projetcs 
    I have done lately. Feel free to check them out.</h1>
    <table className="w-full border-collapse">
      <tr className='flex justify-around'> 
        <td>
          <a href='https://doc-mini-app-psi.vercel.app/' target="_blank" rel="noopener noreferrer" className='cursor-wait flex border-slate-900 border-t-[1px]'>
         
         <img className='w-[150px] h-[150px] p-2 mr-2 hover:opacity-70' src='./public/Doc-Mini-App.png' />
         <div className='m-4'>
         <h5 className='font-Dm-serif'>Doc-Mini-App</h5>
         <p className=''>Application made using </p>
         </div>
        </a>
         </td>
         <td>
          <a href='https://doc-mini-app-psi.vercel.app/' target="_blank" rel="noopener noreferrer" className='flex border-slate-900 border-t-[1px]'>
         
         <img className='w-[150px] h-[150px] p-2 mr-2' src='./public/Doc-Mini-App.png' />
         <div className='m-4'>
         <h5 className='font-Dm-serif'>Doc-Mini-App</h5>
         <p className=''>Application made using </p>
         </div>
        </a>
         </td>
         
        {/* <td><a href='https://25-reactjs-projects.vercel.app/' target='blank'>
         
         <img className='w-[150px] h-[150px]' src='./public/React-projects.png' />
         <div>
         <h5>Doc-Mini-App</h5>
         <p>Application made using </p>
         </div>
     
     </a> </td>
     */}
            
      </tr>
      
    </table>
    </div>
   </>
  )
}

export default Work