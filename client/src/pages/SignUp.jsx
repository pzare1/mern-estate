import React from 'react'

function SignUp() {
  return (
    <div>
        <h1 className='my-5 sm:my-7 text-center font-semibold sm:text-xl text-sm text-slate-400 bg-slate-200 w-full max-w-md mx-auto py-3 rounded-md'>
            Sign Up
        </h1>
        <form className='flex flex-col items-center justify-center w-full max-w-md mx-auto'> 
            <div className='flex flex-col w-full px-8 py-2  bg-white rounded-lg text-slate-600'>
                <div>
                    <label className='block text-slate-600 text-sm font-bold mb-2' htmlFor='username'></label>
                    <input className=' my-2 placeholder:text-sm shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
                    <label className='block text-slate-600 text-sm font-bold mb-2' htmlFor='email'></label>
                    <input className=' my-2 placeholder:text-sm shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Email' />
                    <label className='block text-slate-600 text-sm font-bold mb-2' htmlFor='password'></label>
                    <input className=' my-2 placeholder:text-sm shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Password' />
                    <button className='my-2 w-full bg-slate-600 hover:bg-slate-500 text-slate-200 text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sign Up</button>
                    <button className='my-2 w-full bg-green-600 hover:bg-green-500 text-green-50 text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SignUp