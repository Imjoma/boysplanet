import Link from "next/link";
import Image from "next/image";

import globalBadge from "../../../public/assets/icons/gbadge.png";
import koreanBadge from "../../../public/assets/icons/kbadge.png";

const BoysItem = ({ boy }) => {
  const imagePath = "https://event.mnetplus.world/" + boy.mainImg;
  const imagePathLocal = boy.mainImgLocal;
  const nameDefault = boy.name.en;
  const isBadge = boy.globalCode === "KOR" ? koreanBadge : globalBadge;
  return (
    <>
      {boy !== undefined && (
        <Link href={"/boys/" + boy.name.en.replace(/\s+/g, "-").toLowerCase()}>
          <div className={`flex flex-col space-y-1 btn-click`}>
            <div className="relative w-full aspect-square">
              <Image
                src={imagePathLocal}
                alt={nameDefault + "profile image"}
                fill
                className="absolute rounded-xl"
              />
              <div className="absolute bottom-0 right-0 p-1 scale-75 sm:scale-100 sm:p-2">
                <Image
                  src={isBadge}
                  alt={nameDefault + " badge"}
                  width={28}
                  height={28}
                />
              </div>
            </div>
            <p className="text-xs text-center text-white break-words sm:text-sm">
              {boy.name.en}
            </p>
          </div>
        </Link>
      )}
    </>
  );
};

export default BoysItem;
