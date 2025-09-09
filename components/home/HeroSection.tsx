import Image from "next/image";
import TranslatedText from "./TranslatedText";

const HeroSection = () => {
  return (
    <section className="relative w-full h-auto bg-cover bg-center py-5 md:py-7 lg:py-10">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 blur-[2px]"
        style={{
          backgroundImage: "url('/assets/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Black Overlay for Opacity */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Container (Fixed Positioning) */}
      <div className="relative container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-5 h-auto md:h-96">
        <div className="space-y-5 text-white flex flex-col justify-center">
          <h1 className="font-bold text-4xl lg:text-5xl">
            <TranslatedText name="hero.title" />
          </h1>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            <TranslatedText name="hero.subtitle" />
          </p>
          <p className="text-sm md:text-base lg:text-lg opacity-80">
            <TranslatedText name="hero.description" />
          </p>
        </div>
        <div className="relative h-72 md:h-auto">
          <div className="absolute bottom-10 md:bottom-12 left-20 md:left-24 lg:left-32">
            <Image
              className="w-56 md:w-72 lg:w-80 h-auto"
              src="/assets/hero1.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="absolute bottom-0 left-0">
            <Image
              className="w-40 md:w-52 lg:w-60 h-auto"
              src="/assets/hero2.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
