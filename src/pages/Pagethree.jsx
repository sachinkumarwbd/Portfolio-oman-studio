import React from "react";
import video from "../assets/video-space.mp4";
import moon from "../assets/moon.mp4";
import earth from "../assets/earth2.mp4";
function Pagethree() {
  return (
    <div className="h-screen w-screen bg-white  px-3 py-2 ">
      <div className=" relative w-full  shadow-gray-700 shadow-lg h-full flex   rounded-[50px]  ">
        <div className=" absolute   justify-between   z-20 text-white py-16 px-16  md:p-24 font-serif  flex ">
          <div className=" md:w-[50%] w-full h-full text-center items-center   flex-col">
            <h1 className="md:text-[13vw] text-[40vw] font-[anzo3]  ">ABOUT</h1>
            <h4 className="  ">
              INTUITIVE APPROACH | FUTURE-FOCUSED
            </h4>
            <h4 className="">STRATEGY | UNCOMPROMISING DISCIPLINE</h4>
            <p className="text-gray-600 w-full mt-6   md:w-[70%] text-center">
              Anyone can create. Some have the talent to design. But who can
              capture and translate your vision into a lasting legacy? True
              design is more than aesthetics; web design is a complete extension
              of your brand - a seamless blend of visual identity .
            </p>
            <button className=" w-full md:w-[50%] mt-1.5 bg-black border-2  px-16 py-1  rounded-full cursor-pointer text-white hover:bg-gray-500">
              Explore
            </button>
          </div>

          <div className=" md:w-[50%] h-full hidden md:block mt-28 relativejustify-items-center  ">
            <video
              className="md:w-48 w-full h-full md:ml-80  absolute rounded-full "
              playsInline
              loop
              muted
              autoPlay
              src={moon}
            ></video>

            <video 
            className="md:w-[30vw] hidden md:block w-[15vw]  absolute rounded-full" 
            playsInline 
            loop
             muted 
             autoPlay
              src={earth}>
              </video>
          </div>
        </div>

        <video
          playsInline
          loop
          muted
          autoPlay
          className="rounded-[50px] w-full h-full object-cover "
          src={video}
        ></video>
      </div>
    </div>
  );
}

export default Pagethree;
