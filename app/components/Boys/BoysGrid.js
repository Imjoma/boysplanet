"use client";
import BoysItem from "./BoysItem";
import { useState, useEffect } from "react";
import icon from "../../../public/assets/icons/search.svg";
import Image from "next/image";

const BoysGrid = ({ data, kor, glo }) => {
  const [userTyping, setUserTyping] = useState("");

  // SORTED DATA LIST
  // const sorted = () => {
  //   let sortedData = [];
  //   for (let i = 0; i < data.length; i++) {
  //     if (!sortedData.includes(kor[i])) {
  //       if (kor[i] === undefined) {
  //         sortedData.push(kor[i], undefined);
  //       } else {
  //         sortedData.push(kor[i], kor[i + 1]);
  //       }
  //     }
  //     if (!sortedData.includes(glo[i])) {
  //       if (glo[i] === undefined) {
  //         sortedData.push(glo[i], undefined);
  //       } else {
  //         sortedData.push(glo[i], glo[i + 1]);
  //       }
  //     }
  //   }
  //   // .filter((b) => b !== undefined)
  //   return sortedData;
  // };

  // CURRENT SEARCH LIST
  const searchData = data.filter((b) =>
    b.name.en.includes(userTyping.toUpperCase().trim())
  );

  const newData =
    userTyping === "" || userTyping.trim().length === 0 ? data : searchData;

  const handleChange = (e) => {
    e.preventDefault();
    setUserTyping(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen px-4 space-y-4 text-xs sm:space-y-8 sm:text-sm">
      {/* Searchbar */}
      <div className="flex flex-row items-center justify-end ">
        <input
          type="text"
          onChange={handleChange}
          value={userTyping}
          placeholder="Type the name"
          className="w-full px-4 rounded outline-none sm:w-1/2 h-9 sm:h-10 sm:rounded-md focus:ring-1 "
        />
      </div>
      <div className="grid grid-cols-4 gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-8">
        {newData.map((boy, idx) => (
          <BoysItem boy={boy} key={boy.id} />
        ))}
      </div>
    </div>
  );
};
export default BoysGrid;
