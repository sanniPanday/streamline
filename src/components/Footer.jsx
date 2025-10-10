import React from 'react';
import footer from "../assets/image/1.png";
const Footer = () => {
  return (
     <div className="bg-black w-full min-h-[434px] text-white py-10 px-6 md:px-20 flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center space-y-4">
       
        <div className="flex items-center space-x-3">
          <img
            src={footer} 
            alt="Streamiine Factory Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="text-left leading-tight">
            <h3 className="text-xl font-semibold">Streamiine</h3>
            <h3 className="text-xl font-semibold">factory</h3>
          </div>
        </div>

    
       <div className="w-full pt-64 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
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
