import Link from "next/link";
import Image from "next/image";
// import boysplanetLogo from "../../../public/assets/boysplanet_logo_white.png";
import boysplanetLogo from "../../../public/assets/revampBoysplanetLogoWhite.png";
import homeIcon from "../../../public/assets/icons/home_icon.svg";
import searchIcon from "../../../public/assets/icons/search_icon.svg";
import mediaIcon from "../../../public/assets/icons/media_icon.svg";
import mnetPlusAppIcon from "../../../public/assets/icons/mnetplus-logo.png";

const SideNavBigScreen = () => {
  const navLinks = [
    { id: 1, name: "Home", link: "/", icon: searchIcon },
    { id: 2, name: "Search", link: "/boys", icon: searchIcon },
    { id: 3, name: "Media", link: "/media", icon: searchIcon },
  ];
  return (
    <aside className="fixed top-0 left-0 z-50 hidden h-screen px-8 py-12 text-white lg:flex ">
      <div className="flex flex-col rounded-2xl h-fit">
        {/* Top */}
        <div className="flex flex-col items-center w-full space-y-12">
          <Link href="/">
            <Image
              src={boysplanetLogo}
              width={100}
              height={100}
              alt="Boysplanet Logo"
              priority
            />
          </Link>
          <ul className="flex flex-col space-y-2">
            {navLinks.map((nav) => (
              <Link href={nav.link} key={nav.id}>
                <div className="flex flex-row w-full xl:w-56  bg-[#24145F] p-4 space-x-3 items-center rounded-full">
                  <Image src={nav.icon} alt={`Boysplanet icon`} />
                  <div className="hidden text-sm xl:block">{nav.name}</div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
        {/* Bottom  */}
        {/* <button className="border ">onelink</button> */}
      </div>
    </aside>
  );
};

export default SideNavBigScreen;
