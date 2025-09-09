// components/WhatWeGrow.tsx
import Image from "next/image";
import TranslatedText from "./TranslatedText";

const crops = [
  {
    title: "lettuce",
    img: "/assets/lettuce.png",
  },
  {
    title: "strawberry",
    img: "/assets/strawberry.png",
  },
  {
    title: "tomato",
    img: "/assets/tomato.png",
  },
  {
    title: "basil",
    img: "/assets/basil.png",
  },
  {
    title: "cucumber",
    img: "/assets/cucumber.png",
  },
];

const WhatWeGrow = () => {
  return (
    <section className="bg-white px-3 py-2 md:py-7 lg:py-10">
      <h2 className="text-center text-[#7ACA2A] font-semibold text-xl mb-5 md:mb-12">
        <TranslatedText name="whatWeGrow.title" />
      </h2>
      <div className="md:hidden">
        {crops.map((crop, idx) => (
          <div
            className="flex gap-3 py-1 first:pt-0 last:pb-0 relative"
            key={idx}
          >
            <div className="absolute bottom-0 left-[72px] right-[71px] h-[1px] overflow-hidden">
              <div
                className={`${
                  idx === crops.length - 1 ? "" : "w-full h-full bg-[#7ACA2A]"
                }`}
              ></div>
            </div>
            <div
              className={`absolute top-0 ${
                idx % 2 === 0 ? "left-0" : "right-0"
              } w-36 h-full bg-red-20 flex justify-center
              ${idx === 0 ? "items-end" : "items-start"}
              `}
            >
              <div
                className={`w-[1px] ${
                  idx === 0 || idx === crops.length - 1 ? "h-1/2" : "h-full"
                } bg-[#7ACA2A]`}
              ></div>
            </div>
            <div
              className={`w-36 h-36 shrink-0 relative py-2
              ${idx % 2 === 0 ? "order-1" : "order-2"}`}
            >
              <Image
                src={crop.img}
                alt={crop.title}
                fill
                className="object-contain"
              />
            </div>
            <div
              className={`${
                idx % 2 === 0 ? "order-2 text-left" : "order-1 text-right"
              }`}
            >
              <h3 className="text-sm font-bold uppercase text-black py-2">
                <TranslatedText name={`whatWeGrow.items.${crop.title}.title`} />
              </h3>
              <p className="flex-1 text-xs text-gray-500 py-2">
                <TranslatedText name={`whatWeGrow.items.${crop.title}.desc`} />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto hidden  md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-0 text-center">
        {crops.map((crop, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center px-2 py-4 relative border border-lime-500 lg:border-t-transparent lg:border-b-transparent lg:border-l-transparent lg:last:border-r-transparent rounded-md lg:rounded-none"
          >
            <div
              className={`
                    lg:absolute
                    ${idx % 2 === 0 ? "top-0" : "bottom-0"}
                    ${
                      idx === 0
                        ? "left-1/2 w-1/2"
                        : idx === crops.length - 1
                        ? "right-1/2 w-1/2"
                        : "left-0 w-full"
                    }
                    lg:h-[1px] bg-lime-500
                `}
            />
            <div
              className={`w-28 h-28 relative py-2 ${
                idx % 2 === 0 ? "order1 lg:-mt-16" : "lg:order-3 lg:-mb-[72px]"
              }`}
            >
              <Image
                src={crop.img}
                alt={crop.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-sm font-bold uppercase text-black py-2">
              <TranslatedText name={`whatWeGrow.items.${crop.title}.title`} />
            </h3>
            <p className="flex-1 text-xs text-gray-500 py-2">
              <TranslatedText name={`whatWeGrow.items.${crop.title}.desc`} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeGrow;
