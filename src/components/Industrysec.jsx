import React from "react";
import ind1 from "../assets/image/image 2.png";
import ind2 from "../assets/image/image 3.png";
import ind3 from "../assets/image/image 4.png";
import icons1 from "../assets/image/insurance.svg";
import icons2 from "../assets/image/Gr.svg";
import icons3 from "../assets/image/Vector (3).svg";
import bgkg from "../assets/image/bg.png";

function Industrysec() {
  return (
    <div className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-14 relative">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10 items-center lg:min-h-[650px]">
        
        <div>
          <h1 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[48px] mb-4 sm:mb-6 font-bold leading-[130%] text-center lg:text-left">
            Engineering Smart <br className="hidden sm:block lg:hidden" />
            Solutions for Real-World <br className="hidden md:block lg:hidden" />
            Industries
          </h1>
          <p className="text-gray-300 mb-6 font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-center lg:text-left">
            We design and develop purpose-built software that simplifies complex
            workflows. From mobile apps to cloud platforms, our solutions empower
            professionals in insurance, construction, field service, and automotive
            sectors to work smarter, faster, and with more control.
          </p>

          <div className="flex justify-center lg:justify-start">
            <div className="relative p-[4px] rounded-[16px]">
              <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-green-600 to-transparent"></div>
              <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-green-600 to-transparent"></div>
              <button className="relative z-10 group p-[4px] rounded-[12px] bg-[linear-gradient(180deg,#294C32_0%,#67DF89_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                <div className="bg-transparent rounded-[8px] h-[44px] w-[120px] sm:w-[130px] px-5 py-3 text-center">
                  <span className="text-white font-thicccboi font-medium text-[14px] sm:text-[16px] leading-[100%]">
                    Know more
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={bgkg}
              alt="background"
              className="w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[180px] sm:h-[200px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/80"></div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img
              src={ind1}
              alt="Insurance"
              className="w-full h-full object-cover relative z-10"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white z-10 text-sm sm:text-base font-medium text-center">
              <div className="flex items-center gap-2 sm:gap-3 justify-center">
                <img src={icons1} className="h-6 w-6 sm:h-8 sm:w-8" alt="icon" />
                Insurance
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden sm:row-span-2">
            <img
              src={ind2}
              alt="Automotive"
              className="w-full h-full object-cover relative z-10"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white z-10 text-sm sm:text-base font-medium text-center">
              <div className="flex items-center gap-2 sm:gap-3 justify-center">
                <img src={icons2} className="h-6 w-6 sm:h-8 sm:w-8" alt="icon" />
                Automotive
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img
              src={ind3}
              alt="Construction"
              className="w-full h-full object-cover relative z-10"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white z-10 text-sm sm:text-base font-medium text-center">
              <div className="flex items-center gap-2 sm:gap-3 justify-center">
                <img src={icons3} className="h-6 w-6 sm:h-8 sm:w-8" alt="icon" />
                Construction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industrysec;
