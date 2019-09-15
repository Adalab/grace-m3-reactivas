import React from "react";
import "../stylesheets/scss/components/MainDescription.scss";

const MainDescription = props => {
  return (
    <div className="main_container">
      <img className="main_img" src={props.foto} alt={props.mainTitle} />
      <div className="main_description">
        <h1 className="main_title">{props.mainTitle}</h1>
        <p className="main_text">{props.mainText}</p>
      </div>
    </div>
  );
};

export default MainDescription;
