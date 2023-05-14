import React from "react";

const Announcement = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="px-4 text-white">Announcement</div>
      <div className="px-4 font-sans ">
        <a
          href="https://www.mnetplus.world/announcement?communityId=RSlwTMUICo9fVR7EkSWnG&announcementId=LRnlHF7Z6H_mCHZ4O9UsB"
          target={"_blank"}
          className=" text-white  bg-[#322D59] p-4 rounded-xl flex flex-col space-y-6"
        >
          <p className="leading-6 ">
            Boysplanet Guidelines on in-App vote participation
          </p>

          <p className="right-0 text-sm text-end opacity-60">2023.02.02 KST</p>
        </a>
      </div>
    </div>
  );
};

export default Announcement;
