import React from "react";
import img1 from "../../assets/image/fe1.png";
import img2 from "../../assets/image/fe1.png";

const FeatureSection = () => {
  return (
    // <div className="bg-[#db6708] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 space-y-20 overflow-hidden">
<div className="w-full bg-[#10252d] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-0 space-y-20 overflow-hidden">
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
    <div className="flex-1 text-center lg:text-left space-y-4 px-4 lg:px-16 ">
      <div className="flex items-center justify-center lg:justify-start">
        <div className="relative flex items-center justify-center h-10 w-10">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#22c55e 0deg 108deg, #4b5563 108deg 360deg)`,
              mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black 0)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 2px), black 0)",
            }}
          ></div>
          <span className="text-white text-xl font-bold">1</span>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold">Add claims</h2>
      <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
      Quickly bring in new claims by auto-importing from your CMS, uploading a CSV file, or entering them manually — all organized in one hub.
      </p>
    </div>

    <div className="flex-1 flex justify-center lg:justify-end">
      <img
        src={img2}
        alt="Track inspections interface"
        className="w-full sm:w-[90%] md:w-[85%] lg:w-[100%] xl:w-[100%] lg:h-[500px] object-cover rounded-none"
      />
    </div>
  </div>
   <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

<div className="flex-1 flex justify-center lg:justify-end">
      <img
        src={img2}
        alt="Track inspections interface"
        className="w-full sm:w-[90%] md:w-[85%] lg:w-[100%] xl:w-[100%] lg:h-[500px] object-cover rounded-none"
      />
    </div>

    <div className="flex-1 text-center lg:text-left space-y-4 px-4 lg:px-16 ">
      <div className="flex items-center justify-center lg:justify-start">
        <div className="relative flex items-center justify-center h-10 w-10">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#22c55e 0deg 108deg, #4b5563 108deg 360deg)`,
              mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black 0)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 2px), black 0)",
            }}
          ></div>
          <span className="text-white text-xl font-bold">2</span>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold">Routing & Scheduling</h2>
      <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
       Automatically route and schedule dozens of claims in seconds, saving hours of planning time and keeping your calendar fully optimized.
      </p>
    </div>

    
  </div>


    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
    <div className="flex-1 text-center lg:text-left space-y-4 px-4 lg:px-16">
      <div className="flex items-center justify-center lg:justify-start">
        <div className="relative flex items-center justify-center h-10 w-10">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#22c55e 0deg 108deg, #4b5563 108deg 360deg)`,
              mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black 0)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 2px), black 0)",
            }}
          ></div>
          <span className="text-white text-xl font-bold">3</span>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold">Claim Details</h2>
      <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
      Access notes, photos, and policy information instantly, whether you’re in the field or at your desk.
      </p>
    </div>

    <div className="flex-1 flex justify-center lg:justify-end">
      <img
        src={img2}
        alt="Track inspections interface"
        className="w-full sm:w-[90%] md:w-[85%] lg:w-[100%] xl:w-[100%] lg:h-[500px] object-cover rounded-none"
      />
    </div>
  </div>
       <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

<div className="flex-1 flex justify-center lg:justify-end">
      <img
        src={img2}
        alt="Track inspections interface"
        className="w-full sm:w-[90%] md:w-[85%] lg:w-[100%] xl:w-[100%] lg:h-[500px] object-cover rounded-none"
      />
    </div>

    <div className="flex-1 text-center lg:text-left space-y-4 px-4 lg:px-16">
      <div className="flex items-center justify-center lg:justify-start">
        <div className="relative flex items-center justify-center h-10 w-10">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#22c55e 0deg 108deg, #4b5563 108deg 360deg)`,
              mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black 0)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 2px), black 0)",
            }}
          ></div>
          <span className="text-white text-xl font-bold">4</span>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold">Communication</h2>
      <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
     Calls, texts, and emails are automatically connected to each claim so you never lose track of conversations.
      </p>
    </div>

    
  </div>
       <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
    <div className="flex-1 text-center lg:text-left space-y-4 px-4 lg:px-16">
      <div className="flex items-center justify-center lg:justify-start">
        <div className="relative flex items-center justify-center h-10 w-10">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#22c55e 0deg 108deg, #4b5563 108deg 360deg)`,
              mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black 0)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 2px), black 0)",
            }}
          ></div>
          <span className="text-white text-xl font-bold">5</span>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold">Reports & Analytics</h2>
      <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
     Track key metrics like drive time, inspection time, and contact speed to identify bottlenecks and improve efficiency.
      </p>
    </div>

    <div className="flex-1 flex justify-center lg:justify-end">
      <img
        src={img2}
        alt="Track inspections interface"
        className="w-full sm:w-[90%] md:w-[85%] lg:w-[100%] xl:w-[100%] lg:h-[500px] object-cover rounded-none"
      />
    </div>
  </div>
    </div>
  );
};

export default FeatureSection;
