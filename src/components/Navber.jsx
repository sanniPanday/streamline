import React, { useState, useEffect } from "react";
import img from "../assets/image/1.png";
import button1 from "../assets/image/cont.svg";
import { Link } from "react-router-dom";

function Navber() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-sm bg-[#10252d]/40 text-white shadow-md "
          : "backdrop-blur-sm bg-[#10252d]/40 text-white shadow-md "
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center space-x-2">
          <Link to="/" className="ml-2">
            <img
              src={img}
              alt="Logo"
              className="w-[60px] h-[64px] object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
          <Link
            to="#"
            className="hover:text-gray-400 transition font-normal text-base leading-none tracking-normal text-center"
          >
            About us
          </Link>
          <Link
            to="/product"
            className="hover:text-gray-400 transition font-normal text-base leading-none tracking-normal text-center"
          >
            Our products
          </Link>
          <Link
            to="#"
            className="hover:text-gray-400 transition font-normal text-base leading-none tracking-normal text-center"
          >
            Blog
          </Link>

          <div className="flex justify-start items-center gap-12 h-full">
            <div className="relative p-[4px] rounded-[16px]">
              <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-green-600 to-transparent"></div>
              <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-green-600 to-transparent"></div>

              <Link to="/contact" className="relative z-10 block rounded-[12px]">
                <button className="w-full group p-[4px] rounded-[12px] bg-[linear-gradient(180deg,#294C32_0%,#67DF89_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                  <div className="bg-transparent rounded-[8px] px-3 py-2">
                    <div className="flex gap-2 items-center">
                      <span className="font-semibold text-white">
                        Contact us
                      </span>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col space-y-4 px-6 py-4 text-sm font-medium transition-all duration-300 ${
            scrolled
              ? "bg-[#10252d]/80 text-white"
              : "backdrop-blur-md bg-[#10252d]/80 text-white"
          }`}
        >
          <Link to="#" className="hover:text-gray-400 transition">
            About us
          </Link>
          <Link to="#" className="hover:text-gray-400 transition">
            Our products
          </Link>
          <Link to="#" className="hover:text-gray-400 transition">
            Blog
          </Link>

          <div className="flex justify-start items-center gap-12 h-full">
            <div className="bg-gradient-to-b from-green-600 to-transparent p-[4px] rounded-[16px]">
              <button className="group p-[4px] rounded-[12px] bg-[linear-gradient(180deg,#294C32_0%,#67DF89_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                <div className="bg-transparent rounded-[8px] px-3 py-2">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold text-white">Contact us</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navber;
