"use client";

import { useState } from "react";
import Image from "next/image";

// Images that are at the public folder don't need to specify width and height
import infoBanner from "../../../public/assets/banner/boysplanetInfoBanner.png";
import boysplanetBackgroundImage from "../../../public/assets/background/bg-main-visual@2x.png";
import boysplanetLogo from "../../../public/assets/boysplanet_logo_white.png";
import alertIcon from "../../../public/assets/icons/alert_icon.svg";

const HomeHeader = () => {
  const [info, setInfo] = useState(false);
  const isShow = info === false ? "w-10" : "w-56";
  const isCenter = info === false ? "object-left" : "object-center";
  const isRemove = info === false ? "opacity-100" : "opacity-0";

  return (
    <div className="relative w-full select-none h-80 md:h-96">
      {/* Background Image */}
      <div className="absolute w-full h-full ">
        <Image
          src={boysplanetBackgroundImage}
          alt={"Boysplanet Background Image "}
          fill
          priority
          className="absolute object-cover rounded-xl"
        />
      </div>
      {/* Center: Boysplanet Logo */}
      <div className="absolute flex flex-col items-center justify-center w-full h-full space-y-8 ">
        {/* warning: shows warning because static images don't need to specify dimensions */}
        {/* solution: nothing, the applied width and height plays a huge role to maintain the layout */}
        <Image
          src={boysplanetLogo}
          alt="Boysplanet Logo Header"
          width={200}
          height={200}
          priority
          className="origin-bottom md:scale-125"
        />
        <p className="text-xs text-center text-white">
          5th Generation
          <br />
          KPOP Boy Group Debut Project
        </p>
      </div>
      {/* Top Right: Info Banner */}
      <div
        className={`hidden rounded-lg duration-[400ms] cursor-pointer ease-out ${isShow} md:scale-110  origin-top-right h-10 absolute right-4 top-4`}
        onClick={() => setInfo(!info)}
      >
        {/* warning: shows warning because fill property expected only for images that were hosted in other API's */}
        {/* solution: nothing, need to make the ui interactive along with the prefered dimensions */}
        <Image
          src={infoBanner}
          alt="What is Boysplanet Banner"
          fill
          priority
          className={`object-cover ${isCenter} absolute rounded-lg`}
        />
        <div
          className={`${isRemove}   absolute left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 `}
        >
          <Image src={alertIcon} alt={"Alert Icon"} priority />
        </div>
      </div>
      {/* Bottom Left: Broadcast schedule */}
      <BroadCastDayTime date={"Thursday"} time={"8:50 PM (KST)"} />
    </div>
  );
};

export default HomeHeader;

const BroadCastDayTime = ({ date, time }) => {
  return (
    <div className="absolute bottom-0 left-0 p-4 font-mono text-xs text-white ">
      <p>
        Every {date} at {time}
        <span className="p-2 ml-1 bg-red-500 rounded-full">On Air</span>
      </p>
    </div>
  );
};
