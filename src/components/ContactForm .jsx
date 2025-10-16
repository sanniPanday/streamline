import React from "react";
import bg from "../assets/image/bg.png";

const ContactForm = () => {
  return (
    <div className="relative bg-[#1B1B1B] w-full min-h-[564px] flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-18 py-16 text-white overflow-hidden">
      
     
      <img
        src={bg}
        alt="background"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] opacity-15 object-contain z-0"
      />

      <div className="relative flex flex-col md:flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-[1440px] gap-12 lg:gap-20 z-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className=" font-thicccboi font-bold leading-[100%] tracking-[0%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Let’s Build It{" "}
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            Together
          </h2>
          <p className="font-thicccboi font-normal lg:text-[18px] leading-[26px] tracking-[0%] text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
            We’ll reach out to you in the next few hours to arrange a meeting
            where we can talk about your objectives.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <form className="bg-transparent flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full md:w-1/2 p-3 rounded-[8px] bg-[#2F2F2F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full md:w-1/2 p-3 rounded-[8px] bg-[#2F2F2F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full p-3 rounded-[8px] bg-[#2F2F2F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>

            <div className="flex justify-center lg:justify-end">
              <div className="relative p-[4px] rounded-[16px]">
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-green-600 to-transparent"></div>
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-green-600 to-transparent"></div>

                <button className="relative z-10 group p-[4px] rounded-[12px] bg-[linear-gradient(180deg,#294C32_0%,#67DF89_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                  <div className="bg-transparent rounded-[8px] px-8 py-3 text-center h-[44px] w-[130px]">
                    <span className="font-semibold text-white">Submit</span>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
