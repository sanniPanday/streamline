import React from "react";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";
import img4 from "../assets/image/img.png";
import voi from "../assets/image/hh.mp4";
import voi1 from "../assets/image/hh.mp4";
import bg from "../assets/image/bg.png";

function Software() {
  return (
    <div className="relative lg:h-[1500px] md:min-h-min bg-[#10252d] p-6 md:p-9 text-white overflow-hidden">

    
      <img
        src={bg}
        alt="background"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] opacity-80 object-contain z-0"
      />  
    
  <div className="absolute top-0 left-0 w-full h-[100px] sm:h-[250px] md:h-[99%] lg:h-[320px] xl:h-[350px] z-0 overflow-hidden">
  <video
    className="block w-full h-full object-cover -translate-y-[1px] scale-[1.02]"
    src={voi1}
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-[#10252d]/95 z-10"></div>
</div>




<div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[200px] xl:h-[350px] mb-[1px] z-0">
  <video
    className="w-full h-[101%] object-fill"
    src={voi}
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-[#10252d]/95 z-10"></div>
</div>


      <div className="relative z-10">
       
        <div className="relative mb-10 py-32 flex items-center justify-center h-full px-4 text-center">
          <h1 className="text-white text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[40px] 2xl:text-[56px] font-bold leading-[130%]">
            Purpose-Built Software for the <br className="hidden sm:block" /> Real World
          </h1>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-9 gap-6 px-6">
          <div className="relative rounded-[20px] shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 group">
            <img
              src={img1}
              alt=""
              className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.3) -43.02%, rgba(41, 76, 50, 0.3) 107.76%)",
              }}
            ></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <div>
                <h4 className="text-xl font-semibold mb-3 lg:text-[24px] leading-[100%] tracking-[0%] ">
                  Claim Route 360
                </h4>
                <p className="font-poppins font-normal lg:text-[16px] leading-[100%] tracking-[0%] text-sm text-gray-300 mb-2">
                  CRM and auto-routing system for insurance adjusters.
                </p>
              </div>
              <div className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0%]">
                Coming soon...
              </div>
            </div>
          </div>

          
          <div className="relative rounded-[20px] shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 group">
            <img
              src={img3}
              alt=""
              className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent p-8 flex flex-col justify-end">
              <h4 className="text-xl font-semibold mb-3 lg:text-[24px] leading-[100%] tracking-[0%] ">
                Privicam
              </h4>
              <p className="font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2">
                Private password-protected vault for photos, videos, and documents.
              </p>
            </div>
          </div>

        
          <div className="relative rounded-[20px] shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-3 group">
            <img
              src={img2}
              alt="PriviCam"
              className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 p-8 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.35) -43.02%, rgba(41, 76, 50, 0.35) 107.76%)",
              }}
            >
              <div>
                <h4 className="text-xl font-semibold mb-3 lg:text-[24px] leading-[100%] tracking-[0%] ">
                  PriviCam
                </h4>
                <p className="font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2">
                  Private password-protected cameras suited for secure content.
                </p>
              </div>
              <div className="text-white font-semibold font-poppins text-[24px] leading-[100%] tracking-[0%]">
                Coming soon again...
              </div>
            </div>
          </div>
        </div>

       
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-6 mt-6 px-6">
       
          <div className="relative rounded-[20px] shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 group">
            <img
              src={img4}
              alt=""
              className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 p-8 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.9) -43.02%, rgba(41, 76, 50, 0.9) 107.76%)",
              }}
            >
              <div>
                <h4 className="text-xl font-semibold mb-3 lg:text-[24px] leading-[100%] tracking-[0%] ">
                  ServiceRoute 360
                </h4>
                <p className="font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2">
                  CRM/routing SaaS for remote technicians and adjusters in real-time.
                </p>
              </div>
              <div className="text-white font-semibold font-poppins text-[24px] leading-[100%] tracking-[0%]">
                Coming soon...
              </div>
            </div>
          </div>

         
          <div className="relative rounded-[20px] shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 group">
            <img
              src={img4}
              alt=""
              className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
            />
            <div
      className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none"
      style={{
        background:
          "linear-gradient(122.19deg, rgba(82, 223, 141, 0.85) -43.02%, rgba(41, 76, 50, 0.85) 107.76%)",
      }}
    >
      <div>
        <h4 className="text-xl font-semibold mb-3 lg:text-[24px] leading-[100%] tracking-[0%] font-poppins">
          Fixmate
        </h4>
        <p className="font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2">
          Remote guidance for homeowners from field adjusters. DIY assistance in
          real time.
        </p>
      </div>
      <div className="text-white font-semibold font-poppins text-[24px] leading-[100%] tracking-[0%]">
        Coming soon...
      </div>
    </div>
          </div>

      
          <div className="relative rounded-[20px] shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 group">
            <img
              src={img4}
              alt=""
              className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
            />
            <div
      className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none"
      style={{
        background:
          "linear-gradient(122.19deg, rgba(82, 223, 141, 0.85) -43.02%, rgba(41, 76, 50, 0.85) 107.76%)",
      }}
    >
      <div>
        <h4 className="text-xl font-semibold mb-3 lg:text-[24px] leading-[100%] tracking-[0%] ">
          Fixmate
        </h4>
        <p className="font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2">
          Remote guidance for homeowners from field adjusters. DIY assistance in
          real time.
        </p>
      </div>
      <div className="text-white font-semibold font-poppins text-[24px] leading-[100%] tracking-[0%]">
        Coming soon...
      </div>
    </div>
          </div>
        </div>

       
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  gap-6 mt-6 px-6">
  <div className="relative rounded-[20px] shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 lg:col-span-1">
    <img
      src={img4}
      alt="Fixmate"
      className="w-full h-full object-fill transition-transform duration-500 hover:scale-105"
    />

    <div
      className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none"
      style={{
        background:
          "linear-gradient(122.19deg, rgba(82, 223, 141, 0.85) -43.02%, rgba(41, 76, 50, 0.85) 107.76%)",
      }}
    >
      <div>
        <h4 className="text-xl font-semibold mb-3 lg:text-[24px] leading-[100%] tracking-[0%] ">
          Fixmate
        </h4>
        <p className="font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2">
          Remote guidance for homeowners from field adjusters. DIY assistance in
          real time.
        </p>
      </div>
      <div className="text-white font-semibold font-poppins text-[24px] leading-[100%] tracking-[0%]">
        Coming soon...
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default Software;




 {/* <div className="relative z-10">
        <div className="relative mb-10 z-30 flex items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[40px] 2xl:text-[56px] font-bold leading-[130%]">
          Purpose-Built Software for the <br className="hidden sm:block" /> Real World
        </h1>
      </div>
       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-9 gap-6 px-6">
          <div className="relative rounded-[20px] shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 group">
            <img
              src={img1}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.3) -43.02%, rgba(41, 76, 50, 0.3) 107.76%)",
              }}
            ></div>
            <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
              <div>
                <h2 className="text-xl font-semibold mb-3 lg:text-[24px] leading-[100%] tracking-[0%] font-poppins">
                  Claim Route 360
                </h2>
                <p className="font-poppins font-normal lg:text-[16px] leading-[100%] tracking-[0%] text-sm text-gray-300 mb-2">
                  CRM and auto-routing system for insurance adjusters.
                </p>
              </div>
              <div className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0%">
                Coming soon...
              </div>
            </div>
          </div>

          <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 group">
            <img
              src={img3}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent p-4 flex flex-col justify-end">
              <h2 className="text-xl font-semibold mb-3 lg:text-[24px] leading-[100%] tracking-[0%] font-poppins">
                Privicam
              </h2>
              <p className="font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2">
                Privatic password-protected careers vault for photos, videos and documents.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-3 group">
            <img
              src={img2}
              alt="PriviCam"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 p-4 flex flex-col justify-between"
              style={{
                background:
                  "linear-gradient(122.19deg, rgba(82, 223, 141, 0.35) -43.02%, rgba(41, 76, 50, 0.35) 107.76%)",
              }}
            >
              <div>
                <h2 className="text-xl font-semibold mb-3 lg:text-[24px] leading-[100%] tracking-[0%] font-poppins">
                  PriviCam
                </h2>
                <p className="font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2">
                  Private password-protected cameras suited for photos, videos and documents.
                </p>
              </div>
              <div className="text-white font-semibold font-poppins text-[24px] leading-[100%] tracking-[0%">
                Coming soon...
              </div>
            </div>
          </div>
        </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-6 mt-6 px-6">
  <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 group">
    <img
      src={img4}
      alt=""
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
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
      <div className="text-white font-semibold font-poppins  text-[24px] leading-[100%] tracking-[0%]">
        Coming soon...
      </div>
    </div>
  </div>

 
  <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 group">
    <img
      src={img4}
      alt=""
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div
      className="absolute inset-0 p-4 flex flex-col justify-between"
      style={{
        background:
          "linear-gradient(122.19deg, rgba(82, 223, 141, 0.9) -43.02%, rgba(41, 76, 50, 0.9) 107.76%)",
      }}
    >
     
    </div>
  </div>

  <div className="relative rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 group">
    <img
      src={img4}
      alt=""
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div
      className="absolute inset-0 p-4 flex flex-col justify-between"
      style={{
        background:
          "linear-gradient(122.19deg, rgba(82, 223, 141, 0.85) -43.02%, rgba(41, 76, 50, 0.85) 107.76%)",
      }}
    >
    
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
      </div> */}




// import React from "react";
// import img1 from "../assets/image/img1.png";
// import img2 from "../assets/image/img2.png";
// import img3 from "../assets/image/img3.png";
// import img4 from "../assets/image/img.png";
// import voi from "../assets/image/hh.mp4";
// import bg from "../assets/image/bg.png";

// function Software() {
//   return (
//     <div className="relative min-h-screen bg-[#10252d] text-white overflow-hidden">
//       <video
//         className="absolute inset-0 w-full  h-[200px] object-cover z-10"
//         src={voi}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
//       <div className="absolute inset-0 bg-[#10252d]/95 z-10"></div>

//       <div
//         className="absolute inset-0 z-[1]"
//         style={{
//           background: `
//             linear-gradient(
//               135deg,
//               rgba(255,107,107,0.3),
//               rgba(255,217,61,0.3),
//               rgba(107,203,119,0.3),
//               rgba(77,150,255,0.3)
//             ), #13252c
//           `,
//           backgroundBlendMode: "overlay",
//         }}
//       ></div>

//       <div className="absolute inset-0 bg-[#10252d]/85 z-[2]" />

//       <div className="relative z-[10] flex items-center justify-center h-[40vh] px-4 text-center">
//         <h4 className="text-white text-[16px]  md:text-[22px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] font-bold leading-[120%]">
//           Purpose-Built Software for the <br className="hidden sm:block" /> Real
//           World
//         </h4>
//       </div>


//       <img
//         src={bg}
//         alt="background"
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] opacity-80 object-contain z-0"
//       />
//       <div className="absolute top-0 left-0 w-full h-[300px] mt-[1030px]">
//         <video
//           className="w-full h-full object-cover"
//           src={voi}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />

//         <div className="absolute inset-0 bg-[#10252d]/90 z-0"></div>
//       </div>

//       <div className="relative z-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-9 gap-6 px-6">
//           <div className="relative rounded-[20px] shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
//             <img src={img1} alt="" className="w-full h-full object-cover" />

//             <div
//               className="absolute inset-0"
//               style={{
//                 background:
//                   "linear-gradient(122.19deg, rgba(82, 223, 141, 0.3) -43.02%, rgba(41, 76, 50, 0.3) 107.76%)",
//               }}
//             ></div>

//             <div className="absolute  inset-0 p-8 flex flex-col justify-between text-white">
//               <div>
//                 <h4 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%]  ">
//                   Claim Route 360
//                 </h4>
//                 <p className=" font-poppins font-normal lg:text-[16px] leading-[100%] tracking-[0%] text-sm text-gray-300 mb-2 ">
//                   CRM and auto-routing system for insurance adjusters.
//                 </p>
//               </div>
//              <h4 className="text-white font-semibold   text-[24px] leading-[100%] tracking-[0%]">
//                 Coming soon...
//               </h4>
//             </div>
//           </div>

//           <div className="relative rounded-[20px] border-gray-800 border-2 shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
//             <img src={img3} alt="" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent p-6 flex flex-col justify-end">
//               <h4 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%]  ">
//                 Privicam
//               </h4>
//               <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
//                 Privatic password-protected carrers vsult for photos, videos and
//                 documents.
//               </p>
//             </div>
//           </div>

//           <div className="relative rounded-[20px] border-gray-800 border-2 shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-3">
//             <img
//               src={img2}
//               alt="PriviCam"
//               className="w-full h-full object-cover"
//             />

//             <div
//               className="absolute inset-0 p-8 flex flex-col justify-between"
//               style={{
//                 background:
//                   "linear-gradient(122.19deg, rgba(82, 223, 141, 0.35) -43.02%, rgba(41, 76, 50, 0.35) 107.76%)",
//               }}
//             >
//               <div>
//                 <h4 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%]  ">
//                   PriviCam
//                 </h4>
//                 <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
//                   Private password-protected cameras suited for photos, videos
//                   and documents.
//                 </p>
//               </div>
//               <h4 className="text-white font-semibold   text-[24px] leading-[100%] tracking-[0%]">
//                 Coming soon...
//               </h4>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-6 mt-6 px-6">
//           <div className="relative rounded-[20px] border-gray-800 border-2 shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
//             <img src={img4} alt="" className="w-full h-full object-cover" />

//             <div
//               className="absolute inset-0 p-8 flex flex-col justify-between"
//               style={{
//                 background:
//                   "linear-gradient(122.19deg, rgba(82, 223, 141, 0.9) -43.02%, rgba(41, 76, 50, 0.9) 107.76%)",
//               }}
//             >
//               <div>
//                 <h4 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%]  ">
//                   ServiceRoute 360
//                 </h4>
//                 <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
//                   The adjuster-focused power of CRM/routing SaaS made for remote
//                   technicians in real-time.
//                 </p>
//               </div>
//              <h4 className="text-white font-semibold   text-[24px] leading-[100%] tracking-[0%]">
//                 Coming soon...
//               </h4>
//             </div>
//           </div>

//           <div className="relative rounded-[20px] border-gray-800 border-2 shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
//             <img src={img4} alt="" className="w-full h-full object-cover" />

//             <div
//               className="absolute inset-0 p-8 flex flex-col justify-between"
//               style={{
//                 background:
//                   "linear-gradient(122.19deg, rgba(82, 223, 141, 0.9) -43.02%, rgba(41, 76, 50, 0.9) 107.76%)",
//               }}
//             >
//               <div>
//                 <h4 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%]  ">
//                   ServiceRoute 360
//                 </h4>
//                 <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
//                   The adjuster-focused power of CRM/routing SaaS made for remote
//                   technicians in real-time.
//                 </p>
//               </div>
//              <h4 className="text-white font-semibold   text-[24px] leading-[100%] tracking-[0%]">
//                 Coming soon...
//               </h4>
//             </div>
//           </div>

//           <div className="relative rounded-[20px] border-gray-800 border-2 shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3">
//             <img src={img4} alt="" className="w-full h-full object-cover" />

//             <div
//               className="absolute inset-0 p-8 flex flex-col justify-between"
//               style={{
//                 background:
//                   "linear-gradient(122.19deg, rgba(82, 223, 141, 0.85) -43.02%, rgba(41, 76, 50, 0.85) 107.76%)",
//               }}
//             >
//               <div>
//                 <h4 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%]  ">
//                   Automotive SAAS app
//                 </h4>
//                 <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
//                   White-label automotive repair solutions to simplify workflow
//                   and digital kiosks in repair shops.
//                 </p>
//               </div>
//               <h4 className="text-white font-semibold   text-[24px] leading-[100%] tracking-[0%]">
//                 Coming soon...
//               </h4>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-6 px-6">
//           <div className="relative rounded-[20px] border-gray-800 border-2 shadow-lg overflow-hidden h-[300px] md:h-[320px] lg:h-[363px] col-span-1 sm:col-span-2 lg:col-span-1">
//             <img
//               src={img4}
//               alt="Fixmate"
//               className="w-full h-full object-cover"
//             />

//             <div
//               className="absolute inset-0 p-8 flex flex-col justify-between"
//               style={{
//                 background:
//                   "linear-gradient(122.19deg, rgba(82, 223, 141, 0.85) -43.02%, rgba(41, 76, 50, 0.85) 107.76%)",
//               }}
//             >
//               <div>
//                 <h4 className="text-xl font-semibold mb-3  lg:text-[24px] leading-[100%] tracking-[0%]  ">
//                   Fixmate
//                 </h4>
//                 <p className=" font-poppins font-normal lg:text-[16px] leading-[130%] tracking-[0%] text-sm text-gray-300 mb-2 ">
//                   Remote guidance for homeowners from field adjusters, fix DIY
//                   process in real time, stay tuned.
//                 </p>
//               </div>
//              <h4 className="text-white font-semibold   text-[24px] leading-[100%] tracking-[0%]">
//                 Coming soon...
//               </h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Software;

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
