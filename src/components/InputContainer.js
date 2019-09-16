import React from 'react';
import Input from './Inputs';
import ImageInput from './ImageInput';
import '../stylesheets/scss/components/ImageInput.scss';

class InputContainer extends React.Component {
  render() {
    return (
      <div>
        <Input type="text" idLabel="full_name" idInput="full_name" label="Nombre completo" classnameinput="js-name" name="name" placeholder="Hermione Granger" />

        <Input type="text" idLabel="job" idInput="job" label="Puesto" classnameinput="js-job" name="job" placeholder="Front-end developer" />

        <ImageInput name="Imagen de perfil" valueInput="Añadir imagen" classRealButton="fill-in_button js__profile-trigger" displayPicture="img-profile_preview js__profile-preview" />

        <Input type="tel" idLabel="phone" idInput="phone" label="Teléfono" classnameinput="js-phone" name="phone" placeholder="+34 678334765" type="tel" minLength="9" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" />

        <Input type="text" idLabel="email" idInput="email" label="Email" classnameinput="js-email" name="email" placeholder="hermione-granger@gmail.com" type="email" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" />

        <Input type="text" idLabel="linkedin" idInput="linkedin" label="Linkedin" classnameinput="js-linkedin" name="linkedin" placeholder="hermionegranger" type="text" />

        <Input type="text" idLabel="github" idInput="github" label="Github" classnameinput="js-github" name="github" placeholder="hermione-granger" type="text" />
      </div>
    );
  }
}

export default InputContainer;
