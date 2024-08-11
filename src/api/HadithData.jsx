import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { data } from "autoprefixer";

const HadithData = (props) => {
  const [Data, setData] = useState(null);
  const [allData, setAllData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const narrators = {
    1: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-abudawud",
    2: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari",
    3: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-dehlawi",
    4: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-ibnmajah",
    5: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-malik",
    6: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-muslim",
    7: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-nasai",
    8: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-nawawi",
    9: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-qudsi",
    10: "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-tirmidhi",
  };

  const handleGetData = () => {
    const RandomNarrator = Math.floor(Math.random() * 11);

    const BaseUrl = narrators[RandomNarrator];

    const apiUrl = `${BaseUrl}${".json"}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const randomNumber = Math.floor(Math.random() * data.hadiths.length);
        setData(data.hadiths[randomNumber]);
        setAllData([
          data.metadata.name,
          data.hadiths[randomNumber].text,
          data.hadiths[randomNumber].hadithnumber,
          data.hadiths[randomNumber].reference.book,
          data.hadiths[randomNumber].reference.hadith,
        ]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleGetData();
  });

  return (
    <>
      <div onClick={handleGetData}>
        <button
          onClick={() => props.handlePassData(allData)}
          className="px-3 py-1.5 text-sm bg-newPurple text-white font-sgLight rounded-lg"
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default HadithData;

HadithData.propTypes = {
  handlePassData: PropTypes.func.isRequired,
};
