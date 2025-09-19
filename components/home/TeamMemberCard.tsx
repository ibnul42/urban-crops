import React from "react";
import Image from "next/image";
import TranslatedText from "./TranslatedText";

type TeamMemberCardProps = {
  name: string;
  role: string;
  imageUrl: string;
  socials?: React.ReactNode;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  imageUrl,
  socials,
}) => {
  return (
    <div className="group bg-white relative w-full max-w-[400px]">
      <div className="rounded-xl border border-[#7ACA2A] shadow-sm hover:shadow-md transition">
        <div className="relative w-full rounded-t-xl h-[250px] md:h-[300px] overflow-hidden mb-4">
          <Image src={imageUrl} alt={name} layout="fill" className="object-cover object-center" />
        </div>
        <div className="px-2 pb-4">
          <h3 className="font-bold text-lg text-black">{name}</h3>
          <p className="text-sm text-[#7ACA2A] font-medium">
            <TranslatedText name={`team.members.${name}.role`} />
          </p>
        </div>

        {socials && (
          <div className="relative md:absolute md:-bottom-12 inset-x-0 rounded-b-xl py-2 px-2 bg-white md:opacity-0 transform -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 md:border border-[#7ACA2A] border-t-white">
            <div className="w-full bg-[#408000] h-0.5"></div>
            <div className="flex gap-4 py-2">{socials}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
