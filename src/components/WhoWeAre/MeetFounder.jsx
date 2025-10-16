import React from "react";
import founderImg from "../../assets/image/man.png"; 

export default function MeetFounder() {
  return (
    <section
      className="lg:min-h-min  bg-[#10252d] text-white py-16 px-4 sm:px-6 md:px-12"
  
    >
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl  font-thicccboi font-bold lg:text-[48px] leading-[100%] text-center">
          Meet the founder
        </h2>
      </div>

     {/* <div className="bg-gradient-to-r  from-[#0f5230] to-[#161a1a] rounded-2xl overflow-hidden flex flex-col md:flex-col lg:flex-row shadow-lg items-center lg:items-start"> */}
       <div className=" h-[540px] lg:h-[272px] md:h-[420px] bg-[linear-gradient(90deg,#0f5230_1%,#000000_60%,#0f5230_99%)] rounded-[20px] border-2 border-gray-700/90 overflow-hidden flex flex-col md:flex-col lg:flex-row shadow-lg items-center lg:items-start">
  
  
  <div className="w-full lg:w-2/3 flex justify-center lg:justify-start">
    <img
      src={founderImg}
      alt="Founder"
      className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[230px] h-[270px] sm:h-[300px] md:h-[200px] lg:h-[300px] object-cover rounded-lg"
    />
  </div>

  
  <div className="flex-2 px-4 sm:px-6 md:px-6  lg:px-7 flex flex-col justify-center text-center md:text-center lg:text-start mt-6 md:mt-3 lg:mt-20">
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
      Kevin Sodke
    </h3>
    <p className="text-sm sm:text-base text-gray-300 mb-10 md:mb-5">
      Founder & CEO
    </p>
    <p className="text-gray-300 font-thicccboi font-normal lg:text-[18px] md:text-[18px] leading-[140%] tracking-[0]">
      30+ years in construction and 20 years as an insurance adjuster. Builds
      tools that actually fit the work. 30+ years in construction and 20 years
      as an insurance adjuster. Builds tools that actually fit the work. 30+
      years in construction and 20 years as an insurance adjuster. Builds tools
      that actually fit the work.
    </p>
  </div>
</div>

    </section>
  );
}
