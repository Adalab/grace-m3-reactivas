import React from "react";
import "../stylesheets/scss/components/ShareButton.scss";
import "../stylesheets/scss/core/Variables.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Loader from 'react-loader-spinner'


function Share() {
  return (
    <section>
      <div className="completed_content hidden">
        <h3 className="completed_content_title">La tarjeta ha sido creada:</h3>
        <a href="#" className="completed_content_url" target="_self"></a>
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs

      />

        <button type="submit" className="completed_content_button">
          {" "}
          <a href="" className="completed_content_button_twitter" target="_blank">
            <i className="completed_content_button_icon fab fa-twitter"></i>
            Compartir en twitter
          </a>
        </button>
      </div>
      
    </section>
   
  );
}

export default Share;
