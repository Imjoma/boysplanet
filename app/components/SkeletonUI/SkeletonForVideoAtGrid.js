import React from "react";

const SkeletonForVideoAtGrid = () => {
  return (
    <div className="flex flex-col space-y-2 ">
      <div
        className="bg-[#271664] w-full animate-pulse aspect-video rounded-md"
        style={{ animationDelay: `0.2s`, animationDuration: "1s" }}
      ></div>
      <div
        className="bg-[#271664] w-5/6 h-5 animate-pulse rounded"
        style={{ animationDelay: `0.4s`, animationDuration: "1s" }}
      ></div>
      <div
        className="bg-[#271664] w-4/6 h-5 animate-pulse rounded"
        style={{ animationDelay: `0.6s`, animationDuration: "1s" }}
      ></div>
    </div>
  );
};

export default SkeletonForVideoAtGrid;
