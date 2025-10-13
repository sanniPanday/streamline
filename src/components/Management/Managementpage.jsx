import React, { useState } from "react";
import magent from "../../assets/image/magent.png"
const Managementpage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div
      className="bg-gray-900 h-[530px] lg:h-[982px] text-white py-32 px-6 md:px-12 lg:px-24"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), linear-gradient(0deg, #52B7E0, #52B7E0)",
      }}
    >
      <div className="text-center  mx-auto">
        <h2 className="lg:px-20  px-0 text-3xl  mb-4 font-thicccboi font-bold lg:text-[56px] leading-[140%] text-center">Claims Management & Routing for Insurance Adjusters</h2>
      

    
      </div>

      
      <div className="mt-12 flex justify-center">
       
          <div
            className="relative cursor-pointer  w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-lg"
      
          >
            <img
              src={magent}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          
          </div>
        
    </div>

  
    </div>
  );
};

export default Managementpage;
