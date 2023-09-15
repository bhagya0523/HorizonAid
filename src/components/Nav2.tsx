import Link from "next/link";

import React from 'react'

const Nav2 = () => {
  return (
    <div className='container pt-6 text-center flex  items-center justify-center '>
         
         <div className=' space-y-0 space-x-10 mt-10 text-lg'>
       
         <Link href={"/business"} className='text-gray-500 hover:text-indigo-500 font-bold'>Business</Link>
         <Link href={"/education"} className='text-gray-500 hover:text-indigo-500 font-bold'>Education</Link>
         <Link href={"/health"} className='text-gray-500 hover:text-indigo-500 font-bold'>Health</Link>
         <Link href={"/technology"} className='text-gray-500 hover:text-indigo-500 font-bold'>Technology</Link>
         <Link href={"/charity"} className='text-gray-500 hover:text-indigo-500 font-bold'>Charity</Link>
         <Link href={"/crisis"} className='text-gray-500 hover:text-indigo-500 font-bold'>Crisis Relief</Link>
         <Link href={"/industrial"} className='text-gray-500 hover:text-indigo-500 font-bold'>Industrial</Link>
         <Link href={"/innovation"} className='text-gray-500 hover:text-indigo-500 font-bold'>Innovation</Link>
       
      </div>
      </div>
    
      
  )
}

export default Nav2