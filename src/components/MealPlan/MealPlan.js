import React from 'react';
import PropTypes from 'prop-types';
import { DAYS } from '../../../data';
import './MealPlan.css';
import MEALPLAN from '../../mockData';
import Day from '../Day';

const MealPlan = ({ name, title, type }) => (
  <div className="mealplan">
    <div className="mealplan mealplan-info">
      <h1 className="mealplan mealplan-title">{title}</h1>
      <p className="mealplan mealplan-name">{name}</p>
      <p className="mealplan mealplan-type">{type}</p>
    </div>
    <div className="mealplan mealplan-meals-container">
      {
        DAYS.map((day) => {
          const meals = MEALPLAN[day];
          return (
            <Day key={day} dayName={day} meals={meals} />
          );
        })
        }
    </div>
  </div>
);

MealPlan.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};

MealPlan.defaultProps = {
  name: '',
  title: 'MEALPLAN',
  type: 'DEFAULT',
};

export default MealPlan;
