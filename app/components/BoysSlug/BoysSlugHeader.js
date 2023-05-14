import Image from "next/image";

import globalBadge from "../../../public/assets/icons/gbadge.png";
import koreanBadge from "../../../public/assets/icons/kbadge.png";

const BoysSlugHeader = ({ data }) => {
  const nameDefault = data.name.en;
  const profileBanner = data.profileBanner;
  const imagePathLocal = data.mainImgLocal;
  const isBadge = data.globalCode === "KOR" ? koreanBadge : globalBadge;
  const isK =
    data.globalCode === "KOR"
      ? "hover:border-[#4FA3FF]"
      : "hover:border-[#DC2E8D]";
  const region = data.region || null;
  // ${isK} group profile-hover`
  const isActive = data.moto === "" ? null : ``;

  // h-52 sm:h-80 md:h-[360px] lg:h-72
  return (
    <div className="overflow-hidden select-none">
      {/* Banner */}
      <div className="relative w-full h-52  sm:h-80 md:h-[360px] lg:h-72">
        <Image
          src={profileBanner}
          alt={data.name.en + "profile banner"}
          fill
          sizes="(max-width: 768px) 360px"
          priority
          className="absolute object-cover rounded-bl-xl rounded-br-xl"
        />
        {region && (
          <div className="absolute hidden sm:block bottom-0 right-0 px-4 py-2 m-2 font-mono text-white bg-[#120A30] md:rounded-lg rounded-md sm:m-4">
            {region}
          </div>
        )}
      </div>
      {/* Profile Image */}
      <div className="flex flex-row items-end justify-start pr-4 space-x-2 origin-top-left -translate-y-1/2 md:scale-125">
        <div
          className={` ${isActive} relative  flex-shrink-0 ml-4 sm:ml-6 border-8 bg-[#120A30] border-[#120A30] rounded-full h-28 w-28`}
        >
          {/* Image */}
          <Image
            src={imagePathLocal}
            alt={data.name.en + "profile image"}
            fill
            sizes="(max-width: 768px) 100px"
            priority
            className="absolute rounded-full group-hover:opacity-40"
          />
          {/* Filter */}
          <div className="absolute flex items-center justify-center w-full h-full font-mono text-[12px] text-white duration-100 ease-out opacity-0 group-hover:opacity-100">
            View
          </div>
          {/* Badge */}
          <div className="absolute group-hover:border-0  border-4 rounded-full border-[#120A30]  bottom-0 -translate-x-1/2 translate-y-1/2 left-1/2">
            <Image
              src={isBadge}
              alt={nameDefault + "badge"}
              width={28}
              height={28}
            />
          </div>
        </div>
        <div className="hidden text-2xl text-white -translate-y-1/4 md:-translate-y-1/2 sm:block sm:text-3xl">
          {nameDefault}
        </div>
      </div>
    </div>
  );
};

export default BoysSlugHeader;
