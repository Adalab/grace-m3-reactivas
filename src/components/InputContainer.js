import React from "react";
import Input from "./Inputs";
import ImageInput from "./ImageInput";
import "../stylesheets/scss/components/ImageInput.scss";

class InputContainer extends React.Component {
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
    console.log(this.state)

    return !isDefault ? { backgroundImage: `url(${image})` } : { backgroundImage: `url(../images/sensejs_nomi.jpg)` };
  }

  render() {
    const actionToPerformInfo = this.props.updateEventInfo;
    const { isAvatarDefault, avatar } = this.props;
    const actionToPerform = this.getPreview(isAvatarDefault, avatar);
    const actionClass = "get-avatar__preview probando";

    return (
      <div>
        <Input
          type="text"
          id="userFullName"
          label="Nombre completo"
          classInput="js-name"
          name="userFullName"
          placeholder="Hermione Granger"
          action={actionToPerformInfo}
        />

        <Input
          type="text"
          id="userJob"
          label="Puesto"
          classInput="js-job"
          name="userJob"
          placeholder="Front-end developer"
          action={actionToPerformInfo}
        />

        <div className="get-avatar fill-in_item">
          <label className="fill-in_label" htmlFor="img-profile">
            Imagen de perfil
        </label>
          <div className="fill-in_buttonImg-wrapper">
            <button
              className="fill-in_button js__profile-trigger"
              type="button"
              id="img-profile"
              onClick={this.handleFilePicker}
              name="img-profile"
            >
              Añadir imagen  </button>
            <input
              type="file"
              ref={this.myFileField}
              className="action_hiddenField js__profile-upload-btn"
              onChange={this.uploadImage}
              name="photo"
              id="img-selector"


            />
            <div
              className="img-profile_preview js__profile-preview"
              style={this.getPreview(isAvatarDefault, avatar)}
            ></div>
          </div>
        </div>


        <Input
          type="tel"
          id="userPhone"
          label="Teléfono"
          classInput="js-phone"
          name="userPhone"
          placeholder="+34 678334765"
          type="tel"
          minLength="9"
          pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
          action={actionToPerformInfo}
        />

        <Input
          type="text"
          id="userEmail"
          label="Email"
          classInput="js-email"
          name="userEmail"
          placeholder="hermione-granger@gmail.com"
          type="email"
          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
          action={actionToPerformInfo}
        />
        <Input
          type="text"
          id="userLinkedin"
          label="Linkedin"
          classInput="js-linkedin"
          name="userLinkedin"
          placeholder="hermionegranger"
          type="text"
          action={actionToPerformInfo}
        />
        <Input
          type="text"
          id="userGithub"
          label="Github"
          classInput="js-github"
          name="userGithub"
          placeholder="hermione-granger"
          type="text"
          action={actionToPerformInfo}
        />
      </div>
    );
  }
}

export default InputContainer;
