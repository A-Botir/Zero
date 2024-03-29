import Hero from "../components/Hero";
import Info from "../components/Info";
import Interface from "../components/Interface";
import Card_Container from "../components/Card_Container";
import Desiginer from "../components/Desiginer";
import Plane from "../components/Plane";
import Accardion from "../components/Accardion";
import Dashboard from "../components/Dashboard";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Hero />
        <Info />
        <Interface />
        <Card_Container />
      </div>
      <Desiginer />
      <div className="container">
        <Plane />
        <Accardion />
        <Dashboard />
      </div>
      <Banner />
    </div>
  );
};

export default Home;
