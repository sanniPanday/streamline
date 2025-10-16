import React, { useRef, useState, useEffect } from "react";
import SlickSlider from "react-slick";

import Right from "../../assets/image/r.png";
import Lif from "../../assets/image/L.svg";
import bgsl from "../../assets/image/bg.png";

import sider1 from "../../assets/image/image 2.png";
import sider2 from "../../assets/image/sid1.jpg";
import sider3 from "../../assets/image/sid2.jpg";

import phoneImg from "../../assets/image/ast3.png";
import googlePlay from "../../assets/image/ast1.png";
import appStore from "../../assets/image/ast2.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliderpr = () => {
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

    
    handleResize();

   
    window.addEventListener("resize", handleResize);

    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      img: sider1,
      name: "Client 1",
      position: "CEO, Company",
      text: "Finally, I can store personal photos without worrying about them syncing to the cloud. PriviCam is exactly what I needed.",
    },
    {
      img: sider2,
      name: "Jocelyn Septimus",
      position: "CEO, Company",
      text: "I love how simple it is. Quick pin login and all my files stay private. I won’t use anything else.",
    },
    {
      img: sider3,
      name: "Client 3",
      position: "CEO, Company",
      text: "Est tellus vitae, nullam lobortis enim. Faucibus amet etiaI love how simple it is. Quick pin login and all my files stay private. I won’t use anything else.",
    },
  ];

  return (
    <div className="relative bg-[#10252d] text-white py-16 px-6 md:px-16 overflow-hidden">
      
      <div
        className="absolute inset-0 z-0 bg-center bg-cover opacity-80"
        style={{ backgroundImage: `url(${bgsl})` }}
      ></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        <h2 className="text-2xl text-center lg:text-start md:text-4xl font-bold mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-400 text-center lg:text-start mb-10 max-w-xl  font-normal text-[18px] leading-[26px] tracking-[0]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam.
        </p>

        <div className="hidden md:flex justify-end gap-4 mb-6">
          <img
            src={Lif}
            alt="Previous"
            onClick={() => sliderRef.current.slickPrev()}
            className="h-12 w-12 cursor-pointer transition"
          />
          <img
            src={Right}
            alt="Next"
            onClick={() => sliderRef.current.slickNext()}
            className="h-12 w-12 cursor-pointer transition"
          />
        </div>

        <div className="overflow-hidden">
          <SlickSlider ref={sliderRef} {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-4">
                <div className="h-[272px] md:h-[252px] w-full bg-gradient-to-br from-green-900 to-gray-900 rounded-[20px] border-2 border-gray-700/90 p-6 shadow-lg">
                  <div className="flex items-center mb-6">
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

        <div className="relative w-full h-[690px] md:h-[400px] lg:h-[439px]  bg-gradient-to-r from-[#0f1c24] to-[#112630] text-white py-16 px-6 md:px-0 mt-20 flex flex-col md:flex-row items-center justify-between rounded-[20px] border-2 border-gray-700/90">
          
          {/* <div className=" text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download PriviCam Today
            </h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
              Take control of your photos and videos with secure storage that’s built for privacy. 
              Download now and protect your memories the easy way.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <img src={googlePlay} alt="Google Play" className="h-12 cursor-pointer" />
              <img src={appStore} alt="App Store" className="h-12 cursor-pointer" />
            </div>
          </div> */}
<div className="text-center md:text-left ml-10 lg:ml-20">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    Download PriviCam Today
  </h2>

  <p className="text-gray-300 mb-10 text-sm md:text-[18px] leading-relaxed">
    Take control of your photos and videos with secure storage that’s built for privacy.
    Download now and protect your memories the easy way.
  </p>

  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
    <img src={googlePlay} alt="Google Play" className="h-12 cursor-pointer" />
    <img src={appStore} alt="App Store" className="h-12 cursor-pointer" />
  </div>
</div>

          <div className="mt-10 md:mt-0  flex justify-end ">
            <img 
              src={phoneImg} 
              alt="PriviCam App" 
              className="h-[250px]  sm:w-[200px] md:w-[400px] lg:h-[380px] w-[200px]  drop-shadow-xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sliderpr;


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