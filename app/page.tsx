import ContactForm from "@/components/home/ContactForm";
import Details from "@/components/home/Details";
import FAQ from "@/components/home/Faq";
import HeroSection from "@/components/home/HeroSection";
import TeamSection from "@/components/home/TeamSection";
import WhatWeGrow from "@/components/home/WhatWeGrow";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Details />
      <WhatWeGrow />
      <FAQ />
      <TeamSection />
      <ContactForm />
    </div>
  );
}
