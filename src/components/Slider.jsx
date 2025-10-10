import React, { useRef } from "react";
import SlickSlider from "react-slick";

import Right from "../assets/image/r.png";
import Lif from "../assets/image/L.svg";
import bgsl from "../assets/image/bg.png";

import sider1 from "../assets/image/image 2.png";
import sider2 from "../assets/image/sid1.jpg";
import sider3 from "../assets/image/sid2.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
  const sliderRef = useRef(null);
const settings = {
  infinite: true,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 3000,
  slidesToShow: 2, 
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    
    { breakpoint: 1024, settings: { slidesToShow: 1 } }, 
    { breakpoint: 768, settings: { slidesToShow: 1 } }, 
    { breakpoint: 468, settings: { slidesToShow: 1 } },  
  ],
};



  const testimonials = [
    {
      img: sider1,
      name: "Client 1",
      position: "CEO, Company",
      text: "Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
    },
    {
      img: sider2,
      name: "Client 2",
      position: "Marketing Head",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: sider3,
      name: "Client 3",
      position: "Product Manager",
      text: "Est tellus vitae, nullam lobortis enim. Faucibus amet etiam.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 md:px-16 overflow-hidden">
     
      <div
        className="absolute inset-0 z-0 bg-center bg-cover opacity-80"
        style={{ backgroundImage: `url(${bgsl})` }}
      ></div>

     
      <div className="relative max-w-7xl mx-auto z-10">
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
            className="h-12 w-12 cursor-pointer  transition"
          />
          <img
            src={Right}
            alt="Next"
            onClick={() => sliderRef.current.slickNext()}
            className="h-12 w-12 cursor-pointer  transition"
          />
        </div>

       <div className="overflow-hidden">

        <SlickSlider ref={sliderRef} {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              
              <div className="h-[272px]  sm:h-[252px] w-[500px] sm:w-  md:w-[320px] lg:w-full bg-gradient-to-br from-green-900 to-gray-900 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-8 mt-5">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 rounded-full border-2 border-green-500 mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{t.name}</h3>
                    <p className="text-sm text-gray-400">{t.position}</p>
                  </div>
                </div>
                <p className="text-gray-300 font-light text-base leading-6">
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


  {/* <div className="relative max-w-7xl mx-auto z-10">
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
      </div> */}