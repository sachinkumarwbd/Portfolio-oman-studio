import React from "react";
import movingman from "../assets/movingman.mp4"
import mobilemover from "../assets/mobilemove.mp4"




function Pagesix() {
  return (

    <>
     
     <div className=" h-screen    md:w-screen md:relative">
     <video className="md:w-full w-96 hidden md:block  md:overflow-hidden md:absolute " muted loop autoPlay src={movingman}></video>


     <video className="md:hidden  w-full h-full   absolute " muted loop autoPlay src={mobilemover}></video>
     
     
      <div className="md:border-[1vw] h-[90%] border-[2vw]   w-[92%] absolute md:w-[97%] ml-3 md:h-[94%] mt-11 md:mt-5 md:px-5 border-white md:rounded-4xl rounded-[50px]  ">
      <div className="opacity-65 w-full h-full flex md:text-[18vw] text-[30vw] mt-48 md:mt-0 md:py-28 font-[anzo3] md:leading-64 items-center flex-col text-white">
      <h1 className=" ">THE</h1>
      <h1 className="">FOCUS</h1>
      </div>
      </div>
     
   

    
    </div>
    
    </>
   
  );
}

export default Pagesix;
