import React from "react";
import movingman from "../assets/movingman.mp4"




function Pagesix() {
  return (

    <>
     
     <div className="h-screen w-screen relative">
     <video className="absolute" muted loop autoPlay src={movingman}></video>
     
     
      <div className="border-[1vw] absolute w-[98%] ml-5 h-[96%] mt-5 border-white rounded-4xl  ">
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
