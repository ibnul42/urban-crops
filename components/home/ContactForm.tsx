"use client";
import LinkedInIcon from "../icons/LinkedInIcon";
import MapIcon from "../icons/MapIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MessageIcon from "../icons/MessageIcon";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div className="bg-white py-10">
      <div className="shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] rounded-md p-8 container mx-auto flex flex-col md:flex-row gap-10">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 lg:w-2/5 space-y-4 flex flex-col">
          <div className="">
            <h2 className="text-xl font-bold text-lime-600">
              Skontaktuj się z nami
            </h2>
            <p className="text-sm text-gray-600">
              Jesteśmy tu dla Ciebie! Jak możemy pomóc?
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-3 text-sm text-gray-700">
            {/* <div className="flex items-center gap-2">
              <MapIcon className="text-lime-600" />
              <span>838 Cantt Sialkot, World</span>
            </div> */}
            <div className="flex items-center gap-2">
              <PhoneIcon className="text-lime-600" />
              <a href="tel:531730697">531 730 697</a>
            </div>
            <div className="flex items-center gap-2">
              <MessageIcon className="text-lime-600" />
              <a href="mailto:kontakt@urbancrops.pl">kontakt@urbancrops.pl</a>
              {/* <span>kontakt@urbancrops.pl</span> */}
            </div>
          </div>

          {/* Social Icons */}
          {/* <div className="flex items-center gap-4 pt-4">
            <Link
              href="https://www.linkedin.com/in/kacper-szajnecki-7036352b3/"
              target="_blank"
            >
              <LinkedInIcon className="w-6 h-6 hover:scale-110 cursor-pointer transition" />
            </Link>
          </div> */}
        </div>

        {/* Right: Contact Form */}
        <form className="md:w-1/2 lg:w-3/5 max-w-2xl mx-auto space-y-4 text-black placeholder:text-[#7A7A7A]">
          <input
            type="text"
            placeholder="Imię"
            className="w-full border border-lime-500 rounded px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-lime-500 rounded px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
          />
          <textarea
            rows={5}
            placeholder="Twoja wiadomość..."
            className="w-full border border-lime-500 rounded px-4 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-lime-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-lime-500 text-white py-2 rounded hover:bg-lime-600 transition text-sm cursor-pointer font-semibold"
          >
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
}
