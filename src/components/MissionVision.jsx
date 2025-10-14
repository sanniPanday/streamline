import React from 'react';
import bkg from "../assets/image/bg.png";
// import tf from "../assets/font/Webfont/THICCCBOI-Black.woff2"
const MissionVision = () => {
  return (
    <div className="relative bg-[#1B1B1B] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">

      <img
        src={bkg}
        alt="background"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] opacity-75 object-contain z-0"
      />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-12 z-10">
        
        <div className="md:w-1/2">
          <h2 className="mb-6   font-thicccboi font-bold text-[24px] sm:text-[32px] md:text-[36px] lg:text-[48px] leading-[140%] text-center md:text-left">
            Our Mission and Vision
          </h2>
          <p className="text-gray-300 font-thicccboi font-normal text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] text-center md:text-left">
            We design and develop purpose-built software that simplifies complex workflows.
            From mobile apps to cloud platforms, our solutions empower professionals in insurance.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col gap-8 sm:gap-10">
          <div className="border-l-2 border-green-400 pl-4">
            <h3 className=" font-thicccboi  tracking-[0%] text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-2 leading-[24px] md:leading-[26px]">
              From Vision to Real-World Software
            </h3>
            
             <p className=" text-gray-300 font-thicccboi font-normal  leading-[24px] tracking-[0%]text-gray-300  sm:text-[15px] lg:text-[16px] md:leading-[24px]">
              At Streamline Factory, we transform practical ideas into scalable SaaS tools.
              Whether you’re a startup or an established enterprise, we offer end-to-end development — 
              from concept to deployment — backed by a commitment to innovation, speed, and precision.
            </p>
          </div>

          <div className="border-l-2 border-green-400 pl-4">
           <h3 className=" font-thicccboi  tracking-[0%] text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-2 leading-[24px] md:leading-[26px]">
              Trusted by Real-World Professionals
            </h3>
            <p className=" text-gray-300 font-thicccboi font-normal  leading-[24px] tracking-[0%]text-gray-300  sm:text-[15px] lg:text-[16px] md:leading-[24px]">
              Insurance adjusters. Contractors. Field techs. Our clients keep the world running, 
              and we give them the tools to do it more efficiently. With each solution, we aim to 
              deliver measurable results, operational control, and digital simplicity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
