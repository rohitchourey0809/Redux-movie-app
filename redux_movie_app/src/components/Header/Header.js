import React from "react";
import { Link } from "react-router-dom";
import profimg from "../Images/photostudio-8-designify.png";
import "./Header.scss";
export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">MovieApp</div>
      </Link>

      <div className="user-image">
        <img src={profimg} alt="user" />
      </div>
    </div>
  );
};
