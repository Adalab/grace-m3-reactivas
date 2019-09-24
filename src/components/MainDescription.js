import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/MainDescription.scss";

const MainDescription = props => {
  const { foto, mainTitle, mainText } = props;
  return (
    <div className="main_container">
      <img className="main_img" src={foto} alt={mainTitle} />
      <div className="main_description">
        <h1 className="main_title">{mainTitle}</h1>
        <p className="main_text">{mainText}</p>
      </div>
    </div>
  );
};

MainDescription.propTypes = {
  foto: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired
};

export default MainDescription;
