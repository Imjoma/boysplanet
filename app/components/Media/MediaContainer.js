"use client";
import { useState, useEffect, useRef } from "react";
import RecentVideo from "../Home/RecentVideo";
import MediaGrid from "./MediaGrid";
import { usePathname } from "next/navigation";

import { register } from "swiper/element/bundle";
import SkeletonForMediaFilter from "../SkeletonUI/SkeletonForMediaFilter";
register();

const MediaContainer = ({
  recentClipsList,
  dancePracticeList,
  starLevelTestList,
  kVsGList,
  dualPositionBattleList,
  artistBattleList,
}) => {
  const [mySwiper, setMySwiper] = useState(false);
  const [thumbnailView, setThumbnailView] = useState(1.5);
  const [selectedFilter, setSelectedFilter] = useState("featured");
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [savedFeatured, setSavedFeatured] = useState(null);
  const [savedDancePractice, setSavedDancePractice] = useState(null);
  const [savedStarLevelTest, setSavedStarLevelTest] = useState(null);
  const dataRef = useRef(false);
  const pathname = usePathname();

  const featuredPlaylist = [
    ...recentClipsList,
    ...dancePracticeList,
    ...starLevelTestList,
    ...kVsGList,
    ...dualPositionBattleList,
    ...artistBattleList,
  ];

  const getRandomPlaylist = (arr, length) => {
    let randomPlaylist = [];
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const isDuplicate = randomPlaylist.includes(arr[randomIndex]);

      if (!isDuplicate) {
        randomPlaylist.push(arr[randomIndex]);
      } else {
        i--;
      }
    }
    return randomPlaylist;
  };

  const mediaPlaylist = [
    {
      title: "featured",
      playlist: savedFeatured || [...getRandomPlaylist(featuredPlaylist, 20)],
    },
    { title: "recent clips", playlist: recentClipsList },
    {
      title: "dance practice",
      playlist: savedDancePractice || [
        ...getRandomPlaylist(dancePracticeList, dancePracticeList?.length),
      ],
    },
    { title: "artist battle", playlist: artistBattleList },
    { title: "dual position battle", playlist: dualPositionBattleList },
    { title: "k vs g", playlist: kVsGList },
    {
      title: "star level test",
      playlist: savedStarLevelTest || [
        ...getRandomPlaylist(starLevelTestList, starLevelTestList?.length),
      ],
    },
  ];

  const handleSelectedFilter = (filter) => {
    const selectedPlaylist = mediaPlaylist.filter(
      (playlist) => playlist.title === filter
    );
    setSelectedFilter(selectedPlaylist[0].title);
    setCurrentPlaylist(selectedPlaylist[0].playlist);
  };

  useEffect(() => {
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
    // Initial load
    if (dataRef.current) return;
    setMySwiper(true);
    setCurrentPlaylist(mediaPlaylist[0].playlist);
    setSavedFeatured(mediaPlaylist[0].playlist);
    setSavedDancePractice(mediaPlaylist[2].playlist);
    setSavedStarLevelTest(mediaPlaylist[6].playlist);
    dataRef.current = true;
  }, []);

  const hasVideo = pathname === "/media/video";

  return (
    <section className={`${hasVideo ? "pt-8" : "pt-28 lg:pt-12"}`}>
      <div className="flex flex-col space-y-8 overflow-hidden ">
        {mySwiper === false ? (
          <SkeletonForMediaFilter options={mediaPlaylist} />
        ) : (
          <div className="relative">
            <swiper-container
              space-between="8"
              slides-per-view="auto"
              slides-offset-before="16"
              slides-offset-after="16"
            >
              {mediaPlaylist.map((i, idx) => (
                <swiper-slide style={{ width: "fit-content" }} key={i.title}>
                  <FilterItems
                    i={i}
                    handleSelectedFilter={handleSelectedFilter}
                    selectedFilter={selectedFilter}
                  />
                </swiper-slide>
              ))}
            </swiper-container>
            {/* Left Fade */}
            <div className="hidden absolute md:block top-0 left-0 z-40 w-4 bg-gradient-to-r from-[#120A30]  to-transparent h-full"></div>
            {/* Right Fade*/}
            <div className="hidden  absolute md:block top-0 right-0 z-40 w-4  bg-gradient-to-l  from-[#120A30]  to-transparent h-full"></div>
          </div>
        )}

        <MediaGrid
          playlist={mediaPlaylist}
          mySwiper={mySwiper}
          thumbnailView={thumbnailView}
          selectedPlaylist={currentPlaylist}
          selectedFilter={selectedFilter}
        />
      </div>
    </section>
  );
};

export default MediaContainer;

const FilterItems = ({ i, selectedFilter, handleSelectedFilter }) => {
  return (
    <div
      className={`px-4 btn-click  py-2 ${
        i.title === selectedFilter ? "bg-blue-900" : " bg-[#535068]"
      } rounded-md`}
      key={i.title}
      onClick={() => handleSelectedFilter(i.title)}
    >
      <p className="font-sans text-sm capitalize select-none sm:text-base whitespace-nowrap">
        {i.title}
      </p>
    </div>
  );
};
