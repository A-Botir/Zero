import React from "react";

const App = () => {
  return (
    <div>
      <p></p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movieshow"
          element={<MovieShow searchMovies={searchMovies} />}
        />
        <Route path="/movieshow/:id" element={<MoviesOpenPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscription />} />
      </Routes>
    </div>
  );
};

export default App;
