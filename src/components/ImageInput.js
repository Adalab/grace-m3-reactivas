import React from 'react';
import '../stylesheets/scss/main.scss';

class ImageInput extends React.Component {
	render() {
		return (
			<div className="fill-in_item">
				<label className="fill-in_label" htmlFor="img-profile">
					{this.props.name}
				</label>

				<div className="fill-in_buttonImg-wrapper">
					<input className={this.props.classRealButton} id="img-profile" type="button" value={this.props.valueInput} name="img-profile" />
					<input name="photo" type="file" id="img-selector" className="action_hiddenField js__profile-upload-btn" />
					<div
						className={this.props.displayPicture}
						// style={this.getPreview(isAvatarDefault, avatar)}
					></div>
				</div>
			</div>
		);
	}
}

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
