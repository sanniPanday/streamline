import React, { useState } from "react";
import magent from "../../assets/image/magent.png";
import bg from "../../assets/image/bg.png";
const Managementpage = () => {
  

  return (
    <div className="bg-[#10252d] h-[530px] lg:h-[935px]  text-white py-32 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-10 flex justify-center">
        <img
          src={bg}
          alt="Background"
          className="w-[500px] h-[430px] object-cover opacity-90 mt-0"
        />
        <div className="absolute inset-0 "></div>
      </div>
      <div className="text-center relative z-10 mx-auto">
        <h2 className="lg:px-20  px-0 text-3xl  mb-4 font-thicccboi font-bold lg:text-[56px] leading-[130%] text-center">
          Claims Management & Routing for Insurance Adjusters
        </h2>
      </div>

      <div className="mt-12 flex justify-center  h-[240px] md:h-[273px] lg:h-[613px]">
        <div className="relative cursor-pointer  w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <img
            src={magent}
            alt="Video thumbnail"
            className="w-full lg:h-[650px] h-[237px] md:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Managementpage;
