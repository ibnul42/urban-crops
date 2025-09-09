import Image from "next/image";
import React from "react";
import TranslatedText from "./TranslatedText";

export default function Details() {
  return (
    <div>
      <section className="bg-white">
        <div className="container mx-auto px-3 pt-5 md:py-7 lg:py-10">
          <h2 className="text-[#7ACA2A] font-bold text-xl md:text-2xl mt-3 text-center">
            <TranslatedText name="details.title1" /> <br />{" "}
            <TranslatedText name="details.title2" />
          </h2>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 md:pt-5">
              <div className="grid grid-cols-2 order-2 md:order-1">
                <div className="flex justify-end items-center -me-12 lg:-me-16">
                  <Image
                    src="/assets/details1.png"
                    alt="Hydroponic System"
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="w-48 h-auto md:w-56 lg:w-72"
                  />
                </div>
                <div className="flex items-center -ms-12 lg:-ms-16">
                  <Image
                    src="/assets/details2.png"
                    alt="Hydroponic Plants"
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="w-48 h-auto md:w-56 lg:w-72"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-[#7ACA2A] font-semibold text-lg md:text-xl mt-2 md:mt-4">
                  <TranslatedText name="details.feature1.title" />
                </h3>
                <p className="text-gray-700 mt-2">
                  <TranslatedText name="details.feature1.description" />
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    <TranslatedText name="details.feature1.options.option1" />
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    <TranslatedText name="details.feature1.options.option2" />
                  </li>
                </ul>
                <p className="mt-4 text-orange-500 text-sm">
                  <TranslatedText name="details.feature1.note" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EBFFD8]">
        <div className="container mx-auto px-3 pt-5 md:py-7 lg:py-10">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 md:pt-5">
              <div className="grid grid-cols-2 order-2">
                <div className="flex justify-end items-center -me-12 lg:-me-16">
                  <Image
                    src="/assets/details3.png"
                    alt="Hydroponic System"
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="w-48 h-auto md:w-56 lg:w-72"
                  />
                </div>
                <div className="flex items-center -ms-12 lg:-ms-16">
                  <Image
                    src="/assets/details4.png"
                    alt="Hydroponic Plants"
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="w-48 h-auto md:w-56 lg:w-72"
                  />
                </div>
              </div>
              <div className="order-1">
                <h3 className="text-[#7ACA2A] font-semibold text-lg md:text-xl md:mt-4">
                  <TranslatedText name="details.feature2.title" />
                </h3>
                <p className="text-gray-700 mt-2">
                  <TranslatedText name="details.feature2.description" />
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    <TranslatedText name="details.feature2.options.option1" />
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    <TranslatedText name="details.feature2.options.option2" />
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    <TranslatedText name="details.feature2.options.option3" />
                  </li>
                </ul>
                <p className="mt-4 text-orange-500 text-sm">
                  <TranslatedText name="details.feature2.note" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto px-3 pt-5 md:py-7 lg:py-10">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:pt-5">
              <div className="grid grid-cols-2 order-2 md:order-1">
                <div className="flex justify-end items-center -me-12 lg:-me-16">
                  <Image
                    src="/assets/details5.png"
                    alt=""
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="w-48 h-auto md:w-56 lg:w-72"
                  />
                </div>
                <div className="flex items-center -ms-12 lg:-ms-16">
                  <Image
                    src="/assets/details6.png"
                    alt=""
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="w-48 h-auto md:w-56 lg:w-72"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-[#7ACA2A] font-semibold text-lg md:text-xl mt-2 md:mt-4">
                  <TranslatedText name="details.feature3.title" />
                </h3>
                <p className="text-gray-700 mt-2">
                  <TranslatedText name="details.feature3.description" />
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    <TranslatedText name="details.feature3.options.option1" />
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    <TranslatedText name="details.feature3.options.option2" />
                  </li>
                </ul>
                <p className="mt-4 text-orange-500 text-sm">
                  <TranslatedText name="details.feature3.note" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
