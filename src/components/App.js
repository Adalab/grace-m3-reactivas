import React from "react";
import logoAdalab from "../images/logo-adalab-80px.png";
import awesomeProfilePic from "../images/tarjetas-molonas.svg";
import "../stylesheets/scss/main.scss";
import ResetButton from "./ResetButton";
import UploadFile from "./UploadFile";
<<<<<<< HEAD
import ShareButton from "./ShareButton";
=======
import Collapsibles from "./Collapsibles.js";
>>>>>>> 265220d1495e9ceae3ea9406f6b6fd7c92dbe720

// function App() {
//   return (
//     <main className="main">
//     <div className="main_content">
//         <img className="main_img" src={awesomeProfilePic} />
//         <div className="main_description">
//              <h1 className="main_title">Crea tu tarjeta de visita</h1>

//             <p className="main_text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
//         </div>
//         <div className="main_actions">
//             <div className="main_action"> <i className="main_action_icon far fa-object-ungroup"></i>

//                 <p className="main_action_item">Diseña</p>
//             </div>
//             <div className="main_action"> <i className="main_action_icon far fa-keyboard"></i>

//                 <p className="main_action_item">Rellena</p>
//             </div>
//             <div className="main_action"> <i className="main_action_icon fas fa-share-alt"></i>

//                 <p className="main_action_item">Comparte</p>
//             </div>
//         </div>
//         <button className="main_button"> <a className="main_button_link" href="./editor.html" target="_self">comenzar</a>

//         </button>
//     </div>
// <div className="footer">
// <small className="footer_small"> Awesome profile-cards @ Sense.JS 2019</small>
//     <a
//     className="footer_link" href="http://www.adalab.es" target="_blank">
//         <img className="footer_img" src={logoAdalab} alt="logo Adalab"/>
//         </a>
// </div>
// </main>

//   );

// }

function App() {
  return (
    <div>
      <div class="header">
        <div class="header_container">
          {" "}
          <a href="./index.html" target="_self">
            <img class="header_container_img" src={awesomeProfilePic} />
          </a>
        </div>
      </div>
      <section class="editor_container">
        <main class="editor_main">
          <section class="editor_card">
            <main class="card_content palette1">
              <div class="container">
                <ResetButton />
                <div class="card js-card">
                  <div class="card_header">
                    <h1
                      class="js-name card_name"
                      data-placeholder="Nombre Apellido"
                    >
                      nombre apellido
                    </h1>

                    <p
                      class="js-job card_job"
                      data-placeholder="Front-end developer"
                    >
                      Front-end developer
                    </p>
                  </div>
                  <div class="card_img js__profile-image"></div>
                  <ul class="card_footer_list">
                    <li class="card_footer_item">
                      {" "}
                      <a class="js-phone card_link" href="" target="_blank">
                        <i class="fas fa-mobile-alt"></i>
                      </a>
                    </li>
                    <li class="card_footer_item">
                      {" "}
                      <a
                        class="js-email card_link"
                        href=""
                        data-prefix="mailto:"
                        target="_blank"
                      >
                        <i class="far fa-envelope"></i>
                      </a>
                    </li>
                    <li class="card_footer_item">
                      {" "}
                      <a
                        class="js-linkedin card_link"
                        href=""
                        data-placeholder=""
                        data-prefix="https://www.linkedin.com/in/"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li class="card_footer_item">
                      {" "}
                      <a
                        class="js-github card_link"
                        href=""
                        data-placeholder=""
                        data-prefix="https://github.com/"
                        target="_blank"
                      >
                        <i class="fab fa-github-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </main>
          </section>
          <section class="editor_form js-form">
            <section class="design_section js-collapsible">
              <div class="js-collapsible-trigger">
                <legend class="legend">
                  {" "}
                  <i class="legend_icon far fa-object-ungroup"></i>
                  <h2 class="legend_title">Diseña</h2>
                  <i class="fas fas fa-chevron-up legend_arrow"></i>
                </legend>
              </div>
              <div class="js-collapsible-content">
                <div class="tittlePalettes">
                  <div class="design_palette-description">Colores</div>
                  <div class="palettes js-palettes">
                    <section class="design_palette-option">
                      <input
                        class="form_item js-select1"
                        type="radio"
                        value="0"
                        name="btn"
                        id="design1"
                        checked
                      />
                      <label for="design1" class="radio_btn"></label>
                      <div class="design_palette item item_1"></div>
                      <div class="design_palette  item item_2"></div>
                      <div class="design_palette item item_3"></div>
                    </section>
                    <section class="design_palette-option">
                      <input
                        class="form_item js-select2"
                        type="radio"
                        value="1"
                        name="btn"
                        id="design2"
                      />
                      <label for="design2" class="radio_btn"></label>
                      <div class="design_palette item item_4"></div>
                      <div class="design_palette item item_5"></div>
                      <div class="design_palette item item_6"></div>
                    </section>
                    <section class="design_palette-option">
                      <input
                        class="form_item js-select3"
                        type="radio"
                        value="2"
                        name="btn"
                        id="design3"
                      />
                      <label for="design3" class="radio_btn"></label>
                      <div class="design_palette item item_7"></div>
                      <div class="design_palette item item_8"></div>
                      <div class="design_palette item item_9"></div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
            <section class="fill-in_section js-collapsible">
              <div class="js-collapsible-trigger">
                <legend class="legend">
                  {" "}
                  <i class="far fa-keyboard legend_icon"></i>
                  <h2 class="legend_title">Rellena</h2>
                  <i class="fas fas fa-chevron-up legend_arrow"></i>
                </legend>
              </div>
              <div class="js-collapsible-content">
                <div class="fill-in_items">
                  <div class="fill-in_item">
                    <label class="fill-in_label" for="full_name">
                      Nombre completo
                    </label>
                    <input
                      class="js-name fill-in_input"
                      id="full_name"
                      type="text"
                      name="name"
                      placeholder="Hermione Granger"
                      required
                    />
                  </div>
                  <UploadFile />
                  <div class="fill-in_item">
                    <label class="fill-in_label" for="phone">
                      Teléfono
                    </label>
                    <input
                      class="js-phone fill-in_input"
                      id="phone"
                      type="tel"
                      minlength="9"
                      name="phone"
                      placeholder="+34 678334765"
                      pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                    />
                  </div>
                  <div class="fill-in_item">
                    <label class="fill-in_label" for="email">
                      Email
                    </label>
                    <input
                      class="js-email fill-in_input"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="hermione-granger@gmail.com"
                      pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                    />
                  </div>
                  <div class="fill-in_item">
                    <label class="fill-in_label" for="linkedin">
                      Linkedin
                    </label>
                    <input
                      class="js-linkedin fill-in_input"
                      id="linkedin"
                      type="text"
                      name="linkedin"
                      placeholder="hermionegranger"
                    />
                  </div>
                  <div class="fill-in_item">
                    <label class="fill-in_label" for="github">
                      Github
                    </label>
                    <input
                      class="js-github fill-in_input"
                      id="github"
                      type="text"
                      name="github"
                      placeholder="hermione-granger"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section class="share-section js-collapsible">
              <div class="js-collapsible-trigger">
                <legend class="legend">
                  {" "}
                  <i class="legend_icon fas fa-share-alt"></i>
                  <h2 class="legend_title">Comparte</h2>
                  <i class="legend_arrow fas fa-chevron-up"></i>
                </legend>
              </div>
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
            <ShareButton />
          </section>
        </main>
      </section>
      <footer class="footer">
        {" "}
        <small class="footer_small">
          {" "}
          Awesome profile-cards @ Sense.JS 2019
        </small>
        <a class="footer_link" href="http://www.adalab.es" target="_blank">
          <img class="footer_img" src={logoAdalab} />
        </a>
      </footer>
    </div>
  );
}
export default App;
