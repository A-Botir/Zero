import Header from "./components/Header";
import Footer from "./components/Footer";
import { Components, Home, Pages } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="container relative ">
        <div className="h-[85px] w-full"></div>
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
