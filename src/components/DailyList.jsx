"use client";
import MorningLabel from "./common/MorningLabel";
import AfterPrayer from "./common/AfterPrayer";
import EveningLabel from "./common/EveningLabel";
import DailyLabel from "./common/DailyLabel";
import Sleep from "./common/Sleep";
import ArrowDown from "../assets/arrow-down.png";
import { useState } from "react";

const DailyList = () => {
  const [currentData, setCurrentData] = useState([]);
  const [toggleData, setToggleData] = useState(false);

  const handleToggleData = () => {
    setToggleData(!toggleData);
  };

  const showData = (item) => {
    setToggleData(!toggleData);
    setCurrentData([item[1], item[3]]);
  };

  const items = [
    [
      "Ayatul kursiyu",
      "Ayat al-Kursi: The Greatest Protection",
      <DailyLabel key={1} />,
      "Aʿūdhu bi-llāhi mina-sh-Shayṭāni-r-rajīm. Allāhu lā ilāha illā Huwa-l-Ḥayyu-l-Qayyūm, lā ta’khudhuhū sinatuw-wa lā nawm, lahū mā fi-s-samāwāti wa mā fi-l-arḍ, man dhā’lladhī yashfaʿu ʿindahū illā bi-idhnih, yaʿlamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bi-shay’im-min ʿilmihī illā bi-mā shā’, wasiʿa kursiyyuhu-s-samāwāti wa-l-arḍ, wa lā ya’ūduhū ḥifẓuhumā wa Huwa-l-ʿAlliyu-l-ʿAẓīm.",
    ],
    [
      "Al-mu’awwidhatayn",
      "Suratul Nas & Suratul iklas",
      <DailyLabel key={2} />,
      "Bismillah hir rahman nir raheem, Qul a’oozu birabbin naas, Malikin naas, Malikin naas, Min sharril waswaasil khannaas, Minal jinnati wannaas; Bismillah hir rahman nir raheem, Qul huwal laahu ahad, Allah hus-samad, Lam yalid wa lam yoolad, Wa lam yakul-lahoo kufuwan ahad.",
    ],
    [
      "Quls",
      "Quls: Be Sufficed in All Your Matters",
      <DailyLabel key={3} />,
      "Bismi-llāhi-r-Raḥmāni-r-Raḥīm. Qul Huwa-llāhu Aḥad. Allāhu-ṣ-Ṣamad. Lam yalid wa lam yūlad. Wa lam yakul-lahū kufuwan aḥad. Bismi-llāhi-r-Raḥmāni-r-Raḥīm. Qul aʿūdhu bi-Rabbi-l-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min sharri-n-naffāthāti fi-l-ʿuqad. Wa min sharri ḥāsidin idhā ḥasad. Bismi-llāhi-r-Raḥmāni-r-Raḥīm. Qul aʿūdhu bi-Rabbi-n-nās. Maliki-n-nās. Ilāh-hin-nās. Min sharri-l-waswāsi-l-khannās. Al-ladhī yuwaswisu fī ṣudūri-n-nās. Mina-l-jinnati wa-n-nās.",
    ],
    [
      "Sayyid al-istighfar",
      "Sayyid al-Istighfar: The Best Way of Seeking Forgiveness",
      <DailyLabel key={4} />,
      "Allāhumma Anta Rabbī, lā ilāha illā Ant, khalaqtanī wa ana ʿabduk, wa ana ʿalā ʿahdika wa waʿdika mā’staṭaʿt, aʿūdhu bika min sharri mā ṣanaʿt, abū’u laka bi niʿmatika ʿalayya wa abū’u laka bi-dhambī fa-ghfir lī fa-innahū lā yaghfiru-dh-dhunūba illā Ant.",
    ],
    [
      "Protect Yourself From the Four Evils",
      "Protect Yourself From Anxiety, Laziness, Debt etc",
      <DailyLabel key={5} />,
      "Allāhumma innī aʿūdhu bika min-l-hammi wa-l-ḥazan, wa aʿūdhu bika min-l-ʿajzi wa-l-kasal, wa aʿūdhu bika min-l-jubni wa-l-bukhl, wa aʿūdhu bika min ghalabati-d-dayni wa qahri-r-rijāl.",
    ],
    [
      "Well-being",
      "Well-being in this World and the Hereafter",
      <DailyLabel key={6} />,
      "Allāhumma innī as’aluka-l-ʿāfiyata fi-d-dunyā wa-l-ākhirah. Allāhumma innī as’aluka-l-ʿafwa wa-l-ʿāfiyata fī dīnī wa dunyāya wa ahlī wa mālī, Allāhumma-stur ʿawrātī wa āmin rawʿātī. Allāhumma-ḥfaẓnī mim bayni yadayya wa min khalfī, wa ʿay-n yamīnī wa ʿan shimālī wa min fawqī, wa aʿūdhu bi-ʿaẓamatika an ughtāla min taḥtī.",
    ],
    [
      "Repent",
      "Get Your Sins Forgiven (x100)",
      <DailyLabel key={7} />,
      "Subḥāna-llāhi wa bi ḥamdih.",
    ],
    [
      "Renew your Tawhid",
      "Start Your Day by Renewing Tawhid",
      <MorningLabel key={8} />,
      "Aṣbaḥnā ʿalā fiṭrati-l-islām. wa ʿalā kalimati-l-ikhlāṣ, wa ʿalā dīni Nabiyyinā Muḥammadin ṣallallāhu ʿalayhi wa sallam, wa ʿalā millati abīnā Ibrāhīma ḥanīfam-muslima, wa mā kāna min-l-mushrikīn.",
    ],
    [
      "Renew your Tawhid",
      "Start Your Evening by Renewing Tawhid",
      <EveningLabel key={9} />,
      "Amsaynā ʿalā fiṭrati-l-islām, wa ʿalā kalimati-l-ikhlāṣ, wa ʿalā dīni Nabiyyinā Muḥammadin ṣallallāhu ʿalayhi wa sallam, wa ʿalā millati abīnā Ibrāhīma ḥanīfam-muslima, wa mā kāna mina-l-mushrikīn.",
    ],
    [
      "After Salah #1",
      "Seek forgiveness for mistakes during prayer",
      <AfterPrayer key={10} />,
      "Astaghfiru-llāh (x3), Allāhumma Anta-s-Salām, wa minka-s-salām, tabārakta yā Dha-l-Jalāli wa-l-Ikrām.",
    ],
    [
      "After Salah #2",
      "Warrād (the clerk of Mughīrah b. Shuʿba)",
      <AfterPrayer key={11} />,
      "Lā ilāha illā-llāhu waḥdahū lā sharīka lah, lahu-l-mulku, wa lahu-l-ḥamd, wa Huwa ʿalā kulli shay’in Qadīr, Allāhumma lā māniʿa li-mā aʿaṭayt, wa lā muʿṭiya li-mā manʿat, wa lā yanfaʿu dha-l-jaddi minka-l-jadd.",
    ],
    [
      "After Salah #3",
      "Testement to Allah",
      <AfterPrayer key={12} />,
      "Lā ilāha illā-llāhu waḥdahū lā sharīka lah, lahu-l-mulku, wa lahu-l-ḥamd, wa Huwa ʿalā kulli shay’in Qadīr, lā ḥawla wa lā quwwata illā bi-llāh, lā ilāha illā-llāh, wa lā naʿbudu illā iyyāh, lahu-n-nʿimatu wa lahu-l-faḍl, wa lahu-th-thanā’u-l-ḥasan, lā ilāha illā-llāhu mukhliṣīna lahu-d-dīn, wa law kariha-l-kāfirūn.",
    ],
    [
      "After Salah #4",
      "Rememberance of Allah",
      <AfterPrayer key={13} />,
      "Allāhumma aʿinnī ʿalā dhikrika wa shukrika wa ḥusni ʿibādatik.",
    ],
    [
      "After Salah #5",
      "Seek protection from Allah",
      <AfterPrayer key={14} />,
      "Allāhumma innī aʿūdhu bika mina-l-bukhl, wa aʿūdhu bika mina-l-jubn, wa aʿūdhu bika min an uradda ilā ardhali-l-ʿumur, wa aʿūdhu bika min fitnati-d-dunyā, wa aʿūdhu bika min ʿadhābi-l-qabr.",
    ],
    [
      "After Salah #6",
      "Praise Allah",
      <AfterPrayer key={15} />,
      "Subḥāna-llāh (x33), Alḥamduli-llāh (x33), Allāhu akbar (x33)",
    ],
    [
      "After Salah #7",
      "Praise Allah",
      <AfterPrayer key={16} />,
      "Lā ilāha illā Allāhu waḥdahū lā sharīka lah, lahu-l-mulku wa lahu-l-ḥamd, wa Huwa ʿalā kulli shay’in Qadīr.",
    ],
    [
      "Ayatul kursiyu",
      "Ayat al-Kursi: The Greatest Protection",
      <AfterPrayer key={17} />,
      "Aʿūdhu bi-llāhi mina-sh-Shayṭāni-r-rajīm. Allāhu lā ilāha illā Huwa-l-Ḥayyu-l-Qayyūm, lā ta’khudhuhū sinatuw-wa lā nawm, lahū mā fi-s-samāwāti wa mā fi-l-arḍ, man dhā’lladhī yashfaʿu ʿindahū illā bi-idhnih, yaʿlamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bi-shay’im-min ʿilmihī illā bi-mā shā’, wasiʿa kursiyyuhu-s-samāwāti wa-l-arḍ, wa lā ya’ūduhū ḥifẓuhumā wa Huwa-l-ʿAlliyu-l-ʿAẓīm.",
    ],
    [
      "Al-mu'awwidhatayn",
      "Suratul Nas, Falaq & Iklas",
      <AfterPrayer key={18} />,
      "Bismi-llāhi-r-Raḥmāni-r-Raḥīm. Qul Huwa-llāhu Aḥad. Allāhu-ṣ-Ṣamad. Lam yalid wa lam yūlad. Wa lam yakul-lahū kufuwan aḥad. Bismi-llāhi-r-Raḥmāni-r-Raḥīm. Qul aʿūdhu bi Rabbi-l-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min sharri-n-naffāthāti fi-l-ʿuqad. Wa min sharri ḥāsidin idhā ḥasad. Bismi-llāhi-r-Raḥmāni-r-Raḥīm. Qul aʿūdhu bi rabbi-n-nās. Maliki-n-nās. Ilāh-hin-nās. Min sharri-l-waswāsi-l-khannās. Al-ladhī yuwaswisu fī ṣudūri-n-nās. Mina-l-jinnati wa-n-nās.",
    ],
    [
      "After Fajr & Maghrib",
      "Testify your fate to Allah",
      <AfterPrayer key={19} />,
      "Lā ilāha illā-llāhu waḥdahū lā sharīka lah, lahu-l-mulku wa lahu-l-ḥamdu yuḥyī wa yumīt, wa Huwa ʿalā kulli shay’in Qadīr, Allāhumma ajirnī mina-n-nār.",
    ],
    [
      "Ayatul kursiyu",
      "Ayat al-Kursi: The Greatest Protection",
      <Sleep key={20} />,
      "Aʿūdhu bi-llāhi mina-sh-Shayṭāni-r-rajīm. Allāhu lā ilāha illā Huwa-l-Ḥayyu-l-Qayyūm, lā ta’khudhuhū sinatuw-wa lā nawm, lahū mā fi-s-samāwāti wa mā fi-l-arḍ, man dhā’lladhī yashfaʿu ʿindahū illā bi-idhnih, yaʿlamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bi-shay’im-min ʿilmihī illā bi-mā shā’, wasiʿa kursiyyuhu-s-samāwāti wa-l-arḍ, wa lā ya’ūduhū ḥifẓuhumā wa Huwa-l-ʿAlliyu-l-ʿAẓīm.",
    ],
    [
      "protection before sleep",
      "protection before sleep",
      <Sleep key={20} />,
      "Bismika Rabbi wada'tu janbi, wa bika arfa'uhu, in amsakta nafsi farhamha, wa in arsaltaha fahfazha bima tahfazu bihi 'ibadakas-salihin.",
    ],
    [
      "Last two Ayah of Surah-al Baqrah",
      "Last two Ayah of Surah-al Baqrah: Will suffice you",
      <Sleep key={21} />,
      "Āmana-r-rasūlu bimā unzila ilayhi mi-r-rabbihī wa-l-mu’minūn, kullun āmana bi-l-llāhi wa malā’ikatihī wa kutubihī wa rusulih, lā nufarriqu bayna aḥadim-mi-r-rusulih, wa qālū samiʿnā wa aṭaʿnā ghufrānaka Rabbanā wa ilayka-l-maṣīr. Lā yukallifu-l-llāhu nafsan illā wusʿahā, lahā mā kasabat wa ʿalayhā ma-ktasbat, Rabbanā lā tuākhidhnā i-n-nasīnā aw akhṭa’nā, Rabbanā walā taḥmil ʿalaynā iṣran kamā ḥamaltahū ʿala-l-ladhīna min qablinā, Rabbanā wa lā tuḥammilnā mā lā ṭāqata lanā bih, waʿfu ʿannā wa-ghfir lanā war-ḥamnā, Anta Mawlānā fan-ṣurnā ʿala-l-qawmi-l-kāfirīn.",
    ],
    [
      "Surah-al Kafirun",
      "Surah-al Kafirun: Negation of Shirk",
      <Sleep key={22} />,
      "Āmana-r-rasūlu bimā unzila ilayhi mi-r-rabbihī wa-l-mu’minūn, kullun āmana bi-l-llāhi wa malā’ikatihī wa kutubihī wa rusulih, lā nufarriqu bayna aḥadim-mi-r-rusulih, wa qālū samiʿnā wa aṭaʿnā ghufrānaka Rabbanā wa ilayka-l-maṣīr. Lā yukallifu-l-llāhu nafsan illā wusʿahā, lahā mā kasabat wa ʿalayhā ma-ktasbat, Rabbanā lā tuākhidhnā i-n-nasīnā aw akhṭa’nā, Rabbanā walā taḥmil ʿalaynā iṣran kamā ḥamaltahū ʿala-l-ladhīna min qablinā, Rabbanā wa lā tuḥammilnā mā lā ṭāqata lanā bih, waʿfu ʿannā wa-ghfir lanā war-ḥamnā, Anta Mawlānā fan-ṣurnā ʿala-l-qawmi-l-kāfirīn.",
    ],
  ];

  return (
    <ul className="w-full flex flex-col items-center justify-center">
      {items.map((item, index) => {
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
        <h1 className="text-2xl font-sgBold">{currentData[0]}</h1>
        <p className="text-[.85rem] leading-7 font-sgRegular text-center sm:w-2/3 w-full">
          {currentData[1]}
        </p>
      </div>
    </ul>
  );
};

export default DailyList;
