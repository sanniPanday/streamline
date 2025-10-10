import React from 'react';
import ppp from "../assets/image/hh.mp4";

function Purpose() {
  return (
    <div className="relative w-full -mt-10 md:-mt-8 lg:-mt-5  h-[110px] sm:h-[160px] md:h-[180px] lg:h-[200px]">
      
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(255,107,107,0.3), rgba(255,217,61,0.3), rgba(107,203,119,0.3), rgba(77,150,255,0.3)),
            #1b1b1b
          `,
          backgroundBlendMode: 'overlay',
          width: '100%',
          height: '100%',
        }}
      ></div>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        src={ppp}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gray-900/90 z-20"></div>

      <div className="relative z-30 flex items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[40px] 2xl:text-[56px] font-bold leading-[130%]">
          Purpose-Built Software for the <br className="hidden sm:block" /> Real World
        </h1>
      </div>
    </div>
  );
}

export default Purpose;
