import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/Movies/movieSlice";
import { Moviecard } from "../MovieCard/Moviecard";
import "./MovieListening.scss";
export const MovieListening = () => {
    const theme = createTheme();
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <Moviecard key={index} data={movie} />;
      })
    ) : (
      <div className="movie-error">
        <h3>{movies.error}</h3>
      </div>
    );
  console.log("movies", movies);
  return (
    <div className="movie-wrapped">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <ThemeProvider theme={theme}>{renderMovies}</ThemeProvider>
        </div>
      </div>
    </div>
  );
};
