import React from 'react'

export default function Cards({items}) {
/*   console.log(items); */
  
  return (
   <>
   <div className='group mt-4 my-3 p-3'>
   <div className="card bg-base-100 w-76 lg:w-96 border shadow-xl gap-4 dark:text-white dark:bg-slate-900 h-[600px] cursor-pointer group-hover:scale-105 duration-300">
   <div className='flex justify-center items-center'>
   <figure className="w-72 md:80 h-96 ">
  <img src={items.image} alt="Shoe" className="object-contain" />
</figure>
   </div>

   <div className='pl-3 space-y-2'>
   <div className='flex gap-2 '>
        <h2 className='font-semibold text-xl'>{items.name}</h2>
        <p className='bg-pink-500 text-white text-sm px-1 py-1 rounded-lg'>{items.category}</p>
    </div>
    <div>
      <p>{items.title}</p>
   
    </div>
    <div className='flex justify-between py-2'>
      <div className='border rounded-lg p-1'>${items.price || 0}</div>
      <div className='border rounded-full mr-1 px-2 py-1 hover:bg-pink-500 duration-200 hover:text-white cursor-pointer'>{items.buy || "BuyNow" }</div>
    </div>
   </div>
   </div>
   </div>
   </>
  )
}

