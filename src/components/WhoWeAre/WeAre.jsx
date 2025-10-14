import React, { useState } from "react";
import bg from "../../assets/image/bg.png"
const WeAre = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
   <section className="relative bg-gray-900 py-32 px-6 md:px-12 lg:px-24 text-white">
      <div className="absolute inset-0 flex justify-center">
        <img
          src={bg}
          alt="Background"
          className="w-[570px] h-[500px] object-cover opacity-90 mt-0"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      <div className="text-center  mx-auto relative z-10 ">
        <h3 className="text-3xl md:text-4xl lg:text-[70px] lg:leading-[91px] font-bricolage font-bold mb-6 text-white">
          Who We Are
        </h3>
        <p className=" text-gray-300 mb-6  font-poppins font-normal text-[20px] leading-[140%] text-center">
          At Streamline Factory, we build smart software that solves real-world
          problems. From inspection routing to remote repair support, our SaaS
          platforms are built for impact.
        </p>

        <div className="flex justify-center lg:justify-center">
          <div className="relative p-[4px] rounded-[16px]">
            <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-green-600 to-transparent"></div>
            <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-green-600 to-transparent"></div>

            <button className="relative z-10 group p-[4px] rounded-[12px] bg-[linear-gradient(180deg,#294C32_0%,#67DF89_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
              <div className="bg-transparent rounded-[8px] px-8 py-3 text-center h-[44px] w-[150px]">
                <span className="font-semibold text-white"> Contact us</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        {!isVideoOpen ? (
          <div
            className="relative cursor-pointer w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-lg"
            onClick={() => setIsVideoOpen(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1200&q=80"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <button className="bg-white text-gray-900 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                ▶
              </button>
            </div>
          </div>
        ) : (
          <div className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Who We Are Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      <div className=" relative z-10  mt-16 mx-auto text-center lg:text-start">
        <h4 className="text-3xl md:text-3xl lg:text-[48px] mb-4 font-bold leading-[140%] tracking-[0] text-center lg:text-start">
          Our mission - message from founder
        </h4>
        <p className="text-gray-300 px-0 md:px-10 lg:px-0 text-center lg:text-start text-md font-light lg:text-[24px] leading-[140%] ">
          At Streamline Factory, we believe complex work should be simple. After
          years in industries weighed down by inefficiency, we set out to create
          software that takes the stress out of everyday tasks. Our mission is
          to give professionals the tools they need to save time, cut through
          clutter, and focus on what really matters — results.
        </p>
      </div>
    </section>
  );
};

export default WeAre;
