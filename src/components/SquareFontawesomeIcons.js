import React from "react";
import SquareFontawesomeIconsChilds from "./SquareFontawesomeIconsChilds.js";
import "../stylesheets/scss/components/SquareFontawesomeIcons.scss";

const SquareFontawesomeIcons = props => {
  return (
    <div className="main_actions">
      <SquareFontawesomeIconsChilds iconClassName="far fa-object-ungroup" name="Diseña" />
      <SquareFontawesomeIconsChilds iconClassName="far fa-keyboard" name="Rellena" />
      <SquareFontawesomeIconsChilds iconClassName="fas fa-share-alt" name="Comparte" />
    </div>
  );
};

export default SquareFontawesomeIcons;
