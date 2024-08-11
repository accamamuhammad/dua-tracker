import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";

const Footer = () => {
  const [toggleSettings, setToggleSettings] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);

  const openSettings = () => {
    setToggleSettings(!toggleSettings);
  };

  const ChangeTheme = () => {
    setToggleTheme(!toggleTheme);
    localStorage.setItem("theme", toggleTheme);
  };

  return (
    <div className="w-full p-2 h-12 flex items-center justify-between">
      <div
        onClick={openSettings}
        className="w-10 h-full cursor-pointer flex items-center justify-end pr-3"
      >
        <FontAwesomeIcon icon={faGear} />
      </div>
      <div
        onClick={ChangeTheme}
        className="w-10 h-full cursor-pointer flex items-center justify-end pr-3"
      >
        <FontAwesomeIcon icon={toggleTheme ? faSun : faMoon} />
      </div>

      <div
        className={`${
          toggleSettings ? "flex" : "hidden"
        } ${"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white300 shadow-lg w-56 h-52 rounded-xl flex items-center justify-center"}`}
      >
        <p>settings</p>
      </div>
    </div>
  );
};

export default Footer;
