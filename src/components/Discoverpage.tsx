import React from 'react'
import Navbar from './Navbar'
import Nav2 from './Nav2'
import Link from 'next/link'

const Discoverpage = () => {
  return (
   <div >
    <Navbar/>  
    <br></br>
    
   <Nav2 />
   <br></br>
   
   <hr></hr>

          <div className='text-left pt-10 text-gray-400 pl-10 text-sm font-bold'>
             FRESH STORIES
          </div>

   </div>
  )
}

export default Discoverpage