import React from "react";
import facemoving from "../assets/facemove.mp4";

function Pagenine() {
  return (
    <div className="h-screen  px-3 py-4 w-screen bg-white">
      <div className=" h-full w-full bg-black items-center  relative rounded-[50px] flex md:justify-between ">
        <div className="md:w-[60%] w-full z-20 md:-z-10 md:ml-16 md:mt-28  h-full flex flex-col justify-center items-center">
          <h1 className="md:text-[13vw] text-9xl  md:leading-0.5 text-white font-[anzo3] text-center ">MODERN</h1>
          <h1 className="md:text-[13vw] text-9xl  text-white font-[anzo3] text-center ">WEBSITE</h1>
          <p className="text-white text-center mt-4 mx-auto w-[60%]">
            TAILORED BRAND INTEGRATION MOBILE-FIRST RESPONSIVE DESIGN
            CONVERSION-OPTIMIZED FUNNEL FULLY-CONFIGURED BACKEND
          </p>
          <button className=" md:mx-auto bg-black border-2 mt-11 md:w-[50%] hover:bg-gray-500   px-6 py-2  rounded-full cursor-pointer text-white">
            DISCOVER MEETING
          </button>

        </div>

       <video className="md:w-full  md:h-full absolute " muted loop autoPlay src={facemoving}></video>
      </div>
    </div>
  );
}

export default Pagenine;
