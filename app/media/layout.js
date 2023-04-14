import React from "react";
import Image from "next/image";
import MediaContainer from "../components/Media/MediaContainer";

export const metadata = {
  title: "Media | BoysPlanet",
  description: "Boys Planet video contents.",
};

// This will be no cache since I want to get the latest data
async function getData() {
  const YOUTUBE_PLAYLIST_API_KEY =
    "https://www.googleapis.com/youtube/v3/playlistItems";

  // RECENT CLIPS
  // ...returns(50) max
  const recentClipsId = "PLjUVzlcpeN4TqrYXZiIIYcLr5Ww5ujTeV";
  // DANCE PRACTICE
  // ...returns(44)
  const dancePracticeId = "PLyZNrUjFztyXrVC5FIzFHxC9-bgqztY6N";
  // STAR LEVEL TEST
  // ...returns(39)
  // PLE4EHwao_mekZkd7mHP53Nxr0XNzr-XoQ
  const starLevelTestId = "PLL9VZM3aqsLUZqO65EGmSsWQ-9CUWrygM";
  // K VS G
  // ...returns(14)
  const kVsGId = "PLE4EHwao_menXYY1iB2A9VCsKE4gU3lt0";
  // DUAL POSITION BATTLE
  // ...returns(12)
  const dualPositionBattleId = "PLE4EHwao_memx4kx1psf63LP6dsK-nKDC";
  // ARTIST BATTLE
  //...return(5) current
  const artistBattleId = "PLL9VZM3aqsLVXtCXfryRwHNspC_HEgI8f";

  const [
    recentClipsRes,
    dancePracticeRes,
    starLevelTestRes,
    kVsGRes,
    dualPositionBattleRes,
    artistBattleRes,
  ] = await Promise.all([
    fetch(
      `${YOUTUBE_PLAYLIST_API_KEY}?part=snippet&maxResults=50&playlistId=${recentClipsId}&key=${process.env.YOUTUBE_API_KEY}`
    ),
    fetch(
      `${YOUTUBE_PLAYLIST_API_KEY}?part=snippet&maxResults=50&playlistId=${dancePracticeId}&key=${process.env.YOUTUBE_API_KEY}`
    ),
    fetch(
      `${YOUTUBE_PLAYLIST_API_KEY}?part=snippet&maxResults=50&playlistId=${starLevelTestId}&key=${process.env.YOUTUBE_API_KEY}`
    ),
    fetch(
      `${YOUTUBE_PLAYLIST_API_KEY}?part=snippet&maxResults=50&playlistId=${kVsGId}&key=${process.env.YOUTUBE_API_KEY}`
    ),
    fetch(
      `${YOUTUBE_PLAYLIST_API_KEY}?part=snippet&maxResults=50&playlistId=${dualPositionBattleId}&key=${process.env.YOUTUBE_API_KEY}`
    ),
    fetch(
      `${YOUTUBE_PLAYLIST_API_KEY}?part=snippet&maxResults=50&playlistId=${artistBattleId}&key=${process.env.YOUTUBE_API_KEY}`
    ),
  ]);

  const [
    recentClipsList,
    dancePracticeList,
    starLevelTestList,
    kVsGList,
    dualPositionBattleList,
    artistBattleList,
  ] = await Promise.all([
    recentClipsRes.json(),
    dancePracticeRes.json(),
    starLevelTestRes.json(),
    kVsGRes.json(),
    dualPositionBattleRes.json(),
    artistBattleRes.json(),
  ]);

  return {
    props: {
      recentClipsList,
      dancePracticeList,
      starLevelTestList,
      kVsGList,
      dualPositionBattleList,
      artistBattleList,
    },
  };
}

const MediaLayout = async ({ children }) => {
  const {
    props: {
      recentClipsList,
      dancePracticeList,
      starLevelTestList,
      kVsGList,
      dualPositionBattleList,
      artistBattleList,
    },
  } = await getData();

  return (
    <main className={"bg-[#120A30] text-white pb-20"}>
      {children}

      <MediaContainer
        recentClipsList={recentClipsList.items}
        dancePracticeList={dancePracticeList.items}
        starLevelTestList={starLevelTestList.items}
        kVsGList={kVsGList.items}
        dualPositionBattleList={dualPositionBattleList.items}
        artistBattleList={artistBattleList.items}
      />

      {/* footer */}
      {/* <section className="pb-24"></section> */}
    </main>
  );
};

export default MediaLayout;
