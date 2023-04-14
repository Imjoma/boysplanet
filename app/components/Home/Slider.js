"use client";

import { register } from "swiper/element/bundle";
register();

import Image from "next/image";
import VideoImage from "../../../public/assets/maxresdefault.jpg";

import { useState, useEffect } from "react";

const Slider = ({ thumbnailView }) => {
  return (
    <div>
      <span className="text-white">{thumbnailView}</span>
      <swiper-container
        slides-per-view={thumbnailView}
        space-between="16"
        slides-offset-before="16"
        slides-offset-after="16"
      >
        <swiper-slide>
          <div className="w-full text-white border aspect-video">
            <Image src={VideoImage} alt="asd" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="   h-24 text-white border">Slide1</div>
        </swiper-slide>
        <swiper-slide>
          <div className="w-full h-24 text-white border">Slide1</div>
        </swiper-slide>
        <swiper-slide>
          <div className="w-full h-24 text-white border">Slide1</div>
        </swiper-slide>
        <swiper-slide>
          <div className="w-full h-24 text-white border">Slide1</div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Slider;
