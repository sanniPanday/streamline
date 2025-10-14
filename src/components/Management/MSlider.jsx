import React, { useRef, useState } from "react";
import SlickSlider from "react-slick";

import Right from "../../assets/image/r.png";
import Lif from "../../assets/image/L.svg";
import bgsl from "../../assets/image/bg.png";

import sider1 from "../../assets/image/image 2.png";
import sider2 from "../../assets/image/sid1.jpg";
import sider3 from "../../assets/image/sid2.jpg";

import btt from "../../assets/image/tb.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MSlider = () => {
  const sliderRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

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

  const faqs = [
    {
      question: "What is PriviCam?",
      answer:
        "PriviCam is a privacy-focused gallery app that keeps your photos safe and secure.",
    },
    {
      question: "Who should use PriviCam?",
      answer:
        "Anyone who wants to protect their personal photos and videos from unauthorized access.",
    },
    {
      question: "How is PriviCam different from my phone's default gallery?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "Can I use PriviCam on any device?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "Can I take photos and videos directly in PriviCam?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "Can I import existing photos and videos?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "How do I organize my files in PriviCam?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "Does PriviCam support document storage?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "Can I back up my files?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "Does PriviCam work offline?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "How is my content protected?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "Can I use Face ID or fingerprint to unlock PriviCam?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "Are my photos and videos uploaded to the cloud automatically?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "Does PriviCam track or share my data?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "Is PriviCam free to use?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "What’s included in the paid plans?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "Do I need a subscription to use PriviCam?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
    {
      question: "How can I get help with PriviCam?",
      answer:
        "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-[#10252d] text-white overflow-hidden">
      <div className="py-16 px-6 md:px-16 relative">
        <div
          className="absolute inset-0 z-0 bg-center bg-cover opacity-0"
          style={{ backgroundImage: `url(${bgsl})` }}
        ></div>

        <div className="relative max-w-7xl mx-auto z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam.
          </p>

          <div className="flex justify-end gap-4 mb-6">
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
                  <div className="h-[272px] md:h-[252px] w-full bg-gradient-to-br from-green-900 to-gray-900 rounded-xl p-6 shadow-lg">
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
        </div>
      </div>

      <div className=" text-white py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 font-normal text-[16px] sm:text-[18px] leading-[26px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam.
          </p>
        </div>

        <div className="space-y-4 lg:max-w-[1100px]  sm:max-w-xl md:max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] rounded-[20px] overflow-hidden border border-gray-800"
            >
              <div
                className="w-full  rounded-[20px]  font-bold  lg:text-[20px] leading-[100%] tracking-[0%] flex justify-between items-center px-4 sm:px-6 py-4 cursor-pointer "
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-[16px] sm:text-[18px] md:text-[20px]">
                  {faq.question}
                </span>
                <img
                  src={btt}
                  alt="Toggle FAQ"
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  } h-8 sm:h-10 md:h-14`}
                />
              </div>
              <div
                className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="   tracking-[0%] text-gray-300 font-normal text-[14px] sm:text-[16px] md:text-[16px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MSlider;
