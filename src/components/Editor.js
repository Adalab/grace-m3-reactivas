import React from "react";
// import { Link } from "react-router-dom";
//probando
// probando
import logoAdalab from "../images/logo-adalab-80px.png";
import PropTypes from "prop-types";
import awesomeProfilePic from "../images/tarjetas-molonas.svg";
import Header from "./Header";
import InputContainer from "./InputContainer.js";
import ResetButton from "./ResetButton";
import ShareButton from "./ShareButton";
import Collapsibles from "./Collapsibles.js";
import PalettesContainer from "./PalettesContainer.js";
import Footer from "./Footer";
import CardPreview from "./CardPreview";
import Profile from "./Profile.js";
import defaultImage from "../images/sensejs_nomi.jpg";
import "../stylesheets/scss/components/Fill-in.scss";
import "../stylesheets/scss/components/Editor.scss";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    const localStorageData = this.getData();
    this.state = localStorageData === null ? this.getInitialState() : localStorageData;
    this.updateCheckboxColor = this.updateCheckboxColor.bind(this);
    this.saveData = this.saveData.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.resetData = this.resetData.bind(this);
  }

  getInitialState() {
    return {
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      palette: "1",
      isAvatarDefault: true,
      profile: {
        photo: defaultImage
      }
    };
  }

  updateAvatar(img) {
    const { profile } = this.state;
    this.setState(prevState => {
      const newProfile = { ...profile, photo: img };
      return {
        profile: newProfile,
        isAvatarDefault: false
      };
    });
    this.saveData();
  }

  clearForm() {
    this.forceUpdate();
    this.setState({
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      palette: "1",
      isAvatarDefault: true,
      profile: {
        photo: defaultImage
      }
    });
    this.resetData();
  }

  resetData() {
    localStorage.clear();
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
    if (this.state.email === "") {
      return "";
    } else {
      return `mailto:${this.state.email}`;
    }
  }

  updatePreviewName() {
    console.log(this.state);
    if (this.state.name === "") {
      return "Nombre y Apellidos";
    } else {
      return `${this.state.name}`;
    }
  }
  updatePreviewJob() {
    if (this.state.job === "") {
      return "Front end developer";
    } else {
      return `${this.state.job}`;
    }
  }
  updatePreviewLinkedin() {
    if (this.state.linkedin === "") {
      return "";
    } else {
      return `https://www.linkedin.com/in/${this.state.linkedin}`;
    }
  }
  updatePreviewGithub() {
    if (this.state.github === "") {
      return "";
    } else {
      return `https://www.github.com/${this.state.github}`;
    }
  }

  updateCheckboxColor(event) {
    const paletteSelected = event.target.value;
    this.setState({ palette: `${paletteSelected}` }, this.saveData);
  }

  componentDidMount() {
    this.saveData();
    this.getData();
  }
  saveData() {
    localStorage.setItem("info", JSON.stringify(this.state));
  }

  getData() {
    return JSON.parse(localStorage.getItem("info"));
  }

  render() {
    const classColor = `card_content palette${this.state.palette}`;
    const { profile, isAvatarDefault } = this.state;
    const handleClick = this.handleClick;

    return (
      <div>
        <Header url="/" foto={awesomeProfilePic} destiny="_self" alt="Awesome Profile Cards" />
        <section className="editor_container">
          <main className="editor_main">
            <section className="editor_card">
              <main className={classColor}>
                <div className="container">
                  <ResetButton icon="far fa-trash-alt trash_icon" name="Reset" action={this.clearForm} />
                  <div className="App">
                    <Profile avatar={profile.photo} />
                  </div>
                  <CardPreview fullnameclassName="js-name card_name" fullname={this.updatePreviewName()} jobclassName="js-job card_job" jobCard={this.updatePreviewJob()} imageCard={this.state.profile.photo} phone={this.state.phone} email={this.updatePreviewEmail()} linkedinLink={this.updatePreviewLinkedin()} githubLink={this.updatePreviewGithub()} />
                </div>
              </main>
            </section>
            <section className="editor_form js-form">
              <section className="design_section js-collapsible">
                <Collapsibles icon="legend_icon far fa-object-ungroup" title="Diseña" arrow="fas fas fa-chevron-up legend_arrow">
                  <PalettesContainer updateCheckboxColor={this.updateCheckboxColor}></PalettesContainer>
                </Collapsibles>
              </section>
              <section className="fill-in_section js-collapsible">
                <Collapsibles icon="far fa-keyboard legend_icon" title="Rellena" arrow="fas fas fa-chevron-up legend_arrow">
                  <InputContainer
                    // HAY QUE CONCRETAR ESTO
                    avatar={profile.avatar}
                    isAvatarDefault={isAvatarDefault}
                    updateAvatar={this.updateAvatar}
                    updateEventInfo={this.updateEventInfo}
                    data={this.state}
                    imageCard={this.state.profile.photo}
                    name="Imagen de perfil"
                    valueInput="Añadir imagen"
                    classRealButton="fill-in_button js__profile-trigger"
                    displayPicture="img-profile_preview js__profile-preview"
                  />
                </Collapsibles>
              </section>
              <section className="share-section js-collapsible">
                <Collapsibles icon="legend_icon fas fa-share-alt" title="Comparte" arrow="fas fas fa-chevron-up legend_arrow">
                  <div className="js-collapsible-content">
                    <div className="share_button">
                      <button type="submit" className="share_button_img">
                        {" "}
                        <i className="share_button_img_icon far fa-address-card" />
                        Crear tarjeta
                      </button>
                    </div>
                  </div>
                  <div className="completed_content hidden">
                    <h3 className="completed_content_title">La tarjeta ha sido creada:</h3>
                    {/* <a
                      href="#"
                      className="completed_content_url"
                      target="_self"
                    /> */}
                    <ShareButton icon="completed_content_button_icon fab fa-twitter" name="Compartir en twitter" />
                  </div>
                </Collapsibles>
              </section>
            </section>
          </main>
        </section>
        <Footer url="https://www.adalab.es" foto={logoAdalab} title="Awesome profile-cards @ Sense.JS 2019" />
      </div>
    );
  }
}

Editor.propTypes = {
  getData: PropTypes.func,
  state: PropTypes.object,
  updateCheckboxColor: PropTypes.func,
  saveData: PropTypes.func,
  clearForm: PropTypes.func,
  resetData: PropTypes.func,
  forceUpdate: PropTypes.func,
  setState: PropTypes.object,
  updatePreviewName: PropTypes.func,
  updatePreviewJob: PropTypes.func,
  updatePreviewEmail: PropTypes.func,
  updatePreviewLinkedin: PropTypes.func,
  updatePreviewGithub: PropTypes.func,
  updateEventInfo: PropTypes.func
};

export default Editor;
