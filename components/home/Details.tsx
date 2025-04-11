import Image from "next/image";
import React from "react";

export default function Details() {
  return (
    <div>
      <section className="bg-white">
        <div className="container mx-auto px-3 py-5 md:py-7 lg:py-10">
          <h2 className="text-[#7ACA2A] font-bold text-xl md:text-2xl text-center">
            Funkcje Urban Crops <br /> i Przewaga Konkurencyjna
          </h2>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-5">
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
                <h3 className="text-[#7ACA2A] font-semibold text-lg md:text-xl mt-4">
                  Efektywna produkcja żywności
                </h3>
                <p className="text-gray-700 mt-2">
                  UrbanCrops oferuje zdrową żywność, która jest nieodłącznym:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    Fotobioreaktory i hydroponika
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    Lokalna dostępność
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    Zrównoważona produkcja
                  </li>
                </ul>
                <p className="mt-4 text-orange-500 text-sm">
                  Dzięki temu można dostosować produkcję do lokalnych
                  preferencji i potrzeb społeczności.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EBFFD8]">
        <div className="container mx-auto px-3 py-5 md:py-7 lg:py-10">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-5">
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
                <h3 className="text-[#7ACA2A] font-semibold text-lg md:text-xl mt-4">
                  Odnawialne źródła energii
                </h3>
                <p className="text-gray-700 mt-2">
                  Projekt posiada wiele funkcji, które dodatkowo współgrają jego
                  rolą dbania o środowisko.
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    Turbiny wiatrowe i panele fotowoltaiczne
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    Niezależność energetyczna
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    Produkcja biomasy
                  </li>
                </ul>
                <p className="mt-4 text-orange-500 text-sm">
                  UrbanCrops stosuje technologie, które minimalizują straty i
                  odpady w procesie produkcji żywności.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto px-3 py-5 md:py-7 lg:py-10">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-5">
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
                <h3 className="text-[#7ACA2A] font-semibold text-lg md:text-xl mt-4">
                  Koncepcja &quot;Farm-to-table&quot;
                </h3>
                <p className="text-gray-700 mt-2">
                  UrbanCrops wspiera ideę &quot;Farm-to-table&quot;, gdzie
                  żywność jest produkowana lokalnie jest bezpośrednio
                  dostarczana na stół konsumenta.
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    Świeżość produktów przekłada się na lepszy smak
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    Świadomość pochodzenia żywności
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#7ACA2A] rounded-full mr-2"></span>
                    Zwiększone bezpieczeństwo żywnościowe
                  </li>
                </ul>
                <p className="mt-4 text-orange-500 text-sm">
                  Krótsza odległość między uprawami a stołem konsumenta
                  minimalizuje ryzyko przerw w dostawach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
