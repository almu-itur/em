import React from 'react';
import PropTypes from 'prop-types';

const Option = ({
  imgFile,
  alt,
  imgClass,
  inputType,
  name,
  handleInputChange,
  id,
}) => (
  <label htmlFor={alt}>
    <input type={inputType} name={name} id={id} value={id} onChange={handleInputChange} />
    <img className={imgClass} src={`../../../images/${imgFile}`} alt={alt} />
  </label>
);

Option.propTypes = {
  imgFile: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgClass: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Option;
