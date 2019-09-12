import React from 'react';
import logoAdalab from '../images/logo-adalab-80px.png';
import awesomeProfilePic from '../images/tarjetas-molonas.svg';
import '../stylesheets/scss/main.scss';
import InputContainer from './InputContainer.js';
// import MainButton from "./MainButton";
import ResetButton from './ResetButton';
import ShareButton from './ShareButton';
import Collapsibles from './Collapsibles.js';
// import MainDescription from "./MainDescription";
// import SquareFontawesomeIcons from "./SquareFontawesomeIcons.js";
import PalettesContainer from './PalettesContainer.js';

//function App() {
//   return (
//     <main className="main">
//       <div className="main_content">
//         <MainDescription foto={awesomeProfilePic} mainTitle="Crea tu tarjeta de visita" mainText="Crea mejores contactos profesionales de forma fácil y cómoda" />
//         <SquareFontawesomeIcons />
//         <MainButton />
//       </div>
//       <div className="footer">
//         <small className="footer_small"> Awesome profile-cards @ Sense.JS 2019</small>
//         <a className="footer_link" href="http://www.adalab.es" target="_blank">
//           <img className="footer_img" src={logoAdalab} alt="logo Adalab" />
//         </a>
//       </div>
//     </main>
//   );
// }

function App() {
	return (
		<div>
			<div class="header">
				<div class="header_container">
					{' '}
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
								<ResetButton icon="far fa-trash-alt trash_icon" name="Reset" />
								<div class="card js-card">
									<div class="card_header">
										<h1 class="js-name card_name" data-placeholder="Nombre Apellido">
											nombre apellido
										</h1>

										<p class="js-job card_job" data-placeholder="Front-end developer">
											Front-end developer
										</p>
									</div>
									<div class="card_img js__profile-image"></div>
									<ul class="card_footer_list">
										<li class="card_footer_item">
											{' '}
											<a class="js-phone card_link" href="" target="_blank">
												<i class="fas fa-mobile-alt"></i>
											</a>
										</li>
										<li class="card_footer_item">
											{' '}
											<a class="js-email card_link" href="" data-prefix="mailto:" target="_blank">
												<i class="far fa-envelope"></i>
											</a>
										</li>
										<li class="card_footer_item">
											{' '}
											<a class="js-linkedin card_link" href="" data-placeholder="" data-prefix="https://www.linkedin.com/in/" target="_blank">
												<i class="fab fa-linkedin-in"></i>
											</a>
										</li>
										<li class="card_footer_item">
											{' '}
											<a class="js-github card_link" href="" data-placeholder="" data-prefix="https://github.com/" target="_blank">
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
							<Collapsibles icon="legend_icon far fa-object-ungroup" title="Diseña" arrow="fas fas fa-chevron-up legend_arrow">
								<PalettesContainer></PalettesContainer>
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
										{' '}
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
				{' '}
				<small class="footer_small"> Awesome profile-cards @ Sense.JS 2019</small>
				<a class="footer_link" href="http://www.adalab.es" target="_blank">
					<img class="footer_img" src={logoAdalab} />
				</a>
			</footer>
		</div>
	);
}
export default App;
