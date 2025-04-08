"use client";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const faqItems = [
  {
    question: "O co chodzi w Urban Crops?",
    answer:
      "Tworzymy nowoczesne miejskie farmy, które pozwalają uprawiać świeże warzywa i zioła przez cały rok – bez pestycydów, bez gleby i bez martwienia się o pogodę.",
  },
  {
    question: "Jak to działa?",
    answer:
      "Rośliny rosną w systemie hydroponicznym, czyli w wodzie wzbogaconej o składniki odżywcze pochodzące z fotobioreaktorów. Dzięki specjalnym lampom LED dostają idealną ilość światła, co przyspiesza ich wzrost i zapewnia najwyższą jakość.",
  },
  {
    question: "Kto może z tego korzystać?",
    answer:
      "Nasze produkty trafiają do restauracji, sklepów i osób, które chcą jeść zdrowo i lokalnie. Planujemy rozwijać się w kolejnych miastach i współpracować z nowymi partnerami.",
  },
  {
    question: "Czy w moim mieście może powstać Urban Crops?",
    answer:
      "Tak! Nasze farmy można zbudować niemal wszędzie – w sklepach, magazynach, restauracjach czy centrach dystrybucyjnych.",
  },
  {
    question: "Co można uprawiać w Urban Crops?",
    answer:
      "Głównie mikroliście, sałaty i zioła, ale możliwości jest więcej. Możemy dostosować uprawy do potrzeb klientów.",
  },
  {
    question: "Czy to jest ekologiczne?",
    answer:
      "Tak! Zużywamy do 90% mniej wody niż tradycyjne rolnictwo, nie stosujemy pestycydów i ograniczamy transport, więc mniej CO₂ trafia do atmosfery.",
  },
  {
    question: "Gdzie można kupić produkty Urban Crops?",
    answer:
      "Współpracujemy ze sklepami i restauracjami – jeśli chcesz wiedzieć, czy są dostępne w Twojej okolicy, śledź nasze aktualności.",
  },
  {
    question: "Czy Urban Crops działa cały rok?",
    answer:
      "Tak! Dzięki kontrolowanym warunkom możemy uprawiać rośliny 365 dni w roku, niezależnie od pogody.",
  },
  {
    question: "Co zyskują restauracje, sklepy i klienci?",
    answer:
      "Świeże, lokalne produkty bez sztucznych dodatków, krótszy łańcuch dostaw i gwarancję jakości przez cały rok.",
  },
  {
    question: "Czy mogę otworzyć własną farmę Urban Crops?",
    answer:
      "Tak! Jeśli interesuje Cię własna uprawa w mieście, możemy pomóc w jej wdrożeniu.",
  },
  {
    question: "Jak Urban Crops wpływa na miasto i ludzi?",
    answer:
      "Tworzymy miejsca pracy, wspieramy lokalną gospodarkę i sprawiamy, że zdrowe jedzenie jest łatwiej dostępne.",
  },
  {
    question: "Czy mogę odwiedzić farmę?",
    answer:
      "Jasne! Organizujemy wizyty – skontaktuj się z nami, a coś ustalimy.",
  },
  {
    question: "Czym to różni się od tradycyjnego rolnictwa?",
    answer:
      "Nasze farmy zajmują mniej miejsca, zużywają mniej wody i pozwalają na całoroczną uprawę bez pestycydów i bez wpływu warunków atmosferycznych.",
  },
  {
    question: "Jak mogę się zaangażować lub nawiązać współpracę?",
    answer:
      "Jeśli chcesz kupić nasze produkty, otworzyć farmę lub po prostu dowiedzieć się więcej – napisz do nas!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-center text-[#7ACA2A] font-semibold text-lg mb-8">
          Często zadawane pytania
        </h2>
        <div className="divide-y divide-gray-200 border-t border-b">
          {faqItems.map((item, index) => (
            <div key={index} className="px-4 py-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggle(index)}
              >
                <span className="text-sm text-gray-800 font-medium">
                  {item.question}
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
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
