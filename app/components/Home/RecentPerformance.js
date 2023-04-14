import VideoImage from "../../../public/assets/maxresdefault.jpg";
import ProfileImage from "../../../public/assets/masters/img-master-kooyoung@2x.png";
import Image from "next/image";
import Link from "next/link";

import SectionHeader from "../SectionHeader";

const RecentPerformance = ({ title }) => {
  return (
    <div className="relative flex flex-col space-y-2 text-white ">
      <SectionHeader title={title} />
      <ul className="flex flex-row px-4 space-x-4 overflow-y-hidden ">
        {/* pb-[50%] sm:pb-[33%]  */}
        <Link
          href={"/boys"}
          alt={"Thumbnail Link for"}
          className="relative w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[460px] "
        >
          <div className="relative aspect-video ">
            <Image
              src={VideoImage}
              alt={"Video Thumbnail"}
              fill
              className="absolute rounded-lg"
            />
          </div>
          <div className="pt-2 font-sans opacity-90 ">
            <p className="w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[460px] truncate2ndLine">
              [BOYS PLANET/6회] 찰칵 찰칵📷 우린 모두 'ZOOM' 팀 무대 보기 위해
              살아~❤️ㅣ#보이즈플래닛 #BOYSPLANET
            </p>
          </div>
          {/* <div className="absolute top-0 right-0 w-24 h-24 translate-x-full bg-red-400 rounded-full"></div> */}
        </Link>
        <Link
          href={"/boys"}
          alt={"Thumbnail Link for"}
          className="w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[460px]"
        >
          <div className="relative aspect-video ">
            <Image
              src={VideoImage}
              alt={"Video Thumbnail"}
              fill
              className="absolute rounded-lg"
            />
          </div>
          <div className="pt-2 font-sans opacity-90 ">
            <p className="w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[460px] truncate2ndLine">
              [BOYS PLANET/6회] 찰칵 찰칵📷 우린 모두 'ZOOM' 팀 무대 보기 위해
              살아~❤️ㅣ#보이즈플래닛 #BOYSPLANET
            </p>
          </div>
        </Link>
      </ul>
      {/* Left Navigation */}
      {/* <div className="absolute top-0 left-0 w-4 h-full  bg-gradient-to-r from-[#120A30] to-transparent"></div> */}
      {/* Right Navigation */}
      {/* <div className="absolute top-0 right-0 w-4 h-full  bg-gradient-to-l from-[#120A30] to-transparent"></div> */}
    </div>
  );
};

export default RecentPerformance;
{
  /* Good Stuff but may not be added */
}
{
  /* <div className="absolute bottom-0 right-0 ">
  <ul className="flex flex-row justify-end p-2 border border-red-500">
    <li className="relative translate-x-64 w-14 h-14">
      <Image
        src={ProfileImage}
        alt={"Video Thumbnail"}
        intrinsic
        className="absolute rounded-md"
      />
    </li>
    <li className="relative translate-x-56 w-14 h-14">
      <Image
        src={ProfileImage}
        alt={"Video Thumbnail"}
        intrinsic
        className="absolute rounded-md"
      />
    </li>
    <li className={"relative translate-x-48 w-14 h-14"}>
      <Image
        src={ProfileImage}
        alt={"Video Thumbnail"}
        intrinsic
        className="absolute rounded-md"
      />
    </li>
    <li className="relative translate-x-40 w-14 h-14">
      <Image
        src={ProfileImage}
        alt={"Video Thumbnail"}
        intrinsic
        className="absolute rounded-md"
      />
    </li>
    <li className="relative translate-x-32 w-14 h-14">
      <Image
        src={ProfileImage}
        alt={"Video Thumbnail"}
        intrinsic
        className="absolute rounded-md"
      />
    </li>
    <li className="relative translate-x-24 w-14 h-14">
      <Image
        src={ProfileImage}
        alt={"Video Thumbnail"}
        intrinsic
        className="absolute rounded-md"
      />
    </li>
    <li className="relative translate-x-16 w-14 h-14">
      <Image
        src={ProfileImage}
        alt={"Video Thumbnail"}
        intrinsic
        className="absolute rounded-md"
      />
    </li>
    <li className="relative translate-x-8 w-14 h-14">
      <Image
        src={ProfileImage}
        alt={"Video Thumbnail"}
        intrinsic
        className="absolute rounded-md"
      />
    </li>
    <li className="relative translate-x-0 w-14 h-14">
      <Image
        src={ProfileImage}
        alt={"Video Thumbnail"}
        intrinsic
        className="absolute rounded-md"
      />
    </li>
  </ul>
</div> */
}
