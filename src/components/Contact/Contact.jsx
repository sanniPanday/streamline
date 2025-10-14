import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-16 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className=" mb-6 font-thicccboi font-bold lg:text-[36px] leading-[44px] tracking-[-0.02em] text-center">Contact us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="mb-1  text-[rgba(6,28,61,1)] font-inter font-normal text-[14px] leading-[20px] tracking-normal">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1  text-[rgba(6,28,61,1)] font-inter font-normal text-[14px] leading-[20px] tracking-normal">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-inter font-normal text-[14px] leading-[20px] tracking-normal text-[rgba(6,28,61,1)]">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-inter font-normal text-[14px] leading-[20px] tracking-normal text-[rgba(6,28,61,1)]">Service</label>
            <select
              className="border text-gray-400 border-gray-300 p-2 rounded"
              required
            >
              <option value="">What are you looking for?</option>
              <option value="web">Web Development</option>
              <option value="app">App Development</option>
              <option value="design">UI/UX Design</option>
            </select>
          </div>
        </div>

        
        <div className="flex flex-col mt-4">
          <label className="mb-1font-inter font-normal text-[14px] leading-[20px] tracking-normal text-[rgba(6,28,61,1)]">Message</label>
          <textarea
            placeholder="Tell us about your project..."
            className="border border-gray-300 p-2 rounded w-full"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="text-center mt-6">
       
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
        </div>
      </form>
    </div>
  );
};

export default Contact;
