import React from "react";
import hero from "../../assets/image/hh.mp4";
import pho from "../../assets/image/pho.png";
import imag1 from "../../assets/image/f1.png";
import imag2 from "../../assets/image/f2.png";
import imag3 from "../../assets/image/f3.png";
import imag4 from "../../assets/image/f4.png";

function HeroSection() {
  const steps = [
    { title: "Create account", img: imag1, desc: "Sign up in seconds and set up your secure profile." },
    { title: "Upload files", img: imag2, desc: "Store your private photos and videos in one safe place." },
    { title: "Take Photos & Videos", img: imag3, desc: "Capture moments directly in the app & keep them private from the start." },
    { title: "Secure with pin", img: imag4, desc: "Lock everything behind a personal pin for complete control." },
  ];

  return (
    <div className="bg-[#10252d] relative w-full lg:h-[1200px] overflow-visible">
      <div className="py-32 relative w-full flex flex-col items-center justify-center text-white overflow-visible min-h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={hero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-[#10252d]/90 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold lg:text-[60px] leading-[21px]">
              Your Photos. Your Privacy.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl font-normal">
              PriViCam keeps your photos and videos safe with secure storage, private access, and peace of mind.
            </p>

            <div className="flex justify-center lg:justify-start mt-4">
              <div className="relative p-[4px] rounded-[16px]">
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-green-600 to-transparent"></div>
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-green-600 to-transparent"></div>

                <button className="relative z-10 group p-[4px] rounded-[12px] bg-[linear-gradient(180deg,#294C32_0%,#67DF89_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                  <div className="bg-transparent rounded-[8px] px-8 py-3 text-center h-[44px] w-[180px]">
                    <span className="text-white font-medium text-[16px] leading-[100%] tracking-[0%] text-center">
                      Download now
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 mt-28 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src={pho}
              className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-full max-w-[600px] h-auto object-contain"
              alt="Hero"
            />
          </div>
        </div>

        <h2 className="z-20 absolute bottom-2 text-2xl sm:text-3xl md:text-4xl text-white w-full font-bold lg:text-[56px] leading-[100%] tracking-[0%] text-center">
          How it works
        </h2>
      </div>

      <div className="relative z-20 bg-[#10252d]/95 text-gray-100 py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-[20px] border-2 border-gray-700/90 h-[340px] w-[260px] md:h-[350px] md:w-[280px] lg:h-[372px] lg:w-[287px]  p-6 py-12 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                style={{
                  background: `linear-gradient(180deg, rgba(82, 223, 141, 1) 0%, rgba(0, 0, 0, 1) 100%)`,
                }}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="h-[120px] w-[120px] sm:h-[130px] sm:w-[130px] md:h-[140px] md:w-[150px] lg:h-[150px] lg:w-[160px] mb-[16px] object-contain"
                />
                <h3 className="text-white font-poppins font-medium text-[22px] leading-[100%] py-3">
                  {step.title}
                </h3>
                <p className="text-white font-poppins text-[14px] leading-[24px] max-w-[250px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
