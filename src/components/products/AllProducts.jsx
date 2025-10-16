// import React from "react";
// import product1 from "../../assets/image/p2.png";
// import product2 from "../../assets/image/pro3.png";
// import product3 from "../../assets/image/pro4.png";
// import bg from "../../assets/image/bg.png";
// import btt from "../../assets/image/btt.svg";

// import { Link } from "react-router-dom";

// function AllProducts() {
//   return (
//     <div className="relative bg-gray-800 py-20 md:py-28 lg:py-24 xl:py-20 px-4 md:px-10">
//       <div className="absolute inset-0 flex justify-center">
//         <img
//           src={bg}
//           alt="Background"
//           className="w-[400px] sm:w-[500px] md:w-[570px] h-[600px] sm:h-[700px] object-cover opacity-60"
//         />
//         <div className="absolute inset-0 bg-gray-800/30"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto text-center mb-12 z-10">
//         <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white font-thicccboi lg:text-[48px] leading-[140%]">
//           All Products
//         </h3>
//         <p className="font-thicccboi text-white px-4 sm:px-10 md:px-14 mx-auto font-normal text-[16px] sm:text-[18px] leading-[26px] text-center">
//           Streamline Factory creates a range of software solutions designed to
//           make everyday tasks easier and more efficient. Our products span
//           different industries and use cases, offering tools that simplify
//           work, improve communication, and support better results. Each
//           application is built with a focus on usability, innovation, and
//           long-term value.
//         </p>

//         <div className="flex justify-center mt-6">
//           <div className="relative p-[4px] rounded-[16px]">
//             <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-green-600 to-transparent"></div>
//             <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-green-600 to-transparent"></div>

//             <button className="relative z-10 group p-[4px] rounded-[12px] bg-[linear-gradient(180deg,#294C32_0%,#67DF89_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
//               <div className="bg-transparent rounded-[8px] px-8 py-3 text-center h-[44px] w-[130px]">
//                 <span className="font-semibold text-white">Submit</span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="relative z-10 max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 justify-items-center">
//         {[
//           { img: product3, title: "Claim Route 360", link: "/WhoWeAre" },
//           { img: product2, title: "Privicam", link: "/Management" },
//           { img: product3, title: "Crypto Launchpad", link: "/Privicam" },
//           { img: product3, title: "Crypto Launchpad", link: "/WhoWeAre" },
//           { img: product3, title: "Crypto Launchpad", link: "/Industry" },
//         ].map((product, index) => (
//          <div
//   key={index}
//   className="w-full sm:w-[90%] lg:w-[650px] h-auto flex flex-col items-center p-6"
// >
//   <img
//   src={product.img}
//   alt={product.title}
//   className="lg:w-[620px] sm:w-full lg:h-[473px] sm:h-[420px] object-cover mb-6 rounded-[20px]"
// />
//             <div className="text-center sm:text-left">
//               <h3 className="text-xl text-white mb-4 font-thicccboi font-semibold lg:text-[24px] leading-[100%]">
//                 {product.title}
//               </h3>
//               <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 sm:gap-0">
//                 <p className="text-[#9D9D9D] font-thicccboi font-normal text-[15px] sm:text-[16px] leading-[150%] text-center sm:text-left">
//                   Built for industries who need to save time by keeping claims,
//                   scheduling, and routes simple and efficient.
//                 </p>

//                 <Link
//                   to={product.link}
//                   className="hidden sm:block sm:ml-2 mt-3 sm:mt-0"
//                 >
//                   <img
//                     src={btt}
//                     alt="Go to page"
//                     className="cursor-pointer h-[54px] w-[54px]"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AllProducts;





import React from "react";
import product1 from "../../assets/image/p2.png"; 
import product2 from "../../assets/image/pro4.png"; 
import product3 from "../../assets/image/pro3.png"; 

import btt from "../../assets/image/btt.svg";
import vid from "../../assets/image/hh.mp4"
import bg from "../../assets/image/bg.png";
import { Link } from "react-router-dom";

function AllProducts() {
  return (
    <div className="relative bg-[#10252d]  py-32 px-6 md:px-12">
      <div className="absolute inset-0 flex justify-center overflow-hidden">
  <video
    src={vid}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-[700px]  object-cover opacity-10"
  ></video>

  <div className="absolute inset-0 bg-[#10252d]/60"></div>
</div>
 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0 w-[570px] h-[700px] opacity-60 pointer-events-none">
    <img 
      src={bg} 
      alt="Background" 
      className="w-full h-full object-cover"
    />
  </div>
<div className="relative max-w-7xl mx-auto text-center mb-12 z-10">
  <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white font-thicccboi lg:text-[48px] leading-[140%] text-center">
    All Products
  </h4>
  <p className="font-thicccboi text-white px-4 sm:px-10 md:px-14 mx-auto font-normal text-[16px] sm:text-[18px] leading-[26px] text-center">
    Streamline Factory creates a range of software solutions designed to
    make everyday tasks easier and more efficient. Our products span
    different industries and use cases, offering tools that simplify
    work, improve communication, and support better results. Each
    application is built with a focus on usability, innovation, and
    long-term value.
  </p>

  <div className="flex justify-center mt-6">
    <div className="relative p-[4px] rounded-[16px]">
      <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-green-600 to-transparent"></div>
      <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-green-600 to-transparent"></div>

      <button className="relative z-10 group p-[4px] rounded-[12px] bg-[linear-gradient(180deg,#294C32_0%,#67DF89_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
        <div className="bg-transparent rounded-[8px] px-8 py-3 text-center h-[44px] w-[150px]">
          <span className="font-semibold text-white">Contact us</span>
        </div>
      </button>
    </div>
  </div>
</div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 justify-items-center">

  <div className="rounded-[20px] w-full sm:w-[90%] lg:w-[620px] lg:h-[569px] flex flex-col items-center p-4 sm:p-5 md:p-6">
    <img
      src={product2}
      alt="Claim Route 360"
      className="w-full lg:h-[420px] object-cover mb-3 sm:mb-8 rounded-[20px]"
    />
    
    <div>
      <h4 className="text-xl text-white mb-4 font-thicccboi  lg:text-[24px] leading-[100%]">
        Claim Route 360
      </h4>
      <div className="  flex items-center">
        <p className="text-[#9D9D9D] font-thicccboi font-normal text-[16px] leading-[150%]">
          Built for industries who need to save time by keeping claims,
          scheduling, and routes simple and efficient.
        </p>
        
        <Link to="/WhoWeAre" className="ml-2 hidden sm:flex">
             <img src={btt} alt="Go to page" className="cursor-pointer h-[58px] w-[58px]" />
        </Link>
      </div>
    </div>
  </div>

  <div className="rounded-[20px] w-full sm:w-[90%] lg:w-[620px] lg:h-[569px] flex flex-col items-center p-4 sm:p-5 md:p-6">
    <img
      src={product2}
      alt="Privicam"
      className="w-full lg:h-[420px] object-cover mb-3 sm:mb-8 rounded-[20px]"
    />
    <div>
      <h4 className="text-xl text-white mb-4 font-thicccboi  lg:text-[24px] leading-[100%]">
        Privicam
      </h4>
      <div className="flex items-center">
        <p className="text-[#9D9D9D] font-thicccboi font-normal text-[16px] leading-[150%]">
          Built for industries who need to save time by keeping claims,
          scheduling, and routes simple and efficient.
        </p>
        <Link to="/Management" className="ml-2 hidden sm:flex">
           <img src={btt} alt="Go to page" className="cursor-pointer h-[58px] w-[58px]" />
        </Link>
      </div>
    </div>
  </div>


  <div className="rounded-[20px] w-full sm:w-[90%] lg:w-[620px] lg:h-[569px] flex flex-col items-center p-4 sm:p-5 md:p-6">
    <img
      src={product2}
      alt="Crypto Launchpad"
      className="w-full lg:h-[420px] object-cover mb-3 sm:mb-8 rounded-[20px]"
    />
    <div>
      <h4 className="text-xl text-white mb-4 font-thicccboi  lg:text-[24px] leading-[100%]">
        Crypto Launchpad
      </h4>
      <div className="flex items-center">
        <p className="text-[#9D9D9D] font-thicccboi font-normal text-[16px] leading-[150%]">
          Built for industries who need to save time by keeping claims,
          scheduling, and routes simple and efficient.
        </p>
        <Link to="/Privicam" className="ml-2 hidden sm:flex">
            <img src={btt} alt="Go to page" className="cursor-pointer h-[58px] w-[58px]" />
        </Link>
      </div>
    </div>
  </div>


  <div className="rounded-[20px] w-full sm:w-[90%] lg:w-[620px] lg:h-[569px] flex flex-col items-center p-4 sm:p-5 md:p-6">
    <img
      src={product2}
      alt="Crypto Launchpad"
      className="w-full lg:h-[420px] object-cover mb-3 sm:mb-8 rounded-[20px]"
    />
    <div>
      <h4 className="text-xl text-white mb-4 font-thicccboi font-normal lg:text-[24px] leading-[100%]">
        Crypto Launchpad
      </h4>
      <div className="flex items-center">
        <p className="text-[#9D9D9D] font-thicccboi font-normal text-[16px] leading-[150%]">
          Built for industries who need to save time by keeping claims,
          scheduling, and routes simple and efficient.
        </p>
        <Link to="/WhoWeAre" className="ml-2 hidden sm:flex">
          <img src={btt} alt="Go to page" className="cursor-pointer h-[58px] w-[58px]" />
        </Link>
      </div>
    </div>
  </div>


  <div className="rounded-[20px] w-full sm:w-[90%] lg:w-[620px] lg:h-[569px] flex flex-col items-center p-4 sm:p-5 md:p-6">
    <img
      src={product2}
      alt="Crypto Launchpad"
      className="w-full lg:h-[420px] object-cover mb-3 sm:mb-8 rounded-[20px]"
    />
    <div>
      <h4 className="text-xl text-white mb-4 font-thicccboi lg:text-[24px] leading-[100%]">
        Crypto Launchpad
      </h4>
      <div className="flex items-center">
        <p className="text-[#9D9D9D] font-thicccboi font-normal text-[16px] leading-[150%]">
          Built for industries who need to save time by keeping claims,
          scheduling, and routes simple and efficient.
        </p>
        <Link to="/Industry" className="ml-2 hidden sm:flex">
            <img src={btt} alt="Go to page" className="cursor-pointer h-[58px] w-[58px]" />
        </Link>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default AllProducts;
