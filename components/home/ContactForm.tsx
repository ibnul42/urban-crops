"use client";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import MapIcon from "../icons/MapIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MessageIcon from "../icons/MessageIcon";

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
            <div className="flex items-center gap-2">
              <MapIcon className="text-lime-600" />
              <span>838 Cantt Sialkot, World</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="text-lime-600" />
              <span>879-988-89787</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageIcon className="text-lime-600" />
              <span>abcd123@gmail.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-4">
            <FacebookIcon className="text-lime-600 cursor-pointer hover:scale-110 transition w-7" />
            <InstagramIcon className="text-lime-600 cursor-pointer hover:scale-110 transition w-7" />
            <LinkedInIcon className="text-lime-600 cursor-pointer hover:scale-110 transition w-7" />
            <TwitterIcon className="text-lime-600 cursor-pointer hover:scale-110 transition w-7" />
            <YoutubeIcon className="text-lime-600 cursor-pointer hover:scale-110 transition w-8" />
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="md:w-1/2 lg:w-3/5 max-w-2xl mx-auto space-y-4 text-black placeholder:text-[#7A7A7A]">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-lime-500 rounded px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border border-lime-500 rounded px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
          />
          <textarea
            rows={5}
            placeholder="Go ahead, We are listening..."
            className="w-full border border-lime-500 rounded px-4 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-lime-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-lime-500 text-white py-2 rounded hover:bg-lime-600 transition text-sm cursor-pointer font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
