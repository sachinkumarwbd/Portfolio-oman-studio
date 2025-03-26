import React from 'react'


function Movingtext(props) {
  return (
   <>
     <div  id="pageone"  className="text-white px-20   py-44 ">
            <div id="textMove" ref={props.abc} className="">
              <h1 className="text-[5vw]">
                
                I AM <span className="text-gray-700"> DARK MODE</span>
              </h1>
              <h1 className="font-[Bebas] font-extrabold text-[10.2vw] tracking-widest  leading-24">
                DESIGNER
              </h1>
              <h1 className="text-[5vw] leading-20">HIRE ME</h1>
            </div>
          </div>
   </>
  )
}

export default Movingtext