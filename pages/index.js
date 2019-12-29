import React, { useState } from 'react';
import OptionSection from '../containers/OptionSection';
import logic from '../logic';
import filterArrayByChecked from '../utils/filter-array-by-checked';
import { OPTION_SECTIONS } from '../constants';
import Button from '../components/UI/Button';

const Home = () => {
  const [diet, setDiet] = useState('');
  const [plan, setPlan] = useState('');
  const [intolerances, setIntolerances] = useState([]);

  const handleInputChange = (event) => {
    const {
      target: { name, value, checked },
    } = event;

    switch (name) {
      case 'diet':
        return setDiet(value);
      case 'plan':
        return setPlan(value);
      case 'intolerances': {
        const updatedArray = filterArrayByChecked(checked, intolerances, value);
        return setIntolerances(updatedArray);
      }
      default:
        return null;
    }
  };

  const generateMealPlan = (event) => {
    event.preventDefault();
    const mealPlan = logic.getMealPlan(diet, plan, intolerances);
    logic.saveMealPlanOnSessionStorage(mealPlan);
    // logic.goToPage('/mealplan');
  };

  return (
    <div className="home">
      <form onSubmit={generateMealPlan}>
        {OPTION_SECTIONS.map(({
          id, title, sectionClass, options,
        }) => (
          <OptionSection
            key={id}
            handleInputChange={handleInputChange}
            title={title}
            sectionClass={sectionClass}
            options={options}
          />
        ))}
        <Button
          buttonType="submit"
          buttonDivClass="home-create-button-container"
          buttonClass="home-create-button"
          text="CREATE MEALPLAN"
          onClick={generateMealPlan}
        />
      </form>
    </div>
  );
};

export default Home;
