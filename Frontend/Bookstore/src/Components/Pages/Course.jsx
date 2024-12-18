import React, { useState } from 'react'
import Footer from '../Footer'
import CourseBody from '../CourseBody'
import Navbar from '../Navbar'

export default function Course() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (menuState) => {
    setIsMenuOpen(menuState);
  };
  return (
    <>
    {/* <Navbar onMenuToggle={handleMenuToggle} />
    <div className={`mt-28 ${isMenuOpen ? 'mt-40' : 'mt-28'} transition-all`}> */}
    <div className=''>
        <CourseBody />
     
      </div>
    </>
  )
}
