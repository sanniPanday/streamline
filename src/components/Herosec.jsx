import React from "react";
import hero from "../assets/image/hero.mp4";

function Herosec() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
     
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={hero}
        autoPlay
        loop
        muted
        playsInline
      />

    
      <div className="absolute inset-0 bg-blue-800/0"></div>

    
      {/* <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Welcome to Hero Section
        </h1>
      </div> */}
    </div>
  );
}

export default Herosec;
