import React from "react";
import video from "../assets/video-space.mp4";
import moon from "../assets/moon.mp4";
import earth from "../assets/earth2.mp4";
function Pagethree() {
  return (
    <div className=" h-screen bg-white  px-3 py-2 ">
      <div className=" relative w-full  shadow-gray-700 h-full flex   rounded-[50px] shadow-lg ">
        <div className=" absolute   justify-between   z-20 text-white  p-24 font-serif  flex ">
          <div className=" w-[50%] items-center  flex flex-col">
            <h1 className="text-[13vw] font-[anzo3]  ">ABOUT</h1>
            <h4 className="text-1xl ">
              INTUITIVE APPROACH | FUTURE-FOCUSED
            </h4>
            <h4 className="text-1xl">STRATEGY | UNCOMPROMISING DISCIPLINE</h4>
            <p className="text-gray-600 mt-2 w-[70%] text-center">
              Anyone can create. Some have the talent to design. But who can
              capture and translate your vision into a lasting legacy? True
              design is more than aesthetics; web design is a complete extension
              of your brand - a seamless blend of visual identity, your story
              and messaging, your goals and strategy working together to create
              a powerful digital experience. It’s not a separate piece - it’s
              your brand in action.
            </p>
            <button className="  bg-black border-2 mt-8 px-16 py-1  rounded-full cursor-pointer text-white hover:bg-gray-500">
              Explore
            </button>
          </div>

          <div className=" w-[50%] mt-28 relative ml-24 justify-items-center  ">
            <video
              className="w-48 ml-80 absolute rounded-full "
              playsInline
              loop
              muted
              autoPlay
              src={moon}
            ></video>

            <video 
            className="w-[30vw]  absolute rounded-full" 
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
