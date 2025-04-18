import React from 'react'
import girl from '../assets/g.png'
import v from '../assets/v.avif'
import fly from '../assets/fly.avif'
import black from '../assets/BLACK-WOMAN.avif'
import apple from '../assets/MINIMAL-APPLE.avif'

function Pagefive() {
  return (
    <div className='md:h-screen px-3 py-2 mt-11 w-screen bg-white'>
      
      <div className='md:relative shadow-gray-700 shadow-lg md:h-full w-full bg-black items-center  rounded-[50px] flex justify-between flex-col md:flex-row '> 
       
      <img className='absolute hidden md:block  ml-[25vw] w-[700px] mb-10 ' src={girl} alt="" />
      

        <div className='w-full md:w-[50%] md:items-center items-start text-center z-2 md:p-24 font-sans justify-center flex flex-col'>
          <h1 className='hidden md:block text-8xl md:text-9xl py-12  md:text-center mx-auto md:mb-20 font-[anzo3] text-white'>
          [ ELEGANT ]</h1>
          <h1 className='md:hidden text-8xl mt-11 -mb-10 py-12 ml-5 md:text-center  font-[anzo3] text-white'>
          ELEGANT</h1>

          <h3 className='md:text-2xl ml-5 text-start text-xl mx-auto  md:mt-8 text-white'>REFINED | SOPHISTICATED | IMPACTFUL</h3>
          <div className='md:hidden w-[90%] h-0.5 bg-gray-200 mx-auto mt-3.5'></div>

          <img className='md:absolute w-[3-vw] mt-11 rounded-full border-zinc-700  md:hidden ' src={black} alt="" />
          <div className='items-center justify-center flex flex-col'>
          <img className='md:absolute md:hidden w-[90%] mt-44   ' src={apple} alt="" />
      <img className=' md:hidden md:relative w-full mt-11 sm:w-[27vw] ' src={v} alt="" />
      <img className=' md:hidden w-[90%]  mt-11 ' src={fly} alt="" />
          </div>
      

          <p className='text-gray-500 mt-8 w-60 font-extrabold text-center mx-auto  '>Elegance isn’t just style - it’s substance, the perfect balance of form and function. The most influential brands don’t follow trends - they define them through presence that feels both effortless and commanding.</p>
          <button className=" w-[80%] mx-auto bg-black border-2 mt-4 md::w-[50%] hover:bg-gray-500   px-6 py-2  rounded-full cursor-pointer text-white">
Case Study      </button>

        </div>

        <div className='md:w-[50%] w-full py-4 rounded-[50px] text-center md:flex justify-center items-center flex-col'>
          <img className='hidden md:block md:relative w-full  sm:w-[27vw] ' src={v} alt="" />
          <img className=' hidden md:block md:absolute    w-[20vw] md:mt-80 md:mr-56 ' src={fly} alt="" />


        </div>
        

      </div>

    </div>
  )
}

export default Pagefive