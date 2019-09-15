import React from 'react';

import '../stylesheets/scss/components/PalettesContainer.scss';
import '../stylesheets/scss/components/Palette.scss';

const Palette = props => {
  const personalizeColor1 = `design_palette item ${props.color1}`;
  const personalizeColor2 = `design_palette item ${props.color2}`;
  const personalizeColor3 = `design_palette item ${props.color3}`;

  return (
    <section className="design_palette-option">
      <input className="form_item js-select1" type="radio" value="0" name="btn" id="design1" checked />
      <label for="design1" class="radio_btn"></label>
      <div className={personalizeColor1}></div>
      <div className={personalizeColor2}></div>
      <div className={personalizeColor3}></div>
    </section>
  );
};

export default Palette;
