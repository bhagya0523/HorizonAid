import React from 'react'
import Image from 'next/image'

const Survey = () => {
  return (
   
    <div className='container pt-40 p-20'>
        <div className='grid lg:grid-cols-[50%,1fr] gap-20 pb-8'>
            <div>
                <Image
                className='w-[100%] h-50 lg:w-auto lg:h-[90vh]'
                src='/Handshake.jpg'
                width={1000}
                height={300}
                alt="survey image"
                />

            </div>

        <div className='self-center'>
            <h2 className='text-4xl md:text-6xl font-bold'>WE</h2>
            <h2 className='text-4xl md:text-6xl font-bold pt-3'>
                ARE <span className='text-indigo-500'>HORIZONAID</span>
            </h2>

            <p className='text-gray-700 pt-16'>
            Welcome to HorizonAid – your gateway to creating positive change through the power of giving. With HorizonAid, making a difference has never been easier. Join us as we connect passionate individuals and organizations with impactful projects, turning aspirations into reality. Together, let&apos;s shape a better future.
            </p>
        </div>
    </div>
</div>


  )
}

export default Survey