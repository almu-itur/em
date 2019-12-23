import React from 'react';
import PropTypes from 'prop-types';
import Option from '../../components/Option';

const OptionSection = ({
  title,
  sectionClass,
  options,
  handleInputChange,
}) => (
  <>
    <h3 className="home-title">{title}</h3>
    <div className={sectionClass}>
      {options.map(({
        id, imgFile, alt, imgClass, inputType, name,
      }) => (
        <Option
          key={id}
          id={id}
          imgFile={imgFile}
          alt={alt}
          imgClass={imgClass}
          inputType={inputType}
          name={name}
          handleInputChange={handleInputChange}
        />
      ))}
    </div>
  </>
);

OptionSection.propTypes = {
  title: PropTypes.string.isRequired,
  sectionClass: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default OptionSection;
