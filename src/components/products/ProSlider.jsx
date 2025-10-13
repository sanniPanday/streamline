import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/sid2.jpg",
  "/images/sid2.jpg",
  "/images/sid2.jpg",
  "/images/sid2.jpg",
  "/images/sid2.jpg",
];

export default function ProSlider() {
  return (
    <div className="bg-gray-900 text-white py-10 overflow-hidden">
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          A Simple, Secure Experience
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          From sign-up to daily use, PriviCam makes protecting your personal
          media effortless. With clean screens, private access, and built-in
          security, you're always in control.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative overflow-visible">
        <Swiper
          modules={[Navigation, Pagination]}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mySwiper"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center">
                <img
                  src={src}
                  alt={`slide-${i}`}
                  className="rounded-2xl shadow-lg border border-gray-700 w-64 md:w-72 lg:w-80 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
