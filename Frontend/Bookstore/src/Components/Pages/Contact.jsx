import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Contact() {
  return (
   <>
  <div className='container'>
<form action="
" className=' flex justify-center items-center  my-10 md:my-24'>
<div className='md:w-[27vw] w-[100vw] mt-5 space-y-8 md:h-[50vh] h-[89vh] flex justify-center items-center'>
<div className='flex flex-col md:mt-3 mt-1 pl-2  space-y-6' >
  <h1 className='text-xl'>Contact Us</h1>
  <label htmlFor='name'>Name</label>
  <input type="text" name="" id="name" placeholder='Enter Your Name' className='md:w-80 pl-1 w-72 px-3 py-1 border rounded-md outline-none' />
  <label htmlFor='email'>Email</label>
  <input type="email" name="" id="email" placeholder='Enter Your Email'  className='md:w-80 pl-1 w-72px-3 py-1 border rounded-md outline-none'/>
  <label htmlFor='password'>Message</label>
  <input type="text" name="" id="password" placeholder='Type your message'  className='md:w-80 pl-1 w-72px-3 py-1 border rounded-md outline-none'/>


  <button className='bg-blue-500 text-white w-20 px-2 py-1 rounded-md'>Submit</button>

</div>
</div>

</form>

  </div>
   
   </>
  )
}
