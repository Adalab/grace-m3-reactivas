import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/scss/components/ImageInput.scss";

class ImageInput extends React.Component {
  constructor(props) {
    super(props);
    // this.updateUserInfo = this.updateUserInfo.bind(this);
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
    const { isAvatarDefault, avatar } = this.props;
    const actionToPerform = this.getPreview(isAvatarDefault, avatar);
    const actionClass = "get-avatar__preview probando";
    return (
      <div className="fill-in_item">
        <label className="fill-in_label" htmlFor="img-profile">
          {this.props.name}
        </label>

        <div className="fill-in_buttonImg-wrapper">
          <button onClick={this.handleFilePicker}>Holi</button>
          <input
            className={this.props.classRealButton}
            id="img-profile"
            type="button"
            value={this.props.valueInput}
            name="img-profile"
          />
          <input
            name="photo"
            type="file"
            id="img-selector"
            className="action_hiddenField js__profile-upload-btn"
          />
          <div
            className={this.props.displayPicture}
          // style={this.getPreview(isAvatarDefault, avatar)}
          ></div>
        </div>
      </div>
    );
  }
}

ImageInput.propTypes = {
  name: PropTypes.string,
  classRealButton: PropTypes.string,
  valueInput: PropTypes.string,
  displayPicture: PropTypes.string
};

export default ImageInput;

// //lo que puse en el inputContainer
// <ImageInput className="fiil-in_label" htmlFor="img-profile" label="Imagen de perfil" classInputContainer="fill-in_buttonImg-wrapper">
// <div class="img-profile_preview js__profile-preview"></div>
// </ImageInput>

// //lo que estaba en el componente que habia creado de imagen

// const ImageInputButton = props => {
//   return <input className={`fill-in_button ${props.classInput}`} id={props.id} type="button" value={props.value} name={props.name} />;
// };

// const ImageInputFile = props => {
//   return <input className={props.classInput} name={props.name} type="file" id={props.id} />;
// };

// class ImageInput extends React.Component {
//   render() {
//     return (
//       <div>
//         <label className="fill-in_label" for={this.props.id}>
//           {this.props.label}{" "}
//         </label>
//         <div className={this.props.classInputContainer}>
//           <ImageInputButton className="js__profile-trigger" id="img-profile" value="Añadir imagen" name="img-profile">
//             <ImageInputFile className="action_hiddenField js__profile-upload-btn" name="photo" id="img-selector"></ImageInputFile>
//           </ImageInputButton>
//         </div>
//       </div>
//     );
//   }
// }