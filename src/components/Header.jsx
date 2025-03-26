import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../assets/logo.png";



function Header() {
  return (

    <>
    
    
      <div className="fixed z-50  w-full flex px-16 py-12 space-x-4 items-center justify-between ">
      <img className="w-16 h-16 rounded-full cursor-pointer " src={logo} alt="" />

      <div className="flex items-center   space-x-4">
      <button className=" bg-black border-2  px-6 py-2 hover:bg-gray-500  rounded-full cursor-pointer text-white">
        Hire Me
      </button>
      <CgMenuGridO className="text-gray-600 text-4xl" />
      </div>
     
    </div>

    </>
  
  );
}

export default Header;
