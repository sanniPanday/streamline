import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../assets/image/p2.png";
import product2 from "../../assets/image/pro3.png";
import bg from "../../assets/image/bg.png";
import btt from "../../assets/image/btt.svg";

function AllProducts() {
  const products = [
    { img: product1, title: "Claim Route 360", link: "/WhoWeAre" },
    { img: product2, title: "Privicam", link: "/Management" },
    { img: product1, title: "Crypto Launchpad", link: "/Privicam" },
    { img: product2, title: "Crypto Launchpad", link: "/WhoWeAre" },
    { img: product1, title: "Crypto Launchpad", link: "/Industry" },
  ];

  return (
    <div className="relative bg-[#10252d] py-20 md:py-28 lg:py-24 xl:py-20 px-4 md:px-10">
    
   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0">
  <img
    src={bg} 
    alt="Background"
    className="w-[250px] sm:w-[400px] md:w-[500px] lg:w-[570px] object-cover"
  />
</div>

      
      <div className="relative max-w-7xl mx-auto text-center mb-12 z-10">
        <h3 className="font-thicccboi font-bold text-[48px] md:text-4xl leading-[140%] text-white mb-4">
          All Products
        </h3>
        
        <p className="font-thicccboi font-normal text-[16px] sm:text-[18px] leading-[26px] text-white px-4 sm:px-10 md:px-14 mx-auto">
          Streamline Factory creates a range of software solutions designed to
          make everyday tasks easier and more efficient. Our products span
          different industries and use cases, offering tools that simplify
          work, improve communication, and support better results. Each
          application is built with a focus on usability, innovation, and
          long-term value.
        </p>

         <div className="flex justify-center lg:justify-center mt-6">
              <div className="relative p-[4px] rounded-[16px]">
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-green-600 to-transparent"></div>
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-green-600 to-transparent"></div>

                <button className="relative z-10 group p-[4px] rounded-[12px] bg-[linear-gradient(180deg,#294C32_0%,#67DF89_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                  <div className="bg-transparent rounded-[8px] px-8 py-3 text-center h-[44px] w-[150px]">
                    <span className="font-semibold text-white">Contact us</span>
                  </div>
                </button>
              </div>
            </div>
      </div>

     
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 justify-items-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-card rounded-lg w-full sm:w-[90%] lg:w-[620px] flex flex-col items-center p-6"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-[90%] sm:w-full h-[300px] sm:h-[420px] object-cover mb-4 rounded"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl mb-2 font-thicccboi font-semibold lg:text-[24px] leading-[100%]">
                {product.title}
              </h3>
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 sm:gap-0">
                <p className="text-[#9D9D9D] font-thicccboi font-normal text-[15px] sm:text-[16px] leading-[150%] text-center sm:text-left">
                  Built for industries who need to save time by keeping claims,
                  scheduling, and routes simple and efficient.
                </p>
                <Link
                  to={product.link}
                  className="hidden sm:block sm:ml-2 mt-3 sm:mt-0"
                >
                  <img
                    src={btt}
                    alt="Go to page"
                    className="cursor-pointer h-[54px] w-[54px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
