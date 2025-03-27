import React from 'react'
import girl from '../assets/g.png'
import v from '../assets/v.avif'
import fly from '../assets/fly.avif'

function Pagefive() {
  return (
    <div className='h-screen px-3 py-2 w-screen bg-white'>
      
      <div className='relative   h-full w-full bg-black items-center  rounded-[50px] flex justify-between '> 
       
      <img className='absolute hidden md:block ml-[25vw] w-[700px] mb-10 ' src={girl} alt="" />
        <div className='w-full md:w-[50%] text-center z-2 p-24 font-sans justify-center flex flex-col'>
          <h1 className='text-7xl md:text-9xl text-center mx-auto mb-20 font-[anzo3] text-white'>
          [ ELEGANT ]</h1>

          <h3 className='text-2xl mx-auto  mt-8 text-white'>REFINED | SOPHISTICATED | IMPACTFUL</h3>

          <p className='text-gray-500 mt-8 w-60 font-extrabold text-center mx-auto  '>Elegance isn’t just style - it’s substance, the perfect balance of form and function. The most influential brands don’t follow trends - they define them through presence that feels both effortless and commanding.</p>
          <button className="w-full mx-auto bg-black border-2 mt-4 sm:w-[50%] hover:bg-gray-500   px-6 py-2  rounded-full cursor-pointer text-white">
Case Study      </button>

        </div>

        <div className='md:w-[50%] py-4 rounded-[50px] flex justify-center items-center flex-col'>
          <img className='hidden relative  sm:w-[27vw] md:ml-72 ' src={v} alt="" />
          <img className='hidden absolute w-[20vw] mt-80 mr-28 ' src={fly} alt="" />


        </div>
        

      </div>

    </div>
  )
}

export default Pagefive