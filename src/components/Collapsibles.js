// import React from "react";
// import "../stylesheets/scss/main.scss";

// class Collapsibles extends React.Component {

//     toggleCollapsible (ev) {
//         if (this.state.mainClass === 'open') {
//             this.state.mainClass = ''
//         } else {
//             this.state.mainClass = 'open';
//         }
//     }

//     render() {
//         const showHeader = this.props.showHeader === true ? true : false;

//         return (
//             <div className={`js-collapsible-trigger ${this.state.mainClass}`}>
//                 <legend className="legend" onClick={this.toggleCollapsible}>
//                     <i className={this.props.icon} />
//                     <h2 className="legend_title">{this.props.title}</h2>
//                     <i className={this.props.arrow} />
//                 </legend>
//                 <div className="content">
//                     {this.props.children}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Collapsibles;

////

import React from "react";
import "../stylesheets/scss/main.scss";

const Collapsibles = props => {
  return (
    <div className="js-collapsible-trigger">
      <legend className="legend">
        <i className={props.icon} />
        <h2 className="legend_title">{props.title}</h2>
        <i className={props.arrow} />
      </legend>
      {props.children}
    </div>
  );
};

export default Collapsibles;

// Las funciones no tienen This, y es un dummie y nos pasa los datos como argumento, no tienen estado, no tiene ciclo de vida
