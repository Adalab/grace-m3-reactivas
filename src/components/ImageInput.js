import React from "react";

const ImageInputButton = props => {
  return <input className={`fill-in_button ${props.classInput}`} id={props.id} type="button" value={props.value} name={props.name} />;
};

const ImageInputFile = props => {
  return <input className={props.classInput} name={props.name} type="file" id={props.id} />;
};

class ImageInput extends React.Component {
  render() {
    return (
      <>
        <label className="fill-in_label" for={this.props.id}>
          {this.props.label}{" "}
        </label>
        <div className={this.props.classInputContainer}>{this.props.children}</div>
      </>
    );
  }
}

export { ImageInput, ImageInputButton, ImageInputFile };
