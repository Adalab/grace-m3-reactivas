import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/SquareFontawesomeIconsChilds.scss";

const SquareFontawesomeIconsChilds = props => {
  const classNameIcon = `${props.iconClassName} main_action_icon`;
  return (
    <div className="main_action">
      {" "}
      <i className={classNameIcon}></i>
      <p className="main_action_item">{props.name}</p>
    </div>
  );
};
SquareFontawesomeIconsChilds.propTypes = {
  iconClassName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default SquareFontawesomeIconsChilds;
