import React from "react";
import videospace from "../assets/video-space.mp4";
import moving from "../assets/moveing.mp4";
import movel from "../assets/movel.mp4";
import mover from "../assets/mover.mp4";

function Pageeleven() {
  return (
    <>
      <div className="h-screen  px-3 py-4 w-screen   bg-white">
        <div className=" h-full  bg-black relative    rounded-[50px]">
          <video
            className="w-full h-full relative items-center"
            muted
            loop
            autoPlay
            src={videospace}
          ></video>
          <div className="absolute grid grid-cols-3  gap-24 m-8 top-0 p-6 justify-between items-center">
            <div className="border-[15px] flex flex-col items-center justify-center rounded-[50px] p-5 w-full h-full border-white">
              <video
                className="w-[60vw] "
                muted
                loop
                autoPlay
                src={movel}
              ></video>
              <h1 className="text-white uppercase text-[10vw] font-[anzo3]">shop</h1>
              <p className="text-white px-11 text-center text-xl">TEMPLATES ANIMATED ELEMENTS CUSTOM EFFECT CODES</p>
              <button className="   bg-black border-4 mt-11 mx-auto hover:bg-gray-500   px-6 py-2  rounded-full cursor-pointer text-white">
              CHECK LATEST TEMPLATE
            </button>
            </div>
            <video
              className="rounded-full  "
              muted
              loop
              autoPlay
              src={moving}
            ></video>
            <div className="border-[15px] flex flex-col items-center justify-center rounded-[50px] p-5 w-full h-full border-white">
            <video
                className="w-[60vw] "
                muted
                loop
                autoPlay
                src={mover}
              ></video>
              <h1 className="text-white uppercase text-[10vw] font-[anzo3]">blog</h1>
              <p className="text-white px-11 text-center text-xl">TEMPLATES ANIMATED ELEMENTS CUSTOM EFFECT CODES</p>
              <button className="   bg-black border-4 mt-11 mx-auto hover:bg-gray-500   px-6 py-2  rounded-full cursor-pointer text-white">
              WATCH LATEST BLOG
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pageeleven;
