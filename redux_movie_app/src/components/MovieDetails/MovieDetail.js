import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/Movies/movieSlice";

export const MovieDetail = () => {
  const data = useSelector(getAllMovies);
  console.log(data.Search, "carddata");
  return (
    <div>
      {" "}
      <div className="card-item">
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Search[0].Poster} alt={data.Search[0].Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h3>{data.Search[0].Title}</h3>
              <p>{data.Search[0].Year}</p>
            </div>
          </div>
          <div className="btn-btn-outline primary">
            <Button>Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
