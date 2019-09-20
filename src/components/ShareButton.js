import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/ShareButton.scss";
import "../stylesheets/scss/core/Variables.scss";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";

function ShareButton(props) {
  return (
    <div>
      <Loader
        className="loader"
        type="RevolvingDot"
        color="#a2deaf"
        height={100}
        width={100}
        timeout={30000} //3 secs
      />
      <button type="submit" className="completed_content_button">
        {" "}
        <a href="" className="completed_content_button_twitter" target="_blank">
          <i className={props.icon}></i>
          {props.name}
        </a>
      </button>
    </div>
  );
}

ShareButton.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string
};

export default ShareButton;
