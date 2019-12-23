// TODO Import css
import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_MEALS_IN_A_DAY } from '../../data';
import Meal from '../Meal';

const Day = ({ dayName, meals }) => (
  <>
    <div className="mealplan-day">
      <div className="mealplan-day mealplan-day-name-container">
        <h4 className="mealplan-day-name">{dayName}</h4>
      </div>
      <div className="mealplan-day mealplan-day-meals-container" />
      {DEFAULT_MEALS_IN_A_DAY.map((defaultMeal) => (
        <div key={defaultMeal} className="mealplan-default-meal-container">
          <h2 className="mealplan-default-meal-title">{defaultMeal}</h2>
          {meals[defaultMeal].map((meal) => (
            <Meal key={meal.id} meal={meal} />
          ))}
        </div>
      ))}
    </div>
  </>
);

Day.propTypes = {
  dayName: PropTypes.string.isRequired,
  meals: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Day;