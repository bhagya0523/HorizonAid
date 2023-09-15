"use client"

import Link from 'next/link'
import { useState } from 'react' 


const LoginForm =() => {

    const [ loginUsername, setLoginUsername ] = useState('');
    const [ loginPassword, setLoginPassword ] = useState('');
    return(
     <div className="grid place-items-center h-screen">
     <div className="shadow-xl p-10 rounded-lg border-t-4 border-indigo-500 mb-8">
        <h1 className="text-xl text-center font-bold my-4 ">Login</h1>
              <br />

        <form className="flex flex-col gap-5">
        
        <input type="username" placeholder="Username" onChange={e => setLoginUsername(e.target.value)} />
            <input type="password" placeholder="Password"onChange={e => setLoginPassword(e.target.value)} />
            <br/>

            <button className="bg-indigo-500  text-white font-bold cursor-pointer px-6 py-2 rounded-3xl">Login</button>

           


            <Link className="text-sm mt-3 text-right" href={'/register'}>
                Don't have an account? 
                <span className="underline"> Register</span>

            </Link>
        </form>
     </div>
     </div>
    )
}
export default LoginForm