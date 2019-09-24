import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/ResetButton.scss";

const ResetButton = props => {
  const { action, icon, name } = props;

  return (
    <button className="card_button-reset js-reset" onClick={action}>
      {" "}
      <i className={icon}></i> {name}
    </button>
  );
};

ResetButton.propTypes = {
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ResetButton;
