import React from "react";

const SkeletonForVideo = ({ isPerformance }) => {
  return (
    <div className="pl-4">
      <div className="flex flex-row space-x-4 overflow-hidden">
        {[...Array(4).keys()].map((i) => (
          <div
            key={i}
            className={`${
              isPerformance ? "sm:w-[660px] sm:h-64 w-64 h-36" : "w-64 h-36"
            }  animate-pulse aspect-video bg-[#271664] rounded-md`}
            style={{ animationDelay: `${i * 0.5}s`, animationDuration: "1s" }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonForVideo;
