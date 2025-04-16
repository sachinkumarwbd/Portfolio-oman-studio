import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Pagetwelth() {
    gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".rotate", {
      transform: "rotateX(-90deg)",
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotate",
        // markers:true,
        start: "top 70%",
        end: "top -200%",
        // scrub: 2,
      },
    });
    gsap.from(".line", {
        
        duration: 1,
        width:0,
        stagger: 1,
        
        scrollTrigger: {
          trigger: ".line",
        //   markers:true,
          
          
          width:100,
          
        },
      });

   
        
       
    
  });
  return (
    <div className=" px-3  py-2 w-screen  bg-white">
          <div className=" shadow-gray-700   md:w-full md:px-24 md:py-48 p-5 shadow-lg bg-black  rounded-[50px]  ">
            <div className='  '> 
                <h1 className="text-[12vw]  md:w-[40%] rotate uppercase font-[anzo3] leading-24  text-white ">polka dot</h1>
                <p className="text-xl uppercase font-[anzo1] text-gray-500 ">Monochrome / Tattoo Studio | COMING SOON</p>
                <div className='line md:w-full h-0.5 mt-3 bg-gray-300'></div>
            </div>
        
          
            <div className='md:mt-24 mt-9 '>
                <h1 className="text-[12vw] rotate uppercase font-[anzo3] leading-24 text-white ">hodo-hodo</h1>
                <p className="text-xl uppercase font-[anzo1] text-gray-500 ">Creative Portfolio / Colors</p>
                <div className='line md:w-full h-0.5 mt-3 bg-gray-300'></div>
            </div>
            <div className='md:mt-24 mt-9 '>
                <h1 className="text-[12vw] rotate uppercase font-[anzo3] leading-24 text-white ">fresh haystack</h1>
                <p className="text-xl uppercase font-[anzo1] text-gray-500 ">iT Company / Tech Product</p>
                <div className='line w-full h-0.5 mt-3 bg-gray-300'></div>
            </div>
            <div className=' md:mt-24 mt-9'>
                <h1 className="text-[12vw] rotate uppercase font-[anzo3] leading-24 text-white ">futuristic template</h1>
                <p className="text-xl uppercase font-[anzo1] text-gray-500 ">Modern Business Portfolio  | FOR SALE</p>
                <div className='line w-full h-0.5 mt-3 bg-gray-300'></div>
            </div>
            <div className='md:mt-24 mt-9'>
                <h1 className="text-[12vw] rotate uppercase font-[anzo3] leading-24 text-white ">vfi solution</h1>
                <p className="text-xl uppercase font-[anzo1] text-gray-500 ">T Company / Tech Minimalism</p>
                <div className='line w-full h-0.5 mt-3 bg-gray-300'></div>
            </div>
            <div className='md:mt-24 mt-9'>
                <h1 className="text-[12vw] rotate uppercase font-[anzo3] leading-24 text-white ">v.</h1>
                <p className="text-xl uppercase font-[anzo1] text-gray-500 ">Minimal / Product</p>
                <div className='line w-full h-0.5 mt-3 bg-gray-300'></div>
            </div>
            <div className='md:mt-24 mt-9'>
                <h1 className="text-[12vw] rotate uppercase font-[anzo3] leading-24 text-white ">chumfeeder</h1>
                <p className="text-xl uppercase font-[anzo1] text-gray-500 ">National Security / IT Services / Modern Minimalism</p>
                <div className='line w-full h-0.5 mt-3 bg-gray-300'></div>
            </div>
            <div className='md:mt-24 mt-9'>
                <h1 className="text-[12vw] rotate uppercase font-[anzo3] leading-24 text-white ">tattoo studio</h1>
                <p className="text-xl uppercase font-[anzo1] text-gray-500 ">Prototype</p>
                <div className='line w-full h-0.5 mt-3 bg-gray-300'></div>
            </div>
            <div className='md:mt-24 mt-9'>
                <h1 className="text-[12vw] rotate uppercase font-[anzo3] leading-24 text-white ">floh</h1>
                <p className="text-xl uppercase font-[anzo1] text-gray-500 ">Creative Design / In Progress</p>
                <div className='line w-full h-0.5 mt-3 bg-gray-300'></div>
            </div>
            
            
          </div>
         
        </div>
  )
}

export default Pagetwelth