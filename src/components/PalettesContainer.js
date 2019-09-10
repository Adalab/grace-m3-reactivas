import React from "react";
import "../stylesheets/scss/main.scss";
import Palette from "./Palette";

const PalettesContainer = props => {
  return (
    <div class="js-collapsible-content">
      <div class="tittlePalettes">
        <div class="design_palette-description">Colores</div>
        <div class="palettes js-palettes">
          <Palette color1="item_1" color2="item_2" color3="item_3" />
          <Palette color1="item_4" color2="item_5" color3="item_6" />
          <Palette color1="item_7" color2="item_8" color3="item_9" />
        </div>
      </div>
    </div>
  );
};

export default PalettesContainer;
