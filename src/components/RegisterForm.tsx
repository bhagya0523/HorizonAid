"use client"

import Link from 'next/link'
import { useState } from 'react' 
const RegisterForm = () => {
    const [ registerUsername, setRegisterUsername ] = useState('');
    const [ registerEmail, setRegisterEmail] = useState('');
    const [ registerPassword, setRegisterPassword ] = useState('');
    return(
    
    <div className=" grid place-items-center h-screen">
     <div className="shadow-xl p-10 rounded-lg border-t-4 border-indigo-500 mb-8">
        <h1 className="text-xl text-center font-bold my-4">Register</h1>

                <br />
                <form className="flex flex-col gap-3">
            <input type="text" placeholder="Username" onChange={e => setRegisterUsername(e.target.value)} />
            <input type="email" placeholder="Email" onChange={e => setRegisterEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setRegisterPassword(e.target.value)} />
            <br/>
            

            <button className="bg-indigo-500  text-white font-bold cursor-pointer px-6 py-2 rounded-3xl">Register</button>


            <Link className="text-sm mt-3 text-right" href={"/login"}>
               Already have an account?
                <span className="underline"> Login</span>

            </Link>
        </form>
     </div>
     </div>
    
    )
}
export default RegisterForm
