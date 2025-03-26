import React from "react";
import mannack from "../assets/mannack.avif";


function Pageeight() {
  return (
    <div className="h-screen px-3  py-2 w-screen  bg-white">
      <div className="relative  h-full overflow-hidden w-full  items-center  rounded-[50px] flex justify-between ">
        <img className="absolute w-full mb-40" src={mannack} alt="" />
        <div className="w-[60%]   z-20 p-24 font-sans justify-center flex flex-col">
          <h1 className="text-[12vw] mx-auto font-[anzo3] text-white">
            [ MINIMAL ]
          </h1>

          <h3 className="text-2xl mx-auto  mt-8 text-white">
            EFFORTLESS | BOLD | ICONIC
          </h3>

          <p className="text-gray-500 mt-8  W-[50%] font-extrabold text-center mx-auto  ">
            Minimalism isn’t emptiness - it’s precision. Every line, every
            space, every interaction is intentional. The brands that lead the
            world aren’t cluttered with excess - they radiate confidence through
            clarity.
          </p>
          <button className=" mx-auto bg-black border-2 mt-4 w-[50%] hover:bg-gray-500   px-6 py-2  rounded-full cursor-pointer text-white">
            BRAND BOOK
          </button>
        </div>
        
      </div>
     
    </div>
  );
}

export default Pageeight;
