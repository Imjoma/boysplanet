import BoysSlugHeader from "@/app/components/BoysSlug/BoysSlugHeader";
import localData from "../../../data/data";
import BoysSlugBody from "@/app/components/BoysSlug/BoysSlugBody";

export async function generateMetadata({ params }) {
  const data = localData;

  const boy = data?.filter(
    (n) => n?.name.en.replace(/\s+/g, "-").toLowerCase() === params.slug
  );

  return {
    title: boy[0].name.en + " - BoysPlanet",
    description: boy[0].moto,
  };
}

async function getData(context) {
  const data = localData;
  const res = data?.find(
    (b) => b?.name.en.replace(/\s+/g, "-").toLowerCase() === context.slug
  );
  const YOUTUBE_PLAYLIST_API_KEY =
    "https://www.googleapis.com/youtube/v3/playlistItems";
  // CURRENT SLUG PLAYLIST ID
  const playlistId = res.playlistId;
  const playlistRes = await fetch(
    `${YOUTUBE_PLAYLIST_API_KEY}?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.YOUTUBE_API_KEY}`
  );
  const playlist = await playlistRes.json();
  return {
    props: {
      res,
      playlist,
    },
  };
}

export async function generateStaticParams() {
  const data = localData;

  const path = data?.map((b) => ({
    slug: b?.name.en.replace(/\s+/g, "-").toLowerCase(),
  }));
  return path;
}

const BoysProfilePage = async ({ params }) => {
  const {
    props: { res, playlist },
  } = await getData(params);

  return (
    <main className={"bg-[#120A30]"}>
      <section>
        <BoysSlugHeader data={res} />
      </section>
      <section>
        <BoysSlugBody data={res} playlist={playlist.items} />
      </section>
      <section className="pt-20"></section>
    </main>
  );
};

export default BoysProfilePage;

// const {
//   props: {
//     selfIntroductionList,
//     nextSelfIntroductionList,
//     signalSongList,
//     nextSignalSongList,
//     kVsGList,
//     nextKVsGList,
//     dualPositionBattleList,
//     nextDualPositionBattleList,
//     artistBattleList,
//   },
// } = await getFancamsFromRootLayout();

// const allSelfIntroductionList = [
//   ...selfIntroductionList.items,
//   ...nextSelfIntroductionList.items,
// ];

// const allSignalSongList = [
//   ...signalSongList.items,
//   ...nextSignalSongList.items,
// ];

// const allKVsGList = [...kVsGList.items, ...nextKVsGList.items];

// const allDualPositionBattleList = [
//   ...dualPositionBattleList.items,
//   ...nextDualPositionBattleList.items,
// ];

// //GET FANCAMS
// const combinedPlaylist = [
//   ...allSelfIntroductionList,
//   ...allSignalSongList,
//   ...allKVsGList,
//   ...allDualPositionBattleList,
//   ...artistBattleList.items,
// ];

// // Filtering videos define by this query
// const sharpUppercaseName =
//   "#" + res.name.en.replace(/\s+/g, "").toUpperCase();
// const koreanName = res.name.ko;

// const handleGetFancams = () => {
//   const fancams = combinedPlaylist.filter((i) =>
//     i.snippet.title
//       .split(" ")
//       .find((n) => n === sharpUppercaseName || n === koreanName)
//   );
//   return fancams;
// };
