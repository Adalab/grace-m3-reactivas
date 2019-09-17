import React from "react";

import "../stylesheets/scss/components/PalettesContainer.scss";
import "../stylesheets/scss/components/Palette.scss";

class Palette extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const personalizeColor1 = `design_palette item ${this.props.color1}`;
    const personalizeColor2 = `design_palette item ${this.props.color2}`;
    const personalizeColor3 = `design_palette item ${this.props.color3}`;
    return (
      <section className="design_palette-option">
        <input className="form_item js-select1" type="radio" value={this.props.value} name="palette" id={this.props.id} onClick={this.props.actionToPerform} />
        <label htmlFor={this.props.htmlFor} class="radio_btn"></label>
        <div className={personalizeColor1}></div>
        <div className={personalizeColor2}></div>
        <div className={personalizeColor3}></div>
      </section>
    );
  }
}

export default Palette;
