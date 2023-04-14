import VideoItem from "../Home/VideoItem";
import RecentVideo from "../Home/RecentVideo";
import SkeletonForVideoAtGrid from "../SkeletonUI/SkeletonForVideoAtGrid";

const MediaGrid = ({
  playlist,
  mySwiper,
  thumbnailView,
  selectedPlaylist,
  selectedFilter,
}) => {
  // console.log(selectedPlaylist);
  const isGreaterOrEqualTo20 = selectedPlaylist?.length >= 20;
  const firstGrid = isGreaterOrEqualTo20
    ? selectedPlaylist?.slice(0, 20)
    : selectedPlaylist;

  const secondGrid = isGreaterOrEqualTo20
    ? selectedPlaylist?.slice(firstGrid?.length)
    : undefined;

  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 mx-4 sm:grid-cols-2 pb-8 border-b-[1px] border-[#535068]">
        {!firstGrid
          ? [...Array(2).keys()].map((i) => <SkeletonForVideoAtGrid key={i} />)
          : firstGrid?.map((video) => (
              <div key={video.id}>
                <VideoItem video={video} />
              </div>
            ))}
      </div>

      <div className="flex flex-col space-y-8 lg:space-y-12 ">
        {playlist
          .filter((p) => p.title !== selectedFilter)
          .map((p) => (
            <RecentVideo
              key={p.title}
              title={p.title}
              mySwiper={mySwiper}
              thumbnailView={thumbnailView}
              videoList={p.playlist}
            />
          ))}
      </div>

      {secondGrid !== undefined && (
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 mx-4 sm:grid-cols-2 pt-8 border-t-[1px] border-[#535068]">
          {secondGrid?.map((video) => (
            <div key={video.id}>
              <VideoItem video={video} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MediaGrid;
