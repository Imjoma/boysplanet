"use client";
import { register } from "swiper/element/bundle";
register();

import ReelItem from "./ReelItem";

import { useState, useEffect } from "react";
import SkeletonForReel from "../SkeletonUI/SkeletonForReel";
import MakeTop9 from "./MakeTop9";

const ReelSlider = ({ data }) => {
  // ...make the skeleton load only once

  const [mySwiper, setMySwiper] = useState(false);
  const [current9, setCurrent9] = useState([]);

  useEffect(() => {
    setCurrent9([...data]);
    setMySwiper(true);
  }, []);

  // console.log(current9);

  return (
    <>
      {mySwiper === false ? (
        <SkeletonForReel />
      ) : (
        <swiper-container
          space-between="8"
          slides-per-view="auto"
          slides-offset-before="16"
          slides-offset-after="16"
        >
          {/* <swiper-slide style={{ width: "fit-content" }}>
            <MakeTop9 />
          </swiper-slide> */}
          {/* Default: random Participants */}
          {/* Custom: Top 9 Favorites */}
          {current9.map((boy) => (
            <swiper-slide key={boy.id} style={{ width: "fit-content" }}>
              <ReelItem boy={boy} key={boy.id} data={data} />
            </swiper-slide>
          ))}
        </swiper-container>
      )}
    </>
  );
};

export default ReelSlider;
