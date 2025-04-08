import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-white">
      <div className="bg-[#7ACA2A]">
        <div className="container mx-auto px-3 py-5 grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-2">
            <Logo src="/assets/logo_white.png" color="text-white" />
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-2 md:px-5">
            <p className="mb-2 text-lg font-bold">Mapa witryny</p>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg">{`>`}</span>
              <span>Dom</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg">{`>`}</span>
              <span>Funkcje Urban Crops i Przewaga Konkurencyjna</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg">{`>`}</span>
              <span>Często zadawane pytania</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg">{`>`}</span>
              <span>Członkowie naszego zespołu</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg">{`>`}</span>
              <span>Skontaktuj się z nami</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg">{`>`}</span>
              <span>Co można uprawiać</span>
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-2 md:px-5">
            <p className="mb-2 text-lg font-bold">Media społecznościowe</p>
            <Link href="https://www.linkedin.com/company/urban-cropss" target="_blank" className="flex items-center gap-2 w-fit">
              <span className="text-lg">{`>`}</span>
              <span>Linkedin</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <p className="container mx-auto text-center text-sm px-3 py-3">
          &copy; 2025 Urban Crops. All rights reserved.
        </p>
      </div>
    </div>
  );
}
