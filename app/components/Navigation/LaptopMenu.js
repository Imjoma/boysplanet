import homeIcon from "../../../public/assets/icons/home_star.svg";
import searchIcon from "../../../public/assets/icons/search_icon.svg";
import mediaIcon from "../../../public/assets/icons/media_icon.svg";
import mnetPlusAppIcon from "../../../public/assets/icons/mnetplus-logo.png";

import Link from "next/link";

import Image from "next/image";

const LaptopMenu = () => {
  const navLinks = [
    { id: 1, name: "Home", link: "/", icon: homeIcon },
    { id: 2, name: "Search", link: "/boys", icon: searchIcon },
    { id: 3, name: "Media", link: "/media", icon: mediaIcon },
    { id: 4, name: "Mnet", link: "/mnet", icon: mnetPlusAppIcon },
  ];

  return (
    <aside className="fixed top-0 z-50 items-center hidden h-screen max-w-3xl mx-auto pointer-events-none select-none lg:flex ">
      <div className="flex flex-col space-y-3 -translate-x-16 w-fit">
        {navLinks.map((nav) => (
          <div key={nav.id}>
            <Link href={nav.link}>
              <div
                className="flex items-center justify-start w-12 h-12 space-x-3 overflow-hidden duration-300 ease-out bg-blue-900 rounded-lg pointer-events-auto ring-1 btn-click group hover:w-36"
                key={nav.id}
              >
                {nav.name.includes("Mnet") ? (
                  <Image
                    src={nav.icon}
                    alt={`Boysplanet ${nav.name} icon`}
                    width={28}
                    height={28}
                    className="ml-3"
                  />
                ) : (
                  <Image
                    src={nav.icon}
                    alt={`Boysplanet ${nav.name} icon`}
                    className="ml-3"
                  />
                )}

                <p className="hidden pr-3 text-sm text-white group-hover:block">
                  {nav.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default LaptopMenu;
