import React from "react";

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

export default SquareFontawesomeIconsChilds;
