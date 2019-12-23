import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OptionSection from '../../containers/OptionSection';
import logic from '../../logic';
import filterArrayByChecked from '../../utils/filter-array-by-checked';
import Button from '../UI/Button';

const Home = ({ optionSections }) => {
  const [diet, setDiet] = useState('');
  const [plan, setPlan] = useState('');
  const [intolerances, setIntolerances] = useState([]);

  const handleInputChange = (event) => {
    const { target: { name, value, checked } } = event;

    switch (name) {
      case 'diet': return setDiet(value);
      case 'plan': return setPlan(value);
      case 'intolerances': {
        const updatedArray = filterArrayByChecked(checked, intolerances, value);
        return setIntolerances(updatedArray);
      }
      default: return null;
    }
  };

  const generateMealPlan = (event) => {
    event.preventDefault();
    const mealPlan = logic.getMealPlan(diet, plan, intolerances);
    logic.saveMealPlanOnSessionStorage(mealPlan);
    logic.goToPage('/mealplan');
  };

  return (
    <div className="home">
      <form onSubmit={generateMealPlan}>
        {optionSections.map(({
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

Home.propTypes = {
  optionSections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
