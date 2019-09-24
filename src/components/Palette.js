import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/PalettesContainer.scss";
import "../stylesheets/scss/components/Palette.scss";

const Palette = props => {
  const { color1, color2, color3, value, id, actionToPerform, htmlFor } = props;
  const personalizeColor1 = `design_palette item ${color1}`;
  const personalizeColor2 = `design_palette item ${color2}`;
  const personalizeColor3 = `design_palette item ${color3}`;
  return (
    <section className="design_palette-option">
      <input className="form_item js-select1" type="radio" value={value} name="palette" id={id} onClick={actionToPerform} />
      <label htmlFor={htmlFor} className="radio_btn"></label>
      <div className={personalizeColor1}></div>
      <div className={personalizeColor2}></div>
      <div className={personalizeColor3}></div>
    </section>
  );
};

Palette.propTypes = {
  updateCheckboxColor: PropTypes.func.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color3: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired.isRequired,
  actionToPerform: PropTypes.func.isRequired,
  htmlFor: PropTypes.string.isRequired
};

export default Palette;
