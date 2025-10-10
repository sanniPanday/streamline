import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import img1 from "../../assets/image/f1.png";
import img2 from "../../assets/image/f2.png";

export default function SecureSlider() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        className="w-full max-w-6xl"
      >
        {[img1, img2, img1, img2].map((src, i) => (
          <SwiperSlide key={i} className="w-[400px] h-[300px] flex items-center justify-center">
            <img src={src} alt={`slide-${i}`} className="rounded-2xl object-cover w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
