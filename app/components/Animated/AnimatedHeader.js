"use client";
import { useState } from "react";
import Image from "next/image";
import boysplanetLogoWhite from "../public/assets/boysplanet_logo_white.png";
import headerSlideLeft from "../public/assets/headerSlideLeft.png";
import headerSlideRight from "../public/assets/headerSlideRight.png";

const HomeHeader = () => {
  const [slide, setSlide] = useState(false);

  const handleOpenSlide = () => {
    //   setSlide(!slide);
    console.log("handle open slide clicked!");
  };

  return (
    <header className="flex flex-row ">
      <div className="w-screen h-screen"></div>
      {/* Official Background Image */}
      <div
        className={`fixed top-0 left-0 w-full h-full ${
          slide ? "" : "-translate-x-full"
        }`}
      >
        <Image
          src={headerSlideLeft}
          alt="Boysplanet Logo"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className={`fixed   duration-[1600ms] ease-out top-0 left-0 w-full h-full ${
          slide ? "" : "translate-x-full"
        }`}
      >
        <Image
          src={headerSlideRight}
          alt="Boysplanet Logo"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Image
          src={boysplanetLogoWhite}
          width={360}
          height={360}
          alt="Boysplanet Logo"
          priority
          onClick={() => handleOpenSlide()}
        />
      </div>
    </header>
  );
};

export default HomeHeader;
