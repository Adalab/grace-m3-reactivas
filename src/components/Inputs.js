import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  render() {
    return (
      <div className="fill-in_item">
        <label className="fill-in_label" htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input className={`fill-in_input ${this.props.classInput}`} id={this.props.id} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} minLength={this.props.minLength} pattern={this.props.pattern} onChange={this.props.action} value={this.props.value} required />
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired.isRequired,
  label: PropTypes.string.isRequired,
  classInput: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  minLength: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
