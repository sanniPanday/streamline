import React from "react";
import img1 from "../../assets/image/fe1.png";
import img2 from "../../assets/image/fe1.png"; 
const FeatureSection = () => {
  return (
    <div className="bg-[#0F2027] text-white py-12 px-4 md:px-16 space-y-20">

           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="flex items-center justify-center h-10 w-10 mb-2 rounded-full border-2 border-green-400/30 text-green-400">
            2
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Inspections</h2>
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
            Keep track of all inspection data and never miss appointments with built-in tracking and alerts.
          </p>
        </div>

        <div className="flex-1  ">
          <img 
            src={img2} 
            alt="Track inspections interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="flex items-center justify-center h-10 w-10 mb-2 rounded-full border-2 border-green-400/30 text-green-400">
            1
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Add claims</h2>
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
            Quickly bring in new claims by auto-importing from your CMS, uploading a CSV file, or entering them manually — all organized in one hub.
          </p>
        </div>

        <div className="flex-1">
          <img 
            src={img1} 
            alt="Add claims interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="flex items-center justify-center h-10 w-10 mb-2 rounded-full border-2 border-green-400/30 text-green-400">
            2
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Inspections</h2>
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
            Keep track of all inspection data and never miss appointments with built-in tracking and alerts.
          </p>
        </div>

        <div className="flex-1">
          <img 
            src={img2} 
            alt="Track inspections interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>


        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="flex items-center justify-center h-10 w-10 mb-2 rounded-full border-2 border-green-400/30 text-green-400">
            1
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Add claims</h2>
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
            Quickly bring in new claims by auto-importing from your CMS, uploading a CSV file, or entering them manually — all organized in one hub.
          </p>
        </div>

        <div className="flex-1">
          <img 
            src={img1} 
            alt="Add claims interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>


 <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          {/* <p className="flex items-center justify-center h-10 w-10 mb-2 rounded-full border-2 border-green-400/30 text-green-400">
            2
          </p> */}
          <div class="relative flex items-center justify-center h-20 w-10">
  <div className="relative flex items-center justify-center h-10 w-10">
  <div
    className="absolute inset-0 rounded-full"
    style={{
      background: `conic-gradient(#22c55e 0deg 108deg, #4b5563 108deg 360deg)`,
      mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black 0)",
      WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)",
    }}
  ></div>

  <span className="text-white text-xl font-bold">5</span>
</div>

  {/* <span class="text-white text-3xl font-bold">5</span> */}
</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Inspections</h2>
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
            Keep track of all inspection data and never miss appointments with built-in tracking and alerts.
          </p>
        </div>

        <div className="flex-1">
          <img 
            src={img2} 
            alt="Track inspections interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
