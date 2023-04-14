"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const VideoItem = ({ video, title }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const videoTitle = video.snippet.title;
  const videoDescription = video.snippet.description;
  const videoLinkId = "/media/video?id=" + video.snippet.resourceId.videoId;
  const videoThumbnail = video.snippet.thumbnails.standard.url;
  const videoAlt = video.snippet.title + " Video Thumbnail";
  const currentUrl = searchParams.get("id");
  const isPlaying = videoLinkId.includes(currentUrl);
  const isSlugOrPerformance =
    title === "slug" || title === "recent performance";

  const handleClickedVideo = (url) => {
    router.push(url);
    const isMobile = window.innerWidth < 640;
    const isVideoPage = pathname === "/media/video";
    if (!isMobile || !isVideoPage) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <a
        onClick={() => handleClickedVideo(videoLinkId)}
        className="block rounded-md cursor-pointer select-none btn-click"
      >
        <div className="relative aspect-video">
          <Image
            src={videoThumbnail}
            fill
            alt={videoAlt}
            className="absolute object-cover rounded-md"
          />
          {isPlaying && (
            <div className="absolute grid w-full h-full font-mono bg-black border rounded-md opacity-80 place-content-center">
              playing
            </div>
          )}
        </div>

        {!isSlugOrPerformance && (
          <div className="pt-2 font-mono text-sm md:text-base truncate2ndLine">
            {videoTitle}
          </div>
        )}
      </a>
    </>
  );
};

export default VideoItem;
