import { useState } from "react";

const NavBar = (props) => {
  const [changeBorder, setChangeBorer] = useState("daily");

  const handleChangeBorder = (e) => {
    const id = e.target.id;
    setChangeBorer(id);
  };

  return (
    <nav className="w-full h-14 relative px-3 border-b-[0.5px] gap-3.5 border-white200 flex flex-row justify-between">
      <div className="flex flex-row gap-3">
        <div
          onClick={() => props.handleCurrentPage(0)}
          className={`${
            changeBorder === "daily"
              ? "border-b-2 border-b-newPurple"
              : "border-b-0"
          } ${"w-20 h-full cursor-pointer flex flex-row items-center justify-center gap-2.5"}`}
        >
          <p
            id="daily"
            onClick={(e) => handleChangeBorder(e)}
            className="font-sgMedium text-sm w-full h-full flex items-center justify-center"
          >
            Daily
          </p>
        </div>
        <div
          onClick={() => props.handleCurrentPage(1)}
          className={`${
            changeBorder === "special"
              ? "border-b-2 border-b-newPurple"
              : "border-b-0"
          } ${"w-20 h-full cursor-pointer flex flex-row items-center justify-center gap-2.5"}`}
        >
          <p
            id="special"
            onClick={(e) => handleChangeBorder(e)}
            className="font-sgMedium text-sm w-full h-full flex items-center justify-center"
          >
            Special
          </p>
        </div>
        <div
          onClick={() => props.handleCurrentPage(1)}
          className={`${
            changeBorder === "Hadith"
              ? "border-b-2 border-b-newPurple"
              : "border-b-0"
          } ${"w-20 h-full cursor-pointer flex flex-row items-center justify-center gap-2.5"}`}
        >
          <p
            id="Hadith"
            onClick={(e) => handleChangeBorder(e)}
            className="font-sgMedium text-sm w-full h-full flex items-center justify-center"
          >
            Hadith
          </p>
        </div>
        <div
          onClick={() => props.handleCurrentPage(1)}
          className={`${
            changeBorder === "Quran"
              ? "border-b-2 border-b-newPurple"
              : "border-b-0"
          } ${"w-20 h-full cursor-pointer flex flex-row items-center justify-center gap-2.5"}`}
        >
          <p
            id="Quran"
            onClick={(e) => handleChangeBorder(e)}
            className="font-sgMedium text-sm w-full h-full flex items-center justify-center"
          >
            Quran
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
