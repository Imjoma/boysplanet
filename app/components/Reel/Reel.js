"use client";

import { useState } from "react";

import ReelSlider from "./ReelSlider";
import localData from "../../../data/data";

const Reel = () => {
  const data = localData;

  // DEFAULT: data for featuredReel if customize Top 9 doesn't exist
  const [featuredReel, setFeaturedReel] = useState([...data.slice(0, 9)]);

  // make random top9
  const getRandomTop9 = () => {
    let randomTop9 = [];
    for (let i = 0; i < 9; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const hasNoProfile = data[randomIndex].videoBannerLink === "";
      const isDuplicate = randomTop9.includes(data[randomIndex]);

      if (!hasNoProfile && !isDuplicate) {
        randomTop9.push(data[randomIndex]);
      } else {
        i--;
      }
    }
    return randomTop9;
  };

  return (
    <>
      <ReelSlider data={[...getRandomTop9()]} />
    </>
  );
};

export default Reel;
