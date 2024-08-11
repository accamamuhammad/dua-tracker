import "./App.css";
import NavBar from "./components/NavBar";
import DailyList from "./components/DailyList";
import SpecialList from "./components/SpecialList";
import HadithGen from "./components/HadithGen";
import QuranGen from "./components/QuranGen";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [currentList, setCurrentList] = useState(0);
  const Pages = [
    <DailyList key={0} />,
    <SpecialList key={1} />,
    <HadithGen key={2} />,
    <QuranGen key={3} />,
  ];

  return (
    <>
      <main className="w-screen h-[100dvh] flex items-center justify-center dark:bg-newPurple bg-white300">
        <section className="w-screen sm:w-[385px] mx-2 sm:mx-0 h-[520px] py-1 bg-white rounded-xl shadow-lg">
          <NavBar handleCurrentPage={(page) => setCurrentList(page)} />
          <div className="h-[410px] overflow-y-scroll">
            {Pages[currentList]}
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
