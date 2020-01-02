import React from 'react';
import PropTypes from 'prop-types';
import Option from '../../components/Option';
import { OPTIONS_TITLE_CLASS } from '../../constants';

const OptionSection = ({
  title,
  sectionClass,
  options,
  handleInputChange,
  containerClass,
  sectionValue,
}) => {
  const checkIfOptionIsSelected = (id) => sectionValue.includes(id);
  return (
    <>
      <div className={containerClass}>
        <h3 className={OPTIONS_TITLE_CLASS}>{title}</h3>
        <div className={sectionClass}>
          {options.map(
            ({
              id, imgFile, alt, imgClass, inputType, name, divImgClass,
            }) => (
              <Option
                isSelected={checkIfOptionIsSelected(id)}
                key={id}
                id={id}
                imgFile={imgFile}
                alt={alt}
                imgClass={imgClass}
                divImgClass={divImgClass}
                inputType={inputType}
                name={name}
                handleInputChange={handleInputChange}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
};

OptionSection.propTypes = {
  title: PropTypes.string.isRequired,
  containerClass: PropTypes.string.isRequired,
  sectionClass: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  sectionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    .isRequired,
};

export default OptionSection;
