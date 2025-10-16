import React from "react";
import icon1 from "../assets/image/w1.svg";
import icon2 from "../assets/image/service.svg";
import icon3 from "../assets/image/communication.svg";
import icon4 from "../assets/image/partnership.svg";
import bgw from "../assets/image/bg.png"; 

function WhyChoose() {
  return (
    <section className="relative min-h-[600px] py-10 lg:-mt-10 px-6 md:px-16 bg-[#10252d] overflow-hidden">
      <img
        src={bgw}
        alt="background"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] opacity-45 object-contain z-0"
      />

      <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-8 items-center z-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-auto">
          {[icon1, icon2, icon3, icon4].map((icon, index) => {
            const texts = [
              "Aligned with your business goals",
              "Seamlessly integrates with your existing tools",
              "Transparent communication",
              "Long-term technology partners",
            ];
            return (
              <div
                key={index}
                className="rounded-[20px] w-full h-[216px] border-gray-800 border-2 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] p-6 py-10 flex flex-col items-start gap-4 transition-transform duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
              >
                <img
                  src={icon}
                  alt={texts[index]}
                  className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-500 group-hover:scale-110"
                />
                <p className="text-white text-[18px] leading-[26px] tracking-[0%] font-normal">
                  {texts[index]}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-white mt-8 lg:mt-0">
          <h2 className="text-[24px] md:text-[28px] lg:text-[48px] mb-6 font-bold leading-[140%] tracking-[0%]">
            Why Choose Streamline Factory?
          </h2>
          <p className="text-gray-300 text-[18px] font-normal leading-[26px] tracking-[0%]">
            We design and develop purpose-built software that simplifies complex workflows. From mobile apps to cloud platforms, our solutions empower professionals in insurance, construction, field service, and automotive sectors to work smarter, faster, and with more control.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
