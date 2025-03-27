import React from "react";
import movingman from "../assets/movingman.mp4"




function Pagesix() {
  return (

    <>
     
     <div className="h-screen px-3 py-2  w-screen relative">
     <video className="absolute hidden md:block" muted loop autoPlay src={movingman}></video>
     
     
      <div className="md:border-[1vw]  bg-black w-full  absolute md:w-[98%] md:ml-5 md:h-[96%] md:mt-5 border-white md:rounded-4xl rounded-[50px]  ">
      <div className="opacity-65 w-full h-full flex text-[18vw] py-28 font-[anzo3] leading-64 items-center flex-col text-white">
      <h1 className=" ">THE</h1>
      <h1 className="">FOCUS</h1>
      </div>
      </div>
     
   

    
    </div>
    
    </>
   
  );
}

export default Pagesix;
