import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { MovieDetail } from "./components/MovieDetails/MovieDetail";

import { PageNotFound } from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container"></div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:imdbId" element={<MovieDetail />} />

        <Route exact path = "*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
