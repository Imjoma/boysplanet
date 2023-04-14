"use client";

import { use, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import SideNavLinks from "./SideNavLinks";

import boysplanetLogo from "../../../public/assets/boysplanet_logo_white.png";

import closeIcon from "../../../public/assets/icons/ico-24-close@2x.png";
import starIcon from "../../../public/assets/icons/star.png";
import SideMenuBigScreen from "./SideMenuBigScreen";
import backIcon from "../../../public/assets/icons/ico-slide-right@2x.png";

import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const pathList = ["/", "/boys", "/media", "/mnet", "/media/video"];
  const pagePath = pathList.find((p) => p === pathname);

  if (pathname === "/media/video" || pathname === "/mnet") {
    return <></>;
  }

  return (
    <>
      {/* if want to center the nav on bigger screen: left-1/2 -transform-x-1/2 */}
      {/* if don't want a max-width:  max-w-[1920px] */}
      {pagePath ? (
        <nav className="fixed top-0 max-w-4xl lg:max-w-3xl h-28 lg:hidden  z-50 flex items-center bg-gradient-to-b from-[#120A30] to-transparent  flex-row justify-between w-full px-4 py-4 ">
          <div className="origin-top-left lg:scale-110">
            <Link href="/">
              <Image
                src={boysplanetLogo}
                width="90"
                height="90"
                alt="Boysplanet Logo"
                priority
              />
            </Link>
          </div>
        </nav>
      ) : (
        <nav className="fixed top-0 z-[999] flex flex-row items-center justify-between w-full max-w-4xl px-4 py-4 lg:max-w-3xl  ">
          <button
            className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded-full group ring-1 md:scale-110 btn-click"
            onClick={() => router.back()}
          >
            <Image
              src={backIcon}
              width="24"
              height="24"
              alt="back icon"
              className="rotate-180"
              priority
            />
          </button>
        </nav>
      )}
      {/* Menu: Star Button */}
      {/* <button
          aria-label="Menu Button"
          className="flex items-center justify-center w-10 h-10 text-sm font-semibold origin-top-right rounded-lg md:scale-110 btn-click"
          onClick={() => setMenu(!menu)}
        >
          <Image
            className="btn-click-icon"
            src={menu === false ? starIcon : closeIcon}
            width={28}
            height={28}
            priority
            alt="Menu Button Icon"
          />
        </button> */}

      {/* Slide Nav on Mobile */}
      {/* <SideNavLinks menu={menu} setMenu={setMenu} /> */}
      {/* Side Menu for Bigger Screen: This will be added once the the dynamic routes are finalized */}
      {/* <SideMenuBigScreen /> */}
    </>
  );
};

export default Navbar;
