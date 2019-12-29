// TODO Split into Meal and Bar with options
// Consider dropdown button for options
// Convert into HIC
// Add fav style
// Change heart for star and place on upper right corner
// Add functionalites: duplicate meal, generate similar option, remove meal from favs
// Use classnames to create classes
// Refactor CSS

import React from 'react';
import PropTypes from 'prop-types';
import './Meal.scss';

const MealCard = ({
  meal,
  // searchParams,
  // position,
  // onDragStart,
  // addMealToFavourites,
  // addMealToBanList,
  // removeMealFromCurrentMealPlan,
}) => {
  console.log('Meal received', meal);
  // const { meal: { name, id, isFavourite } } = meal;
  return (
  // <div className={`meal meal${isFavourite ? ' favourite' : ''}`}>
    <div className="meal">
      {/* draggable onDragStart={onDragStart} */}
      {/* <p className="meal-font">{name}</p> */}
      <div className="options-meal">
        {/* <button
          type="button"
          onClick={() => addMealToFavourites(id)}
        >
          <i id="meal-icon" className="fas fa-heart" />
        </button>
        <button
          type="button"
          onClick={() => removeMealFromCurrentMealPlan(id, position)}
        >
          <i id="meal-icon" className="fas fa-times" />
        </button>
        <button
          type="button"
          onClick={() => addMealToBanList(id)}
        >
          <i id="meal-icon" className="fas fa-ban" />
        </button> */}
      </div>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
  // searchParams: PropTypes.objectOf(PropTypes.object).isRequired,
  // position: PropTypes.objectOf(PropTypes.string).isRequired,
  // onDragStart: PropTypes.func.isRequired,
  // addMealToFavourites: PropTypes.func.isRequired,
  // removeMealFromCurrentMealPlan: PropTypes.func.isRequired,
  // addMealToBanList: PropTypes.func.isRequired,
};

export default MealCard;
