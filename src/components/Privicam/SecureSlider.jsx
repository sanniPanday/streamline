import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import img1 from "../../assets/image/s2.png"; 
import img2 from "../../assets/image/s1.png";
import img3 from "../../assets/image/s3.png";
import bttl from "../../assets/image/L.svg"; 
import bttr from "../../assets/image/r.png";  

const SecureSlider = () => {
  const images = [img1, img2, img3, img1, img2, img3, img1, img2, img3];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const breakpoints = {
    1280: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  };

  return (
    <section className="py-16 md:py-32 bg-primary overflow-hidden bg-[linear-gradient(107.56deg,#161616_0%,#2F2F2F_50%,#0A0A0A_100%)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 relative">

        {/* <h2 className="text-3xl md:text-6xl text-white mb-8 font-bold lg:text-[56px] leading-[100%] tracking-[0%] text-center">
          A Simple, Secure Experience
        </h2> */}
         <h1 className=" text-white mb-6 text-2xl sm:text-4xl md:text-5xl font-bold lg:text-[56px] leading-[21px]">
                 A Simple, Secure Experience
            </h1>
        <p className="text-gray-300 mx-auto mb-12 px-14 font-normal text-[20px] leading-[32px] tracking-[0%] text-center">
          From sign-up to daily use, PriviCam makes protecting your personal media effortless. 
          With clean screens, private access, and built-in security, you’re always in control.
        </p>

        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 3 }}
            breakpoints={breakpoints}
            loopAdditionalSlides={2}
            modules={[Autoplay, A11y, EffectCoverflow, Navigation]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mySwiper"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx} className="w-4 md:w-80 lg:w-60 flex justify-center">
                <img
                  src={img}
                  alt={`Slide ${idx}`}
                  className="w-[400px] h-[500px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-12 h-12 z-20 hidden lg:block"
          >
            <img src={bttl} alt="Previous" className="w-full h-full object-contain" />
          </button>

          <button
            ref={nextRef}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-12 h-12 z-20 hidden lg:block"
          >
            <img src={bttr} alt="Next" className="w-full h-full object-contain" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecureSlider;
