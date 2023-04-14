import React from "react";
import Image from "next/image";
import SignalSongThumbnail from "../../../public/assets/asdsad.jpg";

const SignalSongVideo = () => {
  return (
    <div className="px-4">
      <div className="relative aspect-video">
        <Image
          src={SignalSongThumbnail}
          alt="Boysplanet Signal Song Here I am Thumbnail"
          fill
          className="absolute rounded-xl"
        />
      </div>
    </div>
  );
};

export default SignalSongVideo;
