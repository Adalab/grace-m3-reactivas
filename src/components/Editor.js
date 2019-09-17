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
    const localStorageData = this.getData();
    this.state =
      localStorageData === null ? this.getInitialState() : localStorageData;
    this.updateCheckboxColor = this.updateCheckboxColor.bind(this);
    this.saveData = this.saveData.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  getInitialState() {
    return {
      userFullName: "",
      userJob: "",
      userPhone: "",
      userEmail: "",
      userLinkedin: "",
      userGithub: "",
      palette: "1"
    };
  }

  clearForm() {
    this.setState({
      userFullName: "",
      userJob: "",
      userPhone: "",
      userEmail: "",
      userLinkedin: "",
      userGithub: ""
    });
  }

  updateEventInfo = event => {
    let key = event.currentTarget.id;
    let userInfo = event.target.value;
    this.setState(
      {
        [key]: `${userInfo}`
      },
      this.saveData
    );
  };
  updatePreviewEmail() {
    if (this.state.userEmail === "") {
      return "";
    } else {
      return `mailto:${this.state.userEmail}`;
    }
  }

  updatePreviewName() {
    if (this.state.userFullName === "") {
      return "Nombre y Apellidos";
    } else {
      return `${this.state.userFullName}`;
    }
  }
  updatePreviewJob() {
    if (this.state.userJob === "") {
      return "Front end developer";
    } else {
      return `${this.state.userJob}`;
    }
  }
  updatePreviewLinkedin() {
    if (this.state.userLinkedin === "") {
      return "";
    } else {
      return `https://www.linkedin.com/in/${this.state.userLinkedin}`;
    }
  }
  updatePreviewGithub() {
    if (this.state.userGithub === "") {
      return "";
    } else {
      return `https://www.github.com/${this.state.userGithub}`;
    }
  }

  updateCheckboxColor(event) {
    const paletteSelected = event.target.value;
    this.setState({ palette: `${paletteSelected}` }, this.saveData);
  }

  saveData() {
    localStorage.setItem("info", JSON.stringify(this.state));
  }

  getData() {
    return JSON.parse(localStorage.getItem("info"));
  }

  render() {
    const classColor = `card_content palette${this.state.palette}`;
    return (
      <div>
        <Header
          url="/"
          foto={awesomeProfilePic}
          destiny="_self"
          alt="Awesome Profile Cards"
        />
        <section class="editor_container">
          <main class="editor_main">
            <section class="editor_card">
              <main class={classColor}>
                <div class="container">
                  <ResetButton
                    icon="far fa-trash-alt trash_icon"
                    name="Reset"
                    action={this.clearForm}
                  />
                  <CardPreview
                    fullnameClass="js-name card_name"
                    fullname={this.updatePreviewName()}
                    jobClass="js-job card_job"
                    jobCard={this.updatePreviewJob()}
                    imageCard="card_img js__profile-image"
                    userPhone={this.state.userPhone}
                    userEmail={this.updatePreviewEmail()}
                    linkedinLink={this.updatePreviewLinkedin()}
                    githubLink={this.updatePreviewGithub()}
                  />
                </div>
              </main>
            </section>
            <section class="editor_form js-form">
              <section class="design_section js-collapsible">
                <Collapsibles
                  icon="legend_icon far fa-object-ungroup"
                  title="Diseña"
                  arrow="fas fas fa-chevron-up legend_arrow"
                >
                  <PalettesContainer
                    updateCheckboxColor={this.updateCheckboxColor}
                  ></PalettesContainer>
                </Collapsibles>
              </section>
              <section class="fill-in_section js-collapsible">
                <Collapsibles
                  icon="far fa-keyboard legend_icon"
                  title="Rellena"
                  arrow="fas fas fa-chevron-up legend_arrow"
                >
                  <InputContainer updateEventInfo={this.updateEventInfo} />
                </Collapsibles>
              </section>
              <section class="share-section js-collapsible">
                <Collapsibles
                  icon="legend_icon fas fa-share-alt"
                  title="Comparte"
                  arrow="fas fas fa-chevron-up legend_arrow"
                >
                  <div class="js-collapsible-content">
                    <div class="share_button">
                      <button type="submit" class="share_button_img">
                        {" "}
                        <i class="share_button_img_icon far fa-address-card" />
                        Crear tarjeta
                      </button>
                    </div>
                  </div>
                  <div className="completed_content hidden">
                    <h3 className="completed_content_title">
                      La tarjeta ha sido creada:
                    </h3>
                    <a
                      href="#"
                      className="completed_content_url"
                      target="_self"
                    />
                    <ShareButton
                      icon="completed_content_button_icon fab fa-twitter"
                      name="Compartir en twitter"
                    />
                  </div>
                </Collapsibles>
              </section>
            </section>
          </main>
        </section>
        <Footer
          url="https://www.adalab.es"
          foto={logoAdalab}
          title="Awesome profile-cards @ Sense.JS 2019"
        />
      </div>
    );
  }
}

export default Editor;
