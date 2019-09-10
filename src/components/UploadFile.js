import React from "react";
import "../stylesheets/scss/main.scss";

class UploadFile extends React.Component {
  render() {
    return (
      <div className="fill-in_item">
        <label className="fill-in_label" htmlFor="img-profile">
          Imagen de perfil
        </label>

        <div className="fill-in_buttonImg-wrapper">
          <input
            className="fill-in_button js__profile-trigger"
            id="img-profile"
            type="button"
            value="Añadir imagen"
            name="img-profile"
          />
          <input
            name="photo"
            type="file"
            id="img-selector"
            className="action_hiddenField js__profile-upload-btn"
          />
          <div
            className="img-profile_preview js__profile-preview"
            // style={this.getPreview(isAvatarDefault, avatar)}
          ></div>
        </div>
      </div>
    );
  }
}

export default UploadFile;
