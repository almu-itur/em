import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MealPlanInfo, MealPlanMobile, MealPlanDesktop } from '.';
import { CONTAINER_STYLE } from '../../constants';
import './MealPlan.scss';

const MealPlan = (props) => {
  const { name, title, type } = props;
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 300) setIsDesktop(false);
  }, []);

  // TODO: Either not allow access /mealplan when there is no one, or display a message

  return (
    <div className={CONTAINER_STYLE.MEALPLAN}>
      <MealPlanInfo name={name} title={title} type={type} />
      {isDesktop ? <MealPlanDesktop /> : <MealPlanMobile />}
    </div>
  );
};

MealPlan.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};

MealPlan.defaultProps = {
  name: 'no name',
  title: 'mealplan',
  type: 'no type',
};

export default MealPlan;
