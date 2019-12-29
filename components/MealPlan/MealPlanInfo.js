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
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MealPlanInfo;
