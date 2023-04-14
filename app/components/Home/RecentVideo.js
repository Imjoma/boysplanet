"use client";

import SectionHeader from "../SectionHeader";
import SkeletonForVideo from "../SkeletonUI/SkeletonForVideo";
import VideoItem from "./VideoItem";

const RecentVideo = ({ title, mySwiper, thumbnailView, videoList }) => {
  const isPerformance = title.includes("performance") ? 1.5 : thumbnailView;

  return (
    <div className="flex flex-col space-y-2 text-white">
      <SectionHeader title={title} />

      {/* Original Ui */}
      {/* className="flex flex-row h-32 px-4 space-x-4 overflow-x-auto sm:h-40" */}
      {/* className="border rounded-md aspect-video" */}
      {mySwiper === false ? (
        <SkeletonForVideo isPerformance={title.includes("performance")} />
      ) : (
        <div className="relative">
          {/* Don't need to specify width and height because the swiper api provides it automatically*/}
          <swiper-container
            slides-per-view={isPerformance}
            space-between="16"
            slides-offset-before="16"
            slides-offset-after="16"
          >
            {/* ToDo: add members profile image if isPerformance and isBig */}
            {/* ToDo: Change this to a component */}
            {videoList?.map((video) => (
              <swiper-slide key={video.id}>
                <VideoItem video={video} title={title} />
              </swiper-slide>
            ))}
          </swiper-container>
          {/* Left Fade */}
          <div className="hidden absolute md:block top-0 left-0 z-40 w-4 bg-gradient-to-r from-[#120A30]  to-transparent h-full"></div>
          {/* Right Fade*/}
          <div className="hidden  absolute md:block top-0 right-0 z-40 w-4  bg-gradient-to-l  from-[#120A30]  to-transparent h-full"></div>
        </div>
      )}
    </div>
  );
};

export default RecentVideo;

// WITH PROFILE IMAGES
{
  /* <swiper-slide>
{title.includes("performance") ? (
  <div>
    <div className=" aspect-video">
      <Image
        src={VideoImage}
        alt={"Video Thumbnail"}
        className="rounded-md"
      />
    </div>
   // photos of each performers  
    <ul className="flex-row hidden -space-x-4 md:flex ">
      {[...Array(9).keys()].map((i) => (
        <li
          key={i}
          className="relative bg-red-500 rounded-full p-7"
        >
          <Image
            src={profileImage}
            alt={"Video Thumbnail"}
            fill
            className="absolute object-cover border rounded-full"
          />
        </li>
      ))}
    </ul>
  </div>
) : (
  <div className="aspect-video">
    <Image
      src={VideoImage}
      alt={"Video Thumbnail"}
      className="rounded-md"
    />
  </div>
)}
</swiper-slide> */
}
