"use client";

import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";
import { useSearchParams, redirect } from "next/navigation";

// This page doesn't get any data from the video playlists since it only grabs the url

const VideoPage = () => {
  const [reactPlayerUrl, setReactPlayUrl] = useState(false);
  const searchParams = useSearchParams();
  const currentUrl = searchParams.get("id");

  useEffect(() => {
    setReactPlayUrl(true);
  }, [currentUrl]);

  if (!searchParams.has("id") || searchParams.get("id") === "") {
    redirect("/media");
  }

  const youtubeVideoUrl = "https://www.youtube.com/watch?v=" + currentUrl;

  return (
    <>
      <section className="sticky top-0 z-40 md:relative">
        {/* current video playing */}
        <div
          className={`relative mx-0 border-b bg-[#271664] w-full h-auto  border-[#535068] sm:mx-4 aspect-video`}
        >
          {reactPlayerUrl && (
            <ReactPlayer
              url={youtubeVideoUrl}
              width="100%"
              height="100%"
              controls={true}
              playing={true}
            />
          )}
        </div>
        {/* VIDEO CONTROLLERS*/}
        <div></div>
      </section>
    </>
  );
};

export default VideoPage;
