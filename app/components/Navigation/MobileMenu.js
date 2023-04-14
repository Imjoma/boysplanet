"use client";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import homeIcon from "../../../public/assets/icons/home_icon.svg";
import searchIcon from "../../../public/assets/icons/search_icon.svg";
import mediaIcon from "../../../public/assets/icons/media_icon.svg";
import mnetPlusAppIcon from "../../../public/assets/icons/mnetplus-logo.png";

const MobileNav = () => {
  const navLinks = [
    { id: 1, name: "Home", link: "/", icon: homeIcon },
    { id: 2, name: "Search", link: "/boys", icon: searchIcon },
    { id: 3, name: "Media", link: "/media", icon: mediaIcon },
  ];
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 z-30 block w-screen h-20 max-w-4xl mx-auto select-none lg:max-w-3xl lg:hidden">
      <div className="flex items-end justify-around w-full h-full mobileNavGradient ">
        {/* warning: shows warning because static images don't need to specify dimensions */}
        {/* solution: readjust sizes buy scaling */}

        {navLinks.map((nav) => (
          <div
            key={nav.id}
            className={`${pathname === nav.link && "opacity-60"} w-full h-full`}
          >
            <Link href={nav.link}>
              <div
                className="flex flex-col items-center justify-center w-full h-full space-y-2 "
                key={nav.id}
              >
                {nav.name === "Search" ? (
                  <Image
                    src={nav.icon}
                    alt={`Boysplanet ${nav.name} icon`}
                    className="scale-95 "
                  />
                ) : (
                  <Image src={nav.icon} alt={`Boysplanet ${nav.name} icon`} />
                )}
              </div>
            </Link>
          </div>
        ))}
        <div
          className={`${pathname === "/mnet" && "opacity-60"} w-full h-full`}
        >
          <Link href={"/mnet"}>
            <div className="flex flex-col items-center justify-center w-full h-full space-y-2 ">
              <Image
                src={mnetPlusAppIcon}
                alt="Boysplanet Mnet Icon"
                width={26}
                height={26}
                className={`  scale-110`}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
