import React from 'react';
import PropTypes from 'prop-types';

const MealPlanInfo = ({ name, title, type }) => (
  <div className="mealplan mealplan-info">
    <h1 className="mealplan mealplan-title">{title}</h1>
    <p className="mealplan mealplan-name">{name}</p>
    <p className="mealplan mealplan-type">{type}</p>
  </div>
);

MealPlanInfo.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};

MealPlanInfo.defaultProps = {
  name: 'no name saved',
  title: 'mealplan',
  type: 'default',
};

export default MealPlanInfo;
