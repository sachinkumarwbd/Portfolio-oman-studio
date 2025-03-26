import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

function Bottomtext() {
  return (
    <div className= ' text-white w-full right-0 absolute bottom-11 items-end px-16 flex justify-between '>
      <div>
        <h1 className='text-[2vw] font-sans'>BRAND DESIGN  |  WEBSITE DESIGN</h1>
        <h1 className='text-[1vw] text-gray-400 font-extralight'>FREELANCE</h1>
      </div>
      <div className='space-x-3'>
        <a href="">< FaInstagram className='text-3xl'  /></a>
        <a href=""><CiLinkedin className='text-3xl' /></a>
        <a href=""><CgMail  className='text-3xl' />
        </a>
      </div>
      </div>
  )
}

export default Bottomtext