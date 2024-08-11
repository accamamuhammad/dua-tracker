import { useState, useEffect } from "react";

const HadithData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toggleData, setToggleData] = useState(false);
  const [reference, setReference] = useState([]);

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

  const handleToggleData = () => {
    setToggleData(!toggleData);
  };

  const RandomNarrator = Math.floor(Math.random() * 11);

  useEffect(() => {
    const BaseUrl = narrators[RandomNarrator];

    const apiUrl = `${BaseUrl}${".json"}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.hadiths[Math.floor(Math.random() * data.hadiths.length)]);
        setReference(
          data.hadiths[Math.floor(Math.random() * data.hadiths.length)]
            .reference
        );
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [toggleData]);

  console.log(data);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <p className="text-sm font-sgRegular">{data.text}</p>
      <p>{RandomNarrator}</p>
      <p>{reference.book}</p>
      <p>{reference.hadith}</p>
      <button onClick={handleToggleData}>Generate</button>
    </>
  );
};

export default HadithData;
