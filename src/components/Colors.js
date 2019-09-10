import React from "react";
import "../stylesheets/scss/main.scss";

const Colors = props => {
  return (
    <section class="design_palette-option">
      <input class="form_item js-select1" type="radio" value="0" name="btn" id="design1" checked />
      <label for="design1" class="radio_btn"></label>
      <div class="design_palette item item_1"></div>
      <div class="design_palette  item item_2"></div>
      <div class="design_palette item item_3"></div>
    </section>
  );
};

export default Colors;
