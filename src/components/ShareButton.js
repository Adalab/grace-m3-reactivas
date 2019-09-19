import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/ShareButton.scss";
import "../stylesheets/scss/core/Variables.scss";

const ShareButton = props => {
  return (
    <div className="completed_content hidden">
      <h3 className="completed_content_title">{props.title}</h3>
      <a href="#" className="completed_content_url" target="_self" />
      <button type="submit" className="completed_content_button">
        {" "}
        <a href="" className="completed_content_button_twitter" target="_blank">
          <i className={props.icon}></i>
          {props.name}
        </a>
      </button>
    </div>
  );
};

ShareButton.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string
};

export default ShareButton;
