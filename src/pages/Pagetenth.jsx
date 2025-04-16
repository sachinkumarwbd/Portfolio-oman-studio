import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import womanmove from "../assets/womanmove.mp4";
import mask from "../assets/mask.mp4";

function Pagetenth() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    
    gsap.from(".line3", {
        
        duration: 3,
        width:0,
        stagger: 1,
        
        scrollTrigger: {
          trigger: ".line3",
        //   markers:true,
          
          
          width:100,
          
        },
      });

   
        
       
    
  });
  
  return (
    <>
      <div className="md:h-screen z-40 px-3 py-4 w-screen bg-white">
        <div className=" h-full w-full bg-black relative shadow-gray-700 shadow-lg text-center items-center  rounded-[50px]">
          <video
            loop
            muted
            autoPlay
            className="w-full h-full absolute hidden md:block"
            src={womanmove}
          ></video>
          <video
            loop
            muted
            autoPlay
            className=" md:hidden mt-28 rounded-full h-full absolute "
            src={mask}
          ></video>

          <div className="relative md:py-28 py-11 px-7 w-full flex flex-col items-start md:block   md:w-[50%]  mr-28 ">
            <h1 className="md:text-[13vw] text-6xl    text-white font-[anzo3] text-center ">
              ELITE
            </h1>
            <h1 className="md:text-[13vw] text-6xl  text-white font-[anzo3] text-center ">
              LEGACY
            </h1>
            
            <p className="text-white  w-full text-start md:mb-0 md:text-center  mx-auto md:w-[40%] uppercase">
              Art Direction High-End Web Presence CONTINUES Brand Evolution
            </p>
            <div className="md:hidden w-full h-0.5 mt-3 bg-white"></div>
            <button className="w-full  flex justify-center items-center   md:w-[40%] bg-black border-2 md:mt-11 sm:mt-80 mt-[60vh]  mx-auto hover:bg-gray-500   px-6 py-2  rounded-full cursor-pointer text-white">
              SHAPE THE FUTURE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagetenth;
