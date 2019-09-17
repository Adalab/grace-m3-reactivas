import React from "react";
import "../stylesheets/scss/components/Collapsibles.scss";

class Collapsibles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    const arrowStyling = this.state.open ? "fa-chevron-up" : "fa-chevron-down";
    return (
      <section>
        <div onClick={e => this.togglePanel(e)} className="legend">
          <i className={this.props.icon} />
          <h2 className="legend_title">{this.props.title}</h2>
          <i className={`fas ${arrowStyling} legend_arrow`} />
        </div>
        {this.state.open ? <div>{this.props.children}</div> : null}
      </section>
    );
  }
}

export default Collapsibles;
