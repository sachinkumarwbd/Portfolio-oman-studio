import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../assets/logo.png";



function Header() {

 

  

  return (

    <>
    
    
      <div className="fixed z-50  w-full flex md:px-16 md:py-12 p-6 space-x-4 items-center justify-between ">
      <img className="sm:w-16 sm:h-16 w-9 h-9 rounded-full cursor-pointer " src={logo} alt="" />

      <div className="flex items-center   space-x-4">
      <button className=" bg-black hidden lg:block border-2  px-6 py-2 hover:bg-gray-500  rounded-full cursor-pointer text-white">
        Hire Me
      </button>
      <CgMenuGridO className="text-gray-600 text-4xl cursor-pointer " />
      </div>
     
    </div>

    </>
  
  );
}

export default Header;
