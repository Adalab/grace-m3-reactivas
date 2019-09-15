import React from 'react';
import Input from './Inputs';
import ImageInput from './ImageInput';
import '../stylesheets/scss/components/ImageInput.scss';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.updateUserInfo = this.updateUserInfo.bind(this);
  }

  render() {
    const actionToPerform = this.props.updateEventInfo;

    return (
      <div>
        <Input type="text" id="userFullName" label="Nombre completo" classInput="js-name" name="userFullName" placeholder="Hermione Granger" action={actionToPerform} />

        <Input type="text" id="userJob" label="Puesto" classInput="js-job" name="userJob" placeholder="Front-end developer" action={actionToPerform} />

        <ImageInput name="Imagen de perfil" valueInput="Añadir imagen" classRealButton="fill-in_button js__profile-trigger" displayPicture="img-profile_preview js__profile-preview" />

        <Input type="tel" id="userPhone" label="Teléfono" classInput="js-phone" name="userPhone" placeholder="+34 678334765" type="tel" minLength="9" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" action={actionToPerform} />
        <Input type="text" id="userEmail" label="Email" classInput="js-email" name="userEmail" placeholder="hermione-granger@gmail.com" type="email" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" action={actionToPerform} />
        <Input type="text" id="userLinkedin" label="Linkedin" classInput="js-linkedin" name="userLinkedin" placeholder="hermionegranger" type="text" action={actionToPerform} />
        <Input type="text" id="userGithub" label="Github" classInput="js-github" name="userGithub" placeholder="hermione-granger" type="text" action={actionToPerform} />
      </div>
    );
  }
}

export default InputContainer;
