import Image from "next/image";
import React from "react";
import landingPic from "../assets/hamburger.png";

function LandingLayout() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center py-6">
      <div className="text-container w-full sm:w-1/2">
        <p className="text-center sm:text-left text-xl sm:text-3xl font-bold px-10">
          Khawatir kelebihan kalori? <br /> Bingung harus masak apa? <br /> Cari
          resep dengan batasan kalorimu sekarang secara gratis! Biar RECIPERY
          yang atur menu harian kamu!
        </p>
      </div>
      <div className="image-container w-full sm:w-1/3 sm:py-0 py-3">
        <Image src={landingPic} />
      </div>
    </div>
  );
}

export default LandingLayout;
