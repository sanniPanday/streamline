import React from "react";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";
import img4 from "../assets/image/img.png";
import voi from "../assets/image/hh.mp4";
import bg from "../assets/image/bg.png"

function Software() {
  return (
    <div className="relative min-h-screen bg-[#10252d]/100 p-6 md:p-9 text-white overflow-hidden">
      <img
    src={bg}
    alt="background"
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] opacity-80 object-contain z-0"
  />
      <div className="absolute top-0 left-0 w-full h-[300px] mt-[1030px]">
        <video
          className="w-full h-full object-cover"
          src={voi}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-[#10252d]/90 z-0"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-9 gap-6 px-6">
          <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <img src={img1} alt="" className="w-full h-full object-cover" />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.3) -43.02%, rgba(41, 76, 50, 0.3) 107.76%)",
              }}
            ></div>

            <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
              <div>
                <h2 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%] font-poppins ">Claim Route 360</h2>
                <p className=" font-poppins font-normal lg:text-[16px] leading-[100%] tracking-[0%] text-sm text-gray-300 mb-2 ">
                  CRM and auto-routing system for insurance adjusters.
                </p>
              </div>
              <div className=" font-poppins font-semibold text-[24px] leading-[100%] tracking-[0%]">Coming soon...</div>
            </div>
          </div>

          <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
            <img src={img3} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent p-4 flex flex-col justify-end">
             <h2 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%] font-poppins ">Privicam</h2>
             <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
             Privatic password-protected carrers vsult for photos, videos and documents.
              </p>
              {/* <div className="text-white font-semibold font-poppins  text-[24px] leading-[100%] tracking-[0%]">Coming soon...</div> */}
            </div>
          </div>

          <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-3">
            <img
              src={img2}
              alt="PriviCam"
              className="w-full h-full object-cover"
            />

            <div
              className="absolute inset-0 p-4 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.35) -43.02%, rgba(41, 76, 50, 0.35) 107.76%)",
              }}
            >
              <div>
                <h2 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%] font-poppins ">
                  PriviCam
                </h2>
             <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
                  Private password-protected cameras suited for photos, videos
                  and documents.
                </p>
              </div>
              <div className="text-white font-semibold font-poppins  text-[24px] leading-[100%] tracking-[0%]">Coming soon...</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-6 mt-6 px-6">
          <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
            <img src={img4} alt="" className="w-full h-full object-cover" />

            <div
              className="absolute inset-0 p-4 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.9) -43.02%, rgba(41, 76, 50, 0.9) 107.76%)",
              }}
            >
              <div>
                <h2 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%] font-poppins ">
                  ServiceRoute 360
                </h2>
          <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
                  The adjuster-focused power of CRM/routing SaaS made for remote
                  technicians in real-time.
                </p>
              </div>
              <div className="text-white font-semibold font-poppins  text-[24px] leading-[100%] tracking-[0%]">Coming soon...</div>
            </div>
          </div>

          <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
            <img src={img4} alt="" className="w-full h-full object-cover" />

            <div
              className="absolute inset-0 p-4 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.9) -43.02%, rgba(41, 76, 50, 0.9) 107.76%)",
              }}
            >
              <div>
                <h2 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%] font-poppins ">
                  ServiceRoute 360
                </h2>
           <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
                  The adjuster-focused power of CRM/routing SaaS made for remote
                  technicians in real-time.
                </p>
              </div>
              <div className="text-white font-semibold font-poppins  text-[24px] leading-[100%] tracking-[0%]">Coming soon...</div>
            </div>
          </div>

          <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3">
            <img src={img4} alt="" className="w-full h-full object-cover" />

            <div
              className="absolute inset-0 p-4 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.85) -43.02%, rgba(41, 76, 50, 0.85) 107.76%)",
              }}
            >
              <div>
                <h2 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%] font-poppins ">
                  Automotive SAAS app
                </h2>
             <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
                  White-label automotive repair solutions to simplify workflow
                  and digital kiosks in repair shops.
                </p>
              </div>
              <div className="text-white font-semibold font-poppins  text-[24px] leading-[100%] tracking-[0%]">Coming soon...</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-6 px-6">
          <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 lg:col-span-1">
            <img
              src={img4}
              alt="Fixmate"
              className="w-full h-full object-cover"
            />

            <div
              className="absolute inset-0 p-4 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.85) -43.02%, rgba(41, 76, 50, 0.85) 107.76%)",
              }}
            >
              <div>
               <h2 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%] font-poppins ">
                  Fixmate
                </h2>
             <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
                  Remote guidance for homeowners from field adjusters, fix DIY
                  process in real time, stay tuned.
                </p>
              </div>
              <div className="text-white font-semibold font-poppins  text-[24px] leading-[100%] tracking-[0%]">Coming soon...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Software;

{
  /* <div className="relative min-h-screen text-white bg-red-400 overflow-hidden">
    
      <div className="">
      <video
        className="absolute -top-0 left-0 w-full mt-[750px] h-[100px] object-cover z-0"
        src={voi}
        autoPlay
        loop
        muted
        playsInline
      />
</div>
      <div className="relative z-10 p-6 md:p-9 bg-gray-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 gap-6">
          <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <img src={img1} alt="" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.3) -43.02%, rgba(41, 76, 50, 0.3) 107.76%)",
              }}
            ></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
              <div>
                <h2 className="text-xl font-semibold mb-1">Claim Route 360</h2>
                <p className="text-sm text-gray-300 mb-2">
                  CRM and auto-routing system for insurance adjusters.
                </p>
              </div>
              <div className="font-semibold">Coming soon...</div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-6 mt-6">
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-6">
          <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 lg:col-span-1">
            
            <div
              className="absolute inset-0 p-4 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.85) -43.02%, rgba(41, 76, 50, 0.85) 107.76%)",
              }}
            >
              <div>
                <h2 className="text-xl font-semibold mb-1 text-white">
                  Fixmate
                </h2>
                <p className="text-sm text-white mb-2">
                  Remote guidance for homeowners from field adjusters, fix DIY
                  process in real time, stay tuned.
                </p>
              </div>
              <div className="text-white font-semibold">Coming soon...</div>
            </div>
          </div>
        </div>
      </div>
    </div> */
}
