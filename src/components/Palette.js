import React from "react";

import "../stylesheets/scss/components/PalettesContainer.scss";
import "../stylesheets/scss/components/Palette.scss";

class Palette extends React.Component {
  constructor(props) {
    super(props);

    this.updateCheckboxColor = this.updateCheckboxColor.bind(this);
  }

  updateCheckboxColor(event) {
    // esta función debe estar en Editor, este es un component dummy
    // aqui falta la función
    // this.setState({ [event.target.name]: event.target.value });
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

{
  /* <input id="form--age" type="radio" name="age" value="A" onChange={this.handleChange} checked={this.state.age === "A" ? true : false} />
            </label> */
}

export default Palette;
