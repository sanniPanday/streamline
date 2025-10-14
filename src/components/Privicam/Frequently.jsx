import React, { useState } from "react";
import btt from "../../assets/image/tb.svg";

const faqs = [
  {
    question: "What is PriviCam?",
    answer:
      "PriviCam is a privacy-focused gallery app that keeps your photos safe and secure.",
  },
  {
    question: "Who should use PriviCam?",
    answer:
      "Anyone who wants to protect their personal photos and videos from unauthorized access.",
  },
  {
    question: "How is PriviCam different from my phone's default gallery?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "How is PriviCam different from my phone's default gallery?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "Can I use PriviCam on any device?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "Can I take photos and videos directly in PriviCam?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "Can I import existing photos and videos?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "How do I organize my files in PriviCam?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "Does PriviCam support document storage?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "Can I back up my files?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "Does PriviCam work offline?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "How is my content protected?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "Can I use Face ID or fingerprint to unlock PriviCam?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "Are my photos and videos uploaded to the cloud automatically?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "Does PriviCam track or share my data?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "Is PriviCam free to use?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "What’s included in the paid plans?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "Do I need a subscription to use PriviCam?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
  {
    question: "How can I get help with PriviCam?",
    answer:
      "PriviCam offers encryption, password protection, and privacy-focused features not available in default galleries.",
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#10252d] text-white py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-300 font-normal text-[16px] sm:text-[18px] leading-[26px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam.
        </p>
      </div>

      <div className="space-y-4 lg:max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] rounded-lg overflow-hidden border border-gray-800"
          >
            <div
              className="w-full flex justify-between items-center px-4 sm:px-6 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-[16px] sm:text-[18px] md:text-[20px]">
                {faq.question}
              </span>
              <img
                src={btt}
                alt="Toggle FAQ"
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } h-8 sm:h-10 md:h-14`}
              />
            </div>

            <div
              className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 py-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-300 font-normal text-[14px] sm:text-[16px] md:text-[16px] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
