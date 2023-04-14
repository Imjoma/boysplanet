"use client";
import { useState, useEffect } from "react";
import RecentVideo from "../Home/RecentVideo";

const BoysSlugBody = ({ data, playlist }) => {
  const [mySwiper, setMySwiper] = useState(false);
  const [thumbnailView, setThumbnailView] = useState(1.5);

  useEffect(() => {
    setMySwiper(true);
    if (window.innerWidth > 480) {
      setThumbnailView(2.5);
    } else {
      setThumbnailView(1.5);
    }
    window.onresize = () => {
      if (window.innerWidth > 480) {
        setThumbnailView(2.5);
      } else {
        setThumbnailView(1.5);
      }
    };
  }, []);

  const nameDefault = data.name.en;
  const motto = data.moto;
  const birth = data.birth;
  const height = data.height;
  const agency = data.agency;
  const hobby = data.hobby;
  const specialty = data.specialty;

  const boysData = [
    { title: "name", info: nameDefault },
    { title: "birth", info: birth },
    { title: "height", info: height },
    { title: "agency", info: agency },
    { title: "hobby", info: hobby },
    { title: "specialty", info: specialty },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <div className="w-full rounded-lg bg-[#322D59] p-6 md:p-12 space-y-8 text-white">
        {boysData.map((boy, idx) => (
          <div className="flex flex-col sm:space-y-1" key={idx}>
            <p className="text-[12px] font-thin opacity-60">{boy.title}</p>
            <p className="text-xl md:text-3xl">{boy.info || "-"}</p>
          </div>
        ))}
      </div>
      {data.playlistId !== "" && (
        <div className="ml-0 lg:-ml-4">
          <RecentVideo
            title="slug"
            mySwiper={mySwiper}
            thumbnailView={thumbnailView}
            videoList={playlist}
          />
        </div>
      )}

      <div className="w-full rounded-lg bg-[#322D59] p-6 md:p-12 space-y-8 text-white">
        <div className="flex flex-col sm:space-y-1">
          <p className="text-[12px] font-thin opacity-60">motto</p>
          <p className="text-xl md:text-3xl">{motto || "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default BoysSlugBody;
