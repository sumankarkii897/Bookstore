import React from 'react'
import { Link } from 'react-router-dom'

function Login1() {
  return (
    <>
    <div className='flex justify-center items-center'>
    <div className="modal-box ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
     {/*  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
    <h3 className="font-bold text-lg">Login</h3>
    <div className=''>
    <div className='flex flex-col mt-2 space-y-3'>
    <label htmlFor='txtEmail'>Email</label>
   
    <input type="email" name="" id="txtEmail" placeholder='Abc@gmail.com' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>
    <div className='flex flex-col mt-2 space-y-3'>
    <label htmlFor='txtPassword'>Password</label>
   
    <input type="password" name="" id="txtPassword" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
    </div>
    </div>
    <div className='mt-3 flex justify-around'>
      <div>
        <button className='bg-pink-500 text-white border rounded-lg px-3 py-2 cursor-pointer hover:bg-pink-700'>Login</button>
      </div>
      <div className='mt-3'>
        <p>Not registerd? <span className='text-blue-500 underline cursor-pointer'><Link to={"/signup"}>Signup</Link></span></p>
      </div>
      
    </div>
    </form>
{/*     <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
  </div>
    </div>
    </>
  )
}

export default Login1