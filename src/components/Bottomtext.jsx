import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

function Bottomtext() {
  return (
    <div className= ' text-white w-full right-0 absolute bottom-11 items-end px-16 flex justify-between '>
      <div>
        <h1 className='text-3xl sm:text-[2vw] font-sans'>BRAND DESIGN  |  WEBSITE DESIGN</h1>
        <h1 className='sm:text-[1vw] text-gray-400 font-extralight'>FREELANCE</h1>
      </div>
      <div className='space-x-3 '>
        <a href="">< FaInstagram className='text-3xl hover:scale-150 duration-150'  /></a>
        <a href=""><CiLinkedin className='text-3xl hover:scale-150 duration-150' /></a>
        <a href=""><CgMail  className='text-3xl hover:scale-150 duration-150' />
        </a>
      </div>
      </div>
  )
}

export default Bottomtext