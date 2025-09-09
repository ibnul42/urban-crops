"use client";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import TranslatedText from "./TranslatedText";

const faqlength = 14;

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-3 py-5 md:py-7 lg:py-10">
        <h2 className="text-center text-[#7ACA2A] font-semibold text-lg mb-8">
          <TranslatedText name="faq.title" />
        </h2>
        <div className="divide-y divide-gray-200 border-t border-b">
          {Array.from({ length: faqlength }).map((_, index) => (
            <div key={index} className="px-4 py-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggle(index)}
              >
                <span className="text-sm text-gray-800 font-medium">
                  <TranslatedText name={`faq.items[${index}].question`} />
                </span>
                <FaChevronRight
                  className={`w-4 h-4 text-[#408000] transition-transform duration-200 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </div>
              <div
                className={`text-sm text-gray-600 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <TranslatedText name={`faq.items[${index}].answer`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
