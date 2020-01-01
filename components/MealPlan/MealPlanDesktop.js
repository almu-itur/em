import React from 'react';
import MealPlanSection from './MealPlanSection';
import { DEFAULT_MEALS_IN_A_DAY, DAYS } from '../../constants';

const MealPlanDesktop = () => {
  const defaultMeals = Object.keys(DEFAULT_MEALS_IN_A_DAY);

  return (
    <>
      <div className="meal-plan-meals-container">
        <div className="meal-plan-days-container">
          {DAYS.map((day) => (
            <h4 key={day} className="meal-plan-day-title">
              {day}
            </h4>
          ))}
        </div>
      </div>
      {defaultMeals.map((defaultMeal, index) => (
        <MealPlanSection
          key={`${DAYS[index]}${defaultMeal}`}
          sectionName={defaultMeal}
        />
      ))}
    </>
  );
};
export default MealPlanDesktop;
