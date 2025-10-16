import React, { useEffect, useRef, useState } from "react";
import SlickSlider from "react-slick";

import Right from "../assets/image/r.png";
import Lif from "../assets/image/L.svg";
import bgsl from "../assets/image/bg.png";

import sider1 from "../assets/image/image 2.png";
import sider2 from "../assets/image/sid1.jpg";
import sider3 from "../assets/image/sid2.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//  import tf from "../assets/font/Bricolage_Grotesque/static/BricolageGrotesque_24pt_Condensed-Bold.ttf";

// import tff from "../assets/font/Bricolage_Grotesque/static/BricolageGrotesque_24pt_Condensed-Bold.ttf"

const Slider = () => {
  const [slideCount, setSlideCount] = useState(2);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: slideCount,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 468, settings: { slidesToShow: 1 } },
    ],
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSlideCount(1);
      } else {
        setSlideCount(2);
      }
    };

    window.addEventListener("resize", handleResize);

 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const testimonials = [
    {
      img: sider1,
      name: "Client ",
      position: "CEO, Company",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper.",
    },
    {
      img: sider2,
      name: "Client ",
      position: "Marketing Head",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper.",
    },
    {
      img: sider3,
      name: "Client ",
      position: "Product Manager",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper.",
    },
  ];

  return (
    <div className="relative bg-[#10252d] text-white py-16 px-6 md:px-16 overflow-hidden">
      <img
        src={bgsl}
        alt="background"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] opacity-85 object-contain z-0"
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <h4 className="lg:text-[56px] leading-[100%] tracking-[0%]text-3xl md:text-4xl font-bold mb-4 text-center md:text-center lg:text-left">
          What Clients say about us
        </h4>
        <p className=" font-thicccboi font-normal text-[18px] leading-[26px] tracking-[0%] text-gray-400 mb-10 max-w-2xl mx-auto md:mx-auto lg:mx-0 text-center md:text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam.
        </p>

        <div className="hidden sm:flex justify-end gap-4 mb-6">
          <img
            src={Lif}
            alt="Previous"
            onClick={() => sliderRef.current.slickPrev()}
            className="h-14 w-14 cursor-pointer p-2 bbg-[#10252d]  transition"
          />
          <img
            src={Right}
            alt="Next"
            onClick={() => sliderRef.current.slickNext()}
            className="h-14 w-14 cursor-pointer p-2  transition"
          />
        </div>

        <div className="overflow-hidden">
          <SlickSlider ref={sliderRef} {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-1  ">
                <div className="  border-gray-700/90 border-2 lg:h-[272px] lg:w-[570px] xl:w-[570px] bg-gradient-to-br from-green-900 to-gray-900 rounded-[20px] p-6 shadow-lg text-center md:text-center lg:text-left mx-auto">
                  <div className=" flex flex-col lg:flex-row items-center lg:items-start mb-6 mt-3 lg:mt-5">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-24 h-24 rounded-full border-2 border-green-500 mb-4 lg:mb-0 lg:mr-4"
                    />
                    <div>
                      <h3 className="text-lg mt-6 font-poppins font-medium lg:text-[24px] leading-[100%] tracking-[0px]">
                        {t.name}
                      </h3>
                      <p className="text-sm mt-4 text-gray-400 font-poppins font-normal lg:text-[16px] leading-[100%] tracking-[0%]">
                        {t.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400  text-base font-poppins font-light text-[16px] leading-[24px] tracking-[0%]">
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </div>
  );
};

export default Slider;

// import React, { useRef } from "react";
// import SlickSlider from "react-slick";

// import Right from "../assets/image/r.png";
// import Lif from "../assets/image/L.svg";
// import bgsl from "../assets/image/bg.png";

// import sider1 from "../assets/image/image 2.png";
// import sider2 from "../assets/image/sid1.jpg";
// import sider3 from "../assets/image/sid2.jpg";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Slider = () => {
//   const sliderRef = useRef(null);
// const settings = {
//   infinite: true,
//   autoplay: true,
//   speed: 800,
//   autoplaySpeed: 3000,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   arrows: false,
//   responsive: [

//     { breakpoint: 1024, settings: { slidesToShow: 1 } },
//     { breakpoint: 768, settings: { slidesToShow: 1 } },
//     { breakpoint: 468, settings: { slidesToShow: 1 } },
//   ],
// };

//   const testimonials = [
//     {
//       img: sider1,
//       name: "Client 1",
//       position: "CEO, Company",
//       text: "Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
//     },
//     {
//       img: sider2,
//       name: "Client 2",
//       position: "Marketing Head",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       img: sider3,
//       name: "Client 3",
//       position: "Product Manager",
//       text: "Est tellus vitae, nullam lobortis enim. Faucibus amet etiam.",
//     },
//   ];

//   return (
//     <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 md:px-16 overflow-hidden">

//       <div
//         className="absolute inset-0 z-0 bg-center bg-cover opacity-80"
//         style={{ backgroundImage: `url(${bgsl})` }}
//       ></div>

//       <div className="relative max-w-7xl mx-auto z-10">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           What Clients say about us
//         </h2>
//         <p className="text-gray-400 mb-10 max-w-2xl">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
//           ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
//           amet etiam.
//         </p>

//         <div className="flex justify-end gap-4 mb-6">
//           <img
//             src={Lif}
//             alt="Previous"
//             onClick={() => sliderRef.current.slickPrev()}
//             className="h-12 w-12 cursor-pointer  transition"
//           />
//           <img
//             src={Right}
//             alt="Next"
//             onClick={() => sliderRef.current.slickNext()}
//             className="h-12 w-12 cursor-pointer  transition"
//           />
//         </div>

//        <div className="overflow-hidden">

//         <SlickSlider ref={sliderRef} {...settings}>
//           {testimonials.map((t, i) => (
//             <div key={i} className="px-4 ">

//               <div className="lg:h-[272px]   lg:w-[560px] bg-gradient-to-br from-green-900 to-gray-900 rounded-xl p-6 shadow-lg">
//                 <div className="flex items-center mb-8 mt-5">
//                   <img
//                     src={t.img}
//                     alt={t.name}
//                     className="w-20 h-20 rounded-full border-2 border-green-500 mr-4"
//                   />
//                   <div>
//                     <h3 className="text-lg font-semibold">{t.name}</h3>
//                     <p className="text-sm text-gray-400">{t.position}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 font-light text-base leading-6">
//                   {t.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </SlickSlider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

{
  /* <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Clients say about us
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam.
        </p>

        
        <div className="flex justify-end gap-4 mb-6">
          <img
            src={Lif}
            alt="Previous"
            onClick={() => sliderRef.current.slickPrev()}
            className="h-12 w-12 cursor-pointer p-2 bg-gray-800/70 rounded-full hover:bg-gray-700 transition"
          />
          <img
            src={Right}
            alt="Next"
            onClick={() => sliderRef.current.slickNext()}
            className="h-12 w-12 cursor-pointer p-2 bg-gray-800/70 rounded-full hover:bg-gray-700 transition"
          />
        </div>

        <SlickSlider ref={sliderRef} {...settings}>
          {[sider1, sider2, sider3].map((img, i) => (
            <div key={i} className="px-4">
              <div className="h-[272px] sm:h-[252px] w-[272px] lg:w-full bg-gradient-to-br from-green-900 to-gray-900 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-8 mt-5">
                  <img
                    src={img}
                    alt="Client"
                    className="w-20 h-20 rounded-full border-2 border-green-500 mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Client {i + 1}</h3>
                    <p className="text-sm text-gray-400">Position</p>
                  </div>
                </div>
                <p className="text-gray-300 font-light text-base leading-6">
                  Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                </p>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div> */
}
