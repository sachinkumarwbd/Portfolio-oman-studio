import React from "react";
import bg from "../assets/vr copy.avif";
import vr from "../assets/vright.avif";
function Pageseven() {
  return (
    <div className="h-screen  relative  bg-white px-3 py-2">
      <div className="overflow-hidden  relative w-full h-full rounded-[50px]">
        <img
          className="w-[54vw] ml-[25vw] absolute  bg-cover"
          src={bg}
          alt=""
        />
        <div
          
          className="bgcolor text-white flex  items-center space-x-40 px-14 overflow-hidden relative w-full h-full rounded-[50px]"
        >
          <div className="w-[60%] justify-items-center">
            <h1 className="text-[12vw]  font-[anzo3]">[ MODERN ]</h1>
            <h3 className="text-2xl">DESIGNED FOR NOW | BUILD FOR future</h3>
            <p className="text-lg mb-3 mt-3 w-[60%] text-gray-500">
              The digital world moves fast - your brand should move even faster.
              True innovation isn’t about keeping up; it’s about setting the
              pace. Design that feels effortless yet wields powerful influence.
            </p>
            <button className=" bg-black border-2 w-full  px-14 py-2 hover:bg-gray-500  rounded-full cursor-pointer text-white">
              THE WORK
            </button>
            
          </div>
          <div className="w-[40%]">
          <img className="" src={vr} alt="" />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Pageseven;
