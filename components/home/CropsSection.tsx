import Image from "next/image";
import React from "react";

const crops = [
    {
      name: "LETTUCE",
      description:
        "Sałata rośnie szybko i jest łatwa w uprawie w kontrolowanych środowiskach, przy zastosowaniu zoptymalizowanych systemów dostarczania składników odżywczych.",
      image: "/assets/lettuce.png",
    },
    {
      name: "STRAWBERRY",
      description:
        "System hydroponiczny pozwala plantatorom kontrolować temperaturę, wilgotność i składniki odżywcze. W rezultacie truskawki hydroponiczne mogą osiągnąć wyższą cenę na rynku.",
      image: "/assets/strawberry.png",
    },
    {
      name: "TOMATOES",
      description:
        "Pomidory uprawiane metodą hydroponiczną mają lepszy smak, konsystencję i kolor niż te uprawiane w glebie.",
      image: "/assets/tomato.png",
    },
    {
      name: "BASIL",
      description:
        "Bazylia to kolejna roślina, której uprawa hydroponiczna jest opłacalna. Roślina ta cieszy się dużym popytem w przemyśle kulinarnym, co czyni ją opłacalną opcją dla upraw hydroponicznych.",
      image: "/assets/basil.png",
    },
    {
      name: "CUCUMBER",
      description:
        "Produkcja ogórków metodą hydroponiczną jest mniej pracochłonna i wymaga mniej miejsca niż uprawa glebowa.",
      image: "/assets/cucumber.png",
    },
  ];

export default function CropsSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-3 py-5">
        <h2 className="text-green-600 font-bold text-xl md:text-2xl text-center">
          Co można uprawiać
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {crops.map((crop, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src={crop.image}
                alt={crop.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg hexagon"
              />
            </div>
            <h3 className="text-black font-bold text-lg md:text-xl mt-4">
              {crop.name}
            </h3>
            <p className="text-gray-700 mt-2 text-sm md:text-base max-w-xs">
              {crop.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
