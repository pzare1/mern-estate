import React, { useState } from 'react'

function SignUp() {
    const [formData, setformData] = useState({});
    const changeHandle = async(e) => {
        setformData({...formData, [e.target.id]: e.target.value});
    }
    const submitHandle = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        console.log(data);
    }      
    console.log(formData);  
  return (
    <div>
        <h1 className='my-5 sm:my-7 text-center font-semibold sm:text-xl text-sm text-slate-400 bg-slate-200 w-full max-w-md mx-auto py-3 rounded-md'>
            Sign Up
        </h1>
        <form onSubmit={submitHandle} className='flex flex-col items-center justify-center w-full max-w-md mx-auto'> 
            <div className='flex flex-col w-full px-8 py-2  bg-white rounded-lg text-slate-600'>
                <div>
                    <label className='block text-slate-600 text-sm font-bold mb-2' htmlFor='username'></label>
                    <input className=' my-2 placeholder:text-sm shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' onChange={changeHandle}/>
                    <label className='block text-slate-600 text-sm font-bold mb-2' htmlFor='email'></label>
                    <input className=' my-2 placeholder:text-sm shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Email' onChange={changeHandle}/>
                    <label className='block text-slate-600 text-sm font-bold mb-2' htmlFor='password'></label>
                    <input className=' my-2 placeholder:text-sm shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='Password' onChange={changeHandle}/>
                    <button className='my-2 w-full bg-slate-600 hover:bg-slate-500 text-slate-200 text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sign Up</button>
                    <button className='my-2 w-full bg-green-600 hover:bg-green-500 text-green-50 text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SignUp