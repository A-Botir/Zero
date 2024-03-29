import Header from "./components/Header";
import Footer from "./components/Footer";
import { Components, Home, Pages } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const maxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolledPercent = (winScroll / maxHeight) * 100;
    setScroll(scrolledPercent);
  };
  window.addEventListener("scroll", onScroll);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="relative ">
        <div className="fixed top-0 z-[12] h-1 w-full">
          <div
            style={{ width: `${scroll}%` }}
            className="scrollIndicator"
          ></div>
        </div>
        <div className="container">
          <div className="h-[90px] w-full "></div>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
