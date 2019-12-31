import React, { useState } from 'react';
import OptionSection from '../containers/OptionSection';
import logic from '../logic';
import filterArrayByChecked from '../utils/filter-array-by-checked';
import {
  SECTION_OPTIONS,
  SEARCH_OPTIONS,
  ROUTES,
  BUTTON_STYLE,
  CONTAINER_STYLE,
} from '../constants';
import Button from '../components/UI/Button';

const Home = () => {
  const [diet, setDiet] = useState('');
  const [plan, setPlan] = useState('');
  const [intolerances, setIntolerances] = useState([]);

  const handleInputChange = (event) => {
    const { DIET, PLAN, INTOLERANCES } = SEARCH_OPTIONS;
    const {
      target: { name, value, checked },
    } = event;

    switch (name) {
      case DIET:
        return setDiet(value);
      case PLAN:
        return setPlan(value);
      case INTOLERANCES: {
        const updatedArray = filterArrayByChecked(checked, intolerances, value);
        return setIntolerances(updatedArray);
      }
      default:
        return null;
    }
  };

  const handleCreateMealPlan = (event) => {
    event.preventDefault();
    const mealPlan = logic.getMealPlan(diet, plan, intolerances);
    logic.saveMealPlanOnSessionStorage(mealPlan);
    logic.redirect(ROUTES.MEALPLAN);
  };

  const getValue = (id) => {
    const { DIET, PLAN } = SEARCH_OPTIONS;
    if (id === DIET) return diet;
    if (id === PLAN) return plan;
    return intolerances;
  };

  return (
    <div className={CONTAINER_STYLE.HOME}>
      <form onSubmit={handleCreateMealPlan}>
        {SECTION_OPTIONS.map(
          ({
            id, title, sectionClass, options, containerClass,
          }) => (
            <OptionSection
              key={id}
              handleInputChange={handleInputChange}
              title={title}
              containerClass={containerClass}
              sectionClass={sectionClass}
              options={options}
              sectionValue={getValue(id)}
            />
          ),
        )}
        <Button
          buttonType={BUTTON_STYLE.CREATE.TYPE}
          buttonDivClass={BUTTON_STYLE.CREATE.DIV}
          buttonClass={BUTTON_STYLE.CREATE.CLASS}
          text={BUTTON_STYLE.CREATE.TEXT}
          onClick={handleCreateMealPlan}
        />
      </form>
    </div>
  );
};

export default Home;
