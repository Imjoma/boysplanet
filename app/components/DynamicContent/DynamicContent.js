"use client";

import { register } from "swiper/element/bundle";
register();
import { useState, useEffect } from "react";
import RecentVideo from "../Home/RecentVideo";
import CTA from "../Home/CTA";

const DynamicContent = ({ recentClipsList, artistBattleList }) => {
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
  return (
    <>
      <section className="py-4">
        <RecentVideo
          title="recent clips"
          mySwiper={mySwiper}
          thumbnailView={thumbnailView}
          videoList={recentClipsList}
        />
      </section>
      {/* <section>
        <CTA />
      </section> */}
      <section className="py-4">
        <RecentVideo
          title="recent performance"
          mySwiper={mySwiper}
          thumbnailView={thumbnailView}
          videoList={artistBattleList}
        />
      </section>
    </>
  );
};

export default DynamicContent;
