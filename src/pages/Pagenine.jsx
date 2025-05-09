import React from "react";
import facemoving from "../assets/facemove.mp4";

function Pagenine() {
  return (
    <div className="md:h-screen  px-3 py-4 w-screen bg-white">
      <div className=" h-full w-full bg-black items-center shadow-gray-700 shadow-lg  relative  rounded-[50px] flex md:justify-between ">
        <div className="md:w-[60%] w-full items-start md:ml-16 md:mt-28 z-29  h-full flex flex-col justify-center md:items-center">
          <h1 className="md:text-[13vw] mt-11 text-6xl mr-52 md:mr-0 md:leading-24  text-white font-[anzo3] ml-5 text-center ">MODERN</h1>
          <h1 className="md:text-[13vw] text-6xl mr-52 md:mr-0  md:mb-0 text-white font-[anzo3] text-center ml-5">WEBSITE</h1>
          <p className="text-white  md:text-center ml-5   md:mt-16  mx-auto w-[70%]">
            TAILORED BRAND INTEGRATION MOBILE-FIRST RESPONSIVE DESIGN
            CONVERSION-OPTIMIZED FUNNEL FULLY-CONFIGURED BACKEND
          </p>
          <div className="w-[90%] ml-5  h-0.5 mt-4 bg-white md:hidden"></div>
          <button className=" md:mx-auto w-[80%] ml-11 mb-4 mt-96 bg-black border-2 md:mt-11 md:w-full hover:bg-gray-500   px-6 py-2  rounded-full cursor-pointer text-white">
            DISCOVER MEETING
          </button>

        </div>

       <video className="md:w-full mt-80 w-[85%]  ml-10 md:mr-11  md:mt-0  md:h-full absolute md:relative " muted loop autoPlay src={facemoving}></video>
      </div>
    </div>
  );
}

export default Pagenine;
