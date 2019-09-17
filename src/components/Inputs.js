/* eslint-disable no-unused-expressions */
import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div className="fill-in_item">
        <label className="fill-in_label" htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input
          className={`fill-in_input ${this.props.classInput}`}
          id={this.props.id}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          minLength={this.props.minLength}
          pattern={this.props.pattern}
          onChange={this.props.action}
          required
        />
      </div>
    );
  }
}

export default Input;
