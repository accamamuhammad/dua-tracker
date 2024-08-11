import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [toggleSettings, setToggleSettings] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);

  const openSettings = () => {
    setToggleSettings(!toggleSettings);
  };

  const ChangeTheme = () => {
    setToggleTheme(!toggleTheme);
  };

  return (
    <div className="w-full p-2 h-12 flex items-center justify-between">
      <div
        onClick={() => openSettings()}
        className="w-10 h-full cursor-pointer flex items-center justify-end pr-3"
      >
        <FontAwesomeIcon icon={faGear} />
      </div>
      <div
        onClick={() => ChangeTheme()}
        className="w-10 h-full cursor-pointer flex items-center justify-end pr-3"
      >
        <FontAwesomeIcon icon={faMoon} />
      </div>
      {/*
      <div
        className={`${
          toggleSettings ? "flex" : "hidden"
        } ${"top-[50px] right-[20px] bg-white300 shadow-lg w-44 h-40 rounded-xl flex items-center justify-center"}`}
      >
        <p>settings</p>
      </div>
      */}
    </div>
  );
};

export default Footer;
