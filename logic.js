import Router from 'next/router';
import MOCKED_MEALPLAN from './mockData';

const logic = {
  getMealPlan(diet, plan, intolerances) {
    // TODO: Get mealplan data from brackend
    return MOCKED_MEALPLAN;
  },
  saveMealPlanOnSessionStorage(_mealPlan) {
    const mealPlan = JSON.stringify(_mealPlan);
    // TODO: Actually save data on sessionStorage
    sessionStorage.setItem('mealPlan', mealPlan);
  },
  redirect(to) {
    Router.push(to);
  },
};

export default logic;
