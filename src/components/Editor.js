import React from 'react';
import {Link} from 'react-router-dom';
import logoAdalab from '../images/logo-adalab-80px.png';
import awesomeProfilePic from '../images/tarjetas-molonas.svg';
import Header from './Header';
import InputContainer from './InputContainer.js';
import ResetButton from './ResetButton';
import ShareButton from './ShareButton';
import Collapsibles from './Collapsibles.js';
import PalettesContainer from './PalettesContainer.js';
import Footer from './Footer';
import CardPreview from './CardPreview';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFullName: '',
      userJob: '',
      userPhone: '',
      userEmail: '',
      userLinkedin: '',
      userGithub: '',
    };
  }
  updateEventInfo = event => {
    let key = event.currentTarget.name;
    let userInfo = event.target.value;
    this.setState(
      {
        [key]: `${userInfo}`,
      },
      () => {
        console.log(this.state);
      }
    );
    console.log(this.state);
  };

  updatePreviewName() {
    if (this.state.userFullName === '') {
      return 'Nombre y Apellidos';
    } else {
      return `${this.state.userFullName}`;
    }
  }
  updatePreviewJob() {
    if (this.state.userJob === '') {
      return 'Front end developer';
    } else {
      return `${this.state.userJob}`;
    }
  }

  render() {
    return (
      <div>
        <Header url="/" foto={awesomeProfilePic} destiny="_self" alt="Awesome Profile Cards" />
        <section className="editor_container">
          <main className="editor_main">
            <section className="editor_card">
              <main className="card_content palette1">
                <div className="container">
                  <ResetButton icon="far fa-trash-alt trash_icon" name="Reset" />
                  <CardPreview fullnameClass="js-name card_name" fullname={this.updatePreviewName()} jobClass="js-job card_job" jobCard={this.updatePreviewJob()} imageCard="card_img js__profile-image" />
                </div>
              </main>
            </section>
            <section className="editor_form js-form">
              <section className="design_section js-collapsible">
                <Collapsibles icon="legend_icon far fa-object-ungroup" title="Diseña" arrow="fas fas fa-chevron-up legend_arrow">
                  <PalettesContainer></PalettesContainer>
                </Collapsibles>
              </section>
              <section className="fill-in_section js-collapsible">
                <Collapsibles icon="far fa-keyboard legend_icon" title="Rellena" arrow="fas fas fa-chevron-up legend_arrow"></Collapsibles>

                <div className="js-collapsible-content">
                  <div className="fill-in_items">
                    <InputContainer updateEventInfo={this.updateEventInfo} />
                  </div>
                </div>
              </section>
              <section className="share-section js-collapsible">
                <Collapsibles icon="legend_icon fas fa-share-alt" title="Comparte" arrow="fas fas fa-chevron-up legend_arrow"></Collapsibles>
                <div className="js-collapsible-content">
                  <div className="share_button">
                    <button type="submit" className="share_button_img">
                      {' '}
                      <i className="share_button_img_icon far fa-address-card"></i>
                      Crear tarjeta
                    </button>
                  </div>
                </div>
              </section>
              <div className="completed_content hidden">
                <h3 className="completed_content_title">La tarjeta ha sido creada:</h3>
                <a href="" className="completed_content_url" target="_self"></a>
                <ShareButton icon="completed_content_button_icon fab fa-twitter" name="Compartir en twitter" />
              </div>
            </section>
          </main>
        </section>
        <Footer url="https://www.adalab.es" foto={logoAdalab} title="Awesome profile-cards @ Sense.JS 2019" />
        <main></main>
      </div>
    );
  }
}

export default Editor;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userFullName: '',
//       userJob: '',
//       userPhone: '',
//       userEmail: '',
//       userLinkedin: '',
//       userGithub: '',
//     };
//   }
//   updateEventInfo = event => {
//     let key = event.currentTarget.name;
//     let userInfo = event.target.value;
//     this.setState(
//       {
//         [key]: `${userInfo}`,
//       },
//       () => {
//         console.log(this.state);
//       }
//     );
//     console.log(this.state);
//   };
//   render() {
//     return (
//       <div>
//         <p>{this.state.userFullName}</p>
//         <div className="header">
//           <div className="header_container">
//             {' '}
//             <a href="./index.html" target="_self">
//               <img className="header_container_img" src={awesomeProfilePic} />
//             </a>
//           </div>
//         </div>
//         <section className="editor_container">
//           <main className="editor_main">
//             <section className="editor_card">
//               <main className="card_content palette1">
//                 <div className="container">
//                   <ResetButton icon="far fa-trash-alt trash_icon" name="Reset" />
//                   <CardPreview fullnameClass="js-name card_name" fullname={this.state.userFullName} jobClass="js-job card_job" jobCard={this.state.userJob} imageCard="card_img js__profile-image" />
//                 </div>
//               </main>
//             </section>
//             <section className="editor_form js-form">
//               <section className="design_section js-collapsible">
//                 <Collapsibles icon="legend_icon far fa-object-ungroup" title="Diseña" arrow="fas fas fa-chevron-up legend_arrow">
//                   <PalettesContainer />
//                 </Collapsibles>
//               </section>
//               <section className="fill-in_section js-collapsible">
//                 <Collapsibles icon="far fa-keyboard legend_icon" title="Rellena" arrow="fas fas fa-chevron-up legend_arrow" />

//                 <div className="js-collapsible-content">
//                   <div className="fill-in_items">
//                     <InputContainer updateEventInfo={this.updateEventInfo} />
//                   </div>
//                 </div>
//               </section>
//               <section className="share-section js-collapsible">
//                 <Collapsibles icon="legend_icon fas fa-share-alt" title="Comparte" arrow="fas fas fa-chevron-up legend_arrow" />
//                 <div className="js-collapsible-content">
//                   <div className="share_button">
//                     <button type="submit" className="share_button_img">
//                       {' '}
//                       <i className="share_button_img_icon far fa-address-card" />
//                       Crear tarjeta
//                     </button>
//                   </div>
//                 </div>
//               </section>
//               <div className="completed_content hidden">
//                 <h3 className="completed_content_title">La tarjeta ha sido creada:</h3>
//                 <a href="#" className="completed_content_url" target="_self" />
//                 <ShareButton icon="completed_content_button_icon fab fa-twitter" name="Compartir en twitter" />
//               </div>
//             </section>
//           </main>
//         </section>
//         <footer className="footer">
//           {' '}
//           <small className="footer_small"> Awesome profile-cards @ Sense.JS 2019</small>
//           <a className="footer_link" href="http://www.adalab.es" target="_blank" rel="noopener noreferrer">
//             <img className="footer_img" src={logoAdalab} />
//           </a>
//         </footer>
//       </div>
