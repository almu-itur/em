import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonType,
  buttonDivClass,
  buttonClass,
  text,
  onClick,
}) => (
  <div className={buttonDivClass}>
    <button onClick={onClick} className={buttonClass} type={buttonType}>{text}</button>
  </div>

);

Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  buttonDivClass: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
