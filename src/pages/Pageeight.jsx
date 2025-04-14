import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import mannack from "../assets/mannack.avif";
import lady from "../assets/ladyblack.avif";
import dsa from "../assets/DSA-LOGO.avif";
import minimal from "../assets/MINIMAL-CARD.avif";


function Pageeight() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    
    gsap.from(".line2", {
        
        duration: 3,
        width:0,
        stagger: 1,
        
        scrollTrigger: {
          trigger: ".line2",
        //   markers:true,
          
          
          width:100,
          
        },
      });

   
        
       
    
  });
  return (
    <div className="md:h-screen px-3  py-2 w-screen  bg-white">
      <div className="relative bg-black  overflow-hidden w-full h-full  items-center  rounded-[50px] flex justify-between ">
        <img className="absolute hidden md:block w-full mb-56  " src={mannack} alt="" />
        <img className="absolute w-[3-vw] mt-60 rounded-full  md:hidden " src={lady} alt="" />
        
       


        <div className="md:w-[60%] mt-16 w-full h-full z-20 md:p-24 font-sans justify-center flex flex-col">
          <h1 className="md:text-[12vw] hidden md:block  text-8xl mx-auto font-[anzo3] text-white">
            [ MINIMAL ]
          </h1>
          <h1 className="md:text-[12vw] md:hidden   text-8xl px-4  font-[anzo3] text-white">
            MINIMAL
          </h1>

          <h3 className="text-2xl mx-auto  ml-4  md:mt-8 md:mb-0 text-white">
            EFFORTLESS | BOLD | ICONIC
          </h3>
          <div className="md:hidden line2 w-[90%] h-0.5 mt-3 items-center ml-4 bg-white mb-90"></div>
          

          <p className="md:text-gray-500  text-white mt-48 font-extralight  W-[40%]  text-center mx-auto  ">
            Minimalism isn’t emptiness - it’s precision. Every line, every
            space, every interaction is intentional. The brands that lead the
            world aren’t cluttered with excess - they radiate confidence through
            clarity.
          </p>
          <button className=" mx-auto bg-black border-2 mt-7 md:mt-24 mb-4 w-[80%] md:w-[50%] hover:bg-gray-500   px-6 py-2  rounded-full cursor-pointer text-white">
            BRAND BOOK
          </button>
        </div>
        
      </div>
     
    </div>
  );
}

export default Pageeight;
