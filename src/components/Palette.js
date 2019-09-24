import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/PalettesContainer.scss";
import "../stylesheets/scss/components/Palette.scss";

class Palette extends React.Component {
  render() {
    const personalizeColor1 = `design_palette item ${this.props.color1}`;
    const personalizeColor2 = `design_palette item ${this.props.color2}`;
    const personalizeColor3 = `design_palette item ${this.props.color3}`;
    return (
      <section className="design_palette-option">
        <input className="form_item js-select1" type="radio" value={this.props.value} name="palette" id={this.props.id} onClick={this.props.actionToPerform} />
        <label htmlFor={this.props.htmlFor} className="radio_btn"></label>
        <div className={personalizeColor1}></div>
        <div className={personalizeColor2}></div>
        <div className={personalizeColor3}></div>
      </section>
    );
  }
}

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
