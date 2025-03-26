import React, { useRef, useState } from "react";
import Movingtext from "../components/Movingtext.jsx";
import Bottomtext from "../components/Bottomtext.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function Pageone() {
  const textRef = useRef(null);
  const [xval, setxval] = useState(0);
  const [yval, setyval] = useState(0);

  const mouseMove = (e) => {
    // console.log(e.clientX, e.clientY);

    setxval(
      (e.clientX -
        textRef.current.getBoundingClientRect().x -
        textRef.current.getBoundingClientRect().width / 2) /
        70
    );
    setyval(
      -(
        e.clientY -
        textRef.current.getBoundingClientRect().y -
        textRef.current.getBoundingClientRect().height / 2
      ) / 20
    );

    textRef.current.style.transform = `rotateX(${yval}deg) rotateY(${xval}deg)`;
  };

  useGSAP(
    function () {
      gsap.to(textRef.current, {
        transform: `rotateX(${yval}deg) rotateY(${xval}deg)`,
        duration: 2,
        ease: "power4.out",
      });
    },
    [xval, yval]
  );
  return (
    <>
    
      <div className="h-screen  relative bg-white px-3 py-2">
        <div
          onMouseMove={(e) => {
            mouseMove(e);
          }}
          className="w-full   shadow-gray-700 h-full bg-cover bg-[url(https://cdn.pixabay.com/photo/2017/08/02/09/48/people-2570488_1280.jpg)]  rounded-[50px] shadow-lg"
        >
          <Movingtext abc={textRef} />
          <Bottomtext />
        </div>
      </div>
    </>
  );
}

export default Pageone;
