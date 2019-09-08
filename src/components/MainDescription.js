import React from "react";

class MainDescription extends React.Component {
  render() {
    return (
      <div>
        <img className="main_img" src={this.props.foto} alt={this.props.mainTitle} />
        <div className="main_description">
          <h1 className="main_title">{this.props.mainTitle}</h1>
          <p className="main_text">{this.props.mainText}</p>
        </div>
      </div>
    );
  }
}

// Ana: he tenido que introducir un div para poder usar el componente. Cuando hagamos le scss, hay que ponerle una clase para centrar el texto.

export default MainDescription;
