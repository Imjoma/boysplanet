"use client";

import { useState } from "react";
import Image from "next/image";
import mnetLogoImage from "../../../public/assets/icons/mnetplus-logo.png";
import boysplanetCoverPhoto from "../../../public/assets/boysplanetCoverPhoto.jpg";
import myChatHead from "../../../public/assets/jomaipio.jpg";

const MnetChatbox = () => {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  return (
    <>
      {modal && (
        <div className="fixed flex justify-center items-center z-[999] top-0 left-0 w-screen h-screen bg-opacity-60 bg-black">
          <div className=" w-56 flex flex-col items-center space-y-8 p-8 text-white rounded-md bg-[#120A30]">
            <Image
              className="rounded-full"
              src={myChatHead}
              width={100}
              height={100}
              alt={`Joma Ipio's chathead`}
            />
            <ul className="flex flex-col w-full">
              <li className="w-full text-center  border-y border-[#535068]">
                {" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://jomaipio.vercel.app/"
                >
                  Website
                </a>
              </li>
              <li className="w-full text-center border-b border-[#535068]">
                {" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/jomaipio/"
                >
                  Instagram
                </a>
              </li>
            </ul>
            <p
              className="text-red-500 cursor-pointer"
              onClick={() => setModal(false)}
            >
              Close
            </p>
          </div>
        </div>
      )}

      <section className="w-full min-h-full px-4 space-y-8 text-white rounded-xl">
        {/* Mnet */}
        <div className="flex flex-row items-end justify-start w-full space-x-2">
          {/* Chat Head */}
          <div className="grid bg-gray-100 rounded-full shrink-0 w-11 h-11 place-content-center">
            <Image
              src={mnetLogoImage}
              width={30}
              height={30}
              alt="Mnet Chat Head"
              className=""
            />
          </div>
          {/* Message */}
          <div className="flex flex-col pr-20 space-y-1 font-sans text-sm sm:text-base">
            <p className=" rounded-2xl max-w-fit  bg-[#322D59] p-3">
              Boys Planet (보이즈 플래닛) is a survival show created by Mnet.
            </p>
            <p className=" rounded-2xl  max-w-fit bg-[#322D59] p-3">
              {" "}
              A male version of Girls Planet 999.
            </p>
          </div>
        </div>
        {/* Star Creator */}
        <div className="flex flex-row items-end justify-end w-full space-x-2">
          {/* Message */}
          <div className="flex flex-col pl-20 space-y-1 font-sans text-sm sm:text-base">
            <p className=" rounded-2xl  max-w-fit bg-[#9155E9] p-3">
              What about me???
            </p>
          </div>
          {/* Chat Head */}
          <div className="grid bg-yellow-500 rounded-full shrink-0 w-11 h-11 place-content-center">
            <span className="text-lg">SC</span>
          </div>
        </div>
        {/* Mnet */}
        <div className="flex flex-row items-end justify-start w-full space-x-2">
          {/* Chat Head */}
          <div className="grid bg-gray-100 rounded-full shrink-0 w-11 h-11 place-content-center">
            <Image
              src={mnetLogoImage}
              width={30}
              height={30}
              alt="Mnet Chat Head"
              className=""
            />
          </div>
          {/* Message */}
          <div className="flex flex-col pr-20 space-y-1 font-sans text-sm sm:text-base">
            <p className=" rounded-2xl  max-w-fit bg-[#322D59] p-3">
              You are a STAR CREATOR. Please vote for your most shining boy.
            </p>
          </div>
        </div>
        {/* Star Creator */}
        <div className="flex flex-row items-end justify-end w-full space-x-2">
          {/* Message */}
          <div className="flex flex-col pl-20 space-y-1 font-sans text-sm sm:text-base">
            <p className=" rounded-2xl  max-w-fit bg-[#9155E9] p-3">
              hmmmkay? what about this web app?
            </p>
          </div>
          {/* Chat Head */}
          <div className="grid bg-yellow-500 rounded-full shrink-0 w-11 h-11 place-content-center">
            <span className="text-lg">SC</span>
          </div>
        </div>
        {/* Mnet */}
        <div className="flex flex-row items-end justify-start w-full space-x-2">
          {/* Chat Head */}
          <div className="grid bg-gray-100 rounded-full shrink-0 w-11 h-11 place-content-center">
            <Image
              src={mnetLogoImage}
              width={30}
              height={30}
              alt="Mnet Chat Head"
              className=""
            />
          </div>
          {/* Message */}
          <div className="flex flex-col pr-20 space-y-1 font-sans text-sm sm:text-base">
            <p className=" rounded-2xl  max-w-fit bg-[#322D59] p-3">
              it's... there's just a random dude made this, don't mind him.
            </p>
            <p className=" rounded-2xl max-w-fit bg-[#322D59] p-3">
              Well anyway, here's the official website of Boysplanet
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://service.mnetplus.world/boysplanet/en/home"
              className=" rounded-2xl max-w-fit bg-[#322D59] py-3"
            >
              <p className="px-3 text-sm text-blue-500 underline ">
                {"https://service.mnetplus.world"}
                <br />
                {"/boysplanet/en/home"}
              </p>

              <Image
                alt="boysplanet cover photo"
                width={220}
                heigh={600}
                src={boysplanetCoverPhoto}
                className="py-3"
              />
              <span className="px-3 opacity-60">Boysplanet.net</span>
            </a>
          </div>
        </div>
        {/* Me */}
        <div className="flex flex-row items-end justify-start w-full space-x-2">
          {/* Chat Head */}
          <div
            className="grid overflow-hidden bg-gray-100 rounded-full cursor-pointer shrink-0 w-11 h-11 place-content-center"
            onClick={() => handleOpenModal()}
          >
            <Image
              src={myChatHead}
              width={60}
              height={60}
              alt="Mnet Chat Head"
              className=""
            />
          </div>
          {/* Message */}
          <div className="flex flex-col pr-20 space-y-1 font-sans text-sm sm:text-base">
            <p className=" rounded-2xl  max-w-fit bg-[#322D59] p-3">
              yeah... This is my recent personal project that I develop with the
              latest version of Nextjs. Nextjs 13.
            </p>
            <p className=" rounded-2xl  max-w-fit bg-[#322D59] p-3">
              I used the YouTube api to fetch the playlist from Mnet's official
              channel. And in order for the users *ehem Star Creators to watch
              the embeded video, I ended up installing this package called
              react-player.
            </p>
            <p className=" rounded-2xl  max-w-fit bg-[#322D59] p-3">
              so what are your thoughts?
            </p>
          </div>
        </div>
        {/* Me */}
        <div className="flex flex-row items-end justify-start w-full space-x-2">
          {/* Chat Head */}
          <div
            className="grid overflow-hidden bg-gray-100 rounded-full cursor-pointer shrink-0 w-11 h-11 place-content-center"
            onClick={() => handleOpenModal()}
          >
            <Image
              src={myChatHead}
              width={60}
              height={60}
              alt="Mnet Chat Head"
              className=""
            />
          </div>
          {/* Message */}
          <div className="flex flex-col pr-20 space-y-1 font-sans text-sm sm:text-base">
            <p className=" rounded-2xl  max-w-fit bg-[#322D59] p-3">...guys?</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MnetChatbox;

{
  /* <p className=" rounded-2xl max-w-fit bg-[#322D59] p-3">
This is the official{" "}
<a
  target="_blank"
  rel="noreferrer"
  href="https://service.mnetplus.world/boysplanet/en/home"
  className="text-blue-500 underline"
>
  {"Boysplanet.net"}
</a>{" "}
website.
</p> */
}
