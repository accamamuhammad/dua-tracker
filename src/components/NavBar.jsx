import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const [changeBorder, setChangeBorer] = useState(false);
  const [toggleSettings, setToggleSettings] = useState(false);

  const handleChangePage = () => {
    setChangeBorer(!changeBorder);
  };

  const openSettings = () => {
    setToggleSettings(!toggleSettings);
  };

  return (
    <nav className="w-full h-14 relative px-3 border-b-[0.5px] gap-3.5 border-white200 flex flex-row justify-between">
      <div className="flex flex-row gap-3">
        <div onClick={handleChangePage}>
          <div
            onClick={() => props.handleCurrentPage(0)}
            className={`${
              changeBorder ? "border-b-0" : "border-b-2 border-b-newPurple"
            } ${"w-24 h-full cursor-pointer flex flex-row items-center justify-center gap-2.5"}`}
          >
            <p className="font-sgMedium text-sm">Daily</p>
            <span className="w-6 h-6 text-sm font-bold text-white200 flex items-center justify-center rounded-full bg-white300">
              0
            </span>
          </div>
        </div>
        <div onClick={handleChangePage}>
          <div
            onClick={() => props.handleCurrentPage(1)}
            className={`${
              changeBorder ? "border-b-2 border-b-newPurple" : "border-b-0 "
            } ${"w-24 h-full cursor-pointer flex flex-row items-center justify-center gap-2.5"}`}
          >
            <p className="font-sgMedium text-sm">Special</p>
            <span className="w-6 h-6 text-sm font-bold text-white200 flex items-center justify-center rounded-full bg-white300">
              3
            </span>
          </div>
        </div>
      </div>
      <div
        onClick={() => openSettings()}
        className="w-24 h-full cursor-pointer flex items-center justify-end pr-3"
      >
        <FontAwesomeIcon icon={faGear} />
      </div>
      <div
        className={`${
          toggleSettings ? "flex" : "hidden"
        } ${"absolute top-[50px] right-[20px] bg-white300 shadow-lg w-44 h-40 rounded-xl flex items-center justify-center"}`}
      >
        <p>settings</p>
      </div>
    </nav>
  );
};

export default NavBar;
