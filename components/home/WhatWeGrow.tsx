// components/WhatWeGrow.tsx
import Image from "next/image";

const crops = [
  {
    title: "LETTUCE",
    img: "/assets/lettuce.png",
    desc: "Sałata rośnie szybko i jest łatwa w uprawie. Jej kruchość sprawia, że jest atrakcyjna dla konsumentów, a produkcja w systemach hydroponicznych zwiększa jej walory odżywcze.",
  },
  {
    title: "STRAWBERRY",
    img: "/assets/strawberry.png",
    desc: "System hydroponiczny pozwala na dostarczanie składników i wody bezpośrednio do korzeni, dzięki czemu truskawki mogą osiągać lepsze plony i mają większą trwałość oraz cenę na rynku.",
  },
  {
    title: "TOMATOES",
    img: "/assets/tomato.png",
    desc: "Pomidory uprawiane metodą hydroponiczną mają doskonały smak i są odporne na choroby. Idealne do spożycia na surowo lub w gotowaniu.",
  },
  {
    title: "BASIL",
    img: "/assets/basil.png",
    desc: "Bazylia to zielone zioło, które kojarzy się z kuchnią śródziemnomorską. Rośnie szybko i daje przyjemny aromat. Świetnie sprawdza się w uprawach hydroponicznych.",
  },
  {
    title: "CUCUMBER",
    img: "/assets/cucumber.png",
    desc: "Produkcja ogórków metodą hydroponiczną jest wydajna i pozwala na uprawę bez konieczności używania gleby.",
  },
];

const WhatWeGrow = () => {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-center text-[#7ACA2A] font-semibold text-xl mb-12">
        Co można uprawiać
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-0 text-center">
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
              {crop.title}
            </h3>
            <p className="flex-1 text-xs text-gray-500 py-2">{crop.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeGrow;
