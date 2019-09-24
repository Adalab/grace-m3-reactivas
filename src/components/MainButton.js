import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/scss/pages/Landing.scss";
import "../stylesheets/scss/components/Share.scss";

const MainButton = () => {
  return (
    <button className="main_button">
      <Link to="/editor" className="main_button_link">
        Comenzar
      </Link>
    </button>
  );
};

export default MainButton;
