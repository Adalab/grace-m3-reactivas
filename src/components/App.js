import React from 'react';
import logoAdalab from '../images/logo-adalab-80px.png';
import awesomeProfilePic from '../images/tarjetas-molonas.svg';
import Header from './Header';
// import MainButton from "./MainButton";
// import Share from "./Share";
// import "../stylesheets/scss/main.scss";
import InputContainer from './InputContainer.js';
import ResetButton from './ResetButton';
import ShareButton from './ShareButton';
import Collapsibles from './Collapsibles.js';
// import MainDescription from "./MainDescription";
// import SquareFontawesomeIcons from "./SquareFontawesomeIcons.js";
import PalettesContainer from './PalettesContainer.js';
import Footer from './Footer';
import CardPreview from './CardPreview';

// function App() {
//   return (
//     <main className="main">
//       <div className="main_content">
//         <MainDescription foto={awesomeProfilePic} mainTitle="Crea tu tarjeta de visita" mainText="Crea mejores contactos profesionales de forma fácil y cómoda" />
//         <SquareFontawesomeIcons />
//         <MainButton />
//       </div>
//       <Footer
//        url="https://www.adalab.es"
//        foto={logoAdalab}
//        title="Awesome profile-cards @ Sense.JS 2019"
//      />
//     </main>
//   );
// }

function App() {
  return (
    <div>
      <Header url="/" foto={awesomeProfilePic} destiny="_self" alt="Awesome Profile Cards" />
      <section className="editor_container">
        <main className="editor_main">
          <section className="editor_card">
            <main className="card_content palette1">
              <div className="container">
                <ResetButton icon="far fa-trash-alt trash_icon" name="Reset" />
                <CardPreview fullnameClass="js-name card_name" fullname="Nombre Apellido" jobClass="js-job card_job" jobCard="Front-end developer" imageCard="card_img js__profile-image" />
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
                  <InputContainer />
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
              {/* <a href="#" className="completed_content_url" target="_self"></a> */}
              <ShareButton icon="completed_content_button_icon fab fa-twitter" name="Compartir en twitter" />
            </div>
          </section>
        </main>
      </section>
      <Footer url="https://www.adalab.es" foto={logoAdalab} title="Awesome profile-cards @ Sense.JS 2019" />
    </div>
  );
}
export default App;
