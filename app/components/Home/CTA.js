"use client";

import { useState, useEffect } from "react";

const CTA = () => {
  const [cta, setCta] = useState(true);

  return (
    <>
      {cta ? (
        <div className="p-4 ">
          <div className="flex bg-[#24145f]  rounded-xl flex-col items-end w-full  px-2 ">
            <div className="p-4 text-white " onClick={() => setCta(false)}>
              X
            </div>
            <div className="flex flex-col justify-center w-full px-4 pb-8 space-y-4 text-white align-center">
              <p className="text-center">become a star creator</p>
              <button className="px-6 py-3 bg-purple-400 rounded-full">
                Join
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CTA;
