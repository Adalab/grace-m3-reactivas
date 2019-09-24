import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/ImageInput.scss";

class ImageInput extends React.Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();
    this.myFileField = React.createRef();
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }
  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener("load", this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    return (
      <div className="fill-in_item">
        <label className="fill-in_label" htmlFor="img-profile">
          {this.props.name}
        </label>

        <div className="fill-in_buttonImg-wrapper">
          <button onClick={this.handleFilePicker}>Holi</button>
          <input className={this.props.classRealButton} id="img-profile" type="button" value={this.props.valueInput} name="img-profile" />
          <input name="photo" type="file" id="img-selector" className="action_hiddenField js__profile-upload-btn" />
          <div className={this.props.displayPicture}></div>
        </div>
      </div>
    );
  }
}

ImageInput.propTypes = {
  name: PropTypes.string.isRequired,
  classRealButton: PropTypes.string.isRequired,
  valueInput: PropTypes.string.isRequired,
  displayPicture: PropTypes.string.isRequired
};

export default ImageInput;
