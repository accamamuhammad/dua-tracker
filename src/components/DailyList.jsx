"use client";
import ArrowDown from "../assets/arrow-down.png";
import DailyListData from "../DailyListData";
import { useState } from "react";

const DailyList = () => {
  const [currentData, setCurrentData] = useState([]);
  const [toggleData, setToggleData] = useState(false);

  const handleToggleData = () => {
    setToggleData(!toggleData);
  };

  const showData = (DailyListData) => {
    setToggleData(!toggleData);
    setCurrentData([DailyListData[1], DailyListData[3]]);
  };

  return (
    <ul className="w-full flex flex-col items-center justify-center">
      {DailyListData.map((item, index) => {
        return (
          <div key={index} className="w-full flex flex-col">
            <li className="w-full px-4 py-5 border-white200 border-b-[0.5px] flex items-center justify-between">
              <p className="w-[160px] text-[0.95rem] font-sgRegular">
                {item[0]}
              </p>
              {item[2]}
              <div
                onClick={() => showData(item)}
                className="w-5 h-5 flex items-center justify-center"
              >
                <img
                  src={ArrowDown}
                  alt="arrow-down"
                  width={8}
                  className="cursor-pointer"
                />
              </div>
            </li>
          </div>
        );
      })}
      <div
        className={`${
          toggleData ? "" : "hidden"
        } ${"w-screen h-screen gap-5 inset-0 sm:px-0 px-4 absolute flex flex-col items-center justify-center bg-white300"}`}
      >
        <p className="cursor-pointer" onClick={handleToggleData}>
          X
        </p>
        <h1 className="text-2xl font-sgBold text-center">{currentData[0]}</h1>
        <p className="text-[.85rem] leading-7 font-sgRegular text-center sm:w-2/3 w-full">
          {currentData[1]}
        </p>
      </div>
    </ul>
  );
};

export default DailyList;
