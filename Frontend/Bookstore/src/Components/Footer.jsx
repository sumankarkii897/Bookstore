import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
export default function Footer() {
  return (
   <>
   <div className='bg-base-300 dark:bg-slate-600 dark:text-white space-y-2'>
    <div className=''>
        <ul className='flex gap-4 justify-center py-5'>
            <li>About us</li>
            <li> Contact</li>
            <li>Jobs</li>
            <li>Press Kit</li>
        </ul>
    </div>
    <div>
        <ul  className='flex gap-4 justify-center '>
            <li><FaTwitter /></li>
            <li><SiInstagram /></li>
            <li><FaFacebookF /></li>
        </ul>
    </div>
    <div>
    <p className='text-center text-xl'>Copyright &copy; 2024 -All right reserved by ACME industries Ltd</p>
    </div>
   </div>
   </>
  )
}
