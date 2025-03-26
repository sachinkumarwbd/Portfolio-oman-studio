import React from "react";
import womanmove from "../assets/womanmove.mp4";

function Pagetenth() {
  return (
    <>
      <div className="h-screen z-40 px-3 py-4 w-screen bg-white">
        <div className=" h-full w-full bg-black relative  items-center  rounded-[50px]">
          <video
            loop
            muted
            autoPlay
            className="w-full h-full absolute"
            src={womanmove}
          ></video>

          <div className="relative py-44 w-[50%]  mr-28 ">
            <h1 className="text-[13vw]  leading-0.5 text-white font-[anzo3] text-center ">
              ELITE
            </h1>
            <h1 className="text-[13vw] text-white font-[anzo3] text-center ">
              LEGACY
            </h1>
            <p className="text-white text-center mt-4 mx-auto w-[40%] uppercase">
              Art Direction High-End Web Presence CONTINUES Brand Evolution
            </p>
            <button className=" flex justify-center items-center w-[40%] bg-black border-2 mt-11 mx-auto hover:bg-gray-500   px-6 py-2  rounded-full cursor-pointer text-white">
              SHAPE THE FUTURE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagetenth;
