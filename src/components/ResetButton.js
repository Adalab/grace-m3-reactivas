import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/ResetButton.scss";

function ResetButton(props) {
  return (
    <button className="card_button-reset js-reset" onClick={props.action}>
      {" "}
      <i className={props.icon}></i> {props.name}
    </button>
  );
}

ResetButton.propTypes = {
  action: PropTypes.func,
  icon: PropTypes.string,
  name: PropTypes.string
};

export default ResetButton;
