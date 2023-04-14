"use client";

import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";
import { useSearchParams, redirect } from "next/navigation";

// This page doesn't get any data from the video playlists since it only grabs the url
export const metadata = {
  title: "Media | BoysPlanet",
  description: "Boys Planet video contents.",
};

const VideoPage = () => {
  const [reactPlayerUi, setReactPlayUi] = useState(false);
  const searchParams = useSearchParams();
  const currentUrl = searchParams.get("id");

  useEffect(() => {
    setReactPlayUi(true);
  }, []);

  if (!searchParams.has("id") || searchParams.get("id") === "") {
    redirect("/media");
  }

  const youtubeVideoUrl = "https://www.youtube.com/watch?v=" + currentUrl;

  return (
    <>
      <section className="sticky top-0 z-40 md:relative">
        {/* current video playing */}
        {reactPlayerUi && (
          <div className="mx-0 border-b  border-[#535068] sm:mx-4 aspect-video">
            <ReactPlayer
              url={youtubeVideoUrl}
              width="100%"
              height="100%"
              controls={true}
              playing={true}
            />
          </div>
        )}
        {/* VIDEO CONTROLLERS*/}
        <div></div>
      </section>
    </>
  );
};

export default VideoPage;
