import React from 'react'
import {FaShoppingBag } from "react-icons/fa";
import bannerImg from "/Images/bannerImg.png"

function Banner() {
  return (
    <div className='bg-slate-100 py-12 xl:px-28 px-4'>
      <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
         {/* img div */}
         <div className='md:w-1/2'>
        <img src={bannerImg} alt="" />
           </div>
        
        <div className='md:w-1/2'>
        <h1 className='text-5xl font-light md-5'>Collections</h1>
        <p className='text-xl mb-7 mt-4 '>You can explore ans shop many differnt collection
        from various barands here.</p>
      <button className='bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'>
            <FaShoppingBag className='inline-flex'/>Shop Now</button>

        </div>
       

        
      </div>
    </div>
  )
}

export default Banner