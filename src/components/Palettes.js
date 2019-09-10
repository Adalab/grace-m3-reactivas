import React from "react";
import "../stylesheets/scss/main.scss";

const Palettes = props => {
  return (
    <div class="js-collapsible-content">
      <div class="tittlePalettes">
        <div class="design_palette-description">Colores</div>
        <div class="palettes js-palettes">
          <section class="design_palette-option">
            <input class="form_item js-select1" type="radio" value="0" name="btn" id="design1" checked />
            <label for="design1" class="radio_btn"></label>
            <div class="design_palette item item_1"></div>
            <div class="design_palette  item item_2"></div>
            <div class="design_palette item item_3"></div>
          </section>
          <section class="design_palette-option">
            <input class="form_item js-select2" type="radio" value="1" name="btn" id="design2" />
            <label for="design2" class="radio_btn"></label>
            <div class="design_palette item item_4"></div>
            <div class="design_palette item item_5"></div>
            <div class="design_palette item item_6"></div>
          </section>
          <section class="design_palette-option">
            <input class="form_item js-select3" type="radio" value="2" name="btn" id="design3" />
            <label for="design3" class="radio_btn"></label>
            <div class="design_palette item item_7"></div>
            <div class="design_palette item item_8"></div>
            <div class="design_palette item item_9"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Palettes;
