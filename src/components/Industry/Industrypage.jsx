import React, { useState } from "react";
import prod1 from "../../assets/image/in1.png";
import prod2 from "../../assets/image/in2.png";
import prod3 from "../../assets/image/in3.png";
// import prod4 from "../../assets/image/p2.png";
 import bgi from "../../assets/image/bg.png"
const filters = [
  "All",
  "Claim Route 360",
  "Service Route 360",
  "PriviCom",
  "Automotive SaaS",
  "FixMate",
  "Streamline Factory",
];

const categories = [
  "Product Updates",
  "How to guides",
  "Industry Insights",
  "Customer stories",
  "Company news",
];

const cards = [
  {
    id: 1,
    title: "Wait... What Claim Is This?",
    author: "Alec Whitten",
    date: "1 Jan 2023",
    desc: "Show up prepared every time with context rich appointments and streamlined workflows.",
    category: "Claim Route 360",
    img: prod1,
  },
  {
    id: 2,
    title: "Better Service Tracking",
    author: "Alec Whitten",
    date: "1 Jan 2023",
    desc: "Get real-time updates for each route in one dashboard.",
    category: "Service Route 360",
    img: prod2,
  },
  {
    id: 3,
    title: "FixMate: Repair Simplified",
    author: "Alec Whitten",
    date: "1 Jan 2023",
    desc: "Fix issues fast with automated diagnostics.",
    category: "FixMate",
    img: prod3,
  },
  {
    id: 4,
    title: "Privicom Security Enhancements",
    author: "Alec Whitten",
    date: "1 Jan 2023",
    desc: "Enhanced privacy control and secure communications.",
    category: "PriviCom",
    img: prod1,
  },
  {
    id: 5,
    title: "Streamline Factory Workflows",
    author: "Alec Whitten",
    date: "1 Jan 2023",
    desc: "Make production efficient with automation tools.",
    category: "Streamline Factory",
    img: prod2,
  },
  {
    id: 6,
    title: "Automotive SaaS Growth",
    author: "Alec Whitten",
    date: "1 Jan 2023",
    desc: "Driving innovation in automotive software.",
    category: "Automotive SaaS",
    img: prod3,
  },
];

export default function Industrypage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cards.filter((card) => {
    const matchesCategory =
      selectedFilter === "All" || card.category === selectedFilter;
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className=" relative min-h-screen bg-[#10252d] text-white">
     <img
    src={bgi}
    alt="background"
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] opacity-70 object-contain z-0"
  />
      <div className=" relative z-10 text-center py-28 px-6 md:px-10">
        <h4 className="text-3xl md:text-5xl mb-4 lg:text-[70px] font-bold lg:leading-[81px] tracking-normal  font-bricolage tracking-0 text-center ">
          Industry Insights & Updates
        </h4>
        <div className="px-12">
           <p className="text-gray-300 mx-auto  mb-8 text-[18px]  leading-[130%] tracking-normal text-center font-poppins">
       Subscribe to learn about new product features, the latest in technology, solutions, and updates.
        </p>
        </div>
       

        <div className=" relative z-10 flex justify-center items-center gap-2 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search product name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[54px] px-4 py-3 rounded-[8px] text-gray-800 outline-none"
          />
          {/* <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md font-medium transition">
            Search
          </button> */}
          <div className="flex justify-center lg:justify-end">
              <div className="relative p-[4px] rounded-[16px]">
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-green-600 to-transparent"></div>
                <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-green-600 to-transparent"></div>

                <button className="relative z-10 group p-[4px] rounded-[12px] bg-[linear-gradient(180deg,#294C32_0%,#67DF89_100%)] shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                  <div className="bg-transparent rounded-[8px] px-8 py-3 text-center h-[44px] w-[130px] ">
                    <span className="font-semibold text-white">Submit</span>
                  </div>
                </button>
              </div>
            </div>
        </div>
<div className="text-center lg:mr-40 mr-o">
  <p className=" text-gray-400 text-sm mt-3">
          We care about your data in our{" "}
          <a href="#" className="underline text-gray-300">
            privacy policy
          </a>
          
        </p>
</div>
        
      </div>

      <div className="p-6 md:p-2 flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4 bg-[rgba(10,10,10,1)]/60 backdrop-blur-sm p-5 rounded-2xl h-max border border-blue-900/40">
          <h2 className="text-lg font-semibold mb-4">Filter by</h2>
          <div className="space-y-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                  selectedFilter === filter
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-[#2B3A55]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                className=" relative z-10 px-4 py-2 rounded-[5px] bg-[rgba(0,0,0,0.8)]/10 border-2 border-[rgba(84,84,84,1)]/60 hover:bg-blue-500 transition text-sm"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.length > 0 ? (
              filteredCards.map((card) => (
                <div
                  key={card.id}
                  className=" rounded-[10px] border-gray-700/90 rounded-2  overflow-hidden  hover:shadow-blue-500/20 transition"
                >
                  {/* <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-52 object-cover rounded-[10px] border-gray-700/90 rounded-2"
                  /> */}
                  <img
  src={card.img}
  alt={card.title}
  className="w-full h-52 object-cover rounded-[10px] border-gray-700/90 rounded-2
             transition-transform duration-300 ease-in-out
             hover:scale-105 hover:brightness-300 hover:shadow-lg hover:rounded-[10px]"
/>

                  <div className="p-1 py-8">
                    <p className="text-sm font-inter font-semibold lg:text-[14px] leading-[20px] tracking-[0%] text-green-500">
                      {card.author} • {card.date}
                    </p>
                    <h4 className="mt-4 font-thicccboi font-semibold text-[20px] leading-[120%] tracking-[0%] racking-[0%]text-[20px]">
                      {card.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-3 font-[Inter] font-normal lg:text-[16px] leading-[24px] tracking-[0%]">{card.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center col-span-full">
                No products found.
              </p>
            )}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${
                    n === 1
                      ? "bg-blue-600 text-white"
                      : "bg-[#1B263B]/80 text-gray-300 hover:bg-blue-700"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
