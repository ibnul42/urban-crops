import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import FacebookIcon from "../icons/FacebookIcon";
import Link from "next/link";
import LinkedInIcon from "../icons/LinkedInIcon";

const TeamSection = () => {
  return (
    <section className="bg-[#EBFFD8] py-10">
      <h2 className="text-center text-[#7ACA2A] font-bold text-xl mb-8">
        Członkowie naszego zespołu
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <TeamMemberCard
          name="szajnecki"
          role="Partner"
          imageUrl="/assets/szajnecki.jpg"
          socials={
            <>
              <Link
                href="https://www.facebook.com/kacperszajnecki"
                target="_blank"
              >
                <FacebookIcon className="w-6 h-6 hover:scale-110 cursor-pointer transition" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kacper-szajnecki-7036352b3/"
                target="_blank"
              >
                <LinkedInIcon className="w-6 h-6 hover:scale-110 cursor-pointer transition" />
              </Link>
            </>
          }
        />

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
          name="michal"
          role="Partner"
          imageUrl="/assets/michal.jpg"
          socials={
            <>
              <Link
                href="https://www.facebook.com/profile.php?id=100039508831050"
                target="_blank"
              >
                <FacebookIcon className="w-6 h-6 hover:scale-110 cursor-pointer transition" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/michal-moryc/"
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
