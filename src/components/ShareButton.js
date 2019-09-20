import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/ShareButton.scss";
import "../stylesheets/scss/core/Variables.scss";

function ShareButton(props) {
  return (
    <button type="submit" className="completed_content_button">
      {" "}
      <a href="" className="completed_content_button_twitter" target="_blank">
        <i className={props.icon}></i>
        {props.name}
      </a>
    </button>
  );
}

ShareButton.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string
};

export default ShareButton;
