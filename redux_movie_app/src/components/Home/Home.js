/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieApi } from "../../commons/apis/Moviapi";
import { APIKEY } from "../../commons/apis/MovieApiKey";
import { addMovies } from "../../features/Movies/movieSlice";
import { MovieListening } from "../MovieListening/MovieListening";

export const Home = () => {
  useEffect(() => {
    // fetchMovies();

    fetchMovies();
  }, []);
  const movieText = "Harry";
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await movieApi
      .get(`?apikey=${[APIKEY]}&s=${movieText}&type=movie`)
      .catch((e) => {
        console.log(e);
      });
    dispatch(addMovies(response.data));
    console.log("The respone from API", response.data);
  };

  return (
    <div>
      <div className="banner-img">
        <MovieListening />
      </div>
    </div>
  );
};
