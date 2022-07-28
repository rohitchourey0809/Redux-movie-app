import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Movicard.scss";
// import Button from "@material-ui/core/Button";
export const Moviecard = (props) => {
  const { data } = props;
  console.log("props", props);
  console.log("data", data.Search);

  return (
    <>
      <Link to={`/movie/${data.id}`}>
        <div className="card-item">
          <div className="card-inner">
            <div className="card-top">
              <img src={data.Poster} alt={data.Title} />
            </div>
            <div className="card-bottom">
              <div className="card-info">
                <h3>{data.Title}</h3>
                <p>{data.Year}</p>
              </div>
            </div>
            <div className="btn-btn-outline primary">
              <Button>Add To Cart</Button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
