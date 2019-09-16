import React from "react";
import "../stylesheets/scss/components/PalettesContainer.scss";
import Palette from "./Palette";

const PalettesContainer = props => {
  return (
    <div className="js-collapsible-content">
      <div className="tittlePalettes">
        <div className="design_palette-description">Colores</div>
        <div className="palettes js-palettes">
          <Palette color1="item_1" color2="item_2" color3="item_3" id="design1" actionToPerform={props.updateCheckboxColor} value="1" htmlFor="design1" />
          <Palette color1="item_4" color2="item_5" color3="item_6" id="design2" actionToPerform={props.updateCheckboxColor} value="2" htmlFor="design2" />
          <Palette color1="item_7" color2="item_8" color3="item_9" id="design3" actionToPerform={props.updateCheckboxColor} value="3" htmlFor="design3" />
        </div>
      </div>
    </div>
  );
};

export default PalettesContainer;

// Falta introducir props en el título (Colores)
