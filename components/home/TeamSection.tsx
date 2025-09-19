import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import FacebookIcon from "../icons/FacebookIcon";
import Link from "next/link";
import LinkedInIcon from "../icons/LinkedInIcon";
import TranslatedText from "./TranslatedText";

const TeamSection = () => {
  return (
    <section className="bg-[#EBFFD8] py-10">
      <h2 className="text-center text-[#7ACA2A] font-bold text-xl mb-8">
        <TranslatedText name="team.title" />
      </h2>

      <div className="max-w-6xl mx-auto px-4 flex justify-center flex-wrap gap-6">
        <TeamMemberCard
          name="Kacper Filipski"
          role="Założyciel"
          imageUrl="/assets/kacper.png"
          socials={
            <>
              <Link
                href="https://www.facebook.com/kacper.filipski.7/"
                target="_blank"
              >
                <FacebookIcon className="w-6 h-6 hover:scale-110 cursor-pointer transition" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kacper-filipski-226586233/"
                target="_blank"
              >
                <LinkedInIcon className="w-6 h-6 hover:scale-110 cursor-pointer transition" />
              </Link>
            </>
          }
        />

        <TeamMemberCard
          name="Dariusz Kunderman"
          role="Współzałożyciel"
          imageUrl="/assets/dariusz.jpg"
          socials={
            <>
              {/* <Link
                href="https://www.facebook.com/kacper.filipski.7/"
                target="_blank"
              >
                <FacebookIcon className="w-6 h-6 hover:scale-110 cursor-pointer transition" />
              </Link> */}
              <Link
                href="https://www.linkedin.com/in/dariusz-kunderman-15792795"
                target="_blank"
              >
                <LinkedInIcon className="w-6 h-6 hover:scale-110 cursor-pointer transition" />
              </Link>
            </>
          }
        />
      </div>
    </section>
  );
};

export default TeamSection;
