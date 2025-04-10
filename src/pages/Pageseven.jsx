import React from "react";
import bg from "../assets/vr copy.avif";
import vr from "../assets/vright.avif";
import laptop from "../assets/laptop.avif";
import logo from "../assets/LOGO-DTA.avif";
import mobile from "../assets/MOBILE.avif";
function Pageseven() {
  return (
    <div className="md:h-screen  md:relative w-screen bg-white px-3 py-2">
      <div className="overflow-hidden  relative md:h-full rounded-[50px]">
        <img
          className="md:w-[54vw] hidden md:block  md:h-full md:ml-[25vw] absolute mt-[80vh] md:mt-0 bg-cover"
          src={bg}
          alt=""
        />
        <div
          
          className="bgcolor   text-white md:flex md:py-40   items-center space-x-40 px-6 overflow-hidden  relative w-full md:h-full rounded-[50px]"
        >
          <div className="md:w-[60%]  w-full md:h-full md:text-center md:justify-items-center">
            <h1 className="md:text-[12vw] mb-11 md:mb-0 hidden md:block text-7xl font-[anzo3]">[ MODERN ]</h1>
            <h1 className="  md:mb-0 md:hidden  mt-24 text-8xl font-[anzo3]">MODERN</h1>
            <h3 className="md:text-2xl  text-start md:text-center md:w-[60%]  w-full">DESIGNED FOR NOW | BUILD FOR future</h3>
            <div className="md:hidden w-full h-0.5 bg-white"></div>
            <img className="md:hidden mt-96" src={mobile} alt="" />
            
            <img className="md:hidden mt-11" src={laptop} alt="" />
            <img className="md:hidden" src={logo} alt="" />
            <p className="md:text-lg w-full  mt-3 md:w-[60%] text-gray-200 md:mb-24 md:text-gray-500">
              The digital world moves fast - your brand should move even faster.
              True innovation isn’t about keeping up; it’s about setting the
              pace. Design that feels effortless yet wields powerful influence.
            </p>
            <button className=" mt-11 md:mt-0 bg-black border-2  mb-4 w-full  hover:bg-gray-500   px-11 py-2  rounded-full cursor-pointer text-white">
            THE WORK
          </button>
            
          </div>
          <div className="w-[40%]">
          <img className="hidden md:block" src={vr} alt="" />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Pageseven;
