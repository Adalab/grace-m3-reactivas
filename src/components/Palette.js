import React from "react";
import "../stylesheets/scss/main.scss";

const Palette = props => {
  const personalizeColor1 = `design_palette item ${props.color1}`;
  const personalizeColor2 = `design_palette item ${props.color2}`;
  const personalizeColor3 = `design_palette item ${props.color3}`;

  return (
    <section class="design_palette-option">
      <input class="form_item js-select1" type="radio" value="0" name="btn" id="design1" checked />
      <label for="design1" class="radio_btn"></label>
      <div class={personalizeColor1}></div>
      <div class={personalizeColor2}></div>
      <div class={personalizeColor3}></div>
    </section>
  );
};

export default Palette;
