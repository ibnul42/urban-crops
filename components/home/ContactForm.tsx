"use client";
import LinkedInIcon from "../icons/LinkedInIcon";
import MapIcon from "../icons/MapIcon";
import PhoneIcon from "../icons/PhoneIcon";
import MessageIcon from "../icons/MessageIcon";
import Link from "next/link";
import TranslatedText from "./TranslatedText";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  return (
    <div className="bg-white py-10">
      <div className="shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] rounded-md p-8 container mx-auto flex flex-col md:flex-row gap-10">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 lg:w-2/5 space-y-4 flex flex-col">
          <div className="">
            <h2 className="text-xl font-bold text-lime-600">
              <TranslatedText name="contact.title" />
            </h2>
            <p className="text-sm text-gray-600">
              <TranslatedText name="contact.description" />
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <PhoneIcon className="text-lime-600" />
              <a href="tel:531730697">531 730 697</a>
            </div>
            <div className="flex items-center gap-2">
              <MessageIcon className="text-lime-600" />
              <a href="mailto:kontakt@urbancrops.pl">kontakt@urbancrops.pl</a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="md:w-1/2 lg:w-3/5 max-w-2xl mx-auto space-y-4 text-black placeholder:text-[#7A7A7A]">
          <input
            type="text"
            placeholder={t("contact.form.name")}
            className="w-full border border-lime-500 rounded px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="email"
            placeholder={t("contact.form.email")}
            className="w-full border border-lime-500 rounded px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-lime-500"
          />
          <textarea
            rows={5}
            placeholder={t("contact.form.message")}
            className="w-full border border-lime-500 rounded px-4 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-lime-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-lime-500 text-white py-2 rounded hover:bg-lime-600 transition text-sm cursor-pointer font-semibold"
          >
            <TranslatedText name="contact.form.send" />
          </button>
        </form>
      </div>
    </div>
  );
}
