import React from 'react'
import Dash from './Dash'
import ServicesCard from "./ServicesCard";


const servicesData = [
    {
        img: '/ed1.gif',
        title:"EDUCATION",
        desc: "",
    },

    {
        img: '/agreement.gif',
        title:"BUSINESS",
        desc: "",
    },

    {
        img: '/heartbeat.gif',
        title:"HEALTh",
        desc: "",
    },

    {
        img: '/idea.gif',
        title:"Technology",
        desc: "",
    },
    {
        img: '/donate.gif',
        title:"CHARITY",
        desc: "",
    },

    {
        img: '/risk.gif',
        title:"CRISIS RELIEF",
        desc: "",
    },
    {
        img: '/factory.gif',
        title:"INDUSTRIAL",
        desc: "",
    },
    {
        img: '/creativity.gif',
        title:"INNOVATIONS",
        desc: "",
    },
]


const Services = () => {
  return (
    <div className='container pt-40 p-20'>
        <div className='space-y-4 w-fit mx-auto text-center'>
            <h2 className='text-4xl md:text-6xl font-bold'>
               Fundraise <span className='text-indigo-500'>for</span>
            </h2>

            <p className='text-gray-700'>
            
            </p>

            <div className='w-fit mx-auto'>
            
            <Dash />

            </div>
        </div>


<div className='grid gap-10 md:grid-cols-4 md:gap-4 pt-8'>

{servicesData.map((item, index) => (
<ServicesCard 
    key={index} 
    img={item.img} 
    title={item.title}
     desc={item.desc}
     />
     ))}
     </div>
     </div>
  
  )
}


export default Services