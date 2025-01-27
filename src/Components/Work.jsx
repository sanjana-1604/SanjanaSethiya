import React from 'react'

function Work() {
  return (
   <>
   <div className='w-[85%] p-10 m-20 text-white font-PublicSans'>
   <h3>Recent Works</h3>
   <h1 className=' text-[50px] font-[400] font-Dm-serif '>Here are some of my favourite projetcs 
    I have done lately. Feel free to check them out.</h1>
    <table>
      <tr> 
        <td><a href='https://doc-mini-app-psi.vercel.app/' target='blank' className='flex'>
         
         <img className='w-[150px] h-[150px]' src='./public/Doc-Mini-App.png' />
       <h5>Doc-Mini-App</h5>
       <p>Application made using </p>
     
     </a> </td>
        <td><a href='https://25-reactjs-projects.vercel.app/' target='blank'>
         
         <img className='w-[150px] h-[150px]' src='./public/React-projects.png' />
       <h5>Doc-Mini-App</h5>
       <p>Application made using </p>
     
     </a> </td>
    
            
      </tr>
      
    </table>
    </div>
   </>
  )
}

export default Work