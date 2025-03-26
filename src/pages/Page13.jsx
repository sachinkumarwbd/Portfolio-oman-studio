import React from 'react'
import moonround from '../assets/moonround.mp4'

function Page13() {
  return (
      <>
          <div className="h-screen px-3 py-4 w-screen   bg-white">
            <div className=" h-full w-full  relative bg-black   rounded-[50px]">
                <video className='w-full h-full absolute' loop muted autoPlay src={moonround}></video>
            <div className='absolute p-64 text-center'>
                <h1 className='text-white text-[14vw] w-full  font-[anzo3]'>STEP INTO THE FUTURE.</h1>
                <button className=" mx-auto bg-black border-2 mt-4 w-[50%] hover:bg-gray-500  uppercase mb-4  px-6 py-2  rounded-full cursor-pointer text-white">
                create your legacy    </button>
                <p className='text-gray-500 text-2xl'>© oman studio 2025 </p>
            </div>
             
            </div>
          </div>
        </>
  )
}

export default Page13