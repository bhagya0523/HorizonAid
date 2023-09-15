import React from 'react'
import Dash from './Dash'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='container pt-10 p-20'>
        
        <h2 className='text-6xl font-bold pt-2'>Featured <span className='text-indigo-500'>Projects</span>
        </h2>

        <p className='max-w-[550px] pt-10 text-gray-700'>
        Dive into a world of impactful endeavors that inspire, uplift, and transform. These projects are a testament 
        to what collective effort and dedication can achieve. Join us in exploring and supporting these extraordinary
         journeys towards a better tomorrow
        </p>

 
        <Dash />

        <div className='grid md:grid-cols-[1fr,1fr,1fr] gap-16 mt-10'>

            <div className='w-fit mx-auto self-end'>
                <Image className='class-w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl transition duration-300 ease-in-out hover:scale-110'
                 src='/business1.jpg'
                 
                 width={300}
                 height={600}
                 alt="grid image"/>

                 <div className='space-y-4'>
                    <Dash />
                   

                    <h2 className='font-medium text-xl' >Dive through the technology</h2>
                    <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    In a world driven by technology, our initiative aims to harness its potential
                     for positive change. Join us as we explore how technology can shape a better tomorrow, one breakthrough at a time.

                    </p>
                 </div>
            </div>





            <div className='w-fit mx-auto self-end'>
                <Image className='class-w-[100%]  sm:max-w-full h-auto shadow-2xl   transition duration-300 ease-in-out hover:scale-110'
                 src='/Water.jpg'
                 width={300}
                 height={600}
                 alt="grid image"/>

                 <div className='space-y-4'>
                    <Dash />
                    <h2 className='font-medium text-xl'>100 days to change the game</h2>
                    <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    We're embarking on a mission to challenge the status quo, push boundaries, 
                    and make a lasting impact. Join us as we work together to change the game and create a brighter future for all.

                    </p>
                 </div>
            </div>



            <div className='w-fit mx-auto self-end'>
                <Image className='class-w-[100%]  sm:max-w-full h-auto shadow-2xl   transition duration-300 ease-in-out hover:scale-110'
                 src='/edu1.jpg'
                 width={300}
                 height={600}
                 alt="grid image"/>

                 <div className='space-y-4'>
                    <Dash />
                    <h2 className='font-medium text-xl' >Knowledge and wisdoms is power</h2>
                    <p className='text-gray-700 text-[14px] xl:text-[16px]'>
                    Every contribution becomes a stepping stone to knowledge and empowerment.Our platform is dedicatede to raising funds that
                    directly support education initiatives.

                    </p>
                 </div>
            </div>



               
          
        </div>
    </div>
  )
}

export default Feature