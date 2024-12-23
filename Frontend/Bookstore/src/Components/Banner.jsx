import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import Book from "../assets/Book.jpg"
import FreeBook from './FreeBook';
export default function Banner() {
  return (
    <>
   <div className='py-3  max-w-screen-2xl'>
    <div className='container'>
<div className=' grid md:grid-cols-[50%_50%] mt-[70px] md:mt-20'>
<div className='order-2 md:order-1'>
<div className='space-y-6'>
    <h1 className='md:text-4xl font-bold'>Hello,welcome here to learn something <span className='text-pink-500'>new everyday!</span></h1>
    <p className='md:text-xl text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus natus fuga voluptate iusto tempora harum iste quasi maxime, veritatis rem vero corporis optio dolore earum rerum sequi aliquam modi in, magni accusamus voluptatem excepturi!</p>
<div className=' px-3 py-2 relative '>
<input type="email" name="" id="" placeholder='Enter your email to Login' className='px-7 w-full border py-2' />
<span className='absolute top-2 left-4 py-2  text-xl'>
<MdOutlineMail />
</span>
</div>
<div>
    <button className='bg-pink-500 border rounded-lg px-3 py-3 cursor-pointer'>Get Started</button>
</div>
</div>
</div>
<div className='order-1 md:order-2 '>
    <div className={``}>
        <img src={Book} alt="Book"  className='w-92 h-92 mt-auto'/>
    </div>
</div>
</div>

 </div>
 
   </div>
 
    </>
  )
}
