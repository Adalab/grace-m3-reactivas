        import React from "react";
        import Header from "./header";
        import Footer from "./footer";
        // import awesomeProfilePic from "../images/tarjetas-molonas.svg";
        import "../stylesheets/scss/main.scss";

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
        // <Footer />
        // </main>

        //   );

        // }

        function App() {
            return (
                <div>
                <Header />
                <section className="editor_container">
                        <main className="editor_main">
                        <section className="editor_card">
                            <main className="card_content palette1">
                                <div className="container">
                                    <button className="card_button-reset js-reset"> <i className="far fa-trash-alt trash_icon"></i> Reset</button>
                                    <div className="card js-card">
                                        <div className="card_header">
                                            <h1 className="js-name card_name" data-placeholder="Nombre Apellido">nombre apellido</h1>

                                            <p className="js-job card_job" data-placeholder="Front-end developer">Front-end developer</p>
                                        </div>
                                        <div className="card_img js__profile-image"></div>
                                        <ul className="card_footer_list">
                                            <li className="card_footer_item"> <a className="js-phone card_link" href="" target="_blank"><i className="fas fa-mobile-alt"></i></a>

                                            </li>
                                            <li className="card_footer_item"> <a className="js-email card_link" href="" data-prefix="mailto:" target="_blank">
                    <i className="far fa-envelope"></i>
                </a>

                                            </li>
                                            <li className="card_footer_item"> <a className="js-linkedin card_link" href="" data-placeholder="" data-prefix="https://www.linkedin.com/in/"
                                                target="_blank"><i className="fab fa-linkedin-in"></i></a>

                                            </li>
                                            <li className="card_footer_item"> <a className="js-github card_link" href="" data-placeholder="" data-prefix="https://github.com/"
                                                target="_blank"><i className="fab fa-github-alt"></i></a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </main>
                        </section>
                        <section className="editor_form js-form">
                            <section className="design_section js-collapsible">
                                <div className="js-collapsible-trigger">
                                    <legend className="legend"> <i className="legend_icon far fa-object-ungroup"></i>

                                        <h2 className="legend_title">Diseña</h2>
        <i className="fas fas fa-chevron-up legend_arrow"></i>

                                    </legend>
                                </div>
                                <div className="js-collapsible-content">
                                    <div className="tittlePalettes">
                                        <div className="design_palette-description">Colores</div>
                                        <div className="palettes js-palettes">
                                            <section className="design_palette-option">
                                                <input className="form_item js-select1" type="radio" value="0" name="btn"
                                                id="design1" checked />
                                                <label htmlFor="design1" className="radio_btn"></label>
                                                <div className="design_palette item item_1"></div>
                                                <div className="design_palette  item item_2"></div>
                                                <div className="design_palette item item_3"></div>
                                            </section>
                                            <section className="design_palette-option">
                                                <input className="form_item js-select2" type="radio" value="1" name="btn"
                                                id="design2" />
                                                <label htmlFor="design2" className="radio_btn"></label>
                                                <div className="design_palette item item_4"></div>
                                                <div className="design_palette item item_5"></div>
                                                <div className="design_palette item item_6"></div>
                                            </section>
                                            <section className="design_palette-option">
                                                <input className="form_item js-select3" type="radio" value="2" name="btn"
                                                id="design3" />
                                                <label htmlFor="design3" className="radio_btn"></label>
                                                <div className="design_palette item item_7"></div>
                                                <div className="design_palette item item_8"></div>
                                                <div className="design_palette item item_9"></div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="fill-in_section js-collapsible">
                                <div className="js-collapsible-trigger">
                                    <legend className="legend"> <i className="far fa-keyboard legend_icon"></i>

                                        <h2 className="legend_title">Rellena</h2>
        <i className="fas fas fa-chevron-up legend_arrow"></i>

                                    </legend>
                                </div>
                                <div className="js-collapsible-content">
                                    <div className="fill-in_items">
                                        <div className="fill-in_item">
                                            <label className="fill-in_label" htmlFor="full_name">Nombre completo</label>
                                            <input className="js-name fill-in_input" id="full_name"
                                            type="text" name="name" placeholder="Hermione Granger" required />
                                        </div>
                                        <div className="fill-in_item">
                                            <label className="fill-in_label" htmlFor="job">Puesto</label>
                                            <input className="js-job fill-in_input" id="job" type="text"
                                            name="job" placeholder="Front-end developer" />
                                        </div>
                                        <div className="fill-in_item">
                                            <label className="fill-in_label" htmlFor="img-profile">Imagen de perfil</label>
                                            <div className="fill-in_buttonImg-wrapper">
                                                <input className="fill-in_button js__profile-trigger" id="img-profile" type="button"
                                                value="Añadir imagen" name="img-profile" />
                                                <input name="photo" type="file" id="img-selector" className="action_hiddenField js__profile-upload-btn"
                                                />
                                                <div className="img-profile_preview js__profile-preview"></div>
                                            </div>
                                        </div>
                                        <div className="fill-in_item">
                                            <label className="fill-in_label" htmlFor="phone">Teléfono</label>
                                            <input className="js-phone fill-in_input" id="phone" type="tel"
                                            minlength="9" name="phone" placeholder="+34 678334765" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                                            />
                                        </div>
                                        <div className="fill-in_item">
                                            <label className="fill-in_label" htmlFor="email">Email</label>
                                            <input className="js-email fill-in_input" id="email" type="email"
                                            name="email" placeholder="hermione-granger@gmail.com" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                                            />
                                        </div>
                                        <div className="fill-in_item">
                                            <label className="fill-in_label" htmlFor="linkedin">Linkedin</label>
                                            <input className="js-linkedin fill-in_input" id="linkedin"
                                            type="text" name="linkedin" placeholder="hermionegranger" />
                                        </div>
                                        <div className="fill-in_item">
                                            <label className="fill-in_label" htmlFor="github">Github</label>
                                            <input className="js-github fill-in_input" id="github" type="text"
                                            name="github" placeholder="hermione-granger" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="share-section js-collapsible">
                                <div className="js-collapsible-trigger">
                                    <legend className="legend"> <i className="legend_icon fas fa-share-alt"></i>

                                        <h2 className="legend_title">Comparte</h2>
        <i className="legend_arrow fas fa-chevron-up"></i>

                                    </legend>
                                </div>
                                <div className="js-collapsible-content">
                                    <div className="share_button">
                                        <button type="submit" className="share_button_img"> <i className="share_button_img_icon far fa-address-card"></i>
        Crear tarjeta</button>
                                    </div>
                                </div>
                            </section>
                            <div className="completed_content hidden">
                                <h3 className="completed_content_title">La tarjeta ha sido creada:</h3>
        <a href="#" className="completed_content_url" target="_self"></a>

                                <button type="submit"
                                className="completed_content_button"> <a href="" className="completed_content_button_twitter" target="blank" >
                    <i className="completed_content_button_icon fab fa-twitter"></i>
                    Compartir en twitter
                </a>

                                </button>
                            </div>
                        </section>
                    </main>
                </section>
                <Footer />
                </div>
                
                );

            }
        export default App;
