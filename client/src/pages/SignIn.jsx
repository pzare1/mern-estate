import React, { useState } from 'react'
import { useNavigate } from'react-router-dom'   

function SignIn() {
    const [formData, setformData] = useState({});
    const [errors, setErrors] = useState(null); 
    const [loading, setloading] = useState(false)
    const navigate = useNavigate();
    const changeHandle = async(e) => {
        setformData({...formData, [e.target.id]: e.target.value});
    }
    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            setloading(true);   
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if(data.success === false){
                setErrors(data.message);
                setloading(false);
                return;
            }
            setloading(false);
            setErrors(null); 
            navigate('/')
        } catch (error) {
            setloading(false);
            setErrors(error.message);   
        }
    };      
    const changePage =  (e) => {
        e.preventDefault();
        navigate('/register')
    }  
  return (
    <div>
        <h1 className='my-5 sm:my-7 text-center font-semibold sm:text-xl text-sm text-slate-400 bg-slate-200 w-full max-w-md mx-auto py-3 rounded-md'>
            Sign In
        </h1>
        <form onSubmit={submitHandle} className='flex flex-col items-center justify-center w-full max-w-md mx-auto'> 
            <div className='flex flex-col w-full px-8 py-2  bg-white rounded-lg text-slate-600'>
                <div>
                    <label className='block text-slate-600 text-sm font-bold mb-2' htmlFor='username'></label>
                    <input className=' my-2 placeholder:text-sm shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' onChange={changeHandle}/>
                    <label className='block text-slate-600 text-sm font-bold mb-2' htmlFor='password'></label>
                    <input className=' my-2 placeholder:text-sm shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='Password' onChange={changeHandle}/>
                    <button disabled={loading} className='my-2 w-full bg-slate-600 hover:bg-slate-500 text-slate-200 text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline'>{loading ? 'Loading' : 'Login'}</button>
                </div>
                <button onClick={changePage} className='my-2 w-full bg-green-600 hover:bg-green-500 text-green-50 text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Register</button>
                {errors && <div className='text-red-600 text-sm p-2 bg-red-100 rounded-md my-2'>{errors}</div>}
            </div>
        </form>
    </div>
  )
}

export default SignIn