import React from 'react'


function Movingtext(props) {
  return (
   <>
     <div  id="pageone"  className="text-white px-20   py-44 ">
            <div id="textMove" ref={props.abc} className="">
              <h1 className="text-8xl sm:text-[5vw] font-[anzo3]">
                
                I AM <span className="text-gray-700 sm:font-[anzo2] font-[anzo3]"> DARK MODE</span>
              </h1>
              <h1 className="font-[Bebas] text-7xl font-extrabold sm:text-[10.2vw] sm:tracking-widest  sm:leading-24">
                DESIGNER
              </h1>
              <h1 className="text-5xl hidden sm:block font-[anzo3] sm:text-[5vw] sm:leading-20">HIRE ME</h1>
            </div>
          </div>
   </>
  )
}

export default Movingtext