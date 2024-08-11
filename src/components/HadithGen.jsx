import HadithData from "../api/HadithData";
import { useState } from "react";

const HadithGen = () => {
  const [hadithData, setHadithData] = useState("");

  /*
  0 - narrator name
  1 - content
  2 - hadith number 
  3 - book
  4 - hadith
  **/

  return (
    <section className="w-full h-full py-6 gap-10 flex items-center justify-end flex-col">
      <div className="w-full px-4 h-60 gap-3 rounded-lg flex flex-col items-center justify-center">
        <h3 className="font-sgLight text-xs text-center">
          {hadithData[0]} (may Allah be pleased with him) reported:
        </h3>
        <p className="text-[.8rem]">{hadithData[1]}</p>
        <p className="font-sgLight text-xs text-left">
          In Book Reference: Introduction, Hadith {hadithData[4]}
        </p>
      </div>
      <HadithData handlePassData={(data) => setHadithData(data)} />
    </section>
  );
};

export default HadithGen;
