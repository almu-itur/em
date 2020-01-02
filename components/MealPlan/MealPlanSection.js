
import React from 'react';
import PropTypes from 'prop-types';
// import MealCard from '../MealCard';
import { DAYS } from '../../constants';
import MOCKED_MEALPLAN from '../../mockData';

const MealPlanSection = ({ sectionName }) => (
  <div className="meal-plan-meals-container">
    {DAYS.map((day) => (
      <div key={`column${sectionName}${day}`} className="column">
        <h2 className="day-meal">{sectionName}</h2>
        {MOCKED_MEALPLAN[day][sectionName].map(({ searchParams, meal }) => (
          <div key={meal.id} className="meal" draggable="true">
            <p className="meal-font">{meal.name}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
);

MealPlanSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default MealPlanSection;
