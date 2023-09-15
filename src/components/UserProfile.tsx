import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Userprofile = () => {
  return (
    <div className="px-40 py-35 h-screen">
    <div className="shadow-xl p-10 rounded-lg border-t-6 border-indigo-500 mb-8">
       <h1 className="text-xl text-center font-bold my-4 ">My Account</h1>
             <br />

       <form className="flex flex-col gap-5">
         
           <h1>Profile picture</h1>
           <input type='image' placeholder="profile picture" />
           <br />

           <input type="text" placeholder="Username" />
           <br />

           <input type="email" placeholder="Email" />
           <br />

           <input type="password" placeholder="Password" />
           <br />
           <br />
           <br />
           <br />
           <button className="bg-indigo-500  text-white font-bold cursor-pointer px-6 py-2 rounded-3xl">Save changes</button>
           <button className="bg-indigo-500  text-white font-bold cursor-pointer px-6 py-2 rounded-3xl">Delete account</button>
     
       </form>
    </div>
    </div>
  )
}

export default Userprofile