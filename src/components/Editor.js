import React from "react";
import { Link } from "react-router-dom";
import logoAdalab from "../images/logo-adalab-80px.png";
import awesomeProfilePic from "../images/tarjetas-molonas.svg";
import Header from "./Header";
import InputContainer from "./InputContainer.js";
import ResetButton from "./ResetButton";
import ShareButton from "./ShareButton";
import Collapsibles from "./Collapsibles.js";
import PalettesContainer from "./PalettesContainer.js";
import Footer from "./Footer";
import CardPreview from "./CardPreview";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: "1"
    };

    this.updateCheckboxColor = this.updateCheckboxColor.bind(this);
  }

  updateCheckboxColor(event) {
    const paletteSelected = event.target.value;
    this.setState({ palette: `${paletteSelected}` });
    console.log(this.state.palette);
  }

  render() {
    const classColor = `card_content palette${this.state.palette}`;
    return (
      <div>
        <Header url="/" foto={awesomeProfilePic} destiny="_self" alt="Awesome Profile Cards" />
        <section class="editor_container">
          <main class="editor_main">
            <section class="editor_card">
              <main class={classColor}>
                <div class="container">
                  <ResetButton icon="far fa-trash-alt trash_icon" name="Reset" />
                  <CardPreview fullnameClass="js-name card_name" fullname="Nombre Apellido" jobClass="js-job card_job" jobCard="Front-end developer" imageCard="card_img js__profile-image" />
                </div>
              </main>
            </section>
            <section class="editor_form js-form">
              <section class="design_section js-collapsible">
                <Collapsibles icon="legend_icon far fa-object-ungroup" title="Diseña" arrow="fas fas fa-chevron-up legend_arrow">
                  <PalettesContainer updateCheckboxColor={this.updateCheckboxColor}></PalettesContainer>
                </Collapsibles>
              </section>
              <section class="fill-in_section js-collapsible">
                <Collapsibles icon="far fa-keyboard legend_icon" title="Rellena" arrow="fas fas fa-chevron-up legend_arrow"></Collapsibles>

                <div class="js-collapsible-content">
                  <div class="fill-in_items">
                    <InputContainer />
                  </div>
                </div>
              </section>
              <section class="share-section js-collapsible">
                <Collapsibles icon="legend_icon fas fa-share-alt" title="Comparte" arrow="fas fas fa-chevron-up legend_arrow"></Collapsibles>
                <div class="js-collapsible-content">
                  <div class="share_button">
                    <button type="submit" class="share_button_img">
                      {" "}
                      <i class="share_button_img_icon far fa-address-card"></i>
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
