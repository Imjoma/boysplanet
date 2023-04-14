import React from "react";

const SkeletonForMediaFilter = ({ options }) => {
  return (
    <div className="flex flex-row pl-4 space-x-2">
      {options.map((i, idx) => (
        <div
          className={`px-4 py-2 animate-pulse bg-[#271664] pointer-events-none select-none rounded-md`}
          style={{ animationDelay: `${idx * 0.1}s`, animationDuration: "1s" }}
          key={i.title}
        >
          <p className="font-sans text-sm capitalize opacity-0 select-none sm:text-base whitespace-nowrap">
            {i.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkeletonForMediaFilter;
