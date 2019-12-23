import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './Home';
import MealPlan from './MealPlan';
import { OPTION_SECTIONS } from '../../data';
import '../../css/styles.css';

const App = () => (
  <div>
    {/* <Route exact path="/" render={() => <Home optionSections={OPTION_SECTIONS} />} /> */}
    <Route exact path="/" render={() => <MealPlan />} />
  </div>
);

export default withRouter(App);
