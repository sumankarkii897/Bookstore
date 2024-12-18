import React from 'react'
import listData from '../data/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

export default function FreeBook() {
   /*  console.log(listData); */
    
    const filteredFreeCategory=listData.filter((el,ind)=>el.category==="free")
  /*   console.log(filteredFreeCategory); */
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    
  return (
    <>
 <div className="container">
   <div className='space-y-1'>
    <h2 className='text-xl font-semibold'>Free Offered Courses</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dignissimos aliquid vel optio, soluta accusantium eos quasi quam, id temporibus laudantium repellendus. Rem.</p>
   </div>
    <div className='slider-container'>
      
    <Slider {...settings}>
      {
        filteredFreeCategory.map((items)=>{
         /*  <Cards/> */
           return <Cards items={items} key={items.id}/>
        })
      }
    </Slider>
  
    </div>
   
   </div>
    </>
  )
}
