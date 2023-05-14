import Image from "next/image";
import Link from "next/link";

const ReelItem = ({ boy }) => {
  // const imagePath = "https://event.mnetplus.world/" + boy.mainImg;
  const imagePathLocal = boy.mainImgLocal;
  const nameDefault = boy.name.en + " profile image";
  const isK = boy.globalCode === "KOR" ? "ring-[#4FA3FF]" : "ring-[#DC2E8D]";
  const slug = boy.name.en.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="flex items-center justify-center w-20 h-20 select-none btn-click">
      <Link
        href={`/boys/${slug}`}
        className={`${isK} ring-[2px] p-1 rounded-full`}
      >
        <div className={`relative  w-16 h-16 rounded-full overflow-hidden`}>
          <Image
            src={imagePathLocal}
            alt={nameDefault}
            fill
            sizes="(max-width: 768px) 64px"
            quality={40}
            className="absolute scale-105 rounded-full"
          />
        </div>
      </Link>
    </div>
  );
};

export default ReelItem;
