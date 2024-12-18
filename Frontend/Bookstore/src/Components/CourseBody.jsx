import React from 'react'
import listData from "../data/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
export default function CourseBody() {
  return (
    <>
  <div className='container '>
  <div className='space-y-4'>
        <p className='md:text-2xl text-xl text-center'>We're delighted to have you <span className='text-pink-500'>here :)</span></p>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere architecto consequuntur nobis eum mollitia pariatur atque autem vero! Dolores quisquam consequuntur pariatur excepturi quasi in? Nulla, veritatis doloremque? Aliquid dolore voluptate provident fugiat!</p>
        <Link to='/'>
        <div className='flex items-center justify-center'>
        <button className='px-1 py-1 bg-pink-500 rounded-lg text-white hover:cursor-pointer hover:bg-pink-700 duration-300 '>Back</button>
        </div>
        </Link>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5  gap-1 md:gap-3'>
          {

listData.map((items)=>{
  return (
    <Cards items={items} key={items.id}/>
  )
})
          }
        </div>
    </div>
  </div>
    
    </>
  )
}
