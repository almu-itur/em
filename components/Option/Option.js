import React from 'react';
import PropTypes from 'prop-types';
import { IMAGES_PATH, ACTIVE_MODIFIER } from '../../constants';

const Option = ({
  imgFile,
  alt,
  divImgClass,
  imgClass,
  inputType,
  name,
  handleInputChange,
  id,
  isSelected,
}) => (
  <label htmlFor={alt}>
    <input
      type={inputType}
      name={name}
      id={id}
      value={id}
      onChange={handleInputChange}
    />
    <div className={divImgClass}>
      <img
        className={isSelected ? `${imgClass}${ACTIVE_MODIFIER}` : imgClass}
        src={`${IMAGES_PATH}${imgFile}`}
        alt={alt}
      />
    </div>
  </label>
);

Option.propTypes = {
  imgFile: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgClass: PropTypes.string.isRequired,
  divImgClass: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Option;
