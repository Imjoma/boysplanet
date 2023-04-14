import Reel from "./components/Reel/Reel";
import HomeHeader from "./components/Home/HomeHeader";

import Announcement from "./components/Home/Announcement";
import SignalSongVideo from "./components/Home/SignalSongVideo";

import DynamicContent from "./components/DynamicContent/DynamicContent";

async function getData() {
  const YOUTUBE_PLAYLIST_API_KEY =
    "https://www.googleapis.com/youtube/v3/playlistItems";

  // RECENT CLIPS
  // ...returns(50) max
  const recentClipsId = "PLjUVzlcpeN4TqrYXZiIIYcLr5Ww5ujTeV";
  // ARTIST BATTLE
  const artistBattleId = "PLL9VZM3aqsLVXtCXfryRwHNspC_HEgI8f";

  const [recentClipsRes, artistBattleRes] = await Promise.all([
    fetch(
      `${YOUTUBE_PLAYLIST_API_KEY}?part=snippet&maxResults=9&playlistId=${recentClipsId}&key=${process.env.YOUTUBE_API_KEY}`,
      { cache: "no-store" }
    ),
    fetch(
      `${YOUTUBE_PLAYLIST_API_KEY}?part=snippet&maxResults=9&playlistId=${artistBattleId}&key=${process.env.YOUTUBE_API_KEY}`
    ),
  ]);

  const [recentClipsList, artistBattleList] = await Promise.all([
    recentClipsRes.json(),
    artistBattleRes.json(),
  ]);

  return {
    props: {
      recentClipsList,
      artistBattleList,
    },
  };
}

export default async function Home() {
  const {
    props: { recentClipsList, artistBattleList },
  } = await getData();

  return (
    <main className={"bg-[#120A30] pb-20"}>
      <section className="pb-4 pt-28 lg:pt-12">
        <Reel />
      </section>
      <section className="">
        <HomeHeader />
      </section>
      <DynamicContent
        recentClipsList={recentClipsList.items}
        artistBattleList={artistBattleList.items}
      />
      {/* <section className="py-4">
        <SignalSongVideo />
      </section> */}
      {/* <section className="pt-4 pb-24">
        <Announcement />
      </section> */}
    </main>
  );
}
