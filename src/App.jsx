import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

