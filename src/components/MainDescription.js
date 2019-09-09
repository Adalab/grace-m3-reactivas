import React from "react";

const MainDescription = props => {
  return (
    <div>
      <img className="main_img" src={props.foto} alt={props.mainTitle} />
      <div className="main_description">
        <h1 className="main_title">{props.mainTitle}</h1>
        <p className="main_text">{props.mainText}</p>
      </div>
    </div>
  );
};

// Ana: he tenido que introducir un div para poder usar el componente. Cuando hagamos le scss, hay que ponerle una clase para centrar el texto.

export default MainDescription;
