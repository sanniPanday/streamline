import React from 'react';

const Subscription = () => {
  return (
    <div className="min-h-screen bg-[#10252d] text-white flex flex-col items-center px-4 py-10">
 <div className="mb-6">
  <div className="flex justify-center items-center w-[260px] h-[54px]">
  
    <button className="w-1/2 h-full bg-orange-500 text-white text-sm font-medium rounded-l-lg flex items-center justify-center">
      Monthly
    </button>

    
    <button className="w-1/2 h-full bg-white text-gray-600 text-sm rounded-r-lg flex flex-col items-center justify-center leading-tight">
      <span>Yearly</span>
      <span className="text-green-500 font-semibold text-xs">20% Off</span>
    </button>
  </div>
</div>



      <p className="text-sm text-gray-400  mb-10 font-poppins px-6 lg:text-[16px] leading-[30px] tracking-[0%] text-center align-middle">
        We send you a friendly reminder 3 days before automatically renewing your subscription, even for the Free Plan (no fees). You can turn off auto-renewal at any time after you subscribe.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className=" h-[477px] bg-gradient-to-b from-green-900 to-black border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
          <p className="text-2xl font-bold mb-4">Free</p>
          <ul className="text-sm space-y-8 mb-6 text-gray-300">
            <li>Everything from the Free Plan, PLUS</li>
            <li>Unlimited claims/appointments</li>
            <li>Automatically sync your claims from</li>
            <li> selected claim management systems</li>
            <li>Roof reports $18/each</li>
          </ul>
          <button className="bg-white text-[rgba(2,85,229,1)]  h-[48px]  w-[228px] mt-4  px-4 py-2 rounded-md font-semibold">
            Get Started Free
          </button>
        </div>

      <div className="relative bg-gradient-to-b from-green-900 to-black rounded-xl p-6 flex flex-col items-center text-center overflow-hidden">

  <span
    className="absolute top-3 left-[-29px] bg-blue-600 text-white text-[12px] px-2 py-3 h-10  font-semibold rotate-[-45deg] w-[125px] text-center shadow-md"
  >
    Most Popular
  </span>

  <h3 className="text-xl font-semibold mb-4 mt-8">Standard Plan</h3>
  <p className="text-2xl font-bold mb-6">$69/month</p>
  <ul className="text-sm space-y-8 mb-6 text-gray-300">
    <li>Everything from the Basic Plan, PLUS</li>
    <li>Chats: Text messages (SMS)</li>
    <li>Roof reports $17/each</li>
  </ul>
  <button className="bg-white text-[rgba(2,85,229,1)] h-[48px] w-[228px] px-4 py-2 mt-20 rounded-md font-semibold">
    Upgrade Now
  </button>
</div>


        <div className="bg-gradient-to-b from-green-900 to-black border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
          <p className="text-2xl font-bold mb-6">$69/month</p>
          <ul className="text-sm space-y-8 mb-6 text-gray-300">
            <li>Everything from the Basic Plan, PLUS</li>
            <li>Chats: Text messages (SMS)</li>
            <li>Roof reports $17/each</li>
          </ul>
          <button className="bg-white mt-28 h-[48px] text-[rgba(2,85,229,1)]  w-[228px] px-4 py-2 rounded-md font-semibold">
            Start Premium Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
