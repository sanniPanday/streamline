import React from "react";
import serviceImg from "../../assets/image/ww.png";
const services = [
  {
    title: "Streamline Claims & Inspections",
    desc: "With tools like Claim Route 360, adjusters can schedule, route and manage claims from one place — saving time in the field and speeding up resolutions.",
  },
  {
    title: "Simplify Service Operations",
    desc: "Service Route 360 helps contractors and service professionals stay organized with easy scheduling, route planning, and communication tools that reduce downtime.",
  },
  {
    title: "Protect Personal Media",
    desc: "PriviCam provides private storage for photos and videos, giving users confidence that their personal content is secure and always in their control.",
  },
  {
    title: "Connect Homeowners & Experts",
    desc: "FixMate, an upcoming platform designed to connect people with the support they need, making complex tasks simpler and more manageable.",
  },
  {
    title: "Automotive Workflows",
    desc: "A future solution built to streamline processes within the automotive industry, helping businesses work more efficiently and stay ahead.",
  },
];

const OurServices = () => {
  return (
    <section
      className="py-12 px-6 sm:px-8 md:px-12 lg:px-24 text-white w-full flex items-center"
      style={{
        background:
          "linear-gradient(107.56deg, #161616 0%, #2F2F2F 50%, #0A0A0A 100%)",
      }}
    >
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 w-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-8 sm:mb-10">
            <h4 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Our services
            </h4>
            <p className="text-gray-300 mt-4 font-thicccboi font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[26px] tracking-[0]">
              To simplify complex workflows through intuitive, scalable software. We
              empower professionals in high-demand industries to work smarter and
              faster using tools that turn everyday challenges into digital solutions.
            </p>
          </div>
          <img
            src={serviceImg}
            alt="Our Services"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-2xl"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6 mt-8 md:mt-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-l-2 border-green-400 pl-4 p-4 sm:p-6 backdrop-blur-sm transition-all hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(103, 223, 137, 0.1) 0%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <h4 className="text-lg lg:text-[24px]  text-white mb-2">
                {service.title}
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
