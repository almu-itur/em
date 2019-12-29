import React from 'react';
import { DAYS } from '../../constants';
import MOCKED_MEALPLAN from '../../mockData';
import Day from '../Day';

const MealPlanMobile = () => (
  <div className="mealplan mealplan-meals-container">
    {
        DAYS.map((day) => {
          const meals = MOCKED_MEALPLAN[day];
          return (
            <Day key={day} dayName={day} meals={meals} />
          );
        })
    }
  </div>
);

export default MealPlanMobile;
