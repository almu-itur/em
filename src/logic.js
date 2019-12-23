import MOCKED_MEALPLAN from './mockData';

const logic = {
  _mealPlan: sessionStorage.getItem('mealplan') || null,

  getMealPlan(diet, plan, intolerances) {
    console.log(diet, plan, intolerances);
    console.log(MOCKED_MEALPLAN);
    return MOCKED_MEALPLAN;
  },
  saveMealPlanOnSessionStorage(_mealPlan) {
    const mealPlan = JSON.stringify(_mealPlan);
    sessionStorage.setItem('mealPlan', mealPlan);
  },
};

export default logic;
