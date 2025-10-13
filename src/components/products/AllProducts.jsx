import React from "react";
import product1 from "../../assets/image/p2.png"; 
import product2 from "../../assets/image/pro3.png"; 
import btt from "../../assets/image/btt.svg"
import { Link } from "react-router-dom";
function AllProducts() {
  return (
    <section className="bg-gray-900 py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-thicccboi  lg:text-[48px] leading-[140%] text-center">All Products</h2>
        <p className=" font-thicccboi  text-white px-14 mx-auto  font-normal text-[18px] leading-[26px] tracking-[0%] text-center">
          Streamline Factory creates a range of software solutions designed to
          make everyday tasks easier and more efficient. Our products span
          different industries and use cases, offering tools that simplify
          work, improve communication, and support better results. Each
          application is built with a focus on usability, innovation, and long-term value.
        </p>
     
            <div className="flex justify-center lg:justify-center mt-6">
              <div className="relative p-[4px] rounded-[16px]">
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-green-600 to-transparent"></div>
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-green-600 to-transparent"></div>

                <button className="relative z-10 group p-[4px] rounded-[12px] bg-[linear-gradient(180deg,#294C32_0%,#67DF89_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                  <div className="bg-transparent rounded-[8px] px-8 py-3 text-center h-[44px] w-[150px]">
                    <span className=" text-white  font-medium text-[16px] leading-[100%] tracking-[0%] text-center">Contact us</span>
                  </div>
                </button>
              </div>
            </div>
      </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
  <div className="bg-white shadow-md rounded-lg w-full sm:w-[90%] lg:w-[620px] h-[569px] flex flex-col items-center p-6">
    <img src={product1} alt="Claim Route 360" className="w-full h-[420px] object-cover mb-4 rounded" />
    <div>
    <h3 className="text-xl  mb-2 font-thicccboi font-semibold lg:text-[24px] leading-[100%]">Claim Route 360</h3>
    <div className="flex align-center">
<p className="text-[#9D9D9D] font-thicccboi font-normal text-[16px] leading-[150%]">
      Built for industries who need to save time by keeping claims, scheduling, and routes simple and efficient.
    </p>
   <Link to="/WhoWeAre" className="ml-2">
   <div>
  <img src={btt} alt="Go to page" className="cursor-pointer h-[54px] w-[54px] " />
  </div>
</Link>
    </div>
    
    </div>
  </div>

  <div className="bg-white shadow-md rounded-lg w-full sm:w-[90%] lg:w-[620px] h-[569px] flex flex-col items-center p-6">
    <img src={product2} alt="Privicam" className="w-full h-[420px] object-cover mb-4 rounded" />
    <div>
    <h3 className="text-xl  mb-2 font-thicccboi font-semibold lg:text-[24px] leading-[100%]">Privicam</h3>
   <div className="flex align-center">
<p className="text-[#9D9D9D] font-thicccboi font-normal text-[16px] leading-[150%]">
      Built for industries who need to save time by keeping claims, scheduling, and routes simple and efficient.
    </p>
     <Link to="/Management" className="ml-2">
 <img src={btt} alt="Go to page" className="cursor-pointer h-[54px] w-[54px] " />
</Link>
    </div>
    </div>
  </div>

  <div className="bg-white shadow-md rounded-lg w-full sm:w-[90%] lg:w-[620px] h-[569px] flex flex-col items-center p-6">
    <img src={product1} alt="Crypto Launchpad" className="w-full h-[420px] object-cover mb-4 rounded" />
    <div>
    <h3 className="text-xl  mb-2 font-thicccboi font-semibold lg:text-[24px] leading-[100%]">Crypto Launchpad</h3>
   <div className="flex align-center">
<p className="text-[#9D9D9D] font-thicccboi font-normal text-[16px] leading-[150%]">
      Built for industries who need to save time by keeping claims, scheduling, and routes simple and efficient.
    </p>
     <Link to="/Privicam" className="ml-2">
 <img src={btt} alt="Go to page" className="cursor-pointer h-[54px] w-[54px] " />
</Link>
    </div>
    </div>
  </div>

  <div className="bg-white shadow-md rounded-lg w-full sm:w-[90%] lg:w-[620px] h-[569px] flex flex-col items-center p-6">
    <img src={product2} alt="Crypto Launchpad" className="w-full h-[420px] object-cover mb-4 rounded" />
    <div>
    <h3 className="text-xl  mb-2 font-thicccboi font-semibold lg:text-[24px] leading-[100%]">Crypto Launchpad</h3>
   <div className="flex align-center">
<p className="text-[#9D9D9D] font-thicccboi font-normal text-[16px] leading-[150%]">
      Built for industries who need to save time by keeping claims, scheduling, and routes simple and efficient.
    </p>
    <Link to="/WhoWeAre" className="ml-2">
 <img src={btt} alt="Go to page" className="cursor-pointer h-[54px] w-[54px] " />
</Link>
    </div>
    </div>
  </div>

  <div className="bg-white shadow-md rounded-lg w-full sm:w-[90%] lg:w-[620px] h-[569px] flex flex-col items-center p-6">
    <img src={product1} alt="Crypto Launchpad" className="w-full h-[420px] object-cover mb-4 rounded" />
    <div>
    <h3 className="text-xl  mb-2 font-thicccboi font-semibold lg:text-[24px] leading-[100%]">Crypto Launchpad</h3>
   <div className="flex align-center">
<p className="text-[#9D9D9D] font-thicccboi font-normal text-[16px] leading-[150%]">
      Built for industries who need to save time by keeping claims, scheduling, and routes simple and efficient.
    </p>
    <Link to="/Industry" className="ml-2">
 <img src={btt} alt="Go to page" className="cursor-pointer h-[54px] w-[54px] " />
</Link>
    </div>
    </div>
  </div>
  
</div>

    </section>
  );
}

export default AllProducts;
