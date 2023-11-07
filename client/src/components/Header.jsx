import React from 'react';
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='bg-slate-100 shadow-sm'>
      <div className='flex justify-between align-middle items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-lg flex flex-wrap'>
            <span className=' text-slate-500'>Real</span>
            <span className=' text-slate-700'>Estate</span>
        </h1>
        <form className='flex justify-between rounded-md  bg-white items-center'>
        <input className=' bg-transparent px-2 py-1 focus:outline-none w-40 sm:w-80 placeholder:text-sm text-slate-600' placeholder='Search ...'></input>
        <CiSearch className='mx-2 text-slate-400'/>
        </form>
        <ul className='flex justify-between text-slate-600 text-sm'>
          <Link to='/'>
          <li className='px-3 cursor-pointer'>Home</li>
          </Link>
          <Link to='/About'>
          <li className='px-3 cursor-pointer'>Services</li>
          </Link>
          <Link to='/login'>
          <li className='px-3 cursor-pointer'>Login</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header