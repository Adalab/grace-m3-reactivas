import React from 'react';
import '../stylesheets/scss/main.scss';

const Palette = props => {
  const personalizeColor1 = `design_palette item ${props.color1}`;
  const personalizeColor2 = `design_palette item ${props.color2}`;
  const personalizeColor3 = `design_palette item ${props.color3}`;

  return (
    <section className="design_palette-option">
      <input
        className="form_item js-select1"
        type="radio"
        value="0"
        name="btn"
        id="design1"
        defaultChecked
      />
      <label htmlFor="design1" className="radio_btn" />
      <div className={personalizeColor1} />
      <div className={personalizeColor2} />
      <div className={personalizeColor3} />
    </section>
  );
};

export default Palette;
