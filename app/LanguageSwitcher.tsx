"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "pl", label: "Polski", flag: "PL" },
    { code: "en", label: "English", flag: "EN" },
  ];

  const current = languages.find((lng) => lng.code === i18n.language) || languages[0];

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="group z-50">
      <div className="relative h-full opacity-40 hover:opacity-70 transition-opacity">
        {/* Current language button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 px-3 border h-full border-gray-300 rounded-md bg-white text-black shadow-lg hover:bg-gray-100 cursor-pointer"
        >
          <span className="text-xs font-medium">{current.flag}</span>
          {/* <span className="hidden sm:inline">{current.label}</span> */}
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Dropdown list */}
        {open && (
          <div className="absolute right-0 group-hover:opacity-100 mt-2 w-fit bg-white text-black border border-gray-300 rounded overflow-hidden shadow-lg">
            {languages.map((lng) => (
              <button
                key={lng.code}
                onClick={() => changeLang(lng.code)}
                className={`flex w-full items-center gap-2 px-3 py-2 hover:bg-gray-200 cursor-pointer ${
                  i18n.language === lng.code ? "font-semibold bg-gray-50" : ""
                }`}
              >
                <span className="text-xs">{lng.label}</span>
                {/* <span>{lng.label}</span> */}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
