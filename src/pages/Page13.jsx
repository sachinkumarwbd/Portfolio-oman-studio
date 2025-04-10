import React from 'react'
import moonround from '../assets/moonround.mp4'

function Page13() {
  return (
      <>
          <div className="h-screen px-3 py-4 w-screen   bg-white">
            <div className=" h-full w-full  relative bg-black   rounded-[50px]">
                <video className='md:w-full hidden md:block mt-32 md:mt-0   md:h-full absolute' loop muted autoPlay src={moonround}></video>
            <div className='absolute w-full h-full mt-36 md:p-64 text-center'>
                <h1 className='text-white flex justify-start items-start px-5 md:px-0 flex-col  md:block md:text-[14vw] text-9xl w-full  font-[anzo3]'><span>STEP</span> <span>INTO</span> <span>THE</span> <span>FUTURE.</span></h1>
                <button className="hidden md:block mx-auto bg-black border-2 mt-4 md:w-[50%] hover:bg-gray-500  uppercase mb-4  px-6 py-2  rounded-full cursor-pointer text-white">
                create your legacy    </button>
                <p className='text-gray-500  px-5 md:px-0 flex items-start md:items-center md:block text-2xl'>© oman studio 2025 </p>
            </div>
             
            </div>
          </div>
        </>
  )
}

export default Page13