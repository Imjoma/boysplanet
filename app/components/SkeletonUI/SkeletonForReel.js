import React from "react";

const SkeletonForReel = () => {
  return (
    <ul className="flex flex-row px-4 pt-1 pb-1 space-x-4 overflow-hidden">
      {[...Array(9).keys()].map((i) => (
        <li
          key={i}
          className=" p-9 animate-pulse  rounded-full bg-[#271664]"
          style={{ animationDelay: `${i * 0.05}s`, animationDuration: "1s" }}
        ></li>
      ))}
    </ul>
  );
};

export default SkeletonForReel;
