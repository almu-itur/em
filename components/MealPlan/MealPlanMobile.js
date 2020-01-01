import React from 'react';
import { DAYS } from '../../constants';
import MOCKED_MEALPLAN from '../../mockData';
import Day from '../Day';

const MealPlanMobile = () => (
  <div className="mealplan mealplan-meals-container">
    {
        DAYS.map((day) => {
          const mealsOnADay = MOCKED_MEALPLAN[day];
          return (
            <Day key={day} dayName={day} mealsOnADay={mealsOnADay} />
          );
        })
    }
  </div>
);

export default MealPlanMobile;
