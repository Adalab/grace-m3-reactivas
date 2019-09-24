import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  const { id, label, classInput, type, name, placeholder, minLength, pattern, action, value } = props;
  return (
    <div className="fill-in_item">
      <label className="fill-in_label" htmlFor={id}>
        {label}
      </label>
      <input className={`fill-in_input ${classInput}`} id={id} type={type} name={name} placeholder={placeholder} minLength={minLength} pattern={pattern} onChange={action} value={value} required />
    </div>
  );
};

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
