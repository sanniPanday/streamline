import React from 'react';
import footer from "../assets/image/1.png";

const Footer = () => {
  return (
    <div className="bg-black w-full min-h-[250px] text-white py-8 px-6 md:px-20 flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center space-y-4">
        
        <div className="flex items-center space-x-3 py-8 ">
          <img
            src={footer}
            alt="Streamiine Factory Logo"
            className="h-[90px] w-[100px] object-contain"
          />
          <div className="text-left font-poppins font-bold leading-[160%] tracking-[0%]">
            <h3 className="text-[28px] lg:text-[32px]">Streamiine</h3><br/>
            <h3 className="text-[28px] lg:text-[32px]">factory</h3>
          </div>
        </div>

        <div className="w-full pt-40 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 streamiinefactory. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Terms and conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy policy
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
