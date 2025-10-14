import React from "react";

const benefits = [
  {
    title: "Save Hours Every Week",
    description: "Automatically schedule and route your claims so you spend less time driving and more time closing files.",
  },
  {
    title: "Seamless Communication",
    description: "Calls, texts, and emails are logged automatically so you can keep every conversation connected to the right claim.",
  },
  {
    title: "Stay On Top of Inspections",
    description: "Never miss an appointment with built-in reminders and claim tracking.",
  },
  {
    title: "Stay Organized Anywhere",
    description: "Access your claims, routes, and documents from the field or the office, keeping you in control no matter where you are.",
  },
  {
    title: "Track Every Detail",
    description: "Activity logs and claim histories ensure nothing slips through the cracks — every file is documented and audit-ready.",
  },
  {
    title: "Grow Your Earnings",
    description: "By reducing wasted time and maximizing efficiency, you can handle more claims and increase your revenue.",
  },
];

const BenefitsSection = () => {
  return (
    <div className="lg:min-h-screen  px-4 py-24 md:px-16 bg-[linear-gradient(107.56deg,#161616_0%,#2F2F2F_50%,#0A0A0A_100%)] text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4 mb-2 lg:text-[48px] font-bold leading-[140%] tracking-normal font-thicccboi">Key benefits for adjuster</h2>
        <p className="text-gray-300">Designed to save adjusters time, reduce stress, and maximize efficiency.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[411px] h-[196px] mx-auto bg-gradient-to-b from-black/40 to-green-900/70 border-2 border-gray-600 rounded-[20px] p-6 shadow-md"
          >
            <h3 className="text-xl  mb-4 mt-4 font-poppins font-medium lg:text-[24px] leading-[100%] tracking-[0px] text-center">{item.title}</h3>
            <p className="text-sm px-4 text-white font-poppins font-normal text-[14px] leading-[24px] tracking-[0px] text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
