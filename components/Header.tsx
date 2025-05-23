"use client";
import { useState } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-3 py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex gap-6">
          {["Home", "Features", "FAQ", "Team", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-[#7ACA2A] transition"
            >
              {item}
            </Link>
          ))}
        </nav> */}

        {/* Social Media */}
        <div className="flex gap-4">
          {[FaLinkedin].map((Icon, index) => (
            <Link
              key={index}
              href="https://www.linkedin.com/company/urban-cropss"
              target="_blank"
            >
              <Icon className="text-[#7ACA2A] hover:text-green-800 text-2xl" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        {/* <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl text-[#7ACA2A] cursor-pointer"
        >
          <FiMenu />
        </button> */}
      </div>

      {/* Mobile Menu - Sliding from Left */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center shadow-lg 
          transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
    >
      <div className="w-full flex justify-between items-center px-3 py-4 relative">
        <Logo />
        <button
          onClick={() => setIsOpen(false)}
          className="text-3xl text-[#7ACA2A] cursor-pointer"
        >
          <FiX />
        </button>
      </div>

      {/* <nav className="flex-1 flex flex-col justify-center items-center gap-6 text-xl font-medium">
        {["Home", "Features", "FAQ", "Team", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="hover:text-[#7ACA2A]"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
      </nav> */}

      {/* Social Media Icons */}
      <div className="flex-1 flex items-center gap-6 mt-8 text-2xl">
        {[FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube].map(
          (Icon, index) => (
            <Link key={index} href="#">
              <Icon className="text-[#7ACA2A]" />
            </Link>
          )
        )}
      </div>
    </div>
  );
};
